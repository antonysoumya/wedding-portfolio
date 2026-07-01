import React, { useCallback, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import HeroLanding from './components/HeroLanding.jsx'
import RoyalCoverHero from './components/RoyalCoverHero.jsx'
import BrideIntro from './components/BrideIntro.jsx'
import GroomIntro from './components/GroomIntro.jsx'
import TogetherIntro from './components/TogetherIntro.jsx'
import ChurchCeremony from './components/ChurchCeremony.jsx'
import VideoHighlight from './components/VideoHighlight.jsx'
import FamilyBlessings from './components/FamilyBlessings.jsx'
import ReceptionSection from './components/ReceptionSection.jsx'
import ForeverSection from './components/ForeverSection.jsx'
import CompleteGallery from './components/CompleteGallery.jsx'
import PhotoModal from './components/PhotoModal.jsx'
import FinalEnding from './components/FinalEnding.jsx'
import { PHOTOS } from './data/photos.js'

export default function App() {
  const [activeId, setActiveId] = useState(null)

  const open = useCallback((photo) => setActiveId(photo?.id ?? null), [])
  const close = useCallback(() => setActiveId(null), [])

  const activeIndex = PHOTOS.findIndex((p) => p.id === activeId)
  const activePhoto = activeIndex >= 0 ? PHOTOS[activeIndex] : null

  const prev = useCallback(() => {
    setActiveId((id) => {
      const i = PHOTOS.findIndex((p) => p.id === id)
      const next = (i - 1 + PHOTOS.length) % PHOTOS.length
      return PHOTOS[next].id
    })
  }, [])
  const next = useCallback(() => {
    setActiveId((id) => {
      const i = PHOTOS.findIndex((p) => p.id === id)
      const nextI = (i + 1) % PHOTOS.length
      return PHOTOS[nextI].id
    })
  }, [])

  return (
    <div className="relative bg-ivory">
      <Navbar />

      <main>
        <HeroLanding />
        <RoyalCoverHero />
        <BrideIntro onOpen={open} />
        <GroomIntro onOpen={open} />
        <TogetherIntro onOpen={open} />
        <ChurchCeremony onOpen={open} />
        <VideoHighlight onOpen={open} />
        <FamilyBlessings onOpen={open} />
        <ReceptionSection onOpen={open} />
        <ForeverSection onOpen={open} />
        <CompleteGallery onOpen={open} />
        <FinalEnding onOpen={open} />
      </main>

      <PhotoModal
        photo={activePhoto}
        total={PHOTOS.length}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </div>
  )
}
