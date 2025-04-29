import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Star, Award, Gift, Camera, Users, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import AppScreenshotDeck from "@/components/app-screenshot-deck"
import FeatureCard from "@/components/feature-card"
import DownloadButton from "@/components/download-button"
import HowItWorks from "@/components/how-it-works"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-10 bg-repeat"></div>

        {/* Blob shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10 animate-slide-up">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white font-medium text-sm mb-4">
                Campus Food Reviews
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="block">Discover Food.</span>
                <span className="block mt-2">Share Reviews.</span>
                <span className="block mt-2">Earn Rewards!</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium text-white/80 mt-4">
                Your campus food journey starts here — the ultimate food review app made for you!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-6">
                <DownloadButton variant="secondary" size="lg" />
                <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all">
                  Learn More
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <p className="text-sm text-white/70 pt-2">Coming soon on App Store & Play Store!</p>
            </div>

            <div
              className="w-full md:w-1/2 flex justify-center z-10 animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-white/20 to-white/5 rounded-[40px] blur-xl opacity-80 animate-pulse-slow"></div>
                <div className="phone-mockup w-[280px] h-[560px] md:w-[300px] md:h-[600px]">
                  <div className="phone-notch"></div>
                  <div className="phone-button"></div>
                  <div className="phone-button phone-button-2"></div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-04-28%20at%2023.17.42_7635135b.jpg-MxnCnE6nehUMqVhAPo1zWX6xfeJiBf.jpeg"
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
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-primary">Fork</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Designed for food enthusiasts who love to explore and share their dining experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Real Reviews"
              description="Genuine food reviews by real users from your campus and nearby hotspots."
              delay={100}
              className="animate-slide-up"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Badge Rewards"
              description="Unlock cool badges and exclusive discounts as you post reviews!"
              delay={200}
              className="animate-slide-up"
            />
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Restaurant of the Week"
              description="Vote and celebrate the top eatery every week. Your voice matters!"
              delay={300}
              className="animate-slide-up"
            />
            <FeatureCard
              icon={<Camera className="w-8 h-8" />}
              title="Quick Uploads"
              description="Post reviews instantly — snap, write, and share with a few taps."
              delay={400}
              className="animate-slide-up"
            />
            <FeatureCard
              icon={<Gift className="w-8 h-8" />}
              title="Earn Referrals"
              description="Invite friends and earn exciting rewards. More food, more fun!"
              delay={500}
              className="animate-slide-up"
            />
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="Foodie Community"
              description="Connect with other food lovers and discover hidden gems together."
              delay={600}
              className="animate-slide-up"
            />
          </div>
        </div>
      </section>

      {/* App Screenshots Section */}
      <section id="screenshots" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience <span className="text-primary">Fork</span> App
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Swipe through to see how Fork App helps you discover, review, and earn rewards for your food adventures.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-6 md:p-12 shadow-xl">
            <AppScreenshotDeck />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start your delicious journey with Fork in three simple steps.
            </p>
          </div>
          <HowItWorks />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                About <span className="text-primary">Fork</span> App
              </h2>
              <p className="text-xl text-gray-600">The ultimate food discovery and review platform for campus life.</p>
            </div>

            <div
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <p className="text-gray-600 mb-8 text-lg">
                Fork App is designed for food enthusiasts who love to explore and share their dining experiences.
                Whether you're grabbing a quick snack at your campus cafe or discovering a hidden gem nearby, Fork lets
                you document your journey, earn rewards, and influence your community's food choices — one bite at a
                time!
              </p>

              <div className="bg-primary/10 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Foodie Family</h3>
                <p className="text-gray-600 mb-6">
                  Thousands of students and food lovers are already sharing their favorite bites. Ready to start your
                  delicious journey with Fork? 🍔🍕🍣
                </p>
                <div className="flex justify-center">
                  <DownloadButton />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">10,000+</h4>
                    <p className="text-gray-600 text-sm">Active Users</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">50,000+</h4>
                    <p className="text-gray-600 text-sm">Reviews</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">500+</h4>
                    <p className="text-gray-600 text-sm">Restaurants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-slide-up">Ready to Start Your Food Journey?</h2>
            <p className="text-xl text-white/80 mb-10 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Download Fork App today and join thousands of food enthusiasts on campus!
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <DownloadButton variant="secondary" size="lg" />
              <button className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium hover:bg-white/20 transition-all">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-white/70 mt-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
              Coming soon on App Store & Play Store!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  F
                </div>
                <span className="text-2xl font-bold">Fork App</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Discover, review, and earn rewards for your campus food adventures.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-lg">Product</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#screenshots" className="text-gray-400 hover:text-white transition-colors">
                      Screenshots
                    </Link>
                  </li>
                  <li>
                    <Link href="#download" className="text-gray-400 hover:text-white transition-colors">
                      Download
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4 text-lg">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Fork App | Made with ❤ for foodies.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
