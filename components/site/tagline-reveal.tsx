'use client'

import { useEffect, useRef } from 'react'

const statement = 'Have a part number? Send it to us, with the machine model and a photo if you have one.'

export function TaglineReveal() {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const words = ref.current?.querySelectorAll<HTMLElement>('.tagline-word')
    if (!words) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      words.forEach((word) => word.classList.add('is-lit'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-lit', entry.isIntersecting || entry.boundingClientRect.top < 0)
        }),
      { rootMargin: '0px 0px -35% 0px' },
    )
    words.forEach((word) => observer.observe(word))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="tagline" aria-label="Send us your part number">
      <p ref={ref} className="tagline-text">
        {statement.split(' ').map((word, index) => (
          <span key={index} className="tagline-word">
            {word}{' '}
          </span>
        ))}
      </p>
    </section>
  )
}
