"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Newspaper, Target, Shield, Users } from "lucide-react"
import Link from "next/link"
import { getAllArticles } from "@/lib/articles-data"
import { CategoryCarousel } from "@/components/category-carousel"
import Image from "next/image"
import { useEffect, useState } from "react"
import { ArticleSearch } from "@/components/article-search"
import { ScrollReveal } from "@/components/scroll-reveal"
import { BackToTopButton } from "@/components/back-to-top-button"

const reportingValues = [
  {
    icon: Target,
    title: "Accuracy First",
    description: "Every fact is verified through multiple credible sources",
  },
  {
    icon: Shield,
    title: "Unbiased Analysis",
    description: "We present all perspectives without partisan influence",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "Clear sourcing and methodology in all our reporting",
  },
  {
    icon: Newspaper,
    title: "Context Matters",
    description: "Deep analysis that goes beyond headlines",
  },
]

export default function ArticlesPage() {
  const allArticles = getAllArticles()
  const topStory = allArticles.find((a) => a.slug === "climate-summit-historic-agreement")

  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [filteredArticles, setFilteredArticles] = useState(allArticles)

  const categories = ["Foreign Policy", "Economic Strategy", "Canadian Politics", "Editorial"]

  useEffect(() => {
    let filtered = allArticles

    if (activeCategory) {
      filtered = filtered.filter((article) => article.category === activeCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredArticles(filtered)
  }, [searchQuery, activeCategory, allArticles])

  const foreignPolicyArticles =
    activeCategory === null || activeCategory === "Foreign Policy"
      ? filteredArticles.filter((a) => a.category === "Foreign Policy")
      : []
  const economicArticles =
    activeCategory === null || activeCategory === "Economic Strategy"
      ? filteredArticles.filter((a) => a.category === "Economic Strategy")
      : []
  const canadianArticles =
    activeCategory === null || activeCategory === "Canadian Politics"
      ? filteredArticles.filter((a) => a.category === "Canadian Politics")
      : []
  const editorials =
    activeCategory === null || activeCategory === "Editorial"
      ? filteredArticles.filter((a) => a.category === "Editorial")
      : []

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }, [])

  return (
    <div className="flex flex-col">
      <BackToTopButton />

      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Articles</h1>
          <p className="text-xl text-center text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
            In-depth analysis and reporting on the issues that shape our world
          </p>
        </div>
      </section>

      <section className="py-8 bg-secondary/10">
        <div className="container mx-auto px-4">
          <ArticleSearch
            onSearch={setSearchQuery}
            onCategoryFilter={setActiveCategory}
            categories={categories}
            activeCategory={activeCategory}
          />
        </div>
      </section>

      {topStory && !searchQuery && !activeCategory && (
        <ScrollReveal>
          <section className="py-12 bg-secondary/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center gap-2 mb-6">
                <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">TOP STORY OF THE MONTH</Badge>
              </div>
              <Card className="max-w-5xl mx-auto border-primary/20 shadow-lg">
                <CardHeader>
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={topStory.image || "/placeholder.svg"}
                      alt={topStory.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="secondary">{topStory.category}</Badge>
                    <span className="text-sm text-muted-foreground">{topStory.date}</span>
                    <span className="text-sm text-muted-foreground">• {topStory.readTime}</span>
                  </div>
                  <CardTitle className="text-3xl text-primary text-balance">{topStory.title}</CardTitle>
                  <CardDescription className="text-base">{topStory.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-primary hover:bg-accent">
                    <Link href={`/articles/${topStory.slug}`} scroll={true} onClick={() => window.scrollTo(0, 0)}>
                      Read Full Story
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>
      )}

      {!searchQuery && !activeCategory && (
        <ScrollReveal>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-center text-primary">Our Reporting Values</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                The principles that guide every article we publish
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {reportingValues.map((value, idx) => (
                  <Card key={idx} className="border-primary/20 text-center">
                    <CardHeader>
                      <value.icon className="h-12 w-12 text-primary mx-auto mb-3" />
                      <CardTitle className="text-lg text-primary">{value.title}</CardTitle>
                      <CardDescription>{value.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">
            {searchQuery || activeCategory ? "Search Results" : "Browse by Category"}
          </h2>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory(null)
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {foreignPolicyArticles.length > 0 && (
            <ScrollReveal>
              <div className="mb-16 scroll-mt-24" id="foreign-policy">
                <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">Foreign Policy</h3>
                <CategoryCarousel articles={foreignPolicyArticles} category="Foreign Policy" />
              </div>
            </ScrollReveal>
          )}

          {economicArticles.length > 0 && (
            <ScrollReveal>
              <div className="mb-16 scroll-mt-24" id="economic-strategy">
                <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
                  Economic Strategy
                </h3>
                <CategoryCarousel articles={economicArticles} category="Economic Strategy" />
              </div>
            </ScrollReveal>
          )}

          {canadianArticles.length > 0 && (
            <ScrollReveal>
              <div className="mb-16 last:mb-0 scroll-mt-24" id="canadian-politics">
                <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary pb-2">
                  Canadian Politics
                </h3>
                <CategoryCarousel articles={canadianArticles} category="Canadian Politics" />
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {editorials.length > 0 && (
        <ScrollReveal>
          <section className="py-16 scroll-mt-24" id="opinion-editorial">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4 text-center text-primary">Opinion & Editorial</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Thoughtful perspectives from our editorial board
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {editorials.map((editorial) => (
                  <Card
                    key={editorial.slug}
                    className="border-primary/20 hover:shadow-lg transition-shadow flex flex-col h-full"
                  >
                    <CardHeader className="flex-grow">
                      <Badge variant="outline" className="w-fit mb-2 border-primary text-primary">
                        Editorial
                      </Badge>
                      <CardTitle className="text-xl text-primary text-balance">{editorial.title}</CardTitle>
                      <CardDescription>
                        By {editorial.author} • {editorial.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        <Link href={`/articles/${editorial.slug}`} scroll={true} onClick={() => window.scrollTo(0, 0)}>
                          Read Editorial
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}
    </div>
  )
}
