'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Card } from '@/components/ui/card'

const DynoSoftwareInterface = dynamic(() => import('@/dyno-software-interface'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
      <Card className="bg-gray-800 p-8">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <p>Loading Dyno Interface...</p>
        </div>
      </Card>
    </div>
  )
})

export default function DynoSoftwareInterfacePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynoSoftwareInterface />
    </Suspense>
  )
}