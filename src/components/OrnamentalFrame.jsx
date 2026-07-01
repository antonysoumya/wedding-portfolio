import React from 'react'

/**
 * OrnamentalFrame — the reusable white-and-gold luxury frame used for hero and
 * featured portraits. Wraps arbitrary children (usually a SmartImage).
 */
export default function OrnamentalFrame({ children, className = '', badge, corner = true }) {
  return (
    <div className={`photo-frame-luxury ${className}`}>
      {corner && (
        <>
          <span className="frame-corner tl" />
          <span className="frame-corner tr" />
          <span className="frame-corner bl" />
          <span className="frame-corner br" />
        </>
      )}
      <div className="relative h-full w-full overflow-hidden rounded-lg">{children}</div>
      {badge && (
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-ui text-[10px] tracking-[0.3em] uppercase bg-burgundy text-ivory px-3 py-1 rounded-full shadow-luxury z-10">
          {badge}
        </span>
      )}
    </div>
  )
}
