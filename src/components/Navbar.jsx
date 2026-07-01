import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'bride', label: 'Bride' },
  { id: 'groom', label: 'Groom' },
  { id: 'ceremony', label: 'Ceremony' },
  { id: 'video', label: 'Film' },
  { id: 'reception', label: 'Reception' },
  { id: 'gallery', label: 'Album' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ivory/85 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(90,15,27,0.4)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:py-4">
        <button onClick={() => go('hero')} className="text-left leading-none">
          <span className="block font-title text-xl sm:text-2xl text-burgundy">Grace &amp; Forever</span>
          <span className="block font-ui text-[9px] tracking-[0.35em] text-lavender-deep uppercase mt-0.5">
            Studio K
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="font-ui text-[13px] tracking-wide text-charcoal/80 hover:text-burgundy transition-colors"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button onClick={() => go('gallery')} className="btn-primary !py-2 !px-5 text-sm">
              View 120
            </button>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-0.5 w-6 bg-burgundy transition-all ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-burgundy transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-burgundy transition-all ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-ivory/95 backdrop-blur-md border-t border-soft-border"
          >
            <ul className="flex flex-col px-6 py-4">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="w-full text-left font-heading text-xl py-3 text-charcoal hover:text-burgundy border-b border-soft-border/60"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <button onClick={() => go('gallery')} className="btn-primary w-full">
                  View 120 Photos
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
