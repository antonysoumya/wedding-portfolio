import React from 'react'
import { motion } from 'framer-motion'

/**
 * SectionHeader — shared editorial header: eyebrow label, Playfair title,
 * decorative script subtitle, gold divider and caption.
 */
export default function SectionHeader({
  eyebrow,
  title,
  script,
  caption,
  align = 'center',
  light = false,
}) {
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center'
  const titleColor = light ? 'text-ivory' : 'text-charcoal'
  const capColor = light ? 'text-ivory/80' : 'text-muted'

  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`flex flex-col ${alignCls} max-w-2xl ${align === 'left' ? '' : 'mx-auto'}`}
    >
      {eyebrow && <span className="label-eyebrow mb-3">{eyebrow}</span>}
      {script && (
        <span className="script-burgundy text-3xl sm:text-4xl leading-none mb-1">
          {script}
        </span>
      )}
      <h2 className={`font-title ${titleColor} text-3xl sm:text-4xl md:text-5xl leading-tight`}>
        {title}
      </h2>
      <div className={`gold-line w-24 my-4 ${align === 'left' ? '' : 'mx-auto'}`} />
      {caption && (
        <p className={`font-body ${capColor} text-base sm:text-lg leading-relaxed max-w-xl`}>
          {caption}
        </p>
      )}
    </motion.header>
  )
}
