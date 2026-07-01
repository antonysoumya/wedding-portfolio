import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import SectionHeader from './SectionHeader.jsx'
import PhotoCard from './PhotoCard.jsx'
import { PHOTOS, FILTERS } from '../data/photos.js'

const PAGE = 30 // start with 30, then load more

export default function CompleteGallery({ onOpen }) {
  const [filter, setFilter] = useState('all')
  const [visible, setVisible] = useState(PAGE)

  const filtered = useMemo(
    () => (filter === 'all' ? PHOTOS : PHOTOS.filter((p) => p.chapterKey === filter)),
    [filter]
  )
  const shown = filtered.slice(0, visible)
  const hasMore = visible < filtered.length

  const changeFilter = (key) => {
    setFilter(key)
    setVisible(PAGE)
  }

  return (
    <section id="gallery" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="bride" overlay={0.25} />
      <FloralCorners variant="lavender" corners={['tl']} size={160} />
      <FloralCorners variant="burgundy" corners={['br']} size={160} />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <SectionHeader
          eyebrow="The Complete Album"
          script="120 Frames"
          title="The Complete Wedding Album"
          caption="120 frames, one blessed love story."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => changeFilter(f.key)}
              className={`font-ui text-xs sm:text-sm tracking-wide px-4 py-2 rounded-full border transition-all ${
                filter === f.key
                  ? 'bg-burgundy text-ivory border-burgundy shadow-luxury'
                  : 'bg-ivory/70 text-charcoal border-soft-border hover:border-burgundy/50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry gallery — 2 cols mobile, 4 cols desktop via CSS columns */}
        <div className="mt-10 [column-count:2] md:[column-count:4] gap-3 sm:gap-4">
          {shown.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              className="mb-3 sm:mb-4 break-inside-avoid"
            >
              <PhotoCard photo={p} onClick={onOpen} />
            </motion.div>
          ))}
        </div>

        {/* Load more */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button className="btn-ghost" onClick={() => setVisible((v) => v + PAGE)}>
              Load More · {filtered.length - visible} left
            </button>
          </div>
        )}
        {!hasMore && (
          <p className="mt-10 text-center font-heading text-xl text-lavender-deep">
            {filtered.length} frames · with love, Studio K
          </p>
        )}
      </div>
    </section>
  )
}
