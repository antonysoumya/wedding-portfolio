import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import OrnamentalFrame from './OrnamentalFrame.jsx'
import PhotoCard, { SmartImage } from './PhotoCard.jsx'
import { getRange } from '../data/photos.js'

const STRIP = ['Faith', 'Strength', 'Promise', 'Forever']

export default function GroomIntro({ onOpen }) {
  const photos = getRange(16, 30)
  const portrait = photos[0]
  const details = photos.slice(1, 4)
  const rail = photos.slice(4, 10)

  return (
    <section id="groom" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="groom" overlay={0.2} />
      <FloralCorners variant="burgundy" corners={['tl', 'br']} size={180} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="label-eyebrow">Chapter Two</span>
            <p className="script-burgundy text-4xl mt-2">A Promise in His Heart</p>
            <h2 className="font-title text-charcoal text-5xl sm:text-6xl mt-1">The Groom</h2>
            <div className="gold-line w-24 my-5" />
            <p className="font-body text-muted text-lg leading-relaxed max-w-md">
              A moment of pride, a heart full of love, and a promise to walk together for a lifetime.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {details.map((p) => (
                <PhotoCard key={p.id} photo={p} onClick={onOpen} showCaption={false} />
              ))}
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="order-1 lg:order-2 mx-auto w-full max-w-md"
          >
            <button onClick={() => onOpen?.(portrait)} className="block w-full">
              <OrnamentalFrame badge="The Groom" className="aspect-[4/5]">
                <SmartImage photo={portrait} className="h-full w-full object-cover" />
              </OrnamentalFrame>
            </button>
          </motion.div>
        </div>

        {/* Rail */}
        <div className="mt-12 h-scroll no-scrollbar">
          {rail.map((p) => (
            <div key={p.id} className="w-40 sm:w-48">
              <PhotoCard photo={p} onClick={onOpen} showCaption={false} />
            </div>
          ))}
        </div>

        {/* Info strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {STRIP.map((s, i) => (
            <React.Fragment key={s}>
              {i > 0 && <span className="text-champagne">•</span>}
              <span className="font-heading text-2xl sm:text-3xl text-burgundy">{s}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
