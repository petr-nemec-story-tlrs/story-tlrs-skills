# Story TLRS Brand API

Full reference for all components in `assets/brand.js`.

---

## Setup

```javascript
const fs = require('fs');
const B = require('./brand.js');
// B contains all components + re-exports from docx package
```

---

## Constants

```javascript
B.C.BLACK   // "000000" — primary text, borders, package headers
B.C.BLUE    // "33B6FF" — price highlights, key insight runs
B.C.GREEN   // "57DC64" — section labels (always ALL CAPS)
B.C.GRAY_BG // "E9E9E9" — info box fill
B.C.GRAY_BD // "595959" — info box border, muted text
B.C.WHITE   // "FFFFFF"
B.C.MUTED   // "555555" — footer, secondary labels

B.F.RHD     // "Red Hat Display" — primary sans-serif
B.F.YS      // "Young Serif"     — accent serif (headline line 2)

B.CONTENT_WIDTH // 9360 DXA — use for table widths
```

---

## Typography Components

### `sectionLabel(text)`
Green ALL-CAPS label — section opener, above headlines or content blocks.
```javascript
B.sectionLabel("What's included")
// → "WHAT'S INCLUDED" in green Red Hat Display 10pt Bold
```

### `mixedHeadline(line1, line2, sizePt?)`
Two-line dual-font headline. Returns **array** — must be spread.
```javascript
...B.mixedHeadline("Market Audit +", "First Social Test.", 28)
// Line 1: Red Hat Display Bold 28pt
// Line 2: Young Serif Bold 28pt
```
For a single-line headline, pass `null` as line2.

### `bodyText(text)`
Standard body paragraph — Red Hat Display 13pt.
```javascript
B.bodyText("This is a regular paragraph of body copy.")
```

### `bodyHighlight(before, highlight, after?)`
Body text with an inline blue-highlighted keyword.
```javascript
B.bodyHighlight("Minimum ad spend: ", "€600 on Meta Ads", " (not included in fee).")
```

### `bulletItem(text, ref)`
Bullet list item with `●` character. Each section uses a unique ref.
```javascript
B.bulletItem("Competitor audit: 3 direct competitors", "b1")
B.bulletItem("Meta Ads campaign setup and management", "b1")
```

### `spacer(before?, after?)`
Empty vertical spacing paragraph. Default 60/60 DXA.
```javascript
B.spacer()          // default 60/60
B.spacer(120, 40)   // custom
```

### `rule()`
Thin black horizontal rule, 200/200 DXA spacing.
```javascript
B.rule()
```

### `pageBreak()`
Hard page break.
```javascript
B.pageBreak()
```

---

## Block Components

### `infoBox(label, content)`
Gray box with border — for contextual notes, min spend, who it's for.
```javascript
B.infoBox("Minimum Ad Spend", "€600 on Meta Ads — minimum to exit Meta's learning phase (~€20/day).")
B.infoBox("Who it's for", "A client ready to test paid channels without long-term commitment.")
```

### `packageHeader(number, subtitle, duration, price)`
Black-background header block with blue price tag — for service packages.
```javascript
B.packageHeader("01", "ENTRY",    "4 weeks",  "€1,800")
B.packageHeader("02", "ACTIVATE", "6 weeks",  "€4,500")
B.packageHeader("03", "LAUNCH",   "3 months", "€14,500")
```

### `workBreakdownTable(rows)`
Activity/Hours table. Last row = total (auto-styled in gray).
```javascript
B.workBreakdownTable([
  ["Competitor audit (3 competitors)", "8h"],
  ["Meta Ads setup + 4-week management", "6.5h"],
  ["1-pager deliverable", "2h"],
  ["Total", "~16.5h × €80 = €1,320 → €1,500"],
])
```

### `twoColumnTable(rows, col1Label, col2Label, col1Ratio?, isPrice?)`
General two-column table. Set `isPrice = true` to render col2 values in blue.
```javascript
// Add-ons table (price in blue)
B.twoColumnTable([
  ["TikTok Ads management",          "€600/month"],
  ["Organic social pack (8 posts)",  "€900/month"],
], "Service", "Price", 0.68, true)

// Regular two-column (no price highlight)
B.twoColumnTable([
  ["Platform", "Meta Ads + Google Ads"],
  ["Duration", "6 weeks"],
], "Parameter", "Value", 0.4, false)
```

---

## Document Setup

### `standardHeader(title, subtitle?)`
Document header with black bottom rule.
```javascript
B.standardHeader("Czech Market Entry Packages", "LouderHigher partnership")
B.standardHeader("Client Brief — Carporio")
```

### `standardFooter(note?)`
Document footer with black top rule + page number.
```javascript
B.standardFooter("All fees at €80/hr · Ad spend separate, invoiced at cost")
B.standardFooter() // page number only
```

### `createBulletNumbering(count)`
Creates `count` bullet refs (b1…bN) for use in Document numbering config.
```javascript
numbering: { config: B.createBulletNumbering(6) }
// Then use: B.bulletItem("text", "b1"), B.bulletItem("text", "b2"), etc.
// Each section should use a different ref so lists don't continue across sections.
```

### `defaultDocumentStyles()`
Standard heading + body styles for Red Hat Display / Young Serif.

### `defaultPageProperties()`
US Letter 12240×15840 DXA, 1080 DXA margins.

---

## Complete Example Script

```javascript
// generate.js — minimal Story TLRS document
const fs = require('fs');
const B = require('./brand.js');

const doc = new B.Document({
  numbering: { config: B.createBulletNumbering(4) },
  styles: B.defaultDocumentStyles(),
  sections: [{
    properties: B.defaultPageProperties(),
    headers:  { default: B.standardHeader("Document Title", "Client Name") },
    footers:  { default: B.standardFooter("Story TLRS · Confidential") },
    children: [

      // Cover
      B.spacer(400, 80),
      new B.Paragraph({
        children: [
          new B.TextRun({ text: "STORY ", bold: true, size: 72, font: B.F.YS,  color: B.C.BLACK }),
          new B.TextRun({ text: "TLRS",   bold: true, size: 72, font: B.F.RHD, color: B.C.BLACK }),
        ]
      }),
      new B.Paragraph({
        spacing: { before: 60, after: 300 },
        children: [new B.TextRun({ text: "Document Title", bold: true, size: 40, font: B.F.YS, color: B.C.BLACK })]
      }),
      B.rule(),

      // Package section
      B.pageBreak(),
      B.packageHeader("01", "ENTRY", "4 weeks", "€1,800"),
      B.spacer(100, 40),
      ...B.mixedHeadline("Market Audit +", "First Social Test."),
      B.spacer(40, 40),
      B.sectionLabel("What's included"),
      B.bulletItem("Competitor audit: 3 direct competitors on the CZ market", "b1"),
      B.bulletItem("3× ad creative: static format, CZ copy + visual brief", "b1"),
      B.bulletItem("Meta Ads test campaign: 4-week management and optimization", "b1"),
      B.spacer(120, 40),
      B.sectionLabel("Minimum ad spend"),
      B.infoBox("€600 on Meta Ads", "Minimum to exit Meta's learning phase (~€20/day). Below this threshold results are inconclusive."),
      B.spacer(120, 40),
      B.sectionLabel("Work breakdown"),
      B.workBreakdownTable([
        ["Competitor audit", "8h"],
        ["3× ad creative", "4.5h"],
        ["Meta Ads setup + 4-week management", "6.5h"],
        ["Total", "~19h × €80 = €1,520 → €1,800"],
      ]),

    ]
  }]
});

B.Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("output.docx", buf);
  console.log("Done");
}).catch(err => { console.error(err); process.exit(1); });
```

---

## Validation

After generating, always validate:

```bash
python3 /sessions/relaxed-gracious-ride/mnt/.skills/skills/docx/scripts/office/validate.py output.docx
```

Expected output: `All validations PASSED!`

If it fails, unpack and inspect:
```bash
python3 /sessions/relaxed-gracious-ride/mnt/.skills/skills/docx/scripts/office/unpack.py output.docx unpacked/
# Read unpacked/word/document.xml to find the error
```
