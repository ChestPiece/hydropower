'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group] > *')
    document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        ;(child as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(index, 6) * 60}ms`)
      })
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
    )

    root.classList.add('reveal-ready')
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return null
}
