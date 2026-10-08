import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { contact } from '@/lib/contact'
import { TechnicalSchematic } from './technical-schematic'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title" className="hero-stagger">
          Keep your <span className="hl">equipment</span> moving.
        </h1>
        <p className="hero-intro hero-stagger">
          Send a part number, machine model, or photo from {contact.location}. We help you pin down
          exactly what to ask for.
        </p>
        <div className="hero-actions hero-stagger">
          <a className="button button-accent" href="#request">
            Request a part <ArrowUpRight aria-hidden="true" />
          </a>
          <a className="text-link" href="#capabilities">
            View capabilities
          </a>
          <a className="text-link" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" /> WhatsApp us
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
      <TechnicalSchematic />
      <dl className="hero-meta">
        <div>
          <dt>Location</dt>
          <dd>Musaffah M44, Abu Dhabi</dd>
        </div>
        <div>
          <dt>Hours</dt>
          <dd>Mon to Sat, 8 AM to 6 PM</dd>
        </div>
        <div>
          <dt>Enquiries</dt>
          <dd>WhatsApp, phone &amp; email</dd>
        </div>
      </dl>
    </section>
  )
}
