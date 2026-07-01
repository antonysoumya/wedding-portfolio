import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import FloatingPetals from './FloatingPetals.jsx'
import LightRays from './LightRays.jsx'
import { SmartImage } from './PhotoCard.jsx'
import { PHOTOS } from '../data/photos.js'

const scrollTop = () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })

export default function FinalEnding({ onOpen }) {
  // 7 small framed keepsakes spread across the album.
  const picks = [3, 22, 38, 55, 79, 96, 118]
    .map((id) => PHOTOS.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <section
      id="ending"
      className="mobile-snap-section relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden py-24 text-center"
    >
      <WeddingBackground theme="forever" overlay={0.05} />
      <LightRays color="rgba(216,181,109,0.4)" />
      <FloralCorners variant="lavender" corners={['tl', 'tr']} size={180} />
      <FloralCorners variant="burgundy" corners={['bl', 'br']} size={180} />
      <FloatingPetals count={12} />

      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-heading text-2xl sm:text-3xl md:text-4xl text-charcoal leading-relaxed"
        >
          These are not just photographs.
          <br />
          They are the quiet proof of love,
          <br />
          faith, vows, blessings,
          <br />
          and a day beautifully remembered.
        </motion.p>

        <p className="script-burgundy text-5xl sm:text-6xl mt-8">The story continues…</p>

        {/* 7 small framed photos */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {picks.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => onOpen?.(p)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-lg border border-champagne/70 bg-ivory p-1 shadow-frame frameHoverLift"
              style={{ transform: `rotate(${(i % 2 ? 1 : -1) * (2 + i)}deg)` }}
            >
              <SmartImage photo={p} className="h-full w-full rounded object-cover" />
            </motion.button>
          ))}
        </div>

        <button className="btn-primary mt-12" onClick={scrollTop}>
          Back to Beginning
        </button>

        <footer className="mt-14 border-t border-soft-border/70 pt-6">
          <p className="font-ui text-xs sm:text-sm tracking-[0.2em] text-muted uppercase">
            Grace &amp; Forever · 120 Frames of Love, Faith &amp; Forever · Stories by Studio K
          </p>
        </footer>
      </div>
    </section>
  )
}
