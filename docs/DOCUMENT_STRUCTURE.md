# REROUTE — Document Structure & Entity Schema Specification

This document details the structural taxonomy, layout analysis, field bounding coordinates, and cross-reconciliation mapping for all synthetic financial and clinical documents used within the Reroute Engine.

---

## 1. Document Inventory & Classification

| Document ID | Artifact Name | Category | Primary Purpose | Extraction Format | Simulated File |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `DOC-01` | Policy Schedule | Policy | Establishes coverage limits, deductibles & insured identity | Text / Table OCR | `Policy_Schedule_POL1024.pdf` |
| `DOC-02` | Final Hospital Bill | Hospital Bill | Proves inpatient hospitalization expenses & line items | Tabular Invoice OCR | `Hospital_Bill_CityCare_84500.pdf` |
| `DOC-03` | Discharge Summary | Clinical | Confirms clinical necessity, admission length & treatment | Narrative Clinical OCR | `Discharge_Summary_Sukrut_Aug2026.pdf` |
| `DOC-04` | Government Photo ID | Identity Proof | Legal identity baseline for cross-matching | Identity Card VLM | `Aadhaar_Card_Masked_Sukrut.pdf` |

---

## 2. Structural Schemas by Document

### A. Document `DOC-01`: Policy Schedule (`Policy_Schedule_POL1024.pdf`)
- **Issuing Entity:** Care Health Assurance Ltd.
- **Document Class:** Standard Inpatient Health Indemnity Schedule.
- **Structural Layout:**
  - Header: Corporate branding, IRDAI registration number, customer support contact.
  - Section 1 (Policyholder Details): Legal name, date of birth, residential city, nominee.
  - Section 2 (Policy Parameters): Policy ID, plan type, inception date, expiration date.
  - Section 3 (Financial Limits): Base sum insured, room rent daily sub-limit, ICU limit, co-payment %.
  - Section 4 (Clauses & Endorsements): Waiting period terms, exclusion list reference.

```json
{
  "document_id": "DOC-01",
  "document_type": "POLICY_SCHEDULE",
  "extracted_entities": {
    "policy_number": { "value": "POL-2026-1024", "confidence": 0.99, "bbox": [40, 80, 220, 28] },
    "insured_name": { "value": "Sukrut Dusane", "confidence": 0.99, "bbox": [40, 115, 200, 26] },
    "date_of_birth": { "value": "14/07/1998", "confidence": 0.98, "bbox": [120, 85, 240, 30] },
    "base_sum_insured": { "value": "₹5,00,000", "confidence": 0.98, "bbox": [280, 115, 140, 26] },
    "room_rent_cap": { "value": "₹5,000 / day", "confidence": 0.96, "bbox": [280, 150, 140, 26] },
    "policy_status": { "value": "ACTIVE", "confidence": 0.99, "bbox": [450, 80, 80, 24] }
  }
}
```

---

### B. Document `DOC-02`: Itemized Final Hospital Bill (`Hospital_Bill_CityCare_84500.pdf`)
- **Issuing Entity:** CityCare Super Speciality Hospital & Research Center.
- **Document Class:** Final Inpatient Tax Invoice & Detailed Settlement Receipt.
- **Structural Layout:**
  - Header: Hospital name, ROHINI facility registry ID, billing desk contact.
  - Section 1 (Patient Demographics): Patient name, hospital UHID, recorded DOB, admission timestamp, discharge timestamp.
  - Section 2 (Room & Nursing Breakdown): Deluxe Single AC room charges, nursing care fees.
  - Section 3 (Surgical & OT Fees): Surgeon fees, anesthesiologist charges, OT consumables.
  - Section 4 (Pharmacy & Diagnostics): Itemized medications, pre-op pathology, post-op scans.
  - Section 5 (Net Payable): Gross total, hospital discount (0%), net payable (`₹84,500`).
  
> [!IMPORTANT]
> **Deliberate Staged Discrepancy:** The billing clerk entered the patient's Date of Birth as **17/07/1998** instead of **14/07/1998**. This discrepancy triggers the signature Reroute flow.

```json
{
  "document_id": "DOC-02",
  "document_type": "HOSPITAL_INVOICE",
  "extracted_entities": {
    "invoice_number": { "value": "INV-CC-2026-8841", "confidence": 0.97, "bbox": [420, 50, 130, 24] },
    "patient_name": { "value": "Sukrut Dusane", "confidence": 0.98, "bbox": [50, 90, 180, 25] },
    "date_of_birth": { "value": "17/07/1998", "confidence": 0.94, "bbox": [110, 140, 260, 34], "flagged_conflict": true },
    "hospital_name": { "value": "CityCare Super Speciality Hospital", "confidence": 0.99, "bbox": [50, 30, 300, 30] },
    "admission_timestamp": { "value": "12/08/2026 14:20", "confidence": 0.96, "bbox": [50, 120, 180, 24] },
    "discharge_timestamp": { "value": "17/08/2026 11:30", "confidence": 0.96, "bbox": [250, 120, 180, 24] },
    "itemized_breakdown": {
      "room_nursing": 25000,
      "ot_surgical": 35000,
      "pharmacy": 14200,
      "investigations": 8300,
      "misc": 2000
    },
    "net_amount": { "value": "₹84,500", "confidence": 0.97, "bbox": [380, 410, 120, 30] }
  }
}
```

---

### C. Document `DOC-03`: Clinical Discharge Summary (`Discharge_Summary_Sukrut_Aug2026.pdf`)
- **Issuing Entity:** Department of Minimal Access Surgery, CityCare Hospital.
- **Document Class:** Comprehensive Inpatient Clinical Summary.
- **Structural Layout:**
  - Patient Header: Name, age (28), gender (M), consultant surgeon credentials.
  - Section 1 (Clinical History): Symptoms on presentation (acute right lower quadrant pain, nausea, fever).
  - Section 2 (Diagnosis & Procedure): Acute Appendicitis with Localized Peritonitis; Emergency Laparoscopic Appendectomy.
  - Section 3 (Hospital Course): Vital parameters, post-operative monitoring, wound healing status.
  - Section 4 (Discharge Advice): Medication course, follow-up timeline, emergency contacts.

```json
{
  "document_id": "DOC-03",
  "document_type": "DISCHARGE_SUMMARY",
  "extracted_entities": {
    "patient_name": { "value": "Sukrut Dusane", "confidence": 0.99, "bbox": [50, 75, 180, 24] },
    "final_diagnosis": { "value": "Acute Appendicitis with Localized Peritonitis", "confidence": 0.96, "bbox": [95, 210, 300, 45] },
    "surgical_procedure": { "value": "Laparoscopic Appendectomy", "confidence": 0.97, "bbox": [95, 260, 260, 30] },
    "admission_date": { "value": "12/08/2026", "confidence": 0.98, "bbox": [50, 105, 120, 22] },
    "discharge_date": { "value": "17/08/2026", "confidence": 0.98, "bbox": [200, 105, 120, 22] },
    "consultant_doctor": { "value": "Dr. V. K. Kulkarni, MS (Gen Surg)", "confidence": 0.95, "bbox": [50, 450, 240, 25] }
  }
}
```

---

### D. Document `DOC-04`: Government Photo ID (`Aadhaar_Card_Masked_Sukrut.pdf`)
- **Issuing Entity:** Unique Identification Authority of India (UIDAI).
- **Document Class:** National Proof of Identity & Age.
- **Structural Layout:**
  - Header: Emblem of India, UIDAI masthead, bilingual titles.
  - Photograph & QR Zone: Digital holographic seal and barcode zone.
  - Demographic Data: Full name (*Sukrut Dusane*), Date of Birth (*14/07/1998*), Gender (*Male*), Masked Virtual ID (`VID: 9182 XXXX XXXX 4912`).

```json
{
  "document_id": "DOC-04",
  "document_type": "IDENTITY_PROOF",
  "extracted_entities": {
    "full_legal_name": { "value": "Sukrut Dusane", "confidence": 0.99, "bbox": [140, 70, 200, 26] },
    "date_of_birth": { "value": "14/07/1998", "confidence": 0.99, "bbox": [140, 95, 220, 28] },
    "gender": { "value": "Male", "confidence": 0.99, "bbox": [140, 125, 90, 22] },
    "masked_identifier": { "value": "XXXX-XXXX-4912", "confidence": 0.99, "bbox": [140, 150, 180, 25] }
  }
}
```

---

## 3. Cross-Document Reconciliation Matrix

The Verification Gate runs a multi-party reconciliation matrix across all four extracted documents:

| Field Under Verification | Primary Source | Comparison Source 1 | Comparison Source 2 | Status | Resolution Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claimant Name** | Policy (`DOC-01`) | Hospital Bill (`DOC-02`) | Aadhaar Card (`DOC-04`) | `MATCH (100%)` | Verified automatically |
| **Date of Birth (DOB)** | Policy (`DOC-01`): `14/07/1998` | Hospital Bill (`DOC-02`): `17/07/1998` | Aadhaar Card (`DOC-04`): `14/07/1998` | `CONFLICT (DIFF)` | **Reroute Triggered** (Prompt customer to confirm `14/07/1998`) |
| **Hospital Empanelment** | Policy (`DOC-01`) | Hospital Bill (`DOC-02`) | Discharge Summary (`DOC-03`) | `MATCH (100%)` | Network hospital verified |
| **Inpatient Duration** | Policy minimum 24h | Hospital Bill: 5 days | Discharge Summary: 5 days | `MATCH (100%)` | Temporal validity approved |
| **Claim Amount** | Policy Cap: ₹5L | Hospital Bill: ₹84,500 | Line-item sum: ₹84,500 | `MATCH (100%)` | Within entitlement |

---

## 4. OCR & Entity Extraction Quality Thresholds
- **High Confidence ($\ge 85\%$):** Field accepted into automated reconciliation matrix without manual verification.
- **Borderline Confidence ($70\% - 84\%$):** Field accepted with low-confidence warning badge.
- **Low Confidence ($< 70\%$):** Triggers `REQUEST_DOCUMENT` or `HUMAN_REVIEW` with prompt asking for a clearer photo or PDF re-upload.
