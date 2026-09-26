"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { DemoBanner } from "@/components/demo-banner";
import { JourneySidebar } from "@/components/journey/journey-sidebar";
import { GoalStep } from "@/components/journey/goal-step";
import { PolicyStep } from "@/components/journey/policy-step";
import { UploadStep } from "@/components/journey/upload-step";
import { ExtractionStep } from "@/components/journey/extraction-step";
import { VerificationStep } from "@/components/journey/verification-step";
import { ConflictRerouteStep } from "@/components/journey/conflict-reroute-step";
import { RiskStep } from "@/components/journey/risk-step";
import { CompletionStep } from "@/components/journey/completion-step";
import { InteractiveJourneySandbox } from "@/components/journey/interactive-journey-sandbox";
import { ExplainabilityModal } from "@/components/explainability-modal";
import { EvidenceModal } from "@/components/evidence-modal";
import {
  DEMO_CUSTOMER,
  DEFAULT_JOURNEY_STEPS,
  INITIAL_DEMO_DOCUMENTS,
  INITIAL_DEMO_CONFLICT,
  EXPLAINABILITY_KNOWLEDGE_BASE,
} from "@/lib/synthetic-data";
import { RiskEngine } from "@/lib/risk-engine";
import {
  ConflictRecord,
  DemoScenarioId,
  DocumentEvidence,
  ExplainabilityContext,
  JourneyStep,
  StepId,
} from "@/lib/types";
import { Sparkles, RotateCcw, AlertTriangle, ArrowRight } from "lucide-react";

export default function JourneyPage() {
  const [currentScenario, setCurrentScenario] = useState<DemoScenarioId>("dob_conflict");
  const [currentStepId, setCurrentStepId] = useState<StepId>("reroute");
  const [steps, setSteps] = useState<JourneyStep[]>(DEFAULT_JOURNEY_STEPS);
  const [documents, setDocuments] = useState<DocumentEvidence[]>(INITIAL_DEMO_DOCUMENTS);
  const [conflict, setConflict] = useState<ConflictRecord>(INITIAL_DEMO_CONFLICT);
  const [customerGoal, setCustomerGoal] = useState<string>(DEMO_CUSTOMER.defaultGoal);
  const [explainContext, setExplainContext] = useState<ExplainabilityContext | null>(null);
  const [inspectedDoc, setInspectedDoc] = useState<DocumentEvidence | null>(null);
  const [inspectedField, setInspectedField] = useState<string | null>(null);
  const [hasVisitedBefore, setHasVisitedBefore] = useState<boolean>(false);

  // Check Journey Memory on mount
  useEffect(() => {
    try {
      const savedMemory = localStorage.getItem("reroute_journey_memory");
      if (savedMemory) {
        setHasVisitedBefore(true);
      } else {
        localStorage.setItem("reroute_journey_memory", "active");
      }
    } catch {
      // ignore SSR or localStorage access
    }
  }, []);

  // Handle Scenario switching
  const handleSelectScenario = (scenarioId: DemoScenarioId) => {
    setCurrentScenario(scenarioId);

    if (scenarioId === "dob_conflict") {
      // Default hackathon demo: DOB conflict at step 6
      setCurrentStepId("reroute");
      setDocuments(INITIAL_DEMO_DOCUMENTS);
      setConflict({ ...INITIAL_DEMO_CONFLICT, resolved: false });
      setSteps(DEFAULT_JOURNEY_STEPS);
    } else if (scenarioId === "happy_path") {
      // Clean path: all docs match
      setCurrentStepId("verification");
      const cleanDocs = INITIAL_DEMO_DOCUMENTS.map((doc) => {
        if (doc.category === "Hospital Bill") {
          return {
            ...doc,
            status: "VERIFIED" as const,
            extractedFields: {
              ...doc.extractedFields,
              "Date of Birth": "14/07/1998",
            },
          };
        }
        return { ...doc, status: "VERIFIED" as const };
      });
      setDocuments(cleanDocs);
      setConflict({ ...INITIAL_DEMO_CONFLICT, resolved: true });
      const updatedSteps = DEFAULT_JOURNEY_STEPS.map((s) =>
        s.id === "reroute" ? { ...s, status: "skipped" as const } : s
      );
      setSteps(updatedSteps);
    } else if (scenarioId === "missing_evidence") {
      // Missing discharge summary
      setCurrentStepId("evidence");
      const missingDocs = INITIAL_DEMO_DOCUMENTS.map((doc) =>
        doc.category === "Discharge Summary"
          ? { ...doc, status: "MISSING" as const }
          : doc
      );
      setDocuments(missingDocs);
    } else if (scenarioId === "high_risk") {
      // High ticket amount + low OCR -> High Risk escalation
      setCurrentStepId("risk");
      const highAmountDocs = INITIAL_DEMO_DOCUMENTS.map((doc) =>
        doc.category === "Hospital Bill"
          ? {
              ...doc,
              extractedFields: {
                ...doc.extractedFields,
                "Claim Amount": "₹1,85,000",
              },
              ocrConfidence: 0.68,
            }
          : doc
      );
      setDocuments(highAmountDocs);
    }
  };

  // Conflict resolved handler
  const handleResolveConflict = (confirmedValue: string) => {
    setConflict((prev) => ({
      ...prev,
      resolved: true,
      resolvedValue: confirmedValue,
      resolutionTimestamp: new Date().toISOString(),
    }));

    // Update documents
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.category === "Hospital Bill"
          ? {
              ...doc,
              status: "VERIFIED" as const,
              extractedFields: {
                ...doc.extractedFields,
                "Date of Birth": confirmedValue,
              },
            }
          : doc
      )
    );

    // Update steps
    setSteps((prev) =>
      prev.map((step) => {
        if (step.id === "verification") return { ...step, status: "completed" as const };
        if (step.id === "reroute") return { ...step, status: "completed" as const };
        if (step.id === "risk") return { ...step, status: "current" as const };
        return step;
      })
    );

    // Transition to Risk Step
    setCurrentStepId("risk");
  };

  const handleApplyCustomValues = (customValues: {
    billDob: string;
    claimAmount: number;
    hospitalName: string;
  }) => {
    const isConflict = customValues.billDob.trim() !== "14/07/1998";

    setDocuments((prev) =>
      prev.map((doc) =>
        doc.category === "Hospital Bill"
          ? {
              ...doc,
              status: isConflict ? ("CONFLICT" as const) : ("VERIFIED" as const),
              extractedFields: {
                ...doc.extractedFields,
                "Date of Birth": customValues.billDob,
                "Claim Amount": `₹${customValues.claimAmount.toLocaleString("en-IN")}`,
                "Hospital Name": customValues.hospitalName,
              },
            }
          : doc
      )
    );

    setConflict((prev) => ({
      ...prev,
      resolved: !isConflict,
      sourceB: {
        ...prev.sourceB,
        value: customValues.billDob,
      },
    }));

    if (isConflict) {
      setCurrentStepId("reroute");
      setSteps((prev) =>
        prev.map((s) => (s.id === "reroute" ? { ...s, status: "current" as const } : s))
      );
    } else {
      setCurrentStepId("risk");
    }
  };

  // Compute risk assessment dynamically
  const riskAssessment = RiskEngine.assessRisk({
    evidence: documents,
    conflicts: [conflict],
    claimAmount: currentScenario === "high_risk" ? 185000 : 84500,
  });

  // Calculate overall progress percentage
  const calculateProgress = () => {
    switch (currentStepId) {
      case "goal":
        return 15;
      case "policy":
        return 30;
      case "evidence":
        return 45;
      case "extraction":
        return 60;
      case "verification":
        return 72;
      case "reroute":
        return 72;
      case "risk":
        return 88;
      case "completion":
        return 100;
      default:
        return 72;
    }
  };

  const progressPercent = calculateProgress();

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#101010]">
      <Navbar />
      <DemoBanner
        currentScenario={currentScenario}
        onSelectScenario={handleSelectScenario}
      />

      {/* Journey Memory Banner (Returning User Experience) */}
      {hasVisitedBefore && currentStepId === "reroute" && (
        <div className="border-b-2 border-black bg-[#fff0b8] px-4 py-2.5 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className="mono border border-black bg-black px-2 py-0.5 text-[10px] text-[#54e38e]">
                JOURNEY MEMORY
              </span>
              <span>
                Welcome back, {DEMO_CUSTOMER.name}. Your claim is <strong>72% complete</strong>.
                Policy and documents are already verified—only one confirmation step remains.
              </span>
            </div>
            <button
              onClick={() => setCurrentStepId("reroute")}
              className="mono border border-black bg-white px-2.5 py-1 text-[11px] font-black hover:bg-neutral-100"
            >
              Continue from Blocker →
            </button>
          </div>
        </div>
      )}

      {/* Main Journey Layout */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Left Journey Sidebar State Machine */}
          <JourneySidebar
            steps={steps}
            currentStepId={currentStepId}
            progressPercent={progressPercent}
            onStepSelect={(id) => setCurrentStepId(id)}
            isConflictActive={currentStepId === "reroute" || (currentStepId === "verification" && !conflict.resolved)}
          />

          {/* Right Main Task Panel */}
          <div className="min-w-0 space-y-6">
            <InteractiveJourneySandbox
              currentBillDob={documents.find((d) => d.category === "Hospital Bill")?.extractedFields["Date of Birth"] || "17/07/1998"}
              currentAmount={currentScenario === "high_risk" ? 185000 : 84500}
              onApplyCustomValues={handleApplyCustomValues}
            />

            {currentStepId === "goal" && (
              <GoalStep
                initialGoal={customerGoal}
                onConfirmGoal={(goal) => {
                  setCustomerGoal(goal);
                  setCurrentStepId("policy");
                }}
              />
            )}

            {currentStepId === "policy" && (
              <PolicyStep
                onContinue={() => setCurrentStepId("evidence")}
                onOpenExplain={(key) => setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)}
              />
            )}

            {currentStepId === "evidence" && (
              <UploadStep
                documents={documents}
                isMissingDocScenario={currentScenario === "missing_evidence"}
                onProcessComplete={() => setCurrentStepId("extraction")}
                onViewDoc={(doc) => {
                  setInspectedDoc(doc);
                  setInspectedField(null);
                }}
              />
            )}

            {currentStepId === "extraction" && (
              <ExtractionStep
                documents={documents}
                isConflictScenario={!conflict.resolved}
                onContinue={() => setCurrentStepId("verification")}
                onViewEvidence={(doc, fieldKey) => {
                  setInspectedDoc(doc);
                  setInspectedField(fieldKey || null);
                }}
              />
            )}

            {currentStepId === "verification" && (
              <VerificationStep
                hasConflict={!conflict.resolved}
                onTriggerReroute={() => {
                  if (!conflict.resolved) {
                    setCurrentStepId("reroute");
                  } else {
                    setCurrentStepId("risk");
                  }
                }}
                onOpenExplain={(key) => setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)}
              />
            )}

            {currentStepId === "reroute" && (
              <ConflictRerouteStep
                conflict={conflict}
                onResolve={handleResolveConflict}
                onOpenExplain={(key) => setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)}
                onEscalateToHuman={() => setCurrentStepId("risk")}
              />
            )}

            {currentStepId === "risk" && (
              <RiskStep
                assessment={riskAssessment}
                onContinue={() => setCurrentStepId("completion")}
                onOpenExplain={(key) => setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)}
              />
            )}

            {currentStepId === "completion" && (
              <CompletionStep
                claimId={DEMO_CUSTOMER.claimId}
                journeyId={DEMO_CUSTOMER.journeyId}
                customerName={DEMO_CUSTOMER.name}
                onRestart={() => handleSelectScenario("dob_conflict")}
              />
            )}
          </div>
        </div>
      </main>

      {/* Modals */}
      <ExplainabilityModal
        context={explainContext}
        onClose={() => setExplainContext(null)}
      />

      <EvidenceModal
        document={inspectedDoc}
        highlightField={inspectedField}
        onClose={() => {
          setInspectedDoc(null);
          setInspectedField(null);
        }}
      />
    </div>
  );
}
