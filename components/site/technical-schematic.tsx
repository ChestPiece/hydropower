export function TechnicalSchematic() {
  return (
    <figure className="schematic" data-reveal>
      <span className="schematic-label label-top">Hydraulic circuit / 01</span>
      <span className="schematic-label label-bottom">Ref. HHE / MUS-AD</span>
      <svg viewBox="0 0 640 460" role="img" aria-labelledby="schematic-title">
        <title id="schematic-title">Illustrated hydraulic circuit with pump, valve, and connecting lines</title>
        <path className="circuit-line circuit-orange" d="M78 105h124v82h92v112h108V184h104v-79h56" />
        <path className="circuit-line circuit-blue" d="M78 335h72v-68h122v-80h94v-82h108v69h88" />
        <path className="circuit-line circuit-steel" d="M124 105v230M202 187h92M294 299v61M404 184v115M508 105v105" />
        <circle className="node node-orange" cx="78" cy="105" r="14" />
        <circle className="node node-orange" cx="202" cy="187" r="14" />
        <circle className="node node-blue" cx="78" cy="335" r="14" />
        <circle className="node node-blue" cx="294" cy="187" r="14" />
        <circle className="node node-steel" cx="510" cy="184" r="14" />
        <rect className="component" x="250" y="255" width="88" height="88" rx="2" />
        <path className="component-mark" d="M274 299h40M294 279v40M278 283l32 32M310 283l-32 32" />
        <rect className="component component-small" x="426" y="136" width="64" height="64" rx="2" />
        <path className="component-mark component-mark-blue" d="M441 168h34M458 151v34" />
        <path className="dimension" d="M250 369h88M250 362v14M338 362v14" />
        <text x="276" y="393">88 MM</text>
        <text x="236" y="245">PUMP</text>
        <text x="420" y="126">VALVE</text>
      </svg>
      <figcaption className="schematic-note">
        <span className="blue-dot" aria-hidden="true" /> Technical illustration only
      </figcaption>
    </figure>
  )
}
