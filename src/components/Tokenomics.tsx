'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const tokenomicsData = [
  { icon: '💰', title: 'Total Supply', value: '1,000,000,000', description: '1 Billion $WCF', gradient: 'from-yellow-300 to-orange-500' },
  { icon: '🔥', title: 'Liquidity Locked', value: '100%', description: 'for 5 years - safe as a fortress', gradient: 'from-red-400 to-orange-500' },
  { icon: '🎯', title: 'Marketing & Dev', value: '5%', description: 'for global domination & World Cup campaigns', gradient: 'from-blue-400 to-purple-500' }
]

export default function Tokenomics() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="tokenomics" className="px-6 md:px-20 py-24">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-6xl font-black text-white inline-block border-b-4 border-yellow-500 pb-2">
          TOKENOMICS
        </h2>
        <p className="text-white/60 mt-4 text-lg">Fair launch, zero taxes, built for the finals hype</p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tokenomicsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-card p-6 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <div className="text-5xl mb-3">{item.icon}</div>
            <h3 className="text-2xl font-bold text-yellow-300">{item.title}</h3>
            <p className="text-3xl font-mono font-bold text-white mt-2">{item.value}</p>
            <p className="text-white/50 text-sm mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}