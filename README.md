# REROUTE

## AI Financial Journey Engine

Reroute turns a customer's financial goal into a live, evidence-aware journey.

**Goal → Evidence → Verify → Reroute → Resolve → Complete**

### What we build
- Goal-based journey orchestration
- Document intelligence
- Evidence and conflict detection
- Dynamic rerouting
- Explainable actions
- Human-in-the-loop review
- Lightweight synthetic risk intelligence
- Journey analytics

### Primary demo
Synthetic health-insurance reimbursement claim with a staged document conflict that triggers Reroute.

### Design
Minimal neo-brutalist fintech UI with strong borders, high contrast, compact data surfaces, and route/checkpoint metaphors.

### Stack
Next.js, TypeScript, Tailwind, shadcn/ui, FastAPI, PostgreSQL, LangGraph, vector retrieval, OCR/VLM abstraction.

### Safety
This project uses synthetic data for the hackathon. It does not autonomously approve or reject claims, underwriting, credit, or regulated financial advice.

### Docs
See `/docs` for architecture, design system, Reroute engine, risk engine, policy engine, API, data model, demo, tools and roadmap.

### Development
Build the customer journey first. Dashboards and optional capabilities should consume the same journey/event model.
