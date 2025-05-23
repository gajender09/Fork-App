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

export default function AppScreenshotSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    if (isAnimating) return
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
      goToNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden rounded-3xl shadow-2xl bg-gray-900 p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="relative w-full md:w-auto flex justify-center">
            <div className="relative w-64 h-[500px] md:w-72 md:h-[580px]">
              {screenshots.map((screenshot, index) => {
                // Calculate position for card deck effect
                const offset = index - currentIndex
                const isActive = index === currentIndex
                const zIndex = screenshots.length - Math.abs(offset)

                let translateX = 0
                let translateY = 0
                let rotate = 0
                let scale = 1

                if (offset !== 0) {
                  translateX = offset * 10
                  translateY = Math.abs(offset) * 10
                  rotate = offset * -5
                  scale = 1 - Math.abs(offset) * 0.05
                }

                return (
                  <div
                    key={screenshot.id}
                    className={cn(
                      "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out",
                      isActive ? "opacity-100" : "opacity-80",
                    )}
                    style={{
                      transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
                      zIndex: zIndex,
                    }}
                  >
                    <div className="relative w-full h-full bg-white rounded-[36px] shadow-xl overflow-hidden border-8 border-gray-800">
                      <Image
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.alt}
                        width={300}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="hidden md:block max-w-md">
            <div className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">{screenshots[currentIndex].title}</h3>
              <p className="text-gray-300">{screenshots[currentIndex].description}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentIndex ? "bg-orange-500 w-8" : "bg-gray-600 hover:bg-gray-500",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-4 -translate-y-1/2">
          <button
            onClick={goToPrevious}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute top-1/2 right-4 -translate-y-1/2">
          <button
            onClick={goToNext}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-colors"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="block md:hidden mt-8 text-center px-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{screenshots[currentIndex].title}</h3>
        <p className="text-gray-600">{screenshots[currentIndex].description}</p>
      </div>
    </div>
  )
}
