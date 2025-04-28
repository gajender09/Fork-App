import { Search, MessageSquare, Trophy } from "lucide-react"

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
          1
        </div>
        <div className="mt-4 mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
            <Search className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Discover</h3>
        <p className="text-gray-600">Find trending dishes and new food spots recommended by real users like you.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
          2
        </div>
        <div className="mt-4 mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
            <MessageSquare className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Review</h3>
        <p className="text-gray-600">Share your honest food experiences through quick photo reviews and ratings.</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center relative">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
          3
        </div>
        <div className="mt-4 mb-6 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Earn</h3>
        <p className="text-gray-600">
          Collect badges, win discounts, and be a part of the ultimate foodie leaderboard!
        </p>
      </div>
    </div>
  )
}
