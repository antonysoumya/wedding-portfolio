import React from 'react'
import { asset } from '../utils/asset.js'

const CORNER_ASSET = {
  lavender: asset('assets/backgrounds/lavender-floral-corner.png'),
  burgundy: asset('assets/backgrounds/burgundy-rose-corner.png'),
}

/**
 * FloralCorners — decorative flower clusters anchored to the section corners.
 * Uses the uploaded PNG assets; if an asset is missing the <img> simply hides
 * itself, leaving a clean section (graceful fallback).
 */
export default function FloralCorners({
  variant = 'lavender',
  corners = ['tl', 'br'],
  size = 190,
  opacity = 0.9,
}) {
  // The supplied corner PNGs ship with an opaque checkerboard background (no
  // alpha), so they can't blend cleanly over a section. The themed section
  // backgrounds already provide lush floral framing, so this overlay is a no-op.
  // (Kept as a component so existing imports/props stay valid; drop in true
  // transparent PNGs here to re-enable.)
  return null

  // eslint-disable-next-line no-unreachable
  const src = CORNER_ASSET[variant] || CORNER_ASSET.lavender

  const posClass = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0 scale-x-[-1]',
    bl: 'bottom-0 left-0 scale-y-[-1]',
    br: 'bottom-0 right-0 -scale-100',
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {corners.map((c) => (
        <img
          key={c}
          src={src}
          alt=""
          decoding="async"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          className={`absolute ${posClass[c]} select-none`}
          style={{
            width: size,
            maxWidth: '34vw',
            opacity,
            // These floral PNGs have an opaque near-white background; multiply
            // blends that white into the section so only the flowers show.
            mixBlendMode: 'multiply',
          }}
        />
      ))}
    </div>
  )
}
