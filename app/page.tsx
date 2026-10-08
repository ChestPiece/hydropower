import { Applications } from '@/components/site/applications'
import { Capabilities } from '@/components/site/capabilities'
import { ContactClose } from '@/components/site/contact-close'
import { EquipmentShowcase } from '@/components/site/equipment-showcase'
import { Hero } from '@/components/site/hero'
import { MobileActionBar } from '@/components/site/mobile-action-bar'
import { Process } from '@/components/site/process'
import { RequestSection } from '@/components/site/request-section'
import { ScrollReveal } from '@/components/site/scroll-reveal'
import { SiteFooter } from '@/components/site/site-footer'
import { SiteHeader } from '@/components/site/site-header'
import { TaglineReveal } from '@/components/site/tagline-reveal'
import { Visit } from '@/components/site/visit'

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Capabilities />
        <EquipmentShowcase />
        <TaglineReveal />
        <Applications />
        <Process />
        <RequestSection />
        <Visit />
        <ContactClose />
      </main>
      <SiteFooter />
      <MobileActionBar />
      <ScrollReveal />
    </>
  )
}
