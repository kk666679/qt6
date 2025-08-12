"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FigmaUI() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">MotoDynoPro</h1>
            <p className="text-slate-400">Professional Motorcycle Dynamometer</p>
          </div>
          <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500">
            ONLINE
          </Badge>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Real-time Data */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Live Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400">5,247</div>
                <div className="text-slate-400">RPM</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">72.3</div>
                  <div className="text-slate-400 text-sm">Torque (lb-ft)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">68.5</div>
                  <div className="text-slate-400 text-sm">Power (HP)</div>
                </div>
              </div>
              <Progress value={65} className="h-2" />
            </CardContent>
          </Card>

          {/* Controls */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Test Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Start Test
              </Button>
              <Button variant="outline" className="w-full border-red-500 text-red-400 hover:bg-red-500/20">
                Emergency Stop
              </Button>
              <div className="space-y-2">
                <div className="text-sm text-slate-400">Test Progress</div>
                <Progress value={42} className="h-2" />
                <div className="text-xs text-slate-500">2:34 / 6:00</div>
              </div>
            </CardContent>
          </Card>

          {/* Status */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Hardware</span>
                <Badge className="bg-green-500/20 text-green-400">Connected</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Safety</span>
                <Badge className="bg-green-500/20 text-green-400">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Data Logger</span>
                <Badge className="bg-blue-500/20 text-blue-400">Recording</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="power" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="power" className="text-white">Power Curve</TabsTrigger>
            <TabsTrigger value="torque" className="text-white">Torque Curve</TabsTrigger>
            <TabsTrigger value="data" className="text-white">Data View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="power">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="h-64 bg-slate-900/50 rounded-lg flex items-center justify-center">
                  <div className="text-slate-400">Power Curve Visualization</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="torque">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="h-64 bg-slate-900/50 rounded-lg flex items-center justify-center">
                  <div className="text-slate-400">Torque Curve Visualization</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="data">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="h-64 bg-slate-900/50 rounded-lg flex items-center justify-center">
                  <div className="text-slate-400">Data Table View</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}