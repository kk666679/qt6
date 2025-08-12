"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function EnhancedFigmaUI() {
  const [rpm, setRpm] = useState(0)
  const [torque, setTorque] = useState(0)
  const [power, setPower] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [testProgress, setTestProgress] = useState(0)

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setRpm(prev => Math.min(prev + 100, 8000))
        setTorque(prev => Math.min(prev + 2, 85))
        setPower(prev => Math.min(prev + 3, 120))
        setTestProgress(prev => Math.min(prev + 2, 100))
      }, 200)
      return () => clearInterval(interval)
    }
  }, [isRunning])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Enhanced Header */}
        <div className="flex items-center justify-between bg-slate-800/30 backdrop-blur-sm rounded-lg p-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              MATMOTOFIX-Dyno Enhanced
            </h1>
            <p className="text-slate-300">Professional Motorcycle Dynamometer v2.0</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="bg-green-500/20 text-green-400 border-green-500 animate-pulse">
              LIVE
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-400">AI-POWERED</Badge>
          </div>
        </div>

        {/* Real-time Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Live Gauges */}
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-600 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                Live Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">{rpm.toLocaleString()}</div>
                <div className="text-slate-400">RPM</div>
                <Progress value={(rpm/8000)*100} className="h-3 mt-2" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400">{torque.toFixed(1)}</div>
                  <div className="text-slate-400 text-sm">Torque (lb-ft)</div>
                </div>
                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{power.toFixed(1)}</div>
                  <div className="text-slate-400 text-sm">Power (HP)</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Controls */}
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-600 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">Smart Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => setIsRunning(!isRunning)}
                className={`w-full ${isRunning ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'} transition-all duration-300`}
              >
                {isRunning ? 'Stop Test' : 'Start Test'}
              </Button>
              <Button variant="outline" className="w-full border-yellow-500 text-yellow-400 hover:bg-yellow-500/20">
                Emergency Stop
              </Button>
              <div className="space-y-3">
                <div className="text-sm text-slate-400">Test Progress</div>
                <Progress value={testProgress} className="h-3" />
                <div className="text-xs text-slate-500">{testProgress}% Complete</div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-400">Load Setting</label>
                <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Advanced Status */}
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-600 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Hardware</span>
                <Badge className="bg-green-500/20 text-green-400">Connected</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">AI Analysis</span>
                <Switch defaultChecked />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Cloud Sync</span>
                <Badge className="bg-blue-500/20 text-blue-400">Active</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Safety</span>
                <Badge className="bg-green-500/20 text-green-400">All Clear</Badge>
              </div>
              <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
                <div className="text-xs text-slate-400 mb-1">Temperature</div>
                <div className="text-lg text-white">72°F</div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-600 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-white">Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Peak Power</span>
                  <span className="text-green-400 font-bold">94.4 HP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Peak Torque</span>
                  <span className="text-orange-400 font-bold">72.3 lb-ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">0-60 mph</span>
                  <span className="text-blue-400 font-bold">3.2s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Efficiency</span>
                  <span className="text-purple-400 font-bold">87%</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg">
                <div className="text-sm text-white font-semibold">AI Recommendation</div>
                <div className="text-xs text-slate-300 mt-1">Optimize air/fuel ratio for +5HP</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Charts */}
        <Tabs defaultValue="power" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 backdrop-blur-sm">
            <TabsTrigger value="power" className="text-white">Power Curve</TabsTrigger>
            <TabsTrigger value="torque" className="text-white">Torque Curve</TabsTrigger>
            <TabsTrigger value="analysis" className="text-white">AI Analysis</TabsTrigger>
            <TabsTrigger value="compare" className="text-white">Compare</TabsTrigger>
          </TabsList>
          
          <TabsContent value="power">
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-600 shadow-2xl">
              <CardContent className="p-6">
                <div className="h-80 bg-gradient-to-br from-slate-900/50 to-blue-900/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="text-slate-400 z-10">Enhanced Power Curve Visualization</div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analysis">
            <Card className="bg-slate-800/40 backdrop-blur-sm border-slate-600 shadow-2xl">
              <CardContent className="p-6">
                <div className="h-80 bg-gradient-to-br from-purple-900/30 to-slate-900/50 rounded-lg p-6">
                  <h3 className="text-white text-xl mb-4">AI Performance Analysis</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">Optimal power band: 6000-7500 RPM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-slate-300">Torque curve suggests cam timing adjustment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Fuel efficiency can be improved by 12%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}