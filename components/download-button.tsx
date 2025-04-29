"use client"

import { useState } from "react"
import { Download, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface DownloadButtonProps {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function DownloadButton({ variant = "primary", size = "md", className }: DownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const apkUrl = "https://github.com/VishalThakur18/Fork_Apk/releases/download/APK/app-debug.apk"

  const handleDownload = () => {
    window.open(apkUrl, "_blank")
    setIsOpen(false)
  }

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-white text-primary hover:bg-gray-50 border border-gray-200",
    outline: "bg-transparent text-primary hover:bg-primary/10 border border-primary",
  }

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className={cn(
            "rounded-full font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow",
            variantStyles[variant],
            sizeStyles[size],
            className,
          )}
        >
          <Download className={cn("w-5 h-5", size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "")} />
          Download APK
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md rounded-2xl p-0 overflow-hidden">
        <div className="bg-primary/10 p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl">Download Fork App</DialogTitle>
            <DialogDescription className="text-gray-600">
              You're about to download the Android APK file for Fork App.
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="p-6 space-y-6">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h4 className="font-medium text-gray-900 mb-3">Installation Instructions:</h4>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>Download the APK file</li>
              <li>Open the file on your Android device</li>
              <li>Allow installation from unknown sources if prompted</li>
              <li>Follow the on-screen instructions to complete installation</li>
            </ol>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <a
              href={apkUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <ExternalLink className="w-4 h-4" />
              Download Now
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
