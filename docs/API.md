# REROUTE — API Specification

RESTful endpoint specifications for the Reroute Financial Journey Engine.

---

## 1. Journey Management

### `POST /api/journey/start`
Initializes a new financial journey from a natural language goal.

**Request:**
```json
{
  "customerId": "CUS-DEMO-001",
  "goalText": "I want to claim my hospital expenses for appendicitis surgery."
}
```

**Response:**
```json
{
  "journeyId": "R-1024",
  "identifiedType": "HEALTH_INSURANCE_CLAIM",
  "status": "INITIATED",
  "progress": 15,
  "requiredDocuments": [
    "Policy Schedule",
    "Hospital Invoice",
    "Discharge Summary",
    "Identity Proof"
  ]
}
```

---

## 2. Evidence & Extraction

### `POST /api/journey/:id/documents`
Accepts file uploads, executes OCR and layout extraction.

**Response:**
```json
{
  "documentId": "DOC-02",
  "fileName": "Hospital_Bill_CityCare_84500.pdf",
  "ocrConfidence": 0.96,
  "extractedFields": {
    "patientName": "Sukrut Dusane",
    "dateOfBirth": "17/07/1998",
    "claimAmount": "₹84,500"
  }
}
```

---

## 3. Reroute Engine Service

### `POST /api/journey/:id/reroute`
Evaluates discrepancies and computes next safe step.

**Request:**
```json
{
  "journeyId": "R-1024",
  "conflicts": [{ "field": "date_of_birth", "sources": ["policy", "bill"] }],
  "riskScore": 42
}
```

**Response:**
```json
{
  "action": "RESOLVE_CONFLICT",
  "targetField": "date_of_birth",
  "options": [
    { "label": "Confirm 14 July 1998 (Policy Record)", "value": "14/07/1998" },
    { "label": "Confirm 17 July 1998 (Hospital Bill)", "value": "17/07/1998" }
  ],
  "requiresHumanReview": false
}
```

---

## 4. Telemetry & Review

### `GET /api/dashboard/telemetry`
Returns real-time funnel, drop-off rates, and friction comparison metrics.

### `GET /api/review/queue`
Retrieves pending audit cases for authorized adjudicators.
