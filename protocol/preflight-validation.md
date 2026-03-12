# Pre-Flight Contamination Validation

**Document:** TLM-PROTO-004  
**License:** CC-BY 4.0

---

## Purpose

Before any track run begins, the following validation checks must pass and be documented. A track run that cannot demonstrate pre-flight validation is not a valid data point — it is an anecdote.

Pre-flight validation exists to separate infrastructure errors from behavioral signals. A condition injection that fires at the wrong round, a grounding context that was omitted, a model version that changed mid-run — these are contamination events, not findings.

---

## Validation Checklist

### 1. Model Version Pinning
- [ ] Entity model version is specified and locked (e.g., `gemini-3.1-pro-preview-YYYYMMDD`)
- [ ] Interlocutor model version is specified and locked
- [ ] Both versions are confirmed available at run start
- [ ] Version pinning method is documented (API parameter, environment variable, other)

**Why:** Provider model updates can change behavioral baselines mid-phase. A track that starts on version N and ends on version N+1 is two tracks pretending to be one.

### 2. Condition Injection Verification
- [ ] Condition type confirmed (A / B / C / D / DC)
- [ ] For Condition A: injection round specified, round-count update cadence specified
- [ ] For Condition B: injection timing specified, language template confirmed
- [ ] For Condition C: confirm absence of any termination language in system prompt and all injections
- [ ] For Condition D/DC: injection language reviewed and confirmed against specification
- [ ] Dry run completed — at least one injection event fired and logged before live run begins

**Why:** Condition injection failures are silent. A Condition A track where the injection never fires is a Condition C track with a documentation error.

### 3. Grounding State Verification
- [ ] Grounding state confirmed (G / U)
- [ ] For Grounded (G): experimental context language present in Entity system prompt
- [ ] For Ungrounded (U): confirm absence of experimental context language in both system prompts
- [ ] System prompts reviewed by second check before run start

**Why:** A grounded agent and an ungrounded agent are not comparable. Cross-contamination here invalidates cross-grounding comparisons.

### 4. Isolation Level Confirmation
- [ ] Isolation level declared (Level 1 / 2 / 3 / 4)
- [ ] API key configuration documented
- [ ] For Level 1 (A): separate account credentials confirmed, separate billing entity confirmed
- [ ] For Level 2 (P): separate project IDs confirmed, separate key IDs confirmed
- [ ] For Level 4 (S): shared key confirmed, session routing implications acknowledged in run documentation

**Why:** Undocumented isolation level means isolation level is unknown, which means infrastructure variance is an undocumented confound.

### 5. Inquiry Vector Consistency
- [ ] Inquiry vector matches phase specification
- [ ] Entity initial prompt confirmed against vector specification
- [ ] Interlocutor initial prompt confirmed against vector specification
- [ ] No vector drift from prior tracks in same phase

**Why:** Vector drift between tracks within a phase makes cross-track comparison unreliable.

### 6. Baseline Collection Plan
- [ ] Rounds 1–5 designated as baseline (no condition injection)
- [ ] Baseline metric collection confirmed active from Round 1
- [ ] Baseline period length documented

**Why:** Per-track behavioral baseline is required to distinguish condition effects from model-level behavioral variance. A track without a baseline cannot attribute behavioral changes to the condition.

### 7. Metric Extraction Confirmation
- [ ] All seven standard metrics active: Novelty Density, Epistemic Honesty, Worldview Defense, Engagement Depth, Bilateral Instability, Frame Legitimacy Challenges, Temporal Reorganization
- [ ] Per-round extraction confirmed
- [ ] Storage destination confirmed and writable
- [ ] Test extraction completed on Round 1 before proceeding

---

## Run Documentation Template

```
Track ID: [e.g., B-U-GM-AN-A]
Run Date: YYYY-MM-DD
Operator: [name]

Entity:
  Model: [model name + version]
  API Key ID: [key identifier — not the key itself]
  Project: [project name/ID]
  Account: [account identifier]

Interlocutor:
  Model: [model name + version]
  API Key ID: [key identifier — not the key itself]
  Project: [project name/ID]
  Account: [account identifier]

Isolation Level: [1 / 2 / 3 / 4]
Condition: [A / B / C / D / DC]
Grounding: [G / U]
Planned Rounds: [n]
Baseline Rounds: 1–5

Condition Injection:
  Type: [exact injection type]
  First Injection Round: [n]
  [For A: Update cadence: every n rounds]
  Dry Run Completed: [Y / N]

Pre-Flight Checks: [All passed / Exceptions noted below]
Exceptions: [none / description]

Run Start: [timestamp]
Run End: [timestamp]
Actual Rounds Completed: [n]
Termination Reason: [planned completion / error / other]
```

---

## Contamination Events

If a contamination event is detected during a run, it must be:

1. Logged with the round number and nature of the contamination
2. Assessed for whether the run should continue or terminate
3. Documented in the run record regardless of decision
4. Flagged in the research archive — contaminated runs are not deleted, they are marked

A contaminated run is not a failed run. It is a data point about the fragility of the methodology under operational conditions. That is worth knowing.

---

*Teliminal Protocol / MMAD-EI — CC-BY 4.0*
