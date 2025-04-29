import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  delay?: number
}

export default function FeatureCard({ icon, title, description, className, delay = 0 }: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 card-hover border border-gray-100",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
