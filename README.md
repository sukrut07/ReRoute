# REROUTE — AI-Powered Financial Journey Engine

> **"Don't restart. Reroute."**  
> An AI-powered Financial Journey Engine that guides customers from goal to completion by understanding intent, verifying documents, detecting discrepancies, and dynamically rerouting to the safest next action.

---

## 1. Problem Statement
Financial journeys across insurance claims, lending, and fintech onboarding are notoriously fragmented, complex, and process-heavy. Traditional web portals function as rigid, unforgiving waterfalls:
- **Jargon & Form Overload:** Customers are expected to understand internal product taxonomies, policy exclusions, deductibles, and waiting periods before even starting.
- **Fragile Verification & Cold Rejections:** A minor typo or discrepancy across documents (e.g., a mismatch in Date of Birth or patient name between hospital invoice and policy) triggers a cold *"Application Incomplete"* or automatic rejection.
- **Catastrophic Drop-offs:** Over 38% of customers abandon valid claims or credit journeys because recovery requires telephone helpline support or restarting the entire multi-step process from scratch.

---

## 2. The Solution: The Reroute Paradigm
**Reroute** reimagines financial processes as an intelligent, adaptive journey engine. Instead of forcing customers to navigate rigid forms:
1. **Goal-First Intake:** Customers state their goal in plain language (*"I want to claim my hospital expenses for appendicitis surgery"*).
2. **Journey State Tracking:** The engine maintains an explicit state machine, tracking what is verified and what evidence remains.
3. **Document Intelligence:** OCR & Vision models extract structured entities with field-level confidence scores.
4. **Dynamic Rerouting:** When a conflict or missing document arises, the system **never restarts**—it isolates the exact blocker and **reroutes** the customer to the safest next action.
5. **Zero Autonomous Financial Approvals:** Compliant with responsible AI norms; Reroute assists, verifies, and packages evidence for human adjudicators.

---

## 3. Detailed Architecture Diagram

The system operates across six decoupled layers ensuring zero hallucination, deterministic safety gates, and auditability.

```mermaid
flowchart TD
    %% User and Access Layer
    subgraph ClientLayer [1. Client & Channel Access Layer]
        Web[Next.js 15 Web Application]
        Mobile[Responsive Mobile Web Interface]
        Voice[Indic Voice & WhatsApp Concierge - Conceptual]
    end

    %% Journey Gateway
    subgraph GatewayLayer [2. Journey Gateway & Session Management]
        Gateway[API Gateway & Auth Token Service]
        SessionMgr[Session State & Journey Memory Store]
        ConsentMgr[Explicit Data & PII Consent Gate]
    end

    %% Core Orchestration Engine
    subgraph OrchestrationLayer [3. AI Journey Orchestrator & State Engine]
        StateEngine[Journey Finite State Machine]
        IntentParser[Goal & Intent Classifier]
        RerouteEngine[Dynamic Reroute Service]
        RiskEngine[Deterministic Risk & AML Screening Engine]
    end

    %% Intelligence & Verification Services
    subgraph IntelligenceLayer [4. Document Intelligence & Knowledge RAG]
        DocAI[Document Intelligence Pipeline]
        OCR[LayoutLM / PaddleOCR / Vision Extraction]
        PolicyRAG[Policy Knowledge RAG & Clause Retrieval]
        CrossVerifier[Cross-Document Reconciliation Gate]
        ExplainEngine[Explainability & Reason Code Generator]
    end

    %% Decision & Human-in-the-Loop Layer
    subgraph GovernanceLayer [5. Governance & Human-in-the-Loop]
        SafetyGate[Deterministic Rules & Threshold Boundary]
        ReviewQueue[Human Review Queue Dossier]
        Officer([Authorized Claims Adjudicator])
    end

    %% Data & Observability
    subgraph DataLayer [6. Persistence & Telemetry]
        Postgres[(PostgreSQL State Ledger)]
        Telemetry[(Journey Telemetry & Funnel DB)]
        AuditLog[(Cryptographic Audit Log)]
    end

    %% Data Flow Connections
    ClientLayer --> Gateway
    Gateway --> SessionMgr
    Gateway --> ConsentMgr
    SessionMgr --> StateEngine
    
    StateEngine --> IntentParser
    StateEngine <--> DocAI
    DocAI --> OCR
    StateEngine <--> PolicyRAG
    StateEngine <--> CrossVerifier
    
    CrossVerifier -->|Match Verified| RiskEngine
    CrossVerifier -->|Discrepancy Detected| RerouteEngine
    RerouteEngine -->|Next Safe Action| Web
    
    RiskEngine --> SafetyGate
    SafetyGate -->|Normal Variance| StateEngine
    SafetyGate -->|Elevated Risk / Low Confidence| ReviewQueue
    ReviewQueue --> Officer
    
    StateEngine --> Postgres
    StateEngine --> Telemetry
    StateEngine --> ExplainEngine
    ExplainEngine --> Web
    StateEngine --> AuditLog
```

---

## 4. Detailed Workflow Diagram

The sequence below illustrates the end-to-end Health Insurance Claim journey, showing the deliberate Date of Birth mismatch, the signature Reroute intervention, and seamless recovery.

```mermaid
sequenceDiagram
    autonumber
    actor Customer as Customer (Sukrut Dusane)
    participant UI as Reroute Frontend UI
    participant Orch as Journey Orchestrator
    participant DocAI as Document AI (OCR / VLM)
    participant Verifier as Verification Engine
    participant Reroute as Reroute Engine
    participant Risk as Risk & AML Engine
    actor Officer as Human Review Officer

    Note over Customer,UI: Stage 1: Goal Intake & Policy Verification
    Customer->>UI: "I want to claim my hospital expenses for appendicitis"
    UI->>Orch: POST /api/journey/start (Goal Intent)
    Orch->>UI: Journey Identified: Health Claim (POL-2026-1024, ₹5L Sum Insured)
    
    Note over Customer,UI: Stage 2: Evidence Collection & Extraction
    Customer->>UI: Uploads Hospital Bill, Discharge Summary, Aadhaar Card
    UI->>DocAI: Send Artifacts for Multi-Modal Layout & OCR Extraction
    DocAI-->>UI: Extracted Fields (Confidence 96%): Patient, Hospital, Amount ₹84,500, DOB
    
    Note over UI,Verifier: Stage 3: Cross-Document Reconciliation
    UI->>Verifier: Run Cross-Document Verification Matrix
    Verifier-->>UI: DISCREPANCY DETECTED: Policy DOB (14/07/1998) != Bill DOB (17/07/1998)
    
    Note over UI,Reroute: Stage 4: Dynamic Rerouting (Signature Moment)
    UI->>Reroute: Evaluate Blocker (DOB Mismatch, Evidence: 2 Docs, Confidence: 92%)
    Reroute-->>UI: Action: RESOLVE_CONFLICT (Target: Date of Birth)
    UI->>Customer: REROUTE PROMPT: "We've rerouted your journey. Confirm your legal birth date."
    Customer->>UI: Clicks "Why did Reroute flag this?"
    UI-->>Customer: Explainer: Verification Rule VER-RULE-2026-V1 & Policy Section 4.2
    Customer->>UI: Selects "Confirm 14 July 1998 (Matches Aadhaar)"
    
    Note over UI,Risk: Stage 5: In-Place Re-verification & Risk Screening
    UI->>Verifier: Re-verify single field with customer confirmation
    Verifier-->>UI: Re-verification Passed (100% Agreement)
    UI->>Risk: Execute Deterministic Risk Screening
    Risk-->>UI: Risk Score: 42/100 (Medium), Signals: DOB Mismatch (+35), Amount Var (+7)
    
    Note over UI,Officer: Stage 6: Human Review Packet & Completion
    UI->>Orch: Assemble Case Dossier (CASE #R-1024)
    Orch->>Officer: Queue Review Dossier (Audit Trail, Confirmed Value, OCR Evidence)
    UI-->>Customer: "Your journey is complete. Status: Ready for final human review."
    Officer->>Orch: Officer clicks "Approve Next Step"
```

---

## 5. Comprehensive Tools & Technologies Used

A complete catalog of all frameworks, libraries, open-source models, and architectural tools powering Reroute:

### A. Frontend & User Experience
| Tool | Version / Source | Purpose in Reroute |
| :--- | :--- | :--- |
| **Next.js** | `v15.5.x` (App Router) | High-performance server rendering, static optimization, and routing |
| **React** | `v19.1.x` | Modern reactive component architecture and concurrent transitions |
| **TypeScript** | `v5.6.x` | End-to-end domain type safety across journeys, conflicts, and claims |
| **Tailwind CSS** | `v3.4.x` | Utility-first styling with custom Neo-Brutalist color tokens and border classes |
| **Lucide React** | `v0.468.x` | Consistent, accessible technical fintech iconography |
| **Space Grotesk** | Google Fonts | Primary bold geometric sans-serif typeface |
| **DM Mono** | Google Fonts | Technical monospace typeface for codes, currency, and timestamps |

### B. UI Primitives & Interactive Visualizations
| Tool | Source / Ecosystem | Purpose in Reroute |
| :--- | :--- | :--- |
| **shadcn/ui & Radix UI** | [shadcn/ui](https://github.com/shadcn-ui/ui) | Accessible, unstyled primitives for modals, drawers, and tooltips |
| **Recharts** | [recharts](https://github.com/recharts/recharts) | Conversion funnel visualization and friction metrics comparisons |
| **xyflow / React Flow** | [React Flow](https://github.com/xyflow/xyflow) | (Recommended) Interactive node graph visualization of evidence dependencies |
| **Custom Shell & Cursor** | Built-in | Subtle interactive mouse tracking and responsive background grid |

### C. Orchestration, Document Intelligence & RAG
| Tool | Category | Implementation & Role |
| :--- | :--- | :--- |
| **Reroute State Engine** | Core Service | Deterministic state machine managing step transitions and blockers |
| **Dynamic Reroute Service** | Core Engine | Evaluates state and generates minimal-friction recovery actions |
| **PaddleOCR / Tesseract** | Document AI | Layout-aware text and field extraction from invoices and ID proofs |
| **Microsoft Presidio** | Privacy / PII | Client/gateway redaction of sensitive identifiers (Aadhaar/PAN) |
| **pgvector / Qdrant** | Vector Store | Embeddings storage and hybrid retrieval for policy specifications |
| **LangGraph / Temporal** | Orchestration | Stateful workflow orchestration with checkpointing and human-in-the-loop |

### D. Risk Intelligence, Policy & Governance
| Tool | Category | Implementation & Role |
| :--- | :--- | :--- |
| **Risk Intelligence Engine** | Fraud / AML Screening | Additive scoring algorithm (0–100) with explainable signals |
| **Policy Knowledge Base** | Regulatory Rules | Grounded Markdown policies (`claim-requirements`, `verification-rules`) |
| **Explainable AI Engine** | Trust & Transparency | Grounded plain-language citations with clause citations and confidence % |
| **Officer Review Queue** | Human Oversight | Pre-assembled dossiers with customer confirmation audit trails |

### E. Hackathon Ecosystem Integrations
| Tool | Ecosystem Partner | Hackathon Integration Opportunity |
| :--- | :--- | :--- |
| **Sarvam AI** | Sarvam Platform | Indic-language speech-to-text, text-to-speech, and regional translation |
| **n8n** | n8n Automation | Low-code workflow webhook automation and notification dispatch |
| **Cognee** | Knowledge Graph | Entity-relationship graphs connecting policyholder → hospital → claim |

---

## 6. Document Structure & Synthetic Schema

All synthetic documents in Reroute follow structured, auditable schemas:
- **Policy Schedule (`Policy_Schedule_POL1024.pdf`):** Contains policyholder legal name, birth date, sum insured (`₹5,00,000`), room rent cap (`₹5,000/day`), and waiting period clauses.
- **Hospital Invoice (`Hospital_Bill_CityCare_84500.pdf`):** Inpatient bill containing admission/discharge timestamps, itemized room/surgical fees, and the deliberate mismatch date (`17/07/1998`).
- **Clinical Discharge Summary (`Discharge_Summary_Sukrut_Aug2026.pdf`):** Medical proof detailing diagnosis (*Acute Appendicitis*), procedure (*Laparoscopic Appendectomy*), and surgeon details.
- **Government Photo ID (`Aadhaar_Card_Masked_Sukrut.pdf`):** Official identity benchmark containing verified Date of Birth (`14/07/1998`) used for Reroute confirmation.

*For comprehensive schema details, field bounding boxes, and cross-reconciliation rules, see [`docs/DOCUMENT_STRUCTURE.md`](file:///Users/sukrutdusane/Documents/Projects%20/Sy/ReRoute/docs/DOCUMENT_STRUCTURE.md).*

---

## 7. Main Hackathon Demo Flow (2–3 Minutes)

Judges can execute this exact sequence to experience the product differentiator within 30 seconds:
1. **Intake (`/journey`):** Customer enters *"I want to claim my hospital expenses for appendicitis surgery."* Click **Begin Journey**.
2. **Policy Entitlement:** Policy `POL-2026-1024` verified against ₹5,00,000 coverage limit.
3. **Evidence Extraction:** Four synthetic PDF documents parsed with 96% OCR confidence.
4. **Deliberate Conflict:** Policy DOB is **14/07/1998** vs Hospital Bill **17/07/1998**.
5. **The Reroute Moment:** The screen dynamically transitions to:
   > *"We've rerouted your journey. Instead of restarting your claim, we've identified exactly what needs clarification."*
6. **Explainability:** Click **"Why did Reroute flag this?"** to inspect the source policy citation and confidence metrics.
7. **Resolution:** Click **Confirm 14 July 1998 (Matches Aadhaar)**.
8. **In-Place Recovery:** Re-verification clears the conflict instantly without any data loss.
9. **Risk Screening:** Transparent Risk Score: 42/100 (Medium).
10. **Human Review Packet:** Completion screen confirms dossier assembled for human claims officer.
11. **Telemetry Telemetry (`/dashboard`):** Real-time conversion funnel and 41% step-reduction matrix.

---

## 8. Four Demo Scenarios (Using Demo Mode Switcher)
Click the **DEMO MODE** pills at the top of the interface:
- **01 · DOB Conflict (Default / Core Demo):** Staged discrepancy → in-place Reroute → user confirmation → resumption.
- **02 · Happy Path:** All 4 documents match; skips reroute and fast-tracks directly to review preparation.
- **03 · Missing Evidence:** Discharge summary omitted; Reroute informs user exactly what is needed without rejection.
- **04 · Risk Signal:** High-ticket claim (₹1,85,000) triggers elevated risk score (68/100) and automatic escalation to human adjudicator queue.

---

## 9. AI Safety & Regulatory Compliance
- **Zero Autonomous Financial Approvals:** Reroute coordinates, assists, and packages evidence; it does not autonomously approve, reject, underwrite, or disburse funds.
- **Deterministic Guardrails:** Risk scoring and rerouting rules are deterministic, preventing probabilistic LLM hallucinations in critical paths.
- **Synthetic Data Guarantee:** All names, policies, claim amounts, and hospital records are strictly fictional.

---

## 10. Repository Directory Structure

```text
ReRoute/
├── app/
│   ├── page.tsx            # Neo-Brutalist Landing Page & Interactive Simulator
│   ├── layout.tsx          # Root Layout & Global Metadata
│   ├── globals.css         # Tailwind & Neo-brutalist styling utilities
│   ├── journey/
│   │   └── page.tsx        # Interactive Customer Journey Engine & State Machine
│   ├── dashboard/
│   │   └── page.tsx        # Journey Intelligence & Funnel Telemetry
│   ├── risk/
│   │   └── page.tsx        # Risk Intelligence Screening Dashboard
│   └── review/
│       └── page.tsx        # Human Review Dossier & Officer Controls
├── components/
│   ├── navbar.tsx          # Responsive Header with Route Links & Badges
│   ├── demo-banner.tsx     # Scenario Switcher Bar (4 Scenarios)
│   ├── explainability-modal.tsx # "Why?" Explainable AI Panel
│   ├── evidence-modal.tsx  # Document Scan & OCR Viewer
│   └── journey/
│       ├── journey-sidebar.tsx
│       ├── goal-step.tsx
│       ├── policy-step.tsx
│       ├── upload-step.tsx
│       ├── extraction-step.tsx
│       ├── verification-step.tsx
│       ├── conflict-reroute-step.tsx
│       ├── risk-step.tsx
│       └── completion-step.tsx
├── lib/
│   ├── types.ts            # Complete TypeScript Domain Interfaces
│   ├── reroute-engine.ts   # Deterministic Reroute & Safe Next Action Logic
│   ├── risk-engine.ts      # Transparent Risk Intelligence & Anomaly Scoring
│   └── synthetic-data.ts   # Pre-populated Demo Scenarios & Knowledge Bases
├── data/
│   ├── policies/           # Markdown Policy & Verification Specifications
│   └── synthetic/          # JSON Datasets (customers, journeys, claims, analytics)
├── docs/
│   ├── PRODUCT.md          # Product Vision & Competitive Differentiation
│   ├── ARCHITECTURE.md     # Multi-layer Architecture & Principles
│   ├── JOURNEY_FLOW.md     # State Transitions & Step-by-Step Flow
│   ├── WORKFLOW.md         # Complete End-to-End Sequence & Workflows
│   ├── TOOLS.md            # Detailed Catalog of Tools & Open-Source Repos
│   ├── DOCUMENT_STRUCTURE.md # Synthetic Document Schemas & OCR Taxonomies
│   ├── REROUTE_ENGINE.md   # Reroute Service Contract & Action Taxonomy
│   ├── RISK_ENGINE.md      # Risk Scoring Formulations & Anomaly Weights
│   ├── DATA_MODEL.md       # TypeScript & Database Entity Schemas
│   ├── API.md              # REST API Specification
│   ├── DEMO.md             # 2-3 Minute Hackathon Demo Script
│   └── LIMITATIONS.md      # Responsible AI Boundaries
└── package.json
```

---

## 11. Local Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/sukrut07/ReRoute.git
cd ReRoute

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:3000
```
