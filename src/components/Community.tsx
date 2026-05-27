'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'Twitter', icon: '🐦', color: 'bg-[#1DA1F2]', url: 'https://x.com/WCFCOIN' },
  { name: 'Telegram', icon: '💬', color: 'bg-[#25D366]', url: 'https://t.me/WCFCOINN' },
  { name: 'Discord', icon: '🎮', color: 'bg-[#5865F2]', url: '#' }
]

export default function Community() {
  return (
    <section id="community" className="px-6 md:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto glass-card p-10 rounded-3xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 text-9xl opacity-10 animate-spin-slow">🏆</div>
        
        <h3 className="text-3xl md:text-5xl font-black text-yellow-300 text-center">
          Join The Finals Revolution
        </h3>
        
        <p className="text-white/80 text-xl mt-4 text-center">
          Be part of the most explosive meme coin of 2026.
          <br />
          Don't watch from the stands — get your $FINALBOSS now.
        </p>
        
        <div className="flex justify-center gap-5 mt-8 flex-wrap">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`${social.color} hover:brightness-110 text-white font-bold py-3 px-6 rounded-full flex gap-2 items-center transition-all shadow-lg`}
            >
              <span>{social.icon}</span>
              <span>{social.name}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}