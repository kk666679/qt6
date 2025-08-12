"use client"

import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Text, Html } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DynoStation3D() {
  const [showSpecs, setShowSpecs] = useState(false)
  const [activeComponent, setActiveComponent] = useState<string | null>(null)

  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Canvas camera={{ position: [8, 6, 8], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />

        <DynoStationModel onComponentClick={setActiveComponent} />

        <Environment preset="warehouse" />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {/* Component Labels */}
        <Text position={[0, 4, 0]} fontSize={0.5} color="#ffffff" anchorX="center" anchorY="middle">
          Modern Motorcycle Dyno Station
        </Text>

        {/* Interactive UI Overlay */}
        <Html position={[6, 3, 0]} transform occlude>
          <Card className="w-80 bg-black/80 text-white border-gray-600">
            <CardHeader>
              <CardTitle className="text-lg">Station Components</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveComponent("rollers")}
                  className={activeComponent === "rollers" ? "bg-blue-600" : ""}
                >
                  Roller System
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveComponent("frame")}
                  className={activeComponent === "frame" ? "bg-blue-600" : ""}
                >
                  Frame Structure
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveComponent("mounting")}
                  className={activeComponent === "mounting" ? "bg-blue-600" : ""}
                >
                  Mounting System
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveComponent("sensors")}
                  className={activeComponent === "sensors" ? "bg-blue-600" : ""}
                >
                  Sensor Array
                </Button>
              </div>

              {activeComponent && (
                <div className="mt-4 p-3 bg-gray-800 rounded">
                  <ComponentInfo component={activeComponent} />
                </div>
              )}
            </CardContent>
          </Card>
        </Html>
      </Canvas>

      {/* Control Panel */}
      <div className="absolute bottom-4 left-4 right-4">
        <Card className="bg-black/80 text-white border-gray-600">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4">
                <Badge variant="outline" className="text-green-400 border-green-400">
                  System Ready
                </Badge>
                <Badge variant="outline" className="text-blue-400 border-blue-400">
                  Calibrated
                </Badge>
              </div>
              <Button onClick={() => setShowSpecs(!showSpecs)} variant="outline">
                {showSpecs ? "Hide" : "Show"} Specifications
              </Button>
            </div>

            {showSpecs && (
              <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-400">Roller System</h4>
                  <p>• Diameter: 12" adjustable</p>
                  <p>• Max Speed: 200 mph</p>
                  <p>• Load Capacity: 500 HP</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-400">Sensors</h4>
                  <p>• RPM: ±1 RPM accuracy</p>
                  <p>• Torque: ±0.1% accuracy</p>
                  <p>• Temperature: ±1°C</p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-400">Frame</h4>
                  <p>• Steel construction</p>
                  <p>• Modular design</p>
                  <p>• Adjustable wheelbase</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function DynoStationModel({ onComponentClick }: { onComponentClick: (component: string) => void }) {
  const frameRef = useRef()
  const rollerRef = useRef()

  useFrame((state) => {
    if (rollerRef.current) {
      rollerRef.current.rotation.x += 0.02
    }
  })

  return (
    <group>
      {/* Base Frame */}
      <group ref={frameRef} onClick={() => onComponentClick("frame")}>
        <mesh position={[0, -1, 0]}>
          <boxGeometry args={[8, 0.2, 4]} />
          <meshStandardMaterial color="#2a2a2a" />
        </mesh>

        {/* Support Pillars */}
        <mesh position={[-3, 0, -1.5]}>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshStandardMaterial color="#404040" />
        </mesh>
        <mesh position={[3, 0, -1.5]}>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshStandardMaterial color="#404040" />
        </mesh>
        <mesh position={[-3, 0, 1.5]}>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshStandardMaterial color="#404040" />
        </mesh>
        <mesh position={[3, 0, 1.5]}>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshStandardMaterial color="#404040" />
        </mesh>
      </group>

      {/* Roller System */}
      <group onClick={() => onComponentClick("rollers")}>
        <mesh ref={rollerRef} position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.6, 0.6, 3, 32]} />
          <meshStandardMaterial color="#1a5490" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Secondary Roller */}
        <mesh position={[0, -0.3, -2.5]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 3, 32]} />
          <meshStandardMaterial color="#1a5490" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Mounting Arms */}
      <group onClick={() => onComponentClick("mounting")}>
        <mesh position={[-2, 1, 0]}>
          <boxGeometry args={[0.2, 1.5, 0.2]} />
          <meshStandardMaterial color="#ff6b35" />
        </mesh>
        <mesh position={[2, 1, 0]}>
          <boxGeometry args={[0.2, 1.5, 0.2]} />
          <meshStandardMaterial color="#ff6b35" />
        </mesh>

        {/* Adjustable Clamps */}
        <mesh position={[-2, 1.8, 0]}>
          <boxGeometry args={[0.5, 0.2, 0.5]} />
          <meshStandardMaterial color="#ff6b35" />
        </mesh>
        <mesh position={[2, 1.8, 0]}>
          <boxGeometry args={[0.5, 0.2, 0.5]} />
          <meshStandardMaterial color="#ff6b35" />
        </mesh>
      </group>

      {/* Control Panel */}
      <mesh position={[4, 1.5, 0]}>
        <boxGeometry args={[1, 1.2, 0.2]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Screen */}
      <mesh position={[4.11, 1.5, 0]}>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial color="#000000" emissive="#004400" emissiveIntensity={0.3} />
      </mesh>

      {/* Sensors */}
      <group onClick={() => onComponentClick("sensors")}>
        <mesh position={[0, 0.5, 2]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#00ff00" emissive="#004400" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[1.5, 0.5, 1]}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="#ff0000" emissive="#440000" emissiveIntensity={0.2} />
        </mesh>
        <mesh position={[-1.5, 0.5, 1]}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="#0000ff" emissive="#000044" emissiveIntensity={0.2} />
        </mesh>
      </group>

      {/* Cooling Fans */}
      <mesh position={[0, 2.5, -3]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 8]} />
        <meshStandardMaterial color="#606060" />
      </mesh>

      {/* Motorcycle Placeholder */}
      <group position={[0, 0.3, 0]}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[2, 0.3, 0.8]} />
          <meshStandardMaterial color="#cc0000" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.2, -1.2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 0.2, 1.2]}>
          <cylinderGeometry args={[0.35, 0.35, 0.2, 16]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>
    </group>
  )
}

function ComponentInfo({ component }: { component: string }) {
  const info = {
    rollers: {
      title: "Roller Dynamometer System",
      details: [
        "Motorized roller with variable speed control",
        "Load cell integration for torque measurement",
        "Adjustable diameter for different tire sizes",
        "High-precision speed sensors",
      ],
    },
    frame: {
      title: "Structural Frame",
      details: [
        "Heavy-duty steel construction",
        "Modular design for easy assembly",
        "Vibration dampening system",
        "Adjustable for different wheelbases",
      ],
    },
    mounting: {
      title: "Motorcycle Mounting System",
      details: [
        "Adjustable wheel chocks",
        "Tie-down points with quick release",
        "Safety restraint system",
        "Compatible with various bike geometries",
      ],
    },
    sensors: {
      title: "Sensor Array",
      details: [
        "RPM sensors with ±1 RPM accuracy",
        "Load cells for torque measurement",
        "Temperature sensors (engine & exhaust)",
        "Pressure sensors for intake monitoring",
      ],
    },
  }

  const currentInfo = info[component as keyof typeof info]

  return (
    <div>
      <h4 className="font-semibold text-blue-400 mb-2">{currentInfo.title}</h4>
      <ul className="text-sm space-y-1">
        {currentInfo.details.map((detail, index) => (
          <li key={index} className="text-gray-300">
            • {detail}
          </li>
        ))}
      </ul>
    </div>
  )
}
