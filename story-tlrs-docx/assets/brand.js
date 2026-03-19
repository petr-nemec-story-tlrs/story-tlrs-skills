/**
 * Story TLRS — Brand Component Library for DOCX
 * Usage: const B = require('./brand.js');
 *
 * Implements the Story TLRS visual identity:
 *   Fonts:  Red Hat Display (sans) + Young Serif (accent serif)
 *   Colors: Black #000000, Blue #33B6FF, Green #57DC64,
 *           Gray fill #E9E9E9, Gray border #595959
 */

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, LevelFormat, PageBreak
} = require('docx');

// ─── BRAND TOKENS ────────────────────────────────────────────────────────────
const C = {
  BLACK:   "000000",
  BLUE:    "33B6FF",
  GREEN:   "57DC64",
  GRAY_BG: "E9E9E9",
  GRAY_BD: "595959",
  WHITE:   "FFFFFF",
  MUTED:   "555555",
  DARK2:   "1A1A1A",
};

const F = {
  RHD: "Red Hat Display",
  YS:  "Young Serif",
};

const CONTENT_WIDTH = 9360; // US Letter with 1080 DXA margins

// ─── BORDER HELPERS ───────────────────────────────────────────────────────────
function brd(color = C.MUTED, size = 1) {
  return { style: BorderStyle.SINGLE, size, color };
}
function noBrd() {
  return { style: BorderStyle.NONE, size: 0, color: C.WHITE };
}
const allBorders = (color, size = 1) => ({
  top: brd(color, size), bottom: brd(color, size),
  left: brd(color, size), right: brd(color, size),
});
const noBorders = () => ({
  top: noBrd(), bottom: noBrd(), left: noBrd(), right: noBrd(),
});

// ─── TYPOGRAPHY COMPONENTS ───────────────────────────────────────────────────

/**
 * sectionLabel(text)
 * ALL CAPS green label — used as a section opener above headings.
 * Renders: "WHAT'S INCLUDED" in green Red Hat Display 10pt Bold.
 */
function sectionLabel(text) {
  return new Paragraph({
    spacing: { before: 0, after: 80 },
    children: [new TextRun({
      text: text.toUpperCase(),
      bold: true, size: 20, font: F.RHD, color: C.GREEN,
    })],
  });
}

/**
 * mixedHeadline(line1, line2, sizePt = 28)
 * Two-line dual-font headline: line1 = Red Hat Display Bold, line2 = Young Serif Bold.
 * Returns an array of Paragraphs — spread into children: [...mixedHeadline(...)].
 */
function mixedHeadline(line1, line2, sizePt = 28) {
  const sz = sizePt * 2;
  const lines = [
    new Paragraph({
      spacing: { before: 0, after: 0 },
      children: [new TextRun({ text: line1, bold: true, size: sz, font: F.RHD, color: C.BLACK })],
    }),
  ];
  if (line2) {
    lines.push(new Paragraph({
      spacing: { before: 0, after: 140 },
      children: [new TextRun({ text: line2, bold: true, size: sz, font: F.YS, color: C.BLACK })],
    }));
  }
  return lines;
}

/**
 * bodyText(text)
 * Standard body paragraph — Red Hat Display 13pt.
 */
function bodyText(text) {
  return new Paragraph({
    spacing: { before: 120, after: 60 },
    children: [new TextRun({ text, size: 26, font: F.RHD, color: C.BLACK })],
  });
}

/**
 * bodyHighlight(before, highlight, after?)
 * Body text with an inline blue-highlighted keyword.
 * DOCX named highlight "cyan" is the closest to #33B6FF.
 */
function bodyHighlight(before, highlight, after = "") {
  return new Paragraph({
    spacing: { before: 120, after: 60 },
    children: [
      new TextRun({ text: before, size: 26, font: F.RHD, color: C.BLACK }),
      new TextRun({ text: highlight, size: 26, font: F.RHD, color: C.BLACK, highlight: "cyan" }),
      ...(after ? [new TextRun({ text: after, size: 26, font: F.RHD, color: C.BLACK })] : []),
    ],
  });
}

/**
 * bulletItem(text, ref)
 * Bullet list item — ● character, Red Hat Display 11pt.
 * Each section should use a unique ref string ("b1", "b2", etc.)
 * and declare it in the document-level numbering config.
 */
function bulletItem(text, ref) {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, size: 22, font: F.RHD, color: C.BLACK })],
  });
}

/**
 * spacer(before?, after?)
 * Empty paragraph for vertical breathing room.
 */
function spacer(before = 60, after = 60) {
  return new Paragraph({
    spacing: { before, after },
    children: [new TextRun("")],
  });
}

/**
 * rule()
 * Thin black horizontal rule — used as a section divider.
 */
function rule() {
  return new Paragraph({
    spacing: { before: 200, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.BLACK, space: 1 } },
    children: [new TextRun("")],
  });
}

/**
 * pageBreak()
 * Hard page break paragraph.
 */
function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

// ─── BLOCK COMPONENTS ────────────────────────────────────────────────────────

/**
 * infoBox(label, content)
 * Gray box with thick gray border — for contextual notes, min spend, who it's for, etc.
 * Renders: label in CAPS gray, content in regular black below.
 */
function infoBox(label, content) {
  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [CONTENT_WIDTH],
    rows: [new TableRow({
      children: [new TableCell({
        borders: allBorders(C.GRAY_BD, 6),
        shading: { fill: C.GRAY_BG, type: ShadingType.CLEAR },
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        margins: { top: 140, bottom: 140, left: 220, right: 220 },
        children: [
          new Paragraph({
            spacing: { before: 0, after: 60 },
            children: [new TextRun({
              text: label.toUpperCase(), bold: true, size: 20, font: F.RHD, color: C.GRAY_BD,
            })],
          }),
          new Paragraph({
            spacing: { before: 0, after: 0 },
            children: [new TextRun({ text: content, size: 22, font: F.RHD, color: C.BLACK })],
          }),
        ],
      })],
    })],
  });
}

/**
 * packageHeader(number, subtitle, duration, price)
 * Black-background package header with blue price tag.
 *   number:   "01", "02", "03"
 *   subtitle: "ENTRY", "ACTIVATE", "LAUNCH" (or any package name)
 *   duration: "4 weeks", "3 months"
 *   price:    "€1,800", "€14,500"
 */
function packageHeader(number, subtitle, duration, price) {
  const col1 = Math.floor(CONTENT_WIDTH * 0.66);
  const col2 = CONTENT_WIDTH - col1;
  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [col1, col2],
    rows: [new TableRow({
      children: [
        new TableCell({
          borders: noBorders(),
          shading: { fill: C.BLACK, type: ShadingType.CLEAR },
          width: { size: col1, type: WidthType.DXA },
          margins: { top: 180, bottom: 180, left: 260, right: 120 },
          children: [
            new Paragraph({
              spacing: { before: 0, after: 60 },
              children: [new TextRun({
                text: `PACKAGE ${number}`, bold: true, size: 18, font: F.RHD, color: C.MUTED,
              })],
            }),
            new Paragraph({
              spacing: { before: 0, after: 0 },
              children: [new TextRun({
                text: subtitle, bold: true, size: 32, font: F.RHD, color: C.WHITE,
              })],
            }),
          ],
        }),
        new TableCell({
          borders: noBorders(),
          shading: { fill: C.DARK2, type: ShadingType.CLEAR },
          width: { size: col2, type: WidthType.DXA },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 120, bottom: 120, left: 200, right: 200 },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 0, after: 40 },
              children: [new TextRun({
                text: price, bold: true, size: 44, font: F.RHD, color: C.BLUE,
              })],
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 0, after: 0 },
              children: [new TextRun({ text: duration, size: 20, font: F.RHD, color: C.MUTED })],
            }),
          ],
        }),
      ],
    })],
  });
}

/**
 * workBreakdownTable(rows)
 * Two-column Activity/Hours table with black header and gray total row.
 * rows: array of [activityString, hoursString], last row = total.
 *
 * Example:
 *   workBreakdownTable([
 *     ["Competitor audit", "8h"],
 *     ["Meta Ads setup", "3h"],
 *     ["Total", "~11h × €80 = €880"],
 *   ])
 */
function workBreakdownTable(rows) {
  const col1 = Math.floor(CONTENT_WIDTH * 0.73);
  const col2 = CONTENT_WIDTH - col1;

  const makeRow = (act, hrs, isHeader, isTotal) => {
    const bg = isHeader ? C.BLACK : C.WHITE;
    const textColor = isHeader ? C.WHITE : C.BLACK;
    return new TableRow({
      children: [
        new TableCell({
          borders: allBorders(isHeader ? C.BLACK : C.GRAY_BD),
          shading: {
            fill: isTotal ? C.GRAY_BG : bg,
            type: ShadingType.CLEAR,
          },
          width: { size: col1, type: WidthType.DXA },
          margins: { top: 70, bottom: 70, left: 140, right: 140 },
          children: [new Paragraph({
            children: [new TextRun({
              text: act, bold: isHeader || isTotal,
              size: isHeader ? 18 : 20, font: F.RHD,
              color: isTotal ? C.GRAY_BD : textColor,
            })],
          })],
        }),
        new TableCell({
          borders: allBorders(isHeader ? C.BLACK : C.GRAY_BD),
          shading: {
            fill: isTotal ? C.GRAY_BG : bg,
            type: ShadingType.CLEAR,
          },
          width: { size: col2, type: WidthType.DXA },
          margins: { top: 70, bottom: 70, left: 140, right: 140 },
          children: [new Paragraph({
            alignment: isHeader ? AlignmentType.CENTER : AlignmentType.RIGHT,
            children: [new TextRun({
              text: hrs, bold: isHeader || isTotal,
              size: isHeader ? 18 : 20, font: F.RHD,
              color: isTotal ? C.GRAY_BD : textColor,
            })],
          })],
        }),
      ],
    });
  };

  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [col1, col2],
    rows: [
      makeRow("Activity", "Hours", true, false),
      ...rows.slice(0, -1).map(r => makeRow(r[0], r[1], false, false)),
      makeRow(rows[rows.length - 1][0], rows[rows.length - 1][1], false, true),
    ],
  });
}

/**
 * twoColumnTable(rows, col1Label, col2Label, col1Ratio?)
 * General-purpose two-column table — black header, alternating rows.
 * col1Ratio: fraction of CONTENT_WIDTH for col1 (default 0.68).
 * Second column value is rendered in blue if isPrice = true.
 */
function twoColumnTable(rows, col1Label, col2Label, col1Ratio = 0.68, isPrice = false) {
  const col1 = Math.floor(CONTENT_WIDTH * col1Ratio);
  const col2 = CONTENT_WIDTH - col1;

  return new Table({
    width: { size: CONTENT_WIDTH, type: WidthType.DXA },
    columnWidths: [col1, col2],
    rows: [
      new TableRow({
        children: [col1Label, col2Label].map((label, i) => new TableCell({
          borders: allBorders(C.BLACK),
          shading: { fill: C.BLACK, type: ShadingType.CLEAR },
          width: { size: i === 0 ? col1 : col2, type: WidthType.DXA },
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          children: [new Paragraph({
            children: [new TextRun({
              text: label.toUpperCase(), bold: true, size: 18, font: F.RHD, color: C.WHITE,
            })],
          })],
        })),
      }),
      ...rows.map(row => new TableRow({
        children: [
          new TableCell({
            borders: allBorders(C.GRAY_BD),
            shading: { fill: C.WHITE, type: ShadingType.CLEAR },
            width: { size: col1, type: WidthType.DXA },
            margins: { top: 70, bottom: 70, left: 140, right: 140 },
            children: [new Paragraph({
              children: [new TextRun({ text: row[0], size: 22, font: F.RHD, color: C.BLACK })],
            })],
          }),
          new TableCell({
            borders: allBorders(C.GRAY_BD),
            shading: { fill: C.WHITE, type: ShadingType.CLEAR },
            width: { size: col2, type: WidthType.DXA },
            margins: { top: 70, bottom: 70, left: 140, right: 140 },
            children: [new Paragraph({
              children: [new TextRun({
                text: row[1],
                bold: isPrice,
                size: 22, font: F.RHD,
                color: isPrice ? C.BLUE : C.BLACK,
              })],
            })],
          }),
        ],
      })),
    ],
  });
}

/**
 * standardHeader(title, subtitle?)
 * Document header — "STORY TLRS | [title] | [subtitle]" with black bottom rule.
 */
function standardHeader(title, subtitle = "") {
  const parts = ["STORY TLRS", title, subtitle].filter(Boolean);
  return new Header({
    children: [new Paragraph({
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.BLACK, space: 1 } },
      spacing: { before: 0, after: 80 },
      children: [
        new TextRun({ text: "STORY TLRS", bold: true, size: 20, font: F.RHD, color: C.BLACK }),
        ...(title ? [new TextRun({
          text: `  \u2014  ${title}${subtitle ? `  |  ${subtitle}` : ""}`,
          size: 18, font: F.RHD, color: C.MUTED,
        })] : []),
      ],
    })],
  });
}

/**
 * standardFooter(note?)
 * Document footer — optional note + page number with black top rule.
 */
function standardFooter(note = "") {
  return new Footer({
    children: [new Paragraph({
      border: { top: { style: BorderStyle.SINGLE, size: 6, color: C.BLACK, space: 1 } },
      spacing: { before: 80, after: 0 },
      children: [
        ...(note ? [new TextRun({ text: `${note}  \u00b7  Page `, size: 18, font: F.RHD, color: C.MUTED })] : [
          new TextRun({ text: "Page ", size: 18, font: F.RHD, color: C.MUTED }),
        ]),
        new TextRun({ children: [PageNumber.CURRENT], size: 18, font: F.RHD, color: C.MUTED }),
      ],
    })],
  });
}

/**
 * createBulletNumbering(count)
 * Creates `count` bullet numbering configs (refs "b1" through "bN").
 * Pass the result as the `numbering.config` array in your Document.
 *
 * Example:
 *   numbering: { config: createBulletNumbering(5) }
 *   Then use: bulletItem("text", "b1"), bulletItem("text", "b2"), etc.
 */
function createBulletNumbering(count) {
  return Array.from({ length: count }, (_, i) => ({
    reference: `b${i + 1}`,
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: "\u25CF",
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 540, hanging: 300 } } },
    }],
  }));
}

/**
 * defaultDocumentStyles()
 * Standard document style overrides — Red Hat Display body, Arial fallback.
 */
function defaultDocumentStyles() {
  return {
    default: {
      document: { run: { font: F.RHD, size: 22, color: C.BLACK } },
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: F.RHD, color: C.BLACK },
        paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: F.YS, color: C.BLACK },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: F.RHD, color: C.BLACK },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 },
      },
    ],
  };
}

/**
 * defaultPageProperties()
 * US Letter, 1080 DXA margins.
 */
function defaultPageProperties() {
  return {
    page: {
      size: { width: 12240, height: 15840 },
      margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
    },
  };
}

// ─── EXPORTS ─────────────────────────────────────────────────────────────────
module.exports = {
  // Tokens
  C, F, CONTENT_WIDTH,
  // Helpers
  allBorders, noBorders, brd, noBrd,
  // Typography
  sectionLabel, mixedHeadline, bodyText, bodyHighlight,
  bulletItem, spacer, rule, pageBreak,
  // Blocks
  infoBox, packageHeader, workBreakdownTable, twoColumnTable,
  // Document setup
  standardHeader, standardFooter,
  createBulletNumbering, defaultDocumentStyles, defaultPageProperties,
  // Re-export docx for convenience
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, LevelFormat, PageBreak,
};
