# REROUTE — Workflow Engine & State Machine Specification

This document details the lifecycle workflows, state transition logic, recovery loops, and human-in-the-loop escalation paths implemented across the Reroute Engine.

---

## 1. High-Level Lifecycle State Machine

```mermaid
stateDiagram-v2
    [*] --> INITIATED : Customer inputs goal
    INITIATED --> POLICY_VERIFIED : Policy Schedule retrieved
    POLICY_VERIFIED --> EVIDENCE_COLLECTING : Required checklist generated
    EVIDENCE_COLLECTING --> EXTRACTING : Documents uploaded
    EXTRACTING --> VERIFYING : Structured entities parsed
    
    state VERIFYING {
        [*] --> CrossCheck
        CrossCheck --> MatchFound : All fields match
        CrossCheck --> ConflictFound : Mismatch detected
    }
    
    ConflictFound --> REROUTED : Isolate discrepancy
    REROUTED --> REVERIFYING : User confirms accurate value
    REVERIFYING --> VERIFIED : Field reconciled
    MatchFound --> VERIFIED
    
    VERIFIED --> RISK_SCREENING : Run anomaly screening
    
    state RISK_SCREENING {
        [*] --> CheckSignals
        CheckSignals --> NormalRisk : Score <= 60
        CheckSignals --> HighRisk : Score > 60 or Low OCR
    }
    
    HighRisk --> HUMAN_REVIEW_QUEUE : Escalate with Dossier
    NormalRisk --> DOSSIER_PREPARED : Pre-assemble packet
    
    HUMAN_REVIEW_QUEUE --> OFFICER_ACTION
    state OFFICER_ACTION {
        [*] --> OfficerDecision
        OfficerDecision --> Approved : Approve Next Step
        OfficerDecision --> Clarification : Request Information
        OfficerDecision --> Escalated : Escalate to Panel
    }
    
    Approved --> COMPLETED
    DOSSIER_PREPARED --> COMPLETED : Ready for Final Sign-off
    COMPLETED --> [*]
```

---

## 2. Dynamic Rerouting Recovery Workflow

The diagram below demonstrates how Reroute intercepts a failure that would cause an application abort in legacy systems:

```mermaid
flowchart TD
    StartCheck[Cross-Evidence Verification Pass] --> Condition{Divergence Detected?}
    Condition -- No --> AdvanceToRisk[Proceed directly to Risk Screening]
    Condition -- Yes --> FlagConflict[Flag Conflicting Entity: Date of Birth]
    
    subgraph LegacyPortal [Legacy System Response]
        FlagConflict -.-> AbortNotice["Application Incomplete / Failed"]
        AbortNotice -.-> Abandonment[Customer Drops Off / Helplines Clogged]
    end
    
    subgraph RerouteSystem [The Reroute Engine Response]
        FlagConflict --> IsolateField[Isolate single conflicting attribute: DOB]
        IsolateField --> RetainState[Preserve all 100% verified policy & hospital fields]
        RetainState --> GeneratePrompt[Generate targeted confirmation prompt with policy citation]
        GeneratePrompt --> PresentOptions["Present Option 1: 14 July 1998 (Policy)<br/>Present Option 2: 17 July 1998 (Bill)"]
        PresentOptions --> UserChoice[Customer confirms 14 July 1998]
        UserChoice --> TargetedReverify[Re-verify only Date of Birth field]
        TargetedReverify --> ResumeJourney[Resume journey at Risk Screening without data loss]
    end
```

---

## 3. Human-in-the-Loop Workflow

When cases have elevated risk (> 60), low OCR confidence (< 70%), or user requests manual intervention:

```mermaid
sequenceDiagram
    participant Engine as Journey Engine
    participant Queue as Human Review Queue
    participant Dossier as Case Dossier Store
    actor Officer as Claims Officer
    actor Customer as Customer

    Engine->>Queue: Enqueue Case #R-1024 (Priority: Normal, Risk: 42/100)
    Engine->>Dossier: Attach OCR Text, Source Bounding Boxes, Customer Confirmation
    Officer->>Queue: Select Case #R-1024 from Pending Queue
    Queue->>Officer: Display Full Case Dossier (Goal, Documents, Confirmation Audit)
    alt Officer Approves
        Officer->>Dossier: Click "Approve Next Step"
        Dossier-->>Engine: Status -> APPROVED_NEXT_STEP
        Engine-->>Customer: Notify customer: "Dossier reviewed and queued for settlement"
    else Officer Requests More Info
        Officer->>Dossier: Click "Request More Information"
        Dossier-->>Engine: Status -> CLARIFICATION_REQUESTED
        Engine-->>Customer: Targeted Reroute prompt requesting specific medical record
    end
```
