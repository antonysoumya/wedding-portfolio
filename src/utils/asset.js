// Prefix runtime asset paths with Vite's base URL so they resolve correctly
// whether served from "/" (local/Vercel) or "/wedding-portfolio/" (GitHub Pages).
const BASE = import.meta.env.BASE_URL || '/'

export const asset = (path) => BASE + String(path).replace(/^\/+/, '')

export default asset
