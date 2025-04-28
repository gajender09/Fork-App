"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const screenshots = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VkN3W7JD8Z5ncdQa4UqeEPV4Vm6STH.png",
    alt: "Royal Reviews Screen",
    title: "Royal Reviews",
    description:
      "Explore the power of user opinions! Dive into a sea of reviews and ratings submitted by our vibrant community.",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BqqbhwgacwzwGYdJbXekwpLI12pR2e.png",
    alt: "Home Screen",
    title: "Discover & Post",
    description: "Browse trending foods, post reviews, and explore special offers from your favorite restaurants.",
  },
]

export default function AppScreenshotSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-3xl shadow-2xl bg-gray-900 p-4 md:p-8">
        <div className="flex items-center justify-center">
          <div className="relative w-64 h-[500px] md:w-72 md:h-[580px]">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.id}
                className={cn(
                  "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out",
                  index === currentIndex
                    ? "opacity-100 translate-x-0 z-10"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full z-0"
                      : "opacity-0 translate-x-full z-0",
                )}
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
            ))}
          </div>

          <div className="hidden md:block ml-8 max-w-md">
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
