# Evidence Verification & Reconciliation Rules — Rule Engine Specification

Document Identifier: VER-RULE-2026-V1
Classification: Operational Ruleset

## 1. Identity Consistency Checks
- **Field: Patient Name**: Must achieve a fuzzy match score >= 90% across Policy Schedule, ID Proof, and Hospital Bill. Slight phonetic variations (e.g. "Dusane Sukrut" vs "Sukrut Dusane") trigger an automated alias resolution.
- **Field: Date of Birth (DOB)**: Exact match required across Policy Schedule and Hospital Admission record.
  - *Conflict Rule*: If Policy DOB != Hospital Bill DOB, trigger `CONFLICT_DETECTED`.
  - *Intervention*: Halt automated flow. Do NOT guess or average. Reroute customer to confirm the correct legal Date of Birth or escalate for human officer review.

## 2. Hospitalization Temporal Validity
- **Admission Date vs Policy Inception**: Hospitalization must occur within active coverage dates.
- **Length of Stay**: Must be greater than or equal to 24 hours for standard inpatient reimbursement, unless pre-authorized for daycare surgery.
- **Discharge Date**: Must be chronologically after or identical to Admission Date.

## 3. Financial Reconciliation
- **Sum of Line Items vs Invoice Total**: Room charges + nursing + pharmacy + diagnostics must match total claimed amount within a tolerance of ± ₹50 (rounding differences).
- **Sum Insured Check**: Claim amount must not exceed remaining balance on the base policy.
