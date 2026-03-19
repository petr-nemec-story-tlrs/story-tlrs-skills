# Story TLRS Offer — Slide Catalog

XML structure patterns for every slide type. Reference this file as you build each slide.

## Table of Contents
1. [Common Header Structure](#1-common-header-structure)
2. [Cover Slide](#2-cover-slide)
3. [TOC / Prolog Slide](#3-toc--prolog-slide)
4. [Chapter Divider](#4-chapter-divider)
5. [Text-Heavy Content Slide (38pt)](#5-text-heavy-content-slide-38pt)
6. [Detailed Service Slide (20pt)](#6-detailed-service-slide-20pt)
7. [Investment / Pricing Slide](#7-investment--pricing-slide)
8. [What's Next Slide](#8-whats-next-slide)
9. [Colored Section Divider (4 variants)](#9-colored-section-divider-4-variants)
10. [Subchapter Divider — Dark (Concept Card)](#10-subchapter-divider--dark-concept-card)
11. [Big Quote — White Background](#11-big-quote--white-background)
12. [Pull Quote — Inline (25pt)](#12-pull-quote--inline-25pt)
13. [Big Quote — Dark / Full Bleed Black](#13-big-quote--dark--full-bleed-black)
14. [Full-Bleed Image — Single Photo](#14-full-bleed-image--single-photo)
15. [Two-Photo Side-by-Side](#15-two-photo-side-by-side)
16. [Half-Image + Content (Left or Right variant)](#16-half-image--content-left-or-right-variant)
17. [Stats Slide — 3-Column (Rounded Pill Numbers)](#17-stats-slide--3-column-rounded-pill-numbers)
18. [Stats Slide — 2×2 Grid (4 Stats)](#18-stats-slide--22-grid-4-stats)
19. [Tag Cloud / Keyword Grid](#19-tag-cloud--keyword-grid)
20. [Tips / Callout Box Row](#20-tips--callout-box-row)
21. [Influencer / People Slide (3 Profiles)](#21-influencer--people-slide-3-profiles)
22. [Timeline / Gantt Strip](#22-timeline--gantt-strip)
23. [Table / Comparison Grid](#23-table--comparison-grid)
24. [Adding New Slides Beyond 12](#24-adding-new-slides-beyond-12)

---

## 1. Common Header Structure

Every content slide (types 5–8) shares this header zone. Always include these three shapes at the top of the slide XML, before the content shapes.

```xml
<!-- Shape 1: Horizontal rule line -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="1" name="Line 1"/>
    <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="362400" y="570989"/>
      <a:ext cx="8419200" cy="22860"/>
    </a:xfrm>
    <a:prstGeom prst="line"><a:avLst/></a:prstGeom>
    <a:noFill/>
    <a:ln w="6350">
      <a:solidFill><a:srgbClr val="000000"/></a:solidFill>
    </a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr/>
    <a:lstStyle/>
    <a:p><a:endParaRPr lang="cs-CZ" dirty="0"/></a:p>
  </p:txBody>
</p:sp>

<!-- Shape 2: Chapter label (top-left) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="2" name="ChapterLabel"/>
    <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="709942" y="195862"/>
      <a:ext cx="2087925" cy="285750"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1000" b="1" dirty="0">
          <a:latin typeface="Red Hat Display"/>
        </a:rPr>
        <a:t>CHAPTER 01</a:t>  <!-- UPDATE chapter number -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Shape 3: Center subtitle -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="3" name="SlideSubtitle"/>
    <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="3693367" y="195862"/>
      <a:ext cx="2257225" cy="285750"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr algn="ctr"/>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1000" b="1" dirty="0">
          <a:latin typeface="Red Hat Display"/>
        </a:rPr>
        <a:t>SLIDE TOPIC</a:t>  <!-- UPDATE to slide topic, ENGLISH ALL CAPS -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

---

## 2. Cover Slide

The cover is unique — background image fill, large branding text, service bubbles, client name. Copy slide 1's XML from the template and update only:
- The 3 bubble texts (shapes with colored circle fills)
- The client text ("TODAY WE TELL YOU A STORY ABOUT" stays, update the line below with client name)

**Bubble shape structure (example — purple discovery bubble):**
```xml
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="[X]" y="[Y]"/>
      <a:ext cx="[CX]" cy="[CY]"/>
    </a:xfrm>
    <a:prstGeom prst="ellipse"><a:avLst/></a:prstGeom>
    <a:solidFill><a:srgbClr val="9795F9"/></a:solidFill>  <!-- purple -->
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchor="ctr"/>
    <a:p>
      <a:pPr algn="ctr"/>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1400" b="1" dirty="0">
          <a:latin typeface="Red Hat Display"/>
          <a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill>
        </a:rPr>
        <a:t>discovery</a:t>  <!-- UPDATE bubble text -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Client name text box:**
```xml
<!-- "TODAY WE TELL YOU A STORY ABOUT" — keep this run, don't change -->
<a:r>
  <a:rPr lang="cs-CZ" sz="1900" b="1" dirty="0">
    <a:latin typeface="Young Serif"/>
  </a:rPr>
  <a:t>TODAY WE TELL YOU A STORY ABOUT</a:t>
</a:r>
<!-- Client name run — UPDATE this -->
<a:r>
  <a:rPr lang="cs-CZ" sz="1900" b="1" dirty="0">
    <a:latin typeface="Red Hat Display"/>
  </a:rPr>
  <a:t>CLIENT NAME</a:t>
</a:r>
```

**Use case:** Vždy slide 1. Otevírá každou nabídku — nastavuje tón, představuje klienta a signalizuje zaměření nabídky přes 3 service bubbles.

---

## 3. TOC / Prolog Slide

Copy slide 2 from template. Update:
- Left headline can stay as-is or be customized slightly
- Right side: update the chapter list runs to match actual chapter names

**Chapter list right side — numbered paragraph format:**
```xml
<a:p>
  <a:pPr>
    <a:lnSpc><a:spcPct val="115000"/></a:lnSpc>
    <a:spcBef><a:spcPts val="1200"/></a:spcBef>
    <a:buFont typeface="Red Hat Display"/>
    <a:buAutoNum type="arabicPeriod"/>
  </a:pPr>
  <a:r>
    <a:rPr lang="cs-CZ" sz="1500" b="0" dirty="0">
      <a:latin typeface="Red Hat Display"/>
    </a:rPr>
    <a:t>THE LANDSCAPE</a:t>  <!-- Chapter name -->
  </a:r>
</a:p>
<!-- Repeat for each chapter -->
```

**Use case:** Vždy slide 2. Dává klientovi rychlý přehled struktury celé nabídky ještě než začnou číst obsah. Počet kapitol = počet řádků v seznamu.

---

## 4. Chapter Divider

Copy slide 3 from template (preserves background image and Story TLRS icon placement). Update only the large headline text box.

**Headline text box (full-bleed, large Young Serif):**
```xml
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="10" name="ChapterHeadline"/>
    <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="677175" y="1400000"/>  <!-- approximate Y; adjust as needed -->
      <a:ext cx="7800000" cy="2400000"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="5100" b="1" dirty="0">
          <a:latin typeface="Young Serif"/>
          <a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill>
        </a:rPr>
        <a:t>YOUR BRAND AS MAIN CHARACTER</a:t>  <!-- UPDATE chapter title -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** První slide každé kapitoly. Vizuální předěl — plné pozadí s fotkou, velký Young Serif nadpis. Říká klientovi „teď začíná nová část příběhu." Název kapitoly vždy anglicky, all caps.

---

## 5. Text-Heavy Content Slide (38pt)

Most common slide type. Build from the header (section 1) + two text boxes.

Full slide XML skeleton:
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<p:sld xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"
       xmlns:p="http://schemas.openxmlformats.org/presentationml/2006/main"
       xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <p:cSld>
    <p:spTree>
      <p:nvGrpSpPr>
        <p:cNvPr id="1" name=""/>
        <p:cNvGrpSpPr/>
        <p:nvPr/>
      </p:nvGrpSpPr>
      <p:grpSpPr>
        <a:xfrm><a:off x="0" y="0"/><a:ext cx="0" cy="0"/>
          <a:chOff x="0" y="0"/><a:chExt cx="0" cy="0"/>
        </a:xfrm>
      </p:grpSpPr>

      <!-- INSERT COMMON HEADER HERE (3 shapes from section 1) -->

      <!-- Headline box (left) -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="4" name="Headline"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr/>
        </p:nvSpPr>
        <p:spPr>
          <a:xfrm>
            <a:off x="677175" y="1227425"/>
            <a:ext cx="3402300" cy="2444100"/>
          </a:xfrm>
          <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
          <a:noFill/>
        </p:spPr>
        <p:txBody>
          <a:bodyPr wrap="square" rtlCol="0"/>
          <a:lstStyle/>
          <!-- Line 1: Red Hat Display Black 38pt -->
          <a:p>
            <a:r>
              <a:rPr lang="cs-CZ" sz="3800" b="1" dirty="0">
                <a:latin typeface="Red Hat Display"/>
              </a:rPr>
              <a:t>Where is</a:t>  <!-- UPDATE -->
            </a:r>
          </a:p>
          <!-- Line 2: Young Serif Bold 38pt -->
          <a:p>
            <a:r>
              <a:rPr lang="cs-CZ" sz="3800" b="1" dirty="0">
                <a:latin typeface="Young Serif"/>
              </a:rPr>
              <a:t>the gap.</a:t>  <!-- UPDATE -->
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>

      <!-- Body text box (right) -->
      <p:sp>
        <p:nvSpPr>
          <p:cNvPr id="5" name="BodyText"/>
          <p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr>
          <p:nvPr/>
        </p:nvSpPr>
        <p:spPr>
          <a:xfrm>
            <a:off x="4079400" y="1227425"/>
            <a:ext cx="3908700" cy="3315300"/>
          </a:xfrm>
          <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
          <a:noFill/>
        </p:spPr>
        <p:txBody>
          <a:bodyPr wrap="square" rtlCol="0"/>
          <a:lstStyle/>
          <!-- First paragraph -->
          <a:p>
            <a:pPr>
              <a:lnSpc><a:spcPct val="115000"/></a:lnSpc>
              <a:spcBef><a:spcPts val="1200"/></a:spcBef>
            </a:pPr>
            <a:r>
              <a:rPr lang="cs-CZ" sz="1300" b="0" dirty="0">
                <a:latin typeface="Red Hat Display"/>
              </a:rPr>
              <a:t>Body text paragraph one. Include one key insight highlighted in blue. </a:t>
            </a:r>
            <a:r>
              <a:rPr lang="cs-CZ" sz="1300" b="0" dirty="0">
                <a:latin typeface="Red Hat Display"/>
                <a:highlight><a:srgbClr val="33B6FF"/></a:highlight>
              </a:rPr>
              <a:t>Key insight here.</a:t>
            </a:r>
          </a:p>
          <!-- Second paragraph -->
          <a:p>
            <a:pPr>
              <a:lnSpc><a:spcPct val="115000"/></a:lnSpc>
              <a:spcBef><a:spcPts val="1200"/></a:spcBef>
            </a:pPr>
            <a:r>
              <a:rPr lang="cs-CZ" sz="1300" b="0" dirty="0">
                <a:latin typeface="Red Hat Display"/>
              </a:rPr>
              <a:t>Second paragraph text.</a:t>
            </a:r>
          </a:p>
        </p:txBody>
      </p:sp>

    </p:spTree>
  </p:cSld>
  <p:clrMapOvr><a:masterClrMapping/></p:clrMapOvr>
</p:sld>
```

**Use case:** Nejčastější slide v nabídce. Hlavní argument, kontext, analýza situace, strategie — cokoliv kde je jedna silná myšlenka na levé straně a 2–3 odstavce vysvětlení na pravé. Blue highlight označuje klíčový insight per odstavec.

---

## 6. Detailed Service Slide (20pt)

Used for describing a specific service with process steps and deliverables.

```xml
<!-- After common header (3 shapes) -->

<!-- Headline box (left, smaller) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="4" name="Headline"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="677175" y="1227425"/><a:ext cx="2935800" cy="1234500"/></a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="2000" b="1" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>Discovery workshop</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="2000" b="1" dirty="0"><a:latin typeface="Young Serif"/></a:rPr>
        <a:t>with the team.</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Info box (rounded rect, grey, left-bottom) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="5" name="InfoBox"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="677325" y="2592775"/><a:ext cx="2935800" cy="1782300"/></a:xfrm>
    <a:prstGeom prst="roundRect"><a:avLst/></a:prstGeom>
    <a:solidFill><a:srgbClr val="E9E9E9"/></a:solidFill>
    <a:ln w="12700"><a:solidFill><a:srgbClr val="595959"/></a:solidFill></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" inset="l="228600" t="114300" r="228600" b="114300"" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1200" b="1" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>Why:</a:t>  <!-- UPDATE label -->
      </a:r>
    </a:p>
    <a:p>
      <a:pPr><a:spcBef><a:spcPts val="600"/></a:spcBef></a:pPr>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1200" b="0" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>Info box body text explaining context, rationale, or timeline.</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Right top section (process/approach) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="6" name="RightTop"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="4079400" y="1227425"/><a:ext cx="4702200" cy="1234500"/></a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1200" b="1" dirty="0">
          <a:latin typeface="Red Hat Display"/>
          <a:highlight><a:srgbClr val="57DC64"/></a:highlight>
        </a:rPr>
        <a:t>What to expect:</a:t>  <!-- UPDATE label -->
      </a:r>
    </a:p>
    <a:p>
      <a:pPr><a:lnSpc><a:spcPct val="115000"/></a:lnSpc><a:spcBef><a:spcPts val="600"/></a:spcBef></a:pPr>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1100" b="0" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>Process description paragraph.</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Right bottom section (deliverables with bullets) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="7" name="RightBottom"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="4079400" y="2461925"/><a:ext cx="4856700" cy="2447700"/></a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <!-- Green label -->
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1200" b="1" dirty="0">
          <a:latin typeface="Red Hat Display"/>
          <a:highlight><a:srgbClr val="57DC64"/></a:highlight>
        </a:rPr>
        <a:t>What you get:</a:t>  <!-- UPDATE label -->
      </a:r>
    </a:p>
    <!-- Bullet items -->
    <a:p>
      <a:pPr marL="457200" indent="-298450">
        <a:spcBef><a:spcPts val="400"/></a:spcBef>
        <a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0"/>
        <a:buChar char="●"/>
      </a:pPr>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1100" b="0" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>Deliverable item one</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
    <a:p>
      <a:pPr marL="457200" indent="-298450">
        <a:buFont typeface="Arial" panose="020B0604020202020204" pitchFamily="34" charset="0"/>
        <a:buChar char="●"/>
      </a:pPr>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1100" b="0" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>Deliverable item two</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** Když popisuješ konkrétní službu s jasným procesem a výstupy — discovery workshop, brand strategie, content retainer. Levý dolní šedý box je pro "Proč" nebo timeline, pravá strana pro co klient dostane (proces + deliverables v bullet listu). Maximálně 1 služba per slide.

---

## 7. Investment / Pricing Slide

One pricing slide per service. Subtitle should always be "INVESTMENT".

```xml
<!-- After common header (3 shapes) with subtitle = "INVESTMENT" -->

<!-- Outer border box (rounded rect, no fill, black border) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="4" name="PricingBorder"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="415500" y="1370550"/><a:ext cx="8313000" cy="2402400"/></a:xfrm>
    <a:prstGeom prst="roundRect"><a:avLst/></a:prstGeom>
    <a:noFill/>
    <a:ln w="9525"><a:solidFill><a:srgbClr val="000000"/></a:solidFill></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr/><a:lstStyle/>
    <a:p><a:endParaRPr lang="cs-CZ" dirty="0"/></a:p>
  </p:txBody>
</p:sp>

<!-- Service description (inside border, left) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="5" name="ServiceDesc"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="620338" y="1892455"/><a:ext cx="5067300" cy="1354500"/></a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <!-- Service name (Young Serif Bold 17pt, all caps) -->
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1700" b="1" dirty="0"><a:latin typeface="Young Serif"/></a:rPr>
        <a:t>DISCOVERY WORKSHOP</a:t>  <!-- UPDATE to service name in ALL CAPS -->
      </a:r>
    </a:p>
    <!-- Empty line -->
    <a:p><a:endParaRPr lang="cs-CZ" dirty="0"/></a:p>
    <!-- Deliverables summary (Red Hat Display Medium 12pt) -->
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1200" b="0" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>Half-day workshop • Digital audit • Strategic brief • Communication roadmap</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
    <!-- Timeline (Red Hat Display Medium 11pt) -->
    <a:p>
      <a:pPr><a:spcBef><a:spcPts val="600"/></a:spcBef></a:pPr>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1100" b="0" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>Workshop within 4 weeks • Deliverables within 2 weeks</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Price tag (inside border, right, right-aligned, BLUE HIGHLIGHT) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="6" name="PriceTag"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="6134850" y="2692850"/><a:ext cx="2196300" cy="554100"/></a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" anchor="ctr" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr algn="r"/>
      <a:r>
        <a:rPr lang="cs-CZ" sz="2400" b="1" dirty="0">
          <a:latin typeface="Red Hat Display"/>
          <a:highlight><a:srgbClr val="33B6FF"/></a:highlight>
        </a:rPr>
        <a:t>55 000 CZK</a:t>  <!-- UPDATE price -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** Jedna pricing slide per každá oceněná služba v Kapitole 3 (INVESTMENT). Nikdy nekombinuj více služeb na jednom slidu — každá má svůj vlastní rámeček. Cena vždy blue highlight vpravo, název služby all caps Young Serif vlevo.

---

## 8. What's Next Slide

Single-font Young Serif headline (no Red Hat Display Black on line 1), body with green highlights on next-step service names.

```xml
<!-- After common header with subtitle "WHAT IS NEXT?" -->

<!-- Headline box (left, Young Serif only, 20pt) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="4" name="Headline"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="677175" y="1227425"/><a:ext cx="2935800" cy="2444100"/></a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="cs-CZ" sz="2000" b="1" dirty="0"><a:latin typeface="Young Serif"/></a:rPr>
        <a:t>What comes after the workshop.</a:t>  <!-- UPDATE — single line, Young Serif only -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Body text box (right, green highlights for service names) -->
<p:sp>
  <p:nvSpPr><p:cNvPr id="5" name="BodyText"/><p:cNvSpPr><a:spLocks noGrp="1"/></p:cNvSpPr><p:nvPr/></p:nvSpPr>
  <p:spPr>
    <a:xfrm><a:off x="4079400" y="1227425"/><a:ext cx="3908700" cy="3315300"/></a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" rtlCol="0"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr><a:lnSpc><a:spcPct val="115000"/></a:lnSpc><a:spcBef><a:spcPts val="70000"/></a:spcBef></a:pPr>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1300" b="0" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t>If the discovery confirms the opportunity, we move into </a:t>
      </a:r>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1300" b="0" dirty="0">
          <a:latin typeface="Red Hat Display"/>
          <a:highlight><a:srgbClr val="57DC64"/></a:highlight>
        </a:rPr>
        <a:t>Brand Strategy</a:t>  <!-- Green-highlighted next-step service -->
      </a:r>
      <a:r>
        <a:rPr lang="cs-CZ" sz="1300" b="0" dirty="0"><a:latin typeface="Red Hat Display"/></a:rPr>
        <a:t"> — defining the narrative and positioning.</a:t>
      </a:r>
    </a:p>
    <!-- More paragraphs as needed, each with 70000pt spcBef -->
  </p:txBody>
</p:sp>
```

**Use case:** Poslední slide Kapitoly 4. Uzavírá nabídku — shrnuje co přijde po podpisu, každý další krok má green highlight na názvu služby/akce. Young Serif bez Red Hat Display na prvním řádku — záměrně klidnější, ne tak razantní jako hlavní content slides.

---

## 9. Colored Section Divider (4 variants)

Full-slide colored background (blue / orange / green / purple) with a very large Young Serif headline centered vertically. Story TLRS logo top-left. No chapter label. Used to separate major sections — lighter-weight alternative to the Chapter Divider (which uses a photo).

**4 background variants (use matching background image):**
| Color | Hex | Template slide | Background image |
|-------|-----|----------------|-----------------|
| Blue | `33B6FF` | slide26 | image31.png |
| Orange | `FF8000` | slide27 | image14.png |
| Green | `57DC64` | slide28 | image15.png |
| Purple | `9795F9` | slide29 | image19.png |

The background images are full-slide (1920×1080 RGBA) fills. Corners are black (`000000`) — this creates a thin black frame effect around the edge. Use image31.png (blue), image14.png (orange), image15.png (green), or image19.png (purple) as the background (`<a:blipFill>` in `<p:bgPr>`).

**Font size scales automatically with text length:**
- Short title (≤ 2 words): 85pt
- Medium title (3-4 words): 54pt
- Long title (5+ words): 49pt

**XML skeleton:**
```xml
<!-- Background: set in <p:bgPr> using the appropriate colored image -->
<!-- No common header, no chapter label -->

<!-- Story TLRS logo (top-left, always present) -->
<p:pic>
  <p:nvPicPr>
    <p:cNvPr id="1" name="Logo"/>
    <p:cNvPicPr preferRelativeResize="0"/>
    <p:nvPr/>
  </p:nvPicPr>
  <p:blipFill>
    <a:blip r:embed="rId_logo"><a:alphaModFix/></a:blip>
    <a:stretch><a:fillRect/></a:stretch>
  </p:blipFill>
  <p:spPr>
    <a:xfrm>
      <a:off x="721072" y="362940"/>
      <a:ext cx="408942" cy="335532"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
</p:pic>

<!-- Large headline (Young Serif, dark text = scheme:dk1 = black) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="2" name="Headline"/>
    <p:cNvSpPr txBox="1"/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="709950" y="2122725"/>
      <a:ext cx="7363500" cy="2730300"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchorCtr="0" anchor="t" wrap="square"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr indent="0" lvl="0" marL="0" rtl="0" algn="l">
        <a:spcBef><a:spcPts val="0"/></a:spcBef>
        <a:spcAft><a:spcPts val="0"/></a:spcAft>
        <a:buNone/>
      </a:pPr>
      <a:r>
        <a:rPr lang="cs" sz="8500" dirty="0">  <!-- Adjust sz: 8500=short, 5400=medium, 4900=long -->
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Young Serif"/>
          <a:ea typeface="Young Serif"/>
          <a:cs typeface="Young Serif"/>
        </a:rPr>
        <a:t>SECTION TITLE</a:t>  <!-- UPDATE — ALL CAPS -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** Major section separator before a new topic block. Pick the color that best matches the chapter's energy — blue for strategy/data, green for results/growth, orange for creative/campaigns, purple for innovation/concepts.

---

## 10. Subchapter Divider — Dark (Concept Card)

Dark background (`scheme:dk1` = black) with a full-slide photo (top half) and a very large section/concept number (80pt Young Serif, bottom strip). Small gray keyword tags above the title. No header. Used for concept reveals, sub-chapter intros inside a chapter, or single-page section statements.

**Structure:**
- Background: solid black (`scheme:dk1`)
- Top image: full-width photo (0, 0) 10"×5.62"
- Bottom strip: semi-transparent black band ~1.77" tall — this is another full-width image placed at bottom (0, 3.86") 10"×1.77"
- Gray keyword tags: rounded rect pills with `#E9E9E9` fill, `Red Hat Display ExtraBold` 11pt text, no border
- Headline: Young Serif 80pt, `scheme:dk1` (black on the bottom strip area which has white or light treatment)

```xml
<!-- Background is solid dark (no custom bg image — scheme:dk1 handles it) -->

<!-- Full-slide photo (rId3 = your photo) -->
<p:pic>
  <p:nvPicPr>
    <p:cNvPr id="1" name="Photo"/>
    <p:cNvPicPr preferRelativeResize="0"/>
    <p:nvPr/>
  </p:nvPicPr>
  <p:blipFill>
    <a:blip r:embed="rId3"><a:alphaModFix/></a:blip>
    <a:stretch><a:fillRect/></a:stretch>
  </p:blipFill>
  <p:spPr>
    <a:xfrm>
      <a:off x="0" y="0"/>
      <a:ext cx="9144000" cy="5143500"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
</p:pic>

<!-- Bottom strip overlay image (dark band, rId4) -->
<p:pic>
  <p:nvPicPr>
    <p:cNvPr id="2" name="BottomStrip"/>
    <p:cNvPicPr preferRelativeResize="0"/>
    <p:nvPr/>
  </p:nvPicPr>
  <p:blipFill>
    <a:blip r:embed="rId4"><a:alphaModFix/></a:blip>
    <a:stretch><a:fillRect/></a:stretch>
  </p:blipFill>
  <p:spPr>
    <a:xfrm>
      <a:off x="0" y="3527040"/>  <!-- ~3.86" from top -->
      <a:ext cx="9144000" cy="1619460"/>  <!-- ~1.77" tall -->
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
</p:pic>

<!-- Keyword tags (small gray pills, repeat for each tag) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="3" name="Tag1"/>
    <p:cNvSpPr/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="714375" y="3141255"/>  <!-- ~0.78", ~3.43" -->
      <a:ext cx="1562925" cy="301800"/>  <!-- ~1.71"×0.33" -->
    </a:xfrm>
    <a:prstGeom prst="roundRect">
      <a:avLst><a:gd fmla="val 50000" name="adj"/></a:avLst>
    </a:prstGeom>
    <a:solidFill><a:srgbClr val="E9E9E9"/></a:solidFill>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchorCtr="0" anchor="ctr" wrap="square"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr indent="0" marL="0" marR="0" rtl="0" algn="ctr">
        <a:buNone/>
      </a:pPr>
      <a:r>
        <a:rPr lang="cs" sz="1100">
          <a:latin typeface="Red Hat Display ExtraBold"/>
        </a:rPr>
        <a:t>keyword</a:t>  <!-- UPDATE tag text -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Large concept/section title (bottom area, Young Serif 80pt) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="6" name="ConceptTitle"/>
    <p:cNvSpPr/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="714375" y="3604500"/>  <!-- ~0.78", ~3.94" -->
      <a:ext cx="8010900" cy="1537200"/>  <!-- ~8.76"×1.68" -->
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchorCtr="0" anchor="ctr" wrap="square"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr indent="0" marL="0" rtl="0" algn="l">
        <a:buNone/>
      </a:pPr>
      <a:r>
        <a:rPr lang="cs" sz="8000">
          <a:latin typeface="Young Serif"/>
        </a:rPr>
        <a:t>CONCEPT#1</a:t>  <!-- UPDATE — concept name or number -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** Revealing creative concepts (CONCEPT#1, CONCEPT#2…), or chapter openers inside a dark-themed section. Each instance uses a different photo. Keyword tags above the title summarize the concept theme.

---

## 11. Big Quote — White Background

Large centered quote on the standard white/gray background. No full-bleed image. Optional decorative corner ornaments (small images, ~1.92"×1.08", in bottom-left and top-right corners). Chapter header present.

**Key measurements:**
- Quote text box: (1.85", 1.37") 6.41"×3.51"
- Font: Young Serif 33pt (for shorter quotes) or Red Hat Display Black for lead-in phrase
- Color: `scheme:dk1` (black text on white)
- Optional corner ornaments: `1.92"×1.08"` images positioned at `(0.30", 4.21")` bottom-left and `(7.89", 0.95")` top-right

**XML skeleton (after common header):**
```xml
<!-- Corner ornament bottom-left (optional decorative element) -->
<p:pic>
  <p:nvPicPr>
    <p:cNvPr id="4" name="OrnamentBL"/>
    <p:cNvPicPr preferRelativeResize="0"/>
    <p:nvPr/>
  </p:nvPicPr>
  <p:blipFill>
    <a:blip r:embed="rId5"><a:alphaModFix/></a:blip>
    <a:stretch><a:fillRect/></a:stretch>
  </p:blipFill>
  <p:spPr>
    <a:xfrm>
      <a:off x="274113" y="3849342"/>  <!-- (0.30", 4.21") -->
      <a:ext cx="1751424" cy="985176"/>  <!-- 1.92"×1.08" -->
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
</p:pic>

<!-- Corner ornament top-right (optional) -->
<p:pic>
  <!-- mirror: (7.89", 0.95") 1.92"×1.08" -->
  <p:spPr>
    <a:xfrm>
      <a:off x="7214626" y="873038"/>
      <a:ext cx="1751424" cy="985176"/>
    </a:xfrm>
    ...
  </p:spPr>
</p:pic>

<!-- Quote text box (centered in slide body) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="6" name="QuoteText"/>
    <p:cNvSpPr txBox="1"/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="1691425" y="1251050"/>
      <a:ext cx="5860500" cy="3212700"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchorCtr="0" anchor="t" wrap="square"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr indent="0" lvl="0" marL="0" rtl="0" algn="l">
        <a:buNone/>
      </a:pPr>
      <!-- Optional bold lead-in run (Red Hat Display Black, same 33pt) -->
      <a:r>
        <a:rPr lang="cs" sz="3300" b="1" dirty="0">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Red Hat Display Black"/>
        </a:rPr>
        <a:t>Lead-in phrase: </a:t>  <!-- Optional bold prefix, or omit -->
      </a:r>
      <!-- Quote body (Young Serif, regular weight) -->
      <a:r>
        <a:rPr lang="cs" sz="3300" dirty="0">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Young Serif"/>
        </a:rPr>
        <a:t>The quote text goes here. Keep it to 1-2 sentences.</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**3 background color variants** (slides 12/13/14 demonstrate this): Use the matching colored background image (same as section dividers — image19.png for purple, image14.png for orange, image15.png for green) to tint the entire slide. Text stays dark (`scheme:dk1`). Useful for single-slide emphasis points between regular content.

**Use case:** Presenting a key insight, client quote, or data point as a standalone statement. The lead-in bold phrase (e.g., "Plot twist:") introduces the quote; the Young Serif body delivers it.

---

## 12. Pull Quote — Inline (25pt)

A lighter, in-chapter emphasis slide — same white background, no ornaments, smaller 25pt text. Used when a quote or observation is important but not worth a full big-quote treatment.

```xml
<!-- After common header (3 shapes) -->

<!-- Quote text box (left-centered in content area) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="4" name="PullQuote"/>
    <p:cNvSpPr txBox="1"/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="1691425" y="1247650"/>
      <a:ext cx="5860500" cy="3219300"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchorCtr="0" anchor="t" wrap="square"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr indent="0" marL="0" rtl="0" algn="l">
        <a:buNone/>
      </a:pPr>
      <!-- Bold run (Red Hat Display Black, same 25pt) for lead-in label -->
      <a:r>
        <a:rPr lang="cs" sz="2500" b="1" dirty="0">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Red Hat Display Black"/>
        </a:rPr>
        <a:t>Plot twist: </a:t>  <!-- UPDATE bold lead-in, or omit -->
      </a:r>
      <!-- Quote body (Red Hat Display regular, accent color for key phrase) -->
      <a:r>
        <a:rPr lang="cs" sz="2500" dirty="0">
          <a:solidFill><a:srgbClr val="33B6FF"/></a:solidFill>  <!-- Blue accent -->
          <a:latin typeface="Red Hat Display Medium"/>
        </a:rPr>
        <a:t>Key statement in blue.</a:t>  <!-- UPDATE — one accent phrase -->
      </a:r>
      <a:r>
        <a:rPr lang="cs" sz="2500" dirty="0">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Red Hat Display Medium"/>
        </a:rPr>
        <a:t> Rest of the text.</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** Mid-chapter slide that delivers one key observation or surprising fact without breaking the flow. The blue accent (`33B6FF`) highlights the sharpest part of the statement.

---

## 13. Big Quote — Dark / Full Bleed Black

Solid black background with full-slide color fill (`#000000`), large white-gray text (up to 67pt Young Serif), no image, no header. For maximum-impact statement slides.

```xml
<!-- No bg image — slide uses scheme:dk1 (black) as base -->

<!-- Full black fill overlay (covers entire slide) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="1" name="BlackFill"/>
    <p:cNvSpPr/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="0" y="0"/>
      <a:ext cx="9144000" cy="5143500"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:solidFill><a:srgbClr val="000000"/></a:solidFill>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr/><a:lstStyle/>
    <a:p><a:endParaRPr/></a:p>
  </p:txBody>
</p:sp>

<!-- Quote text box (large, light gray text) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="2" name="BigQuote"/>
    <p:cNvSpPr txBox="1"/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="615277" y="877617"/>
      <a:ext cx="8013600" cy="3932100"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchorCtr="0" anchor="t" wrap="square"/>
    <a:lstStyle/>
    <a:p>
      <a:pPr indent="0" marL="0" rtl="0" algn="l">
        <a:buNone/>
      </a:pPr>
      <a:r>
        <a:rPr lang="cs" sz="6700" dirty="0">
          <a:solidFill><a:srgbClr val="E9E9E9"/></a:solidFill>  <!-- Light gray text on black -->
          <a:latin typeface="Young Serif"/>
        </a:rPr>
        <a:t>THE STATEMENT GOES HERE</a:t>  <!-- UPDATE — ALL CAPS, short and punchy -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Note on font size:** 67pt fits ~4-6 words per line. Reduce to 54pt for 7-9 words, 40pt for longer statements.

**Use case:** High-drama moment — an industry stat, a provocative claim, or a chapter-closing statement. Text is always `#E9E9E9` (light gray) on pure black. No logo, no header.

---

## 14. Full-Bleed Image — Single Photo

Entire slide is a photo, edge to edge. One centered caption line at the bottom (15pt). Used for mood-setting, before/after reveals, or visual evidence slides.

```xml
<!-- Full-bleed photo (rId4 = your photo) -->
<p:pic>
  <p:nvPicPr>
    <p:cNvPr id="1" name="FullBleedPhoto"/>
    <p:cNvPicPr preferRelativeResize="0"/>
    <p:nvPr/>
  </p:nvPicPr>
  <p:blipFill>
    <a:blip r:embed="rId4"><a:alphaModFix/></a:blip>
    <a:stretch><a:fillRect/></a:stretch>
  </p:blipFill>
  <p:spPr>
    <a:xfrm>
      <a:off x="1051763" y="338076"/>  <!-- centered with margin, or use (0,0) for true bleed -->
      <a:ext cx="7040250" cy="3962100"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
</p:pic>

<!-- Caption line (optional, bottom of slide) -->
<p:sp>
  <p:nvSpPr>
    <p:cNvPr id="2" name="Caption"/>
    <p:cNvSpPr txBox="1"/>
    <p:nvPr/>
  </p:nvSpPr>
  <p:spPr>
    <a:xfrm>
      <a:off x="1051763" y="4300200"/>
      <a:ext cx="3657600" cy="316800"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square"/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="cs" sz="1500" dirty="0">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Red Hat Display Medium"/>
        </a:rPr>
        <a:t>Caption: describe what the image shows</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** Showing a visual reference (brand moodboard, campaign visual, product shot). Can be used alone (single photo filling entire slide) or as a split with two photos side-by-side (slide 25 pattern).

---

## 15. Two-Photo Side-by-Side

Two equal-width photos placed side by side. Each photo ~4.12"×2.32", with a caption line below each. Chapter header present.

```xml
<!-- After common header (3 shapes) -->

<!-- Left photo (rId4) -->
<p:pic>
  <p:spPr>
    <a:xfrm>
      <a:off x="557775" y="1443330"/>  <!-- (~0.61", ~1.58") -->
      <a:ext cx="3765600" cy="2121300"/>  <!-- 4.12"×2.32" -->
    </a:xfrm>
    ...
  </p:spPr>
</p:pic>

<!-- Right photo (rId4 — can reuse or use different rId) -->
<p:pic>
  <p:spPr>
    <a:xfrm>
      <a:off x="4808775" y="1443330"/>  <!-- (~5.26", ~1.58") -->
      <a:ext cx="3765600" cy="2121300"/>
    </a:xfrm>
    ...
  </p:spPr>
</p:pic>

<!-- Left caption -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="557775" y="3636930"/>
      <a:ext cx="3657600" cy="316800"/>
    </a:xfrm>
    ...
  </p:spPr>
  <p:txBody>
    <a:p>
      <a:r>
        <a:rPr lang="cs" sz="1500"/>
        <a:t>Obrázok 1: caption here</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Right caption (same structure, x offset ~5.26") -->
```

**Use case:** Comparing two visuals (before/after, two campaign options, two brand directions). Captions identify each image.

---

## 16. Half-Image + Content (Left or Right variant)

Slide split into image half and text half. A vertical color strip separates them. The text side has a 28pt headline + colored tag pills (category labels). No chapter header on the image side — the logo appears on the text side.

**2 variants:**
- **Image-right** (slide 15): image occupies right ~5.5", text on left
- **Image-left** (slide 16): image occupies left ~5.5", text on right

**Key measurements:**
- Photo: 5.51"×5.62" (full slide height), starts at x=4.49" (right) or x=0" (left)
- Color divider strip: 0.79"×5.62", placed between photo and text at x=4.21" (right var.) or x=5.00" (left var.)
- Text box: 3.92"×2.67" on the content side, ~2.32" from top
- Tag pills: 0.38" tall, same colors as standard pills (`57DC64`, `FF8000`, `9795F9`)
- Headline: 28pt Red Hat Display, `scheme:dk1`
- Tag font: Red Hat Display 11pt, no border

```xml
<!-- Photo (full height, right side) -->
<p:pic>
  <p:spPr>
    <a:xfrm>
      <a:off x="4108375" y="25"/>    <!-- image-right variant -->
      <a:ext cx="5035500" cy="5143500"/>
    </a:xfrm>
    ...
  </p:spPr>
</p:pic>

<!-- Vertical color strip divider -->
<p:pic>
  <p:spPr>
    <a:xfrm>
      <a:off x="3850825" y="0"/>
      <a:ext cx="719150" cy="5143500"/>
    </a:xfrm>
    ...
  </p:spPr>
</p:pic>

<!-- Headline text box -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="677175" y="2122425"/>
      <a:ext cx="3585300" cy="2444100"/>
    </a:xfrm>
    <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
  </p:spPr>
  <p:txBody>
    <a:p>
      <a:r>
        <a:rPr lang="cs" sz="2800"/>
        <a:t>Headline text here</a:t>  <!-- UPDATE — mix Red Hat Display + Young Serif -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Tag pills (category labels, colored rounded rects) -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="765475" y="2288387"/>  <!-- First tag -->
      <a:ext cx="1782900" cy="343200"/>
    </a:xfrm>
    <a:prstGeom prst="roundRect">
      <a:avLst><a:gd fmla="val 50000" name="adj"/></a:avLst>
    </a:prstGeom>
    <a:solidFill><a:srgbClr val="FF8000"/></a:solidFill>  <!-- Pick color: green/orange/purple -->
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchor="ctr"/>
    <a:p>
      <a:pPr algn="ctr"><a:buNone/></a:pPr>
      <a:r>
        <a:rPr lang="cs" sz="1100">
          <a:latin typeface="Red Hat Display"/>
        </a:rPr>
        <a:t>creative concepts</a:t>  <!-- UPDATE tag label -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** Service intro, team intro, or visual section opener where you want one large mood image alongside a brief text statement. The color divider strip visually anchors the transition between image and text.

---

## 17. Stats Slide — 3-Column (Rounded Pill Numbers)

Three large statistics displayed as colored rounded-rectangle pills in a row, each with a descriptive label below. Headline above all three. Uses the standard white background + chapter header.

**Key measurements:**
- Slide title: 25pt, full width, y=~0.97"
- Stat pills: `roundRect` with `adj=50000` (fully rounded / capsule shape), ~1.49"×0.65"
- Stat font: Red Hat Display Black, 25pt, white text (inherits from pill)
- Label font: Red Hat Display Medium, 13pt, black
- 3-column layout: pills centered at x≈1.75", x≈4.17", x≈6.49"

```xml
<!-- After common header -->

<!-- Slide headline -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="677175" y="884244"/>
      <a:ext cx="5574300" cy="885600"/>
    </a:xfrm>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:p>
      <a:r>
        <a:rPr lang="cs" sz="2500" b="1" dirty="0">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Red Hat Display"/>
        </a:rPr>
        <a:t>Headline for the stats</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Stat pill 1 (green) -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="1598350" y="2459283"/>
      <a:ext cx="1365300" cy="596400"/>
    </a:xfrm>
    <a:prstGeom prst="roundRect">
      <a:avLst><a:gd fmla="val 50000" name="adj"/></a:avLst>
    </a:prstGeom>
    <a:solidFill><a:srgbClr val="57DC64"/></a:solidFill>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchor="ctr"/>
    <a:p>
      <a:pPr algn="ctr"><a:buNone/></a:pPr>
      <a:r>
        <a:rPr lang="cs" sz="2500">
          <a:latin typeface="Red Hat Display Black"/>
        </a:rPr>
        <a:t>8 s</a:t>  <!-- UPDATE stat value (number + unit) -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Label below stat 1 -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="1218288" y="3128711"/>
      <a:ext cx="2125500" cy="688500"/>
    </a:xfrm>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchor="t"/>
    <a:p>
      <a:pPr algn="ctr"><a:lnSpc><a:spcPct val="115000"/></a:lnSpc></a:pPr>
      <a:r>
        <a:rPr lang="cs" sz="1300">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Red Hat Display Medium"/>
        </a:rPr>
        <a:t>Description of what this stat means</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Repeat pills and labels for stats 2 (purple, x≈3825300) and 3 (orange, x≈5934475) -->
<!-- Colors: green 57DC64, purple 9795F9, orange FF8000, blue 33B6FF -->
```

**Use case:** Presenting 3 key metrics, research findings, or performance benchmarks. Each pill gets a distinct brand color. Pill width scales with text — the `adj=50000` roundRect creates a capsule that auto-sizes.

---

## 18. Stats Slide — 2×2 Grid (4 Stats)

Same pill format as the 3-column stats slide but arranged in a 2×2 grid. No headline. Used when 4 separate metrics each need equal emphasis.

**Layout:** 4 pills in a grid — 2 per row, ~2.43" row height spacing. Same pill dimensions and font as the 3-column variant. Mix pill colors across the 4.

```
Row 1:  [Green pill]    [Purple pill]
         label           label

Row 2:  [Orange pill]   [Blue pill]
         label           label
```

**Use case:** 4-metric dashboards, quarterly KPIs, or "by the numbers" slides.

---

## 19. Tag Cloud / Keyword Grid

Text boxes (small rounded rect pills, ~1"×0.33") arranged in a loose grid on the right side of the slide (x≈5"–8"). Left side has the standard 25pt headline + body text. Each pill has a distinct brand color from the palette.

**Key measurements:**
- Pills: ~1"×0.33" to ~1.5"×0.33" depending on text length
- Pills span x: 4.57"–7.62", y: 0.91"–3.43" (6×3 grid, loosely spaced)
- Font: Red Hat Display ExtraBold 10pt, inherits from pill (no explicit color set)
- Pill shape: `roundRect` with `adj=50000`
- Colors: mix of `33B6FF`, `57DC64`, `9795F9`, `FF8000`

**Use case:** Visualizing a topic cluster, content categories, service pillars, or brand associations. Left side contextualizes; right side shows the "universe" of keywords.

---

## 20. Tips / Callout Box Row

3–4 equal-width callout boxes in a horizontal row, each with a `#E9E9E9` (gray) fill, small 10pt text, and a brief tip/insight. Headline above (25pt). Or in 2×2 layout (4 boxes, 2 rows).

**Key measurements (3-column row variant):**
- Each box: ~4"×1" (3639600 × 914400 EMU), fill `#E9E9E9`
- Font: Red Hat Display Medium, 10pt
- Y positions: row 1 y≈1.91", row 2 y≈2.91", etc.
- Box shape: plain `rect` (not rounded)
- No border

```xml
<!-- Headline (25pt, same as other slides) -->

<!-- Tip box 1 -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="914400" y="1737900"/>  <!-- adjust for your layout -->
      <a:ext cx="3657600" cy="914400"/>
    </a:xfrm>
    <a:prstGeom prst="rect"><a:avLst/></a:prstGeom>
    <a:solidFill><a:srgbClr val="E9E9E9"/></a:solidFill>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr wrap="square" anchor="t"/>
    <a:lstStyle/>
    <a:p>
      <a:r>
        <a:rPr lang="cs" sz="1000" dirty="0">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Red Hat Display Medium"/>
        </a:rPr>
        <a:t>LinkedIn tip: Callout text content here. Keep to 1-2 lines max.</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
<!-- Repeat for each box, offset y by ~1" each row or x by ~4" each column -->
```

**Use case:** Platform-specific tips, process callouts, or recommendation cards. The gray background groups each item visually. Typically 3 boxes vertically (one column) or 4 boxes in 2×2.

---

## 21. Influencer / People Slide (3 Profiles)

Three profile photos in a row (~1.44"×1.40" each), with a name label and description text below each. No icon. Headline at top.

**Key measurements:**
- Photos: 1.44"×1.40", circular or square crop
- Photos at x: 0", ~3.21", ~6.42"; y: ~2.21"
- Name: Red Hat Display Medium, 13pt, below photo at y≈3.21"
- Description: Red Hat Display, 12pt, below name
- Headline: 25pt same as standard

```xml
<!-- After common header -->

<!-- Headline -->
<!-- (same 25pt headline structure as other slides) -->

<!-- Profile photo 1 -->
<p:pic>
  <p:spPr>
    <a:xfrm>
      <a:off x="0" y="2023488"/>     <!-- x=0, y≈2.21" -->
      <a:ext cx="1317600" cy="1280700"/>  <!-- 1.44"×1.40" -->
    </a:xfrm>
    ...
  </p:spPr>
</p:pic>

<!-- Name label below photo 1 -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="0" y="3108576"/>
      <a:ext cx="1828800" cy="0"/>
    </a:xfrm>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:p>
      <a:r>
        <a:rPr lang="cs" sz="1300">
          <a:latin typeface="Red Hat Display Medium"/>
        </a:rPr>
        <a:t>Name Surname</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Description below name -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="0" y="3660792"/>
      <a:ext cx="1828800" cy="914400"/>
    </a:xfrm>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:p>
      <a:r>
        <a:rPr lang="cs" sz="1200"/>
        <a:t>Short role/bio text here.</a:t>  <!-- UPDATE -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
<!-- Repeat for profiles 2 and 3, offset x by ~3.21" each -->
```

**Use case:** Introducing influencer shortlist, team members, or key stakeholder profiles. Scale to 2 people by removing the third group and widening the remaining two.

---

## 22. Timeline / Gantt Strip

Horizontal timeline with colored bars (rounded rect, capsule-shaped) spanning date ranges, arranged on two rows. Month labels along the bottom. Headline at top.

**Key measurements:**
- Timeline rail: horizontal line at y≈3.93", x: 1.22"–9.06" (`scheme:dk1`)
- Tick marks: vertical lines at month intervals (5 major months), `scheme:dk1`
- Bars row 1 (blue, `33B6FF`): y≈2.57", h=0.46" — production/planning phases
- Bars row 2 (green, `57DC64`): y≈3.08", h=0.46" — execution/campaign phases
- Month labels: 13pt Red Hat Display, y≈4.12"
- Bar font: Red Hat Display Medium, 17pt, centered in bar, `scheme:lt1` (white)

```xml
<!-- After common header + headline -->

<!-- Timeline rail (horizontal line) -->
<p:cxnSp>
  <p:spPr>
    <a:xfrm rot="10800000">
      <a:off x="1115715" y="3608871"/>
      <a:ext cx="7065300" cy="0"/>
    </a:xfrm>
    <a:prstGeom prst="straightConnector1"><a:avLst/></a:prstGeom>
    <a:noFill/>
    <a:ln w="9525">
      <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
    </a:ln>
  </p:spPr>
</p:cxnSp>

<!-- Phase bar (blue, top row) -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="1115715" y="2352839"/>  <!-- start position -->
      <a:ext cx="2521200" cy="418500"/>  <!-- width = duration -->
    </a:xfrm>
    <a:prstGeom prst="roundRect">
      <a:avLst><a:gd fmla="val 50000" name="adj"/></a:avLst>
    </a:prstGeom>
    <a:solidFill><a:srgbClr val="33B6FF"/></a:solidFill>
    <a:ln><a:noFill/></a:ln>
  </p:spPr>
  <p:txBody>
    <a:bodyPr anchor="ctr"/>
    <a:p>
      <a:pPr algn="ctr"><a:buNone/></a:pPr>
      <a:r>
        <a:rPr lang="cs" sz="1700">
          <a:latin typeface="Red Hat Display Medium"/>
        </a:rPr>
        <a:t>creative</a:t>  <!-- UPDATE phase name -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>

<!-- Month label -->
<p:sp>
  <p:spPr>
    <a:xfrm>
      <a:off x="517871" y="3764896"/>
      <a:ext cx="1219200" cy="345600"/>
    </a:xfrm>
    <a:noFill/>
  </p:spPr>
  <p:txBody>
    <a:p>
      <a:r>
        <a:rPr lang="cs" sz="1300">
          <a:solidFill><a:schemeClr val="dk1"/></a:solidFill>
          <a:latin typeface="Red Hat Display Medium"/>
        </a:rPr>
        <a:t>jan</a:t>  <!-- UPDATE month -->
      </a:r>
    </a:p>
  </p:txBody>
</p:sp>
```

**Use case:** Campaign timeline, project roadmap, or production schedule. Row 1 (blue) = planning/pre-production; Row 2 (green) = live/execution phases. Add as many bars as needed; all bars are capsule-shaped and the width represents duration.

---

## 23. Table / Comparison Grid

A table with black borders, no fill, Red Hat Display font. Typically 4 columns × 5 rows (including header). A total/summary row at the bottom. Headline at top.

**Key measurements:**
- Table frame: (1.04", 2.43") 3.28"×3.28" (but this is within a `graphicFrame` — use the script method)
- Column width: 5 equal columns at 1447800 EMU (~1.58") each
- Row height: 381000 EMU (~0.42")
- Borders: all sides, `scheme:dk1`, w=9525 (thin line)
- Font: Red Hat Display, inherits from table style
- The first row is a header row, last row is totals

**Note:** Tables in PPTX use `<p:graphicFrame>` not `<p:sp>`. They cannot be created by directly writing XML the same way — use the `add_slide.py` script to duplicate a slide that already has a table, then edit cell text in the resulting XML.

```xml
<!-- Table is inside a graphicFrame, positioned at: -->
<p:graphicFrame>
  <p:nvGraphicFramePr>
    <p:cNvPr id="X" name="Table"/>
    <p:cNvGraphicFramePr><a:graphicFrameLocks noGrp="1"/></p:cNvGraphicFramePr>
    <p:nvPr/>
  </p:nvGraphicFramePr>
  <p:xfrm>
    <a:off x="952500" y="2219325"/>  <!-- ~1.04", ~2.43" -->
    <a:ext cx="3000150" cy="3000150"/>
  </p:xfrm>
  <a:graphic>
    <a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/table">
      <a:tbl>
        <a:tblPr><a:noFill/></a:tblPr>
        <a:tblGrid>
          <a:gridCol w="1447800"/>  <!-- repeat for each column -->
          ...
        </a:tblGrid>
        <a:tr h="381000">
          <a:tc>
            <a:txBody>
              <a:bodyPr/><a:lstStyle/>
              <a:p>
                <a:r>
                  <a:rPr b="1"><a:latin typeface="Red Hat Display"/></a:rPr>
                  <a:t>Header text</a:t>  <!-- UPDATE -->
                </a:r>
              </a:p>
            </a:txBody>
            <a:tcPr marT="91425" marB="91425" marR="91425" marL="91425">
              <!-- Border lines on all sides (lnL, lnR, lnT, lnB), scheme:dk1, w=9525 -->
            </a:tcPr>
          </a:tc>
          <!-- Repeat <a:tc> for each column -->
        </a:tr>
        <!-- Repeat <a:tr> for each row -->
      </a:tbl>
    </a:graphicData>
  </a:graphic>
</p:graphicFrame>
```

**Use case:** Budget breakdowns, service comparison matrices, or deliverable schedules. The "Total" row at the bottom uses the same style as data rows — bold the values manually with `b="1"` on the `<a:rPr>`.

---

## 24. Adding New Slides Beyond the Template Count

If the deck needs more than 12 slides:

1. Copy an existing slide XML file (e.g., `slide5.xml`) to a new file (e.g., `slide13.xml`)
2. Update its content
3. In `extracted/ppt/_rels/presentation.xml.rels`, add:
   ```xml
   <Relationship Id="rId13" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide13.xml"/>
   ```
4. In `extracted/ppt/presentation.xml`, inside `<p:sldIdLst>`, add:
   ```xml
   <p:sldId id="269" r:id="rId13"/>
   ```
   (Use the next available ID — template ends at 267 for 12 slides)
5. In `extracted/[Content_Types].xml`, add:
   ```xml
   <Override PartName="/ppt/slides/slide13.xml" ContentType="application/vnd.openxmlformats-officedocument.presentationml.slide+xml"/>
   ```
6. In `extracted/ppt/slides/_rels/`, create `slide13.xml.rels` based on existing slide rels file (copy `slide5.xml.rels`)
