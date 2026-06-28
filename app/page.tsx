import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhatWeBuild from '@/components/WhatWeBuild'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeBuild />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
