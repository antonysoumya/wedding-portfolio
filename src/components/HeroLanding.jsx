import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloatingPetals from './FloatingPetals.jsx'
import FloralCorners from './FloralCorners.jsx'
import LightRays from './LightRays.jsx'
import AlbumBook3D from './AlbumBook3D.jsx'
import { getRange } from '../data/photos.js'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function HeroLanding() {
  const heroPhotos = getRange(1, 4)

  return (
    <section
      id="hero"
      className="mobile-snap-section relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <WeddingBackground theme="main" />
      <LightRays color="rgba(216,181,109,0.35)" />
      <FloralCorners variant="lavender" corners={['tl']} size={220} opacity={0.85} />
      <FloralCorners variant="burgundy" corners={['br']} size={220} opacity={0.85} />
      <FloatingPetals count={14} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center md:text-left"
        >
          <span className="label-eyebrow">Christian Wedding Photography Portfolio</span>
          <h1 className="mt-5 font-title text-charcoal text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[4.2rem]">
            Where Every
            <br />
            Vow Becomes
            <br />
            <span className="font-decor text-[3.4rem] sm:text-7xl md:text-[5rem] text-burgundy">
              a Memory
            </span>
          </h1>
          <p className="mx-auto md:mx-0 mt-6 max-w-md font-body text-base sm:text-lg text-muted leading-relaxed">
            A royal Christian wedding album of faith, love, vows, laughter, blessings, and timeless
            memories beautifully preserved.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 md:justify-start justify-center">
            <button className="btn-primary w-full sm:w-auto" onClick={() => scrollTo('cover')}>
              Enter Wedding Album
            </button>
            <button className="btn-ghost w-full sm:w-auto" onClick={() => scrollTo('gallery')}>
              View 120 Photos
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 justify-center md:justify-start">
            <div className="gold-line w-10" />
            <span className="font-heading text-lg text-lavender-deep">120 Frames of Love, Faith &amp; Forever</span>
          </div>
        </motion.div>

        {/* Visual */}
        <div className="relative">
          <AlbumBook3D photos={heroPhotos} badge="01 / 120" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-2 right-2 sm:right-6 album-card px-4 py-3 flex items-center gap-3"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-burgundy text-ivory font-decor text-lg">
              K
            </span>
            <div className="leading-tight">
              <div className="font-heading text-charcoal">Stories by Studio K</div>
              <div className="font-ui text-[10px] tracking-[0.2em] text-muted uppercase">Wedding Films &amp; Photos</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="font-ui text-[10px] tracking-[0.3em] text-muted uppercase">Scroll</span>
        <div className="mx-auto mt-1 h-8 w-px bg-gradient-to-b from-champagne to-transparent" />
      </motion.div>
    </section>
  )
}
