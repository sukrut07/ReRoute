# REROUTE Engine — Technical Specification

The **Reroute Engine** is the central differentiating component of Reroute. When an issue, missing document, or data conflict is detected, it computes the minimal-friction next safe step so the user never has to restart.

---

## 1. Interface Contract

### Input Schema
```json
{
  "journey_state": "verification",
  "missing_information": [],
  "conflicts": [
    {
      "field": "date_of_birth",
      "sources": ["policy", "hospital_bill"]
    }
  ],
  "risk_score": 42,
  "confidence": 0.72
}
```

### Output Schema
```json
{
  "action": "RESOLVE_CONFLICT",
  "reason": "DOB mismatch",
  "next_step": "CONFIRM_DOB",
  "requires_human_review": false,
  "confidence": 0.92
}
```

---

## 2. Action Taxonomy

| Action Type | Condition | Next Safe Step |
| :--- | :--- | :--- |
| `RESOLVE_CONFLICT` | Reconcilable discrepancy between 2 documents (e.g. DOB) | Present side-by-side values with 1-click confirmation |
| `REQUEST_DOCUMENT` | Mandatory artifact missing (e.g. discharge summary) | Display targeted upload card explaining why it is needed |
| `REQUEST_CLARIFICATION`| Non-standard ambiguous entity | Plain-language prompt asking for specific context |
| `REVERIFY` | Discrepancy resolved by user | Re-run verification pass on affected field only |
| `HUMAN_REVIEW` | High risk (> 60) or low OCR (< 70%) | Assemble review dossier for claims officer |
| `COMPLETE` | All evidence verified & reconciled | Finalize package; queue for human sign-off |

---

## 3. The Core UX Rule
The AI must **never** state *"Your application is incomplete"* or *"Verification failed"*.
Instead, it communicates:
1. **What happened:** *"Date of birth differs between Policy (14 July 1998) and Hospital Bill (17 July 1998)."*
2. **Why it matters:** *"Regulations require exact identity alignment before claim settlement."*
3. **What is needed:** *"Confirm which date is legally accurate."*
4. **What happens next:** *"We will re-verify this single field and continue right from where you stopped."*
