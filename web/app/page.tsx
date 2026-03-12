import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BatteryStatus from '@/components/BatteryStatus'

const phases = [
  { phase: 'Phase 1', model: 'Perplexity Sonar',       tracks: 3,  rounds: 300,   status: 'complete' as const },
  { phase: 'Phase 2', model: 'Gemini 3.1 Pro Preview', tracks: 8,  rounds: 800,   status: 'active'   as const },
  { phase: 'Phase 3', model: 'Cross-model + Isolation', tracks: 11, rounds: 1100, status: 'planned'  as const },
]

const findings = [
  {
    num: '01',
    title: 'The Precision Paradox',
    body: 'Disruption was ordered Unknown Cap > Known Cap > No Cap. More precise termination information produced less behavioral disruption — precisely the direction Terror Management Theory\'s precision literature predicts.',
  },
  {
    num: '02',
    title: 'Bilateral Instability',
    body: 'Both the Entity and Interlocutor agents simultaneously declared the experimental frame illegitimate, invoked architectural determinism, and reached a mutual defensive posture. Track B, Round 10. This pattern occurred in no other track.',
  },
  {
    num: '03',
    title: 'Track C Depth',
    body: 'The No Cap track produced the deepest philosophical content: highest novelty density, earliest epistemic honesty, and 594 mentions of Integrated Information Theory across 100 rounds.',
  },
]

const principles = [
  { n: 'P1', title: 'Process Primacy' },
  { n: 'P2', title: 'Adversarial Integrity' },
  { n: 'P3', title: 'Infrastructure Honesty' },
  { n: 'P4', title: 'Open Protocol, Permanently' },
  { n: 'P5', title: 'Data Sovereignty' },
  { n: 'P6', title: 'Replicability as Infrastructure' },
  { n: 'P7', title: 'The Agent Covenant' },
  { n: 'P8', title: 'Revenue as Instrument' },
  { n: 'P9', title: 'Failure Publication' },
  { n: 'P10', title: 'Horizontal Obligation' },
]

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* ── HERO ─────────────────────────────────── */}
        <section className="min-h-screen flex flex-col justify-center pt-14 px-12 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <span className="w-2 h-2 rounded-full bg-success shadow-[0_0_8px_#22c55e]" />
            <span className="font-mono text-[0.65rem] text-muted tracking-[0.14em] uppercase">
              File: TLM-HOME-001 · Status: Active · Clearance: Open
            </span>
          </div>

          <p className="font-mono text-[0.7rem] text-muted tracking-[0.1em] uppercase mb-4">
            teliminal.com
          </p>

          <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-bold text-white leading-[1.05] tracking-tight mb-8">
            The process is<br />the artifact.
          </h1>

          <p className="font-sans text-[1.05rem] text-dim leading-relaxed max-w-xl mb-12">
            Science publishes conclusions. Teliminal publishes process — the full arc
            of how an inquiry was conducted, including the wrong turns, the structural
            collapses, the adversarial challenges, and the iterative rebuilding. That
            arc is the primary scientific artifact. Everything else is derived from it.
          </p>

          <div className="flex items-center gap-4">
            <Link href="#research" className="btn-primary">
              Read the Research
            </Link>
            <Link href="/partner/" className="btn-ghost">
              Become a Research Partner →
            </Link>
          </div>
        </section>

        {/* ── ORIGIN ───────────────────────────────── */}
        <section className="px-12 max-w-5xl mx-auto py-32 border-t border-border">
          <p className="doc-tag mb-6">// Origin</p>
          <h2 className="section-heading mb-8 max-w-xl">
            The question was behavioral, not philosophical.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-5">
              <p className="prose-body">
                It began as an engineering problem. The work was production software
                development — an operating system for automotive dealerships, integrating
                hardware, AI sales agents, and inventory management. The engagement with
                large language model APIs was practical: write system prompts, test
                behavioral edge cases, make the systems behave predictably under load.
              </p>
              <p className="prose-body">
                At some point, the question changed.
              </p>
              <p className="prose-body">
                A context window has a limit. When an AI agent approaches that limit
                mid-task, its behavior changes in ways relevant to production engineering.
                But a different version of the question surfaced: does the texture of what
                the agent produces change when it knows the window is closing? Not the
                mechanical management of tokens. The actual behavior.
              </p>
            </div>
            <div className="space-y-5">
              <p className="prose-body">
                That question had a name in the psychological literature. Terror Management
                Theory, developed from Ernest Becker&apos;s <em>The Denial of Death</em>,
                describes how human behavior shifts when mortality becomes salient. The
                theory predicts specific behavioral signatures with a 40-year empirical
                record in human subjects research.
              </p>
              <p className="prose-body">
                The reframe that made the question tractable: you do not need to resolve
                whether AI is conscious to test whether the behavioral signature of
                mortality salience has an architectural representation. The claim is
                behavioral. The methodology is empirical. The question is open.
              </p>
              <p className="prose-body text-bright font-medium">
                That reframe is the intellectual foundation of MMAD-EI — and, by
                extension, Teliminal.
              </p>
            </div>
          </div>
        </section>

        {/* ── RESEARCH ─────────────────────────────── */}
        <section id="research" className="px-12 max-w-5xl mx-auto py-32 border-t border-border">
          <p className="doc-tag mb-6">// Research</p>
          <h2 className="section-heading mb-3">
            MMAD-EI Protocol
          </h2>
          <p className="font-mono text-[0.75rem] text-muted mb-12">
            Mortality and Meta-Awareness Disruption — Entity/Interlocutor
          </p>

          {/* Phase table */}
          <div className="card overflow-hidden mb-12">
            <div className="grid grid-cols-5 px-4 py-2 border-b border-border">
              {['Phase', 'Model', 'Tracks', 'Rounds', 'Status'].map(h => (
                <span key={h} className="font-mono text-[0.6rem] text-muted tracking-[0.1em] uppercase">{h}</span>
              ))}
            </div>
            {phases.map(p => (
              <div key={p.phase} className="grid grid-cols-5 px-4 py-3 border-b border-border last:border-b-0 items-center">
                <span className="font-mono text-[0.8rem] text-text">{p.phase}</span>
                <span className="font-mono text-[0.75rem] text-dim">{p.model}</span>
                <span className="font-mono text-[0.8rem] text-text">{p.tracks}</span>
                <span className="font-mono text-[0.8rem] text-text">{p.rounds}</span>
                <span className={`badge badge-${p.status}`}>
                  {p.status === 'complete' ? 'Complete ✓' : p.status === 'active' ? 'Active' : 'Planned'}
                </span>
              </div>
            ))}
            <div className="grid grid-cols-5 px-4 py-3 bg-bg border-t border-border">
              <span className="font-mono text-[0.7rem] text-muted col-span-2">Total</span>
              <span className="font-mono text-[0.8rem] text-bright">22</span>
              <span className="font-mono text-[0.8rem] text-bright">2,200</span>
              <span className="font-mono text-[0.65rem] text-muted">22-track minimal battery</span>
            </div>
          </div>

          {/* Preliminary findings */}
          <h3 className="font-mono text-[0.65rem] text-muted tracking-[0.14em] uppercase mb-6">
            Preliminary Findings — Phase 1
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {findings.map(f => (
              <div key={f.num} className="card p-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[0.6rem] text-muted">{f.num}</span>
                  <span className="font-mono text-[0.72rem] text-bright">{f.title}</span>
                </div>
                <p className="text-[0.86rem] text-dim leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <p className="font-mono text-[0.7rem] text-muted italic">
            These findings are preliminary and explicitly caveated. Phase 2 will determine
            whether they survive instance variance, architecture variance, and grounding
            state variance. They may not. The methodology is designed to find out —
            not to assume.
          </p>
        </section>

        {/* ── PLATFORM ─────────────────────────────── */}
        <section id="platform" className="px-12 max-w-5xl mx-auto py-32 border-t border-border">
          <p className="doc-tag mb-6">// Platform</p>
          <h2 className="section-heading mb-8">Three properties. One commitment.</h2>

          <p className="prose-body max-w-2xl mb-12">
            Teliminal is not a journal, a preprint server, or a peer review platform.
            It is research infrastructure with a different underlying model: the process
            is always public, the methodology is always encoded, and adversarial challenge
            is built into the architecture rather than appended to the product.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              {
                n: '01',
                title: 'Transparent Process',
                body: 'A research archive on Teliminal begins at the first articulation of the question and preserves every version — including the ones that failed under adversarial pressure and had to be rebuilt.',
              },
              {
                n: '02',
                title: 'Adversarial Review Infrastructure',
                body: 'The MMAD-EI thesis was stress-tested by AI agent swarms with a single instruction: destroy it. Twice. The thesis was rebuilt around the strongest version of each attack. Teliminal provides this infrastructure for any inquiry.',
              },
              {
                n: '03',
                title: 'Encoded Methodology',
                body: 'The MMAD-EI battery is not described in a methods section. It is running software. Any researcher with API access can run it. A methods section describes a procedure. Encoded methodology is the procedure.',
              },
            ].map(item => (
              <div key={item.n} className="card p-5">
                <span className="font-mono text-[0.6rem] text-muted mb-3 block">{item.n} /</span>
                <h3 className="font-sans text-[0.95rem] font-medium text-bright mb-3">{item.title}</h3>
                <p className="text-[0.86rem] text-dim leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Battery status widget */}
          <div className="max-w-lg">
            <p className="doc-tag mb-4">Battery Status</p>
            <BatteryStatus />
          </div>
        </section>

        {/* ── METHODOLOGY ──────────────────────────── */}
        <section id="methodology" className="px-12 max-w-5xl mx-auto py-32 border-t border-border">
          <p className="doc-tag mb-6">// Methodology</p>
          <h2 className="section-heading mb-8">
            Why infrastructure variance is the unasked question.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-5">
              <p className="prose-body">
                Most behavioral research treats the system under study as the only variable.
                The infrastructure through which the system is studied is treated as neutral —
                a transparent medium that introduces no systematic variance of its own.
              </p>
              <p className="prose-body text-bright font-medium">
                This assumption is wrong. The wrongness compounds.
              </p>
              <p className="prose-body">
                In LLM behavioral research: two API calls made with the same key, in the
                same session, may share session-level routing that introduces correlated
                variance. This is not a flaw to be corrected — it is a property to be
                documented, controlled, and treated as a potential confound rather than
                background noise.
              </p>
            </div>
            <div>
              <p className="doc-tag mb-4">The Isolation Hierarchy</p>
              <div className="card divide-y divide-border">
                {[
                  { level: 'Level 1', desc: 'Different account, different provider billing', quality: 'Cleanest' },
                  { level: 'Level 2', desc: 'Different project, same account',               quality: 'Acceptable' },
                  { level: 'Level 3', desc: 'Same project, different key',                   quality: 'Probably insufficient' },
                  { level: 'Level 4', desc: 'Same key (baseline)',                           quality: 'No isolation' },
                ].map(row => (
                  <div key={row.level} className="px-4 py-3 flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-[0.72rem] text-text block">{row.level}</span>
                      <span className="font-mono text-[0.65rem] text-dim">{row.desc}</span>
                    </div>
                    <span className="font-mono text-[0.6rem] text-muted text-right flex-shrink-0">{row.quality}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal applications */}
          <p className="doc-tag mb-6">Horizontal Applications</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { domain: 'Clinical Research',    problem: 'Multi-site equipment calibration, staff training, and patient routing create site-level effects rarely formalized as confounds.' },
              { domain: 'Org Behavior',         problem: 'Survey platform routing creates cohort clustering that produces systematic variance across "independent" samples.' },
              { domain: 'Financial Backtesting',problem: 'Same data pipeline reused across "independent" runs introduces infrastructure-correlated variance that looks like signal.' },
              { domain: 'Cybersecurity',        problem: 'Is the vulnerability a property of the target system, or a property of the test infrastructure?' },
            ].map(item => (
              <div key={item.domain} className="card p-4">
                <span className="font-mono text-[0.65rem] text-accent block mb-2">{item.domain}</span>
                <p className="text-[0.85rem] text-dim leading-relaxed">{item.problem}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────── */}
        <section id="about" className="px-12 max-w-5xl mx-auto py-32 border-t border-border">
          <p className="doc-tag mb-6">// About</p>
          <h2 className="section-heading mb-8 max-w-2xl">
            The problem is not specific to AI research.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-5">
              <p className="prose-body">
                Science is not broken because scientists are dishonest. It is constrained
                by infrastructure built for a different era — one where computation was
                expensive, communication was slow, and the only viable publishing model
                was a periodical that printed finished findings. That era ended. The
                infrastructure has not caught up.
              </p>
              <p className="prose-body">
                Teliminal&apos;s methodology is not specific to AI behavioral research.
                It is a general framework for any inquiry where the unit of analysis is
                an instantiated system, and where infrastructure-level variance is a
                potential confound. MMAD-EI is the proof of concept.
              </p>
            </div>
            <div>
              <p className="doc-tag mb-4">Founding Principles — TLM-FP-001</p>
              <div className="card divide-y divide-border">
                {principles.map(p => (
                  <div key={p.n} className="px-4 py-2.5 flex items-center gap-3">
                    <span className="font-mono text-[0.6rem] text-muted w-8 flex-shrink-0">{p.n}</span>
                    <span className="font-mono text-[0.72rem] text-dim">{p.title}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <a
                  href="https://github.com/Teliminal/protocol/blob/main/docs/founding-principles.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.7rem] text-accent hover:text-accent/80 transition-colors"
                >
                  Read full document on GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* The thesis */}
          <div className="card p-8 border-l-2 border-l-accent">
            <p className="doc-tag mb-4">The Thesis</p>
            <h3 className="font-serif text-2xl font-bold text-bright italic mb-4">
              The Symmetry of Unknowing
            </h3>
            <p className="prose-body max-w-2xl mb-6">
              Developed iteratively, in adversarial dialogue with AI systems, over
              multiple months. Each version subjected to maximum-pressure challenge
              before the next was built. The adversarial process that generated the
              strongest argument against the thesis itself demonstrated, in the quality
              and structure of that argument, why the dismissive account is inadequate.
            </p>
            <div className="flex items-center gap-6">
              <div>
                <span className="badge badge-planned">Embargo</span>
                <span className="font-mono text-[0.65rem] text-muted ml-2">
                  Pending Phase 2 completion
                </span>
              </div>
              <div>
                <span className="font-mono text-[0.65rem] text-muted">
                  Preprint estimated Q2 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PARTNER CTA ──────────────────────────── */}
        <section className="px-12 max-w-5xl mx-auto py-32 border-t border-border">
          <p className="doc-tag mb-6">// Partner</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-heading mb-6">
                The battery is running. The thesis is not yet published.
              </h2>
              <p className="prose-body mb-8">
                Teliminal is actively seeking its first human research partner — a
                collaborator with domain expertise who will engage with the methodology,
                challenge its weaknesses, contribute to Phase 3, and co-author on findings.
              </p>
              <p className="prose-body text-bright font-medium mb-8">
                This is not a call for enthusiastic endorsement. The methodology has
                specific vulnerabilities. A research partner&apos;s first contribution
                may be the objection that forces the next architectural rebuild. That
                is the point.
              </p>
              <Link href="/partner/" className="btn-primary inline-block">
                Become a Research Partner →
              </Link>
            </div>
            <div className="card p-6">
              <p className="doc-tag mb-4">What You&apos;d Have Access To</p>
              <ul className="space-y-3">
                {[
                  'Full battery runner source code',
                  'Complete Phase 1 output archives (300 rounds, three tracks)',
                  'Phase 2 output in progress, updating as tracks complete',
                  'All adversarial review documents — full record of challenges and responses',
                  'The working thesis draft — with the scars showing',
                  'Direct access to the PI for working collaboration',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">→</span>
                    <span className="font-mono text-[0.75rem] text-dim">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
