"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { getArticlesByCategory } from "@/lib/articles-data"

const categories = [
  {
    title: "Foreign Policy",
    description: "Global affairs, international relations, and diplomatic analysis",
    image: "/world-map-diplomacy.jpg",
  },
  {
    title: "Economic Strategy",
    description: "Fiscal policy, trade agreements, and economic development",
    image: "/economic-growth-charts.jpg",
  },
  {
    title: "Canadian Politics",
    description: "Federal and provincial governance, policy, and elections",
    image: "/canadian-parliament-ottawa.jpg",
  },
]

export function ArticleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1))
  }

  const currentCategory = categories[currentIndex]
  const categoryArticles = getArticlesByCategory(currentCategory.title as any).slice(0, 3)

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="border-primary/20">
        <CardHeader>
          <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
            <img
              src={currentCategory.image || "/placeholder.svg"}
              alt={currentCategory.title}
              className="object-cover w-full h-full"
            />
          </div>
          <CardTitle className="text-2xl text-primary">{currentCategory.title}</CardTitle>
          <CardDescription className="text-base">{currentCategory.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold mb-3 text-foreground">Recent Articles:</h4>
          <ul className="space-y-2 mb-6">
            {categoryArticles.map((article) => (
              <li key={article.slug} className="text-muted-foreground flex items-start">
                <span className="text-primary mr-2">•</span>
                <Link
                  href={`/articles/${article.slug}`}
                  scroll={true}
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-primary transition-colors"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild className="w-full bg-primary hover:bg-accent">
            <Link href={`/articles#${currentCategory.title.toLowerCase().replace(/\s+/g, "-")}`}>
              View All {currentCategory.title} Articles
            </Link>
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {categories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-8" : "bg-border"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
