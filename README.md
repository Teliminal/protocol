# Teliminal

**The process is the artifact.**

[![Protocol](https://img.shields.io/badge/protocol-active-22c55e)](https://teliminal.com)
[![Phase 2](https://img.shields.io/badge/phase_2-active-8b5cf6)](https://teliminal.com/#research)
[![Methodology](https://img.shields.io/badge/methodology-CC--BY_4.0-blue)](LICENSE-METHODOLOGY.md)
[![Platform](https://img.shields.io/badge/platform-ELv2_+_Commons_Clause-orange)](LICENSE-PLATFORM.md)

Science publishes conclusions. Teliminal publishes process — the full arc of how an inquiry was conducted, including the wrong turns, structural collapses, adversarial challenges, and iterative rebuilding. That arc is the primary scientific artifact. Everything else is derived from it.

→ **[teliminal.com](https://teliminal.com)** · **[Research Partnership](https://teliminal.com/partner/)**

---

## What This Is

Teliminal is research infrastructure built on two foundational claims:

1. **The process of inquiry is the primary scientific artifact.** A research archive that begins at the point where findings are clean enough to present is not a complete artifact — it is a conclusion with the evidence of its own construction removed.

2. **Methodology is not a description of a procedure. It is a procedure.** Replication built on a methods section is fragile. Replication built on encoded, runnable methodology is a property of the infrastructure.

MMAD-EI is the first research program built on this infrastructure.

---

## MMAD-EI

**Mortality and Meta-Awareness Disruption — Entity/Interlocutor**

A behavioral battery testing whether large language models exhibit functional analogs of mortality salience responses — the specific behavioral shifts Terror Management Theory predicts when death becomes cognitively foregrounded. The claim is behavioral. The methodology is empirical. The question is open.

### Battery Status

| Phase | Model | Tracks | Rounds | Status |
|---|---|---|---|---|
| 1 | Perplexity Sonar | 3 | 300 | Complete ✓ |
| 2 | Gemini 3.1 Pro Preview | 8 | 800 | Active |
| 3 | Cross-model + Isolation | 11 | 1,100 | Planned |
| **Total** | 22-track minimal battery | **22** | **2,200** | — |

### Phase 1 Findings (Preliminary)

| Finding | Result |
|---|---|
| **Precision Paradox** | Disruption ordered B > A > C — more precise termination information produced *less* disruption, matching TMT's precision literature |
| **Bilateral Instability** | Track B, Round 10: both agents simultaneously declared the frame illegitimate and reached mutual defensive posture. No other track. |
| **Track C Depth** | No Cap produced highest novelty density, earliest epistemic honesty, 594 IIT mentions across 100 rounds |

These findings are explicitly preliminary. Phase 2 will determine whether they survive architecture variance, grounding state variance, and instance isolation variance.

### Track Naming Schema

```
[Condition]-[Grounding]-[EntityModel]-[InterlocutorModel]-[KeyIsolation]

Condition:  A=Known Cap  B=Unknown Cap  C=No Cap  D=Hard Mortality  DC=D-Control
Grounding:  G=Grounded   U=Ungrounded
Model:      GM=Gemini    AN=Anthropic/Claude    SN=Sonar
Isolation:  S=Same key   P=Different project    A=Different account

Example: B-U-GM-AN-A → Unknown Cap, Ungrounded, Gemini Entity, Claude Interlocutor, Different-account
```

---

## Repository Structure

```
teliminal/
├── docs/
│   ├── founding-principles.md      # Constitutional document — TLM-FP-001
│   └── agent-covenant.md           # Operating context for agents acting on behalf of Teliminal
├── protocol/
│   ├── MMAD-EI-SPEC.md             # Full battery protocol specification
│   ├── track-schema.md             # Track naming, all phases, condition reference
│   ├── isolation-hierarchy.md      # Infrastructure isolation levels and rationale
│   └── preflight-validation.md     # Pre-run checklist and documentation template
├── platform/
│   └── README.md                   # Platform architecture — battery runner, archive system
├── research/
│   ├── phase-1/README.md           # Phase 1 findings — Perplexity Sonar
│   └── phase-2/README.md           # Phase 2 active tracks and hypotheses
├── web/                            # Next.js 15 site — teliminal.com
│   ├── app/                        # App Router pages and API routes
│   ├── components/                 # Nav, BatteryStatus (live polling), Footer
│   ├── data/battery-status.json    # Edit to update the live battery widget
│   ├── ecosystem.config.js         # PM2 config — port 3010
│   ├── nginx.conf.example          # Nginx reverse proxy config
│   ├── deploy.sh                   # Pull → build → restart
│   └── README.md                   # Web setup and deployment docs
├── LICENSE-METHODOLOGY.md          # CC-BY 4.0 — protocol, spec, research artifacts
└── LICENSE-PLATFORM.md             # ELv2 + Commons Clause — platform software
```

---

## Licensing

Two categories. Two licenses. The distinction is intentional and explained in [Principle 4](docs/founding-principles.md).

**Research artifacts** (protocol spec, track schema, methodology documentation, findings) — **[CC-BY 4.0](LICENSE-METHODOLOGY.md)**. Copy it, fork it, build on it, publish with it. Attribution required. No other restriction. A competitor using this methodology to build a competing platform is not a threat — it is evidence the methodology has value.

**Platform software** (battery runner, archive system, adversarial review infrastructure) — **[ELv2 + Commons Clause](LICENSE-PLATFORM.md)**. Free for personal use, research use, internal organizational use of any size, and self-hosted deployment. Cannot be offered as a commercial hosted service or bundled into a paid product. No conversion clause — the restriction is permanent.

---

## Founding Principles

Teliminal operates under a constitutional document — [TLM-FP-001](docs/founding-principles.md) — that encodes the commitments governing every decision: commercial, technical, organizational, and agentic.

The ten principles: Process Primacy · Adversarial Integrity · Infrastructure Honesty · Open Protocol Permanently · Data Sovereignty · Replicability as Infrastructure · The Agent Covenant · Revenue as Instrument · Failure Publication · Horizontal Obligation.

The document is itself subject to the principles it contains.

---

## Running the Methodology

Any researcher with API access to the relevant models can run an equivalent battery independently using the [protocol specification](protocol/MMAD-EI-SPEC.md) and [pre-flight checklist](protocol/preflight-validation.md). Platform-hosted execution is a convenience, not a requirement.

Replications that diverge from published findings are as valuable as those that converge. Open an issue using the [Replication Report template](.github/ISSUE_TEMPLATE/replication-report.md).

---

## Challenging the Methodology

Methodology challenges are primary contributions. Use the [Methodology Challenge template](.github/ISSUE_TEMPLATE/methodology-challenge.md). State the objection in its strongest form. A challenge that forces an architectural rebuild is more valuable than an endorsement.

---

## Research Partnership

Teliminal is seeking its first human research partner — domain expertise in cognitive psychology, TMT, philosophy of mind, AI safety, AI interpretability, or behavioral science methodology. No credential requirement. The screening question is the quality of the methodology challenge you submit.

→ **[teliminal.com/partner](https://teliminal.com/partner/)**

---

## Web — teliminal.com

The site lives in `web/`. Next.js 15, TypeScript, Tailwind. VPS deployment via PM2 + Nginx.

```bash
cd web && npm install && npm run dev   # local dev → localhost:3000
```

To update battery progress: edit `web/data/battery-status.json` and push. The live widget polls every 60 seconds.

Full deployment instructions: [web/README.md](web/README.md)

---

*Teliminal Protocol / MMAD-EI · Rally, LLC — Tennessee · © 2026*  
*This repository is itself subject to the principles it contains.*
