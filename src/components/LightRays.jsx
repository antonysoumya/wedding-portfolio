import React from 'react'

/**
 * LightRays — soft candle / chapel glow. Pure CSS radial gradients with a
 * gentle pulse; cheap on mobile.
 */
export default function LightRays({ color = 'rgba(216,181,109,0.5)', className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute left-1/2 top-0 h-[60%] w-[70%] -translate-x-1/2 animate-softLightPulse"
        style={{
          background: `radial-gradient(closest-side, ${color}, transparent 70%)`,
        }}
      />
      <div
        className="absolute left-1/4 bottom-0 h-[40%] w-[40%] animate-softLightPulse"
        style={{
          background: `radial-gradient(closest-side, ${color}, transparent 70%)`,
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute right-1/4 bottom-[10%] h-[35%] w-[35%] animate-softLightPulse"
        style={{
          background: `radial-gradient(closest-side, ${color}, transparent 70%)`,
          animationDelay: '4s',
        }}
      />
    </div>
  )
}
