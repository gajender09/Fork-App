"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const screenshots = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.42_9266e55d.jpg-Dy3ZpMubBeJ6NbbBFslGSbVFuO743b.jpeg",
    alt: "Feed Screen with Reviews",
    title: "Food Reviews Feed",
    description: "Browse through authentic food reviews from users in your campus community.",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.43_4244e92c.jpg-DZWr32r1OyOjmxe70GyPS1NICr2Cu2.jpeg",
    alt: "Login Screen",
    title: "Easy Login",
    description: "Quick and secure login options to access your personalized food journey.",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.41_714a7b17.jpg-Ny2E0JJoojAljuNTpH1L232wUeX1yh.jpeg",
    alt: "Deal of the Day",
    title: "Daily Deals",
    description: "Discover exclusive offers and promotions from your favorite restaurants.",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.43_84f2ae2a.jpg-nZxIjtSba8wPNPQcsG6x3zpsTnZ7de.jpeg",
    alt: "Hot Offers Screen",
    title: "Hot Offers",
    description: "Unlock special discounts and limited-time deals tailored just for you.",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.42_bd8b41ac.jpg-gsIKyJn7olV67E5niD6mmrCHIP2rwl.jpeg",
    alt: "Restaurant of the Week",
    title: "Restaurant Rankings",
    description: "Vote for your favorite restaurants and see real-time community rankings.",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.42_7635135b.jpg-MxnCnE6nehUMqVhAPo1zWX6xfeJiBf.jpeg",
    alt: "Home Screen",
    title: "Personalized Home",
    description: "Your customized dashboard with trending foods and nearby restaurant offers.",
  },
  {
    id: 7,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.41_9b7c1ec5.jpg-JhP9FV4tlYPBBaN3hVf3BhARG9Isla.jpeg",
    alt: "Hot Offers Coupons",
    title: "Digital Coupons",
    description: "Save and redeem digital coupons from popular restaurants around campus.",
  },
  {
    id: 8,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.41_9d85bc4d.jpg-emkOqV8vsOZmEnlFRDKqizjoaCNUtD.jpeg",
    alt: "User Profile",
    title: "User Profile",
    description: "Manage your account, track your reviews, and customize your preferences.",
  },
]

export default function AppScreenshotDeck() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const deckRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrevious = () => {
    if (isAnimating) return
    const newIndex = currentIndex === 0 ? screenshots.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    if (isAnimating) return
    const newIndex = currentIndex === screenshots.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!showInfo) {
        goToNext()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, showInfo])

  return (
    <div className="relative mx-auto">
      {/* Main deck container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="card-deck relative h-[600px] flex items-center justify-center">
            <div ref={deckRef} className="relative w-[280px] h-[560px]">
              {screenshots.map((screenshot, index) => {
                // Calculate position for card deck effect
                const offset = index - currentIndex
                const isActive = index === currentIndex
                const zIndex = screenshots.length - Math.abs(offset)

                let translateX = 0
                let translateY = 0
                let rotate = 0
                let scale = 1
                let opacity = 1

                if (offset !== 0) {
                  // Cards before the current one
                  if (offset < 0) {
                    translateX = -10 * Math.abs(offset)
                    translateY = 10 * Math.abs(offset)
                    rotate = -5 * Math.abs(offset)
                    scale = 1 - 0.05 * Math.abs(offset)
                    opacity = 1 - 0.2 * Math.abs(offset)
                  }
                  // Cards after the current one
                  else {
                    translateX = 10 * offset
                    translateY = 10 * offset
                    rotate = 5 * offset
                    scale = 1 - 0.05 * offset
                    opacity = 1 - 0.2 * offset
                  }
                }

                // Limit the number of visible cards
                if (Math.abs(offset) > 3) {
                  opacity = 0
                }

                return (
                  <div
                    key={screenshot.id}
                    className={cn(
                      "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out card-deck-item",
                      isActive ? "active" : "",
                    )}
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    <div className="phone-mockup w-full h-full bg-white">
                      <div className="phone-notch"></div>
                      <div className="phone-button"></div>
                      <div className="phone-button phone-button-2"></div>
                      <Image
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.alt}
                        width={320}
                        height={640}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              <button
                onClick={goToPrevious}
                className="bg-white/90 hover:bg-white text-gray-800 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all hover:scale-110"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                className="bg-white/90 hover:bg-white text-gray-800 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all hover:scale-110"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Info Panel - Always visible on desktop, toggleable on mobile */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl max-w-md mx-auto md:mx-0">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{screenshots[currentIndex].title}</h3>
            <p className="text-gray-600 mb-6">{screenshots[currentIndex].description}</p>

            <div className="flex gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
