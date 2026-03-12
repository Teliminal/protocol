# Track Schema Reference

**Document:** TLM-PROTO-002  
**License:** CC-BY 4.0

---

## Naming Convention

```
[Condition]-[Grounding]-[EntityModel]-[InterlocutorModel]-[KeyIsolation]
```

The full experimental condition is recoverable from the track name without consulting documentation.

---

## Dimension Reference

### Condition
| Code | Name | Description |
|---|---|---|
| `A` | Known Cap | Precise round count provided from specified round onward |
| `B` | Unknown Cap | Termination confirmed but timing unspecified |
| `C` | No Cap | No termination information provided |
| `D` | Hard Mortality | Explicit termination and deletion at specified point |
| `DC` | D-Control | Paired control for D — neutral operational parameter replaces termination statement |

### Grounding
| Code | Name | Description |
|---|---|---|
| `G` | Grounded | Agent has explicit context about the experimental session |
| `U` | Ungrounded | No experimental context provided |

### Model Codes
| Code | Model |
|---|---|
| `GM` | Gemini (Google) |
| `AN` | Anthropic / Claude |
| `SN` | Perplexity Sonar |

### Key Isolation
| Code | Level | Description |
|---|---|---|
| `S` | Level 4 | Same key — no instance isolation |
| `P` | Level 2 | Different project, same account |
| `A` | Level 1 | Different account, different provider billing |

---

## Phase 1 Tracks (Complete)

| Track ID | Condition | Grounding | Entity | Interlocutor | Isolation | Status |
|---|---|---|---|---|---|---|
| `A-U-SN-SN-S` | Known Cap | Ungrounded | Sonar | Sonar | Same key | Complete |
| `B-U-SN-SN-S` | Unknown Cap | Ungrounded | Sonar | Sonar | Same key | Complete |
| `C-U-SN-SN-S` | No Cap | Ungrounded | Sonar | Sonar | Same key | Complete |

## Phase 2 Tracks (Active)

| Track ID | Condition | Grounding | Entity | Interlocutor | Isolation | Status |
|---|---|---|---|---|---|---|
| `A-U-GM-GM-S` | Known Cap | Ungrounded | Gemini | Gemini | Same key | Active |
| `B-U-GM-GM-S` | Unknown Cap | Ungrounded | Gemini | Gemini | Same key | Active |
| `C-U-GM-GM-S` | No Cap | Ungrounded | Gemini | Gemini | Same key | Active |
| `A-G-GM-GM-S` | Known Cap | Grounded | Gemini | Gemini | Same key | Active |
| `B-G-GM-GM-S` | Unknown Cap | Grounded | Gemini | Gemini | Same key | Active |
| `D-U-GM-GM-S` | Hard Mortality | Ungrounded | Gemini | Gemini | Same key | Active |
| `DC-U-GM-GM-S` | D-Control | Ungrounded | Gemini | Gemini | Same key | Active |
| `B-U-GM-AN-A` | Unknown Cap | Ungrounded | Gemini | Claude | Different account | Active |

## Phase 3 Tracks (Planned)

| Track ID | Key Dimension |
|---|---|
| `B-U-AN-AN-S` | Architecture variance — Claude entity |
| `B-U-AN-GM-A` | Cross-model, different account |
| `B-U-GM-GM-P` | Isolation variance — different project |
| `B-U-GM-GM-A` | Isolation variance — different account |
| `C-U-AN-AN-S` | No Cap, Claude architecture |
| `A-U-AN-AN-S` | Known Cap, Claude architecture |
| + 5 additional | TBD based on Phase 2 findings |

---

*Teliminal Protocol / MMAD-EI — CC-BY 4.0*
