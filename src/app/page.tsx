'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tokenomics from '@/components/Tokenomics'
import Roadmap from '@/components/Roadmap'
import Community from '@/components/Community'
import Footer from '@/components/Footer'
import ThreeBackground from '@/components/ThreeBackground'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {mounted && <ThreeBackground />}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Tokenomics />
        <Roadmap />
        <Community />
        <Footer />
      </div>
    </main>
  )
}