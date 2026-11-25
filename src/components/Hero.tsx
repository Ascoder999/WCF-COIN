'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-3 bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-yellow-500/40 mb-6"
      >
        <span className="text-2xl animate-bounce">🏆</span>
        <span className="text-yellow-300 font-mono text-sm tracking-widest">WORLD CUP FINALS EDITION</span>
        <span className="text-2xl animate-bounce delay-100">⚽</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter">
          <span className="bg-linear-to-r from-yellow-300 via-amber-400 to-orange-500 bg-clip-text text-transparent animate-pulse">
            World Cup Finals
          </span>
        </h1>
        <div className="absolute -top-6 -right-8 md:-top-10 md:-right-12 text-7xl md:text-8xl animate-float">🐉</div>
        <div className="absolute -bottom-8 -left-6 md:-bottom-12 md:-left-10 text-6xl md:text-7xl animate-float delay-300">🔥</div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-white/80 text-lg md:text-2xl max-w-2xl mt-8 backdrop-blur-sm px-4 py-2 rounded-2xl"
      >
        The most legendary meme coin of the 2030 World Cup Finals.
        <br className="hidden md:block"/>
        <span className="text-yellow-300 font-bold">Power, glory, and moon shots.</span> Join the WCF army.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-wrap gap-5 justify-center mt-10"
      >
        <button className="btn-gold text-black font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 transition-all shadow-xl">
          BUY $WCF 🚀
        </button>
        <button className="bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all">
          Chart 📈
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-wrap justify-center gap-6 mt-16"
      >
        {[
          { value: '100x', label: 'Potential' },
          { value: '🏆 2026', label: 'Finals Meme' },
          { value: '∞', label: 'Community Driven' }
        ].map((stat, i) => (
          <div key={i} className="glass-card px-6 py-3 rounded-2xl min-w-32.5">
            <div className="text-yellow-300 text-2xl font-black">{stat.value}</div>
            <div className="text-xs text-white/60">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}