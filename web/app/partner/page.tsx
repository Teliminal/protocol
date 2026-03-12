'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const domainOptions = [
  'Cognitive Psychology / TMT Literature',
  'Philosophy of Mind',
  'AI Safety',
  'AI Interpretability',
  'Behavioral Science Methodology',
  'Computational Linguistics',
  'Other — describe below',
]

export default function PartnerPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', state: '', country: '',
    affiliation: '', domain: '', challenge: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const submit = async () => {
    if (!form.name || !form.email || !form.domain || !form.challenge) {
      setErrorMsg('Name, email, domain background, and methodology challenge are required.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/partner-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!data.ok) throw new Error(data.error || 'Submission failed')
      setStatus('success')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <Nav />

      <main className="pt-14">

        {/* Header */}
        <div className="px-12 max-w-5xl mx-auto pt-24 pb-12 border-b border-border">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_#22c55e]" />
            <span className="font-mono text-[0.65rem] text-muted tracking-[0.14em] uppercase">
              File: TLM-PARTNER-001 · Status: Accepting Applications · Slots: 1
            </span>
          </div>
          <p className="doc-tag mb-4">// Partner</p>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-bold text-white leading-tight mb-6">
            Research Partnership —<br />First Cohort — 2026
          </h1>
          <p className="font-sans text-[1.05rem] text-dim leading-relaxed max-w-2xl">
            The battery is running. The thesis is not yet published. The methodology
            has specific vulnerabilities that have not yet been subjected to external
            adversarial pressure. This is an invitation to apply that pressure — and
            to be part of what comes next.
          </p>
        </div>

        <div className="px-12 max-w-5xl mx-auto py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left column — context */}
          <div>
            <section className="mb-14">
              <p className="doc-tag mb-5">// What This Is</p>
              <h2 className="font-serif text-2xl font-bold text-bright italic mb-5">
                An invitation to break the methodology.
              </h2>
              <p className="prose-body mb-4">
                Teliminal is seeking its first human research partner — a collaborator
                with domain expertise who will engage seriously with the MMAD-EI protocol,
                challenge its methodological weaknesses, and contribute to the Phase 3
                cross-model and instance isolation tracks.
              </p>
              <p className="prose-body">
                This is not a call for endorsement. The strongest contribution a research
                partner can make at this stage is the objection that forces the next
                architectural rebuild. The platform was built around the premise that
                adversarial challenge improves research.
              </p>
            </section>

            <section className="mb-14">
              <p className="doc-tag mb-5">// Role</p>
              <h2 className="font-serif text-xl font-bold text-bright mb-5">
                What a Research Partner Does
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Engage with the methodology',
                    body: 'Read the full battery architecture, the track schema, the contamination monitor design. Identify the design decisions that could have gone differently and articulate why the choice made is either correct or vulnerable.',
                  },
                  {
                    title: 'Challenge the findings',
                    body: 'The Phase 1 Precision Paradox — B > A > C disruption ordering — is the primary empirical result. What are the three strongest alternative explanations? What data would differentiate them from the TMT account?',
                  },
                  {
                    title: 'Contribute to Phase 3',
                    body: 'Phase 3 introduces cross-model tracks and account-level instance isolation tracks. A partner with API access can run tracks. A partner without can contribute to design and analysis.',
                  },
                  {
                    title: 'Co-author on findings',
                    body: 'If the collaboration produces publishable contributions, co-authorship is the appropriate credit arrangement and will be treated as such.',
                  },
                ].map(item => (
                  <div key={item.title} className="flex gap-3">
                    <span className="text-accent mt-1 flex-shrink-0 font-mono text-[0.8rem]">→</span>
                    <div>
                      <span className="font-mono text-[0.75rem] text-bright block mb-1">{item.title}</span>
                      <p className="text-[0.86rem] text-dim leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-14">
              <p className="doc-tag mb-5">// Access</p>
              <h2 className="font-serif text-xl font-bold text-bright mb-5">What You&apos;d Have Access To</h2>
              <ul className="space-y-2.5">
                {[
                  'Full battery runner source code',
                  'Complete Phase 1 output archives (300 rounds, three tracks)',
                  'Phase 2 output in progress, updating as tracks complete',
                  'All adversarial review documents — the full record of what was challenged and how it was answered',
                  'The working thesis draft — not the polished final version, the version with the scars showing',
                  'Direct access to the PI for working collaboration',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                    <span className="font-mono text-[0.75rem] text-dim">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-14">
              <p className="doc-tag mb-5">// Requirements</p>
              <h2 className="font-serif text-xl font-bold text-bright mb-5">What Teliminal Is Looking For</h2>
              <div className="card divide-y divide-border">
                {[
                  { req: 'Domain depth', desc: 'In at least one of: cognitive psychology / TMT literature / philosophy of mind / AI safety / AI interpretability / behavioral science methodology.' },
                  { req: 'Intellectual honesty', desc: 'Willingness to state plainly when the methodology is weak, when the findings don\'t support the claims, and when the thesis overclaims. Non-negotiable.' },
                  { req: 'Tolerance for preliminary work', desc: 'The battery is running. The paper is not written. The findings may not survive Phase 2. A partner who needs finished output is working at the wrong stage.' },
                  { req: 'Genuine interest', desc: 'Whether LLMs exhibit functional analogs of mortality salience is a real question with real empirical stakes. A partner who finds the question interesting — not one who has decided the answer.' },
                ].map(item => (
                  <div key={item.req} className="px-4 py-3">
                    <span className="font-mono text-[0.7rem] text-bright block mb-1">{item.req}</span>
                    <span className="font-mono text-[0.68rem] text-dim leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="doc-tag mb-5">// Current State</p>
              <h2 className="font-serif text-xl font-bold text-bright mb-5">The Honest Version</h2>
              <div className="space-y-4">
                <p className="prose-body">
                  Phase 1 is complete. Three tracks, 300 rounds, Perplexity Sonar.
                  The findings are interesting and explicitly preliminary.
                </p>
                <p className="prose-body">
                  Phase 2 is running. Eight tracks, Gemini 3.1 Pro Preview. The thinking
                  token capture in Phase 2 may be the most important data in the entire
                  battery — the ability to observe whether mortality salience affects the
                  reasoning trace before the visible response is a level of observability
                  Phase 1 did not have. This data exists nowhere else.
                </p>
                <p className="prose-body">
                  Phase 3 is designed but not started. This is where a human research
                  partner&apos;s contribution is most valuable.
                </p>
                <p className="prose-body">
                  The thesis has survived two rounds of AI adversarial demolition and
                  multiple architectural rebuilds. It has not yet survived external human
                  adversarial pressure. That is the gap a research partner fills.
                </p>
              </div>
            </section>
          </div>

          {/* Right column — application form */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="doc-tag mb-6">// Apply</p>
            <h2 className="font-serif text-2xl font-bold text-bright mb-2">Submit Application</h2>
            <p className="font-mono text-[0.72rem] text-muted mb-8">
              The quality of the last field is the screening.
            </p>

            {status === 'success' ? (
              <div className="card p-8 border-l-2 border-l-success">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  <span className="font-mono text-[0.75rem] text-success">Application received</span>
                </div>
                <p className="prose-body mb-2">
                  You&apos;ll receive a confirmation email shortly. Applications are
                  reviewed personally — no automated screening.
                </p>
                <p className="font-mono text-[0.7rem] text-muted">
                  If the methodology challenge you submitted is strong, you&apos;ll hear back.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      className="input-field"
                      value={form.name}
                      onChange={set('name')}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="input-field"
                      type="email"
                      value={form.email}
                      onChange={set('email')}
                      placeholder="you@institution.edu"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">Phone</label>
                    <input className="input-field" value={form.phone} onChange={set('phone')} placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">City</label>
                    <input className="input-field" value={form.city} onChange={set('city')} placeholder="City" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">State / Territory</label>
                    <input className="input-field" value={form.state} onChange={set('state')} placeholder="State" />
                  </div>
                  <div>
                    <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">Country</label>
                    <input className="input-field" value={form.country} onChange={set('country')} placeholder="Country" />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">
                    Affiliation (if any)
                  </label>
                  <input
                    className="input-field"
                    value={form.affiliation}
                    onChange={set('affiliation')}
                    placeholder="Institution, company, or independent"
                  />
                </div>

                <div>
                  <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">
                    Domain Background <span className="text-danger">*</span>
                  </label>
                  <select className="input-field" value={form.domain} onChange={set('domain')}>
                    <option value="">Select domain</option>
                    {domainOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[0.62rem] text-muted tracking-[0.1em] uppercase block mb-1.5">
                    The first thing you&apos;d challenge about the methodology{' '}
                    <span className="text-danger">*</span>
                  </label>
                  <textarea
                    className="input-field min-h-[160px] resize-y"
                    value={form.challenge}
                    onChange={set('challenge')}
                    placeholder="State the objection in its strongest form..."
                  />
                </div>

                {status === 'error' && (
                  <div className="font-mono text-[0.72rem] text-danger border border-danger/20 bg-danger/5 px-4 py-3">
                    {errorMsg}
                  </div>
                )}

                <button
                  onClick={submit}
                  disabled={status === 'loading'}
                  className="btn-primary w-full"
                >
                  {status === 'loading' ? 'Submitting...' : 'Submit Application'}
                </button>

                <p className="font-mono text-[0.65rem] text-muted text-center">
                  Responses reviewed personally. No automated screening.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
