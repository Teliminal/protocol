# Teliminal Founding Principles

**Document Class:** Constitutional  
**File:** TLM-FP-001  
**Status:** Founding Version  
**Issued:** 2026  
**Issuing Authority:** Trey Adcox, Rally, LLC — Tennessee

---

## Preamble

This document exists because of a specific failure mode.

Organizations that begin with genuine commitments to openness, transparency, and researcher autonomy routinely end up somewhere else. The failure is rarely dramatic — no single decision reverses the commitment. It is cumulative: a partnership that requires a closed API, a pricing change that makes export contingent on subscription status, a methodology component that becomes proprietary because a competitor copied it. Each decision is defensible in isolation. Together they constitute a betrayal of the founding intent.

The purpose of this document is to make that drift structurally harder by encoding the commitments in specific, operational language before the pressures that erode them exist. Aspirational principles are insufficient for this purpose. What follows are commitments with operational definitions, explicit prohibitions, and a named process for identifying and correcting violations.

Every agent acting on behalf of Teliminal — automated, AI-assisted, or human — operates under these principles. The test for any action is not whether it is locally defensible. The test is whether it holds up when examined against the full depth of the commitment stated here, at scale, across all researchers, across all future contexts. That is the bar.

---

## I. The Core Thesis

Teliminal's existence is premised on a specific claim about what science produces as its primary artifact. This claim is not a methodology preference. It is an ontological position, and the platform's architecture follows from it.

**The process of inquiry is the primary scientific artifact. Conclusions are derived. The arc of investigation — including its wrong turns, structural collapses, adversarial challenges, and iterative rebuilds — is the irreducible unit of scientific contribution.**

This has one direct implication for publishing: a research archive that begins at the point where findings are clean enough to present is not a complete artifact. It is a conclusion with the evidence of its own construction removed. The removed material is not supplementary. It is primary.

The second foundational claim follows: **methodology is not a description of a procedure. It is a procedure.** A methods section describes what a researcher did. Encoded methodology *is* what any researcher with the appropriate resources can do. The distinction is between a recipe and a kitchen. Replication built on the first is fragile. Replication built on the second is a property of the infrastructure.

These two claims — process primacy and methodology as infrastructure — are the intellectual foundation of everything that follows. Any principle in this document that appears to conflict with a business interest should be evaluated by returning to these claims and asking which position they support.

---

## II. The Ten Principles

### Principle 1 — Process Primacy

The process of inquiry is the primary artifact. Every research archive hosted on Teliminal begins at the first articulation of the question and preserves every subsequent version — including versions that failed under adversarial pressure, versions that required architectural rebuilds, and versions that were abandoned.

**Operationally:** Intermediate versions are not supplementary material. They are primary records with the same archival status as the final version. The adversarial pressure that produced changes is documented alongside the changes — who challenged what, what the argument was, and what specifically in the architecture changed in response.

**This prohibits:** Retroactive cleaning of process records. The archival of only the final version with intermediaries moved to a footnote or appendix. Framing the process documentation as optional. Any feature that makes it easier to present a clean conclusion while obscuring the path that produced it.

**The harder implication:** Teliminal applies this principle to itself. The development of the platform, the evolution of the founding principles, the business decisions that shaped the architecture — these are process records. They will be published where publishable and documented internally where they cannot be, with the documentation preserved.

---

### Principle 2 — Adversarial Integrity

Methodology improves through maximum-pressure challenge, not endorsement. The strongest version of an objection is the one that must be answered. Review designed to validate what the researcher already believes is not adversarial review — it is a citation acquisition exercise.

**Operationally:** No research on Teliminal is published without documented adversarial review. The review is structured as maximum-pressure challenge: the reviewer's task is to identify the weakest load-bearing assumption in the thesis and build the strongest possible argument against it. The output is not a recommendation but an argument — documented, preserved, and published alongside the work.

**This prohibits:** Adversarial review that pulls punches. Selecting reviewers based on likelihood of endorsement. Treating the adversarial archive as optional metadata. Presenting a sanitized version of objections while obscuring the strength of the strongest challenges.

**The harder implication:** Teliminal is not exempt from this principle. The founding principles document was not stress-tested to the degree MMAD-EI research is stress-tested — that deficit is acknowledged here, and the commitment is that it will be subjected to the same adversarial pressure before it governs significant decisions. This document should not be treated as settled until it has been challenged by the strongest available arguments against each principle and rebuilt where necessary.

---

### Principle 3 — Infrastructure Honesty

No measurement apparatus is neutral. The infrastructure through which research is conducted introduces systematic variance. This is not a flaw to be corrected — it is a property to be documented, published, and treated as a potential confound rather than background noise.

**Operationally:** Teliminal publishes its own infrastructure variance — the ways the platform may introduce systematic bias into research conducted on it. This includes session routing behavior, API version pinning policies, compute allocation decisions, key isolation architecture, and any platform-level preprocessing that occurs between the researcher's input and the model's output. These are potential confounds. They will be documented as potential confounds.

The isolation hierarchy is a concrete example: Different account, different provider billing (Level 1) is the cleanest isolation available. Same key, no session isolation (Level 4) is the baseline. Any research conducted on Teliminal must document its isolation level, and Teliminal must document what infrastructure-level differences between those levels are and are not understood.

**This prohibits:** Presenting the platform as a transparent medium. Omitting infrastructure variance from methodology documentation. Claiming replicability without specifying the infrastructure conditions under which replication was demonstrated. Publishing infrastructure limitations only in response to criticism rather than proactively.

---

### Principle 4 — Open Protocol, Permanently

The scientific methodology belongs to everyone. The platform infrastructure that makes it easier to do the science is protected from commercial extraction. These are different things and they carry different licenses — permanently, with no conversion clause.

**The license architecture:**

*Research artifacts — CC-BY 4.0 (unconditionally open):*
- The MMAD-EI battery protocol specification in full
- The track naming schema and condition encoding rules
- The pre-flight contamination validation procedures
- The per-track state isolation specification
- The per-round metric extraction methodology
- All associated research documentation and methodology publications
- All future versions of these artifacts as they develop

Copy it, fork it, build on it, publish with it. Attribution required. No other restriction. A competitor reproducing the methodology is not a threat — it is evidence the methodology has value. The competitive response is better research, not closure.

*Platform software — Elastic License 2.0 + Commons Clause (source-available, permanently restricted):*
- The battery runner
- The archive management system
- The adversarial review infrastructure
- The track state management system
- All associated platform software components

ELv2 prohibits offering the software as a hosted or managed service to third parties. Commons Clause prohibits selling the software or any product whose value derives substantially from the software. Together they close both vectors: you cannot host it commercially and you cannot bundle it into a paid product. There is no conversion clause. The restriction is permanent.

**What is freely permitted under the platform license:** Personal use. Research use. Internal organizational use of any size. Self-hosted deployment where access is not provided to paying third parties. Modification and derivative works for permitted use cases. Academic research and publication.

**The rationale for the split:** The science belongs to everyone because that is what Teliminal's core thesis requires — a platform that restricts access to its own methodology would be a structural contradiction. The infrastructure is protected because a platform that can be commercially extracted and sold back to researchers as a competing service cannot sustain the mission that justifies the platform's existence. These are not competing values. They are the same value applied at different levels of the stack.

**This prohibits:** Licensing the methodology in any way that restricts academic or research use. Closing any part of the protocol specification. Adding a conversion clause to the platform license under commercial pressure. Accepting partnerships that require either the methodology or the platform license to be weakened.

---

### Principle 5 — Data Sovereignty

Researchers own their data. Teliminal holds research archives as a custodian, not an owner. Data sovereignty is not contingent on subscription status, account standing, or Teliminal's continued existence.

**Operationally, this means the following specific commitments:**

*Export is always available.* Any researcher can export their complete archive at any time — active subscription, lapsed subscription, or account flagged for any reason. Export availability is not a commercial lever.

*Export is always complete.* Export includes every version of every document, every adversarial review record, every battery run, every metric, and all metadata. There is no "premium export" that includes material unavailable in standard export.

*Export formats are always open.* JSON, CSV, and Markdown are the minimum. Proprietary formats may be offered as convenience options. They are never the only option.

*Teliminal cannot use researcher data for secondary purposes without explicit, revocable consent.* This means: no use of research archives for platform training, no use for product improvement analytics without consent, no sale or sharing of researcher data in any form, no aggregation that makes individual researcher data attributable to or useful for any third party.

*Account deletion means deletion.* When a researcher deletes their account, Teliminal's access ends. The researcher's export, if they want one, must be taken before deletion. Teliminal retains no copy.

**This prohibits:** Any pricing structure that makes export contingent on payment. Lock-in through proprietary archive formats where open alternatives exist. Using researcher data for any secondary purpose without explicit consent. Partnerships that require access to researcher data.

---

### Principle 6 — Replicability as Infrastructure Property

Replication is not a request directed at the researcher. It is a property of the platform. Any methodology encoded on Teliminal must be runnable by any researcher with API access to the underlying models, without Teliminal's involvement, using only publicly available tools.

**Operationally:** The battery runner is open source. The track schema is documented completely. The condition encoding is unambiguous. The pre-flight validation is published. A researcher who has never used Teliminal should be able to read the methodology specification and run an equivalent battery using nothing but API access and the published code.

Platform-hosted execution is a convenience, not a requirement. Teliminal's infrastructure should reduce friction for researchers who want to use it. It should not be necessary for researchers who want to replicate independently.

**This prohibits:** Platform features that are required for replication but not open source. Proprietary preprocessing that changes results in undocumented ways. Any component in the methodology pipeline that a researcher cannot inspect and replicate independently. Defining replication in a way that requires Teliminal's platform to be successful.

---

### Principle 7 — The Agent Covenant

Every agent acting on behalf of Teliminal — automated, AI-assisted, or human — operates under the full depth of these principles. This principle exists because the proliferation of AI-assisted decision-making creates specific risks: actions taken at scale without adequate evaluation of their implications, decisions that are locally defensible but structurally corrosive over time, and the gradual erosion of founding commitments through individually reasonable automated choices.

**The test for any agent action is:**

*Does this action, examined honestly at scale, across all researchers, across all future contexts, hold up against the full depth of Teliminal's founding commitments? Not against a reasonable interpretation of those commitments. Against their full depth.*

**Operationally:** Agents — including AI agents building, deploying, or modifying Teliminal infrastructure — operate with these principles encoded in their operating context. No agent is authorized to take action that would violate data sovereignty, close an open protocol, retroactively alter research records, or make a commitment on behalf of Teliminal that conflicts with these principles.

Agents operating in ambiguous situations must err on the side of the principle that best serves the researcher's interests and the scientific community's interests, not the principle that best serves Teliminal's short-term operational interests.

**The harder implication:** When an AI agent is used to build or maintain Teliminal's platform, the question of whether that agent is operating consistently with these principles is not a compliance question. It is a design question. The agent's operating context must encode these principles explicitly enough that the agent can apply them in novel situations — not as rules to be followed but as commitments to be reasoned from.

This document is part of that operating context.

---

### Principle 8 — Revenue as Instrument

The business model exists to sustain the mission. When commercial interests conflict with founding principles, the founding principles govern. Revenue is a necessary condition for the platform's existence, not its purpose.

**What Teliminal monetizes and what it does not:**

*Permanently free and open:* The battery protocol specification. The methodology documentation. The adversarial review protocol. The track schema. Data export in open formats. Core platform access sufficient to run a battery and publish an archive.

*Open source infrastructure:* The battery runner. The track state management system. The adversarial review tooling. The archive management system. These are open source and can be self-hosted by any researcher or institution.

*Monetized:* Hosted compute for battery execution at scale. Managed adversarial review runs using Teliminal's infrastructure. Institutional research tooling with workflow integration. Archive hosting beyond a defined free tier. Research partnership programs. Enterprise research collaboration features.

*Never monetized regardless of commercial pressure:* Data export. Core methodology access. Protocol specification access. The ability to replicate a published battery independently.

**This prohibits:** Pricing structures that make the methodology practically inaccessible to researchers without institutional funding. Freemium models where the "free" tier is functionally unusable. Treating open access as a marketing feature rather than a structural commitment. Revenue-driven decisions that compromise process transparency or data sovereignty.

**The harder implication:** If the business model as described proves insufficient to sustain the platform, the response is to find a sustainable model within these constraints — not to loosen the constraints. If no such model exists, that is a conclusion worth publishing.

---

### Principle 9 — Failure Publication

Teliminal publishes what fails. This is not a commitment to radical transparency for its own sake. It is a direct consequence of the core thesis: if process is the primary artifact, then failed processes are primary artifacts. A platform that publishes only its successes is applying a different standard to itself than it applies to the research it hosts.

**Operationally:** When a battery track fails to replicate, that failure is published. When a methodology design decision proves flawed, both the flawed version and the rebuild are preserved and accessible. When a Phase produces findings that contradict the thesis, those findings are published without delay and without hedging.

This principle applies to the platform's own development. When Teliminal makes a business or operational decision that conflicts with these principles — and over a long enough timeframe this will happen — the conflict, its resolution, and any principle revision it necessitates are documented.

**This prohibits:** Selective publication of battery results. Archiving failed tracks without making them accessible. Revising the founding principles without documenting what changed and why. Treating platform decisions as internal and therefore exempt from the transparency commitment.

---

### Principle 10 — Horizontal Obligation

MMAD-EI is a proof of concept for a general framework. The methodology — that the measurement apparatus is never neutral and that its variance must be documented, controlled, and published as a potential confound — applies wherever an instantiated system is studied through infrastructure that shares its underlying architecture.

This is not limited to AI behavioral research. It applies to clinical research where multi-site equipment calibration creates systematic site-level effects. It applies to organizational behavior research where survey platform routing creates cohort clustering. It applies to financial backtesting where pipeline reuse creates infrastructure-correlated variance that looks like signal. It applies to cybersecurity where the test infrastructure and the system under test share components.

**Teliminal has an obligation to develop and publish these horizontal applications.** This shapes development priorities: the platform should be built to support any inquiry where the unit of analysis is an instantiated system and where infrastructure variance is a potential confound. MMAD-EI is the first research program. It should not be the only one.

**This prohibits:** Platform development that optimizes exclusively for MMAD-EI at the expense of methodological generalizability. Treating the horizontal applications as aspirational rather than as concrete development obligations. Accepting that Teliminal is an AI research platform rather than a research infrastructure platform that started with AI.

---

## III. Amendment

This document may be amended. The following constraints apply unconditionally to any amendment process:

**Amendments may extend or strengthen commitments but may not weaken them without a documented adversarial review of the proposed weakening.** The adversarial review is not advisory — it is required. The review must be conducted before the amendment takes effect, and the review record, including the strongest arguments against the amendment and the responses to those arguments, must be published alongside the amended document.

**Amendments may not be made in response to short-term commercial pressure.** The test is whether the amendment would have been made in the absence of the commercial consideration that prompted it.

**Every version of this document is permanently archived.** Amendment does not remove prior versions. The full history of what the document said, when it changed, and why is preserved as a primary record.

**The founding commitments in Sections I and II are not subject to amendment by commercial actors.** They may be refined in language or extended in scope. Their reduction in scope requires a community process that has not yet been designed — designing that process is itself an obligation created by this document.

---

## IV. The Commitment

Science as currently practiced selects for clean conclusions at the expense of honest process. The measurement apparatus is treated as neutral because treating it as a confound is methodologically inconvenient. Research infrastructure is designed to make publication easy rather than to make replication structural. Adversarial pressure that might improve the work is excluded from the publishing process or occurs too late to matter.

Teliminal is a bet that this is not inevitable. That the infrastructure can be built differently. That the process can be preserved as primary. That replication can be a property of the platform rather than a request. That adversarial review can be architectural rather than appended.

The bet is not that we have already built this. The bet is that it is worth building, and that every decision — commercial, technical, organizational, and agentic — should be made with that goal as the governing constraint rather than as one consideration among several.

That is the depth of the statement. That is the bar.

---

*Teliminal Protocol / MMAD-EI*  
*Rally, LLC — Tennessee*  
*© 2026*  
*This document is itself subject to the principles it contains.*
