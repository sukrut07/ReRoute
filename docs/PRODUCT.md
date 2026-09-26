# REROUTE — Product Specification

## 1. Product Mission
Financial processes—especially claims reimbursement, loan approvals, and KYC verifications—are full of cognitive friction, opaque jargon, and brittle drop-off moments.

**Reroute** is an AI-powered Financial Journey Engine that flips the paradigm from product-first form filling to **goal-first journey orchestration**.

> **Core Philosophy:** *Don't restart. Reroute.*

When a customer encounters a discrepancy or missing document, Reroute does not abort the application. It isolates the blocker and dynamically routes the customer to the safest next action while preserving everything already verified.

---

## 2. Target Personas
1. **The Stressed Claimant (End-User):** Needs to claim ₹84,500 for an inpatient hospital stay. Stressed about money, confused by policy terms, and terrified of entering the wrong date and getting rejected.
2. **The Claims Adjudicator (Human Officer):** Overwhelmed with thousands of applications; spends 70% of time verifying routine dates and asking claimants for missing discharge summaries. Needs pre-verified, clean dossiers.
3. **Fintech Operations Lead:** Wants to reduce journey drop-offs, eliminate repetitive customer service calls, and improve NPS without compromising compliance.

---

## 3. Product Principles
- **Goal-First Intake:** Understand the user's objective in natural language; do not force them to browse a complex catalog of forms.
- **Never Say "Application Incomplete":** Always specify: What happened → Why it matters → Exactly what is needed → What happens next.
- **Zero Hallucinated Adjudication:** AI parses, classifies, cross-references, and routes; it does **not** make final autonomous credit or claim payout decisions.
- **Full Traceability:** Every decision provides a "Why?" explanation linked to a policy clause or verification rule.

---

## 4. Competitive Differentiation
| Capability | Traditional Claims Portals | Chatbot Assistants | Reroute Engine |
| :--- | :--- | :--- | :--- |
| **Interaction Model** | Rigid multi-page forms | Q&A conversation | Stateful journey orchestration |
| **Error Handling** | Fatal application rejection | "Please contact support" | Dynamic in-place Rerouting |
| **Document Processing** | Manual field re-typing | Static file attachment | Instant OCR & cross-reconciliation |
| **Session Memory** | Session expires / lost data | Ephemeral chat log | Persistent stateful journey memory |
| **Explainability** | Opaque error codes | Hallucinated generic text | Grounded rule citations & confidence % |
