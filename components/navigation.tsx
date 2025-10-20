"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/election-models", label: "Election Models" },
  { href: "/learning-resources", label: "Educational Resources" },
  { href: "/about", label: "About Us" },
]

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleMobileClick = () => {
    setMobileMenuOpen(false)
    scrollToTop()
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3" onClick={scrollToTop}>
            <Image
              src="/images/design-mode/Untitled%20design.png"
              alt="Sane Politics Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-primary hidden sm:inline">SANE POLITICS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={scrollToTop}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary border-b-2 border-primary pb-1" : "text-foreground/70",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleMobileClick}
                className={cn(
                  "block py-3 text-sm font-medium transition-colors",
                  pathname === item.href ? "text-primary bg-secondary/50" : "text-foreground/70 hover:text-primary",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
