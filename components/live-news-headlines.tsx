"use client"
import { ExternalLink, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react"
import useSWR from "swr"
import Image from "next/image"
import { useState, useEffect } from "react"

interface NewsArticle {
  title: string
  url: string
  source: string
  publishedAt: string
  description: string
  urlToImage?: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const newsLogos: Record<string, string> = {
  BBC: "/logos/bbc-logo.jpg",
  "Wall Street Journal": "/logos/wsj-logo.jpg",
  "New York Times": "/logos/nyt-logo.jpg",
  "The Globe and Mail": "/logos/globe-mail-logo.jpg",
  Reuters: "/logos/reuters-logo.jpg",
  CNN: "/logos/cnn-logo.jpg",
  "Al Jazeera": "/logos/aljazeera-logo.jpg",
}

export function LiveNewsHeadlines() {
  const { data, error, isLoading } = useSWR<NewsArticle[]>("/api/news-headlines", fetcher, {
    refreshInterval: 3600000,
    revalidateOnFocus: false,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (!data || data.length === 0 || isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [data, isPaused])

  const goToNext = () => {
    if (data) {
      setCurrentIndex((prev) => (prev + 1) % data.length)
    }
  }

  const goToPrevious = () => {
    if (data) {
      setCurrentIndex((prev) => (prev - 1 + data.length) % data.length)
    }
  }

  if (error) {
    return <div className="text-center py-4 text-muted-foreground text-sm">Failed to load news headlines.</div>
  }

  if (isLoading) {
    return (
      <div className="relative w-full bg-secondary/10 rounded-lg animate-pulse p-8">
        <p className="text-muted-foreground text-sm text-center">Loading Global News Centre...</p>
      </div>
    )
  }

  if (!data || data.length === 0) {
    return null
  }

  const displayArticles = data
  const currentArticle = displayArticles[currentIndex]

  return (
    <div className="space-y-4">
      {/* Header - Stock Exchange Style */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-5 w-5" />
            <h2 className="text-xl font-bold tracking-tight">GLOBAL NEWS CENTRE</h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium">LIVE</span>
          </div>
        </div>
      </div>

      <div
        className="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Featured Article */}
        <a href={currentArticle.url} target="_blank" rel="noopener noreferrer" className="block group">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Large Image */}
            <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
              {currentArticle.urlToImage ? (
                <Image
                  src={currentArticle.urlToImage || "/placeholder.svg"}
                  alt={currentArticle.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-8xl opacity-20">📰</div>
                </div>
              )}
            </div>

            {/* Right: Article Content */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <div className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                  BREAKING NEWS
                </div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 leading-tight">
                  {currentArticle.title}
                </h3>
                {currentArticle.description && (
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    <span className="font-bold text-foreground">{currentArticle.source}:</span>{" "}
                    {currentArticle.description}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {new Date(currentArticle.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  •{" "}
                  {new Date(currentArticle.publishedAt).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:underline">
                  Read Full Story
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </a>

        <button
          onClick={(e) => {
            e.preventDefault()
            goToPrevious()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 text-primary p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Previous story"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault()
            goToNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-900 text-primary p-2 rounded-full shadow-lg transition-all z-10"
          aria-label="Next story"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {displayArticles.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-primary" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Footer - Market Info Style */}
      <div className="bg-gray-100 dark:bg-gray-900 px-6 py-2 rounded-b-lg flex items-center justify-between text-xs text-muted-foreground">
        <span>Auto-updates every hour</span>
        <span>•</span>
        <span>{data.length} stories tracked</span>
        <span>•</span>
        <span>
          Story {currentIndex + 1} of {displayArticles.length}
        </span>
      </div>
    </div>
  )
}
