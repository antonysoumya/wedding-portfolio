import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SmartImage } from './PhotoCard.jsx'

/**
 * PhotoModal — full-screen elegant lightbox. Only one modal is mounted at a
 * time (driven by the active photo), with keyboard + swipe navigation.
 */
export default function PhotoModal({ photo, total, onClose, onPrev, onNext }) {
  const touch = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!photo) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [photo, onClose, onPrev, onNext])

  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      dx > 0 ? onPrev() : onNext()
    }
  }

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{
            background:
              'radial-gradient(120% 100% at 50% 0%, rgba(128,0,32,0.35), rgba(36,32,30,0.94))',
          }}
          onClick={onClose}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-ivory/90 text-burgundy hover:scale-110 transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            aria-label="Previous"
            className="absolute left-3 sm:left-8 z-10 grid h-12 w-12 place-items-center rounded-full bg-ivory/85 text-burgundy hover:scale-110 transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M12 2L4 9l8 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            aria-label="Next"
            className="absolute right-3 sm:right-8 z-10 grid h-12 w-12 place-items-center rounded-full bg-ivory/85 text-burgundy hover:scale-110 transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M6 2l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          {/* Framed photo */}
          <motion.figure
            key={photo.id}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative max-h-[86vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="photo-frame-luxury">
              <span className="frame-corner tl" />
              <span className="frame-corner tr" />
              <span className="frame-corner bl" />
              <span className="frame-corner br" />
              <div className="overflow-hidden rounded-lg bg-cream">
                <SmartImage
                  photo={photo}
                  className="max-h-[68vh] w-full object-contain bg-cream"
                />
              </div>
            </div>
            <figcaption className="mt-4 flex items-end justify-between gap-4 text-ivory">
              <div>
                <span className="label-eyebrow !text-champagne">{photo.chapter}</span>
                <h3 className="font-title text-2xl sm:text-3xl">{photo.title}</h3>
                <p className="font-body text-ivory/80 max-w-md mt-1">{photo.caption}</p>
              </div>
              <span className="font-ui text-sm tracking-[0.2em] whitespace-nowrap text-champagne">
                {String(photo.id).padStart(2, '0')} / {total}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
