# Output Validation — Prospect Prep

> Run this checklist BEFORE declaring the prospect prep complete.
> Every CRITICAL item must pass. If any CRITICAL item fails, fix it before proceeding.

---

## File location & naming

| # | Check | Critical? | How to verify |
|---|-------|-----------|---------------|
| 1 | File saved in `memory/prospects/` directory | ✅ CRITICAL | `ls memory/prospects/` — file must appear here |
| 2 | File name format: `YYYY-MM-DD-company-name.md` | ✅ CRITICAL | Date = meeting date, name = lowercase + hyphens |
| 3 | File is NOT in root Claude Folder | ✅ CRITICAL | Must not be at top level |
| 4 | `memory/prospects/` directory exists | ✅ CRITICAL | Create with `mkdir -p` if missing |

---

## Company overview section

| # | Check | Critical? |
|---|-------|-----------|
| 5 | Company name filled | ✅ CRITICAL |
| 6 | Website URL included | ✅ CRITICAL |
| 7 | Industry/sector described | ✅ CRITICAL |
| 8 | Company size estimate (employees) | Recommended |
| 9 | Founding year or "on market since" | Recommended |
| 10 | Revenue/financials (if public) | Nice to have |
| 11 | IČO (Czech companies only) | Nice to have |
| 12 | Recent news section (even if "none found") | Recommended |

---

## Contact profiles section

| # | Check | Critical? |
|---|-------|-----------|
| 13 | Each known contact listed with role | ✅ CRITICAL |
| 14 | LinkedIn URL for each contact (or "not found") | ✅ CRITICAL |
| 15 | Professional background summary | Recommended |
| 16 | Public activity / posts / articles | Nice to have |

---

## Social media audit section

> **This entire section is CRITICAL. It is the core value of the prep.**

| # | Check | Critical? |
|---|-------|-----------|
| 17 | Section exists in the document | ✅ CRITICAL |
| 18 | At least 3 platforms checked (Instagram, Facebook, LinkedIn minimum) | ✅ CRITICAL |
| 19 | Each checked platform has a direct profile URL | ✅ CRITICAL |
| 20 | Each checked platform has follower/fan count | ✅ CRITICAL |
| 21 | Each checked platform has posting frequency | ✅ CRITICAL |
| 22 | Each checked platform has content types described | ✅ CRITICAL |
| 23 | Each checked platform has content themes described | ✅ CRITICAL |
| 24 | Each checked platform has visual style assessment | ✅ CRITICAL |
| 25 | Each checked platform has tone of voice assessment | ✅ CRITICAL |
| 26 | Each checked platform has engagement level | ✅ CRITICAL |
| 27 | Each checked platform has best performing content noted | ✅ CRITICAL |
| 28 | Each checked platform has gaps & opportunities | ✅ CRITICAL |
| 29 | Unchecked platforms explicitly marked "Not found / not active" | ✅ CRITICAL |
| 30 | Social media summary paragraph exists (100-200 words) | ✅ CRITICAL |
| 31 | Summary includes sophistication rating | Recommended |
| 32 | Summary includes agency vs. in-house assessment | Recommended |

---

## Story TLRS fit section

| # | Check | Critical? |
|---|-------|-----------|
| 33 | At least 2 services recommended | ✅ CRITICAL |
| 34 | Each recommendation has a SPECIFIC pitch (not generic) | ✅ CRITICAL |
| 35 | Pitches reference actual findings from research | ✅ CRITICAL |
| 36 | Potential scope described | Recommended |

---

## Talking points section

| # | Check | Critical? |
|---|-------|-----------|
| 37 | 8-12 questions listed | ✅ CRITICAL |
| 38 | Questions structured in conversation flow (rapport → current → goals → next) | ✅ CRITICAL |
| 39 | At least 2 questions reference specific research findings | Recommended |
| 40 | Questions are open-ended (not yes/no) | Recommended |

---

## ClickUp task

| # | Check | Critical? |
|---|-------|-----------|
| 41 | Task created in list `901521952965` | ✅ CRITICAL |
| 42 | Task has Petr as assignee (`6898386`) | ✅ CRITICAL |
| 43 | Task has meeting date as due date (if known) | Recommended |
| 44 | Task URL confirmed to Petr | ✅ CRITICAL |

---

## Quick pass/fail

Count CRITICAL items that passed vs. total CRITICAL items.

- **All CRITICAL items pass** → Output is complete ✅
- **Any CRITICAL item fails** → Output is INCOMPLETE ❌ → Fix before proceeding

The most common failures (based on past experience):
1. File saved to wrong location (root instead of `memory/prospects/`)
2. Social media audit section completely missing
3. Social media profiles found but no URLs included
4. ClickUp task not created
