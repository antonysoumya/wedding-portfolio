import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import FloatingPetals from './FloatingPetals.jsx'
import AlbumBook3D from './AlbumBook3D.jsx'
import SectionHeader from './SectionHeader.jsx'
import PhotoCard from './PhotoCard.jsx'
import { getRange } from '../data/photos.js'

const PREVIEWS = ['Our Love, Our Story', 'Timeless Connection', 'Moments of Us']

export default function TogetherIntro({ onOpen }) {
  const photos = getRange(31, 45)
  const stack = photos.slice(0, 4)
  const cards = photos.slice(4, 10)

  return (
    <section id="together" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="together" overlay={0.15} />
      <FloralCorners variant="lavender" corners={['tl', 'br']} size={180} />
      <FloatingPetals count={10} colors={['#C8A2C8', '#E9DDF5', '#9B2D42']} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Chapter Three"
          script="Our Love, Our Story"
          title="Together Before Forever"
          caption="In every glance, a promise. In every smile, a beginning. Together is where forever starts."
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="px-4 sm:px-10">
            <AlbumBook3D photos={stack} badge="Together" />
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {cards.map((p) => (
                <PhotoCard key={p.id} photo={p} onClick={onOpen} showCaption={false} />
              ))}
            </div>

            <div className="mt-8 space-y-3">
              {PREVIEWS.map((t) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="album-card flex items-center justify-between px-5 py-4"
                >
                  <span className="font-heading text-xl text-charcoal">{t}</span>
                  <span className="script-burgundy text-2xl">Love</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
