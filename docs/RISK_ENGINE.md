# Risk & AML Intelligence Engine — Technical Specification

## 1. Engine Objective
The **Risk Intelligence Engine** is a transparent, explainable screening layer. It provides early warning indicators of inconsistent or suspicious application patterns without making black-box autonomous financial decisions.

---

## 2. Risk Score Formulation
The synthetic risk score $S \in [0, 100]$ is computed deterministically as:

$$S = \min\left(100, \sum w_i \cdot \mathbb{I}(\text{Signal}_i)\right)$$

### Scoring Weights
| Signal Code | Weight ($w_i$) | Category | Description |
| :--- | :--- | :--- | :--- |
| `DUPLICATE_DOCUMENT` | +40 | Integrity | Document hash matches prior settled claim |
| `DOB_MISMATCH` | +35 | Identity | Date of Birth mismatch across submitted documents |
| `CLAIM_AMOUNT_ANOMALY`| +35 (High) / +7 (Mod) | Financial | Claim exceeds regional inpatient p90 threshold |
| `REPEATED_CLAIMS` | +30 | Velocity | Multiple claims submitted within 30 calendar days |
| `NAME_MISMATCH` | +25 | Identity | Fuzzy string distance < 85% |
| `LOW_OCR_CONFIDENCE` | +20 | Technical | OCR confidence score below 85% |

---

## 3. Risk Tiers & Workflows
- **LOW RISK (0 – 30):** Standard flow. Automated verification permitted; queues for standard batch sign-off.
- **MEDIUM RISK (31 – 60):** User-resolvable discrepancy. Reroute prompts user for in-place confirmation.
- **HIGH RISK (61 – 100):** Compounding anomalies. Mandatory routing to the **Human Review Queue** with a generated review dossier.

---

## 4. Responsible AI Guardrails
All risk outputs must carry the standard disclaimer:
> *"Synthetic demonstration risk score — not a financial decision or fraud determination. Reroute does not autonomously reject claims or make credit/underwriting choices."*
