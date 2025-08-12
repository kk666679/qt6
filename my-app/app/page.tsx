import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">MATMOTOFIX-Dyno</h1>
          <p className="text-slate-400 text-lg">Professional Motorcycle Dynamometer Software</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Figma UI Interface</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-4">Modern dashboard with real-time dyno data</p>
              <Link href="/figma-ui">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Access Figma UI
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">3D Dyno Station</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-4">Interactive 3D visualization</p>
              <Link href="/dyno-station-3d">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  View 3D Station
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Software Interface</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 mb-4">Main control interface</p>
              <Link href="/dyno-software-interface">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Open Interface
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">System Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">C++ Backend</span>
                  <span className="text-green-400">✅ Running</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Qt Automotive</span>
                  <span className="text-green-400">✅ Built</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Web Interface</span>
                  <span className="text-green-400">✅ Online</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}