import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star, Award, Gift, Camera, Users } from "lucide-react"
import AppScreenshotSlider from "@/components/app-screenshot-slider"
import FeatureCard from "@/components/feature-card"
import DownloadButton from "@/components/download-button"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5 bg-repeat"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-block bg-orange-100 px-4 py-1 rounded-full text-orange-600 font-medium text-sm mb-4">
              Campus Food Reviews
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              <span className="text-orange-500">Fork</span> App
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-700">Discover Food. Share Reviews. Earn Rewards!</p>
            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
              Your campus food journey starts here — the ultimate food review app made for you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <DownloadButton />
              <button className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-all shadow-sm">
                Learn More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-sm text-gray-500">Coming soon on App Store & Play Store!</p>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-[500px] md:w-72 md:h-[580px]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-[40px] blur-xl opacity-20"></div>
              <div className="absolute top-4 left-4 right-4 bottom-4 bg-white rounded-[36px] shadow-xl overflow-hidden border-8 border-gray-800">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BqqbhwgacwzwGYdJbXekwpLI12pR2e.png"
                  alt="Fork App Home Screen"
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Experience <span className="text-orange-500">Fork</span> App
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Swipe through to see how Fork App helps you discover, review, and earn rewards for your food adventures.
            </p>
          </div>
          <AppScreenshotSlider />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why <span className="text-orange-500">Fork</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed for food enthusiasts who love to explore and share their dining experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Star className="w-8 h-8 text-orange-500" />}
              title="Real Reviews"
              description="Genuine food reviews by real users from your campus and nearby hotspots."
            />
            <FeatureCard
              icon={<Award className="w-8 h-8 text-orange-500" />}
              title="Badge Rewards"
              description="Unlock cool badges and exclusive discounts as you post reviews!"
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-orange-500" />}
              title="Restaurant of the Week"
              description="Vote and celebrate the top eatery every week. Your voice matters!"
            />
            <FeatureCard
              icon={<Camera className="w-8 h-8 text-orange-500" />}
              title="Quick Uploads"
              description="Post reviews instantly — snap, write, and share with a few taps."
            />
            <FeatureCard
              icon={<Gift className="w-8 h-8 text-orange-500" />}
              title="Earn Referrals"
              description="Invite friends and earn exciting rewards. More food, more fun!"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-orange-500" />}
              title="Foodie Community"
              description="Connect with other food lovers and discover hidden gems together."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start your delicious journey with Fork in three simple steps.
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-orange-500">Fork</span> App
            </h2>
            <p className="text-gray-600 mb-8">
              Fork App is designed for food enthusiasts who love to explore and share their dining experiences. Whether
              you're grabbing a quick snack at your campus cafe or discovering a hidden gem nearby, Fork lets you
              document your journey, earn rewards, and influence your community's food choices — one bite at a time!
            </p>
            <div className="bg-orange-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join Our Foodie Family</h3>
              <p className="text-gray-600 mb-6">
                Thousands of students and food lovers are already sharing their favorite bites. Ready to start your
                delicious journey with Fork? 🍔🍕🍣
              </p>
              <DownloadButton />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-orange-500">Fork</span> App
              </h2>
              <p className="text-gray-400 mt-2">Taste. Review. Conquer.</p>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2025 Fork App | Made with ❤ for foodies.
          </div>
        </div>
      </footer>
    </div>
  )
}
