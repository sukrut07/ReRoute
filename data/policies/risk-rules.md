# Synthetic Risk & AML Intelligence Rules — Engine Specification

Document Identifier: RISK-RULE-2026-SYNTH
Status: Demonstration Ruleset
Disclaimer: All risk models and signals herein are strictly synthetic demonstration components designed for hackathon evaluation and do not represent actual commercial underwriting, AML, or fraud detection systems.

## 1. Risk Scoring Model (Scale: 0 to 100)
- **Low Risk (0 - 30)**: Normal operational variance. Automated progression permitted after evidence verification.
- **Medium Risk (31 - 60)**: Moderate anomaly detected. Reroute required for user clarification, or non-blocking human audit packet prepared.
- **High Risk (61 - 100)**: Multiple compounding anomalies or critical identity conflicts. Mandatory human-in-the-loop review before any workflow progress.

## 2. Risk Signal Taxonomy & Weight Weights
| Signal Code | Description | Severity | Score Impact | Automated Response |
| :--- | :--- | :--- | :--- | :--- |
| `DOB_MISMATCH` | Date of Birth differs between primary policy and submitted bill | Medium | +35 | Reroute for customer confirmation |
| `NAME_MISMATCH` | Name similarity score < 85% across submitted documents | Medium | +25 | Prompt customer for name affidavit / legal proof |
| `CLAIM_AMOUNT_ANOMALY` | Claim exceeds ₹80,000 for standard 5-day general admission | Low | +15 | Itemized bill cross-examination |
| `DUPLICATE_DOCUMENT` | Document perceptual hash matches previously settled claim | High | +40 | Flag for human claims investigator |
| `REPEATED_CLAIMS` | Multiple inpatient claims filed within 30 calendar days | Medium | +30 | Trigger review queue packet |
| `LOW_OCR_CONFIDENCE` | Document text recognition confidence score < 70% | Low | +20 | Request clearer photo or re-scan |
| `HOSPITAL_UNRECOGNIZED` | Facility not in certified registry / ROHINI network list | Low | +15 | Flag for facility verification |

## 3. Human Oversight Guarantee
The AI Journey Engine must never render autonomous adverse determinations (e.g. claim denial, cancellation, or fraud allegations). All elevated risk cases are formatted as a `HumanReviewCase` with full evidence links, confidence metrics, and reason codes.
