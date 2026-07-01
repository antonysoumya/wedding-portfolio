import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import SectionHeader from './SectionHeader.jsx'
import PhotoCard from './PhotoCard.jsx'
import { getRange } from '../data/photos.js'

const QUOTE_CARDS = [
  'Blessed by many hands.',
  'Prayers wrapped around us.',
  'Loved beyond measure.',
]

export default function FamilyBlessings({ onOpen }) {
  const photos = getRange(71, 85)
  const large = photos.slice(0, 3)
  const collage = photos.slice(3, 11)

  return (
    <section id="family" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="groom" overlay={0.18} />
      <FloralCorners variant="burgundy" corners={['tl', 'br']} size={180} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Chapter Five"
          script="Love Around Us"
          title="Family & Blessings"
          caption="The day was made warmer by the people who prayed, smiled, blessed, and celebrated beside us."
        />

        {/* 3 large emotional photos */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {large.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <PhotoCard photo={p} onClick={onOpen} />
            </motion.div>
          ))}
        </div>

        {/* Collage */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {collage.map((p) => (
            <PhotoCard key={p.id} photo={p} onClick={onOpen} showCaption={false} />
          ))}
        </div>

        {/* Quote cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {QUOTE_CARDS.map((q) => (
            <div key={q} className="album-card px-6 py-6 text-center">
              <span className="script-burgundy text-3xl">Blessings</span>
              <p className="mt-2 font-body text-muted">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
