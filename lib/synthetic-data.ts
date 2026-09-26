import {
  ConflictRecord,
  DemoScenario,
  DocumentEvidence,
  ExplainabilityContext,
  HumanReviewCase,
  JourneyStep,
} from "./types";

export const DEMO_CUSTOMER = {
  id: "CUS-DEMO-001",
  name: "Sukrut Dusane",
  email: "sukrut.demo@example.com",
  phone: "+91 98765 43210",
  city: "Mumbai, Maharashtra",
  policyNumber: "POL-2026-1024",
  policyName: "Comprehensive Health Shield 5L",
  baseSumInsured: "₹5,00,000",
  roomRentCap: "₹5,000 / day",
  networkStatus: "Preferred Network Facility",
  claimId: "CLM-2026-4402",
  journeyId: "R-1024",
  defaultGoal: "I want to claim my hospital expenses for appendicitis surgery.",
  hospital: "CityCare Super Speciality Hospital",
  totalClaimAmount: "₹84,500",
};

export const DEFAULT_JOURNEY_STEPS: JourneyStep[] = [
  {
    id: "goal",
    title: "Customer Goal Intake",
    shortLabel: "Goal",
    status: "completed",
    description: "Understand customer intent and initialize health claim journey",
  },
  {
    id: "policy",
    title: "Policy & Entitlement Check",
    shortLabel: "Policy",
    status: "completed",
    description: "Retrieve active policy coverage, limits, and deductible conditions",
  },
  {
    id: "evidence",
    title: "Evidence Collection",
    shortLabel: "Documents",
    status: "completed",
    description: "Collect itemized bill, discharge summary, and identification proof",
  },
  {
    id: "extraction",
    title: "Document Intelligence",
    shortLabel: "Extraction",
    status: "completed",
    description: "Extract structured medical and financial fields with OCR confidence",
  },
  {
    id: "verification",
    title: "Cross-Evidence Verification",
    shortLabel: "Verification",
    status: "interrupted",
    description: "Reconcile fields across policy, hospital invoice, and identity card",
  },
  {
    id: "reroute",
    title: "Dynamic Reroute & Resolution",
    shortLabel: "Reroute",
    status: "current",
    description: "Isolate blocking discrepancy and guide to next safe resolution",
  },
  {
    id: "risk",
    title: "Risk & AML Screening",
    shortLabel: "Risk Check",
    status: "pending",
    description: "Evaluate transparent synthetic risk signals and anomaly scoring",
  },
  {
    id: "review",
    title: "Review Packet Preparation",
    shortLabel: "Human Review",
    status: "pending",
    description: "Assemble structured review dossier for authorized claims officer",
  },
  {
    id: "completion",
    title: "Journey Completion",
    shortLabel: "Complete",
    status: "pending",
    description: "Finalize case summary without autonomous financial approval",
  },
];

export const INITIAL_DEMO_DOCUMENTS: DocumentEvidence[] = [
  {
    id: "DOC-01",
    name: "Health Insurance Policy Schedule",
    category: "Policy",
    fileName: "Policy_Schedule_POL1024.pdf",
    size: "428 KB",
    uploadDate: "2026-09-24",
    status: "VERIFIED",
    confidence: 0.98,
    ocrConfidence: 0.99,
    extractedFields: {
      "Policy Number": "POL-2026-1024",
      "Policyholder Name": "Sukrut Dusane",
      "Date of Birth": "14/07/1998",
      "Sum Insured": "₹5,00,000",
      "Effective Through": "31/03/2027",
      "Plan Tier": "Comprehensive Health Shield",
    },
    rawSnippet:
      "CARE HEALTH ASSURANCE LTD.\nPolicy Number: POL-2026-1024\nPrimary Insured: Sukrut Dusane\nDOB: 14/07/1998\nSum Insured: INR 5,00,000.00\nInception: 01/04/2024\nValid Thru: 31/03/2027\nPre-Existing Exclusion: Standard 24 Months",
    highlightCoordinates: { x: 120, y: 85, width: 240, height: 30 },
  },
  {
    id: "DOC-02",
    name: "Final Itemized Hospital Bill",
    category: "Hospital Bill",
    fileName: "Hospital_Bill_CityCare_84500.pdf",
    size: "1.2 MB",
    uploadDate: "2026-09-24",
    status: "CONFLICT",
    confidence: 0.94,
    ocrConfidence: 0.96,
    extractedFields: {
      "Patient Name": "Sukrut Dusane",
      "Date of Birth": "17/07/1998", // DELIBERATE CONFLICT
      "Hospital Name": "CityCare Super Speciality Hospital",
      "Admission Date": "12/08/2026",
      "Discharge Date": "17/08/2026",
      "Claim Amount": "₹84,500",
      "Invoice Number": "INV-CC-2026-8841",
    },
    rawSnippet:
      "CITYCARE HOSPITAL & RESEARCH CENTER\nTax Invoice #INV-CC-2026-8841\nPatient: Sukrut Dusane\nDOB Recorded: 17/07/1998\nAdmission: 12/08/2026 14:20\nDischarge: 17/08/2026 11:30\nBed Category: Single AC Deluxe\nGross Hospital Total: INR 84,500.00",
    highlightCoordinates: { x: 110, y: 140, width: 260, height: 34 },
  },
  {
    id: "DOC-03",
    name: "Clinical Discharge Summary",
    category: "Discharge Summary",
    fileName: "Discharge_Summary_Sukrut_Aug2026.pdf",
    size: "850 KB",
    uploadDate: "2026-09-24",
    status: "VERIFIED",
    confidence: 0.96,
    ocrConfidence: 0.97,
    extractedFields: {
      "Patient Name": "Sukrut Dusane",
      "Final Diagnosis": "Acute Appendicitis with Localized Peritonitis",
      "Procedure Conducted": "Laparoscopic Appendectomy",
      "Admission Date": "12/08/2026",
      "Discharge Date": "17/08/2026",
      "Treating Surgeon": "Dr. V. K. Kulkarni, MS (Gen Surg)",
    },
    rawSnippet:
      "DEPARTMENT OF SURGICAL CARE\nDischarge Summary for Sukrut Dusane\nDiagnosis: Acute Appendicitis with Localized Peritonitis\nProcedure: Emergency Laparoscopic Appendectomy on 13/08/2026\nPost-op Recovery: Uneventful. Discharged in stable condition.\nConsultant: Dr. V. K. Kulkarni (Reg #MMC-72819)",
    highlightCoordinates: { x: 95, y: 210, width: 300, height: 45 },
  },
  {
    id: "DOC-04",
    name: "Government Photo Identity Card",
    category: "ID Proof",
    fileName: "Aadhaar_Card_Masked_Sukrut.pdf",
    size: "340 KB",
    uploadDate: "2026-09-24",
    status: "VERIFIED",
    confidence: 0.99,
    ocrConfidence: 0.99,
    extractedFields: {
      "Full Legal Name": "Sukrut Dusane",
      "Date of Birth": "14/07/1998",
      "Gender": "Male",
      "ID Document Type": "Aadhaar (VID Masked)",
      "Identifier Ref": "XXXX-XXXX-4912",
    },
    rawSnippet:
      "GOVERNMENT OF INDIA\nUnique Identification Authority of India\nName: Sukrut Dusane\nDOB: 14/07/1998\nGender: Male\nVID: 9182 XXXX XXXX 4912\nState: Maharashtra",
    highlightCoordinates: { x: 140, y: 95, width: 220, height: 28 },
  },
];

export const INITIAL_DEMO_CONFLICT: ConflictRecord = {
  id: "CONF-DOB-001",
  field: "date_of_birth",
  label: "Date of Birth Discrepancy",
  description:
    "The Date of Birth recorded in your insurance policy differs from the Date of Birth recorded by the hospital billing desk.",
  sourceA: {
    docName: "Policy Schedule (POL-2026-1024)",
    value: "14 July 1998",
    date: "1998-07-14",
    excerpt: "Primary Insured: Sukrut Dusane | DOB: 14/07/1998",
  },
  sourceB: {
    docName: "Hospital Invoice (INV-CC-2026-8841)",
    value: "17 July 1998",
    date: "1998-07-17",
    excerpt: "Patient: Sukrut Dusane | DOB Recorded: 17/07/1998",
  },
  severity: "MEDIUM",
  aiConfidence: 0.92,
  explanation: {
    whyItMatters:
      "Health insurance regulations require exact identity reconciliation before claims disbursement to prevent misattribution or fraudulent impersonation.",
    regulatoryNote:
      "Synthetic Policy Section 4.2 / IRDAI Standard Claims Verification Norms require identity alignment across submitted billing artifacts.",
    suggestedResolution:
      "Confirm which date of birth is legally accurate. You will not have to restart your claim—Reroute re-verifies this single field and keeps everything else in place.",
  },
  resolved: false,
};

export const EXPLAINABILITY_KNOWLEDGE_BASE: Record<string, ExplainabilityContext> = {
  dob_conflict: {
    title: "Why did Reroute flag this Date of Birth mismatch?",
    summary:
      "Reroute's Verification Engine detected an exact-string divergence between the Policy Schedule (14/07/1998) and the Hospital Inpatient Invoice (17/07/1998).",
    sourceDoc: "Policy Schedule POL-2026-1024 vs Hospital Bill INV-CC-2026-8841",
    sourceSection: "Verification Rules Section 1.1 (Identity Consistency)",
    quote:
      "Identity information must be consistent across submitted documents. If critical identity information conflicts across documents, the journey must not proceed automatically without explicit customer confirmation.",
    confidence: 0.92,
    policyRuleId: "VER-RULE-2026-V1",
  },
  discharge_summary_request: {
    title: "Why is a Clinical Discharge Summary required?",
    summary:
      "Inpatient health insurance claims require clinical evidence proving continuous hospitalization of at least 24 hours, surgical necessity, and discharge status.",
    sourceDoc: "Health Insurance Claim Requirements Specification",
    sourceSection: "Claim Requirements Section 1.4 (Mandatory Evidentiary Documents)",
    quote:
      "Discharge Summary: Clinical summary outlining admission date/time, discharge date/time, final diagnosis, treatment summary, and post-discharge advice.",
    confidence: 0.97,
    policyRuleId: "POL-SYNTH-2026-HC",
  },
  risk_score: {
    title: "How was the Synthetic Risk Score calculated?",
    summary:
      "The Risk Intelligence Engine evaluates 5 deterministic signals: identity consistency (+35 for DOB mismatch), amount threshold (+7 for ₹84.5k variance), OCR quality (+0), duplicate check (+0), and claim frequency (+0), yielding a score of 42/100 (Medium).",
    sourceDoc: "Synthetic Risk & AML Ruleset Specification",
    sourceSection: "Risk Rules Section 1 & Section 2 (Weight Weights)",
    quote:
      "Low Risk (0-30), Medium Risk (31-60), High Risk (61-100). All risk models herein are strictly synthetic demonstration components designed for hackathon evaluation and do not represent actual commercial underwriting.",
    confidence: 0.94,
    policyRuleId: "RISK-RULE-2026-SYNTH",
  },
  human_review_packet: {
    title: "Why does this case require human review?",
    summary:
      "Reroute enforces responsible AI principles: AI assists and orchestrates the journey but does not autonomously approve, deny, or underwrite financial claims.",
    sourceDoc: "Paytm Hackathon Track 3 Guidelines & Reroute AI Safety Policy",
    sourceSection: "Safety Guidelines Section 4 (Zero Autonomous Financial Decisions)",
    quote:
      "The system should assist and orchestrate the journey while keeping uncertain/critical cases under human oversight. Decision support only.",
    confidence: 0.99,
    policyRuleId: "AI-SAFETY-RESPONSIBLE-01",
  },
};

export const DEMO_SCENARIOS: DemoScenario[] = [
  {
    id: "dob_conflict",
    name: "01 · DOB Conflict & Reroute",
    tagline: "Core Hackathon Demo",
    description: "Policy has 14/07/1998, Hospital Bill has 17/07/1998 → Reroute isolates the issue → Customer confirms → Seamless recovery.",
    badge: "RECOMMENDED",
    accentColor: "#54e38e",
  },
  {
    id: "happy_path",
    name: "02 · Happy Path (Clean Verification)",
    tagline: "Standard Instant Journey",
    description: "All documents match perfectly. Zero conflicts. Low risk score (14/100). Rapid generation of complete review packet.",
    badge: "FAST PATH",
    accentColor: "#bcd8ff",
  },
  {
    id: "missing_evidence",
    name: "03 · Missing Evidence Reroute",
    tagline: "Drop-off Prevention",
    description: "Discharge summary is missing. Reroute does not say 'Application Incomplete' — it tells user exactly what is needed and resumes.",
    badge: "RECOVERY",
    accentColor: "#ffd166",
  },
  {
    id: "high_risk",
    name: "04 · Risk Signal & Human Escalation",
    tagline: "Risk Intelligence",
    description: "High claim amount (₹1,85,000) + low OCR clarity → Risk Score 68/100 → Structured escalation to human review officer.",
    badge: "ESCALATION",
    accentColor: "#ff5c5c",
  },
];

export const INITIAL_REVIEW_CASES: HumanReviewCase[] = [
  {
    caseId: "CASE #R-1024",
    journeyId: "R-1024",
    customerName: "Sukrut Dusane",
    customerGoal: "File health insurance claim for appendectomy surgery",
    claimAmount: "₹84,500",
    hospitalName: "CityCare Super Speciality Hospital",
    submissionDate: "2026-09-24",
    status: "NEEDS_REVIEW",
    priority: "HIGH",
    issueTitle: "Date of Birth Conflict (Resolved by Customer Confirmation)",
    issueDescription:
      "Policy record (14/07/1998) conflicted with Hospital Bill (17/07/1998). Customer selected 14/07/1998 via Reroute workflow; officer verification required before final settlement.",
    aiConfidence: 0.72,
    riskScore: 42,
    evidenceDocs: [
      "Policy_Schedule_POL1024.pdf",
      "Hospital_Bill_CityCare_84500.pdf",
      "Discharge_Summary_Sukrut_Aug2026.pdf",
      "Aadhaar_Card_Masked_Sukrut.pdf",
    ],
    customerResponseStatus: "PROVIDED",
    customerSelectedValue: "14 July 1998 (Confirmed matching Aadhaar)",
    reviewerNotes: "Customer verified against UIDAI Aadhaar record. Discharge summary confirms laparoscopic appendectomy.",
    recommendedNextAction: "Approve Next Step (Queue for Claims Disbursement Officer)",
  },
  {
    caseId: "CASE #R-1026",
    journeyId: "R-1026",
    customerName: "Rajesh Verma",
    customerGoal: "Reimbursement for bilateral knee arthroplasty",
    claimAmount: "₹1,85,000",
    hospitalName: "Fortis Escorts Heart Institute",
    submissionDate: "2026-09-25",
    status: "NEEDS_REVIEW",
    priority: "URGENT",
    issueTitle: "High Ticket Claim Amount Anomaly + Rapid Resubmission",
    issueDescription:
      "Claim amount exceeds p90 regional benchmark; second orthopedic reimbursement within 45 calendar days. Requires investigation of prior settlement ledger.",
    aiConfidence: 0.65,
    riskScore: 68,
    evidenceDocs: ["Policy_POL8819.pdf", "Hospital_Invoice_Fortis_185K.pdf", "Implant_Barcodes.pdf"],
    customerResponseStatus: "PENDING",
    recommendedNextAction: "Request itemized implant invoice and surgeon verification",
  },
  {
    caseId: "CASE #R-1028",
    journeyId: "R-1028",
    customerName: "Ananya Iyer",
    customerGoal: "Emergency Room treatment and CT scan reimbursement",
    claimAmount: "₹18,200",
    hospitalName: "Manipal Hospitals",
    submissionDate: "2026-09-26",
    status: "APPROVED_NEXT_STEP",
    priority: "NORMAL",
    issueTitle: "Routine Daycare Admission Review",
    issueDescription: "All primary evidence cross-matched. Verified by rule engine with 98% confidence.",
    aiConfidence: 0.98,
    riskScore: 12,
    evidenceDocs: ["Policy_POL5511.pdf", "ER_Emergency_Bill.pdf", "CT_Brain_Report.pdf"],
    customerResponseStatus: "PROVIDED",
    reviewerNotes: "Approved by Senior Claims Adjudicator.",
    recommendedNextAction: "Proceed to bank transfer authorization",
  },
];
