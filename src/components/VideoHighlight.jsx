import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import WeddingBackground from './WeddingBackground.jsx'
import FloralCorners from './FloralCorners.jsx'
import SectionHeader from './SectionHeader.jsx'
import PhotoCard from './PhotoCard.jsx'
import { VIDEO, getRange } from '../data/photos.js'

export default function VideoHighlight({ onOpen }) {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  const thumbs = getRange(72, 74)

  const play = () => {
    const v = ref.current
    if (!v) return
    v.play()
    setPlaying(true)
  }

  return (
    <section id="video" className="mobile-snap-section relative overflow-hidden py-20 sm:py-28">
      <WeddingBackground theme="cover" overlay={0.2} />
      <FloralCorners variant="lavender" corners={['tr', 'bl']} size={170} />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="The Wedding Film"
          script="A Film of Forever"
          title="Wedding Highlight"
          caption="A glimpse of the vows, smiles, blessings, and the quiet moments that made the day unforgettable."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 video-frame aspect-video bg-wine"
        >
          <video
            ref={ref}
            className="h-full w-full object-cover"
            poster={VIDEO.poster}
            preload="metadata"
            controls={playing}
            playsInline
            onPause={() => setPlaying(false)}
            onError={(e) => {
              // Missing video file: keep the poster + play affordance, hide native errors.
              e.currentTarget.removeAttribute('controls')
            }}
          >
            <source src={VIDEO.src} type="video/mp4" />
          </video>

          {!playing && (
            <button
              onClick={play}
              className="absolute inset-0 grid place-items-center bg-gradient-to-t from-wine/60 via-transparent to-wine/20"
              aria-label="Play wedding highlight film"
            >
              <span className="grid h-20 w-20 place-items-center rounded-full bg-ivory/90 text-burgundy shadow-luxury transition-transform hover:scale-110">
                <svg width="26" height="30" viewBox="0 0 26 30" fill="currentColor" aria-hidden="true">
                  <path d="M0 0l26 15L0 30z" />
                </svg>
              </span>
              <span className="absolute bottom-5 font-ui text-xs tracking-[0.3em] uppercase text-ivory">
                Play the Film
              </span>
            </button>
          )}
        </motion.div>

        {/* Thumbnails */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {thumbs.map((p) => (
            <PhotoCard key={p.id} photo={p} onClick={onOpen} showCaption={false} />
          ))}
        </div>

        <p className="mt-8 text-center font-body italic text-xl text-charcoal">
          “Some moments are too beautiful for words — so we filmed them.”
        </p>
      </div>
    </section>
  )
}
