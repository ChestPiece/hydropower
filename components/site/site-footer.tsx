import { contact } from '@/lib/contact'
import { Wordmark } from './wordmark'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot-mast">
        <Wordmark />
        <p className="foot-tagline">Hydraulic &amp; heavy equipment parts. {contact.address}.</p>
        <p className="foot-links">
          <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp {contact.whatsappDisplay}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      </div>
      <small>Contact: {contact.contactName}. Mon to Sat, 8 AM to 6 PM. &copy; {new Date().getFullYear()} Hydropower Heavy Equipment</small>
    </footer>
  )
}
