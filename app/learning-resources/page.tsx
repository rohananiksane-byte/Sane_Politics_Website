import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Podcast, BookOpen, Award, ExternalLink, Globe } from "lucide-react"
import Link from "next/link"

const podcasts = [
  {
    title: "At Issue",
    description: "CBC's flagship political panel featuring expert analysis of Canadian politics and current affairs",
    link: "https://www.cbc.ca/listen/cbc-podcasts/170-cbc-news-at-issue",
    image: "/podcast-at-issue.jpg",
  },
  {
    title: "How I Built This with Guy Raz",
    description: "Inspiring stories from entrepreneurs and innovators who built the world's most successful companies",
    link: "https://www.npr.org/series/490248027/how-i-built-this",
    image: "/podcast-how-i-built-this.jpg",
  },
  {
    title: "The Munk Debates Podcast",
    description: "World-class debates on major policy issues featuring leading thinkers and global experts",
    link: "https://munkdebates.com/listen/",
    image: "/podcast-munk-debates.jpg",
  },
  {
    title: "The Ezra Klein Show",
    description: "In-depth conversations exploring politics, policy, culture, and the ideas shaping our world",
    link: "https://www.nytimes.com/column/ezra-klein-podcast",
    image: "/podcast-ezra-klein.jpg",
  },
]

const regionalNewsOrganizations = [
  {
    region: "North America",
    organizations: [
      {
        name: "The New York Times",
        description: "Comprehensive US and international coverage",
        link: "https://www.nytimes.com",
      },
      {
        name: "The Wall Street Journal",
        description: "Business and financial news analysis",
        link: "https://www.wsj.com",
      },
      { name: "CBC News", description: "Canada's national broadcaster", link: "https://www.cbc.ca/news" },
      {
        name: "The Globe and Mail",
        description: "Canadian national newspaper",
        link: "https://www.theglobeandmail.com",
      },
    ],
  },
  {
    region: "Europe",
    organizations: [
      { name: "BBC News", description: "UK and international news coverage", link: "https://www.bbc.com/news" },
      {
        name: "The Guardian",
        description: "Progressive UK newspaper with global reach",
        link: "https://www.theguardian.com",
      },
      { name: "Deutsche Welle", description: "German international broadcaster", link: "https://www.dw.com" },
      { name: "Le Monde", description: "France's leading newspaper", link: "https://www.lemonde.fr" },
    ],
  },
  {
    region: "Asia-Pacific",
    organizations: [
      {
        name: "The Straits Times",
        description: "Singapore's leading English newspaper",
        link: "https://www.straitstimes.com",
      },
      {
        name: "The Japan Times",
        description: "English-language news from Japan",
        link: "https://www.japantimes.co.jp",
      },
      {
        name: "South China Morning Post",
        description: "Hong Kong-based regional coverage",
        link: "https://www.scmp.com",
      },
      {
        name: "The Australian",
        description: "Australia's national newspaper",
        link: "https://www.theaustralian.com.au",
      },
    ],
  },
  {
    region: "Middle East & Africa",
    organizations: [
      {
        name: "Al Jazeera English",
        description: "Middle Eastern perspective on global news",
        link: "https://www.aljazeera.com",
      },
      { name: "The Times of Israel", description: "Israeli news and analysis", link: "https://www.timesofisrael.com" },
      {
        name: "Daily Maverick",
        description: "South African investigative journalism",
        link: "https://www.dailymaverick.co.za",
      },
      {
        name: "The Africa Report",
        description: "Pan-African news and analysis",
        link: "https://www.theafricareport.com",
      },
    ],
  },
  {
    region: "Latin America",
    organizations: [
      { name: "El País", description: "Spanish-language international coverage", link: "https://elpais.com" },
      { name: "Folha de S.Paulo", description: "Brazil's leading newspaper", link: "https://www.folha.uol.com.br" },
      { name: "Buenos Aires Times", description: "English news from Argentina", link: "https://www.batimes.com.ar" },
      {
        name: "Americas Quarterly",
        description: "Policy analysis across the Americas",
        link: "https://www.americasquarterly.org",
      },
    ],
  },
]

const academicResources = [
  {
    topic: "Russia-Ukraine War",
    overview:
      "Comprehensive analysis of the ongoing conflict, its historical context, geopolitical implications, and humanitarian impact on the region and global security.",
    resources: [
      {
        title: "Russia's War in Ukraine: The Next Chapter",
        type: "Analysis",
        link: "https://www.csis.org/analysis/russias-war-ukraine-next-chapter",
      },
      {
        title: "The Consequences of the Russia-Ukraine War",
        type: "Research Report",
        link: "https://www.rand.org/pubs/research_reports/RRA3141-1.html",
      },
      {
        title: "The Russia–Ukraine War and Reactions from the Global South",
        type: "Academic Journal",
        link: "https://academic.oup.com/cjip/article/17/4/449/7769649",
      },
      {
        title: "Russia's war in Ukraine: Expert Analysis & Commentary",
        type: "Expert Insights",
        link: "https://insights.taylorandfrancis.com/ukraine/",
      },
    ],
  },
  {
    topic: "US Government Shutdown",
    overview:
      "Understanding the causes, consequences, and political dynamics of government shutdowns, including their impact on federal services, the economy, and public policy.",
    resources: [
      {
        title: "This US government shutdown is different: what it means for science",
        type: "Nature Article",
        link: "https://www.nature.com/articles/d41586-025-03192-4",
      },
      {
        title: "Researchers, Colleges Face Federal Shutdown Impacts",
        type: "Analysis",
        link: "https://www.insidehighered.com/news/faculty-issues/research/2025/10/14/researchers-colleges-face-federal-shutdown-impacts",
      },
      {
        title: "As U.S. shutdown drags on, 'it's just one blow after another'",
        type: "Science Magazine",
        link: "https://www.science.org/content/article/u-s-shutdown-drags-it-s-just-one-blow-after-another",
      },
      {
        title: "Likelihood, potential impacts of federal shutdown",
        type: "Expert Commentary",
        link: "https://news.umich.edu/likelihood-potential-impacts-of-federal-shutdown-u-m-experts-can-comment/",
      },
    ],
  },
  {
    topic: "Israel-Gaza Peace Deal",
    overview:
      "Analysis of peace negotiations, ceasefire frameworks, and legal considerations surrounding the Israeli-Palestinian conflict, including international law, humanitarian concerns, and pathways to lasting peace.",
    resources: [
      {
        title: "What could the Israel-Gaza deal mean for the Middle East?",
        type: "Policy Analysis",
        link: "https://www.brookings.edu/articles/what-could-the-israel-gaza-deal-mean-for-the-middle-east/",
      },
      {
        title: "A Guide to Trump's Twenty-Point Gaza Peace Deal",
        type: "Policy Guide",
        link: "https://www.cfr.org/article/guide-trumps-twenty-point-gaza-peace-deal",
      },
      {
        title: "What Comes Next for Israel-Hamas Ceasefire?",
        type: "Analysis",
        link: "https://www.csis.org/analysis/what-comes-next-israel-hamas-ceasefire",
      },
      {
        title: 'The "Yes, But" Problem With the Gaza Peace Plan',
        type: "Commentary",
        link: "https://carnegieendowment.org/emissary/2025/10/gaza-peace-plan-implementation?lang=en",
      },
    ],
  },
  {
    topic: "Trump Tariffs & Trade Policy",
    overview:
      "Analysis of tariff policies, trade wars, and their economic impacts on industries, international relations, and global supply chains in the context of protectionist trade strategies.",
    resources: [
      {
        title: "Trump's Tariffs and the Changing Global Order",
        type: "Research Paper",
        link: "https://www.researchgate.net/publication/396405691_Trump%27s_Tariffs_and_the_Changing_Global_Order",
      },
      {
        title: "The Tariff Policy of the Trump 2.0 Administration",
        type: "Policy Paper",
        link: "https://cebri.org/revista/en/artigo/217/the-tariff-policy-of-the-trump-20-administration",
      },
      {
        title: "Trump Tariffs: The Economic Impact of the Trump Trade War",
        type: "Economic Analysis",
        link: "https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/",
      },
      {
        title: "Trump 2.0 Tariffs: What Cost for the World Economy?",
        type: "Research Report",
        link: "https://www.cepii.fr/PDF_PUB/pb/2024/pb2024-49.pdf",
      },
    ],
  },
]

const educatorOfWeek = {
  name: "Andrew Chang",
  title: "Host and Senior Correspondent",
  institution: "CBC News",
  specialty: "Explainer Journalism & News Analysis",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4byumKWs1FqRNUNU67tzHeHPDtRvt2.png",
  bio: "Andrew Chang hosts 'About That,' CBC's award-winning explainer series that breaks down complex news stories and current events. With clear, engaging storytelling, he helps Canadians understand the issues that matter most.",
  resources: [
    'YouTube Series: "About That" - Weekly explainers on current events',
    "CBC News National - Evening news coverage and analysis",
    "Special Reports: In-depth investigations and documentaries",
  ],
  link: "https://www.youtube.com/playlist?list=PLeyJPHbRnGaZeajS8uAtr8cyc19TYBZZ9",
}

export default function LearningResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Educational Resources</h1>
          <p className="text-xl text-center text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            Curated sources to deepen your understanding of political issues
          </p>
        </div>
      </section>

      {/* Educator of the Week */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Educator of the Week</h2>
          </div>
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 relative overflow-hidden rounded-lg flex-shrink-0">
                  <img
                    src={educatorOfWeek.image || "/placeholder.svg?height=192&width=192&query=Andrew Chang CBC"}
                    alt={educatorOfWeek.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl text-primary mb-2">{educatorOfWeek.name}</CardTitle>
                  <CardDescription className="text-base mb-2">
                    {educatorOfWeek.title} • {educatorOfWeek.institution}
                  </CardDescription>
                  <Badge className="bg-accent text-accent-foreground mb-4">{educatorOfWeek.specialty}</Badge>
                  <p className="text-muted-foreground">{educatorOfWeek.bio}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mb-3 text-foreground">Featured Resources:</h4>
              <ul className="space-y-2 mb-6">
                {educatorOfWeek.resources.map((resource, idx) => (
                  <li key={idx} className="flex items-start text-muted-foreground">
                    <span className="text-primary mr-2">•</span>
                    {resource}
                  </li>
                ))}
              </ul>
              <div className="flex">
                <Link href={educatorOfWeek.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-primary hover:bg-accent">
                    Watch About That
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Podcasts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Podcast className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Recommended Podcasts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {podcasts.map((podcast, idx) => (
              <Card key={idx} className="border-primary/20 hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={
                      podcast.image ||
                      `/placeholder.svg?height=192&width=384&query=${encodeURIComponent(podcast.title) || "/placeholder.svg"}`
                    }
                    alt={podcast.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="flex-1">
                  <CardTitle className="text-lg text-primary text-balance">{podcast.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-pretty min-h-[4.5rem]">
                    {podcast.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={podcast.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      Listen
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Organizations by Region */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Globe className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Global News Organizations</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl text-left">
            Trusted news sources from around the world for diverse global perspectives
          </p>

          <div className="max-w-7xl mx-auto space-y-6">
            {/* First 3 regions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalNewsOrganizations.slice(0, 3).map((region, idx) => (
                <Card
                  key={idx}
                  className={`border-2 shadow-lg ${
                    idx === 0
                      ? "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20"
                      : idx === 1
                        ? "border-green-500 bg-green-50/50 dark:bg-green-950/20"
                        : "border-purple-500 bg-purple-50/50 dark:bg-purple-950/20"
                  }`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle
                      className={`text-xl flex items-center gap-2 ${
                        idx === 0
                          ? "text-blue-700 dark:text-blue-400"
                          : idx === 1
                            ? "text-green-700 dark:text-green-400"
                            : "text-purple-700 dark:text-purple-400"
                      }`}
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${idx === 0 ? "bg-blue-500" : idx === 1 ? "bg-green-500" : "bg-purple-500"}`}
                      ></div>
                      {region.region}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {region.organizations.map((org, oidx) => (
                      <div key={oidx} className="space-y-1 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                        <Link
                          href={org.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          {org.name}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        <p className="text-xs text-muted-foreground leading-tight">{org.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Last 2 regions - centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {regionalNewsOrganizations.slice(3, 5).map((region, idx) => (
                <Card
                  key={idx}
                  className={`border-2 shadow-lg ${
                    idx === 0
                      ? "border-orange-500 bg-orange-50/50 dark:bg-orange-950/20"
                      : "border-red-500 bg-red-50/50 dark:bg-red-950/20"
                  }`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle
                      className={`text-xl flex items-center gap-2 ${
                        idx === 0 ? "text-orange-700 dark:text-orange-400" : "text-red-700 dark:text-red-400"
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${idx === 0 ? "bg-orange-500" : "bg-red-500"}`}></div>
                      {region.region}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {region.organizations.map((org, oidx) => (
                      <div key={oidx} className="space-y-1 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                        <Link
                          href={org.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-sm text-primary hover:underline flex items-center gap-1"
                        >
                          {org.name}
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                        <p className="text-xs text-muted-foreground leading-tight">{org.description}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Resources by Topic */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Academic Resources by Topic</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Curated academic sources and expert analysis on key issues
          </p>
          <div className="space-y-8">
            {academicResources.map((topic, idx) => (
              <Card key={idx} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-primary mb-2">{topic.topic}</CardTitle>
                  <CardDescription className="text-base">{topic.overview}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topic.resources.map((resource, ridx) => (
                      <div
                        key={ridx}
                        className="flex items-start justify-between gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-foreground mb-1">{resource.title}</p>
                          <Badge variant="outline" className="text-xs border-primary text-primary">
                            {resource.type}
                          </Badge>
                        </div>
                        <Link href={resource.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="flex-shrink-0">
                            <ExternalLink className="h-4 w-4 text-primary" />
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Suggest a Resource</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 text-pretty">
              Know of a great podcast, article, or academic resource we should feature? We're always looking to expand
              our collection of trusted sources.
            </p>
            <div className="flex justify-center">
              <Link href="/about#contact">
                <Button className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
