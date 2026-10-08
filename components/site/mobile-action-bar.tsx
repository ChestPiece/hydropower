import { MessageCircle, Phone } from 'lucide-react'
import { contact } from '@/lib/contact'

export function MobileActionBar() {
  return (
    <div className="mobile-bar" role="region" aria-label="Quick contact">
      <a className="button button-ink-outline" href={contact.phoneHref}>
        <Phone aria-hidden="true" /> Call
      </a>
      <a className="button button-accent" href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
        <MessageCircle aria-hidden="true" /> WhatsApp<span className="sr-only"> (opens in a new tab)</span>
      </a>
    </div>
  )
}
