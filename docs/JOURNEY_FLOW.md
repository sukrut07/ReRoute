# REROUTE — Journey Flow Specification

This document details the step-by-step state machine implemented in the Reroute Health Insurance Claim journey.

```text
[Goal Intake] 
      ↓
[Policy Check] 
      ↓
[Evidence Upload] 
      ↓
[Document Intelligence] 
      ↓
[Cross-Verification] ──(Clean Match)─────────────────────────────┐
      ↓ (Conflict Detected)                                      │
[Reroute Engine Intercept]                                        │
      ↓                                                          │
[User Confirmation / Resolution]                                 │
      ↓                                                          │
[Re-verification Gate]                                           │
      ↓                                                          │
      ├──────────────────────────────────────────────────────────┘
      ↓
[Risk Intelligence Screening] ──(Elevated Risk > 60)──→ [Human Review Escalation]
      ↓ (Standard / Medium Risk)
[Prepare Review Dossier]
      ↓
[Journey Completed (Ready for Sign-off)]
```

---

## Detailed Stages

### Stage 1: Goal-First Intake (`goal`)
- User inputs goal: *"I want to claim my hospital expenses for appendicitis surgery."*
- System matches intent to `HEALTH_INSURANCE_CLAIM`.
- Initializes state object with customer profile, active policy `POL-2026-1024`, and required checklist.

### Stage 2: Policy & Entitlement Check (`policy`)
- Fetches active policy schedule.
- Checks basic terms: Sum Insured ₹5,00,000, Single AC room rent cap ₹5,000/day.
- Verifies 24-month pre-existing disease waiting period is satisfied.

### Stage 3: Evidence Collection (`evidence`)
- Accepts PDF/Image uploads: `Policy_Schedule_POL1024.pdf`, `Hospital_Bill_CityCare_84500.pdf`, `Discharge_Summary_Sukrut_Aug2026.pdf`, `Aadhaar_Card_Masked_Sukrut.pdf`.
- Displays progress states: Uploading → OCR Layout Analysis → Entity Extraction → Cross-Check.

### Stage 4: Document Intelligence (`extraction`)
- Parses fields into structured key-values with confidence scores:
  - Patient Name: Sukrut Dusane (99%)
  - Hospital Name: CityCare Super Speciality Hospital (98%)
  - Admission Date: 12/08/2026 (97%)
  - Discharge Date: 17/08/2026 (97%)
  - Claim Amount: ₹84,500 (96%)
- Offers "View Evidence" trigger to audit the source bounding coordinates.

### Stage 5: Cross-Evidence Verification (`verification`)
- Reconciles fields across Policy, Hospital Bill, and ID proof.
- **The Staged Conflict:** Policy DOB is `14/07/1998` vs Hospital Bill DOB `17/07/1998`.
- Halts automatic progression and transitions state to `REROUTE_ACTIVE`.

### Stage 6: Dynamic Rerouting (`reroute`)
- Explains: *"We've rerouted your journey. Instead of restarting your claim, we've identified exactly what needs clarification."*
- User chooses between Option 1 (Confirm 14 July 1998) or Option 2 (Confirm 17 July 1998) or Request Human Review.
- User selects Option 1. The engine updates the record and re-runs the verification pass with zero data loss.

### Stage 7: Risk Screening (`risk`)
- Evaluates 5 synthetic rules:
  - Identity Consistency (+35)
  - Claim Amount Variance (+7)
  - Duplicate check (+0)
  - Low OCR check (+0)
  - Frequency check (+0)
- Total Risk Score: 42/100 (Medium).
- Flags display clear disclaimer: *"Synthetic demonstration risk score — not a financial decision."*

### Stage 8: Completion (`completion`)
- Assembles comprehensive case packet `CASE #R-1024`.
- Displays status: *"Ready for final human review"*.
- Forwards dossier to the `/review` dashboard.
