# REROUTE — Hackathon Demo Script & Guide

This document outlines the exact 2–3 minute demonstration flow designed for hackathon judges to understand the USP within the first 30 seconds.

---

## 1. Hackathon Pitch (0:00 – 0:30)
> *"Financial institutions make customers understand products, forms, and technical processes first. When a single mismatch occurs across documents, applications get rejected and customers abandon valid claims.*  
> *We did not build another chatbot. We built **Reroute**—an AI-powered Financial Journey Engine that guides customers from goal to completion, isolates blockers, and **reroutes** them without restarting."*

---

## 2. Interactive Demonstration Walkthrough (0:30 – 2:30)

| Time | Stage | Actions & UI State | Key Talking Point |
| :--- | :--- | :--- | :--- |
| **0:30** | **Landing Page** | Open `http://localhost:3000`. Point out the Neo-Brutalist design, clean contrast, and live product preview showing `72% complete` with a DOB mismatch. Click **Start a Journey**. | *"The product is bold, minimal, and feels like serious fintech infrastructure—not generic AI blobs."* |
| **0:50** | **Goal-First Intake** | Page `/journey`. Natural language input contains: *"I want to claim my hospital expenses for appendicitis surgery."* Click **Begin Journey**. | *"Customers state their intent in plain language; Reroute automatically initializes the regulated health claim workflow."* |
| **1:10** | **Policy & Documents** | Review Policy `POL-2026-1024` with ₹5,00,000 cover. Advance to Document Upload and click **Extract & Verify Evidence**. | *"Visual models and OCR turn submitted PDFs into structured entities with high confidence."* |
| **1:30** | **The Staged Conflict** | Verification matrix displays: Policy DOB is `14/07/1998` vs Hospital Bill DOB `17/07/1998`. | *"Here is the critical moment: A traditional portal would reject the application and say 'Application Incomplete'. Watch what Reroute does."* |
| **1:45** | **THE REROUTE SCREEN** | Click **Reroute This Journey**. Display: *"We've rerouted your journey. Instead of restarting your claim, we've identified exactly what needs clarification."* Click **"Why did Reroute flag this?"** to show the policy citation modal. | *"Reroute isolates the exact blocker. All prior verified progress is preserved."* |
| **2:05** | **Resolution & Recovery** | Click **Confirm 14 July 1998**. Watch the live re-verification pass clear the conflict and advance to Risk Screening. | *"In-place recovery with zero data loss. The customer never had to call a helpline or restart."* |
| **2:20** | **Risk Screening & Completion** | Show Risk Score `42/100 (Medium)` with transparent signal breakdown and responsible AI disclaimer. Complete journey: *"Ready for final human review"*. | *"We adhere strictly to responsible AI: Reroute orchestrates and packages evidence, leaving final financial determinations to authorized human officers."* |
| **2:40** | **Journey Intelligence** | Navigate to `/dashboard` to showcase the conversion funnel, drop-off reduction (from 38.5% down to 15.4%), and friction metrics. | *"This is measurable business impact: 41% fewer steps, 43% less paperwork, and 82% faster turnaround time."* |

---

## 3. Four Demo Scenarios (Using Demo Mode Switcher)
Judges can click the **DEMO MODE** pills at the top of `/journey`:
1. **01 · DOB Conflict (Default / Core Demo):** Showcases conflict detection, Reroute UI, explainability drawer, and customer resolution.
2. **02 · Happy Path:** All 4 documents match; skips reroute and fast-tracks directly to review preparation.
3. **03 · Missing Evidence:** Discharge summary omitted; Reroute requests the exact missing file without failing.
4. **04 · Risk Signal:** High-ticket claim (₹1,85,000) triggers elevated risk score (68/100) and automatic escalation to human adjudicator queue.
