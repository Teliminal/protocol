# Platform

**License:** Elastic License 2.0 + Commons Clause — see [LICENSE-PLATFORM.md](../LICENSE-PLATFORM.md)

---

## Overview

The Teliminal platform is the infrastructure layer that makes running MMAD-EI batteries operationally tractable. It is not required for replication — any researcher with API access to the relevant models can run an equivalent battery using the [protocol specification](../protocol/MMAD-EI-SPEC.md) and their own tooling.

Platform-hosted execution is a convenience. Independent replication is the point.

---

## Components

### Battery Runner
Executes MMAD-EI battery tracks according to the protocol specification. Handles:
- Entity and Interlocutor agent orchestration
- Condition injection at specified rounds
- Per-round metric extraction
- State isolation between tracks
- Pre-flight validation enforcement

*Status: In development. Open source under ELv2 + Commons Clause.*

### Archive Management System
Stores and versions research archives. Handles:
- Per-round transcript storage
- Version history for all research documents
- Export in open formats (JSON, CSV, Markdown)
- Adversarial review record storage

*Status: In development.*

### Adversarial Review Infrastructure
Coordinates maximum-pressure adversarial review runs. Handles:
- Reviewer assignment and isolation
- Review record storage
- Before/after documentation of architectural changes produced by review

*Status: Planned.*

### Track State Management
Manages per-track state isolation to prevent cross-contamination between concurrent runs.

*Status: In development.*

---

## Self-Hosting

The platform software is source-available under ELv2 + Commons Clause. Self-hosted deployment is permitted and encouraged for:
- Academic institutions running their own batteries
- Researchers who want full infrastructure control
- Anyone who wants to verify platform behavior against the protocol specification

You cannot offer a self-hosted instance as a commercial service to third parties. Everything else is permitted.

Deployment documentation will be published with the first stable release.

---

## Contributing

Contributions to the platform software are welcome. By contributing, you agree that your contributions are licensed under ELv2 + Commons Clause.

Contributions to protocol documentation and methodology artifacts are welcome. By contributing, you agree that your contributions are licensed under CC-BY 4.0.

---

*Teliminal Protocol*  
*Rally, LLC — Tennessee*  
*© 2026*
