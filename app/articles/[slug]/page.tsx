import { notFound } from "next/navigation"
import Link from "next/link"
import { getArticleBySlug, getAllArticles } from "@/lib/articles-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ReadingProgress } from "@/components/reading-progress"
import { BackToTopButton } from "@/components/back-to-top-button"

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      <ScrollToTop />
      <ReadingProgress />
      <BackToTopButton />

      {/* Article Header */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Button asChild variant="secondary" size="sm" className="mb-10">
            <Link href="/articles">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Articles
            </Link>
          </Button>
          <Badge className="mb-4 bg-accent text-accent-foreground ml-6">{article.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{article.title}</h1>

          {/* Article Meta */}
          <div className="flex flex-wrap gap-4 text-primary-foreground/90">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Introduction */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 text-pretty">
              {article.content.introduction}
            </p>

            {/* Content Sections */}
            {article.content.sections.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-2xl font-bold text-primary mb-4">{section.heading}</h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-foreground leading-relaxed mb-4 text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* Conclusion */}
            <div className="bg-secondary/30 p-6 rounded-lg mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4">Conclusion</h2>
              <p className="text-foreground leading-relaxed text-pretty">{article.content.conclusion}</p>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-10">
              <Tag className="h-4 w-4 text-muted-foreground" />
              {article.tags.map((tag, idx) => (
                <Badge key={idx} variant="outline" className="border-primary text-primary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author Info */}
            <Card className="p-6 border-primary/20">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/images/design-mode/image.png"
                    alt="Rohan Sane"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-1">About Rohan Sane</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rohan Sane is a Systems Design Engineering student at the University of Waterloo and the founder of
                    Sane Politics, a platform dedicated to fostering informed and balanced political discourse.
                    Combining his technical background with a passion for global affairs, he explores how systems
                    thinking, policy, and economics intersect to shape modern governance. Through Sane Politics, Rohan
                    aims to make complex political and economic ideas accessible and inspire thoughtful engagement in an
                    increasingly polarized world.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">More from {article.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {getAllArticles()
              .filter((a) => a.category === article.category && a.slug !== article.slug)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Card
                  key={relatedArticle.slug}
                  className="border-primary/20 hover:shadow-lg transition-shadow flex flex-col h-full"
                >
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={relatedArticle.image || "/placeholder.svg"}
                      alt={relatedArticle.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-primary mb-2 text-balance">{relatedArticle.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 flex-grow">{relatedArticle.excerpt}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent mt-auto"
                    >
                      <Link href={`/articles/${relatedArticle.slug}`} scroll={true}>
                        Read Article
                      </Link>
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
