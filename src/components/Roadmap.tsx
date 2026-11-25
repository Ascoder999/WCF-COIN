'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const phases = [
  { icon: '🥾', title: 'Phase 1: Genesis', description: 'Launch + stealth marketing. World Cup qualifier hype begins.', color: 'border-yellow-500' },
  { icon: '📢', title: 'Phase 2: Group Stage', description: 'CEX listings, major influencer campaign, giant airdrops.', color: 'border-yellow-500' },
  { icon: '🏆', title: 'Phase 3: Finals', description: '$WCF Stadium events, NFT collection + global charity match.', color: 'border-yellow-500' },
  { icon: '🌕', title: 'Phase 4: Boss Empire', description: 'Multi-chain expansion, DAO governance, becoming legend.', color: 'border-yellow-500' }
]

export default function Roadmap() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="roadmap" className="px-6 md:px-20 py-10">
      <div className="glass-card rounded-[3rem] p-8 md:p-12 backdrop-blur-md border border-white/20">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">
          THE WCF ROADMAP <span className="inline-block animate-pulse">⚡</span>
        </h2>
        
        <div ref={ref} className="grid md:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-black/30 rounded-2xl p-5 border-l-4 ${phase.color} hover:scale-105 transition-transform cursor-pointer`}
            >
              <div className="text-3xl">{phase.icon}</div>
              <h3 className="text-xl font-bold text-yellow-300 mt-2">{phase.title}</h3>
              <p className="text-white/70 text-sm mt-2">{phase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}