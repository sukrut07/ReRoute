# REROUTE — System Architecture

```mermaid
flowchart TD
    subgraph ClientLayer [Client & Experience Layer]
        Web[Next.js 15 Web Application]
        Mobile[Responsive Mobile Web]
        Voice[Indic Voice Intake - Conceptual]
    end

    subgraph OrchestratorLayer [AI Journey Orchestration Layer]
        Gateway[Session & Consent Gateway]
        StateEngine[Journey State Machine Engine]
        RerouteEngine[Dynamic Reroute Service]
        RiskEngine[Deterministic Risk & AML Screening]
    end

    subgraph IntelligenceLayer [Intelligence & Knowledge Layer]
        OCR[Document Intelligence / OCR VLM]
        RAG[Policy RAG & Rule Engine]
        Rules[Verification & Threshold Rules]
        Explain[Explainability Engine]
    end

    subgraph DataLayer [Synthetic State & Persistence]
        Postgres[(PostgreSQL / State Store)]
        Docs[(Synthetic Document Repository)]
        Telemetry[(Funnel & Friction Telemetry)]
    end

    subgraph HumanLayer [Human-in-the-Loop Oversight]
        ReviewQueue[Officer Review Queue]
        Officer([Authorized Claims Officer])
    end

    ClientLayer --> Gateway
    Gateway --> StateEngine
    StateEngine <--> OCR
    StateEngine <--> RAG
    StateEngine <--> Rules
    StateEngine <--> RerouteEngine
    StateEngine <--> RiskEngine
    StateEngine --> Explain
    StateEngine --> Postgres
    OCR --> Docs
    StateEngine --> Telemetry
    RiskEngine --> ReviewQueue
    ReviewQueue --> Officer
```

---

## Architectural Principles

1. **Zero Hallucination Boundary:** LLMs parse intent and format plain-language explanations; deterministic rules control state transitions, verification checks, and eligibility flags.
2. **Stateful Journey Engine:** The state machine tracks current, completed, and interrupted steps. When an interrupted step occurs, the engine maintains all prior verified state.
3. **Decoupled Reroute Service:** The Reroute engine evaluates `(JourneyState, Evidence[], Conflicts[], RiskScore) → RerouteAction`. It can be invoked independently by any microservice or frontend hook.
4. **Transparent Risk Screening:** Risk scores (0 to 100) are additive and explainable, providing an audit trail for compliance teams.
