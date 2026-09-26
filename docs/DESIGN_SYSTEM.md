# Reroute Design System: Minimal Neo-Brutalist Fintech AI System

## 1. Visual Philosophy & Direction
Reroute adopts a **clean, minimal neo-brutalist fintech design language** balancing high-contrast editorial discipline with structured engineering precision (inspired by contemporary technical products such as Tracera-style dashboards).

- **Editorial & Structured**: Explicit grid alignments, prominent uppercase monospace metadata, disciplined spacing (8px, 12px, 16px, 24px, 32px, 48px, 64px).
- **Confident & Trustworthy**: Strong black borders and hard controlled depth (`3px 3px 0px #111111`) rather than blurry soft shadows or chaotic gradients.
- **Fintech Utility First**: Designed for financial journey orchestration with real-time evidence inspection and in-place recovery.
- **Restrained Motion**: Subtle micro-interactions only (150–250ms smooth easing); disabled automatically under `prefers-reduced-motion`.

---

## 2. Color Palette & Tokens

| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| **Canvas Background** | `#F7F6F2` | Warm off-white technical paper background |
| **Surface Card** | `#FFFFFF` | Crisp white bordered panels |
| **Primary Ink** | `#111111` | High-contrast text, borders, headers |
| **Secondary Ink** | `#666666` | Supporting descriptions, metadata keys |
| **Primary Green** | `#20C979` | Active state, verified, progress, primary CTA, system intelligence |
| **Light Green** | `#DDF8EA` | Verified pills, completed highlight panels |
| **Warning / Attention** | `#D97706` / `#FEF3C7` | Amber: Conflicts requiring customer confirmation, medium risk |
| **Danger / Blocker** | `#D9414B` / `#FEE2E2` | Muted red: Mismatch alerts, blocked validation, high severity |

---

## 3. Typography Hierarchy

- **Primary Sans**: `Space Grotesk`, `Inter`, system-ui (bold, authoritative headers and readable body text).
- **Technical Monospace**: `DM Mono`, `JetBrains Mono` (technical labels, timestamps, confidence scores, case IDs).

### Labeling Rules:
Uppercase monospace tags are strictly required for:
- Case IDs (e.g., `CASE #R-1024`)
- Journey step markers (e.g., `STEP 4 / 6`)
- System state diagnostics (e.g., `CURRENT STATE: Verification held`)
- Confidence ratings (e.g., `CONFIDENCE 96%`)
- Timestamps and policy rule citations (e.g., `VER-RULE-2026-V1`)

---

## 4. Structural Grid & Shadows

- **Desktop Layout**: Max-width `1200–1320px` centered container.
- **Borders**: Crisp `1px–2px solid #111111`.
- **Corner Radii**: Controlled `8px–10px` (`rounded-lg`). Large bubble radiuses (`25px+`) are prohibited.
- **Shadows**: Hard-offset offset shadows:
  - Standard Card: `box-shadow: 3px 3px 0px #111111;`
  - Small Badge / Button: `box-shadow: 2px 2px 0px #111111;`
  - Accent Button Hover: `-2px, -2px` translation with shadow adjustment.

---

## 5. Signature Component Contracts

1. **Reroute Signature Screen**:
   - `REROUTE REQUIRED` banner with amber attention badge.
   - Diagnostic metadata grid: Current State, Issue, Evidence sources, Confidence.
   - Next safe action callout.
   - Side-by-side discrepancy comparator with highlighted values.
   - Recovery actions: `USE POLICY VALUE`, `USE DOCUMENT VALUE`, `REQUEST HUMAN REVIEW`.
   - Continuous context guarantee: *"Your progress is fully preserved."*
