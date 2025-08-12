'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function InstallerPage() {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(20)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <Card className="bg-slate-800/50 border-slate-600">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-white">MATMOTOFIX-Dyno Installation Assistant</CardTitle>
            <p className="text-slate-300">Professional Motorcycle Dynamometer Software</p>
            <div className="flex justify-center gap-4 mt-4">
              <Badge className="bg-green-500/20 text-green-400">✓ Verified Publisher</Badge>
              <Badge className="bg-blue-500/20 text-blue-400">✓ Windows 10/11</Badge>
              <Badge className="bg-purple-500/20 text-purple-400">✓ 215MB</Badge>
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-slate-800/50 border-slate-600">
          <CardContent className="p-4">
            <Progress value={progress} className="h-3" />
            <div className="text-center text-slate-400 mt-2">Step {step} of 5 - {progress}% Complete</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-600">
          <CardHeader>
            <CardTitle className="text-white">Download Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 border border-blue-500 rounded-lg bg-blue-500/10">
                <div className="text-white font-semibold">● Direct Download (Recommended)</div>
                <div className="text-slate-400 text-sm">Fastest, no background services required</div>
              </div>
              <div className="p-4 border border-slate-600 rounded-lg">
                <div className="text-white font-semibold">○ Peer-to-Peer (Enterprise)</div>
                <div className="text-slate-400 text-sm">Uses BitTorrent for decentralized distribution</div>
              </div>
            </div>
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <div className="text-blue-400 text-sm">Note: 215MB installer. 5-minute download on 50Mbps connection.</div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Download MATMOTOFIX-Dyno
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-600">
          <CardHeader>
            <CardTitle className="text-white">System Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-slate-400 text-sm">Operating System</div>
                <div className="text-white">Windows 10/11 (64-bit)</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Memory</div>
                <div className="text-white">8GB RAM minimum</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Graphics</div>
                <div className="text-white">2GB GPU (DirectX 11)</div>
              </div>
              <div>
                <div className="text-slate-400 text-sm">Storage</div>
                <div className="text-white">5GB available space</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}