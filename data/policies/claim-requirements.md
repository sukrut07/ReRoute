# Health Insurance Claim Requirements — Synthetic Policy Specification

Policy Reference: POL-SYNTH-2026-HC
Effective Date: 01 January 2026
Jurisdiction: Republic of India (Synthetic Sandbox)
Regulatory Compliance: IRDAI Guidelines on Health Insurance Adjudication (Simulated)

## 1. Mandatory Evidentiary Documents
To process any inpatient hospitalization claim, the following evidentiary artifacts must be collected and reconciled:
1. **Primary Policy Schedule**: Valid policy number, insured name, inception date, coverage sum assured, and pre-existing disease (PED) clauses.
2. **Identity Proof**: Government-recognized photo ID (e.g. Aadhaar Card / PAN Card / Passport) establishing the identity and Date of Birth of the claimant.
3. **Itemized Final Hospital Bill**: Detailed bill specifying room rent, nursing charges, surgical / ICU costs, pharmacy charges, and diagnostic fees with official hospital seal.
4. **Discharge Summary**: Clinical summary outlining admission date/time, discharge date/time, final diagnosis, treatment summary, and post-discharge advice.
5. **Treating Doctor's Prescription**: Prescriptions detailing medications, implants, or specialized procedures.

## 2. Thresholds and Limits (Plan: Comprehensive Shield 5L)
- **Base Sum Insured**: ₹5,00,000 per policy year.
- **Room Rent Cap**: ₹5,000 per day (Standard Single AC Room).
- **ICU Charges**: Up to actuals / maximum ₹10,000 per day.
- **Co-payment**: 0% for network hospitals; 10% for non-network unverified hospitals.
- **Deductible**: ₹0 for initial hospitalization.

## 3. Discrepancy & Incomplete Evidence Protocol
- **Missing Non-Critical Evidence**: If pharmacy vouchers or itemized diagnostic receipts are absent, proceed with base adjudication while issuing a non-blocking reroute prompt.
- **Missing Critical Evidence**: If the Discharge Summary or Itemized Bill is absent, the journey state MUST transition to `BLOCKED_AWAITING_DOCUMENT`. Never reject the application; reroute the customer to upload the specific missing artifact.
