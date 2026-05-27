'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card mx-4 md:mx-10 mt-4' : 'bg-transparent mt-6'
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        <div className="text-2xl md:text-3xl font-black tracking-tighter bg-linear-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
          $WCF
        </div>
        
        <div className="hidden md:flex gap-8 text-white/80 font-medium">
          <a href="#" className="hover:text-yellow-300 transition-colors">Home</a>
          <a href="#tokenomics" className="hover:text-yellow-300 transition-colors">Tokenomics</a>
          <a href="#roadmap" className="hover:text-yellow-300 transition-colors">Roadmap</a>
          <a href="#community" className="hover:text-yellow-300 transition-colors">Community</a>
        </div>
        
        <button className="bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-yellow-400/50 text-yellow-300 font-semibold text-sm hover:bg-yellow-400/20 transition-all">
          BUY NOW 🚀
        </button>
      </div>
    </motion.nav>
  )
}