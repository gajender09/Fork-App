"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-10">
          <div className="relative w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
            F
          </div>
          <span className={cn("text-2xl font-bold transition-colors", scrolled ? "text-gray-900" : "text-white")}>
            Fork App
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Screenshots", "How It Works", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={cn(
                "font-medium transition-colors hover:text-primary relative group",
                scrolled ? "text-gray-700" : "text-white",
              )}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#download"
            className="bg-white text-primary hover:bg-gray-100 px-5 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow"
          >
            Download
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={cn("w-6 h-6", scrolled ? "text-gray-900" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", scrolled ? "text-gray-900" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-0 animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {["Features", "Screenshots", "How It Works", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xl font-medium text-gray-900 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link
              href="#download"
              className="mt-4 bg-primary text-white hover:bg-primary/90 px-6 py-3 rounded-full font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
