# REROUTE — System Boundaries & Limitations

In accordance with responsible AI guidelines and the Paytm Build for India AI Hackathon track constraints, this document explicitly outlines what Reroute does and does not do.

## 1. What Reroute DOES
- **Assists and Orchestrates:** Guides users through structured multi-step financial processes.
- **Extracts and Reconciles:** Uses OCR and layout parsers to convert documents into structured JSON entities and highlight discrepancies.
- **Reroutes Dynamically:** Resolves bottlenecks in-place by prompting for targeted clarifications instead of failing or restarting.
- **Provides Plain-Language Explanations:** Explains why documents or clarifications were requested, referencing synthetic policy clauses.
- **Screens Transparently:** Evaluates deterministic risk signals (e.g. duplicate hashes, amount anomalies, identity discrepancies).

## 2. What Reroute DOES NOT Do (Explicit Boundaries)
- **NO Autonomous Financial Approval:** Reroute does not approve, deny, settle, or disburse money or insurance claims.
- **NO Credit Underwriting:** Does not calculate regulated credit scores or underwrite loans.
- **NO Regulated Financial Advice:** Does not advise users on investments, tax liabilities, or choice of insurance policies.
- **NO Production Banking/UPI Integration:** All API calls are simulated using synthetic sandboxes.
- **NO Real PII Storage:** Does not store real Aadhaar numbers, PAN numbers, or live hospital records.

## 3. Risk Engine Disclaimer
The synthetic risk score (0 to 100) and risk signals (`DOB_MISMATCH`, `CLAIM_AMOUNT_ANOMALY`, etc.) are transparent, deterministic demonstration metrics intended to show how an orchestrator can detect friction and escalate to humans. They must never be construed as real-world fraud or crime detection systems.
