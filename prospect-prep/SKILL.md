---
name: prospect-prep
description: >
  Prepare for meetings with new potential clients — research the company and contacts,
  audit their social media, and deliver a structured prep document with talking points.
  Use this skill ALWAYS when Petr mentions a meeting with a new/potential client, asks
  to research a company or person before a meeting, or wants prep for a sales call.
  Trigger on: "připrav schůzku", "prospect prep", "nový klient meeting", "zjisti o firmě",
  "research prospect", "kdo je [jméno] z [firma]", "mám schůzku s [firma]",
  "prep na meeting", "připrav na call", "new business meeting", "zjisti co dělají",
  "podívej se na firmu", "research [firma]", "co víš o [firma]".
  Also trigger when Petr shares contacts + company name in the context of an upcoming meeting.
---

# Prospect Prep

Research a potential client and prepare everything Petr needs for a first meeting.

> **MANDATORY READS BEFORE YOU START:**
> 1. Read `CLAUDE.md` (project root) — context, people, abbreviations
> 2. Read THIS file fully (you're reading it now)
> 3. Read `references/prospect-template.md` — the output template you MUST follow
> 4. Read `references/social-audit-guide.md` — detailed social media audit methodology
> 5. Read `references/output-validation.md` — output completeness checklist

---

## Step 0 — Language

- Czech company → output in Czech
- International company → output in English
- If unsure, ask Petr

## Step 1 — Gather input

Minimum required:
- Company name
- At least one contact name

If Petr didn't provide a meeting date, ask — it goes into the ClickUp task.

Optionally ask for:
- How did the lead come in? (referral, inbound, cold?)
- Any specific angle or service they might be interested in?

Don't over-ask — if Petr just throws names at you, work with what you have and note gaps.

---

## Step 2 — Research

Run ALL research tracks below. Use web search extensively. Every track is mandatory — if you can't find information for a track, state that explicitly in the output document rather than skipping the section.

### 2a. Company overview

Search for the company and gather:
- **What they do** — core business, products/services, target market
- **How long on the market** — founding year, brief history
- **Size** — employees (LinkedIn, website, job postings as signals)
- **Revenue/financials** — if available publicly
- **Recent news** — press releases, media coverage, product launches
- **Key people** — leadership team beyond the meeting contacts
- **Website URL**

For Czech companies, try searching ARES/justice.cz data:
- Search `"[company name] IČO"` or `"[company name] ares"`
- Look for revenue (obrat), employee count, founding date from public registry data

### 2b. Contact profiles

For each person Petr will meet:
- **Current role & tenure** at the company
- **Professional background** — previous companies, expertise areas
- **LinkedIn profile URL** — always include if findable
- **Public activity** — articles, talks, social posts (anything that reveals what they care about)
- **Shared connections** — any overlap with Story TLRS network

### 2c. Social media audit

> **⚠️ CRITICAL — THIS SECTION IS MANDATORY AND MUST NOT BE SKIPPED.**
> Story TLRS is a social media agency. The social media audit is the single most valuable
> part of this prep document. Skipping it makes the entire prep useless.
> If you skip this section, the skill has FAILED.

**Read `references/social-audit-guide.md` for detailed methodology.**

For EACH platform the company uses, you MUST document:

| Field | Required |
|-------|----------|
| **Profile URL** | ✅ MANDATORY — direct link to the profile |
| **Follower/fan count** | ✅ MANDATORY |
| **Posting frequency** | ✅ MANDATORY — posts per week/month |
| **Content types** | ✅ MANDATORY — reels, carousels, stories, static, video |
| **Content themes** | ✅ MANDATORY — what topics they communicate about |
| **Visual style** | ✅ MANDATORY — professional, casual, branded, inconsistent? |
| **Tone of voice** | ✅ MANDATORY — corporate, friendly, expert, playful? |
| **Engagement level** | ✅ MANDATORY — likes/comments relative to followers |
| **Best performing content** | ✅ MANDATORY — what works for them? |
| **Gaps & opportunities** | ✅ MANDATORY — what's missing or could be better? |

**Platforms to check (in order of priority):**
1. **Instagram** — most relevant for Story TLRS services
2. **Facebook** — page presence, community activity
3. **LinkedIn** — company page, employee advocacy
4. **TikTok** — if relevant for their audience
5. **YouTube** — if they produce video content
6. **X/Twitter** — if active

**How to find profiles:**
- Search `"[company name] instagram"`, `"[company name] facebook page"`, etc.
- Check the company website footer/header for social links
- Search directly on each platform

**For each platform, ALWAYS include the direct profile URL.** If a platform is not used, state "Not found / not active" — do NOT silently skip it.

After individual platform analysis, write a **Social media summary** paragraph that covers:
- Overall sophistication level
- Whether they appear to have an agency or do it in-house
- Apparent budget level (production quality as signal)
- Key pain points visible from outside

### 2d. Current marketing assessment

Based on what you found, briefly assess:
- How sophisticated is their current marketing/social presence?
- Are they doing it in-house or with an agency? (look for agency credits, tagged partners)
- What's their apparent budget level? (production quality as signal)
- Are there obvious pain points? (inconsistent posting, low engagement, outdated visuals)

---

## Step 3 — Story TLRS fit analysis

Based on the research, identify which Story TLRS services would be most relevant:

| Service | When to suggest |
|---------|----------------|
| **CM (Community Management)** | They have social profiles but poor engagement, slow responses, no community interaction |
| **INFLU (Influencer marketing)** | Their category benefits from influencer campaigns, competitors use influencers |
| **PERF (Performance)** | They run ads but inefficiently, or they should be running paid social |
| **CREA (Creative/Copy)** | Their content quality is low, inconsistent branding, weak copy |
| **Big Ideas** | They need a strategic concept, campaign idea, or brand refresh on social |
| **AI Content** | High volume content needs, product creative, performance creative at scale |
| **Data Platform** | If they do influencer campaigns and need better analytics |

For each relevant service, write a specific 1-2 sentence pitch tied to what you found in research. Not generic — grounded in their actual situation.

---

## Step 4 — Generate talking points

Create 8-12 talking points as questions Petr can ask during the meeting. These should:
- Show that Petr has done his homework (reference specific things you found)
- Uncover their pain points and needs
- Naturally lead toward Story TLRS services
- Be open-ended, not yes/no questions

Structure them in a natural conversation flow:
1. **Rapport / context** (2-3 questions) — about their business, recent news, their role
2. **Current state** (3-4 questions) — how they handle marketing/social now, what works, what doesn't
3. **Goals & challenges** (2-3 questions) — where they want to be, what's blocking them
4. **Next steps** (1-2 questions) — timeline, decision process, budget signals

---

## Step 5 — Create the output document

> **⚠️ CRITICAL — FILE LOCATION AND NAME FORMAT ARE MANDATORY.**
> The file MUST be saved to the EXACT path below. Do NOT save to root, do NOT use a different name format.

**Save to:** `memory/prospects/YYYY-MM-DD-[company-name-lowercase].md`

- YYYY-MM-DD = meeting date
- company-name-lowercase = company name in lowercase, spaces replaced with hyphens
- Example: `memory/prospects/2026-03-09-la-fresca.md`

**Before writing, verify the directory exists:**
```
ls memory/prospects/ || mkdir -p memory/prospects/
```

**Use the template from `references/prospect-template.md`.** Read the template file and follow its structure exactly. Do NOT invent your own structure.

---

## Step 6 — Validate output

> **⚠️ CRITICAL — DO NOT SKIP VALIDATION.**
> Read `references/output-validation.md` and check every item.

Before declaring the document complete, verify:

1. ✅ File is saved in `memory/prospects/` (NOT in root, NOT in any other folder)
2. ✅ File name follows `YYYY-MM-DD-company-name.md` format
3. ✅ Social media audit section exists with at least 3 platforms checked
4. ✅ Each checked platform has a direct profile URL
5. ✅ Each checked platform has ALL 10 required fields filled
6. ✅ Social media summary paragraph exists
7. ✅ Story TLRS fit section has specific (not generic) pitches
8. ✅ Talking points section has 8-12 questions
9. ✅ Company overview section is complete
10. ✅ Contact profiles section has LinkedIn URLs where findable

If ANY of items 1-6 are missing, the output is INCOMPLETE. Fix before proceeding.

---

## Step 7 — Create ClickUp task

> **⚠️ CRITICAL: This step MUST be completed. The skill is NOT finished until a ClickUp task exists.**
> If the ClickUp tool call fails, retry once. If it fails again, tell Petr explicitly
> that the task wasn't created and provide the exact parameters so he can create it manually.

Create a task using the `clickup_create_task` tool with these **exact** parameters:

```
list_id: "901521952965"
name: "[Company name] — prospect prep"
markdown_description: [condensed version of the MD document — company overview, contacts, social media summary, Story TLRS fit, key talking points]
priority: "normal"
due_date: "[YYYY-MM-DD]" (meeting date, if provided)
assignees: ["6898386"]
```

**Parameter details:**
- `list_id` — MUST be `"901521952965"` (New Business list). This is a STRING, not a number.
- `name` — Company name + " — prospect prep"
- `markdown_description` — Condensed key sections. Does NOT need the full document.
- `priority` — `"normal"` unless Petr specifies urgency
- `due_date` — Meeting date in `YYYY-MM-DD` format. OMIT if no date provided.
- `assignees` — MUST be `["6898386"]` (Petr's user ID). This is an ARRAY of strings.

After successful creation, confirm to Petr with the task URL.

---

## Step 8 — Memory update

Check if the research revealed:
- New people worth adding to CLAUDE.md (only if likely to be recurring contacts)
- New company worth adding to CLAUDE.md Firmy section
- Any patterns relevant to `memory/context/patterns.md`

Update silently per standard memory rules.

---

## Completion checklist

> **ALL items below must be TRUE before this skill is considered complete.**

1. ✅ MD file saved in `memory/prospects/` with correct name format
2. ✅ Output validation passed (Step 6) — especially social media audit completeness
3. ✅ ClickUp task created in New Business list (task URL confirmed to Petr)
4. ✅ Memory updated if applicable

If ANY of these are missing, complete them before ending.

---

## Followup: Prospect → Client conversion

If in a future conversation Petr indicates that a prospect became a client:
1. Move the prospect file from `memory/prospects/` to `memory/clients/`
2. Update CLAUDE.md if the company/people should be added as active contacts
3. Note the conversion in the ClickUp task (comment or status change)

---

## Edge cases

- **Petr only gives a company name, no contacts:** Do company research + social audit, skip contact profiles, ask who he's meeting
- **Petr gives a LinkedIn URL:** Extract the person/company info from the URL and proceed
- **Very small company / no online presence:** Note the gaps honestly, focus on what IS available, suggest what questions to ask to fill gaps during the meeting
- **Company is in a non-Czech, non-English market:** Research in the relevant language, output in English unless Petr says otherwise
- **Social profiles found but can't access content:** Document the profile URLs and follower counts (visible without login), note what you couldn't access, suggest Petr checks manually before the meeting
