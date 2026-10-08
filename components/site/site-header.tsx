import { ArrowUpRight, Phone } from 'lucide-react'
import { contact } from '@/lib/contact'
import { Wordmark } from './wordmark'

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark-link" href="#top" aria-label="Hydropower Heavy Equipment, back to top">
        <Wordmark />
      </a>
      <nav aria-label="Main navigation">
        <a href="#capabilities">Parts</a>
        <a href="#applications">Applications</a>
        <a href="#request">Request</a>
        <a href="#visit">Visit</a>
      </nav>
      <div className="header-actions">
        <a className="phone-link" href={contact.phoneHref}>
          <Phone aria-hidden="true" />
          {contact.phoneDisplay}
        </a>
        <a className="button button-accent" href="#request">
          Request<span className="hide-sm"> a part</span> <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
