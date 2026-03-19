# Story TLRS Skills

Claude Code skills for the Story TLRS team. Install these to give Claude context about our brand, tools, workflows, and clients.

## Skills in this repo

| Skill | What it does |
|-------|-------------|
| [`story-tlrs-offer`](./story-tlrs-offer/) | Generates client offer presentations (PPTX) using the Story TLRS brand template — 21 slide types, full XML catalog |
| [`story-tlrs-docx`](./story-tlrs-docx/) | Creates branded Word documents (proposals, briefs, pricing docs, client handouts) using the brand.js library |
| [`clickup-manager`](./clickup-manager/) | ClickUp task management — creates, updates, and routes tasks across Story TLRS workspaces with the correct list IDs |
| [`prospect-prep`](./prospect-prep/) | Research and prep for new business meetings — social audit, company research, talking points |

## How to install

### Via Claude Code Skills Plugin (recommended)

In Claude Code, open the Skills panel and add each skill folder using the "Add local skill" option. Point it to the skill's subdirectory (e.g. `story-tlrs-offer/`).

### Manual installation

Copy the skill folder into your Claude Code skills directory:

```bash
# macOS
SKILLS_DIR="$HOME/Library/Application Support/Claude/local-agent-mode-sessions/skills-plugin/*/*/skills"
cp -r story-tlrs-offer "$SKILLS_DIR/"
```

## Dependencies

Some skills depend on other skills or external tools. Make sure these are also installed:

### From Anthropic's skills plugin (built-in to Claude Code)
- `pptx` — required by `story-tlrs-offer` and `tender-processor`
- `docx` — required by `story-tlrs-docx` and `tender-processor`
- `pdf` — required by `tender-processor`

### From this repo
- `story-tlrs-offer` — required by [`tender-processor`](https://github.com/petr-nemec-story-tlrs/tender-processor)
- `story-tlrs-docx` — required by `tender-processor`
- `clickup-manager` — required by `prospect-prep`, `content-engine`, `tender-processor`

### External tools
- [ClickUp MCP](https://github.com/petr-nemec-story-tlrs/) — for actual ClickUp API calls
- [Apify MCP](https://apify.com/) — for research agents in `prospect-prep` and `tender-processor`

## Related repos

| Repo | Description |
|------|-------------|
| [`tender-processor`](https://github.com/petr-nemec-story-tlrs/tender-processor) | End-to-end tender/pitch processing skill — depends on several skills from this repo |

## Sensitive data note

`clickup-manager`, `prospect-prep`, `content-engine`, and `linkedin-post` contain Story TLRS-specific ClickUp list IDs and workspace structure. These are not API keys — they won't work without a valid ClickUp API token — but they do reflect our internal workspace layout.

If you're adapting these skills for a different workspace, update the list IDs in the relevant `SKILL.md` files to match your ClickUp structure.
