const applications = [
  'Construction equipment',
  'Industrial workshops',
  'Machinery maintenance',
  'Manufacturing',
  'Oil and gas support',
  'Industrial contracting',
]

export function Applications() {
  return (
    <section className="applications" id="applications" aria-labelledby="applications-title">
      <div className="section-heading" data-reveal>
        <h2 id="applications-title">Where these parts get used.</h2>
        <p className="section-lede">Typical working environments for hydraulic and heavy equipment components.</p>
      </div>
      <ul className="application-list" data-reveal-group>
        {applications.map((item, index) => (
          <li key={item}>
            <span className="application-number">{String(index + 1).padStart(2, '0')}</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
