import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import LightRays from './LightRays.jsx'
import OrnamentalFrame from './OrnamentalFrame.jsx'
import { SmartImage } from './PhotoCard.jsx'
import { PHOTOS } from '../data/photos.js'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function RoyalCoverHero() {
  const cover = PHOTOS.find((p) => p.id === 33) || PHOTOS[0]

  return (
    <section
      id="cover"
      className="mobile-snap-section relative flex min-h-[100svh] items-center justify-center overflow-hidden py-20"
    >
      <WeddingBackground theme="cover" overlay={0.1} />
      <LightRays color="rgba(216,181,109,0.4)" />
      <FloralCorners variant="lavender" corners={['tl', 'tr']} size={200} />
      <FloralCorners variant="burgundy" corners={['bl', 'br']} size={200} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <span className="label-eyebrow">The Album Cover</span>
          <h2 className="mt-4 font-title text-charcoal text-4xl sm:text-5xl md:text-6xl leading-tight">
            A Royal
            <br />
            Christian Wedding
          </h2>
          <p className="script-burgundy text-4xl sm:text-5xl mt-3">Blessed in Love</p>
          <div className="gold-line w-24 my-5 mx-auto md:mx-0" />
          <p className="font-body text-muted text-lg max-w-md mx-auto md:mx-0">
            Two hearts, one promise, and a lifetime held gently in every frame.
          </p>
          <button className="btn-primary mt-8" onClick={() => scrollTo('bride')}>
            Begin the Story
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-1 md:order-2 mx-auto w-full max-w-md"
        >
          <div className="relative p-4 sm:p-6 rounded-[22px] bg-ivory/70 backdrop-blur-sm shadow-luxury border border-champagne/40">
            <OrnamentalFrame badge="A Royal Wedding" className="aspect-[3/4]">
              <SmartImage photo={cover} className="h-full w-full object-cover" />
            </OrnamentalFrame>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
