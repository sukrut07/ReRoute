"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { DemoBanner } from "@/components/demo-banner";
import { JourneySidebar } from "@/components/journey/journey-sidebar";
import { JourneyContextPanel } from "@/components/journey/journey-context-panel";
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
import { ArrowRight, Check } from "lucide-react";

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
  const [hasVisitedBefore, setHasVisitedBefore] = useState<boolean>(true);

  // Scenario switching
  const handleSelectScenario = (scenarioId: DemoScenarioId) => {
    setCurrentScenario(scenarioId);

    if (scenarioId === "dob_conflict") {
      setCurrentStepId("reroute");
      setDocuments(INITIAL_DEMO_DOCUMENTS);
      setConflict({ ...INITIAL_DEMO_CONFLICT, resolved: false });
      setSteps(DEFAULT_JOURNEY_STEPS);
    } else if (scenarioId === "happy_path") {
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
      setSteps(
        DEFAULT_JOURNEY_STEPS.map((s) =>
          s.id === "reroute" ? { ...s, status: "skipped" as const } : s
        )
      );
    } else if (scenarioId === "missing_evidence") {
      setCurrentStepId("evidence");
      const missingDocs = INITIAL_DEMO_DOCUMENTS.map((doc) =>
        doc.category === "Discharge Summary"
          ? { ...doc, status: "MISSING" as const }
          : doc
      );
      setDocuments(missingDocs);
    } else if (scenarioId === "high_risk") {
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

  // Conflict resolution handler
  const handleResolveConflict = (confirmedValue: string) => {
    setConflict((prev) => ({
      ...prev,
      resolved: true,
      resolvedValue: confirmedValue,
      resolutionTimestamp: new Date().toISOString(),
    }));

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

    setSteps((prev) =>
      prev.map((step) => {
        if (step.id === "verification") return { ...step, status: "completed" as const };
        if (step.id === "reroute") return { ...step, status: "completed" as const };
        if (step.id === "risk") return { ...step, status: "current" as const };
        return step;
      })
    );

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

  const riskAssessment = RiskEngine.assessRisk({
    evidence: documents,
    conflicts: [conflict],
    claimAmount: currentScenario === "high_risk" ? 185000 : 84500,
  });

  const getStepProgressNumber = () => {
    switch (currentStepId) {
      case "goal":
        return 1;
      case "policy":
        return 2;
      case "evidence":
        return 3;
      case "extraction":
        return 4;
      case "verification":
      case "reroute":
        return 4;
      case "risk":
        return 5;
      case "completion":
        return 6;
      default:
        return 4;
    }
  };

  const progressPercent =
    currentStepId === "goal"
      ? 16
      : currentStepId === "policy"
      ? 33
      : currentStepId === "evidence"
      ? 50
      : currentStepId === "extraction"
      ? 66
      : currentStepId === "verification" || currentStepId === "reroute"
      ? 72
      : currentStepId === "risk"
      ? 88
      : 100;

  return (
    <div className="min-h-screen bg-[#F7F6F2] text-[#111111]">
      <Navbar />
      <DemoBanner
        currentScenario={currentScenario}
        onSelectScenario={handleSelectScenario}
      />

      {/* Top Header & Progress Bar */}
      <div className="border-b border-[#111111] bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="mono rounded border border-[#111111] bg-[#F7F6F2] px-2 py-0.5 text-xs font-black text-[#111111]">
              CASE #R-1024
            </span>
            <h1 className="text-base sm:text-lg font-black text-[#111111]">
              HEALTH INSURANCE CLAIM
            </h1>
            <span className="mono text-xs font-bold text-[#666666]">
              STEP {getStepProgressNumber()} / 6
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="mono text-xs font-black text-[#111111]">
              {progressPercent}% COMPLETE
            </span>
            <div className="h-2.5 w-36 sm:w-48 rounded border border-[#111111] bg-neutral-100 overflow-hidden">
              <div
                className={`h-full transition-all duration-300 ${
                  currentStepId === "reroute" ? "bg-[#D97706]" : "bg-[#20C979]"
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Journey Memory Resume Banner */}
      {hasVisitedBefore && currentStepId === "reroute" && (
        <div className="border-b border-[#111111] bg-[#FEF3C7] px-4 py-2.5 sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 text-xs font-bold">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mono rounded border border-[#111111] bg-[#111111] px-2 py-0.5 text-[10px] text-[#20C979]">
                JOURNEY MEMORY
              </span>
              <span className="text-[#111111]">
                WELCOME BACK, {DEMO_CUSTOMER.name.toUpperCase()}. Your claim is 72% complete.
              </span>
              <span className="hidden md:inline text-[#666666]">
                ✓ Policy verified · ✓ Identity verified · ✓ Hospital verified · 1 action remaining.
              </span>
            </div>
            <button
              onClick={() => setCurrentStepId("reroute")}
              className="mono rounded border border-[#111111] bg-[#20C979] px-3 py-1 text-xs font-black text-[#111111] shadow-[2px_2px_0px_#111111] hover:bg-[#1bb36d]"
            >
              CONTINUE JOURNEY →
            </button>
          </div>
        </div>
      )}

      {/* Main 3-Column Layout (Section 11) */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[260px_1fr_280px] items-start">
          {/* Left Column: Journey Navigation Rail */}
          <JourneySidebar
            steps={steps}
            currentStepId={currentStepId}
            progressPercent={progressPercent}
            onStepSelect={(id) => setCurrentStepId(id)}
            isConflictActive={
              currentStepId === "reroute" ||
              (currentStepId === "verification" && !conflict.resolved)
            }
          />

          {/* Center Column: Current Journey Task */}
          <div className="min-w-0 space-y-6">
            <InteractiveJourneySandbox
              currentBillDob={
                documents.find((d) => d.category === "Hospital Bill")?.extractedFields[
                  "Date of Birth"
                ] || "17/07/1998"
              }
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
                onOpenExplain={(key) =>
                  setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)
                }
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
                onOpenExplain={(key) =>
                  setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)
                }
              />
            )}

            {currentStepId === "reroute" && (
              <ConflictRerouteStep
                conflict={conflict}
                onResolve={handleResolveConflict}
                onOpenExplain={(key) =>
                  setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)
                }
                onEscalateToHuman={() => setCurrentStepId("risk")}
              />
            )}

            {currentStepId === "risk" && (
              <RiskStep
                assessment={riskAssessment}
                onContinue={() => setCurrentStepId("completion")}
                onOpenExplain={(key) =>
                  setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)
                }
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

          {/* Right Column: Context / Evidence / AI Explanation (Section 11) */}
          <div className="hidden lg:block">
            <JourneyContextPanel
              documents={documents}
              conflict={conflict}
              currentStepId={currentStepId}
              onOpenExplain={(key) =>
                setExplainContext(EXPLAINABILITY_KNOWLEDGE_BASE[key] || null)
              }
              onViewDoc={(doc) => {
                setInspectedDoc(doc);
                setInspectedField(null);
              }}
            />
          </div>
        </div>
      </main>

      {/* Explainability Right Drawer */}
      <ExplainabilityModal
        context={explainContext}
        onClose={() => setExplainContext(null)}
      />

      {/* Evidence Viewer Modal */}
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
