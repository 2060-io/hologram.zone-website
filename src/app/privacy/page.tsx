import { COMPANY } from "@/lib/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "How 2060 OÜ collects and protects your data across the Hologram Messaging App, Hologram Agentic Cloud, and our websites. Local-first by design, with clear export and deletion controls.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">Privacy Policy</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            How 2060 OÜ collects, uses, and protects your data across the Hologram Messaging App, Hologram Agentic Cloud, and our websites.
          </p>
          <p className="mt-6 text-xs tracking-wider uppercase text-neutral-500">
            <strong className="text-neutral-900 dark:text-white">Effective</strong> Jan 14, 2024 ·{" "}
            <strong className="text-neutral-900 dark:text-white">Last updated</strong> April 23, 2026
          </p>
        </div>
      </section>

      <section className="pb-24">
        <article className="legal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-700 dark:text-neutral-300">
          <p>This Privacy Policy explains what information <strong>2060 OÜ</strong> (&quot;2060.io&quot;, &quot;we&quot;, &quot;us&quot;) collects when you use the Hologram services, how we use it, and the rights you have over it. It applies to:</p>
          <ul>
            <li>The <strong>Hologram Messaging App</strong> (iOS, Android, desktop)</li>
            <li><strong>Hologram Agentic Cloud</strong> — our hosted personal-agent service (Free, Pro, and Business plans)</li>
            <li>The <strong>hologram.zone</strong> and <strong>2060.io</strong> websites</li>
            <li>Any related SDKs, APIs, and developer tools</li>
          </ul>
          <p>If you run Hologram on your own infrastructure (self-hosted, open source), this policy does not apply — you act as the data controller.</p>

          <hr />
          <h2>1. Who we are</h2>
          <p>
            The data controller is <strong>2060 OÜ</strong>, a private limited company registered in Estonia, with its registered office at {COMPANY.address}.
            You can reach us through our <strong><a href={COMPANY.contactUrl}>contact form</a></strong> for any privacy-related question or to exercise your rights.
          </p>

          <hr />
          <h2>2. The two Hologram privacy models</h2>
          <p>Hologram is built around two very different data models. Understanding which one applies to you determines what we store about you.</p>

          <h3>2.1 Hologram Messaging App — local-first, no online account</h3>
          <p>The Hologram Messaging App is a <strong>self-custody</strong> application. We do <strong>not</strong> create an online account when you install it. Your profile, contacts, conversations, and verifiable credentials are created and stored locally on your device, under your exclusive control.</p>

          <h4>What stays on your device</h4>
          <ul>
            <li>Your chosen display name and optional profile picture</li>
            <li>Your contacts and connections</li>
            <li>Your verifiable credentials (in a ciphered software enclave)</li>
            <li>Your message history</li>
          </ul>

          <h4>What transits through our infrastructure</h4>
          <p>To deliver end-to-end encrypted messages to devices that are temporarily offline, we operate relay servers. These servers handle:</p>
          <ul>
            <li>End-to-end encrypted message payloads (which we cannot decrypt)</li>
            <li>Randomly generated authentication tokens, keys, and push notification tokens — the minimum technical material needed to route messages</li>
          </ul>
          <p>We cannot read your messages, your credentials, your contacts, or the content of your calls.</p>

          <h4>How to delete your data from the App</h4>
          <p>Because no online profile is created, <strong>you can delete everything associated with your Hologram App account simply by deleting the App from your device</strong>. Any queued encrypted messages on our relay infrastructure are discarded after delivery or expiry, typically within a few days.</p>

          <h3>2.2 Hologram Agentic Cloud — hosted personal-agent service</h3>
          <p>When you sign up for Hologram Agentic Cloud (Free, Pro, or Business), you create an online account so we can host your personal AI agent and its state. This is a hosted service, and we process more information than we do for the App.</p>

          <h4>Account data</h4>
          <ul>
            <li>Email address</li>
            <li>Password hash (we never store passwords in plain text)</li>
            <li>Display name, optional avatar</li>
            <li>Your decentralised identifier (DID) on the Verana network</li>
          </ul>

          <h4>Billing data (Pro and Business only)</h4>
          <ul>
            <li>Billing name, country, and tax information</li>
            <li>Payment tokens from our payment processor (we do not store raw card data)</li>
            <li>Invoice history</li>
          </ul>

          <h4>Agent state</h4>
          <ul>
            <li>Agent configuration (name, instructions, connected MCPs)</li>
            <li>Conversation history and persistent memory</li>
            <li>RAG corpora you upload (documents, notes, knowledge bases)</li>
            <li>Credentials you choose to present through your agent</li>
            <li>Generated content (text, images, voice notes, where enabled)</li>
          </ul>

          <h4>Operational telemetry</h4>
          <ul>
            <li>Authentication and session logs</li>
            <li>Error reports and performance metrics</li>
            <li>LLM usage metering (tokens consumed, model selected) — for billing and quota enforcement</li>
          </ul>

          <h4>Your right to export and delete</h4>
          <p>You can <strong>export</strong> all of your Hologram Agentic Cloud data at any time from your account settings, in a machine-readable format.</p>
          <p>You can <strong>permanently delete</strong> your Hologram Agentic Cloud account and all associated agent state at any time from your account settings. Permanent deletion removes your agent configuration, conversations, memory, RAG corpora, and generated content from our systems. We retain a minimal record of billing transactions where legally required (Estonian accounting law typically mandates seven years for invoices).</p>

          <hr />
          <h2>3. What we collect on our websites</h2>
          <p>On <strong>hologram.zone</strong> and <strong>2060.io</strong> we collect the minimum needed to run the site:</p>
          <ul>
            <li>Anonymised traffic statistics (page views, referrers, approximate region)</li>
            <li>A consent record when you accept or reject cookies</li>
            <li>Information you voluntarily submit through contact forms, demo requests, or newsletter subscriptions</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties, ever.</p>

          <hr />
          <h2>4. How we use your information</h2>
          <p>We use the data above to:</p>
          <ul>
            <li>Provide, operate, secure, and improve the Hologram services</li>
            <li>Deliver end-to-end encrypted messages and host your personal agent</li>
            <li>Authenticate you and protect your account</li>
            <li>Bill you accurately (Pro and Business)</li>
            <li>Send you transactional notifications (service updates, security alerts, invoices)</li>
            <li>Send you marketing communications (only if you have opted in; you can opt out at any time)</li>
            <li>Detect, prevent, and respond to fraud, abuse, and security incidents</li>
            <li>Comply with applicable law</li>
          </ul>
          <p>We do not use your agent conversations, your messages, or your uploaded RAG corpora to train third-party foundation models.</p>

          <hr />
          <h2>5. Large language models and third-party AI providers</h2>
          <p>When you use your personal agent on Hologram Agentic Cloud, your prompts and agent context are processed by a large language model (LLM). The specific provider depends on your plan and your chosen model:</p>
          <ul>
            <li><strong>Free</strong> — A basic LLM tier hosted by 2060.io, with a monthly quota</li>
            <li><strong>Pro and Business</strong> — A selection of models from providers such as OpenAI, Anthropic, Google, DeepSeek, Groq, or models self-hosted by us or by you</li>
          </ul>
          <p>When a third-party LLM provider is used, your prompt is transmitted to that provider under their API terms. We select providers that contractually commit not to train their models on your API inputs, but you should review their policies if this matters to you.</p>
          <p>If you prefer that your data never leaves your device or a chosen infrastructure, the Business plan supports self-hosted and air-gapped LLMs, and the open-source Hologram stack lets you run the entire service yourself.</p>

          <hr />
          <h2>6. MCP integrations and third-party services</h2>
          <p>You can connect your personal agent to third-party services through MCP (Model Context Protocol) servers — for example, calendars, email, contacts, or social networks. When you authorise such a connection:</p>
          <ul>
            <li>You consent to your agent sharing the relevant context with that service under its terms</li>
            <li>We store the connection metadata and any access tokens needed to re-establish the integration</li>
            <li>We do not read or copy the content exchanged through the integration, except where strictly necessary to route it to your agent</li>
          </ul>
          <p>You can revoke any integration at any time from your account settings.</p>

          <hr />
          <h2>7. Decentralised identifiers, credentials, and the Verana network</h2>
          <p>Hologram uses decentralised identifiers (DIDs) and verifiable credentials. DIDs and credential-schema references may be published to the Verana Verifiable Public Registry, a public blockchain network. By design, data written to a public registry is <strong>public and permanent</strong>. We never write personal information (name, email, message content) to the registry — only pseudonymous identifiers, schema references, and trust-registry entries that you or your organisation explicitly publish.</p>
          <p>Trust resolution and Proof of Trust checks that your agent performs against other parties&#39; DIDs are recorded locally in your agent state, not on a public ledger.</p>

          <hr />
          <h2>8. How we share your information</h2>
          <p>We do not sell or rent your personal data. We share it only in the following cases:</p>
          <ul>
            <li><strong>Service providers (processors)</strong> — cloud hosting, payment processing, email delivery, error monitoring, LLM inference providers. They are bound by contract to process data only on our instructions and to safeguard it.</li>
            <li><strong>Third-party services you connect</strong> — via MCP, you direct us to share specific context with them</li>
            <li><strong>Legal obligations</strong> — to comply with an applicable law, regulation, legal process, or enforceable governmental request</li>
            <li><strong>Enforcement</strong> — to investigate violations of our Terms of Service</li>
            <li><strong>Safety</strong> — to prevent or address fraud, security, or technical issues, or to protect the rights, property, or safety of our users or the public</li>
            <li><strong>Business transfer</strong> — if we are involved in a merger, acquisition, or asset sale, your data may be transferred under the same protections</li>
          </ul>

          <hr />
          <h2>9. International transfers</h2>
          <p>We are based in the European Union (Estonia). Some of our service providers are located in the United States, Canada, or other countries. When we transfer personal data outside the EEA, we rely on the European Commission&#39;s Standard Contractual Clauses or equivalent safeguards.</p>

          <hr />
          <h2>10. Data retention</h2>
          <ul>
            <li><strong>Hologram App relay data</strong> — encrypted message payloads are kept only until delivered or expired, typically a few days</li>
            <li><strong>Hologram Agentic Cloud agent state</strong> — retained for as long as your account is active; deleted permanently when you delete your account, except for the minimum legally mandated retention for invoicing</li>
            <li><strong>Authentication and security logs</strong> — retained for up to twelve months</li>
            <li><strong>Billing records</strong> — retained as required by Estonian accounting law (typically seven years)</li>
            <li><strong>Website analytics</strong> — anonymised and retained up to twenty-six months</li>
            <li><strong>Marketing consent records</strong> — retained until you withdraw consent</li>
          </ul>

          <hr />
          <h2>11. Security</h2>
          <p>We use industry-standard measures to protect your data: end-to-end encryption for messages, encryption at rest and in transit for Cloud, ciphered software enclaves for credentials, least-privilege access control, regular audits, and on-call incident response. No system is perfectly secure; you play a critical role by keeping your device, your passwords, and your recovery material safe.</p>

          <hr />
          <h2>12. Your rights</h2>
          <p>Under the EU General Data Protection Regulation and equivalent laws, you have the right to:</p>
          <ul>
            <li><strong>Access</strong> the personal data we hold about you</li>
            <li><strong>Rectify</strong> inaccurate or incomplete data</li>
            <li><strong>Erase</strong> your data (&quot;right to be forgotten&quot;)</li>
            <li><strong>Restrict</strong> or <strong>object</strong> to certain processing</li>
            <li><strong>Portability</strong> — receive your data in a commonly used, machine-readable format</li>
            <li><strong>Withdraw consent</strong> at any time, without affecting the lawfulness of prior processing</li>
            <li><strong>Lodge a complaint</strong> with your national data-protection authority (in Estonia, the Andmekaitse Inspektsioon)</li>
          </ul>
          <p>For Hologram Agentic Cloud users, rights (i), (iii), and (v) are supported directly from your account settings (&quot;Export my data&quot; and &quot;Delete my account&quot;). For all other requests, <a href={COMPANY.contactUrl}>contact us</a>.</p>

          <hr />
          <h2>13. Children</h2>
          <p>Hologram is not intended for children under 17. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please <a href={COMPANY.contactUrl}>contact us</a> and we will delete it promptly.</p>

          <hr />
          <h2>14. Cookies</h2>
          <p>Our websites use a minimal set of cookies: strictly necessary cookies for session and security, and, with your consent, analytics cookies to measure usage. See our <a href="/cookies">Cookie Policy</a> for details, or manage your preferences through the cookie banner or your browser settings.</p>

          <hr />
          <h2>15. Changes to this policy</h2>
          <p>We may update this Privacy Policy as our services evolve or as the law changes. When we do, we will update the &quot;Updated&quot; date above and, for material changes, notify you through the App, Cloud dashboard, or by email. Your continued use of the services after an update constitutes acceptance of the revised policy.</p>

          <hr />
          <h2>16. Contact</h2>
          <ul>
            <li><strong>Privacy questions and rights requests:</strong> <a href={COMPANY.contactUrl}>contact us</a></li>
            <li><strong>Abuse, security, or IP reports:</strong> <a href={COMPANY.contactUrl}>contact us</a></li>
            <li><strong>Postal:</strong> {COMPANY.legalName}, {COMPANY.address}</li>
          </ul>

          <p className="mt-10 text-sm text-neutral-500 italic">Effective as of Jan 14, 2024. Last updated April 23, 2026.</p>
        </article>
      </section>
    </>
  );
}
