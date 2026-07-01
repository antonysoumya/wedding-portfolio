import React from 'react'
import { motion } from 'framer-motion'
import { SmartImage } from './PhotoCard.jsx'
import OrnamentalFrame from './OrnamentalFrame.jsx'

/**
 * AlbumBook3D — a 3D stack of framed photos with a large hero frame in front
 * and 2–3 cards fanned behind it. Slow float via Framer Motion, disabled for
 * reduced-motion users (Framer respects the media query through the transition
 * but we also keep the motion subtle).
 */
export default function AlbumBook3D({ photos = [], badge = '01 / 120' }) {
  const [main, ...rest] = photos
  if (!main) return null

  return (
    <div className="relative mx-auto w-full max-w-sm" style={{ perspective: 1200 }}>
      {/* Back cards */}
      {rest.slice(0, 3).map((p, i) => {
        const offset = (i + 1) * 18
        const rot = (i + 1) * (i % 2 === 0 ? -4 : 5)
        return (
          <motion.div
            key={p.id}
            className="absolute inset-0"
            style={{ zIndex: i, transformOrigin: 'center' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.8 }}
            animate={{ y: [0, -8, 0] }}
            // eslint-disable-next-line react/no-unknown-property
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [rot, rot + 1.5, rot] }}
              transition={{ duration: 8 + i, repeat: Infinity, ease: 'easeInOut' }}
              style={{ transform: `translateX(${offset}px) translateY(${offset}px) rotate(${rot}deg)` }}
              className="h-full w-full"
            >
              <OrnamentalFrame corner={false} className="h-full">
                <SmartImage photo={p} className="h-full w-full object-cover" />
              </OrnamentalFrame>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Main frame */}
      <motion.div
        className="relative z-10 aspect-[3/4]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        animate={{ y: [0, -14, 0] }}
      >
        <motion.div
          animate={{ y: [0, -14, 0], rotateY: [0, -2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="h-full w-full"
        >
          <OrnamentalFrame badge={badge} className="h-full">
            <SmartImage photo={main} className="h-full w-full object-cover" />
          </OrnamentalFrame>
        </motion.div>
      </motion.div>
    </div>
  )
}
