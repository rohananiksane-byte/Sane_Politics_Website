"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link href="/" onClick={scrollToTop} className="inline-block">
              <Image
                src="/images/design-mode/Untitled%20design.png"
                alt="Sane Politics Logo"
                width={80}
                height={80}
                className="rounded-full mb-4 hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
            <p className="text-sm text-primary-foreground/80">Navigating truth in a world of misinformation.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:underline" onClick={scrollToTop}>
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/election-models" className="hover:underline" onClick={scrollToTop}>
                  Election Models
                </Link>
              </li>
              <li>
                <Link href="/learning-resources" className="hover:underline" onClick={scrollToTop}>
                  Educational Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/articles#foreign-policy" className="hover:underline">
                  Foreign Policy
                </Link>
              </li>
              <li>
                <Link href="/articles#economic-strategy" className="hover:underline">
                  Economic Strategy
                </Link>
              </li>
              <li>
                <Link href="/articles#canadian-politics" className="hover:underline">
                  Canadian Politics
                </Link>
              </li>
              <li>
                <Link href="/articles#opinion-editorial" className="hover:underline">
                  Opinion & Editorial
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <p className="text-sm mb-4">
              <Mail className="inline h-4 w-4 mr-2" />
              contact@sanepolitics.com
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Sane Politics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
