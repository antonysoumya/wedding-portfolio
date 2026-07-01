import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloatingPetals from './FloatingPetals.jsx'
import LightRays from './LightRays.jsx'
import OrnamentalFrame from './OrnamentalFrame.jsx'
import SectionHeader from './SectionHeader.jsx'
import PhotoCard, { SmartImage } from './PhotoCard.jsx'
import { getRange } from '../data/photos.js'

const STORY = ['The First Dance', 'The Cake', 'With Family', 'With Friends']

export default function ReceptionSection({ onOpen }) {
  const photos = getRange(86, 105)
  const wide = photos[0]
  const portraits = photos.slice(1, 4)
  const candids = photos.slice(4, 10)
  const story = photos.slice(10, 14)

  return (
    <section id="reception" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="reception" overlay={0} />
      <LightRays color="rgba(216,181,109,0.35)" />
      <FloatingPetals count={10} colors={['#D8B56D', '#9B2D42', '#800020']} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <SectionHeader
          light
          eyebrow="Chapter Six"
          script="A Night of Joy"
          title="The Reception"
          caption="The evening glowed with laughter, music, celebration, and memories that will stay forever."
        />

        {/* Wide photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-12"
        >
          <button onClick={() => onOpen?.(wide)} className="block w-full">
            <OrnamentalFrame badge="A Night of Joy" className="aspect-[16/9]">
              <SmartImage photo={wide} className="h-full w-full object-cover" />
            </OrnamentalFrame>
          </button>
        </motion.div>

        {/* Portrait cards */}
        <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-5">
          {portraits.map((p) => (
            <PhotoCard key={p.id} photo={p} onClick={onOpen} showCaption={false} />
          ))}
        </div>

        {/* Candid row */}
        <div className="mt-6 h-scroll no-scrollbar">
          {candids.map((p) => (
            <div key={p.id} className="w-40 sm:w-48">
              <PhotoCard photo={p} onClick={onOpen} showCaption={false} />
            </div>
          ))}
        </div>

        {/* Story cards */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {story.map((p, i) => (
            <div key={p.id} className="relative">
              <PhotoCard photo={p} onClick={onOpen} showCaption={false} />
              <span className="absolute bottom-2 left-2 font-ui text-[10px] tracking-[0.2em] uppercase bg-wine/85 text-ivory px-2 py-1 rounded-full">
                {STORY[i % STORY.length]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
