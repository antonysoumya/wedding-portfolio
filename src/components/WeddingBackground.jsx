import React from 'react'
import { asset } from '../utils/asset.js'

const BG_ASSET = {
  main: asset('assets/backgrounds/main-lavender-wedding-bg.jpg'),
  cover: asset('assets/backgrounds/royal-christian-cover-bg.jpg'),
  bride: asset('assets/backgrounds/bride-lavender-bg.jpg'),
  groom: asset('assets/backgrounds/groom-burgundy-bg.jpg'),
  together: asset('assets/backgrounds/together-lavender-bg.jpg'),
  church: asset('assets/backgrounds/church-ceremony-bg.jpg'),
  reception: asset('assets/backgrounds/reception-wine-bg.jpg'),
  forever: asset('assets/backgrounds/forever-lavender-bg.jpg'),
}

// CSS gradient fallback class per theme (used underneath the PNG so a missing
// asset still looks intentional).
const BG_FALLBACK = {
  main: 'royal-hero-bg',
  cover: 'lavender-wedding-bg',
  bride: 'lavender-wedding-bg',
  groom: 'burgundy-wedding-bg',
  together: 'lavender-wedding-bg',
  church: 'church-ceremony-bg',
  reception: 'reception-wine-bg',
  forever: 'forever-lavender-bg',
}

/**
 * WeddingBackground — themed section background. Renders the CSS-gradient
 * fallback class always, then layers the PNG asset on top when available.
 */
export default function WeddingBackground({ theme = 'main', overlay = 0.0, children, className = '' }) {
  const asset = BG_ASSET[theme]
  const fallback = BG_FALLBACK[theme] || 'royal-hero-bg'

  return (
    <div className={`absolute inset-0 z-0 ${fallback} ${className}`} aria-hidden="true">
      {asset && (
        <img
          src={asset}
          alt=""
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          className="h-full w-full object-cover opacity-95 animate-cloudMove"
        />
      )}
      {/* Soft scrim so headings/text stay legible over the imagery.
          Dark themes (reception) get a wine veil; light themes get an ivory one. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            theme === 'reception'
              ? 'linear-gradient(180deg, rgba(58,10,19,0.35) 0%, rgba(37,5,9,0.55) 100%)'
              : 'linear-gradient(90deg, rgba(255,253,248,0.78) 0%, rgba(255,253,248,0.34) 50%, rgba(255,253,248,0.1) 100%)',
        }}
      />
      {overlay > 0 && (
        <div className="absolute inset-0" style={{ background: `rgba(255,253,248,${overlay})` }} />
      )}
      {overlay > 0 && (
        <div className="absolute inset-0" style={{ background: `rgba(255,253,248,${overlay})` }} />
      )}
      {children}
    </div>
  )
}
