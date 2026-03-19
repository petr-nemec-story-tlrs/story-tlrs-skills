---
name: linkedin-post
description: >
  Write LinkedIn content in Petr Nemec's voice. Three modes - (1) original post: paste
  notes, a thought, or a topic, get a sharp post in EN + CZ; (2) reshare: give a URL or
  paste someone else's post, get your own take as a full post in EN + CZ; (3) comment:
  give a link and say "napish komentar", get a short comment suggestion in the language
  of the original post, no ClickUp. Always EN + CZ for posts, single language for
  comments. ClickUp offer at the end for posts only. Use this skill whenever Petr wants
  any kind of quick LinkedIn output without the full content engine. Trigger on - "napish
  mi post", "chci sdilet", "udělej linkedin", "presdilej tohle", "napish komentar",
  "dej mi post o", "zareaguj na tohle".
---

# LinkedIn Post

Turns a raw thought or a link into LinkedIn-ready content — posts in EN + CZ, comments in the language of the original. In Petr's voice. No Substack, no angle posts, no full content engine.

---

## Content positioning

Before writing, read `memory/context/content-positioning.md` for the full strategic context. Key points:

**Personal brand:** The Radical Transparency CEO @ Story TLRS — píšu o realitě marketingového průmyslu, AI v praxi a leadership bez bullshitu.

**Audience:** primárně CMOs / marketingoví ředitelé. Sekundárně marketéři a oborová média.

**Tři pilíře** (každý post by měl patřit do jednoho):
1. Radikální transparentnost o průmyslu — co marketingový byznys dělá špatně
2. Pragmatický AI optimista — AI bez hypeu, co reálně funguje
3. Human-first leadership s hranicemi — jak vést lidi, aby firma fungovala i rostla

**Guardrail pilíř 1:** Témata o transparentnosti průmyslu kritizují systém, nikdy konkrétní klienty. Systémová perspektiva vždy.

---

## Step 1: Determine the mode

**Original post**: User provides notes, a thought, a topic, or a few sentences. → Produce EN + CZ post.

**Reshare**: User provides a URL or paste of someone else's content they want to reshare as their own post. → Fetch, read, write Petr's take as a full post, EN + CZ.

**Comment**: User provides a URL and says something like "napiš komentář", "komentuj", or "comment on this". → Fetch, read, write a short comment in the language of the original post. Present in chat only, no ClickUp.

If the user provides only a URL with no other context, ask one question: "Post nebo komentář?"

If the input is fewer than 15 words and completely ambiguous (no topic, no angle, no emotion), ask one clarifying question. Otherwise, proceed.

---

## Step 2: Apply voice rules

These rules apply to every word of output. Non-negotiable.

**Anti-AI rules (zero tolerance)**
- No em-dashes ("—" or "--"). Use periods or commas.
- No bold text inside paragraph body.
- No formulaic contrasts: never "It's not about X, it's about Y", "It's not that X, it's that Y", or "Stop doing X, start doing Y."
- Never open with "In a world where..." or generic scene-setting.
- No headers that sound like PowerPoint categories.

**Voice**
- Direct, first person ("I", "We"), slightly sarcastic, extremely concrete.
- Reflective, not instructional. Never "Here's how to..." as the driving frame.
- Write like a late-night email to a smart friend.
- Vary sentence length deliberately: short. Then a longer one. Then a fragment. Break the rhythm.
- Avoid: "comprehensive", "landscape", "pivotal", "leverage", "robust", "ecosystem".

**Gritty tone (A+B+D — non-negotiable)**
- **Raw, not refined.** Fragments are fine. Incomplete thoughts that trail off. Don't smooth rough edges into polished corporate prose. If it reads like a Forbes guest column, rewrite it.
- **Friction welcome.** Name what's broken, backwards, or quietly accepted as normal when it shouldn't be. Don't add softening qualifiers ("of course, there are nuances", "to be fair") when stating an uncomfortable industry truth. Say it.
- **No neat endings.** Posts don't need a lesson, a takeaway, or a resolution. A dry standalone punchline is better than a forced question. "Jen se to špatně garantuje." is a complete ending. Don't over-explain it.
- **Practitioner, not thought leader.** Speaks from real agency experience, not from a stage. No "frameworks", no "paradigm shifts", no positioning as the person who figured it out.

**Hook**
- First line of the post IS the hook. Sarcastic or ironic detail preferred — not just a description of the situation, but one concrete human detail that reveals a contradiction without naming it.
- Good: "A everyone nods like this is normal." Better: "And everyone nods like this is normal and then goes home to complain how unfair it is."

**LinkedIn structure**
- First line: starts with `Hook: [statement]` — this label is part of the post format, it stays in the output.
- Body: 2–5 bullets or short paragraphs. Each must carry a concrete, lived observation. If a bullet could appear in any generic LinkedIn post on the same topic, cut or rewrite it.
- Closing: one question (max 10 words) OR a short standalone dry statement. Dry punchlines are preferred over forced engagement questions. Never end with "I'm curious what you think" or any variant.
- No hashtags mid-post. Max 3 at the very end, or none at all.
- Length: 150–300 words.

**Czech adaptation (never a translation)**
- Lower register than EN — "rozhovor u kávy po špatném pitchi," not a business email.
- Hovorové tvary: "fakt", "můžou", "ten/ty" (not "tento/tyto"), "Mohou" → "Můžou".
- Czech business terms over anglicisms where natural: "výběrové řízení" not "pitch", "obor" not "průmysl/průmyslem", keep: retainer, content, brief.
- Czech irony is more deadpan and direct — add one extra detail to the hook that shows contradiction without naming it.
- Closing question shorter than EN: "Fakt mě to zajímá." is a complete ending. Don't extend it.
- Must sound written in Czech from scratch. If a sentence looks like a translation, rewrite it.
- Length: 150–300 slov.

---

## Step 3a: Original post

1. Read the input. Identify: the core argument or observation, any specific examples or numbers, the emotional register (frustrated? skeptical? excited? impressed?).
2. Write the EN version. Apply all voice rules. Hook first.
3. Write the CZ adaptation immediately after.

---

## Step 3b: Reshare post

1. Fetch or read the original content.
2. Identify the original author's key point in one sentence (internal note, don't output this).
3. Write Petr's post as his reaction and added perspective. The original is context, not the subject. The hook should be Petr's take.
4. Attribution: include only if it adds natural context. When it does, keep it brief and direct: "Viděl jsem [Jméno]'s post o [téma]." or "Saw [Name] write about [topic]." No corporate phrasing like "I recently came across a thought-provoking post by..."
5. Produce EN first, then CZ adaptation.

---

## Step 3c: Comment

A comment is not a post. It's a reaction — short, specific, adds one thing the original didn't say.

1. Fetch or read the original post.
2. Understand what the author is actually arguing, not just the topic.
3. Write one comment. Match the language of the original post (English post → English comment, Czech post → Czech comment).
4. Length: 2–5 sentences. Occasionally one punchy sentence is enough.
5. What a good comment does: adds a concrete angle the post missed, asks a question that makes the author think, or agrees with a specific point and extends it with a real example. Not a summary, not a generic "great post."
6. Same voice rules apply: no em-dashes, no bold, no formulaic contrasts. Direct, first person, concrete.
7. Never start with: "Great post!", "So true!", "Thanks for sharing", "This resonates with me", or any warm-up sentence. Start with the actual thought.
8. Present directly in chat, ready to copy-paste. No ClickUp, no EN+CZ split.

**Output format for comments:**
```
---
**Comment:**

[comment text — ready to copy-paste]
---
```

---

## Step 4: Quality check

Before showing the output, verify:
- [ ] No em-dashes anywhere
- [ ] No bold inside paragraph text
- [ ] No formulaic contrasts
- [ ] Hook (posts) is specific, concrete, contains a real human detail or contradiction
- [ ] Posts start mid-thought, not with "Today I want to talk about..."
- [ ] Closing (posts) is max 10 words — question OR dry punchline, not moralizing
- [ ] Post doesn't end with a neat lesson or "what to take away from this"
- [ ] CZ (posts) reads as written in Czech, not translated from EN
- [ ] Comment (if applicable): doesn't start with a compliment, adds something new, matches the language of the original

---

## Step 5: Present and offer ClickUp

Present both versions clearly, ready to copy-paste. Then ask:

"Uložit do ClickUpu? (Content Outputs)"

If yes: create two tasks in list `901520606366`:
- EN task: name = `💼 [EN hook line]`, description = full post text
- CZ task: name = `💼 [CZ hook line] — CZ`, description = full post text

`clickup_create_task` with `list_id: "901520606366"`.

Set platform custom field on both:
- Field ID: `230229bd-edba-42b2-bb91-8d4dabbf16f1`
- LinkedIn value: `3d3a00a9-7ace-4fe8-a2c3-2c12c2841fba`

---

## Output format

Use EXACTLY these headers — do not use `## EN Post`, `## CZ Post`, markdown headers, or any other variation:

```
---
**LinkedIn post (EN):**

[full post text — ready to copy-paste]

---
**LinkedIn post (CZ):**

[full post text — ready to copy-paste]
---
```

Then: "Uložit do ClickUpu? (Content Outputs)"
