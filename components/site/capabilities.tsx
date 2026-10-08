import { ArrowUpRight } from 'lucide-react'

const capabilities = [
  { id: '01', title: 'Hydraulic components', description: 'Cylinders, seals, hoses, and the parts that keep pressure where it belongs.' },
  { id: '02', title: 'Pumps & motors', description: 'Hydraulic pumps, motors, and drive-side components for working equipment.' },
  { id: '03', title: 'Valves', description: 'Control valves, cartridge valves, and directional hardware.' },
  { id: '04', title: 'Filters', description: 'Return, suction, pressure, and replacement filter requirements.' },
  { id: '05', title: 'Fittings & connections', description: 'Adapters, couplings, connectors, and hose-end requirements.' },
  { id: '06', title: 'Heavy equipment spares', description: 'Parts for excavators, loaders, cranes, and other heavy machinery.' },
]

export function Capabilities() {
  return (
    <section className="capabilities" id="capabilities" aria-labelledby="capabilities-title">
      <div className="section-heading" data-reveal>
        <h2 id="capabilities-title">Six part families. Send what you have.</h2>
        <p className="section-lede">Tell us what you have and we work from there.</p>
      </div>
      <ul className="capability-grid" data-reveal-group>
        {capabilities.map((item) => (
          <li key={item.id}>
            <a className="capability" href="#request">
              <span className="capability-number">{item.id}</span>
              <span className="capability-title">{item.title}</span>
              <span className="capability-text">{item.description}</span>
              <span className="capability-cta">
                Ask about this <ArrowUpRight aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
