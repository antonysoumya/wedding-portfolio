import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import LightRays from './LightRays.jsx'
import OrnamentalFrame from './OrnamentalFrame.jsx'
import SectionHeader from './SectionHeader.jsx'
import PhotoCard, { SmartImage } from './PhotoCard.jsx'
import { getRange } from '../data/photos.js'

const MOMENTS = [
  'The Entrance',
  'The Vows',
  'The Rings',
  'The Blessing',
  'The First Prayer',
  'The First Kiss',
]

const QUOTES = [
  '“Love is patient, love is kind.”',
  '“Two hearts. One faith. One forever.”',
  '“Today, love became a promise.”',
]

export default function ChurchCeremony({ onOpen }) {
  const photos = getRange(46, 70)
  const altar = photos[10] || photos[0]
  const grid = photos.filter((p) => p.id !== altar.id).slice(0, 6)
  const rail = photos.slice(12, 20)

  return (
    <section id="ceremony" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="church" overlay={0.08} />
      <LightRays color="rgba(216,181,109,0.45)" />
      <FloralCorners variant="burgundy" corners={['tl']} size={190} />
      <FloralCorners variant="lavender" corners={['br']} size={190} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Chapter Four"
          script='Where Two Souls Say “I Do”'
          title="The Ceremony"
          caption="Before God, family, and love, two hearts became one promise."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          {/* Altar photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <button onClick={() => onOpen?.(altar)} className="block w-full">
              <OrnamentalFrame badge="At the Altar" className="aspect-[4/3]">
                <SmartImage photo={altar} className="h-full w-full object-cover" />
              </OrnamentalFrame>
            </button>
          </motion.div>

          {/* Moment cards */}
          <div className="grid grid-cols-2 gap-4">
            {grid.map((p, i) => (
              <div key={p.id} className="relative">
                <PhotoCard photo={p} onClick={onOpen} showCaption={false} />
                <span className="absolute bottom-2 left-2 font-ui text-[10px] tracking-[0.2em] uppercase bg-ivory/85 text-burgundy px-2 py-1 rounded-full">
                  {MOMENTS[i % MOMENTS.length]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rail */}
        <div className="mt-10 h-scroll no-scrollbar">
          {rail.map((p) => (
            <div key={p.id} className="w-40 sm:w-48">
              <PhotoCard photo={p} onClick={onOpen} showCaption={false} />
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {QUOTES.map((q) => (
            <motion.blockquote
              key={q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="album-card px-6 py-7 text-center"
            >
              <p className="font-body italic text-lg text-charcoal leading-relaxed">{q}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
