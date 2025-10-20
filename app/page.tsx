"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, BarChart3, GraduationCap, Brain, MessageCircle, Target } from "lucide-react"
import { ArticleCarousel } from "@/components/article-carousel"
import { LiveNewsHeadlines } from "@/components/live-news-headlines"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Collage Background */}
      <section className="relative text-primary-foreground py-20 overflow-hidden">
        {/* Background Collage */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 opacity-70">
          {/* Row 1 */}
          <div className="relative">
            <img src="/canadian-parliament-building.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/white-house-washington.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/united-nations-building.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/political-protest-demonstration.jpg" alt="" className="object-cover w-full h-full" />
          </div>

          {/* Row 2 */}
          <div className="relative">
            <img src="/election-campaign-rally-crowd.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/international-treaty-documents.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/world-leaders-international-summit.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/newspaper-printing-press.jpg" alt="" className="object-cover w-full h-full" />
          </div>

          {/* Row 3 */}
          <div className="relative">
            <img src="/world-map-global-politics.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/citizens-community-involvement.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/voting-democracy-ballot-box.jpg" alt="" className="object-cover w-full h-full" />
          </div>
          <div className="relative">
            <img src="/political-debate-discussion.jpg" alt="" className="object-cover w-full h-full" />
          </div>
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-primary/60"></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <Image
              src="/images/design-mode/Untitled%20design.png"
              alt="Sane Politics Logo"
              width={150}
              height={150}
              className="rounded-full mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance drop-shadow-lg">
              In a world full of misinformation, you must be SANE to make it through
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty drop-shadow-md">
              Trusted political analysis, data-driven election models, and educational resources for informed citizens.
            </p>
          </div>
        </div>
      </section>

      {/* Live News Headlines */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <LiveNewsHeadlines />
        </div>
      </section>

      {/* What is a SANE Citizen */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">What is a SANE Citizen?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
                <Brain className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Think Critically</h3>
              <p className="text-muted-foreground leading-relaxed">
                Question assumptions, analyze evidence, and form independent judgments based on facts and reason.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
                <MessageCircle className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Debate Respectfully</h3>
              <p className="text-muted-foreground leading-relaxed">
                Engage in civil discourse, listen to diverse perspectives, and seek common ground through dialogue.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
                <Target className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Value Truth</h3>
              <p className="text-muted-foreground leading-relaxed">
                Prioritize accuracy over ideology, seek reliable sources, and hold ourselves accountable to facts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Featured Article</h2>
          <Card className="max-w-4xl mx-auto overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-colors">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image src="/nato-headquarters-brussels.jpg" alt="NATO Expansion" fill className="object-cover" />
              </div>
              <div className="md:w-1/2 p-8">
                <CardHeader className="p-0 mb-4">
                  <div className="text-sm text-primary font-semibold mb-2">FOREIGN POLICY</div>
                  <CardTitle className="text-2xl mb-3">
                    NATO's Strategic Expansion: Implications for Global Security
                  </CardTitle>
                  <CardDescription className="text-base">
                    An in-depth analysis of NATO's recent expansion and its impact on international relations, regional
                    stability, and the future of collective defense.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <Button asChild className="bg-primary hover:bg-accent">
                    <Link
                      href="/articles/nato-expansion-global-security"
                      scroll={true}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Read Full Article
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Article Categories Carousel */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Our Focus Areas</h2>
          <ArticleCarousel />
        </div>
      </section>

      {/* Resources Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Explore Our Resources</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Articles</CardTitle>
                <CardDescription>
                  In-depth analysis on foreign policy, economic strategy, and Canadian politics from our expert team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/articles" scroll={true} onClick={() => window.scrollTo(0, 0)}>
                    Browse Articles
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Election Models</CardTitle>
                <CardDescription>
                  Data-driven election forecasts and historical analysis of Canadian, American, and international
                  elections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/election-models" scroll={true} onClick={() => window.scrollTo(0, 0)}>
                    View Models
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Educational Resources</CardTitle>
                <CardDescription>
                  Curated podcasts, news sources, and academic materials to deepen your understanding of political
                  issues.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/learning-resources" scroll={true} onClick={() => window.scrollTo(0, 0)}>
                    Explore Resources
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About & Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">About Sane Politics</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            We're committed to providing accurate, non-partisan political analysis and educational resources. Our
            mission is to help citizens navigate the complex world of politics with clarity and confidence.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/about" scroll={true} onClick={() => window.scrollTo(0, 0)}>
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
