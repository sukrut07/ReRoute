import { ConflictRecord, DocumentEvidence, RiskAssessment, RiskSignal } from "./types";

export class RiskEngine {
  /**
   * Deterministic Risk Intelligence Analyzer
   * Calculates a transparent synthetic risk score (0-100) and extracts explainable signals.
   * Clearly marked as synthetic demonstration, never autonomous financial adjudication.
   */
  public static assessRisk(params: {
    evidence: DocumentEvidence[];
    conflicts: ConflictRecord[];
    claimAmount?: number;
    hasHistoricalClaims?: boolean;
    isDuplicateDocDemo?: boolean;
  }): RiskAssessment {
    const { evidence, conflicts, claimAmount = 84500, hasHistoricalClaims = false, isDuplicateDocDemo = false } = params;

    const signals: RiskSignal[] = [];
    let score = 0;

    // 1. Identity Consistency Checks
    conflicts.forEach((conflict) => {
      if (!conflict.resolved) {
        if (conflict.field === "date_of_birth") {
          score += 35;
          signals.push({
            id: `SIG-DOB-${Date.now()}`,
            type: "DOB_MISMATCH",
            severity: "MEDIUM",
            label: "Date of Birth Discrepancy",
            detail: `Recorded as ${conflict.sourceA.value} in ${conflict.sourceA.docName} vs ${conflict.sourceB.value} in ${conflict.sourceB.docName}.`,
            detectedAt: new Date().toISOString(),
            syntheticEvidence: `${conflict.sourceA.docName} & ${conflict.sourceB.docName}`,
          });
        } else if (conflict.field === "patient_name") {
          score += 25;
          signals.push({
            id: `SIG-NAME-${Date.now()}`,
            type: "NAME_MISMATCH",
            severity: "MEDIUM",
            label: "Patient Name Variance",
            detail: `Name characters differ across ${conflict.sourceA.docName} and ${conflict.sourceB.docName}.`,
            detectedAt: new Date().toISOString(),
            syntheticEvidence: `${conflict.sourceA.docName} & ${conflict.sourceB.docName}`,
          });
        }
      }
    });

    // 2. Claim Amount Threshold Check
    if (claimAmount > 150000) {
      score += 35;
      signals.push({
        id: `SIG-AMT-${Date.now()}`,
        type: "CLAIM_AMOUNT_ANOMALY",
        severity: "HIGH",
        label: "High Ticket Claim Amount",
        detail: `Claim amount of ₹${claimAmount.toLocaleString("en-IN")} exceeds the 85th percentile benchmark for routine hospitalization.`,
        detectedAt: new Date().toISOString(),
        syntheticEvidence: "Itemized Hospital Invoice",
      });
    } else if (claimAmount > 80000) {
      score += 7;
      signals.push({
        id: `SIG-AMT-VAR-${Date.now()}`,
        type: "CLAIM_AMOUNT_ANOMALY",
        severity: "LOW",
        label: "Moderate Procedure Variance",
        detail: `Amount ₹${claimAmount.toLocaleString("en-IN")} is within 1.15x regional expected bounds for laparoscopic appendectomy.`,
        detectedAt: new Date().toISOString(),
        syntheticEvidence: "Itemized Hospital Invoice",
      });
    }

    // 3. Document Extraction / OCR Quality Check
    const lowConfDoc = evidence.find((doc) => doc.ocrConfidence < 0.85);
    if (lowConfDoc) {
      score += 20;
      signals.push({
        id: `SIG-OCR-${Date.now()}`,
        type: "LOW_OCR_CONFIDENCE",
        severity: "LOW",
        label: "Sub-optimal Document Clarity",
        detail: `OCR confidence on [${lowConfDoc.name}] is ${Math.round(lowConfDoc.ocrConfidence * 100)}% (threshold 85%).`,
        detectedAt: new Date().toISOString(),
        syntheticEvidence: lowConfDoc.fileName,
      });
    }

    // 4. Duplicate Document Signal
    if (isDuplicateDocDemo) {
      score += 40;
      signals.push({
        id: `SIG-DUP-${Date.now()}`,
        type: "DUPLICATE_DOCUMENT",
        severity: "HIGH",
        label: "Potential Document Re-submission",
        detail: "Document image hash matches an earlier settled claim record in synthetic registry.",
        detectedAt: new Date().toISOString(),
        syntheticEvidence: "Registry Check",
      });
    }

    // 5. Frequency Anomaly
    if (hasHistoricalClaims) {
      score += 25;
      signals.push({
        id: `SIG-FREQ-${Date.now()}`,
        type: "REPEATED_CLAIMS",
        severity: "MEDIUM",
        label: "Multiple Claims within 30 Days",
        detail: "Two claims filed under identical policyholder identity within 30 days.",
        detectedAt: new Date().toISOString(),
        syntheticEvidence: "Historical Claim Register",
      });
    }

    // Clamp score 0 - 100
    const finalScore = Math.min(100, Math.max(0, score));

    let tier: "LOW" | "MEDIUM" | "HIGH" = "LOW";
    let summary = "Low synthetic risk index. Evidence appears structurally sound and standard.";

    if (finalScore >= 61) {
      tier = "HIGH";
      summary = "Elevated risk index due to multiple compounding discrepancies. Recommended for mandatory human investigation.";
    } else if (finalScore >= 31) {
      tier = "MEDIUM";
      summary = "Moderate risk index attributed to document field mismatches. Can be resolved through customer confirmation or routine human review.";
    }

    return {
      score: finalScore,
      tier,
      summary,
      signals,
      disclaimer:
        "Synthetic demonstration risk score — not a financial decision or fraud determination. Reroute does not autonomously approve or deny claims.",
    };
  }
}
