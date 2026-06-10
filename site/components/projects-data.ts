/* Project content. Cards carry an optional `image` (web-optimized
   image in /public); projects without one fall back to a generated
   CSS `art` shape (cityflow, petnet, beoribarstvo).

   Technologies live in one place - each project's case-study `stack`.
   Cards read their chips from there (see ProjectCard.tsx), so the
   landing/index cards and the project page never drift apart. */

import type { CSSProperties } from "react";

type ThumbArt = "t-grid" | "t-rings" | "t-diag" | "t-dots" | "t-arc";

export type ProjectCard = {
  slug: string;
  span: "span-5" | "span-6" | "span-7" | "span-12";
  /** Web image in /public. When absent, `art` shape is rendered instead. */
  image?: string;
  /** Looping cover video in /public. Takes precedence over `image`/`art`. */
  video?: string;
  art?: ThumbArt;
  idx: string;
  when: string;
  metaLeft: string;
  metaRight: string;
  title: string;
  blurb: string;
  /** Optional fallback; chips normally come from CASE_STUDIES[slug].stack. */
  tags?: string[];
  cats?: string[];
  thumbStyle?: CSSProperties;
};

/* ── Landing: "Selected work - 03" (4 featured cards) ────── */
export const WORK_CARDS: ProjectCard[] = [
  {
    slug: "courier",
    span: "span-6",
    image: "/LandingVisualFabricusCourier.webp",
    idx: "01 / Courier Management",
    when: "2023 - 2025",
    metaLeft: "Angular · Golang",
    metaRight: "Fabricus.tech",
    title: "Courier Management Platform",
    blurb:
      "A multi-tenant SaaS for fleet operations - real-time asset tracking, advanced data viz, ten companies routing through one platform.",
  },
  {
    slug: "cfoainexus",
    span: "span-6",
    video: "/CFOAINexusCover.mp4",
    idx: "02 / CFOAI Nexus",
    when: "2026",
    metaLeft: "React · Stripe",
    metaRight: "Live · cfoainexus.com",
    title: "Finance Conference Platform",
    blurb:
      "An event & payments platform - registration, ticketing, and sponsor packages through one Stripe checkout, content via headless WordPress.",
  },
  {
    slug: "beoribarstvo",
    span: "span-6",
    image: "/Beoribarstvo.png",
    idx: "03 / BeoRibarstvo",
    when: "2026",
    metaLeft: "React · Tailwind",
    metaRight: "Live · beoribarstvo.com",
    title: "BeoRibarstvo",
    blurb:
      "A representative site for a fishery business - an interactive map of every location, Wolt ordering, contact forms, and multi-language support.",
  },
  {
    slug: "asset-tracker",
    span: "span-6",
    image: "/asset-tracker.jpg",
    idx: "04 / Asset Tracking",
    when: "2024 - 2025",
    metaLeft: "Angular · Golang",
    metaRight: "BLE beacons",
    title: "Asset Tracking Platform",
    blurb:
      "A custom asset-tracking platform - BLE beacons, real-time route monitoring, and a map-based dashboard showing exactly where every reusable container is.",
  },
];

/* ── Projects index: full catalog (8 cards, priority order) ── */
export const PROJECT_CARDS: ProjectCard[] = [
  {
    slug: "courier",
    span: "span-7",
    image: "/LandingVisualFabricusCourier.webp",
    idx: "01 / Featured",
    when: "2023 - 2025",
    metaLeft: "Client work · Fabricus.tech",
    metaRight: "Angular · Golang · AWS",
    title: "Courier Management Platform",
    blurb:
      "Multi-tenant SaaS for fleet operations - real-time tracking, advanced visualization, ten companies on one platform.",
    cats: ["work"],
  },
  {
    slug: "cfoainexus",
    span: "span-5",
    video: "/CFOAINexusCover.mp4",
    idx: "02 / Live",
    when: "2026",
    metaLeft: "Client work · CFOAI Nexus",
    metaRight: "Live · cfoainexus.com",
    title: "Finance Conference Platform",
    blurb:
      "A live event & payments platform - Stripe checkout, sponsor packages, and a headless WordPress CMS the team runs themselves.",
    cats: ["work"],
  },
  {
    slug: "beoribarstvo",
    span: "span-5",
    image: "/Beoribarstvo.png",
    idx: "03 / Live",
    when: "2026",
    metaLeft: "Client work · Fishery",
    metaRight: "Live · beoribarstvo.com",
    title: "BeoRibarstvo",
    blurb:
      "A representative site for a fishery business - an interactive country-wide map of locations, Wolt ordering, contact forms, and multi-language support.",
    cats: ["work"],
  },
  {
    slug: "asset-tracker",
    span: "span-7",
    image: "/asset-tracker.jpg",
    idx: "04 / Client",
    when: "2024 - 2025",
    metaLeft: "Client work · Logistics",
    metaRight: "Angular · Golang · BLE",
    title: "Asset Tracking Platform",
    blurb:
      "BLE-beacon asset tracking for reusable containers - real-time route monitoring, automatic loss detection, and a map-based admin dashboard.",
    cats: ["work"],
  },
  {
    slug: "afirmis",
    span: "span-7",
    image: "/afirmis.jpg",
    idx: "05 / Product",
    when: "2023 - 2024",
    metaLeft: "Product · Afirmis",
    metaRight: "Angular · Golang",
    title: "Afirmis",
    blurb:
      "A unified work-management platform - tasks, time tracking, docs, and role-based collaboration in one place, replacing a patchwork of tools.",
    cats: ["work"],
  },
  {
    slug: "petnet",
    span: "span-5",
    video: "/PetNetCover.mp4",
    art: "t-arc",
    idx: "06 / Hackathon",
    when: "2025",
    metaLeft: "Solana Mobile Hackathon",
    metaRight: "React Native · Solana",
    title: "PETNET",
    blurb:
      "NFT-based pet passports - identity and medical records on-chain. Vet workflows piping treatment reports to IPFS.",
    cats: ["hack", "web3", "mobile"],
  },
  {
    slug: "swissgate",
    span: "span-7",
    image: "/swissgate.jpg",
    idx: "07 / Client",
    when: "2026",
    metaLeft: "Client work · Real estate",
    metaRight: "React · WordPress",
    title: "Swiss Gate",
    blurb:
      "A representative site for a Swiss real-estate agency - a project showcase and metrics, fully manageable through a headless WordPress CMS.",
    cats: ["work"],
  },
  {
    slug: "cityflow",
    span: "span-5",
    art: "t-grid",
    idx: "08 / Thesis",
    when: "2024",
    metaLeft: "Bachelor's thesis",
    metaRight: "Angular · Spring Boot",
    title: "CityFlow",
    blurb:
      "An information system for urban transport - route organization, automated bus scheduling, and real-time vehicle tracking. Built as my Bachelor's thesis.",
  },
];

export const FILTERS: { value: string; label: string; count: string }[] = [
  { value: "all", label: "All", count: "08" },
  { value: "work", label: "Client work", count: "06" },
  { value: "hack", label: "Hackathon", count: "01" },
  { value: "web3", label: "Web3", count: "01" },
  { value: "mobile", label: "Mobile", count: "01" },
];

/* ── Case-study detail data ──────────────────────────────── */
export type CaseStudy = {
  title: string;
  type: string;
  client: string;
  role: string;
  when: string;
  status: string;
  image?: string;
  /** Looping cover video in /public. Takes precedence over `image`/`art`. */
  video?: string;
  art?: ThumbArt;
  label: string;
  meta: string;
  lede: string;
  problem: string;
  roleText: string;
  outcome: string;
  /** Single source of truth for a project's technologies (cards read this too). */
  stack: string[];
  links: { label: string; url: string }[];
  /** Optional bottom call-to-action; falls back to the Medium CTA. */
  cta?: { text: string; label: string; url: string };
};

const MEDIUM = "https://medium.com/@nemanjatodorovic132002002";

/** Bottom CTA pointing at a specific Medium write-up. */
const mediumCta = (url: string) => ({
  text: "The full write-up lives on Medium - the longer story, the screenshots, the lessons.",
  label: "Read the full case study",
  url,
});

export const CASE_STUDIES: Record<string, CaseStudy> = {
  courier: {
    title: "Courier Management Platform",
    type: "Client work",
    client: "Fabricus.tech",
    role: "Lead Frontend Engineer",
    when: "2023 → 2025",
    status: "Shipped · 10+ tenants",
    image: "/LandingVisualFabricusCourier.webp",
    label: "Featured / 01",
    meta: "Multi-tenant SaaS",
    lede: "What started as a single-tenant tool turned into a multi-tenant SaaS - ten logistics companies coordinating fleets, drivers, and parcels through one platform.",
    problem:
      "The first customer wanted a courier-tracking tool. By the time we shipped, two more companies wanted in. We had to evolve a single-tenant Angular app into a real multi-tenant SaaS - without losing the velocity that got us the first customer.",
    roleText:
      "I led the frontend through that transition. Re-architected routing, tenant isolation, and the role/permissions layer. Owned the data-viz work - live fleet maps, scheduling Gantt views, audit timelines - and partnered with backend on the Golang services that fed them. Mentored the two engineers who joined as the team grew.",
    outcome:
      "Today it serves 10+ logistics companies with real-time tracking and meaningful efficiency wins. The architecture has held - every new tenant onboards without forking the codebase.",
    stack: ["Angular", "TypeScript", "RxJS", "Firebase", "Golang", "MongoDB", "AWS"],
    links: [
      {
        label: "Read the full case study",
        url: "https://medium.com/@nemanjatodorovic132002002/optimizing-courier-service-operations-from-manual-chaos-to-smart-automation-06b32cb07d29",
      },
    ],
    cta: mediumCta(
      "https://medium.com/@nemanjatodorovic132002002/optimizing-courier-service-operations-from-manual-chaos-to-smart-automation-06b32cb07d29"
    ),
  },
  cfoainexus: {
    title: "Finance Conference Platform",
    type: "Client work",
    client: "CFOAI Nexus",
    role: "Frontend Engineer",
    when: "2026",
    status: "Live · cfoainexus.com",
    image: "/cfoainexus.jpg",
    label: "Live / 02",
    meta: "Stripe · Live",
    lede: "An event and payments platform for a finance conference - registration, ticketing, and sponsor packages, all running through a single Stripe checkout, with every piece of content editable through a headless WordPress CMS. Live at cfoainexus.com.",
    problem:
      "The previous setup scattered tickets, sponsorships, and add-ons across three separate vendors. Finance teams dreaded the reconciliation work, and attendees were forced to pay three times to attend one event.",
    roleText:
      "I built the React frontend - the registration flow, ticket selection, sponsor package configurator, and the unified Stripe checkout that tied them together. To keep the conference team self-sufficient, I wired the site to a headless WordPress CMS, pulling content through GraphQL so copy, schedules, and sponsor details are fully manageable without touching code. On the payments side, I worked closely with the backend on the webhook layer that fanned Stripe events out to internal systems.",
    outcome:
      "One platform, one checkout, one reconciliation report - and a non-technical team that can update the entire site themselves. The result is live at cfoainexus.com, now drawing 60k visits a month with 200+ tickets sold to date and a noticeably lower drop-off through the registration funnel.",
    stack: ["React", "Tailwind", "TanStack", "Firebase", "Stripe", "WordPress"],
    links: [{ label: "Visit the live site", url: "https://cfoainexus.com/" }],
    cta: {
      text: "The platform is live - go see it in action.",
      label: "Visit cfoainexus.com",
      url: "https://cfoainexus.com/",
    },
  },
  beoribarstvo: {
    title: "BeoRibarstvo",
    type: "Client work",
    client: "BeoRibarstvo",
    role: "Frontend Engineer",
    when: "2026",
    status: "Live · beoribarstvo.com",
    image: "/Beoribarstvo.png",
    label: "Live / 03",
    meta: "Live",
    lede: "A representative website for a fishery business, built to showcase their establishments to potential customers - featuring an interactive map of every location across the country, integrated Wolt ordering content, contact forms, and multi-language support.",
    problem:
      "The business operates multiple establishments across the country but had no central, polished web presence to bring them together for customers. They needed a site that made it easy to find a nearby location, get in touch, and order - while reaching a broad audience that doesn't all speak the same language.",
    roleText:
      "I built the React frontend end to end. The centerpiece is an interactive map plotting every establishment across the country, paired with contact numbers and forms so customers can reach any location directly. I integrated their Wolt content to surface ordering right on the site, and added multi-language support to widen their reach. I also handled the SEO optimization and Google Analytics integration so the site ranks well and the team can see how visitors actually use it.",
    outcome:
      "A single, polished hub for the entire business that now draws 20k+ visits a month, with SEO and analytics in place to keep that growth measurable and the interactive map making it effortless for customers to find and reach the nearest location.",
    stack: ["React", "Google Analytics", "SEO", "Tailwind", "Firebase"],
    links: [{ label: "Visit the live site", url: "https://beoribarstvo.com/" }],
    cta: {
      text: "The site is live - go take a look.",
      label: "Visit beoribarstvo.com",
      url: "https://beoribarstvo.com/",
    },
  },
  "asset-tracker": {
    title: "Asset Tracking Platform",
    type: "Client work",
    client: "Logistics client",
    role: "Frontend Engineer",
    when: "2024 → 2025",
    status: "Shipped",
    image: "/asset-tracker.jpg",
    label: "Client / 04",
    meta: "Real-time BLE",
    lede: "A custom asset-tracking platform for a distribution company moving from disposable packaging to reusable plastic containers - BLE beacons, real-time route monitoring, and a map-based admin dashboard that shows exactly where every container is.",
    problem:
      "Switching to reusable containers promised long-term savings, but it created a new headache: thousands of plastic boxes circulating through warehouses, trucks, and customer locations with no reliable way to know where any of them were. Every missing or unreturned box was a direct financial loss, and the commercial tracking solutions on the market were all too expensive, too complex, or too rigid for the client's logistics flow.",
    roleText:
      "I built the Angular web application that served as the system's control center for administrators. That meant turning noisy, real-time BLE scan data into something clear and actionable: live route monitoring streamed over WebSocket, automatic loss detection based on changes in stable beacon counts, and a map view that reconstructs each truck's GPS path with markers pinpointing exactly where and when containers were added or lost. A key design decision was tracking routes rather than trucks - since vehicles rotate between paths - which shaped how the entire interface modeled and displayed asset movement.",
    outcome:
      "The client went from zero real-time insight to 95% container traceability, with the time to detect a lost container dropping by over 80%. Previously paper-based logging was fully automated, saving dozens of hours a week, and early loss prevention is estimated to save the company €15,000+ annually.",
    stack: ["Angular", "WebSocket", "Golang", "MongoDB", "AWS", "Firebase", "BLE beacons"],
    links: [
      {
        label: "Read the full case study",
        url: "https://medium.com/@nemanjatodorovic132002002/how-we-built-a-real-time-asset-tracker-to-prevent-equipment-loss-a27646306b9b",
      },
    ],
    cta: mediumCta(
      "https://medium.com/@nemanjatodorovic132002002/how-we-built-a-real-time-asset-tracker-to-prevent-equipment-loss-a27646306b9b"
    ),
  },
  afirmis: {
    title: "Afirmis",
    type: "Product",
    client: "Afirmis",
    role: "Frontend Engineer",
    when: "2023 → 2024",
    status: "In development",
    image: "/afirmis.jpg",
    label: "Product / 05",
    meta: "Work management",
    lede: "A unified work-management platform that combines task management, time tracking, documentation, and role-based collaboration in one place - replacing the patchwork of Jira, Trello, Miro, and Clockify that small teams can't afford to run all at once. Built to scale across industries, from IT to logistics, HR, and marketing.",
    problem:
      "Modern teams juggle five different tools to manage their work, splitting information across platforms, multiplying subscription costs, and creating constant context-switching friction. Small teams feel this hardest - they need features from all of those tools but can't justify paying for every one. On top of that, not everyone works at a desk, so any real solution had to work as well on a phone or tablet as on an office PC, for users across very different skill levels.",
    roleText:
      "I built the entire frontend in Angular and shaped the product's UX end to end. The central challenge was serving wildly different users - owners, managers, and non-technical employees - through one interface that stayed simple without losing power, so I split the app into distinct administrator and employee environments and adapted each to specific roles. I implemented the dual authentication flow (standard email/password and Google for admins, passwordless magic-link login for employees added by their employer), multi-company management that lets one owner run separate company profiles without mixing data, and the smart-suggestion system that recommends employees for projects based on skills, salary, and budget.",
    outcome:
      "Modeled against comparable tool stacks, Afirmis is projected to cut tooling costs by up to 65% for teams currently paying for multiple subscriptions, and to save 30–50% of time in daily operations by removing the constant app-switching - alongside faster, role-specific onboarding for non-technical staff.",
    stack: ["Angular", "Golang", "MongoDB", "AWS", "Firebase", "Figma"],
    links: [
      {
        label: "Read the full case study",
        url: "https://medium.com/@nemanjatodorovic132002002/an-all-in-one-project-management-platform-for-every-industry-afirmis-case-study-b5a6e8870fde",
      },
    ],
    cta: mediumCta(
      "https://medium.com/@nemanjatodorovic132002002/an-all-in-one-project-management-platform-for-every-industry-afirmis-case-study-b5a6e8870fde"
    ),
  },
  petnet: {
    title: "PETNET",
    type: "Hackathon",
    client: "Solana Mobile Hackathon 2025",
    role: "Full-Stack / Mobile",
    when: "48 hours · 2025",
    status: "Hackathon build",
    video: "/PetNetCover.mp4",
    art: "t-arc",
    label: "Hackathon / 06",
    meta: "Solana Mobile · 2025",
    lede: "NFT-based pet passports. Identity and medical records on-chain, with vet-side workflows for uploading treatment reports to IPFS.",
    problem:
      "Pet records are scattered across vet clinics, vaccination booklets, and lost-and-found posters. We wanted to see what it would look like if a pet's identity was a single, portable, owner-controlled object.",
    roleText:
      "I built the React Native (Expo) app end-to-end - wallet adapter integration for Phantom and Solflare, the minting flow for the passport NFT, the vet-side upload flow that pinned treatment reports to IPFS via Pinata, and a small Node API to glue the off-chain bits together.",
    outcome:
      "Working demo on Solana devnet - pet passport NFTs mintable from the app, vet records pinned to IPFS, full owner-controlled history viewable on any wallet. Built in a weekend.",
    stack: ["Solana", "React Native", "Wallet Adapter", "Node.js", "IPFS", "MongoDB"],
    links: [
      { label: "GitHub repository", url: "https://github.com/Nemkac" },
      { label: "Read on Medium", url: MEDIUM },
    ],
  },
  swissgate: {
    title: "Swiss Gate",
    type: "Client work",
    client: "Swiss real-estate agency",
    role: "Frontend Engineer",
    when: "2026",
    status: "Shipped",
    image: "/swissgate.jpg",
    label: "Client / 07",
    meta: "Real estate · CMS",
    lede: "A representative website for a Swiss real estate agency, showcasing their past, current, and future projects alongside key metrics - with every project and piece of content fully manageable through a headless WordPress CMS.",
    problem:
      "The agency needed a polished, professional web presence to present their portfolio of developments and credibility metrics to prospective clients and partners. Just as important, they're not developers - so the site had to let a non-technical team add, edit, and retire projects on their own, without a developer in the loop every time the portfolio changed.",
    roleText:
      "I built the React frontend - the project showcase, the metrics presentation, and a clean, brand-appropriate layout for a high-trust industry. To keep the agency self-sufficient, I wired the site to a headless WordPress CMS so the team manages all content directly, and pulled that data through GraphQL, which also powers searching and filtering across their saved projects. The result is a fast, polished front end backed by a CMS the client already understands.",
    outcome:
      "A professional, self-manageable web presence the agency can keep current entirely on their own - adding new developments, updating project details, and surfacing them through search without ever touching code.",
    stack: ["React", "GraphQL", "WordPress", "Tailwind", "TanStack", "Firebase"],
    links: [{ label: "Read on Medium", url: MEDIUM }],
  },
  cityflow: {
    title: "CityFlow",
    type: "Bachelor's thesis",
    client: "Faculty of Technical Sciences",
    role: "Solo - full-stack",
    when: "2024",
    status: "Thesis project",
    art: "t-grid",
    label: "Thesis / 08",
    meta: "Urban transport",
    lede: "An information system for urban transport companies covering route organization, automated bus scheduling, and real-time vehicle tracking - built end to end as my Bachelor's thesis.",
    problem:
      "Urban transport companies still lean on outdated, manual methods for assigning buses, building timetables, and tracking vehicles, which leads to operational delays, wasted resources, and frustrated passengers. There was a clear need for a system to centralize and automate all of it - letting administrators plan routes, monitor active buses live, and make decisions from accurate data instead of guesswork.",
    roleText:
      "This was a solo build, so I owned the whole stack - requirements, database and system architecture, backend, and frontend. I designed the data model and built the Java Spring Boot backend with the core routing and scheduling logic, including automated timeline calculation that estimates departure intervals from the number of stations, active buses, and real geographic distance computed with the Haversine formula. For live tracking, I pushed continuous location updates to clients over WebSocket and used RabbitMQ to process incoming bus location data asynchronously and reliably. On the frontend I built two distinct Angular experiences behind a shared role-based auth system: a full management interface for administrators and schedulers, and a registration-free public view where passengers search routes, see timelines, and track buses in real time.",
    outcome:
      "Validated against feedback from transport professionals and analysis of existing tools, the system is projected to cut scheduling and coordination time by up to 45% by replacing manual processes with automated timeline generation and live tracking, while improving fleet utilization through distance-aware bus assignment and reducing daily operational errors via validation built into route, station, and bus management.",
    stack: ["Angular", "Java Spring Boot", "PostgreSQL", "WebSocket", "RabbitMQ", "Figma"],
    links: [
      {
        label: "Read the full case study",
        url: "https://medium.com/@nemanjatodorovic132002002/designing-a-smart-information-system-for-urban-transport-logistics-006f47dfd36d",
      },
    ],
    cta: mediumCta(
      "https://medium.com/@nemanjatodorovic132002002/designing-a-smart-information-system-for-urban-transport-logistics-006f47dfd36d"
    ),
  },
};

export const CASE_STUDY_ORDER = [
  "courier",
  "cfoainexus",
  "beoribarstvo",
  "asset-tracker",
  "afirmis",
  "petnet",
  "swissgate",
  "cityflow",
];