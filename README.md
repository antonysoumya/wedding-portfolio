# Grace & Forever — Royal Lavender Burgundy Christian Wedding Portfolio

A premium, mobile-first Christian wedding photography portfolio for **STUDIO K**.
120 frames of love, faith & forever, built with **React + Vite + Tailwind CSS + Framer Motion**.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Add your media

The site references media by path and degrades gracefully if a file is missing
(themed CSS gradients stand in for absent photos, the video keeps its poster).

| What | Where to drop files |
| --- | --- |
| 120 photos | `public/images/wedding_001.jpg … wedding_120.jpg` |
| Highlight film | `public/videos/wedding-highlight.mp4` |
| Theme backgrounds | `public/assets/backgrounds/*.png` (already populated from `pngs-bg/`) |

Photo → chapter mapping lives in [`src/data/photos.js`](src/data/photos.js):

- `001–015` Bride · `016–030` Groom · `031–045` Together
- `046–070` Ceremony · `071–085` Family · `086–105` Reception · `106–120` Forever
- `071` doubles as the video poster.

## Sections

Royal hero · Royal album cover · Bride · Groom · Together · Ceremony ·
Video highlight · Family & Blessings · Reception · Forever (editorial) ·
Complete 120-photo gallery (filters + Load More) · Photo lightbox · Final ending.

## Performance

Lazy + async-decoded images, gallery starts at 30 and loads more, single mounted
modal, `preload="metadata"` video with poster, CSS-transform animations, and full
`prefers-reduced-motion` support.
