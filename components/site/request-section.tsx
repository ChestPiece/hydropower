'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { contact } from '@/lib/contact'

const initialForm = { part: '', machine: '', brand: '', quantity: '', details: '' }
type FormField = keyof typeof initialForm

export function RequestSection() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(false)
  const [partError, setPartError] = useState(false)

  function updateField(field: FormField, value: string) {
    setSent(false)
    if (field === 'part' && value.trim()) setPartError(false)
    setForm((current) => ({ ...current, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!form.part.trim()) {
      setPartError(true)
      document.getElementById('field-part')?.focus()
      return
    }
    const message = [
      'Hello Hydropower Heavy Equipment, I would like to ask about a part.',
      `Part / requirement: ${form.part.trim()}`,
      form.machine.trim() && `Machine model: ${form.machine.trim()}`,
      form.brand.trim() && `Brand: ${form.brand.trim()}`,
      form.quantity.trim() && `Quantity: ${form.quantity.trim()}`,
      form.details.trim() && `Additional details: ${form.details.trim()}`,
    ]
      .filter(Boolean)
      .join('\n')
    setSent(true)
    window.open(`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="request" id="request" aria-labelledby="request-title">
      <div className="request-aside" data-reveal>
        <h2 id="request-title">
          Have a part <span className="hl">in mind?</span>
        </h2>
        <p className="request-lede">
          Fill in whatever you know. The button opens WhatsApp with your details ready to send. Nothing is stored on this
          page.
        </p>
        <div className="direct-contact">
          <span className="direct-label">Prefer to talk directly?</span>
          <span>{contact.contactName}</span>
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp {contact.whatsappDisplay}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={contact.phoneHref}>Call {contact.phoneDisplay}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </div>

      <form className="request-form" onSubmit={handleSubmit} noValidate data-reveal>
        <div className="form-grid">
          <div className="field field-wide">
            <label htmlFor="field-part">
              Part number or requirement <span className="required">Required</span>
            </label>
            <input
              id="field-part"
              name="part"
              autoComplete="off"
              value={form.part}
              onChange={(event) => updateField('part', event.target.value)}
              placeholder="e.g. 708-2L-00300 or hydraulic pump"
              aria-invalid={partError}
              aria-describedby={partError ? 'part-error' : undefined}
            />
            {partError && (
              <p className="field-error" id="part-error">
                Add a part number or a short description so we know where to start.
              </p>
            )}
          </div>
          <div className="field">
            <label htmlFor="field-machine">Machine model</label>
            <input id="field-machine" name="machine" autoComplete="off" value={form.machine} onChange={(event) => updateField('machine', event.target.value)} placeholder="e.g. Komatsu PC210" />
          </div>
          <div className="field">
            <label htmlFor="field-brand">Brand / manufacturer</label>
            <input id="field-brand" name="brand" autoComplete="off" value={form.brand} onChange={(event) => updateField('brand', event.target.value)} placeholder="If known" />
          </div>
          <div className="field">
            <label htmlFor="field-quantity">Quantity</label>
            <input id="field-quantity" name="quantity" inputMode="numeric" autoComplete="off" value={form.quantity} onChange={(event) => updateField('quantity', event.target.value)} placeholder="How many?" />
          </div>
          <div className="field field-wide">
            <label htmlFor="field-details">Additional details</label>
            <textarea id="field-details" name="details" rows={4} value={form.details} onChange={(event) => updateField('details', event.target.value)} placeholder="Dimensions, condition, whether you have photos, or anything else useful." />
          </div>
        </div>
        <div className="form-footer">
          <button className="button button-accent submit-button" type="submit">
            Open WhatsApp request <ArrowUpRight aria-hidden="true" />
          </button>
          <p className="form-status" role="status">
            {sent && (
              <>
                <Check aria-hidden="true" /> WhatsApp opened in a new tab with your details.
              </>
            )}
          </p>
        </div>
      </form>
    </section>
  )
}
