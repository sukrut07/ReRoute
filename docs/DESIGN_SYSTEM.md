# Reroute Design System: Minimal Neo-Brutalist Fintech AI System

## 1. Visual Philosophy & Direction
Reroute adopts a **clean neo-brutalist fintech design language** balancing high-contrast editorial discipline with structured engineering precision (inspired by contemporary interfaces like Tracera and Pressera).

- **Editorial & Structured**: Explicit grid alignments, prominent uppercase monospace metadata, disciplined spacing.
- **Confident & Trustworthy**: Strong borders and hard controlled depth rather than blurry soft shadows or chaotic gradients.
- **Fintech Utility First**: Designed for financial journey orchestration with real-time evidence inspection and in-place recovery.
- **Restrained Motion**: Subtle micro-interactions only; disabled automatically under `prefers-reduced-motion`.

---

## 2. Color Palette & Tokens

| Token | Hex Value | Semantic Role |
| :--- | :--- | :--- |
| **Canvas Background** | `#F5F3EE` | Warm, off-white technical paper background |
| **Surface Card** | `#FFFFFF` / `#FAF9F5` | Off-white / crisp white bordered panels |
| **Primary Ink** | `#101010` | High-contrast text, borders, headers |
| **Secondary Ink** | `#555555` | Supporting descriptions, metadata keys |
| **Primary Accent** | `#20C77A` | Vivid fintech green: Verified states, primary action CTA, success |
| **Secondary Accent** | `#6F5CFF` | Electric violet: Optional secondary system emphasis |
| **Warning / Attention** | `#F2A900` | Amber gold: Conflicts requiring customer confirmation, medium risk |
| **Danger / Blocker** | `#E85C65` | Crimson: Mismatch alerts, blocked validation |

---

## 3. Typography Hierarchy

- **Primary Sans**: `Space Grotesk`, `Inter`, system-ui (bold, authoritative headers and readable body text).
- **Technical Monospace**: `DM Mono`, `JetBrains Mono` (technical labels, timestamps, confidence scores, case IDs).

### Labeling Rules:
Uppercase monospace tags are strictly required for:
- Case IDs (e.g., `CASE #R-1024`)
- Journey step markers (e.g., `STEP 4 / 6`)
- System state diagnostics (e.g., `CURRENT STATE: Verification blocked`)
- Confidence ratings (e.g., `CONFIDENCE 96%`)
- Timestamps and policy rule citations (e.g., `VER-RULE-2026-V1`)

---

## 4. Structural Grid & Shadows

- **Desktop Layout**: 12-column responsive grid container with max-width `1440px`.
- **Borders**: Crisp `2px solid #101010` (or `1px` subtle divider borders).
- **Corner Radii**: Controlled `8px–14px` (`rounded-md` / `rounded-lg`). Large bubble radiuses (`25px+`) are prohibited.
- **Shadows**: Hard-offset offset shadows:
  - Standard Card: `box-shadow: 4px 4px 0px #101010;`
  - Small Badge / Button: `box-shadow: 2px 2px 0px #101010;`
  - Accent Button Hover: `box-shadow: 5px 5px 0px #101010;` with `-1px, -1px` translation.

---

## 5. Signature Component Contracts

1. **Reroute Signature Screen**:
   - `REROUTE REQUIRED` banner with amber attention badge.
   - Diagnostic metadata grid: Current State, Issue, Evidence sources, Confidence.
   - Next safe action callout.
   - Side-by-side discrepancy cards with clear user choice (`USE POLICY VALUE`, `USE DOCUMENT VALUE`, `REQUEST HUMAN REVIEW`).
   - Reassurance reassurance banner: `"YOUR JOURNEY WILL NOT RESTART."`

2. **Explainability Drawer**:
   - Slides out from the right on any `"WHY?"` click.
   - Plain-language explanation, policy clause quotation, confidence gauge, and next safe action.

3. **Journey Rail**:
   - Sequential progress indicators (`✓ Goal`, `✓ Policy`, `✓ Claim Details`, `● Documents`, `○ Verification`, `○ Completion`).
