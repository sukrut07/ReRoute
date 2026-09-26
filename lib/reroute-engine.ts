import { ConflictRecord, DocumentEvidence, RerouteAction } from "./types";

export interface RerouteEngineInput {
  journeyState: string;
  evidence: DocumentEvidence[];
  missingInformation: string[];
  conflicts: ConflictRecord[];
  riskScore: number;
  confidence: number;
}

export class RerouteEngine {
  /**
   * Deterministic Reroute Decision Logic
   * Given customer journey state, evidence artifacts, detected conflicts, and risk signals,
   * determine the safest and most relevant next step WITHOUT forcing the user to restart.
   */
  public static evaluate(input: RerouteEngineInput): RerouteAction {
    const { conflicts, missingInformation, riskScore, confidence, evidence } = input;

    // 1. Check for critical unresolved conflicts
    const unresolvedConflicts = conflicts.filter((c) => !c.resolved);
    if (unresolvedConflicts.length > 0) {
      const primary = unresolvedConflicts[0];

      // If high risk or low confidence, escalate to Human Review
      if (riskScore >= 60 || confidence < 0.7) {
        return {
          actionType: "HUMAN_REVIEW",
          reason: `High risk (${riskScore}/100) or low confidence (${Math.round(confidence * 100)}%) with unresolved discrepancy: ${primary.label}`,
          nextSafeStep: "ESCALATE_TO_OFFICER",
          targetField: primary.field,
          userPrompt:
            "A verification specialist is reviewing your documents to ensure your claim proceeds smoothly without delay.",
          requiresHumanReview: true,
          confidence,
        };
      }

      // Standard user-resolvable conflict (e.g. DOB mismatch)
      if (primary.field === "date_of_birth") {
        return {
          actionType: "RESOLVE_CONFLICT",
          reason: "Date of Birth differs between Policy Schedule and Hospital Invoice",
          nextSafeStep: "CONFIRM_DOB",
          targetField: "date_of_birth",
          userPrompt:
            "We found a small mismatch in the recorded birth dates. Confirm which date is legally accurate so we can update the record and proceed.",
          options: [
            {
              label: `Confirm ${primary.sourceA.value} (from ${primary.sourceA.docName})`,
              value: primary.sourceA.value,
              isRecommended: true,
            },
            {
              label: `Confirm ${primary.sourceB.value} (from ${primary.sourceB.docName})`,
              value: primary.sourceB.value,
            },
            {
              label: "Neither is correct — Request Human Review",
              value: "REQUEST_REVIEW",
            },
          ],
          requiresHumanReview: false,
          confidence: primary.aiConfidence || 0.92,
        };
      }

      return {
        actionType: "REQUEST_CLARIFICATION",
        reason: primary.description,
        nextSafeStep: `CLARIFY_${primary.field.toUpperCase()}`,
        targetField: primary.field,
        userPrompt: `Please clarify the difference observed in ${primary.label}.`,
        requiresHumanReview: false,
        confidence: primary.aiConfidence || 0.88,
      };
    }

    // 2. Check for missing critical documentation
    if (missingInformation.length > 0) {
      const missingDoc = missingInformation[0];
      return {
        actionType: "REQUEST_DOCUMENT",
        reason: `Mandatory document [${missingDoc}] is missing from submission packet`,
        nextSafeStep: `UPLOAD_${missingDoc.toUpperCase().replace(/\s+/g, "_")}`,
        userPrompt: `Your ${missingDoc} is needed to verify clinical inpatient details. Upload it here and we'll resume from exactly where you stopped.`,
        requiresHumanReview: false,
        confidence: 0.95,
      };
    }

    // 3. Check if all required documents exist and are verified
    const allVerified = evidence.every((doc) => doc.status === "VERIFIED");
    if (!allVerified) {
      return {
        actionType: "REVERIFY",
        reason: "Re-verifying updated evidence against policy rules",
        nextSafeStep: "RUN_VERIFICATION_PASS",
        userPrompt: "Re-running cross-document checks with your latest confirmation...",
        requiresHumanReview: false,
        confidence: 0.94,
      };
    }

    // 4. Everything verified, prepare review packet
    return {
      actionType: "COMPLETE",
      reason: "All evidence gathered, reconciled, and validated against policy schedule",
      nextSafeStep: "PREPARE_FINAL_PACKET",
      userPrompt:
        "Your journey is complete! The comprehensive claim packet has been assembled and queued for authorized human review.",
      requiresHumanReview: false,
      confidence: 0.98,
    };
  }
}
