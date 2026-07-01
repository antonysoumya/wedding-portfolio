import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import FloatingPetals from './FloatingPetals.jsx'
import OrnamentalFrame from './OrnamentalFrame.jsx'
import PhotoCard, { SmartImage } from './PhotoCard.jsx'
import { getRange } from '../data/photos.js'

const POINTS = ['Grace in Every Detail', 'A Heart Full of Dreams', 'Captured with Love']

export default function BrideIntro({ onOpen }) {
  const photos = getRange(1, 15)
  const portrait = photos[0]
  const details = photos.slice(1, 3)
  const rail = photos.slice(3, 9)

  return (
    <section id="bride" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="bride" overlay={0.15} />
      <FloralCorners variant="lavender" corners={['tr', 'bl']} size={180} />
      <FloatingPetals count={8} colors={['#C8A2C8', '#E9DDF5', '#D8B56D']} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1.2fr_0.9fr]">
          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-eyebrow">Chapter One</span>
            <p className="script-burgundy text-4xl mt-2">Grace in Every Detail</p>
            <h2 className="font-title text-charcoal text-5xl sm:text-6xl mt-1">The Bride</h2>
            <div className="gold-line w-24 my-5" />
            <p className="font-body text-muted text-lg leading-relaxed max-w-md">
              She walks with grace, carrying dreams, love, and the quiet beauty of a forever promise.
            </p>
          </motion.div>

          {/* Center portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="mx-auto w-full max-w-sm"
          >
            <button onClick={() => onOpen?.(portrait)} className="block w-full">
              <OrnamentalFrame badge="The Bride" className="aspect-[3/4]">
                <SmartImage photo={portrait} className="h-full w-full object-cover" />
              </OrnamentalFrame>
            </button>
          </motion.div>

          {/* Right detail portraits + points */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {details.map((p) => (
                <PhotoCard key={p.id} photo={p} onClick={onOpen} showCaption={false} />
              ))}
            </div>
            <ul className="space-y-3">
              {POINTS.map((pt) => (
                <li key={pt} className="flex items-center gap-3 font-heading text-lg text-charcoal">
                  <span className="h-2 w-2 rounded-full bg-lavender-deep" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Horizontal rail */}
        <div className="mt-12 h-scroll no-scrollbar">
          {rail.map((p) => (
            <div key={p.id} className="w-40 sm:w-48">
              <PhotoCard photo={p} onClick={onOpen} showCaption={false} />
            </div>
          ))}
        </div>

        {/* Quote card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mx-auto max-w-2xl text-center album-card px-8 py-8"
        >
          <p className="font-body italic text-xl sm:text-2xl text-charcoal leading-relaxed">
            “She is clothed with strength and dignity, and she laughs without fear of the future.”
          </p>
          <span className="mt-3 block script-burgundy text-3xl">Grace</span>
        </motion.div>
      </div>
    </section>
  )
}
