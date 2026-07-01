import React from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import SectionHeader from './SectionHeader.jsx'
import { SmartImage } from './PhotoCard.jsx'
import { getRange } from '../data/photos.js'

/**
 * ForeverSection — editorial magazine spread. Each photo becomes a "page" with
 * a large decorative word, thin gold border and a caption, alternating B&W and
 * warm color for a printed-album feel.
 */
export default function ForeverSection({ onOpen }) {
  const photos = getRange(106, 120)
  const pages = photos.slice(0, 6)

  return (
    <section id="forever" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="forever" overlay={0.1} />
      <FloralCorners variant="lavender" corners={['tl', 'br']} size={170} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Chapter Seven"
          script="The Story Continues"
          title="Forever Memories"
          caption="An editorial keepsake — the frames we will return to for a lifetime."
        />

        <div className="mt-14 space-y-12">
          {pages.map((p, i) => {
            const flip = i % 2 === 1
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 ${
                  flip ? 'md:[direction:rtl]' : ''
                }`}
              >
                <button
                  onClick={() => onOpen?.(p)}
                  className="block [direction:ltr] w-full"
                >
                  <div className="rounded-xl border border-champagne/60 p-2 bg-ivory shadow-frame">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                      <SmartImage photo={p} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </button>

                <div className="[direction:ltr]">
                  <h3 className="font-title text-6xl sm:text-7xl text-charcoal leading-none tracking-tight">
                    {p.word}
                  </h3>
                  <div className="gold-line w-20 my-4" />
                  <p className="font-body text-lg text-muted max-w-sm leading-relaxed">{p.caption}</p>
                  <span className="mt-4 inline-block font-ui text-[11px] tracking-[0.3em] uppercase text-burgundy">
                    {String(p.id)} / 120
                  </span>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
