"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Play, Square, Settings, Download, Gauge, Thermometer, Zap, RotateCcw, CheckCircle } from "lucide-react"

export default function DynoSoftwareInterface() {
  const [isRunning, setIsRunning] = useState(false)
  const [testProgress, setTestProgress] = useState(0)
  const [currentRPM, setCurrentRPM] = useState(0)
  const [currentHP, setCurrentHP] = useState(0)
  const [currentTorque, setCurrentTorque] = useState(0)
  const [engineTemp, setEngineTemp] = useState(85)

  // Simulate real-time data updates
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTestProgress((prev) => Math.min(prev + 1, 100))
        setCurrentRPM((prev) => Math.min(prev + Math.random() * 100, 8000))
        setCurrentHP((prev) => Math.min(prev + Math.random() * 5, 150))
        setCurrentTorque((prev) => Math.min(prev + Math.random() * 3, 120))
        setEngineTemp((prev) => Math.min(prev + Math.random() * 2, 105))
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isRunning])

  const startTest = () => {
    setIsRunning(true)
    setTestProgress(0)
    setCurrentRPM(800)
    setCurrentHP(0)
    setCurrentTorque(0)
  }

  const stopTest = () => {
    setIsRunning(false)
  }

  const resetTest = () => {
    setIsRunning(false)
    setTestProgress(0)
    setCurrentRPM(0)
    setCurrentHP(0)
    setCurrentTorque(0)
    setEngineTemp(85)
  }

  return (
    <div className="w-full h-screen bg-gray-900 text-white p-4">
      <div className="grid grid-cols-12 gap-4 h-full">
        {/* Header */}
        <div className="col-span-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl text-blue-400">Motorcycle Dyno Test System v2.1</CardTitle>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="text-green-400 border-green-400">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Connected
                  </Badge>
                  <Badge variant="outline" className="text-blue-400 border-blue-400">
                    Calibrated
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Real-time Gauges */}
        <div className="col-span-8">
          <Card className="bg-gray-800 border-gray-700 h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Gauge className="w-5 h-5 mr-2" />
                Real-time Performance Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6 h-full">
                {/* RPM Gauge */}
                <div className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" stroke="#374151" strokeWidth="8" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#3b82f6"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${(currentRPM / 8000) * 283} 283`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-blue-400">{Math.round(currentRPM)}</span>
                      <span className="text-sm text-gray-400">RPM</span>
                    </div>
                  </div>
                </div>

                {/* Power/Torque Display */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-400 mb-2">{Math.round(currentHP)}</div>
                    <div className="text-lg text-gray-400">Horsepower</div>
                    <Progress value={(currentHP / 200) * 100} className="mt-2" />
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-400 mb-2">{Math.round(currentTorque)}</div>
                    <div className="text-lg text-gray-400">lb-ft Torque</div>
                    <Progress value={(currentTorque / 150) * 100} className="mt-2" />
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Thermometer className="w-6 h-6 mr-2 text-orange-400" />
                      <span className="text-2xl font-bold text-orange-400">{Math.round(engineTemp)}°C</span>
                    </div>
                    <div className="text-lg text-gray-400">Engine Temp</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Control Panel */}
        <div className="col-span-4">
          <Card className="bg-gray-800 border-gray-700 h-full">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Test Control
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Test Progress */}
              <div>
                <Label className="text-sm text-gray-400">Test Progress</Label>
                <Progress value={testProgress} className="mt-2" />
                <div className="text-right text-sm text-gray-400 mt-1">{testProgress}%</div>
              </div>

              {/* Control Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <Button onClick={startTest} disabled={isRunning} className="bg-green-600 hover:bg-green-700">
                  <Play className="w-4 h-4 mr-2" />
                  Start
                </Button>
                <Button onClick={stopTest} disabled={!isRunning} variant="destructive">
                  <Square className="w-4 h-4 mr-2" />
                  Stop
                </Button>
                <Button onClick={resetTest} variant="outline" className="col-span-2 bg-transparent">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Test
                </Button>
              </div>

              {/* Test Parameters */}
              <div className="space-y-3">
                <div>
                  <Label htmlFor="bike-model">Motorcycle Model</Label>
                  <Input id="bike-model" placeholder="e.g., Yamaha R1" className="bg-gray-700 border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="bike-weight">Weight (kg)</Label>
                  <Input id="bike-weight" type="number" placeholder="200" className="bg-gray-700 border-gray-600" />
                </div>
                <div>
                  <Label htmlFor="test-duration">Test Duration (min)</Label>
                  <Input id="test-duration" type="number" placeholder="5" className="bg-gray-700 border-gray-600" />
                </div>
              </div>

              {/* Export Data */}
              <Button variant="outline" className="w-full bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Export Test Data
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Data Visualization */}
        <div className="col-span-12">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>Performance Charts</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="power-curve" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="power-curve">Power Curve</TabsTrigger>
                  <TabsTrigger value="torque-curve">Torque Curve</TabsTrigger>
                  <TabsTrigger value="temperature">Temperature</TabsTrigger>
                </TabsList>

                <TabsContent value="power-curve" className="mt-4">
                  <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-12 h-12 mx-auto mb-2 text-blue-400" />
                      <p className="text-gray-400">Power curve visualization</p>
                      <p className="text-sm text-gray-500">Real-time chart will display here</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="torque-curve" className="mt-4">
                  <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <RotateCcw className="w-12 h-12 mx-auto mb-2 text-yellow-400" />
                      <p className="text-gray-400">Torque curve visualization</p>
                      <p className="text-sm text-gray-500">Real-time chart will display here</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="temperature" className="mt-4">
                  <div className="h-64 bg-gray-900 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Thermometer className="w-12 h-12 mx-auto mb-2 text-orange-400" />
                      <p className="text-gray-400">Temperature monitoring</p>
                      <p className="text-sm text-gray-500">Real-time chart will display here</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
