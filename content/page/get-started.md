---
title: Getting Started
#subtitle: "Learn how to get started with Hologram as a developer, and where to find documentation and access community channels."
url: "/page/get-started"
meta_title: "Developers and Hologram | Learn how to get started with Hologram, and where to find documentation and access community channels."
hero_icon: "fa-solid fa-hammer"
hero_heading: "Getting <strong>Started</strong>"
hero_description: "Learn how to get started with Hologram as a <string>service developer</strong>, and where to find documentation and access community channels."

disable_content_wrapper: true
bodyClass: "min-h-screen flex flex-col bg-white text-gray-900 overflow-x-hidden font-sans get-started-page"
intro:
  icon: "fas fa-terminal"
  title: "What is Verifiable Service Agent?"
  description: |-
    To build services compatible with Hologram, all you need is **VS Agent**, a web application that can be used as a framework for building conversational Verifiable Services (VS). It enables developers to create, deploy, and manage agents that provide trustworthy, verifiable information and actions in chat conversations.
installation:
  step_number: "1"
  title: "Get VS Agent"
  cards:
    - title: "Docker"
      variant: "run"
      lede: "Pull the image from DockerHub and run it in any environment."
      icon: "fab fa-docker"
      icon_bg: "bg-hologram-primary/10"
      icon_color: "text-hologram-primary"
      code_block: |
        docker pull io2060/vs-agent:dev
  note:
    icon: "fas fa-info-circle"
    title: "Getting Started"
    text: |-
      You can run it locally or by using Docker, pulling the image from DockerHub. If you want to run it locally, refer to VS Agent repository for full details.
configuration:
  step_number: "2"
  title: "Run your own Hologram Verifiable Service"
  description: |-
    Running VS Agent is easy: it only needs a few environment variables for its basic configuration. These are the most important ones:
  cards:
    - title: "AGENT_PUBLIC_DID"
      icon: "fas fa-fingerprint"
      icon_bg: "bg-hologram-primary"
      icon_color: "text-white"
      card_class: "bg-gradient-to-br from-hologram-primary/5 to-hologram-secondary/5 border border-hologram-primary/20 rounded-xl p-8"
      description: |-
        In order to conform with Verifiable Trust concepts, a service needs to have a public decentralized identifier (DID). Hologram supports [did:webvh](https://identity.foundation/didwebvh/v1.0/) method, a web-based identifier. For this you'll need to have a public endpoint for your agent and prefix it with `did:webvh`.
      example_label: "Example:"
      example_code: "did:webvh:mypublichost.com"
    - title: "AGENT_LABEL"
      icon: "fas fa-tag"
      icon_bg: "bg-hologram-secondary"
      icon_color: "text-white"
      card_class: "bg-gradient-to-br from-hologram-secondary/5 to-hologram-dark/5 border border-hologram-secondary/20 rounded-xl p-8"
      description: "String to be shown in invitations"
    - title: "AGENT_INVITATION_IMAGE_URL"
      icon: "fas fa-image"
      icon_bg: "bg-hologram-dark"
      icon_color: "text-white"
      card_class: "bg-gradient-to-br from-hologram-dark/5 to-hologram-primary/5 border border-hologram-dark/20 rounded-xl p-8"
      description: "URL of a logo to be shown in invitations alongside the label"
  command_block:
    title: "Run the Container"
    icon: "fas fa-terminal"
    button_label: "Copy"
    button_icon: "fas fa-copy"
    code: |-
      docker run -p 80:3001 -p 3000:3000 \
        -e AGENT_PUBLIC_DID=did:webvh:myhost.com \
        -e AGENT_LABEL="My First Hologram VS" \
        -e AGENT_INVITATION_IMAGE_URL=https://hologram.zone/images/ico-hologram.png \
        --name io2060/vs-agent:dev
  note:
    icon: "fas fa-exclamation-triangle"
    title: "Important Note"
    text: |-
      Note that it uses two ports: a public one (3001) and a private one (3000), used for its Admin API. It is important that the public endpoint is reachable at the same host you've set up in agent's public DID.
invitations:
  step_number: "3"
  title: "Create QR codes for invitations"
  description: |-
    Hologram users connect with your VS using invitation codes. For that purpose you can call the endpoint `/invitation`, which generates an invitation URL, or `/qr`, which renders this URL as a QR code so the user can simply scan it using their Hologram app.
  endpoints:
    - title: "Invitation URL"
      icon: "fas fa-link"
      icon_color: "text-hologram-primary"
      badge_text: "GET"
      badge_class: "bg-green-100 text-green-700"
      code: "/invitation"
    - title: "QR Code"
      icon: "fas fa-qrcode"
      icon_color: "text-hologram-secondary"
      badge_text: "GET"
      badge_class: "bg-green-100 text-green-700"
      code: "/qr"
messaging:
  step_number: "4"
  title: "Sending chat messages"
  card:
    icon: "fas fa-comments"
    title: "Admin API"
    description: |-
      You can send messages to users using VS Agent Admin API. Check out [VS Agent API](https://github.com/2060-io/vs-agent/blob/main/doc/vs-agent-api.md) documentation and the Swagger UI of your deployed Agent at `/api` to know more.
  actions:
    - kind: "link"
      title: "API Documentation"
      description: "Complete reference for all VS Agent API endpoints"
      icon: "fas fa-book"
      icon_bg: "bg-hologram-primary/10"
      icon_color: "text-hologram-primary"
      href: "https://github.com/2060-io/vs-agent/blob/main/doc/vs-agent-api.md"
    - kind: "info"
      title: "Interactive API"
      description: "Access Swagger UI at:"
      icon: "fas fa-code"
      icon_bg: "bg-hologram-secondary/10"
      icon_color: "text-hologram-secondary"
      badge_text: "Swagger UI"
      badge_class: "bg-blue-100 text-blue-700"
      code: "/api"
---

{{< get-started-intro >}}
{{< get-started-installation >}}
{{< get-started-configuration >}}
{{< get-started-invitations >}}
{{< get-started-messaging >}}
