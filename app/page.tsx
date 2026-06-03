'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import CoreFeatures from '@/components/CoreFeatures'
import NewsCenter from '@/components/NewsCenter'
import SocialSquare from '@/components/SocialSquare'
import Advantages from '@/components/Advantages'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-deep-dark">
      <Hero />
      <About />
      <CoreFeatures />
      <NewsCenter />
      <SocialSquare />
      <Advantages />
      <CTASection />
      <Footer />
    </main>
  )
}
