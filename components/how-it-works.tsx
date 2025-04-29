import { Search, MessageSquare, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

const steps = [
  {
    number: 1,
    icon: <Search className="w-8 h-8 text-primary" />,
    title: "Discover",
    description: "Find trending dishes and new food spots recommended by real users like you.",
  },
  {
    number: 2,
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Review",
    description: "Share your honest food experiences through quick photo reviews and ratings.",
  },
  {
    number: 3,
    icon: <Trophy className="w-8 h-8 text-primary" />,
    title: "Earn",
    description: "Collect badges, win discounts, and be a part of the ultimate foodie leaderboard!",
  },
]

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={cn(
            "relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center animate-slide-up card-hover",
            index === 1 ? "md:mt-8" : index === 2 ? "md:mt-16" : "",
          )}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg">
            {step.number}
          </div>
          <div className="mt-6 mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">{step.icon}</div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  )
}
