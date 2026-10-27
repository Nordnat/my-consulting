import { SiteHeader } from '@/components/growth-wheel/site-header'
import { Hero } from '@/components/home/hero'
import { Services } from '@/components/home/services'
import { GrowthWheelFeature } from '@/components/home/growth-wheel-feature'
import { Process } from '@/components/home/process'
import { About } from '@/components/home/about'
import { Contact } from '@/components/home/contact'
import { SiteFooter } from '@/components/home/site-footer'

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col bg-white text-slate-950">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <GrowthWheelFeature />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
