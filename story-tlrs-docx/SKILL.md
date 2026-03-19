---
name: story-tlrs-docx
description: >
  Create professional Word (.docx) documents following Story TLRS brand identity.
  Use this skill ALWAYS when Petr wants any formal document that should carry the Story TLRS
  visual identity — nabídky, briefy, proposals, pricing documents, partner materials, client
  handouts, scopes of work, summaries. Also use when converting task descriptions, meeting notes,
  or ClickUp content into a polished branded document. Trigger on: "udělej z toho docx", "vytvoř
  dokument", "nabídka jako word", "brief pro klienta", "pricing doc", "udělej z toho dokument",
  "připrav podklady", "shrň to do wordu". If the output should look professional and carry the
  Story TLRS brand, this skill applies.
---

# Story TLRS — DOCX Generator

Create branded `.docx` documents using the Story TLRS visual identity: Black + Blue + Green palette,
Red Hat Display + Young Serif typography, and the component patterns established in the offer
presentation template.

---

## Workflow

### 1. Understand the content

Read the source — ClickUp task description, conversation notes, or raw text. Identify:
- Document type (pricing/offer, brief, report, scope, summary)
- Sections needed
- Any tables, packages, or structured data

### 2. Plan the structure

Map content to components. Typical document patterns:

| Content type         | Component to use                  |
|----------------------|-----------------------------------|
| Service package      | `packageHeader` + bullet list     |
| Price / fee          | Blue-highlighted `TextRun`        |
| Contextual note      | `infoBox` (gray box)              |
| Section opener       | `sectionLabel` + `mixedHeadline`  |
| Activity/hours table | `workBreakdownTable`              |
| Pricing table        | `addOnsTable`                     |
| Tier comparison      | `tierTable`                       |

### 3. Set up the working directory

```bash
WORK=/sessions/relaxed-gracious-ride/docx-work
mkdir -p $WORK && cd $WORK
# Install docx if not present
[ -d node_modules/docx ] || npm install docx
```

### 4. Write the generation script

Start by copying the brand component library:

```bash
cp "/sessions/relaxed-gracious-ride/mnt/Claude Folder/story-tlrs-docx/assets/brand.js" $WORK/brand.js
```

Then write `generate.js` that:
1. Requires `docx` and `./brand.js`
2. Calls brand components to build content
3. Assembles a `Document` with header, footer, and sections
4. Saves to `output.docx`

See `references/brand-api.md` for the full component API and a complete example script.

**Key rules when writing the script:**
- Always set page size explicitly to US Letter (12240 × 15840 DXA)
- Use 1080 DXA margins (≈ 1.5 cm) — `contentWidth = 9360`
- Never use `\n` inside TextRun — use separate Paragraph elements
- Never use unicode bullets manually — always use `LevelFormat.BULLET` with numbering config
- Each bullet reference must be unique per document (use `"b1"`, `"b2"`, `"b3"` etc. per section)
- Tables need dual widths: `columnWidths` array AND `width` on each cell

### 5. Run and validate

```bash
cd /sessions/relaxed-gracious-ride/docx-work
node generate.js && echo "Generated OK"
python3 /sessions/relaxed-gracious-ride/mnt/.skills/skills/docx/scripts/office/validate.py output.docx
```

If validation fails: unpack the docx, inspect the XML error, fix the generate.js, re-run.

```bash
# Unpack for debugging
python3 /sessions/relaxed-gracious-ride/mnt/.skills/skills/docx/scripts/office/unpack.py output.docx unpacked/
```

### 6. Deliver

```bash
DEST="/sessions/relaxed-gracious-ride/mnt/Claude Folder"
cp /sessions/relaxed-gracious-ride/docx-work/output.docx "$DEST/[filename].docx"
```

Provide a `computer://` link so the user can open the file directly.

---

## Fonts

Red Hat Display and Young Serif are installed at:
```
~/.local/share/fonts/storytlrs/
  RedHatDisplay-Regular.ttf
  RedHatDisplay-Medium.ttf
  RedHatDisplay-Bold.ttf
  RedHatDisplay-Black.ttf
  YoungSerif-Regular.ttf
```

And on the user's Mac at `~/Library/Fonts/StoryTLRS/` — Word will find them automatically.

If fonts aren't in VM cache, re-register:
```bash
fc-cache -f ~/.local/share/fonts/storytlrs/
```

---

## Brand Quick Reference

**Colors** (from Story TLRS design-rules.md):

| Token        | Hex       | Usage                                |
|--------------|-----------|--------------------------------------|
| `C_BLACK`    | `000000`  | Primary text, borders, headers       |
| `C_BLUE`     | `33B6FF`  | Price highlights, key insight runs   |
| `C_GREEN`    | `57DC64`  | Section labels (ALL CAPS)            |
| `C_GRAY_BG`  | `E9E9E9`  | Info box fill                        |
| `C_GRAY_BD`  | `595959`  | Info box border, muted text          |
| `C_WHITE`    | `FFFFFF`  | Text on dark backgrounds             |

**Fonts:**

| Role                  | Font             | Size  | Weight    |
|-----------------------|------------------|-------|-----------|
| Headline line 1       | Red Hat Display  | 28pt+ | Bold      |
| Headline line 2       | Young Serif      | 28pt+ | Bold      |
| Section label         | Red Hat Display  | 10pt  | Bold, ALL CAPS, green |
| Body text             | Red Hat Display  | 13pt  | Regular   |
| Package name          | Red Hat Display  | 16pt  | Bold      |
| Price tag             | Red Hat Display  | 22pt  | Bold, blue highlight |
| Table header          | Red Hat Display  | 9pt   | Bold, white on black |
| Info box label        | Red Hat Display  | 10pt  | Bold, CAPS, gray     |

**Visual patterns:**
- Package headers: black background (`000000`), price in blue (`33B6FF`)
- Info boxes: `E9E9E9` fill + `595959` 3pt border
- Section labels: `57DC64` green, ALL CAPS, `Red Hat Display` Bold
- Mixed headline: line 1 = Red Hat Display Bold, line 2 = Young Serif Bold
- Bullet: `●` (U+25CF) via `LevelFormat.BULLET`, 540/300 indent

---

## Reference files

- `references/brand-api.md` — full component API, function signatures, usage examples, and complete example generation script
