"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail, MapPin, Phone, Target, Users, Shield, Lightbulb } from "lucide-react"
import { useEffect } from "react"

const values = [
  {
    icon: Target,
    title: "Accuracy & Truth",
    description:
      "We are committed to factual reporting and rigorous fact-checking. Every claim is verified through multiple credible sources before publication.",
  },
  {
    icon: Shield,
    title: "Independence",
    description:
      "We maintain editorial independence from political parties, corporations, and special interests. Our analysis is driven by evidence, not ideology.",
  },
  {
    icon: Users,
    title: "Accessibility",
    description:
      "Complex political issues deserve clear explanations. We make sophisticated analysis accessible to all citizens, regardless of their background.",
  },
  {
    icon: Lightbulb,
    title: "Context & Nuance",
    description:
      "We go beyond headlines to provide the historical context and nuanced analysis needed to truly understand political developments.",
  },
]

export default function AboutPage() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [])

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/design-mode/Untitled%20design.png"
              alt="Sane Politics Logo"
              width={120}
              height={120}
              className="rounded-full mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Sane Politics</h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl text-pretty">
              Navigating truth in a world of misinformation
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-primary text-center">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-lg text-foreground leading-relaxed">
                In an era of unprecedented misinformation and political polarization, Sane Politics was founded on a
                simple principle:{" "}
                <strong className="text-primary">informed citizens are the foundation of healthy democracies</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a team of journalists, political scientists, economists, and data analysts dedicated to providing
                accurate, unbiased political analysis. Our work combines rigorous research, data-driven insights, and
                clear communication to help citizens understand the complex political landscape.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're trying to understand foreign policy developments, economic strategies, or domestic
                political debates, we provide the context and analysis you need to form your own informed opinions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-primary">Our Core Values</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, idx) => (
              <Card key={idx} className="border-primary/20">
                <CardHeader>
                  <value.icon className="h-12 w-12 text-primary mb-3" />
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">In-Depth Reporting</CardTitle>
                <CardDescription className="leading-relaxed">
                  We publish comprehensive articles on foreign policy, economic strategy, and Canadian politics,
                  providing the context mainstream media often misses.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Election Analysis</CardTitle>
                <CardDescription className="leading-relaxed">
                  Our data scientists build sophisticated election models with proven accuracy, helping you understand
                  electoral dynamics beyond the polls.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Educational Resources</CardTitle>
                <CardDescription className="leading-relaxed">
                  We curate the best podcasts, articles, and academic resources to help you dive deeper into the issues
                  that matter most.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center text-primary">About Rohan Sane</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Founder and Editor-in-Chief of Sane Politics
          </p>
          <Card className="max-w-3xl mx-auto border-primary/20">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-48 h-48 mx-auto flex-shrink-0 relative overflow-hidden rounded-lg">
                  <img src="/images/design-mode/image.png" alt="Rohan Sane" className="object-cover w-full h-full" />
                </div>
                <div className="flex-1 space-y-4">
                  <p className="text-lg text-foreground leading-relaxed">
                    Rohan Sane is a Systems Design Engineering student at the University of Waterloo who combines his
                    analytical background with a deep interest in politics, economics, and global affairs. He founded
                    Sane Politics to encourage thoughtful, evidence-based dialogue in an era of misinformation and
                    division.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Drawing on his engineering education, Rohan approaches political and social issues through a systems
                    lens, examining how interconnected structures, incentives, and technologies shape the world we live
                    in. His goal is to make complex topics like governance, economic policy, and international relations
                    accessible to readers who want to think critically about the forces driving change.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond academics, Rohan has led student organizations, participated in policy simulations, and
                    explored the intersection of innovation and social impact. Through Sane Politics, he hopes to
                    inspire a new generation of informed thinkers who value reason, empathy, and constructive debate in
                    public discourse.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-16 scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-primary">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Get in Touch</CardTitle>
                <CardDescription>We welcome your questions, feedback, and story suggestions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:contact@sanepolitics.com" className="text-muted-foreground hover:text-primary">
                      contact@sanepolitics.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Editorial</p>
                    <a href="mailto:editorial@sanepolitics.com" className="text-muted-foreground hover:text-primary">
                      editorial@sanepolitics.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      123 Democracy Street
                      <br />
                      Ottawa, ON K1A 0A9
                      <br />
                      Canada
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-primary-foreground/90 mb-6 text-pretty">
              Interested in contributing to Sane Politics? We're always looking for passionate writers, researchers, and
              analysts to join our team. Reach out to us to learn about opportunities to get involved.
            </p>
            <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                onClick={scrollToContact}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
