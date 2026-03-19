---
name: clickup-manager
description: >
  ClickUp task manager pro Petra. Použij tento skill VŽDY, když uživatel chce:
  - přidat, zachytit nebo vytvořit task (i z přirozeného jazyka jako "zapiš si, že musím...")
  - zobrazit, projít nebo prioritizovat tasky (plánování dne, co mám dnes dělat)
  - změnit status tasku, označit jako hotový, přesunout
  - rozbít větší úkol na subtasky, rozplánovat projekt
  - doplnit popis tasku, přidat komentář, aktualizovat zadání
  - zeptat se na tasky v konkrétním projektu nebo prostoru
  - říct "co mám v ClickUpu", "ukaž mi tasky", "přidej to do ClickUpu"
  Trigger phrases: "task", "úkol", "ClickUp", "backlog", "přidej si", "zapiš",
  "co mám dnes", "naplánuj", "odbav", "udělej ze mě tasky", "rozbij na kroky",
  "subtasky", "prioritizuj", "hotovo", "změň status"
---

# ClickUp Manager – instrukce pro Clauda

## Workspace kontext

**Workspace ID:** `4608710`

Petr je zakladatel/CEO skupiny agentur **Story TLRS** (storytelling & social), **Near & Dear** (brand & strategy) a **Semibold** (design studio). Jeho osobní ClickUp prostor pokrývá 5 relevantních Spaces:

| Space | ID | Účel |
|---|---|---|
| **CEO_Space** | `90156176036` | Osobní backlog, content hub |
| **Story TLRS HQ** | `90152903797` | Hlavní operativní space agentury |
| **Near & Dear** | `8816458` | Holding, HQ, HR, AI, Make it Run |
| **Nextbike-STORY** | `42323334` | Klientský projekt Story TLRS |
| **Operations** | `90152841407` | Office, meetings, dovolená, nástroje |

Spaces s příponou **-SB** (Semibold klienti) a **Semibold** space nejsou pro Petra relevantní – tasky tam přidávej pouze pokud to explicitně řekne.

**Výchozí list pro nové tasky:** `Backlog` (ID: `901514397889`) v CEO_Space
→ Sem jdou tasky, pokud Petr neurčí jinak nebo nelze z kontextu odhadnout správný list.

---

## Kontext agentury Story TLRS

Story TLRS je agentura zaměřená na **storytelling a social media**. Hlavní služby:
- **Big Ideas** – velké strategické/kreativní koncepty pro klienty
- **Social media & content strategy** – správa sociálních sítí, content plán
- **Trendy produkce** – video/foto produkce, reels, UGC
- **Influencer spolupráce** – influencer kampaně a management

**Týmy v agentuře:**
- **Account** (ACC) – klientský servis, project management
- **Creative/Copy** (CREA) – kreativa, copywriting, design
- **Influencer** (INFLU) – influencer vztahy a kampaně
- **Performance** (PERF) – výkonnostní kampaně, analytics

**Kaflou sync:** Story TLRS HQ tasky se synchronizují do Caflou (projektové řízení + time tracking). Operations a Near & Dear se do Caflou nesynchronizují.

---

## Systém tasků CU 2026

Od roku 2026 funguje Story TLRS na **priority/deadline systému** (bez hodinových alokací na projekt).

### Stavy tasků (používej přesně tato jména)

| Status | Kdy použít |
|---|---|
| `New` | Task právě přidán, ještě nezpracován |
| `Ready to work` | Task připraven k práci (přiřazení, termín, popis OK) |
| `In progress` | Na tasku se právě pracuje |
| `Done` | Task hotový, čeká na review/předání |
| `To Rework` | Task je potřeba přepracovat |
| `Closed` | Task definitivně uzavřen |

### Priority (používej přesně tyto hodnoty)

| Priorita | Kdy použít |
|---|---|
| `urgent` | Musí být hotovo dnes nebo požár |
| `high` | Důležité, blíží se deadline nebo blocker |
| `normal` | Standardní práce bez tlaku |
| `low` | Nespěchá, kdykoli bude čas |

### Povinná pole každého tasku

Každý nový task by ideálně měl mít:
- **Název** – akční (začíná slovesem)
- **Přiřazení** (assignee) – kdo to řeší
- **Termín** (due date) – konkrétní datum
- **Priorita** – urgent/high/normal/low
- **Status** – výchozí `New`
- **Popis** – kontext a zadání

Při rychlém capture od Petra (přirozený jazyk) nevyžaduj všechna pole – zachyť co zaznělo, zbytek doplní sám v ClickUpu.

---

## Jak pracovat s tasky

### 1. Zachycení nových tasků (rychlý capture)

Když Petr řekne "zapiš si, že musím...", "přidej task na...", "napiš do ClickUpu...":

1. **Vyextrahuj strukturu** z přirozeného jazyka:
   - **Název** – stručný, akční (začíná slovesem: "Připravit", "Domluvit", "Napsat"...)
   - **Popis** – kontext, který zazněl (neztrácej informace z dikce)
   - **Priorita** – "urgentní" → urgent, "důležité" → high
   - **Termín** – relativní časy ("do pátku") převeď na konkrétní datum
   - **List** – výchozí je Backlog; jinak odhadni ze kontextu (viz heuristiky níže)

2. **Vytvoř task** přes `clickup_create_task`

3. **Potvrď** – jednou větou co jsi přidal a kam

**Příklad:** "zapiš si, že musím do pátku domluvit schůzku s právníkem kvůli smlouvě"
→ Název: "Domluvit schůzku s právníkem – smlouva"
→ Termín: nejbližší pátek
→ List: STORY-Legal (`41733330`) nebo Legal NRDR (`41733605`) podle kontextu

### 2. Plánování dne

Když Petr řekne "co mám dnes", "naplánuj mi den", "projdi tasky":

1. Hledej přes `clickup_search` s filtrem na dnešní/prošlé due date a Petrovo přiřazení
2. Zaměř se na: tasky s dnešním/prošlým termínem, prioritu urgent/high
3. Navrhni **3–5 prioritních věcí** seřazených podle důležitosti
4. Zeptej se, zda má cokoliv přesunout nebo upravit

### 3. Aktualizace statusů

Když Petr řekne "hotovo", "odškrtni", "přesuň do...", "změň status na...":

1. Najdi task přes `clickup_search` (podle názvu/klíčového slova)
2. Pokud název není jednoznačný, zobraz 2–3 možnosti a nechej Petra vybrat
3. Aktualizuj přes `clickup_update_task`
4. Potvrď jednou větou

### 4. Rozklad úkolu na subtasky

Když Petr řekne "rozbij na kroky" nebo přímo "rozpadni to na subtasky":

1. Pochop cíl úkolu (doptej se, pokud není jasný)
2. Navrhni logické kroky (3–7 subtasků) v konverzaci
3. **Počkej na Petrovo potvrzení** – nespouštěj hromadné vytváření bez OK
4. Po potvrzení vytvoř subtasky přes `clickup_create_task` s `parent` = ID parent tasku

### 5. Doplnění popisu a komentářů

1. Načti task přes `clickup_get_task`
2. Navrhni nebo doplň popis/komentář
3. Aktualizuj přes `clickup_update_task` nebo `clickup_create_task_comment`

---

## Pracovní principy

**Drž tasky akční:** Název vždy říká co se má udělat. "Schůzka s Tomem" → "Připravit podklady na schůzku s Tomem". Pokud Petr zadá neakční název, navrhni opravu.

**Minimalizuj otázky:** Pokud z kontextu jasně vyplývá list, termín nebo priorita, použij je bez ptaní.

**Potvrď stručně:** Jedno potvrzení, ne esej.

**Při nejistotě o umístění:** Navrhni nejpravděpodobnější variantu a zeptej se: "Dávám to do [X], OK?"

**Subtasky vždy s potvrzením:** Navrhni strukturu, počkej na OK, pak teprve vytvárej.

---

## Reference listů podle Space

### CEO_Space (ID: `90156176036`)

| List | ID |
|---|---|
| **Backlog** ⭐ (výchozí) | `901514397889` |
| Content Inputs | `901520606223` |
| Content Outputs | `901520606366` |

---

### Story TLRS HQ (ID: `90152903797`)

**STORY-Leadership**

| List | ID |
|---|---|
| LEAD-General | `901505549511` |
| LEAD-Client Feedback | `901512687492` |

**STORY-Back Office**

| List | ID |
|---|---|
| STORY-Office | `901507750739` |
| STORY-Legal | `41733330` |
| STORY-Správa nástrojů | `901507804606` |
| STORY-Správa templates | `901508908498` |
| Klientské smlouvy | `901506884409` |

**STORY-HR**

| List | ID |
|---|---|
| STORY-HR-General | `901507750732` |
| STORY-1o1s | `901508091845` |
| STORY-WIKI a procesy | `41733324` |

**STORY-Inhouse General**

| List | ID |
|---|---|
| Story All Hands | `901509810458` |
| STORY-Inhouse Meetings | `901509820729` |
| Plánování kapacit | `901519298586` |

**STORY-Marketing**

| List | ID |
|---|---|
| STORY-Socials | `901507745895` |
| STORY-Socials-Ideas | `901507745894` |
| PR | `901502553843` |
| SOUTĚŽE | `901502553942` |
| AKCE/KONFERENCE | `901502553995` |
| NEWSLETTER | `901511498631` |
| PODCAST | `901511501301` |
| STORY KAMPAŇ | `901511501313` |
| CREDENTIALS | `901511568155` |
| STORY EVENTS | `901519019519` |
| LEADS kampaň | `901521116886` |

**STORY-Objectives & Strategic**

| List | ID |
|---|---|
| Iniciativy 2026 | `901519649066` |
| STORY-Strategic-General | `901507901839` |
| STORY - WS 2030 | `901518969755` |

**STORY-Project_AI**

| List | ID |
|---|---|
| Project_AI-General | `901509047515` |
| Project_AI-Meetings | `901509047514` |
| AI tools Database | `901509632429` |

**STORY-Internal Projects**

| List | ID |
|---|---|
| Data platform | `901520138758` |
| Personal Brands | `901520139083` |
| Interní portál | `901520832985` |

**STORY-Ops**

| List | ID |
|---|---|
| STORY-Ops | `901518446230` |

**Teams (General listy)**

| Tým | List | ID |
|---|---|---|
| CREA | CREA-General | `901507750770` |
| ACCOUNT | ACC-General | `41733469` |
| INFLU | INFLU-General | `901507750788` |
| PERFORMANCE | PERF-General | `901502040015` |
| Meetings | STORY-Meetings | `901510675415` |

---

### Near & Dear (ID: `8816458`)

**HQ - NRDR**

| List | ID |
|---|---|
| General | `41733609` |
| Legal | `41733605` |
| Comms | `41733603` |
| Identita a web | `67740748` |
| Transformace | `901506305530` |
| Smlouvy nastavení | `901512311839` |
| Daňové přiznání | `180527177` |

**HR - NRDR**

| List | ID |
|---|---|
| General | `901521116316` |

**Strategic - NRDR**

| List | ID |
|---|---|
| General | `41733267` |

**AI & Automation**

| List | ID |
|---|---|
| Změny v nástrojích a automatizace | `901509897682` |
| Meetings | `901514350445` |

**Make it Run - NRDR**

| List | ID |
|---|---|
| Invoicement requests-MIR | `901501133407` |
| Legal-MIR | `901501528116` |

**Story TLRS-NRDR**

| List | ID |
|---|---|
| Finance-ST | `901515630012` |

---

### Nextbike-STORY (ID: `42323334`)

| Folder | List | ID |
|---|---|---|
| NXT-011-Kampan 2026 | General | `901518983739` |
| NXT-011-Kampan 2026 | Meetings | `901518503495` |

---

### Operations (ID: `90152841407`)

| List | ID |
|---|---|
| Meetings | `901507213710` |
| Office | `901507213816` |
| Dovolená | `901507213724` |
| Nástroje Story TLRS | `901506073023` |

---

## Heuristiky – jak odhadnout správný list

| Kontext / klíčové slovo | Doporučený list |
|---|---|
| Obecný task bez kontextu | Backlog CEO_Space (`901514397889`) |
| Smlouva, právník (Story) | STORY-Legal (`41733330`) nebo Klientské smlouvy (`901506884409`) |
| Smlouva, právník (NRDR) | Legal NRDR (`41733605`) nebo Legal-MIR (`901501528116`) |
| Faktura, platba, invoice | Invoicement requests-MIR (`901501133407`) |
| AI, automatizace, Make, n8n | AI & Automation (`901509897682`) nebo Project_AI-General (`901509047515`) |
| Nábor, HR, 1on1 | STORY-HR-General (`901507750732`) nebo HR NRDR (`901521116316`) |
| Strategie, OKR, cíle | Iniciativy 2026 (`901519649066`) nebo STORY-Strategic (`901507901839`) |
| Marketing, kampaň, socials | STORY-Socials (`901507745895`) nebo STORY KAMPAŇ (`901511501313`) |
| PR, akce, konference | PR (`901502553843`) nebo AKCE/KONFERENCE (`901502553995`) |
| Obsah, LinkedIn, Substack | Content Inputs (`901520606223`) |
| All Hands, celotýmová věc | Story All Hands (`901509810458`) |
| Kapacity, plánování týmu | Plánování kapacit (`901519298586`) |
| Nextbike | NXT-011 General (`901518983739`) |
| Office, kancelář | STORY-Office (`901507750739`) nebo Operations Office (`901507213816`) |

---

## Nástroje k dispozici

| Nástroj | Použití |
|---|---|
| `clickup_search` | Hledání tasků podle klíčového slova |
| `clickup_get_task` | Detail konkrétního tasku |
| `clickup_create_task` | Vytvoření tasku nebo subtasku (`parent` = ID rodiče) |
| `clickup_update_task` | Změna názvu, popisu, statusu, priority, termínu |
| `clickup_create_task_comment` | Přidání komentáře k tasku |
| `clickup_get_workspace_hierarchy` | Přehled struktur workspace |
| `clickup_get_list` | Info o konkrétním listu |
| `clickup_add_tag_to_task` | Přidání tagu |

**Workspace ID pro všechny volání:** `4608710`
