import { COMPANY } from "@/lib/site";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description: "Terms of Service for the Hologram Messaging App, Hologram Agentic Cloud, and associated websites and APIs. Governed by the laws of Estonia.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-24 md:pb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-600 dark:text-brand-400">Legal</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">Terms of Service</h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            The binding agreement between you and 2060 OÜ for the Hologram Messaging App, Hologram Agentic Cloud, and our websites, SDKs, and APIs.
          </p>
          <p className="mt-6 text-xs tracking-wider uppercase text-neutral-500">
            <strong className="text-neutral-900 dark:text-white">Effective</strong> Jan 14, 2024 ·{" "}
            <strong className="text-neutral-900 dark:text-white">Last updated</strong> April 23, 2026
          </p>
        </div>
      </section>

      <section className="pb-24">
        <article className="legal max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-700 dark:text-neutral-300">
          <p>These Terms of Service (&quot;Terms&quot;) form a binding agreement between you and <strong>2060 OÜ</strong> (&quot;2060.io&quot;, &quot;we&quot;, &quot;us&quot;), a private limited company registered in Estonia, with its registered office at {COMPANY.address}. By installing, accessing, or using any Hologram service, you agree to these Terms. If you do not agree, do not use the services.</p>
          <p>These Terms cover:</p>
          <ul>
            <li>The <strong>Hologram Messaging App</strong> (iOS, Android, desktop)</li>
            <li><strong>Hologram Agentic Cloud</strong> — our hosted personal-agent service (Free, Pro, and Business plans)</li>
            <li>Our websites, SDKs, APIs, and developer tools</li>
            <li>Together, the <strong>&quot;Services&quot;</strong></li>
          </ul>
          <p>If you self-host the open-source Hologram stack, these Terms apply only to your interaction with our hosted services, websites, and registries; your self-hosted deployment is governed by the applicable open-source licence (Apache 2.0 unless stated otherwise in the source repository).</p>

          <hr />
          <h2>1. Who can use the Services</h2>
          <p>You must be at least <strong>17 years old</strong> to use the Services. The minimum age may be higher in your jurisdiction. If you use the Services on behalf of an organisation, you represent that you are authorised to bind that organisation to these Terms.</p>
          <p>The Services are not intended for distribution or use in any country where such distribution or use would violate local law or would subject us to additional regulation. You are responsible for complying with applicable export-control and trade-sanctions laws.</p>

          <hr />
          <h2>2. Your account</h2>
          <p><strong>Hologram Messaging App.</strong> The App is self-custody. No online account is created when you install it. Your profile is created and stored locally on your device. You can end your use of the App at any time by deleting it from your device.</p>
          <p><strong>Hologram Agentic Cloud.</strong> To use Hologram Agentic Cloud you must create an account with a valid email address and a strong password. You are responsible for safeguarding your credentials and for all activity under your account. Notify us via our <strong><a href={COMPANY.contactUrl}>contact form</a></strong> if you suspect unauthorised access.</p>

          <hr />
          <h2>3. Plans, pricing, and billing</h2>
          <p>Hologram Agentic Cloud is offered on three plans: <strong>Free</strong>, <strong>Pro</strong>, and <strong>Business</strong>. Current features and prices are published on our pricing page, which forms part of these Terms by reference.</p>
          <p><strong>Free.</strong> No payment required. Subject to fair-use quotas for LLM usage, MCP connections, and hosted resources. We may adjust these quotas to protect service quality.</p>
          <p><strong>Pro.</strong> A paid monthly or annual subscription. Billed in advance and renewed automatically at the end of each billing period unless cancelled. Prices are shown exclusive of VAT and other applicable taxes, which are added at checkout. You can cancel at any time from your account settings; cancellation takes effect at the end of the current billing period and no partial refunds are issued unless required by law.</p>
          <p><strong>Business.</strong> A custom subscription formalised in a separate order form or master services agreement. Where that document conflicts with these Terms, the separate agreement prevails for the subject matter it covers.</p>
          <p><strong>Taxes and mobile carrier fees.</strong> You are responsible for any data charges, mobile carrier fees, and applicable taxes linked to the devices you use the Services on.</p>
          <p><strong>Failed payments.</strong> If a payment fails, we may suspend your paid features after a grace period and after notifying you by email. Your data remains preserved during the grace period, subject to the retention rules in our Privacy Policy.</p>

          <hr />
          <h2>4. Your content and your rights</h2>
          <p>You retain all rights to the content you create, upload, or generate through the Services — including your conversations, your documents, your credentials, your agent configuration, and anything your agent produces on your behalf.</p>
          <p>You grant us a limited, non-exclusive, worldwide, royalty-free licence to host, process, transmit, and display your content <strong>solely as necessary to provide the Services</strong> to you (including routing through third-party LLM providers you have chosen) and to comply with law. This licence ends when you delete the content or close your account.</p>
          <p>We do not use your content to train third-party foundation models.</p>

          <h3>Data export and account deletion</h3>
          <ul>
            <li><strong>Hologram Messaging App</strong> — delete the App from your device to end your use; no online account exists to delete.</li>
            <li><strong>Hologram Agentic Cloud</strong> — you can <strong>export</strong> all your data at any time in a machine-readable format, and you can <strong>permanently delete</strong> your account and all associated agent state at any time, both from your account settings. Permanent deletion removes your configuration, conversations, memory, RAG corpora, and generated content from our systems, subject only to minimal legally mandated retention (e.g. billing records).</li>
          </ul>

          <hr />
          <h2>5. Acceptable use</h2>
          <p>You agree to use the Services only for lawful, authorised, and acceptable purposes. In particular, you must not (and must not help others to):</p>
          <ul>
            <li>Violate applicable laws, the rights of others, or our published policies</li>
            <li>Send unsolicited bulk messages, run auto-messaging or auto-dialling schemes, or otherwise abuse the messaging infrastructure</li>
            <li>Distribute illegal, abusive, harassing, defamatory, obscene, or infringing content through your Hologram connections or your agent</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation</li>
            <li>Attempt to gain unauthorised access to the Services, other users&#39; accounts, or our infrastructure</li>
            <li>Disrupt, probe, or test the integrity or performance of the Services, except via our published bug-bounty or disclosure channels</li>
            <li>Scrape, reverse-engineer, or extract data from the Services in unauthorised or automated ways</li>
            <li>Use the Services to develop a competing product by copying our confidential information</li>
            <li>Resell, sublicense, or charge for access to the Services without our written permission</li>
          </ul>
          <p>We may investigate, suspend, or terminate accounts that we reasonably believe are violating these rules. To report abuse, <a href={COMPANY.contactUrl}>contact us</a>.</p>

          <hr />
          <h2>6. AI-generated content</h2>
          <p>Hologram Agentic Cloud lets you run a personal AI agent that uses large language models and, on Pro and Business, image-generation and voice models. Important limitations:</p>
          <ul>
            <li><strong>Accuracy.</strong> AI models can generate output that is inaccurate, biased, incomplete, or offensive. You are responsible for reviewing and verifying agent output before relying on it, especially for legal, medical, financial, or safety-critical decisions.</li>
            <li><strong>No professional advice.</strong> The Services do not provide legal, medical, financial, or other professional advice.</li>
            <li><strong>Responsibility for use.</strong> You are responsible for the consequences of the instructions you give your agent, the content you authorise it to act on, and the outputs you publish or transmit.</li>
            <li><strong>Content rights.</strong> You must have the necessary rights to any content you feed into your agent, including RAG corpora and credentials you present.</li>
            <li><strong>Watermarking and attribution.</strong> Where legally required, you must disclose AI-generated content appropriately.</li>
          </ul>
          <p>You may not use the Services to generate content that is illegal, that impersonates a real person without consent, that infringes intellectual property, or that is designed to deceive in ways that cause harm.</p>

          <hr />
          <h2>7. Third-party services, MCPs, and LLMs</h2>
          <p>The Services allow you to connect third-party services — LLM providers (OpenAI, Anthropic, Google, DeepSeek, Groq, and others), MCP servers, and external data sources. Your use of those third-party services is governed by their own terms and privacy policies. We are not responsible for the availability, content, or behaviour of third-party services, and their fees, quotas, and restrictions apply in addition to ours.</p>
          <p>If you supply your own API keys to third-party providers, you are responsible for their use and billing. If you use our bundled LLM quotas, you agree to the provider&#39;s acceptable-use policies as incorporated into ours.</p>

          <hr />
          <h2>8. Decentralised identifiers, credentials, and the Verana network</h2>
          <p>Hologram uses decentralised identifiers (DIDs) and verifiable credentials, and interacts with the Verana Verifiable Public Registry. Information written to a public registry is public and permanent. You are responsible for what you or your organisation choose to publish there. We never publish personal data on your behalf without your instruction.</p>
          <p>Trust resolution and Proof of Trust checks performed by your agent rely on information published by third parties. We do not guarantee the accuracy or current validity of third-party trust data; you are responsible for your reliance on it.</p>

          <hr />
          <h2>9. Open source and self-hosted use</h2>
          <p>Parts of the Hologram stack are released under open-source licences, principally Apache 2.0. If you self-host, you may run Hologram at no cost, subject to the applicable open-source licence. These Terms do not restrict your rights under those licences — they govern only our hosted Services and your interactions with us.</p>
          <p>We offer managed hosting, support, SLAs, and ecosystem services through Hologram Agentic Cloud and Business plans.</p>

          <hr />
          <h2>10. Our intellectual property</h2>
          <p>All copyrights, trademarks (including &quot;Hologram&quot;, &quot;2060.io&quot;, and associated logos), domains, trade dress, patents, and other intellectual property rights in the Services and our brand are owned by us or our licensors. We grant you a limited, revocable, non-exclusive, non-transferable licence to use the Services in accordance with these Terms. You may not use our marks without our prior written permission.</p>
          <p>To report any copyright, trademark, or other intellectual-property infringement, <a href={COMPANY.contactUrl}>contact us</a>.</p>

          <hr />
          <h2>11. Feedback</h2>
          <p>If you send us suggestions, ideas, or feedback about the Services, we may use them without restriction and without compensation. You confirm that you have the right to share such feedback with us.</p>

          <hr />
          <h2>12. Disclaimers</h2>
          <p className="uppercase-block">YOU USE THE SERVICES AT YOUR OWN RISK. WE PROVIDE THE SERVICES ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND FREEDOM FROM COMPUTER VIRUS OR OTHER HARMFUL CODE. 2060.IO DOES NOT WARRANT THAT THE SERVICES, OR ANY INFORMATION OR AI-GENERATED OUTPUT PROVIDED THROUGH THEM, ARE ACCURATE, COMPLETE, CURRENT, SECURE, OR AVAILABLE WITHOUT INTERRUPTION, DELAY, OR ERROR. WE ARE NOT RESPONSIBLE FOR THE ACTIONS, CONTENT, OR INFORMATION OF OTHER USERS OR THIRD-PARTY SERVICES.</p>

          <hr />
          <h2>13. Limitation of liability</h2>
          <p className="uppercase-block">TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE 2060.IO PARTIES (2060 OÜ, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS, AND AGENTS) WILL NOT BE LIABLE FOR ANY LOST PROFITS, LOST DATA, LOSS OF GOODWILL, OR CONSEQUENTIAL, SPECIAL, PUNITIVE, INDIRECT, OR INCIDENTAL DAMAGES RELATING TO OR ARISING OUT OF THESE TERMS OR THE SERVICES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
          <p className="uppercase-block">OUR TOTAL AGGREGATE LIABILITY RELATING TO OR ARISING OUT OF THESE TERMS OR THE SERVICES WILL NOT EXCEED THE GREATER OF (a) THE AMOUNTS YOU PAID US FOR THE SERVICES IN THE TWELVE MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (b) ONE HUNDRED EUROS (€100).</p>
          <p>Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law (for example, liability for gross negligence or wilful misconduct, or consumer rights you may have in your jurisdiction).</p>

          <hr />
          <h2>14. Indemnification</h2>
          <p>If you use the Services on behalf of an organisation (for example, on a Business plan), you agree to defend, indemnify, and hold harmless the 2060.io Parties from any claim, demand, loss, or damage arising out of (a) your breach of these Terms, (b) your misuse of the Services, or (c) your violation of applicable law or third-party rights.</p>

          <hr />
          <h2>15. Availability and changes to the Services</h2>
          <p>The Services may be interrupted for maintenance, upgrades, or due to network or equipment failures. We may modify, add, or remove features at any time. We may discontinue a Service with reasonable advance notice, and we will make a good-faith effort to let you export your data before discontinuation.</p>
          <p>We reserve the right to ban from the Services any user who does not respect these Terms.</p>

          <hr />
          <h2>16. Suspension and termination</h2>
          <p>You may stop using the Services at any time. For the App, delete it from your device. For Hologram Agentic Cloud, delete your account from account settings.</p>
          <p>We may suspend or terminate your access to the Services at any time, with or without notice, if we reasonably believe that you have violated these Terms or created harm, risk, or legal exposure for us, our users, or third parties.</p>
          <p>The following provisions survive termination: Sections 4 (Your content), 5 (Acceptable use), 10 (IP), 11 (Feedback), 12 (Disclaimers), 13 (Limitation of liability), 14 (Indemnification), 17 (Governing law), and 19 (General).</p>

          <hr />
          <h2>17. Governing law and disputes</h2>
          <p>These Terms are governed by the laws of <strong>Estonia</strong>, without regard to conflict-of-laws principles. You agree that any dispute arising out of or relating to these Terms or the Services will be resolved exclusively in the competent courts of Estonia, and you submit to their personal jurisdiction.</p>
          <p>If you are a consumer in the European Union, you may also benefit from mandatory provisions of the law of your country of residence, and the European Commission&#39;s online dispute-resolution platform is available at{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr/</a>.
          </p>

          <hr />
          <h2>18. Changes to these Terms</h2>
          <p>We may update these Terms as the Services evolve. When we do, we will update the &quot;Updated&quot; date above and, for material changes, notify you through the App, the Cloud dashboard, or by email. Your continued use of the Services after the effective date of the updated Terms constitutes acceptance of them. If you do not agree with the update, stop using the Services and, where applicable, delete your account.</p>

          <hr />
          <h2>19. General</h2>
          <p>These Terms, together with our Privacy Policy and any plan-specific order form, constitute the entire agreement between you and us regarding the Services. If any provision is held unenforceable, the remaining provisions remain in full force. Our failure to enforce any provision is not a waiver of our right to enforce it later. You may not assign these Terms without our consent; we may assign them in connection with a merger, acquisition, or asset transfer.</p>

          <hr />
          <h2>20. Contact</h2>
          <ul>
            <li><strong>General enquiries:</strong> <a href={COMPANY.contactUrl}>contact us</a></li>
            <li><strong>Legal notices:</strong> <a href={COMPANY.contactUrl}>contact us</a></li>
            <li><strong>Abuse, security, or IP reports:</strong> <a href={COMPANY.contactUrl}>contact us</a></li>
            <li><strong>Postal:</strong> {COMPANY.legalName}, {COMPANY.address}</li>
          </ul>

          <p className="mt-10 text-sm text-neutral-500 italic">Effective as of Jan 14, 2024. Last updated April 23, 2026.</p>
        </article>
      </section>
    </>
  );
}
