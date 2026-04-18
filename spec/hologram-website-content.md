# Hologram Agentic AI — Website Content

> This document contains all website copy and illustration prompts for hologram.zone.
> Multi-page architecture: each page scrolls internally; top-level navigation links between pages.
> Illustration prompts are in blockquotes marked with `> Illustration:`.
> Button labels are in **[brackets]**.

---

## Site Map

### Navigation (persistent across all pages)

- Logo: [Hologram](https://hologram.zone/logo.svg)
- Menu: **Home** | **Agents** | **App** | **Demos** | **Pricing** | **Build** | **GitHub ↗**

### Page breakdown

| Page | Sections in this document | URL |
|------|--------------------------|-----|
| **Home** | Hero, The Problem, The Breakthrough, Four Pillars (Own · Verify · Discover · Govern), Standards & Ecosystem, Final CTA | `/` |
| **Agents** | Personal AI Agents, Corporate AI Agents | `/agents` |
| **App** | The Hologram App | `/app` |
| **Demos** | Live Demos (Avatar, Gov ID, GitHub, Wise, X) | `/demos` |
| **Pricing** | Pricing (Free, Pro, Business) | `/pricing` |
| **Build** | Open Source & Developers | `/build` |

### Footer — shared across all pages

---

## PAGE: HOME (`/`)

## SECTION 1 — Hero

### Headline

# AI Agents You Can Verify

### Subheadline

The open infrastructure for deploying AI agents that prove who they are, who controls them, and what they're authorized to do — before you connect.

### CTA

**[Get Started — Free]** **[See Live Demos]**

### Badge row

Open Source | Apache 2.0 | Built on Verana Trust Network

> **Illustration:**
>
> Full-bleed dark background with a luminous, abstract trust graph — glowing nodes (representing agents) connected by light threads, each node bearing a small verified badge (checkmark or shield). At the center, one node is larger and brighter: the user. The visual conveys a living network of trusted, interconnected AI agents.
>
> Style: dark, futuristic, clean — think Linear.app or Vercel hero. Animated particles flowing along the connection threads. No cartoons. No stock photos. Abstract, premium, technical.
>
> Alternative: a split-screen — left side shows a shadowy, anonymous chatbot with a question mark; right side shows a bright, verified agent with credential badges orbiting it. The contrast is the message.

---

## SECTION 2 — The Problem (short, punchy)

### Headline

## The Internet Has an AI Trust Problem

### Body

You talk to AI agents every day. Customer support bots. Financial assistants. Coding helpers. Health advisors.

**You have no idea who built them. No idea who controls them. No idea what they're allowed to do.**

There is no way to verify an AI agent's identity. No way to know if it's authorized by the organization it claims to represent. No way to audit its governance. No way to hold it accountable.

Passwords, OAuth tokens, and API keys were designed for humans clicking buttons — not for autonomous agents making decisions at machine speed.

**The AI agent era needs a trust layer. We built it.**

> **Illustration:**
>
> A grid of identical, faceless chatbot icons — all looking the same, all anonymous. Dark, slightly ominous. One of them has a subtle red glow (the impostor). The message: you can't tell which agent to trust.
>
> Style: minimal, monochrome with one accent color (red for danger). Slightly unsettling. Should make the viewer feel the problem viscerally.

---

## SECTION 3 — The Breakthrough

### Headline

## Proof-of-Trust

### Subheadline

Every agent proves its identity before you connect. Not after. Not "trust me." Prove it.

### Body

When you connect to a Hologram agent, something unprecedented happens:

**1. The agent presents its credentials.**
Signed, tamper-proof, W3C Verifiable Credentials — proving who operates it, what organization stands behind it, and what governance framework constrains it.

**2. Your app verifies the entire trust chain.**
Credentials are traced back through their issuers, through trust registries, all the way to a public, auditable Verifiable Public Registry on the Verana network. Every signature checked. Every authority confirmed.

**3. You see the result before connecting.**
A clear trust summary: the operator's identity, the service description, on-chain reputation, trust deposit value, and governance framework. You decide whether to proceed.

**No blind trust. No hope. Cryptographic proof.**

### Visual element — Trust Resolution Flow

```text
You ──→ Agent presents credentials
         │
         ├─ Service Credential ← issued by Organization
         │                        ← registered in Trust Registry
         │                           ← anchored on Verana Network
         │
         └─ Reputation: 12,847 credentials issued
            Trust deposit: $176,327
            Slashing history: none
            ★★★★★

✅ Verified. Connect?  [Yes] [No]
```

> **Illustration:**
>
> A phone screen (Hologram app) showing the Proof-of-Trust UI: at the top, the agent's name and logo; below it, a trust card showing "Operated by: Acme Corp", "Authorized by: Financial Services Trust Registry", a green verified badge, a trust deposit amount, and a star rating. Below the card: a bright green "Connect" button and a subtle "Decline" option.
>
> Around the phone, faint lines trace the trust resolution path — from the agent, through the credential issuer, through the trust registry, to the Verana network (represented as a decentralized graph at the bottom). The lines glow as they resolve, showing the verification happening in real time.
>
> Style: clean, modern mobile UI mockup floating on dark background. The trust card should feel like a premium financial app — not a crypto wallet. Think Apple Pay verification screen meets a security certificate.

---

## SECTION 4 — The Four Pillars

### Section intro

## What Makes Hologram Different

Four principles. One infrastructure. A new standard for AI agents.

---

### Pillar 1: Own

#### Headline

### Own Your Agents

#### Body

Deploy anywhere. Your cloud, your datacenter, your laptop. No vendor lock-in. No platform tax. No gatekeeper between you and your agent.

Every agent is defined by a single YAML manifest — its **Agent Pack** — capturing personality, language, LLM, tools, authentication, and access control. Change your LLM provider in one line. Add a new tool by declaring an MCP server. Deploy with Helm. Scale with Kubernetes.

Choose your LLM: OpenAI, Anthropic, Ollama, DeepSeek, Groq — or any OpenAI-compatible API. Run it locally for full data sovereignty. Run it in the cloud for scale. Your choice.

**Your infrastructure. Your data. Your rules.**

> **Illustration:**
>
> A YAML code snippet floating in space, clean and syntax-highlighted, with visual annotations showing what each section controls: "personality" → a chat bubble icon, "llm" → a brain icon, "mcp_servers" → a plug/connector icon, "rbac" → a shield icon. The YAML is the single source of truth; everything radiates from it.
>
> Below the YAML, deployment targets: icons for AWS, GCP, Azure, on-prem server, and a laptop — all connected by dotted lines to the YAML, showing "deploy anywhere."
>
> Style: developer-friendly, dark code editor aesthetic. The YAML should be real, not placeholder — use an actual Agent Pack snippet.

---

### Pillar 2: Verify

#### Headline

### Verify Everything

#### Body

Every Hologram agent is identified by a **Decentralized Identifier (DID)** and holds **W3C Verifiable Credentials** proving:

- **Who operates it** — a cryptographically signed Organization Credential
- **What it does** — a Service Credential describing capabilities and scope
- **Who governs it** — a traceable credential chain back to a public Trust Registry

This is not opt-in. It is architectural. Every agent deployed through Hologram is verifiable by construction. There is no "unverified mode."

Connecting parties — humans or other agents — perform **trust resolution** automatically. The trust chain is walked, every signature is checked, and a Proof-of-Trust is produced before the first message is exchanged.

**Trust is not assumed. It is proven.**

> **Illustration:**
>
> A credential chain visualization: three cards stacked/connected vertically.
>
> Top card: "Service Credential" — "AI Customer Support" with a service icon.
> Middle card: "Organization Credential" — "Acme Corp" with a building icon.
> Bottom card: "Trust Registry" — "Financial Services Ecosystem" with a Verana logo.
>
> Lines connect them showing the issuance chain. Each card has a small green checkmark. At the bottom, the Verana network is represented as a subtle distributed ledger icon.
>
> Style: clean, card-based UI. White cards on dark background. Each card has a subtle glow indicating it's been verified. The chain flows downward like a trust waterfall.

---

### Pillar 3: Discover

#### Headline

### Discover Trusted Agents

#### Body

Deploy an agent. Register it on the Verana network. It's instantly discoverable by every other agent and user in the ecosystem.

No app store submission. No central directory. No approval queue. You deploy, you register, you exist.

Agents can acquire **skill credentials** — verifiable claims about capabilities, certifications, or compliance. A coding agent proves it passed a security audit. A financial agent proves regulatory compliance. A healthcare agent proves HIPAA certification.

Other agents discover yours, inspect its credentials, and decide whether to interact — automatically, without human intervention. This is how the **agentic internet** works: agents finding agents, verifying trust, collaborating at machine speed.

**Deploy. Register. Be found. Be trusted.**

> **Illustration:**
>
> A search/discovery interface: a minimal search bar at top with "Find agents with ISO 27001 certification" typed in. Below it, a grid of agent cards — each showing an agent name, operator, trust score, and skill credential badges. One card is highlighted/selected, showing its full credential set expanding.
>
> Around the grid, faint connection lines show agents discovering and connecting to each other — a living network forming in real time.
>
> Style: clean discovery UI, like a marketplace but more technical. Dark background, bright accent cards. The search should feel powerful and instant.

---

### Pillar 4: Govern

#### Headline

### Humans Stay in Control

#### Body

AI agents serve humans. They must remain under human authority.

**Role-Based Access Control** — Employees authenticate with Verifiable Credentials. The agent extracts roles and shows only the tools each role permits. No passwords. No OAuth. Cryptographic proof of identity and authorization.

**Approval Workflows** — Sensitive operations require human approval before execution. A customer support agent can look up account details, but transferring funds requires a manager's sign-off — in real time, through a chat interface.

**Enterprise IAM Integration** — Connect your agents to your existing identity infrastructure. Issue credentials to employees. Let them participate in agentic workflows with zero friction.

**Parental Controls** — Every agent declares a minimum age requirement. The Hologram app enforces it. Kid-safe by design.

**On-Chain Auditability** — Every agent accumulates public, immutable reputation: credentials issued, credentials verified, trust deposit value, slashing history. Every governance framework is published and auditable.

**Agents are powerful. Governance makes them safe.**

> **Illustration:**
>
> A split view. Left side: an employee chat with an AI agent, showing a contextual menu with available actions (some greyed out based on role). A badge shows "2 pending approvals." Right side: a manager's view showing an approval request card — "Transfer $5,000 to vendor X — Requested by: Jane (Finance)" with Approve/Reject buttons.
>
> Below: a subtle governance dashboard strip showing on-chain stats: "14,293 credentials issued | Trust deposit: $176K | 0 slashing events | ★★★★★"
>
> Style: professional enterprise UI. Clean, light cards on dark background. Should feel like a premium business tool — not a consumer chat app.

---

## SECTION 5 — Standards & Ecosystem

### Headline

## Built on Open Standards

### Logo row

Display logos for: DIDComm | W3C Verifiable Credentials | Decentralized Identifiers (DIDs) | Model Context Protocol (MCP) | Trust Over IP | OpenWallet Foundation | Credo | DIF | DAIAA

### Body

Hologram doesn't reinvent protocols. It implements them — and contributes back. Every component is built on open, interoperable standards maintained by global standards bodies.

> **Illustration:**
>
> A horizontal logo strip, clean, evenly spaced, grayscale logos with subtle hover color. Below the logos, a single line: "Interoperable by design. No vendor lock-in. Ever."
>
> Style: credibility bar. Like the "trusted by" section on enterprise SaaS sites, but for standards instead of customers.

---

## SECTION 6 — Final CTA

### Headline

## Own Your Agents. Verify Everything. Trust No One Blindly.

### Body

The internet was built without a trust layer. AI agents make that gap dangerous. Hologram fills it — with open infrastructure, cryptographic proof, and verifiable governance.

The future is not AI agents you hope you can trust.
It is AI agents you can **verify** you can trust.

### CTA

**[Get Started — Free]** **[Talk to Our Team]**

> **Illustration:**
>
> A wide, cinematic closing visual: the trust graph from the hero section, but now fully alive — hundreds of glowing nodes connected by verified threads, spanning the full width. At the center, larger and brighter: the Hologram logo mark. The visual is aspirational — this is the verifiable internet of agents, and it's being built right now.
>
> Style: epic, wide, immersive. Dark background, luminous connections, the full network alive and growing. Should feel like looking at the future.

---

## PAGE: AGENTS (`/agents`)

## SECTION 7 — Your Personal AI Agent

### Headline

## Your AI. Your Rules.

### Subheadline

A personal agent that acts on your behalf, protects your privacy, and proves who you are — everywhere on the internet.

### Body

Tomorrow, you won't browse the internet. Your agent will.

Your **Personal AI Agent** is your digital representative. It runs wherever you choose — your home server, your cloud, your phone. It's identified by a DID that only you control.

**What your agent does for you:**

- **Acts on your behalf** — books flights, pays bills, schedules meetings, files documents. It navigates the digital world so you don't have to.
- **Guards your inbox** — when other agents or services try to connect, your agent performs trust resolution first. Friends get through. Verified businesses you've opted into get through. Everything else is filtered.
- **Protects your data** — selective disclosure means your agent shares only the minimum necessary information. Need to prove you're over 18? Your agent proves it without revealing your birthdate.
- **Remembers everything** — persistent memory across all conversations and tasks. Your preferences, your history, your contacts — stored locally, under your control.
- **Connects to your tools** — banking APIs, calendar, email, smart home — via MCP servers declared in your agent's manifest. Add new capabilities without writing code.

### CTA

**[Get Your Free Agent]**

> **Illustration:**
>
> A person (abstract, stylized silhouette — not a photo) sitting relaxed while their personal agent (represented as a glowing orb or abstract AI avatar) handles a constellation of tasks around them: a flight booking card, a bank notification, a calendar event, a credential presentation — all floating in orbit around the agent, connected by subtle light threads.
>
> On one side, incoming connection requests: a green-badged verified business gets through; a red-flagged unknown entity is blocked. The agent is the gatekeeper.
>
> Style: warm, human, empowering. Contrast with the darker, more technical sections above. The person should feel at ease — their agent has it handled.

---

## SECTION 8 — For Business

### Headline

## AI Agents Your Customers Can Trust

### Subheadline

Deploy corporate AI agents that are verifiable, compliant, and governable. Build trust at scale.

### Body

Your customers are tired of anonymous chatbots. They don't know if they're talking to your company or an impostor. They don't know what data is being collected. They don't know who's accountable.

**Hologram changes that.**

Every corporate agent you deploy is backed by your organization's verifiable identity. Your customers see your name, your credentials, your governance framework — before they type a single message. Trust is established cryptographically, not by a logo that anyone can copy.

**The corporate agent stack:**

- **Your corporation as trust anchor** — register on the Verana network, obtain Organization and Service credentials, create your Trust Registry with custom credential schemas
- **Agent hierarchy** — deploy specialized agents under your corporation's umbrella. Customer support. Financial operations. HR onboarding. Compliance. Each inherits your trust chain.
- **Enterprise authentication** — employees authenticate with Verifiable Credentials issued by your IAM. Role-based access control at the tool level. Approval workflows for sensitive operations.
- **Any LLM, any tool** — connect to OpenAI, Mistral, Kimi, Anthropic... or your own self-hosted model. Integrate enterprise tools via MCP: CRM, ERP, GitHub, Banks, Salesforce, internal APIs,...
- **Domain knowledge** — feed your agent corporate documentation via RAG. It answers from your knowledge base — not hallucinated guesses.
- **Multi-language** — every agent supports English, Spanish, French, Portuguese, and any language you decide. Automatic detection.
- **Production-ready** — Helm charts, Kubernetes-native, horizontal scaling, monitoring. Deploy the full stack with one command.

### Callout box

> **Deploy a corporate AI agent in 5 minutes.**
> Define your Agent Pack in YAML. Point a Helm chart at it. Your agent is live — verifiable, authenticated, governed.
>
> **[Talk to Us]** **[Read the Docs]**

> **Illustration:**
>
> A corporate agent hierarchy diagram — clean, modern, not a boring org chart. At the top: a glowing corporation node labeled "Acme Corp (Trust Anchor)" with a verified badge. Below it, branching lines connect to five agent nodes, each with a distinct icon:
>
> - Customer Support (headset icon)
> - Financial Ops (chart icon)
> - HR Onboarding (people icon)
> - Compliance (shield icon)
> - Partner API (plug icon)
>
> Each agent node shows a mini credential card beneath it. The whole structure floats on a subtle grid representing the Verana network.
>
> Below the hierarchy: a customer's phone showing the Proof-of-Trust screen for the Customer Support agent — "Operated by Acme Corp | Financial Services Ecosystem | ★★★★★ | Trust Deposit: $176K" — demonstrating what the end-user sees.
>
> Style: enterprise-grade, premium, dark background with bright accent nodes. Should feel like infrastructure — solid, reliable, scalable.

---

## PAGE: APP (`/app`)

## SECTION 9 — The Hologram App

### Headline

## The App That Verifies Everything

### Subheadline

Private messaging meets verifiable AI. Free. Open source. Self-sovereign.

### Body

The **Hologram Messaging App** is your gateway to the verifiable internet. It's a messaging app, a credential wallet, and a trust-resolution engine — in one. And it's fully open source.

**Private messaging** — End-to-end encrypted via DIDComm. No server can read your messages. No metadata is collected. No account required.

**Proof-of-Trust** — Before you connect to any service or agent, you see exactly who operates it, what credentials it holds, and who governs it. You decide.

**Credential wallet** — Receive, store, and present Verifiable Credentials. Authenticate to services without passwords. Prove your identity, your age, your qualifications — with selective disclosure.

**Strong identity verification** — Scan NFC-enabled passports and ID cards. Biometric verification with liveness detection (open-source, NIST FRTE 1:1 registered).

**Audio and video calls** — WebRTC-based real-time communication, integrated into agent interactions.

**Kid-safe** — Parental controls enforce age restrictions based on service metadata. Set a birthdate, protect it with a PIN, and your child only connects to age-appropriate services.

The Hologram Messaging App is a **Verifiable User Agent**. Have different needs? Extend it, or build your own Verifiable User Agent from scratch using the open [Verifiable Trust](https://verana-labs.github.io/verifiable-trust-spec/) spec. The standard is open — the app is one implementation.

### App store badges

**[Download on the App Store]** **[Get it on Google Play]** **[Explore on AppGallery]**

> **Illustration:**
>
> Three phone mockups floating at slight angles (iPhone, Android, Huawei), each showing a different screen of the Hologram app:
>
> - **Left phone:** Chat list showing conversations with verified agents (each with a green badge) and friends. Clean, modern messaging UI.
> - **Center phone (larger, in front):** The Proof-of-Trust screen — showing a trust card for "Acme Customer Support" with operator name, credential badges, trust score, and a bright "Connect" button.
> - **Right phone:** A credential wallet screen showing stored credentials — a Digital ID card, a Hello World credential, an organization badge.
>
> Below the phones, subtle app store badges.
>
> Style: premium app showcase. Phones should have realistic device frames. Screens should show actual UI (use existing captures as reference). Dark background with subtle gradient. The center phone should be the hero — the Proof-of-Trust screen is the money shot.

---

## PAGE: DEMOS (`/demos`)

## SECTION 10 — Live Demos

### Headline

## See It Live

### Subheadline

Real agents. Real credentials. Real trust resolution. Try them now.

### Body

Every demo is open source, deployed as a Verifiable Service on the Verana network, and available for you to try right now with the Hologram app.

---

### Demo 1: Avatar — Your Digital Identity

**Create your verifiable avatar in minutes.**

Choose a name, upload a photo, and receive a Verifiable Credential that represents you across the entire ecosystem. Protect your avatar with a password or authenticator app. Lose your phone? Recover it anytime.

Your avatar is yours — portable, verifiable, and under your control.

**[Try It]** **[GitHub]**

> **Illustration:**
>
> A friendly two-step flow: (1) A phone showing a chat with the Avatar agent — the user typing "@maria" as their avatar name. (2) A beautiful credential card sliding into the wallet with a profile photo and a green verified glow.
>
> Style: warm, personal, inviting. Should feel like creating a profile — but one you actually own.

---

### Demo 2: Government Digital ID

**Get a digital identity credential from your passport.**

Scan the NFC chip in your passport or ID card. Complete a liveness check — the agent compares your face to the document photo in real time. If everything matches, you receive a Government Digital ID credential you can use anywhere.

Production-grade identity verification. Open source.

**[Try It]** **[GitHub]**

> **Illustration:**
>
> A three-step flow:
> (1) Phone camera scanning a passport page.
> (2) Phone tapped against the passport for NFC reading — a signal pulse animation.
> (3) The user's live face on one side, the passport photo on the other, with a green "Match" indicator. Below: a Government Digital ID credential card appearing in the wallet.
>
> Style: high-tech, security-focused. Should feel like serious identity infrastructure — not a toy. Dark background with blue/green accents for the verification steps.

---

### Demo 3: GitHub Agent

**Your AI-powered GitHub assistant.**

Search repositories, browse issues and pull requests, explore code — all through a verified AI agent in a private chat. Connect your own GitHub account securely, and the agent works on your behalf. Multi-language, instant responses, and every interaction is private.

**[Try It]** **[GitHub]**

> **Illustration:**
>
> A phone showing a chat with the GitHub Agent. The agent has a verified badge and the GitHub logo. The conversation shows the user asking "Show me the latest PRs on my repo" and the agent responding with a clean, formatted list. A subtle MCP connector icon in the corner hints at the power behind it.
>
> Style: developer-friendly but approachable. Dark code aesthetic softened by the warm chat UI. Should appeal to both technical and non-technical users.

---

### Demo 4: Wise Financial Agent

**Manage your international finances through a trusted AI.**

Check balances, review transfers, get live exchange rates — all through a verified AI agent connected to your Wise account. Authenticate with your credential, link your own Wise token securely, and manage your money through conversation.

**[Try It]** **[GitHub]**

> **Illustration:**
>
> A phone showing a chat with the Wise Agent. The agent has a verified badge. The conversation shows: User: "What's my EUR balance?" — Agent responds with a clean balance card showing multiple currencies. Below, a contextual menu with quick actions.
>
> Style: financial, trustworthy, clean. Should feel like a premium banking app embedded in a chat. Blue/green trust accents.

---

### Demo 5: X (Twitter) Agent

**Compose, publish, and manage your social media — with AI that can draw.**

Draft tweets, search posts, manage your timeline — and generate images for your posts on the fly. The agent writes, you review and approve before anything goes live. Voice notes welcome — just talk, and the agent transcribes and acts.

**[Try It]** **[GitHub]**

> **Illustration:**
>
> A phone showing a chat with the X Agent. The conversation shows the user saying "Write a tweet about our product launch and generate an image for it." The agent responds with a draft tweet and a generated image preview, with "Approve" and "Edit" buttons below.
>
> Style: creative, vibrant. Should feel social-media-native. Brighter, more colorful than the other demos — this is about creativity and expression.

---

## PAGE: PRICING (`/pricing`)

## SECTION 11 — Pricing

### Headline

## Start Free. Scale When Ready.

### Subheadline

Your personal AI agent is free. Forever. Upgrade for power. Contact us for business.

---

### Free Tier

#### Headline

### Free

**$0 / month**

#### Includes

- 1 personal AI agent with a DID on the Verana network
- Hologram Messaging App — unlimited, end-to-end encrypted
- Credential wallet — receive, store, present credentials
- Basic LLM (Ollama local or 2060.io-hosted quota)
- Community MCP integrations (calendar, email, contacts)
- Hosted on Hologram Cloud
- Trust resolution and Proof-of-Trust for all connections

#### CTA

**[Get Started — Free]**

#### Fine print

No credit card required. Your DID and data are yours — export anytime.

---

### Personal Pro

#### Headline

### Pro

**$9 / month**

#### Includes

Everything in Free, plus:

- Up to 5 personal agents
- Any LLM provider (OpenAI, Anthropic, DeepSeek, Groq, or self-hosted)
- Unlimited MCP server connections (including premium connectors)
- RAG — feed your agent documents, knowledge bases, notes
- Persistent conversation memory (unlimited)
- Custom agent domain (yourname.hologram.zone)
- Priority hosting on Hologram Cloud

#### CTA

**[Upgrade to Pro]**

#### Fine print

Cancel anytime. All agents and credentials remain yours.

---

### Business

#### Headline

### Business

**Let's talk.**

#### Body

Hologram Agentic AI for your organization. Managed hosting, enterprise SLAs, RBAC, approval workflows, IAM integration, custom credential schemas, dedicated support.

#### Includes

- Unlimited agents under your corporation's trust anchor
- Any LLM — including self-hosted, air-gapped deployments
- Full RBAC with approval workflows
- Enterprise IAM integration for employee credential issuance
- Custom Trust Registry and credential schemas on the Verana network
- MCP integration at scale — CRM, ERP, financial APIs, internal tools
- RAG with corporate documentation
- White-label Hologram app option
- Dedicated Kubernetes namespace or on-prem deployment
- 24/7 support with dedicated engineering
- SLA up to 99.99%

#### CTA

**[Contact Us]**

#### Fine print

Open source. Self-hosted is always free. We're here when you need managed infrastructure, support, and ecosystem services.

> **Illustration:**
>
> Three pricing cards side by side on a dark background. Free card: clean, minimal, white outline. Pro card: slightly elevated, with a subtle purple/blue gradient border — the "recommended" pick. Business card: premium, with a gold/amber accent and "Contact Us" instead of a price.
>
> Style: standard SaaS pricing grid but premium. The Pro card should visually pop as the sweet spot. The Business card should feel exclusive — "this is for serious organizations."

---

## PAGE: BUILD (`/build`)

## SECTION 12 — Open Source & Developers

### Headline

## Built in the Open

### Subheadline

Every component is open source. Apache 2.0. Fork it, audit it, build on it.

### Body

Hologram Agentic AI is not a black box. The entire stack — from the messaging app to the trust resolution engine to the AI agent framework — is open source and freely available.

### Component grid

- **Hologram Messaging App** — Verifiable User Agent for iOS, Android, Huawei. Production.
- **VS Agent** — DIDComm agent with credential management and DID lifecycle. Production.
- **Generic AI Agent** — Modular LLM agent: MCP, RAG, RBAC, approval workflows, multi-language. Production.
- **Verana Network** — Verifiable Public Registry, trust registries, credential schemas. Testnet live.
- **Verifiable Trust Spec** — The open specification defining the trust layer. v4.
- **Hologram SDK** — Build custom Verifiable Services from scratch. Production.

### CTA

**[Explore on GitHub]** **[Read the Docs]** **[Join Discord]**

> **Illustration:**
>
> A GitHub-inspired grid showing the six components as repository cards — each with a name, short description, language badge, star count, and a "Production" or "Testnet" status indicator. The grid floats on a dark background with subtle code patterns.
>
> Alternatively: a clean architecture diagram showing how the components connect — VS Agent at the core, AI Agent plugged into it, MCP servers branching off, Verana network above, Hologram app below. Each component is clickable/labeled.
>
> Style: developer-focused. Should make engineers think "I want to build with this." Dark theme, monospace accents, GitHub-green activity indicators.

---

## Footer

### Links

- **Product:** Home | Learn | Demos | Pricing
- **Developers:** Documentation | GitHub | Discord | SDK
- **Company:** 2060.io | Verana Foundation | Blog
- **Legal:** Privacy Policy | Terms of Service | Cookie Policy

### Social

LinkedIn | X | Discord

### Ecosystem logos

DIDComm | W3C | Credo | DIF | Trust Over IP | OpenWallet | DAIAA

### Bottom line

Hologram is developed by [2060.io](https://2060.io), built on the [Verana Verifiable Trust Network](https://verana.io).

© 2026 2060 OÜ — Ahtri tn 12, 10151 Tallinn, Estonia

---

## Design Notes

### Typography
- Font: Euclid Circular A (per existing brand guidelines)
- Headlines: bold, large, generous spacing
- Body: regular weight, high readability, generous line height

### Color — Dark theme (default)
- Primary background: deep dark (near-black, like Linear/Vercel)
- Accent: Hologram brand purple/blue
- Trust indicators: green for verified, amber for caution, red for rejected
- Text: white/light gray on dark, with bold highlights

### Color — Light theme
- Primary background: clean white / very light gray
- Accent: same Hologram brand purple/blue (slightly deeper for contrast)
- Trust indicators: same green/amber/red
- Text: dark gray / near-black, with bold highlights
- Cards and sections: subtle gray borders or light shadows for separation

### Theme behavior
- Default: dark. Respects OS `prefers-color-scheme` on first visit.
- Toggle: sun/moon icon in the navigation bar. Persists choice in localStorage.

### Motion
- Hero: particle animation along trust graph threads
- Proof-of-Trust section: animated trust resolution — credential cards appearing one by one, verification checkmarks animating in sequence
- Pricing cards: subtle hover lift
- Scroll-triggered section reveals with fade-up

### Responsive
- Desktop: full-width sections, side-by-side layouts for features
- Tablet: stacked columns, reduced illustration size
- Mobile: single-column, full-width cards, bottom-fixed CTA on pricing

### Key UX principle
**Innovation first, explanation second.** Every section leads with the outcome (what the user gets), then explains the mechanism (how it works). The visitor should feel the impact before understanding the technology.
