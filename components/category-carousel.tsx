"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Article } from "@/lib/articles-data"

interface CategoryCarouselProps {
  articles: Article[]
  category: string
}

export function CategoryCarousel({ articles, category }: CategoryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const articlesPerPage = 3

  const totalPages = Math.ceil(articles.length / articlesPerPage)
  const currentArticles = articles.slice(currentIndex * articlesPerPage, (currentIndex + 1) * articlesPerPage)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentArticles.map((article) => (
          <Card key={article.slug} className="border-primary/20 hover:shadow-lg transition-shadow flex flex-col h-full">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="flex-grow">
              <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <CardTitle className="text-lg text-primary text-balance">{article.title}</CardTitle>
              <CardDescription>{article.excerpt}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Button
                asChild
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href={`/articles/${article.slug}`} scroll={true} onClick={() => window.scrollTo(0, 0)}>
                  Read Article
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}
