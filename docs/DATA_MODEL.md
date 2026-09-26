# REROUTE — Data Model Specification

## 1. Domain Entities

### Journey
```typescript
interface Journey {
  id: string;               // e.g. "R-1024"
  customerId: string;       // e.g. "CUS-DEMO-001"
  type: string;             // "HEALTH_INSURANCE_CLAIM"
  goal: string;             // "I want to claim my hospital expenses"
  status: JourneyStatus;    // "INITIATED" | "REROUTED" | "COMPLETED" | ...
  progress: number;         // 0 to 100
  currentStep: StepId;      // "reroute"
  completedSteps: StepId[];
  createdAt: string;
  updatedAt: string;
}
```

### DocumentEvidence
```typescript
interface DocumentEvidence {
  id: string;               // e.g. "DOC-01"
  name: string;             // "Health Insurance Policy Schedule"
  category: "Policy" | "Hospital Bill" | "Discharge Summary" | "ID Proof";
  fileName: string;
  size: string;
  uploadDate: string;
  status: "VERIFIED" | "CONFLICT" | "MISSING";
  confidence: number;       // 0.0 to 1.0
  ocrConfidence: number;    // 0.0 to 1.0
  extractedFields: Record<string, string>;
  rawSnippet: string;
  highlightCoordinates?: { x: number; y: number; width: number; height: number };
}
```

### ConflictRecord
```typescript
interface ConflictRecord {
  id: string;               // "CONF-DOB-001"
  field: string;            // "date_of_birth"
  label: string;            // "Date of Birth Discrepancy"
  description: string;
  sourceA: { docName: string; value: string; excerpt: string };
  sourceB: { docName: string; value: string; excerpt: string };
  severity: "LOW" | "MEDIUM" | "HIGH";
  aiConfidence: number;
  explanation: { whyItMatters: string; regulatoryNote: string };
  resolved: boolean;
  resolvedValue?: string;
}
```

### RiskAssessment
```typescript
interface RiskAssessment {
  score: number;            // 0 to 100
  tier: "LOW" | "MEDIUM" | "HIGH";
  summary: string;
  signals: RiskSignal[];
  disclaimer: string;
}
```

### HumanReviewCase
```typescript
interface HumanReviewCase {
  caseId: string;           // "CASE #R-1024"
  journeyId: string;
  customerName: string;
  claimAmount: string;
  hospitalName: string;
  status: "NEEDS_REVIEW" | "APPROVED_NEXT_STEP" | "CLARIFICATION_REQUESTED";
  issueTitle: string;
  issueDescription: string;
  aiConfidence: number;
  riskScore: number;
  evidenceDocs: string[];
  recommendedNextAction: string;
}
```
