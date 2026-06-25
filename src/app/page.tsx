// Root landing page — ReEmpoderate
// Public route — no auth required

import { HeroSection } from '@/components/landing/HeroSection'
import { ServicesSection } from '@/components/landing/ServicesSection'
import { CoachingPreview } from '@/components/landing/CoachingPreview'
import { GalleryPreview } from '@/components/landing/GalleryPreview'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'
import { CTASection } from '@/components/landing/CTASection'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-light-bg">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CoachingPreview />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
