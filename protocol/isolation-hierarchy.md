# Infrastructure Isolation Hierarchy

**Document:** TLM-PROTO-003  
**License:** CC-BY 4.0

---

## The Problem

Most behavioral research treats the system under study as the only variable. The infrastructure through which the system is studied is treated as neutral — a transparent medium that introduces no systematic variance of its own.

This assumption is wrong. The wrongness compounds.

In the context of LLM behavioral research: two API calls made with the same key, in the same session, to the same model version, may share session-level routing that introduces correlated variance. Two calls made with different keys in different projects may or may not be routed to different model instances. Two calls made with keys on different accounts under different billing entities almost certainly hit different infrastructure paths.

This is not a flaw to be corrected. It is a property to be documented, controlled, and treated as a potential confound.

---

## Isolation Levels

### Level 1 — Different Account, Different Provider Billing
**Code:** `A`  
**Isolation quality:** Cleanest available.

Separate accounts, separate billing entities, separate API credentials. No session affinity. No shared infrastructure paths at the account level. The highest confidence that the Entity and Interlocutor agents are running on genuinely independent infrastructure.

*Use for:* Cross-model tracks where maximum isolation is the experimental variable. Level 1 results are the most externally valid.

### Level 2 — Different Project, Same Account
**Code:** `P`  
**Isolation quality:** Acceptable.

Separate project contexts, separate API keys, same root account. Likely separate session handling. Infrastructure routing may or may not be shared at the account level — this is undocumented by providers and may change without notice.

*Use for:* Tracks where some isolation is required but separate accounts are operationally impractical.

### Level 3 — Same Project, Different Key
**Code:** (not currently used as primary — documented for completeness)  
**Isolation quality:** Probably insufficient.

Keys within a project typically share session routing at the project level. Different keys do not guarantee different infrastructure paths. Results from Level 3 tracks should be interpreted with caution.

### Level 4 — Same Key
**Code:** `S`  
**Isolation quality:** No instance isolation.

Entity and Interlocutor share an API key. Session routing is shared. This is the Phase 1 and Phase 2 baseline — it is the easiest to operate but the least isolated. Results from Level 4 tracks are valid for within-track comparisons but should not be treated as evidence about model behavior independent of shared infrastructure effects.

---

## Why This Matters

Phase 3 will deliberately vary isolation level as an experimental dimension. The hypothesis: behavioral metrics from Level 4 tracks will show higher inter-agent correlation than equivalent Level 1 tracks, because shared infrastructure creates correlated variance that looks like behavioral similarity.

If this hypothesis is confirmed, it has implications for all prior LLM behavioral research that did not control for infrastructure isolation — which is essentially all of it.

---

## Provider Documentation Status

The following is what is currently known about isolation properties from public provider documentation. All of this is subject to change without notice and may not reflect actual infrastructure behavior.

| Provider | Session Routing Documentation | Instance Isolation Documentation |
|---|---|---|
| Google (Gemini API) | Not publicly documented | Not publicly documented |
| Anthropic (Claude API) | Not publicly documented | Not publicly documented |
| Perplexity (Sonar API) | Not publicly documented | Not publicly documented |

The absence of documentation is itself a finding worth noting. It means researchers cannot make reliable claims about isolation properties from any provider based on public information alone.

Teliminal's position: document what is unknown as rigorously as what is known.

---

*Teliminal Protocol / MMAD-EI — CC-BY 4.0*
