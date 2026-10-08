'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { contact } from '@/lib/contact'

// Hours per the Google Maps listing: Monday to Saturday 8 AM to 6 PM, Sunday closed (Asia/Dubai).
function isOpenNow(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Dubai', weekday: 'short', hour: 'numeric', hour12: false }).formatToParts(date)
  const weekday = parts.find((part) => part.type === 'weekday')?.value
  const hour = Number(parts.find((part) => part.type === 'hour')?.value) % 24
  return weekday !== 'Sun' && hour >= 8 && hour < 18
}

export function Visit() {
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => setOpen(isOpenNow(new Date())), [])

  return (
    <section className="visit" id="visit" aria-labelledby="visit-title">
      <div className="visit-info" data-reveal>
        <h2 id="visit-title">Find us in Musaffah.</h2>
        <address className="visit-address">{contact.address}</address>
        <p className="visit-status" role="status">
          {open === null ? ' ' : open ? 'Open now' : 'Closed now'}
        </p>
        <dl className="hours">
          {contact.hours.map((row) => (
            <div key={row.days}>
              <dt>{row.days}</dt>
              <dd>{row.time}</dd>
            </div>
          ))}
        </dl>
        <a className="button button-accent" href={contact.mapsHref} target="_blank" rel="noopener noreferrer">
          Get directions <ArrowUpRight aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
      <div className="visit-map" data-reveal>
        <iframe title="Map showing Hydropower Heavy Equipment in Musaffah M44, Abu Dhabi" src={contact.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  )
}
