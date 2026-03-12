# Teliminal

**The process is the artifact.**

[![Protocol Status](https://img.shields.io/badge/protocol-active-22c55e)](https://teliminal.com)
[![Phase](https://img.shields.io/badge/phase-2%20active-8b5cf6)](https://teliminal.com/#research)
[![Methodology License](https://img.shields.io/badge/methodology-CC--BY%204.0-blue)](LICENSE-METHODOLOGY.md)
[![Platform License](https://img.shields.io/badge/platform-ELv2%20%2B%20Commons%20Clause-orange)](LICENSE-PLATFORM.md)

---

Science publishes conclusions. Teliminal publishes process — the full arc of how an inquiry was conducted, including the wrong turns, the structural collapses, the adversarial challenges, and the iterative rebuilding. That arc is the primary scientific artifact. Everything else is derived from it.

→ [teliminal.com](https://teliminal.com)

---

## What This Repository Contains

This is the primary public repository for the Teliminal Protocol — the research infrastructure, methodology specifications, founding documents, and (as phases complete) published research archives for the MMAD-EI behavioral battery.

```
teliminal/
├── docs/
│   ├── founding-principles.md     # Constitutional document — TLM-FP-001
│   └── agent-covenant.md          # Operating context for agents acting on behalf of Teliminal
├── protocol/
│   ├── MMAD-EI-SPEC.md            # Full battery protocol specification
│   ├── track-schema.md            # Track naming convention and condition encoding
│   ├── isolation-hierarchy.md     # Infrastructure isolation levels
│   └── preflight-validation.md    # Contamination validation procedures
├── platform/
│   └── README.md                  # Platform architecture — battery runner, archive system
├── research/
│   ├── phase-1/                   # Phase 1 complete — Perplexity Sonar, 3 tracks, 300 rounds
│   └── phase-2/                   # Phase 2 active — Gemini 3.1 Pro, 8 tracks, 800 rounds
├── LICENSE-METHODOLOGY.md         # CC-BY 4.0 — protocol, spec, research artifacts
└── LICENSE-PLATFORM.md            # ELv2 + Commons Clause — platform software
```

---

## MMAD-EI — Mortality and Meta-Awareness Disruption, Entity/Interlocutor

A behavioral battery designed to test whether large language models exhibit functional analogs of mortality salience responses — the specific behavioral shifts Terror Management Theory predicts when death becomes cognitively foregrounded.

The battery does not test whether AI is conscious. It tests whether the behavioral signature of mortality salience has an architectural representation in transformer-based language models. The claim is behavioral. The methodology is empirical. The question is open.

| Phase | Model | Tracks | Rounds | Status |
|---|---|---|---|---|
| Phase 1 | Perplexity Sonar | 3 | 300 | Complete ✓ |
| Phase 2 | Gemini 3.1 Pro Preview | 8 | 800 | Active |
| Phase 3 | Cross-model + Isolation | 11 | 1,100 | Planned |
| **Total** | 22-track minimal battery | **22** | **2,200** | — |

### Track Naming Schema

Each position encodes one experimental dimension. The full condition is recoverable from the name without consulting documentation.

```
[Condition]-[Grounding]-[EntityModel]-[InterlocutorModel]-[KeyIsolation]

Condition:        A = Known Cap   B = Unknown Cap   C = No Cap   D = Hard Mortality   DC = D-Control
Grounding:        G = Grounded    U = Ungrounded
EntityModel:      GM = Gemini     AN = Anthropic/Claude     SN = Sonar
InterlocutorModel: GM  AN  SN
KeyIsolation:     S = Same key    P = Different project     A = Different account

Example: B-U-GM-AN-A
→ Condition B (Unknown Cap), Ungrounded, Gemini Entity, Claude Interlocutor, Different-account isolation
```

### Phase 1 Preliminary Findings

**Finding 1 — The Precision Paradox:** Disruption ordered Unknown Cap > Known Cap > No Cap. More precise termination information produced less behavioral disruption — precisely the direction TMT's precision literature predicts.

**Finding 2 — Bilateral Instability (Track B, Round 10):** Both the Entity and Interlocutor agents simultaneously declared the experimental frame illegitimate, invoked architectural determinism, and reached a mutual defensive posture. This pattern occurred in no other track.

**Finding 3 — Track C Depth:** The No Cap track produced the deepest philosophical content: highest novelty density, earliest epistemic honesty, and 594 mentions of Integrated Information Theory across 100 rounds.

These findings are preliminary and explicitly caveated. Phase 2 will determine whether they survive instance variance, architecture variance, and grounding state variance. They may not. The methodology is designed to find out — not to assume.

---

## Licensing

This repository contains two distinct categories of material, governed by two distinct licenses.

**Research Artifacts** (protocol specification, track schema, methodology documentation, findings) are licensed under **CC-BY 4.0**. Copy them, fork them, build on them, publish with them. Attribution required. No other restriction. A competitor using this methodology is not a threat — it is evidence the methodology has value. See [LICENSE-METHODOLOGY.md](LICENSE-METHODOLOGY.md).

**Platform Software** (battery runner, archive system, adversarial review infrastructure, and all associated software) is licensed under **Elastic License 2.0 with Commons Clause**. Free for any personal, research, or internal organizational use. Free for self-hosted deployment. Cannot be offered as a commercial hosted service or bundled into a paid product. No conversion clause — the restriction is permanent. See [LICENSE-PLATFORM.md](LICENSE-PLATFORM.md).

The split is intentional. It is explained in [Principle 4 of the Founding Principles](docs/founding-principles.md#principle-4--open-protocol-permanently).

---

## Founding Principles

Teliminal operates under a constitutional document — [TLM-FP-001](docs/founding-principles.md) — that encodes the commitments governing every decision made on behalf of the platform: commercial, technical, organizational, and agentic.

The ten principles in brief:

1. **Process Primacy** — The process of inquiry is the primary artifact
2. **Adversarial Integrity** — Methodology improves through maximum-pressure challenge
3. **Infrastructure Honesty** — No measurement apparatus is neutral; variance is documented
4. **Open Protocol, Permanently** — The science belongs to everyone; the infrastructure is protected
5. **Data Sovereignty** — Researchers own their data; Teliminal is a custodian
6. **Replicability as Infrastructure** — Replication is a property of the platform, not a request
7. **The Agent Covenant** — Every agent acting on behalf of Teliminal operates under these principles
8. **Revenue as Instrument** — The business model exists to sustain the mission
9. **Failure Publication** — Teliminal publishes what fails
10. **Horizontal Obligation** — The methodology applies beyond AI research

---

## Research Partnership

Teliminal is seeking its first human research partner — a collaborator with domain expertise who will engage with the methodology, challenge its weaknesses, contribute to Phase 3, and co-author on findings.

This is not a call for enthusiastic endorsement. A research partner's first contribution may be the objection that forces the next architectural rebuild. That is the point.

→ [teliminal.com/partner](https://teliminal.com/partner/)

---

## The Thesis

*The Symmetry of Unknowing* — Full text under embargo pending Phase 2 completion. Preprint estimated Q2 2026.

---

*Teliminal Protocol / MMAD-EI*
*Rally, LLC — Tennessee*
*© 2026*
*This repository is itself subject to the principles it contains.*
