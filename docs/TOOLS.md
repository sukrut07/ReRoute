# REROUTE — Comprehensive Tools & Technology Catalog

This document lists all software tools, open-source libraries, UI primitives, document intelligence models, and hackathon ecosystem services utilized across the Reroute project.

---

## 1. Core Application Frameworks

| Tool | Version / Repository | Architectural Function |
| :--- | :--- | :--- |
| **Next.js** | `v15.5.x` ([GitHub](https://github.com/vercel/next.js)) | Full-stack React framework providing Server Components, App Router, asset optimization, and API routing. |
| **React** | `v19.1.x` ([GitHub](https://github.com/facebook/react)) | Component runtime with concurrent transitions and declarative state updates. |
| **TypeScript** | `v5.6.x` ([GitHub](https://github.com/microsoft/TypeScript)) | Static type verification ensuring strict domain modeling for claims, conflicts, risk scores, and evidence items. |
| **Node.js** | `>= 20.x` | JavaScript runtime environment. |

---

## 2. Design System & User Interface Primitives

| Tool | Source | Purpose in Reroute |
| :--- | :--- | :--- |
| **Tailwind CSS** | [GitHub](https://github.com/tailwindlabs/tailwindcss) | Utility-first CSS framework configured with custom Neo-Brutalist shadows (`brutal-shadow`), sharp borders (`brutal-border`), and fintech color tokens. |
| **PostCSS & Autoprefixer** | PostCSS Tools | Automated CSS parsing and vendor prefixing. |
| **Lucide React** | [GitHub](https://github.com/lucide-icons/lucide) | Comprehensive library of accessible SVG icons (e.g. `Route`, `ShieldCheck`, `AlertTriangle`, `FileText`). |
| **Space Grotesk** | Google Fonts | Bold, technical, high-contrast sans-serif font for headlines and KPI cards. |
| **DM Mono** | Google Fonts | Precise monospace font for case IDs, timestamps, currency amounts, and policy clauses. |
| **shadcn/ui & Radix UI** | [shadcn/ui](https://github.com/shadcn-ui/ui) | Headless accessible components for modals, accessible dialogs, and tooltips. |

---

## 3. Visualization & Interactive Telemetry

| Tool | Source | Purpose in Reroute |
| :--- | :--- | :--- |
| **Recharts** | [GitHub](https://github.com/recharts/recharts) | Declarative charting library for conversion funnels, friction distribution bars, and drop-off analytics. |
| **xyflow / React Flow** | [GitHub](https://github.com/xyflow/xyflow) | Node-edge graph rendering for multi-document evidence chains and state transition paths. |
| **Mermaid.js** | [GitHub](https://github.com/mermaid-js/mermaid) | Architectural diagrams and sequential workflow execution charts in documentation and telemetry views. |

---

## 4. State Management & Journey Engine

| Tool | Implementation | Purpose in Reroute |
| :--- | :--- | :--- |
| **Reroute State Engine** | Custom TypeScript Service (`lib/journey-engine.ts`) | Finite State Machine tracking steps: Goal → Policy → Evidence → Extraction → Verification → Reroute → Risk → Completion. |
| **Dynamic Reroute Service** | Custom TypeScript Service (`lib/reroute-engine.ts`) | Evaluates `(State, Evidence, Conflicts, RiskScore)` and computes the minimal-friction next safe action. |
| **Deterministic Risk Engine**| Custom TypeScript Service (`lib/risk-engine.ts`) | Transparent additive risk model computing 0–100 scores and explainable signal telemetry. |
| **TanStack React Query** | [GitHub](https://github.com/tanstack/query) | Async data fetching, optimistic mutations, and document processing cache management. |

---

## 5. Document Intelligence & Privacy

| Tool | Category | Purpose in Reroute |
| :--- | :--- | :--- |
| **PaddleOCR** | Layout & Text OCR | Open-source multi-lingual OCR pipeline for complex invoice tables and medical records. |
| **Tesseract OCR** | Lightweight OCR | Baseline optical character recognition for plain document scans. |
| **Microsoft Presidio** | PII Redaction | Automated scanning and masking of Aadhaar VID, PAN, and sensitive personal health info. |
| **Perceptual Image Hash** | Integrity | Detection of duplicate hospital invoices previously submitted in the synthetic registry. |

---

## 6. Knowledge Retrieval & Vector Search (RAG)

| Tool | Category | Purpose in Reroute |
| :--- | :--- | :--- |
| **pgvector** | PostgreSQL Extension | Stores dense vector embeddings of policy schedules, IRDAI guidelines, and claim requirements. |
| **Qdrant** | Dedicated Vector DB | Hybrid dense/sparse vector search with payload filtering for policy sections. |
| **Grounded Citations** | RAG Layer | Generates plain-language "Why?" panels citing exact policy sections and confidence metrics. |

---

## 7. Hackathon Ecosystem Integrations

| Partner / Service | Potential Integration | Architecture Role |
| :--- | :--- | :--- |
| **Sarvam AI** | Indic Voice & Speech AI | Voice-first customer goal intake and regional language translation (Hindi, Tamil, Marathi, etc.). |
| **n8n** | Workflow Automation | External webhook integration for claim notification dispatch and reviewer alerts. |
| **Cognee** | Knowledge Memory Graph | Semantic memory graphs linking claimant → hospital → historical claim velocity. |
