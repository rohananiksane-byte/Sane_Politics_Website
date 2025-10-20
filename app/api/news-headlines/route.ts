import { NextResponse } from "next/server"

export async function GET() {
  try {
    const apiKey = process.env.NEWS_API_KEY

    if (!apiKey) {
      console.error("NEWS_API_KEY is not configured")
      return NextResponse.json({ error: "News API key not configured" }, { status: 500 })
    }

    const sources = [
      "bbc-news",
      "the-wall-street-journal",
      "the-new-york-times",
      "reuters",
      "cnn",
      "al-jazeera-english",
    ].join(",")

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${sources}&pageSize=50&apiKey=${apiKey}`,
      {
        next: { revalidate: 3600 },
      },
    )

    if (!response.ok) {
      throw new Error(`NewsAPI returned ${response.status}`)
    }

    const data = await response.json()

    const sourceNameMap: Record<string, string> = {
      "bbc-news": "BBC",
      "the-wall-street-journal": "Wall Street Journal",
      "the-new-york-times": "New York Times",
      reuters: "Reuters",
      cnn: "CNN",
      "al-jazeera-english": "Al Jazeera",
    }

    const isRelevantNews = (article: any): boolean => {
      const text = `${article.title} ${article.description || ""}`.toLowerCase()

      // Keywords to include: politics, economics, business, war, research, international relations
      const includeKeywords = [
        "politic",
        "economy",
        "economic",
        "business",
        "trade",
        "war",
        "conflict",
        "military",
        "research",
        "study",
        "international",
        "diplomacy",
        "government",
        "policy",
        "election",
        "parliament",
        "congress",
        "senate",
        "president",
        "minister",
        "prime minister",
        "chancellor",
        "gdp",
        "inflation",
        "market",
        "finance",
        "banking",
        "geopolitic",
        "treaty",
        "sanction",
        "defense",
        "defence",
        "security",
        "terrorism",
        "crisis",
        "refugee",
        "migration",
        "climate change",
        "energy",
        "oil",
        "gas",
        "renewable",
        "carbon",
        "emission",
        "healthcare",
        "pandemic",
        "vaccine",
        "public health",
        "regulation",
        "law",
        "court",
        "supreme court",
        "justice",
        "legislation",
        "bill",
        "vote",
        "referendum",
        "coalition",
        "opposition",
        "party",
        "democrat",
        "republican",
        "liberal",
        "conservative",
        "labour",
        "budget",
        "tax",
        "fiscal",
        "monetary",
        "central bank",
        "fed",
        "interest rate",
        "unemployment",
        "jobs",
        "labor",
        "labour",
        "strike",
        "union",
        "protest",
        "demonstration",
      ]

      // Keywords to exclude: entertainment, sports, lifestyle, celebrity
      const excludeKeywords = [
        "celebrity",
        "actor",
        "actress",
        "singer",
        "musician",
        "band",
        "album",
        "concert",
        "movie",
        "film",
        "oscar",
        "emmy",
        "grammy",
        "award show",
        "red carpet",
        "sports",
        "football",
        "basketball",
        "soccer",
        "baseball",
        "tennis",
        "golf",
        "nfl",
        "nba",
        "premier league",
        "champions league",
        "world cup",
        "olympics",
        "athlete",
        "player",
        "coach",
        "fashion",
        "style",
        "designer",
        "runway",
        "model",
        "beauty",
        "makeup",
        "recipe",
        "cooking",
        "chef",
        "restaurant",
        "food",
        "cuisine",
        "travel",
        "tourism",
        "vacation",
        "holiday",
        "destination",
        "royal family",
        "prince",
        "princess",
        "duke",
        "duchess",
        "wedding",
        "baby",
        "reality tv",
        "tv show",
        "series",
        "streaming",
        "netflix",
        "disney",
      ]

      // Check if article contains excluded keywords
      const hasExcludedContent = excludeKeywords.some((keyword) => text.includes(keyword))
      if (hasExcludedContent) return false

      // Check if article contains included keywords
      const hasIncludedContent = includeKeywords.some((keyword) => text.includes(keyword))
      return hasIncludedContent
    }

    const determineRegion = (article: any): string => {
      const text = `${article.title} ${article.description || ""}`.toLowerCase()

      if (text.match(/china|japan|korea|india|asia|beijing|tokyo|delhi/i)) return "Asia"
      if (text.match(/europe|uk|france|germany|britain|london|paris|berlin|eu\b/i)) return "Europe"
      if (text.match(/middle east|israel|iran|saudi|syria|iraq|gaza|lebanon/i)) return "Middle East"
      if (text.match(/africa|nigeria|kenya|south africa|egypt/i)) return "Africa"
      if (text.match(/brazil|argentina|mexico|latin america|south america/i)) return "South America"
      if (text.match(/australia|new zealand|pacific/i)) return "Oceania"

      return "North America"
    }

    const headlines = data.articles
      .filter((article: any) => article.urlToImage) // Only include articles with images
      .filter(isRelevantNews) // Filter for relevant news categories only
      .slice(0, 10) // Limit to 10 articles
      .map((article: any) => ({
        title: article.title,
        url: article.url,
        source: sourceNameMap[article.source.id] || article.source.name,
        publishedAt: article.publishedAt,
        description: article.description || article.content?.substring(0, 150) || "",
        urlToImage: article.urlToImage,
        region: determineRegion(article),
      }))

    return NextResponse.json(headlines)
  } catch (error) {
    console.error("Error fetching news headlines:", error)
    return NextResponse.json({ error: "Failed to fetch news headlines" }, { status: 500 })
  }
}
