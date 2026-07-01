import React, { useState, memo } from 'react'

// Palette used for graceful CSS fallbacks when a photo file is missing.
const TONE_FALLBACK = {
  'lavender-bridal': 'linear-gradient(150deg,#E9DDF5,#C8A2C8 60%,#8E6FAE)',
  'burgundy-rich': 'linear-gradient(150deg,#EFE2D0,#9B2D42 70%,#800020)',
  'wedding-soft': 'linear-gradient(150deg,#FAF4EA,#E9DDF5 60%,#C8A2C8)',
  'church-golden': 'linear-gradient(150deg,#FAF4EA,#D8B56D 70%,#800020)',
  'reception-wine': 'linear-gradient(150deg,#9B2D42,#5A0F1B 70%,#250509)',
  'editorial-bw': 'linear-gradient(150deg,#e9e4dd,#8b837c 60%,#3a3532)',
}

/**
 * SmartImage — lazy, async-decoded image with a themed CSS fallback if the
 * source fails to load (so the album never shows a broken-image icon while
 * the 120 real photos are being dropped in).
 */
export function SmartImage({ photo, className = '', sizes }) {
  const [failed, setFailed] = useState(false)
  const fallback = TONE_FALLBACK[photo.tone] || TONE_FALLBACK['wedding-soft']

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center ${className}`}
        style={{ background: fallback }}
        aria-label={photo.title}
      >
        <div className="text-center px-3">
          <div className="font-decor text-ivory/90 text-2xl drop-shadow">
            {photo.chapter}
          </div>
          <div className="font-ui text-[10px] tracking-[0.3em] text-ivory/70 mt-1">
            {String(photo.id).padStart(3, '0')} / 120
          </div>
        </div>
      </div>
    )
  }

  return (
    <img
      src={photo.image}
      alt={photo.title}
      loading="lazy"
      decoding="async"
      sizes={sizes}
      onError={() => setFailed(true)}
      className={`${photo.tone} ${className}`}
      style={{ objectPosition: photo.focusPosition }}
    />
  )
}

/**
 * PhotoCard — a single luxury album card. Memoised because the gallery renders
 * dozens at once.
 */
function PhotoCardBase({ photo, onClick, index = 0, showCaption = true }) {
  const ratio =
    photo.orientation === 'landscape'
      ? 'aspect-[4/3]'
      : photo.orientation === 'square'
      ? 'aspect-square'
      : 'aspect-[3/4]'

  return (
    <button
      type="button"
      onClick={() => onClick?.(photo)}
      className="group relative w-full text-left album-card frameHoverLift focus:outline-none focus:ring-2 focus:ring-champagne/70"
      aria-label={`Open photo ${photo.id}: ${photo.title}`}
    >
      <div className={`relative w-full overflow-hidden ${ratio}`}>
        <SmartImage
          photo={photo}
          sizes="(max-width: 768px) 50vw, 25vw"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wine/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {photo.featured && (
          <span className="absolute top-2 left-2 font-ui text-[9px] tracking-[0.25em] uppercase bg-ivory/85 text-burgundy px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      {showCaption && (
        <div className="flex items-center justify-between px-3 py-2">
          <span className="font-heading text-charcoal text-base leading-tight truncate">
            {photo.title}
          </span>
          <span className="font-ui text-[10px] tracking-[0.2em] text-burgundy shrink-0 ml-2">
            {String(photo.id).padStart(2, '0')}
          </span>
        </div>
      )}
    </button>
  )
}

const PhotoCard = memo(PhotoCardBase)
export default PhotoCard
