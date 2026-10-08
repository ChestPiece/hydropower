const steps = [
  { id: '01', title: 'Share what you have', text: 'A part number, machine plate, or photo is enough to start.' },
  { id: '02', title: 'We review the requirement', text: 'We look at the details and ask for anything missing.' },
  { id: '03', title: 'Agree the next step', text: 'Continue on WhatsApp, phone, or email, whichever suits you.' },
]

const intakeFields = ['Part number / requirement', 'Machine model', 'Brand / manufacturer', 'Quantity', 'Reference photo']

export function Process() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="process-intro" data-reveal>
        <h2 id="process-title">
          How a request <span className="hl">works.</span>
        </h2>
        <ol className="steps" data-reveal-group>
          {steps.map((step) => (
            <li key={step.id} className="step">
              <span className="step-number">{step.id}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="document" data-reveal aria-hidden="true">
        <div className="document-top">
          <span>Request intake / 02</span>
          <span>HHE-MUS-AD</span>
        </div>
        <div className="document-title">Part identification</div>
        <ul className="document-lines">
          {intakeFields.map((field, index) => (
            <li key={field}>
              <b>{String(index + 1).padStart(2, '0')}</b>
              {field}
            </li>
          ))}
        </ul>
        <div className="document-stamp">Send what you have</div>
      </div>
    </section>
  )
}
