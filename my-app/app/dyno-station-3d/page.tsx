'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Card } from '@/components/ui/card'

const DynoStation3D = dynamic(() => import('@/dyno-station-3d'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <Card className="bg-black/80 p-8">
        <div className="text-white text-center">
          <div className="animate-pulse">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 animate-bounce"></div>
          </div>
          <p>Initializing 3D Environment...</p>
        </div>
      </Card>
    </div>
  )
})

export default function DynoStation3DPage() {
  return (
    <Suspense fallback={<div>Loading 3D...</div>}>
      <DynoStation3D />
    </Suspense>
  )
}