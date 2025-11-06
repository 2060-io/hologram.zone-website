---
title: "Explore Verifiable AI"
subtitle1: "Explore <strong>Verifiable AI</strong> in Action"
subtitle2: "Explore a selection of Verifiable AI Agents and other Verifiable Services built using the <strong>Hologram SDK</strong>."
url: "/page/demos"
meta_title: "Hologram Demos | Verifiable Services in Action"
meta_description: "Issue verifiable credentials, log in without passwords, launch AI agents, and verify government IDs with live demos powered by Hologram."
hero_icon: "fa-solid fa-laptop-code"
hero_badge_text: "Live Demonstrations"
hero_badge_icon: "fa-solid fa-flask"
hero_heading: "Explore <strong>Verifiable AI</strong> in Action"
hero_description: "Explore a selection of Verifiable AI Agents and other Verifiable Services built using the <strong>Hologram SDK</strong>."
hero_note: |-
  **Note:** No personal data is collected or stored in these demos.<br>Some demos may request an NFC-enabled passport or ID card.

  All services are **open source** and available in our [GitHub repository](https://github.com/2060-io) under the **Apache 2.0 license**.
disable_content_wrapper: true
---

{{< demo-section
    id="demo-hello-world"
    background="bg-white"
    kicker_text="Starter Demo"
    kicker_icon="fa-solid fa-globe"
    kicker_class="bg-green-100 text-green-700"
    title="Hello World"
    title_icon="fa-solid fa-handshake"
    title_icon_color="text-hologram-primary"
    description="A simple starter Verifiable Service. It issues a basic **Verifiable Credential** that can be used to authenticate yourself in other demo services."
    primary_label="Try the Demo"
    primary_url="https://demos.hologram.zone/hello-world"
    primary_icon="fa-solid fa-play"
    primary_style="primary"
    secondary_label="GitHub Repository"
    secondary_url="https://github.com/2060-io"
    secondary_icon="fab fa-github"
    secondary_style="light"
    image_src="https://storage.googleapis.com/uxpilot-auth.appspot.com/fc9a5b67a3-a30a2d5a270b0f9912bb.png"
    image_alt="Mobile app interface showing a Hello World credential being issued."
    image_gradient_class="from-hologram-primary/10 to-hologram-secondary/10"
>}}
{{< /demo-section >}}

{{< demo-section
    id="demo-login"
    background="bg-gray-50"
    reverse="true"
    kicker_text="Authentication"
    kicker_icon="fa-solid fa-shield-halved"
    kicker_class="bg-blue-100 text-blue-700"
    title="Login with Verifiable Credential"
    title_icon="fa-solid fa-lock"
    title_icon_color="text-hologram-secondary"
    description="Log in (or create an account) by scanning a QR code or deep link. The Hologram App opens so you can **present a Hello World Credential** -- no passwords, no tracking, no federated login, just verifiable trust."
    primary_label="Try the Demo"
    primary_url="https://demos.hologram.zone/login"
    primary_icon="fa-solid fa-play"
    primary_style="secondary"
    secondary_label="GitHub Repository"
    secondary_url="https://github.com/2060-io"
    secondary_icon="fab fa-github"
    secondary_style="light"
    image_src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a8d5b8bb6a-90d06021eef33699a079.png"
    image_alt="Mobile authentication flow showing credential presentation."
    image_gradient_class="from-hologram-secondary/10 to-hologram-dark/10"
>}}
{{< /demo-section >}}

{{< demo-section
    id="demo-ai-friends"
    background="bg-white"
    kicker_text="AI Experience"
    kicker_icon="fa-solid fa-robot"
    kicker_class="bg-purple-100 text-purple-700"
    title="AI Friends"
    title_icon="fa-solid fa-brain"
    title_icon_color="text-hologram-primary"
    description="Chat with distinctive Verifiable AI Agents. Access is restricted to holders of the **Hello World** credential, so every conversation starts from a trust anchor."
    primary_label="Try the Demo"
    primary_url="https://demos.hologram.zone/ai-friends"
    primary_icon="fa-solid fa-play"
    primary_style="primary"
    secondary_label="GitHub Repository"
    secondary_url="https://github.com/2060-io"
    secondary_icon="fab fa-github"
    secondary_style="light"
    image_src="https://storage.googleapis.com/uxpilot-auth.appspot.com/22eea93cde-f04fa1e0120b5270f3f9.png"
    image_alt="Mobile chat interface showing AI personalities and authentication prompts."
    image_gradient_class="from-purple-100 to-hologram-primary/10"
>}}
{{< /demo-section >}}

{{< demo-section
    id="demo-gov-id-issue"
    background="bg-gray-50"
    reverse="true"
    kicker_text="Identity Verification"
    kicker_icon="fa-solid fa-id-card"
    kicker_class="bg-indigo-100 text-indigo-700"
    title="Government Digital ID – Issue a Credential"
    title_icon="fa-solid fa-id-badge"
    title_icon_color="text-hologram-dark"
    description="This Verifiable Service performs strong identity verification by:"
    primary_label="Try the Demo"
    primary_url="https://demos.hologram.zone/gov-id-issue"
    primary_icon="fa-solid fa-play"
    primary_style="dark"
    secondary_label="GitHub Repository"
    secondary_url="https://github.com/2060-io"
    secondary_icon="fab fa-github"
    secondary_style="light"
    image_src="https://storage.googleapis.com/uxpilot-auth.appspot.com/33ffaaad4a-a7a4601ae18bd115f798.png"
    image_alt="Government ID verification workflow illustration."
    image_gradient_class="from-hologram-dark/10 to-hologram-primary/10"
>}}
{{< demo-list class="space-y-3 mb-6" >}}
  {{< demo-list-item icon="fa-solid fa-check-circle" icon_color_class="text-hologram-primary" >}}Reading an NFC-compatible ID document{{< /demo-list-item >}}
  {{< demo-list-item icon="fa-solid fa-check-circle" icon_color_class="text-hologram-primary" >}}Performing **liveness detection** with facial comparison between the user and the document photo{{< /demo-list-item >}}
{{< /demo-list >}}
<p class="text-lg text-gray-600 mb-6 leading-relaxed">
  Upon successful verification, it <strong>issues a Verifiable Digital ID Credential</strong> to the user.
</p>
{{< /demo-section >}}

{{< demo-section
    id="demo-gov-id-verify"
    background="bg-white"
    kicker_text="Credential Verification"
    kicker_icon="fa-solid fa-search"
    kicker_class="bg-teal-100 text-teal-700"
    title="Verify a Digital ID Credential"
    title_icon="fa-solid fa-check-double"
    title_icon_color="text-hologram-secondary"
    description="Request the presentation of a **Government Digital ID** credential and review its contents with a clear, auditable interface."
    primary_label="Try the Demo"
    primary_url="https://demos.hologram.zone/gov-id-verify"
    primary_icon="fa-solid fa-play"
    primary_style="secondary"
    secondary_label="GitHub Repository"
    secondary_url="https://github.com/2060-io"
    secondary_icon="fab fa-github"
    secondary_style="light"
    image_src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d4546e52f7-0de730630b1495ca5000.png"
    image_alt="Credential verification interface with confirmation screens."
    image_gradient_class="from-teal-100 to-hologram-secondary/10"
>}}
{{< /demo-section >}}

{{< demo-section
    id="demo-customer-support"
    background="bg-gray-50"
    reverse="true"
    kicker_text="AI Support Agent"
    kicker_icon="fa-solid fa-headset"
    kicker_class="bg-orange-100 text-orange-700"
    title="Customer Support AI Agent"
    title_icon="fa-solid fa-phone-volume"
    title_icon_color="text-hologram-primary"
    description="A Verifiable AI Agent that simulates a mobile operator's support desk."
    primary_label="Try the Demo"
    primary_url="https://demos.hologram.zone/customer-support"
    primary_icon="fa-solid fa-play"
    primary_style="primary"
    secondary_label="GitHub Repository"
    secondary_url="https://github.com/2060-io"
    secondary_icon="fab fa-github"
    secondary_style="light"
    image_src="https://storage.googleapis.com/uxpilot-auth.appspot.com/59f54bae56-fa8739f91f5d2600354a.png"
    image_alt="Customer support AI agent dashboard handling telecom requests."
    image_gradient_class="from-hologram-primary/10 to-hologram-dark/10"
>}}
{{< demo-note >}}
This demo was created by deploying the open-source <a href="https://github.com/2060-io" class="text-hologram-primary font-semibold hover:underline">AI Agent Template</a>. Follow the <a href="https://docs.hologram.zone/" class="text-hologram-primary font-semibold hover:underline">documentation</a> to launch yours in minutes.
{{< /demo-note >}}
<p class="text-lg text-gray-600 mb-4 leading-relaxed">
  Users can authenticate with either:
</p>
{{< demo-list class="space-y-2 mb-4" >}}
  {{< demo-list-item icon="fa-solid fa-circle" icon_color_class="text-hologram-primary" icon_size_class="text-xs" icon_spacing_class="mr-3 mt-2" >}}An NFC-based ID card, passport, or driving license{{< /demo-list-item >}}
  {{< demo-list-item icon="fa-solid fa-circle" icon_color_class="text-hologram-primary" icon_size_class="text-xs" icon_spacing_class="mr-3 mt-2" >}}A <strong>Government Digital ID</strong> credential{{< /demo-list-item >}}
{{< /demo-list >}}
<p class="text-lg text-gray-600 mb-4 leading-relaxed">
  And perform actions such as:
</p>
{{< demo-list class="space-y-2 mb-6" >}}
  {{< demo-list-item icon="fa-solid fa-check" icon_color_class="text-green-600" icon_spacing_class="mr-3 mt-1" >}}Open a new mobile line{{< /demo-list-item >}}
  {{< demo-list-item icon="fa-solid fa-check" icon_color_class="text-green-600" icon_spacing_class="mr-3 mt-1" >}}Cancel an existing line{{< /demo-list-item >}}
  {{< demo-list-item icon="fa-solid fa-check" icon_color_class="text-green-600" icon_spacing_class="mr-3 mt-1" >}}Report a lost SIM card and request a replacement{{< /demo-list-item >}}
  {{< demo-list-item icon="fa-solid fa-check" icon_color_class="text-green-600" icon_spacing_class="mr-3 mt-1" >}}Change the customer phone number{{< /demo-list-item >}}
  {{< demo-list-item icon="fa-solid fa-check" icon_color_class="text-green-600" icon_spacing_class="mr-3 mt-1" >}}And more{{< /demo-list-item >}}
{{< /demo-list >}}
{{< /demo-section >}}

{{< demo-build-cta
    id="build-cta"
    kicker_text="Ready to Build?"
    kicker_icon="fa-solid fa-sparkles"
    title="Want to build your"
    highlight_text="own service?"
    description="Deploy your first Verifiable AI Agent in just 5 minutes. No complex setup, no hidden costs -- just powerful, verifiable AI at your fingertips."
    primary_label="Start Building Now"
    primary_url="/build"
    primary_icon="fa-solid fa-hammer"
    secondary_label="View Documentation"
    secondary_url="https://docs.hologram.zone/"
    secondary_icon="fa-solid fa-book"
    feature_titles="Quick Deployment|Built-in Verification|Global Discovery"
    feature_descriptions="Use our Helm chart or SDK to go live instantly|Automatic DID creation and credential attachment|Get indexed on Verana for worldwide visibility"
    feature_icons="fa-solid fa-rocket|fa-solid fa-shield-alt|fa-solid fa-globe"
    feature_icon_bg_classes="bg-hologram-primary/10|bg-hologram-secondary/10|bg-hologram-dark/10"
    feature_icon_color_classes="text-hologram-primary|text-hologram-secondary|text-hologram-dark"
    stat_values="5min|100%|∞"
    stat_labels="Setup Time|Open Source|Possibilities"
    stat_color_classes="text-hologram-primary|text-hologram-secondary|text-hologram-dark"
    terminal_title="terminal"
    terminal_lines="$::helm install hologram-agent|check::✓ DID created|check::✓ Agent deployed|check::✓ Indexed on Verana|success::🎉 Your agent is live!"
>}}
