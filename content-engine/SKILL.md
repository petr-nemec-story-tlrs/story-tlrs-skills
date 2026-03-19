---
name: content-engine
description: Content engine for transforming raw notes or dictated thoughts into a Substack article and LinkedIn posts, then saving them as tasks in ClickUp (list "Content Outputs", ID 901520606366). Generates both English and Czech versions of all outputs. Use this skill whenever the user pastes notes, raw thoughts, or dictated ideas and wants to generate publishable content. Trigger on phrases like "generuj", "vytvoř obsah", "content engine", "napiš článek", "udělej z toho post", or whenever notes are provided with intent to create written content for publishing.
---

# Content Engine

Transforms raw notes (dictated or typed) into a Substack article and LinkedIn posts, then creates ClickUp tasks for each. Always produces both English and Czech versions.

## Before you start

Read both reference files before generating anything:

1. `references/tone_of_voice.md` — pravidla hlasu a stylu. Non-negotiable, platí pro každé slovo výstupu.
2. `memory/context/content-positioning.md` — strategický positioning (personal brand, audience, 3 pilíře, POV 1-3 s příklady témat a guardrailem). Každý vygenerovaný obsah by měl zapadat do jednoho ze tří pilířů.

**Guardrail pro POV 1 (transparentnost průmyslu):** Obsah na tato témata kritizuje systém, nikdy konkrétní klienty. Před finalizací zkontroluj, zda text nezní jako útok na klientskou stranu.

## Workflow

### Step 1: Understand the notes

Read the user's input carefully. The notes may be messy, stream-of-consciousness, or bullet-point fragments. That's fine. Extract:
- The core argument or observation
- Any specific examples, numbers, or stories
- The implied audience (tech, business, general?) — primární audience jsou CMOs / marketingoví ředitelé
- The emotional register (frustrated, excited, skeptical?)
- Which of the 3 content pillars this maps to (from `memory/context/content-positioning.md`): Pilíř 1 (transparentnost průmyslu), Pilíř 2 (AI v agenturách), Pilíř 3 (leadership). Use this to frame the angle and ensure alignment with the personal brand "The Radical Transparency CEO".

If the notes are very short (under 50 words) or fundamentally ambiguous, ask one clarifying question before proceeding. Don't ask multiple questions.

Also check: has the user explicitly requested a **teaser** LinkedIn post? If yes, generate one as part of Step 3d. Otherwise skip Step 3d.

---

### Step 2: Generate the Substack article (English)

Use the following prompt structure:

```
[Full tone of voice from references/tone_of_voice.md]

Write an article based on these notes.
- CRITICAL: Start with a hook headline that immediately grabs attention. No generic labels.
- CRITICAL: The first paragraph must be a punchy hook. Start in the middle of a thought or a scene. Challenge a common assumption or present a sharp observation. Make the reader need to read the next sentence.
- Use simple Markdown (headers and text only).
- Mix narrative with bullet points, numbered lists, and quotes.
- Include one code block representing an "infographic" (process flow, data table, or comparison).
- Do not summarize. Do not explain your writing process.

Notes:
[USER NOTES]
```

Write the full article directly in the response. Target 600-1200 words.

---

### Step 2b: Generate the Substack article (Czech)

After writing the English article, generate a full Czech version. This is not a mechanical translation — adapt naturally:
- Keep the same structure, examples, and code block.
- Voice: stejně přímý, tech-optimist, brutálně upřímný, ich-forma ("já", "my").
- Apply the same anti-AI rules: žádné em-dashe, žádné tučné v odstavcích, žádné formulové kontrasty.
- Headers: lowercase, znějí jako myšlenky, ne jako kategorie.
- First paragraph: stejně punchy, nastupte doprostřed scény nebo myšlenky.
- Target: 600-1200 slov.

---

### Step 2c: Generate SEO metadata (Substack EN only)

After the English article, generate three SEO elements. Substack is English-only — no Czech version needed here.

**SEO Title** (50-60 characters):
- Lead with the primary keyword or the sharpest version of the argument
- Avoid clickbait but make it specific and compelling
- Do not just repeat the article headline — rework it for search intent
- Present 2 options, recommend one with a short reason

**Meta Description** (150-160 characters):
- Summarize the core argument in one punchy sentence
- Include the key hook or the most concrete detail from the article
- Should make someone want to click — not just describe, but entice
- Present 2 options, recommend one

**Substack tags** (5-7 tags):
- Mix: 1-2 broad discovery tags (e.g. `marketing`, `business`) + 3-5 specific niche tags
- Reflect both the topic and the audience
- Lowercase, concise, no hashtag symbol

Append these three elements to:
- The **Substack EN ClickUp task description** after the article markdown, under a `---` separator and `## SEO` header
- The **EN Substack markdown file** with the same separator and header at the end

Format for both:

```
---

## SEO

**SEO Title (recommended):** [title]
*(alt: [title 2])*

**Meta Description (recommended):** [description]
*(alt: [description 2])*

**Tags:** [tag1], [tag2], [tag3], [tag4], [tag5]
```

---

### Step 2d: Generate Substack cover banner

After writing the article and SEO metadata, generate the Substack cover image as an HTML file (with embedded SVG) and render it to PNG.

**Full design rules are in:** `memory/context/visual-identity.md`

#### 2d-1: Determine accent color from topic

Read the article topic and map to one accent color:

| Topic area | Accent color |
|------------|--------------|
| Marketing, business, sales, ethics, pitch, agency | `#E03420` (Vermillion) |
| Strategy, growth, leadership, product, innovation | `#E8920A` (Amber) |
| Technology, AI, data, engineering, automation | `#1E45D4` (Cobalt) |
| Sustainability, culture, people, wellbeing | `#1A6B3A` (Forest) |

One color only. If ambiguous, use Vermillion as default.

#### 2d-2: Determine central symbol

Choose a single large character or short string (max 2 chars) for the "brain area" of the head silhouette.

| Article theme | Symbol |
|---------------|--------|
| Money, pricing, value, ROI | `$` |
| Questions, strategy, uncertainty | `?` |
| AI, machine learning, automation | `AI` |
| Data, percentages, analytics | `%` |
| Growth, progress, performance | `↑` |
| Failure, risk, warning | `✗` |
| Infinite loops, patterns, recurring | `∞` |
| Time, deadlines, urgency | `⌛` |
| Default / general | `$` |

#### 2d-3: Prepare text slots

Extract from the article:
- **Headline word**: One uppercase word (4–7 letters) that is the core concept. Examples: PITCH, BRIEF, SCALE, TRUST, CHURN, FOCUS. If no single word fits, use two words max.
- **Subtitle line 1**: 2–3 words, uppercase, topic area. E.g. "FREE LABOR" / "DARK PATTERNS"
- **Subtitle line 2**: 2–3 words, uppercase, subtopic or angle. E.g. "DARK PATTERNS" / "AI RISK"
- **Description line 1**: Short phrase, sentence case, 5–8 words. E.g. "How the marketing industry exploits"
- **Description line 2**: Continuation, 5–8 words. E.g. "agencies through unpaid creative work"
- **Category tags**: 3 tags, uppercase, separated by · . E.g. "MARKETING · ETHICS · AGENCY"
- **Issue number**: Derive from ClickUp task creation or use "001" as default. Format: "No. 001 · 2026"
- **Ghost number**: "01" (or sequential article number if known)

#### 2d-4: Write the HTML cover file

Write the full HTML file to:
`/sessions/.../mnt/Claude Folder/Content engine/[slug]-cover.html`

Use this template structure (fill in the variable slots from steps above):

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Substack Cover — [HEADLINE]</title>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #D0CCC8; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh; gap: 20px; padding: 40px; }
  button { padding: 10px 24px; font-size: 14px; cursor: pointer; background: #111; color: white; border: none; letter-spacing: 2px; font-family: monospace; }
  button:hover { background: [ACCENT_COLOR]; }
</style>
</head>
<body>

<svg id="cover" width="1200" height="630" viewBox="0 0 1200 630"
  xmlns="http://www.w3.org/2000/svg" style="display:block; max-width:100%; box-shadow: 0 4px 32px rgba(0,0,0,0.25);">

  <!-- WHITE BORDER -->
  <rect width="1200" height="630" fill="white"/>

  <!-- GREIGE CANVAS -->
  <rect x="28" y="20" width="1144" height="590" fill="#B0ACA5"/>

  <!-- BACKGROUND GRID -->
  <line x1="28" y1="315" x2="828" y2="315" stroke="#A09990" stroke-width="0.5" opacity="0.4"/>
  <line x1="428" y1="20" x2="428" y2="610" stroke="#A09990" stroke-width="0.5" opacity="0.4"/>

  <!-- HEAD PROFILE — flat black, facing right -->
  <path fill="#111111" d="
    M 442 146
    C 492 132, 560 152, 600 186
    C 626 210, 636 234, 628 252
    C 631 265, 638 280, 645 298
    C 652 315, 668 330, 672 340
    C 664 355, 646 364, 640 372
    C 646 388, 647 407, 638 422
    C 622 446, 602 464, 576 478
    C 550 490, 522 498, 498 498
    L 460 498
    C 430 498, 404 482, 384 460
    C 357 428, 340 392, 330 355
    C 317 312, 318 270, 326 232
    C 337 192, 362 165, 396 153
    C 417 147, 432 145, 442 146
    Z
  "/>

  <!-- CENTRAL SYMBOL — brain area -->
  <text
    x="450" y="275"
    font-family="Arial Black, Impact, sans-serif"
    font-size="122"
    font-weight="900"
    fill="[ACCENT_COLOR]"
    text-anchor="middle"
    dominant-baseline="middle"
  >[SYMBOL]</text>

  <!-- VERTICAL RULE -->
  <line x1="830" y1="44" x2="830" y2="586" stroke="#111111" stroke-width="1.3"/>

  <!-- RIGHT PANEL: TYPOGRAPHY -->

  <!-- Issue tag -->
  <text x="853" y="72"
    font-family="Courier New, monospace" font-size="10"
    fill="#111111" letter-spacing="3" opacity="0.6"
  >[ISSUE_TAG]</text>

  <!-- Accent bar -->
  <rect x="853" y="84" width="38" height="4" fill="[ACCENT_COLOR]"/>

  <!-- Main headline -->
  <text x="853" y="188"
    font-family="Arial Black, Impact, sans-serif"
    font-size="92" font-weight="900"
    fill="#111111" letter-spacing="-2"
  >[HEADLINE]</text>

  <!-- Rule under headline -->
  <line x1="853" y1="204" x2="1148" y2="204" stroke="#111111" stroke-width="1.2"/>

  <!-- Subtitle line 1 -->
  <text x="853" y="242"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18" font-weight="400"
    fill="#111111" letter-spacing="6"
  >[SUBTITLE_1]</text>

  <!-- Subtitle line 2 -->
  <text x="853" y="268"
    font-family="Arial, Helvetica, sans-serif"
    font-size="18" font-weight="400"
    fill="#111111" letter-spacing="6"
  >[SUBTITLE_2]</text>

  <!-- Thin rule -->
  <line x1="853" y1="292" x2="1040" y2="292" stroke="#111111" stroke-width="0.7" opacity="0.4"/>

  <!-- Description -->
  <text x="853" y="325"
    font-family="Courier New, monospace" font-size="10.5"
    fill="#111111" letter-spacing="0.8" opacity="0.7"
  >[DESC_LINE_1]</text>
  <text x="853" y="342"
    font-family="Courier New, monospace" font-size="10.5"
    fill="#111111" letter-spacing="0.8" opacity="0.7"
  >[DESC_LINE_2]</text>

  <!-- Dot trio -->
  <circle cx="853" cy="400" r="2" fill="[ACCENT_COLOR]"/>
  <circle cx="868" cy="400" r="2" fill="[ACCENT_COLOR]" opacity="0.5"/>
  <circle cx="883" cy="400" r="2" fill="[ACCENT_COLOR]" opacity="0.25"/>

  <!-- Category tags -->
  <text x="853" y="440"
    font-family="Courier New, monospace" font-size="9.5"
    fill="[ACCENT_COLOR]" letter-spacing="2.5"
  >[CATEGORY_TAGS]</text>

  <!-- Ghost number -->
  <text x="880" y="560"
    font-family="Arial Black, sans-serif" font-size="140"
    font-weight="900" fill="#A09990" opacity="0.18"
    letter-spacing="-4"
  >[GHOST_NUMBER]</text>

  <!-- Brand lockup -->
  <rect x="853" y="552" width="11" height="11" fill="[ACCENT_COLOR]"/>
  <text x="870" y="561"
    font-family="Courier New, monospace" font-size="9.5"
    fill="#111111" letter-spacing="2.5" dominant-baseline="middle"
  >STORY TLRS</text>

  <!-- LEFT PANEL: ANNOTATIONS -->

  <!-- Annotation 1: cognitive/concept -->
  <line x1="545" y1="250" x2="672" y2="192"
    stroke="[ACCENT_COLOR]" stroke-width="0.9" stroke-dasharray="4 3"/>
  <circle cx="545" cy="250" r="2.5" fill="[ACCENT_COLOR]"/>
  <text x="677" y="190"
    font-family="Courier New, monospace" font-size="8.5"
    fill="[ACCENT_COLOR]" letter-spacing="1.5"
  >[ANNOTATION_1]</text>

  <!-- Annotation 2: output/consequence -->
  <line x1="581" y1="450" x2="682" y2="480"
    stroke="#111111" stroke-width="0.7" stroke-dasharray="3 3"/>
  <circle cx="581" cy="450" r="2" fill="#111111" opacity="0.5"/>
  <text x="686" y="482"
    font-family="Courier New, monospace" font-size="8.5"
    fill="#111111" letter-spacing="1.5" opacity="0.55"
  >[ANNOTATION_2]</text>

  <!-- Left margin dots -->
  <circle cx="45" cy="210" r="2.2" fill="#111111" opacity="0.4"/>
  <circle cx="45" cy="225" r="2.2" fill="#111111" opacity="0.4"/>
  <circle cx="45" cy="240" r="2.2" fill="#111111" opacity="0.4"/>

  <!-- Bottom left: vol / date -->
  <text x="46" y="568"
    font-family="Courier New, monospace" font-size="9.5"
    fill="#111111" letter-spacing="2" opacity="0.5"
  >VOL. 01 / 2026</text>

  <!-- Top right counter -->
  <text x="1148" y="54"
    font-family="Courier New, monospace" font-size="9.5"
    fill="#111111" letter-spacing="2" text-anchor="end" opacity="0.45"
  >[GHOST_NUMBER]</text>

</svg>

<button onclick="downloadPNG()">DOWNLOAD PNG</button>

<script>
function downloadPNG() {
  const svg = document.getElementById('cover');
  const svgData = new XMLSerializer().serializeToString(svg);
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0);
    const link = document.createElement('a');
    link.download = 'substack-cover-[slug].png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };
  const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
  img.src = URL.createObjectURL(svgBlob);
}
</script>
</body>
</html>
```

**Replace all `[PLACEHOLDER]` values** with content derived from steps 2d-1 through 2d-3 above.

For annotations, derive two short labels from the article:
- Annotation 1 (accent color, upper right of head): The cognitive/psychological driver in the article. E.g. "COGNITIVE BIAS", "SUNK COST", "LOSS AVERSION", "SOCIAL PROOF"
- Annotation 2 (black, lower right of head): The outcome or consequence. E.g. "EXPLOITATION", "CHURN", "REVENUE LOSS", "BURNOUT"

#### 2d-5: Render PNG

After writing the HTML file, also extract the SVG content and render to PNG using cairosvg:

```python
import cairosvg, re

# Read the HTML file
with open('/sessions/.../mnt/Claude Folder/Content engine/[slug]-cover.html', 'r') as f:
    html = f.read()

# Extract SVG block
svg_match = re.search(r'<svg.*?</svg>', html, re.DOTALL)
svg_content = svg_match.group(0) if svg_match else ''

# Wrap in full SVG document with xmlns
full_svg = f'<?xml version="1.0" encoding="UTF-8"?>\n{svg_content}'

# Write temp SVG
with open('/tmp/cover_temp.svg', 'w') as f:
    f.write(full_svg)

# Render PNG
cairosvg.svg2png(url='/tmp/cover_temp.svg', write_to='/sessions/.../mnt/Claude Folder/Content engine/[slug]-cover.png', output_width=1200, output_height=630)
```

Output files:
- `[slug]-cover.html` — editable SVG-in-HTML source
- `[slug]-cover.png` — ready-to-upload 1200×630 PNG

Present both to the user at the end of Step 5.

---

### Step 3: Analyze article for LinkedIn post types

Before writing LinkedIn posts, scan the English article:

1. Count meaningful H2 sections (## headers) that each carry a distinct, standalone observation.
2. If there are **2 or more such sections** that can stand completely alone as independent observations, generate **angle posts** (Step 3c), up to 2 angle posts.
3. Always generate the **main self-contained post** (Step 3b).
4. Only generate a **teaser post** (Step 3d) if the user explicitly requested it.

---

### Step 3b: Main LinkedIn post (always)

Generate the main post in English first, then Czech immediately after.

**English:**
```
[Full tone of voice from references/tone_of_voice.md]

Write a self-contained LinkedIn post based on the notes and article context.
- The post must deliver complete value on its own. No mention of any article. No "read more" or links.
- Use a strong "Hook: [statement]" pattern for the first line.
- Summarize the main value using bullet points.
- No excessive line breaks between every single sentence.
- End with an engagement question or invitation to discuss.
- No hashtags in the middle. Hashtags only at the very end if needed (max 3).

Notes:
[USER NOTES]

Article Context:
[ARTICLE YOU JUST WROTE]
```

Target 150-300 words.

**Czech:** After the English version, generate a Czech adaptation:
- Same structure, same "Hook: [statement]" label, content in Czech.
- Adapt the voice naturally: přímý, reflektivní, ich-forma.
- Same anti-AI rules apply.
- Target 150-300 slov.

---

### Step 3c: Angle posts (only if 2+ qualifying H2 sections)

For each qualifying section (max 2), generate one angle post in English, then its Czech version immediately after.

**English:**
```
[Full tone of voice from references/tone_of_voice.md]

Write a self-contained LinkedIn post about this specific observation: [H2 topic from article].
- The post must stand completely alone. No reference to any article, series, or other posts.
- One focused idea only. Don't try to cover the whole article.
- Use a strong "Hook: [statement]" opener.
- End with an engagement question.
- Target 100-250 words.
```

**Czech:** Same adaptation rules as Step 3b Czech.

ClickUp task naming:
- EN: `💼 [Hook line] — angle: [topic]`
- CZ: `💼 [Hook line CZ] — angle: [topic CZ]`

---

### Step 3d: Teaser post (only if explicitly requested)

Generate English teaser, then Czech immediately after.

**English:**
```
[Full tone of voice from references/tone_of_voice.md]

Write a teaser LinkedIn post that creates a curiosity gap.
- Hook opener that raises a question or tension.
- Give just enough to make the reader want more — but don't resolve it.
- End with exactly: "Full breakdown in the article. Link in comments."
- No actual URL.
- Target 100-180 words.
```

**Czech:** Same curiosity gap structure. Czech ending: "Celý rozbor v článku. Odkaz v komentářích."

ClickUp task naming:
- EN: `💼 [Hook line] — teaser`
- CZ: `💼 [Hook line CZ] — teaser`

---

### Step 4: Save to ClickUp

Create one ClickUp task per output in list **901520606366** ("Content Outputs").

Use `clickup_create_task` with `list_id: "901520606366"` for all tasks.

**Platform custom field — set on every task:**
- Field ID: `230229bd-edba-42b2-bb91-8d4dabbf16f1`
- Substack option: `23761f90-4b15-4f88-83d5-14f3bc7bfa76`
- LinkedIn option: `3d3a00a9-7ace-4fe8-a2c3-2c12c2841fba`

**Tasks to create (always):**

| Task | Name | Description | Platform field |
|------|------|-------------|----------------|
| Substack EN | `📝 [EN headline]` | Full EN article markdown + SEO section (from Step 2c) | Substack |
| Substack CZ | `📝 [CZ headline] — CZ` | Full CZ article markdown | Substack |
| LinkedIn main EN | `💼 [EN hook line]` | Full EN LinkedIn post | LinkedIn |
| LinkedIn main CZ | `💼 [CZ hook line] — CZ` | Full CZ LinkedIn post | LinkedIn |

**Additional tasks (conditional):**
- For each angle post: one EN task + one CZ task (use naming from Step 3c)
- For teaser: one EN task + one CZ task (use naming from Step 3d)

All tasks: status default (open), no due date unless user specifies.

---

### Step 5: Save files and present

Save all outputs as markdown files to:
`/sessions/.../mnt/Claude Folder/Content engine/`

**File naming:**
- `[slug]-substack-en.md`
- `[slug]-substack-cz.md`
- `[slug]-linkedin-main-en.md`
- `[slug]-linkedin-main-cz.md`
- `[slug]-linkedin-angle-1-en.md` / `[slug]-linkedin-angle-1-cz.md` (if generated)
- `[slug]-linkedin-angle-2-en.md` / `[slug]-linkedin-angle-2-cz.md` (if generated)
- `[slug]-linkedin-teaser-en.md` / `[slug]-linkedin-teaser-cz.md` (if requested)
- `[slug]-cover.html` — SVG cover source (from Step 2d)
- `[slug]-cover.png` — rendered 1200×630 PNG (from Step 2d)

Where `[slug]` is a short kebab-case version of the EN headline (e.g., `ai-tools-dont-replace-thinking`).

Then present all files and ClickUp task links to the user. Cover image files (`[slug]-cover.html` and `[slug]-cover.png`) are always included.

---

## Quality checklist (run mentally before finalizing)

**All outputs (EN + CZ):**
- [ ] No em-dashes ("—") anywhere
- [ ] No bolded words inside paragraph text
- [ ] No "It's not about X, it's about Y" patterns
- [ ] Headers sound like thoughts, not category labels

**English outputs:**
- [ ] Article does NOT start with "In a world where..."
- [ ] First paragraph starts mid-thought or mid-scene
- [ ] At least one code block / infographic in Substack article

**LinkedIn posts:**
- [ ] Every LinkedIn post starts with "Hook: [statement]"
- [ ] Main and angle posts are completely self-contained (no article mention, no link)
- [ ] Angle posts reference only their own topic, not the broader article
- [ ] Teaser (if generated) ends with "Full breakdown in the article. Link in comments." / CZ: "Celý rozbor v článku. Odkaz v komentářích." — no actual URL

**SEO (Substack EN):**
- [ ] SEO Title: 2 options presented, one recommended, 50-60 chars
- [ ] Meta Description: 2 options presented, one recommended, 150-160 chars
- [ ] Tags: 5-7 tags, mix of broad + niche
- [ ] SEO block appended to EN Substack ClickUp task description and markdown file

**ClickUp:**
- [ ] Platform custom field set on every task
- [ ] EN and CZ tasks both created for every output type
- [ ] All tasks in list 901520606366

---

## Output format (present to user)

After generating, present like this:

```
**Substack article (EN):** [headline]
**Substack article (CZ):** [headline CZ]

**SEO (EN Substack):**
- SEO Title: [recommended title]
- Meta Description: [recommended description]
- Tags: [tag list]

**LinkedIn posts generated:**
- Main (EN + CZ)
- Angle posts (EN + CZ): [n] posts — topics: [list]
- Teaser (EN + CZ): yes / not requested

Cover image:
- Accent color: [COLOR NAME] ([HEX])
- Symbol: [SYMBOL]
- HTML: [slug]-cover.html
- PNG: [slug]-cover.png (1200×630, ready to upload)

Saved to ClickUp:
- [task links list]

Files:
- [file links list]
```
