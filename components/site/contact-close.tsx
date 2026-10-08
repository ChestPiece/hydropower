import { MessageCircle } from 'lucide-react'
import { contact } from '@/lib/contact'

export function ContactClose() {
  return (
    <section className="contact-close" aria-labelledby="close-title">
      <h2 id="close-title" data-reveal>
        Have a part number?
      </h2>
      <div className="close-actions" data-reveal>
        <p>Send it over as it is. We take it from there.</p>
        <a className="button button-accent" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
          <MessageCircle aria-hidden="true" /> WhatsApp us
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a className="close-phone" href={contact.phoneHref}>
          or call {contact.phoneDisplay}
        </a>
      </div>
    </section>
  )
}
