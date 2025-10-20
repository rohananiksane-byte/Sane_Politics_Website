"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"

interface ArticleSearchProps {
  onSearch: (query: string) => void
  onCategoryFilter: (category: string | null) => void
  categories: string[]
  activeCategory: string | null
}

export function ArticleSearch({ onSearch, onCategoryFilter, categories, activeCategory }: ArticleSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  const clearSearch = () => {
    setSearchQuery("")
    onSearch("")
  }

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
            onClick={clearSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 justify-center">
        <Badge
          variant={activeCategory === null ? "default" : "outline"}
          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
          onClick={() => onCategoryFilter(null)}
        >
          All Articles
        </Badge>
        {categories.map((category) => (
          <Badge
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => onCategoryFilter(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  )
}
