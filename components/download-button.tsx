"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DownloadButton() {
  const [isOpen, setIsOpen] = useState(false)
  const apkUrl = "https://github.com/VishalThakur18/Fork_Apk/releases/download/APK/app-debug.apk"

  const handleDownload = () => {
    window.open(apkUrl, "_blank")
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2">
          <Download className="w-5 h-5" />
          Download APK
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Download Fork App</DialogTitle>
          <DialogDescription>You're about to download the Android APK file for Fork App.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="font-medium text-orange-800 mb-2">Installation Instructions:</h4>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>Download the APK file</li>
              <li>Open the file on your Android device</li>
              <li>Allow installation from unknown sources if prompted</li>
              <li>Follow the on-screen instructions to complete installation</li>
            </ol>
          </div>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleDownload}>
              Download Now
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
