import React, { useMemo } from 'react'

const usePrefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * FloatingPetals — lightweight drifting lavender/rose petals rendered with pure
 * CSS transforms. Count is kept small for mobile performance and disabled when
 * the user prefers reduced motion.
 */
export default function FloatingPetals({ count = 12, colors }) {
  const reduce = usePrefersReducedMotion()
  const palette = colors || ['#C8A2C8', '#9B2D42', '#E9DDF5', '#D8B56D', '#800020']

  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 12 + Math.random() * 12,
        size: 8 + Math.random() * 12,
        color: palette[i % palette.length],
        blur: Math.random() > 0.6,
      })),
    [count] // eslint-disable-line react-hooks/exhaustive-deps
  )

  if (reduce) return null

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 animate-petalFloat"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.7,
            background: p.color,
            borderRadius: '60% 0 60% 0',
            opacity: 0.55,
            filter: p.blur ? 'blur(1px)' : 'none',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
