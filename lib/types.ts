export type JourneyStatus =
  | "INITIATED"
  | "IN_PROGRESS"
  | "BLOCKED"
  | "REROUTED"
  | "RESOLVING"
  | "NEEDS_HUMAN_REVIEW"
  | "READY_FOR_FINAL_REVIEW"
  | "COMPLETED";

export type StepId =
  | "goal"
  | "policy"
  | "evidence"
  | "extraction"
  | "verification"
  | "reroute"
  | "risk"
  | "review"
  | "completion";

export interface JourneyStep {
  id: StepId;
  title: string;
  shortLabel: string;
  status: "pending" | "current" | "completed" | "interrupted" | "skipped";
  description: string;
}

export interface ExtractedField {
  label: string;
  value: string;
  confidence: number;
  sourceDocId: string;
  sourceDocName: string;
  sourceExcerpt?: string;
  verified: boolean;
  hasConflict?: boolean;
}

export interface DocumentEvidence {
  id: string;
  name: string;
  category: "Policy" | "Hospital Bill" | "Discharge Summary" | "ID Proof" | "Prescription";
  fileName: string;
  size: string;
  uploadDate: string;
  status: "PENDING" | "PROCESSING" | "EXTRACTED" | "VERIFIED" | "CONFLICT" | "MISSING";
  confidence: number;
  extractedFields: Record<string, string>;
  rawSnippet: string;
  ocrConfidence: number;
  highlightCoordinates?: { x: number; y: number; width: number; height: number };
}

export interface ConflictRecord {
  id: string;
  field: string;
  label: string;
  description: string;
  sourceA: {
    docName: string;
    value: string;
    date?: string;
    excerpt: string;
  };
  sourceB: {
    docName: string;
    value: string;
    date?: string;
    excerpt: string;
  };
  severity: "LOW" | "MEDIUM" | "HIGH";
  aiConfidence: number;
  explanation: {
    whyItMatters: string;
    regulatoryNote: string;
    suggestedResolution: string;
  };
  resolved: boolean;
  resolvedValue?: string;
  resolutionTimestamp?: string;
}

export interface RerouteAction {
  action:
    | "CONTINUE"
    | "REQUEST_DOCUMENT"
    | "REQUEST_CLARIFICATION"
    | "RESOLVE_CONFLICT"
    | "REVERIFY"
    | "HUMAN_REVIEW"
    | "COMPLETE";
  actionType:
    | "CONTINUE"
    | "REQUEST_DOCUMENT"
    | "REQUEST_CLARIFICATION"
    | "RESOLVE_CONFLICT"
    | "REVERIFY"
    | "HUMAN_REVIEW"
    | "COMPLETE";
  reason: string;
  nextSafeStep: string;
  targetField?: string;
  userPrompt: string;
  options?: Array<{
    label: string;
    value: string;
    isRecommended?: boolean;
  }>;
  requiresHumanReview: boolean;
  confidence: number;
}

export interface RiskSignal {
  id: string;
  type:
    | "DOB_MISMATCH"
    | "NAME_MISMATCH"
    | "CLAIM_AMOUNT_ANOMALY"
    | "DUPLICATE_DOCUMENT"
    | "REPEATED_CLAIMS"
    | "LOW_OCR_CONFIDENCE"
    | "HOSPITAL_UNRECOGNIZED";
  severity: "INFO" | "LOW" | "MEDIUM" | "HIGH";
  label: string;
  detail: string;
  detectedAt: string;
  syntheticEvidence: string;
}

export interface RiskScoreBreakdownItem {
  category: string;
  label: string;
  points: number;
}

export interface RiskAssessment {
  score: number; // 0 to 100
  tier: "LOW" | "MEDIUM" | "HIGH";
  summary: string;
  signals: RiskSignal[];
  breakdown: RiskScoreBreakdownItem[];
  disclaimer: string;
}

export interface HumanReviewCase {
  caseId: string;
  journeyId: string;
  customerName: string;
  customerGoal: string;
  claimAmount: string;
  hospitalName: string;
  submissionDate: string;
  status:
    | "NEEDS_HUMAN_REVIEW"
    | "IN_REVIEW"
    | "CLARIFICATION_REQUESTED"
    | "READY_FOR_FINAL_REVIEW"
    | "COMPLETED"
    | "ESCALATED"
    | "NEEDS_REVIEW"
    | "APPROVED_NEXT_STEP";
  priority: "NORMAL" | "HIGH" | "URGENT";
  issueTitle: string;
  issueDescription: string;
  aiConfidence: number;
  riskScore: number;
  evidenceDocs: string[];
  customerResponseStatus: "PENDING" | "PROVIDED" | "DECLINED";
  customerSelectedValue?: string;
  reviewerNotes?: string;
  recommendedNextAction: string;
}

export interface ExplainabilityContext {
  title: string;
  summary: string;
  sourceDoc: string;
  sourceSection: string;
  quote: string;
  confidence: number;
  policyRuleId: string;
}

export type DemoScenarioId = "happy_path" | "missing_evidence" | "dob_conflict" | "high_risk";

export interface DemoScenario {
  id: DemoScenarioId;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  accentColor: string;
}
