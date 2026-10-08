export function EquipmentShowcase() {
  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <h2 id="showcase-title" className="sr-only">
        Component illustrations
      </h2>
      <ul className="showcase-grid" data-reveal-group>
        <li>
          <figure>
            <svg viewBox="0 0 320 160" role="img" aria-label="Illustration of a hydraulic cylinder">
              <rect x="30" y="56" width="170" height="48" />
              <rect x="200" y="74" width="90" height="12" />
              <path d="M30 80h-14M60 56v-14h20v14M60 104v14h20v-14" />
              <path className="accent" d="M120 56v48" />
            </svg>
            <figcaption>Cylinder</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <svg viewBox="0 0 320 160" role="img" aria-label="Illustration of a directional valve">
              <rect x="70" y="40" width="180" height="80" />
              <path d="M130 40v80M190 40v80" />
              <path className="accent" d="M85 80h30M95 70l-10 10 10 10M145 70v20M165 70v20M215 80h20M225 70l10 10-10 10" />
              <path d="M110 40v-16M210 40v-16M110 120v16M210 120v16" />
            </svg>
            <figcaption>Directional valve</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <svg viewBox="0 0 320 160" role="img" aria-label="Illustration of a hose end fitting">
              <rect x="20" y="62" width="90" height="36" />
              <path d="M110 70h34v20h-34M144 62h30v36h-30" />
              <path className="accent" d="M174 80h20M194 62l30 18-30 18z" />
              <path d="M30 62v36M50 62v36M70 62v36M90 62v36" />
              <rect x="224" y="68" width="60" height="24" />
            </svg>
            <figcaption>Hose end fitting</figcaption>
          </figure>
        </li>
      </ul>
    </section>
  )
}
