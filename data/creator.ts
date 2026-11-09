import {
  CollaborationStep,
  CreatorOffering,
  CreatorProfile,
  DifferentiatorPillar,
} from "@/types/creator";

export const creatorProfile: CreatorProfile = {
  name: "Divyanshu Rathore",
  firstName: "Divyanshu",
  lastName: "Rathore",
  location: "India",
  instagramHandle: "@divonmove",
  instagramUrl: "https://www.instagram.com/divonmove/?hl=en",
  primaryHeadline: "Building strength. Chasing miles. Creating stories.",
  alternativeHeadline:
    "More than the miles. More than the reps. It's the story behind them.",
  shortIntroduction:
    "I'm Divyanshu Rathore, a fitness and lifestyle creator documenting the journey of strength, endurance, and everything in between. I collaborate with brands to turn real experiences into engaging stories that connect with people.",
  extendedBio:
    "Built on years of consistent strength training and expanded into endurance running, HYROX prep, and hybrid athletics, my work bridges disciplined physical training with cinematic, narrative-led filmmaking. Instead of staged studio reads, I integrate products directly into early-morning long runs, heavy training blocks, recovery routines, and everyday life.",
  positioningPillars: [
    "Fitness",
    "Running",
    "HYROX",
    "Hybrid Athletics",
    "Lifestyle",
    "Content Creation",
  ],
  contentVerticals: [
    "Running & Endurance Training",
    "Strength Training",
    "HYROX & Hybrid Fitness",
    "Fitness Lifestyle",
    "Nutrition & Supplementation",
    "Recovery & Wellness",
    "Athletic Events & Experiences",
    "Personal Growth & Discipline",
    "Product Reviews & Brand Integrations",
  ],
  targetBrandCategories: [
    "Sports Nutrition & Supplements",
    "Fitness Equipment",
    "Activewear & Sportswear",
    "Running Shoes & Accessories",
    "Recovery & Wellness",
    "Health & Lifestyle",
    "Fitness Technology & Wearables",
    "Sports Events & Competitions",
    "Food & Nutrition",
    "Travel & Outdoor Lifestyle",
  ],
  openToFormats: [
    "Paid Campaigns",
    "Sponsored Content",
    "UGC Creation",
    "Product Integrations",
    "Event Partnerships",
    "Long-Term Brand Ambassadorships",
  ],
  positioningPrinciple:
    "I am not simply offering Instagram exposure. I am offering creative production, authentic storytelling, audience connection, and measurable campaign value.",
  heroMedia: {
    posterImage: "/images/running-shot.jpg",
    videoUrl: null, // Drop MP4 path e.g. "/content/hero-reel.mp4" when ready
    altText:
      "Divyanshu Rathore — Hybrid Athlete, Runner, and Fitness Creator in training",
    caption: "HYBRID TRAINING BLOCK // ENDURANCE + STRENGTH DOCUMENTARY FRAME",
    isPlaceholder: false,
  },
};

export const collaborationOfferings: CreatorOffering[] = [
  {
    id: "sponsored-reels",
    index: "01",
    title: "Sponsored Instagram Reels",
    subtitle: "Narrative-Driven Short-Form Cinema",
    description:
      "Story-driven, engaging short-form videos featuring relevant products and services—concepted, filmed, and edited with strong hooks, voiceover storytelling, and high retention pacing.",
    deliverableFormats: [
      "30–90s Dedicated Concept Reel",
      "Custom Script & Narrative Hook",
      "Original Audio / Voiceover + Color Grade",
      "Collab Tag & Story Amplification Frame",
    ],
    bestFor: [
      "Product Launches",
      "Category Awareness",
      "Direct-to-Consumer Conversions",
    ],
    commercialNote: "Available as single-asset drops or multi-reel flight packages.",
  },
  {
    id: "product-integrations",
    index: "02",
    title: "Product Integrations",
    subtitle: "Organic In-Routine Placement",
    description:
      "Natural product placement within my actual fitness, running, training, and lifestyle experiences—showing how a product performs under real mileage, sweat, and daily discipline.",
    deliverableFormats: [
      "In-Training / Run-Block Integration",
      "Day-in-the-Life & Routine Weaving",
      "Nutrition & Recovery Stack Features",
      "Pinned Comment + Link-in-Bio/Story Sticker",
    ],
    bestFor: [
      "Supplements & Daily Nutrition",
      "Running Footwear & Apparel",
      "Recovery Tools & Wearables",
    ],
    commercialNote: "High audience trust through non-disruptive editorial storytelling.",
  },
  {
    id: "ugc-content-creation",
    index: "03",
    title: "UGC Content Creation",
    subtitle: "Performance-Ready Brand Channel Assets",
    description:
      "High-quality user-generated-style content that brands can deploy on their own digital channels, paid social ads, and website product pages, subject to agreed usage rights.",
    deliverableFormats: [
      "9:16 Paid Social Ad Creatives",
      "Multiple Hook Variations (A/B Testing)",
      "Clean B-Roll & Raw Product Footage",
      "30/60/90-Day Paid Whitelisting / Usage Licensing",
    ],
    bestFor: [
      "Meta & Instagram Performance Ads",
      "Website PDP Video Assets",
      "Brand-Owned Social Feeds",
    ],
    commercialNote: "Usage window and paid media rights tailored to campaign scope.",
  },
  {
    id: "event-coverage",
    index: "04",
    title: "Event Coverage",
    subtitle: "On-Ground Athletic & Launch Storytelling",
    description:
      "Content creation around athletic events, fitness competitions, race weekends, HYROX heats, product launches, and immersive brand experiences.",
    deliverableFormats: [
      "Race-Day / Event Documentary Reel",
      "Real-Time Story Sequences from the Floor",
      "Athlete & Community Experience Recap",
      "Post-Event Editorial Breakdown",
    ],
    bestFor: [
      "Marathons & Run Clubs",
      "HYROX & Functional Fitness Events",
      "Flagship Store & Shoe Launches",
    ],
    commercialNote: "Available across pan-India and international athletic calendar events.",
  },
  {
    id: "long-term-partnerships",
    index: "05",
    title: "Long-Term Brand Partnerships",
    subtitle: "Sustained Category Ambassadorship",
    description:
      "Authentic multi-month collaborations built around genuine product alignment and ongoing storytelling—allowing my audience to follow real adoption across an entire training season.",
    deliverableFormats: [
      "Monthly Reel + Story Cadence",
      "Training Block Series Sponsorship",
      "Category Exclusivity Options",
      "Co-Created Community Challenges",
    ],
    bestFor: [
      "Flagship Sportswear & Footwear",
      "Core Supplement & Nutrition Partners",
      "Wearables & Recovery Ecosystems",
    ],
    commercialNote: "Structured on 3, 6, or 12-month retainers with milestone reporting.",
  },
];

export const whyWorkWithMePillars: DifferentiatorPillar[] = [
  {
    id: "authentic-hybrid-journey",
    index: "01",
    title: "Earned Athletic Credibility",
    description:
      "Years of consistent strength work combined with dedicated road mileage and HYROX training. When a shoe, supplement, or recovery tool appears in frame, it is tested under real physical load.",
    proofPoint: "Strength + Endurance + Hybrid Conditioning",
  },
  {
    id: "storytelling-first",
    index: "02",
    title: "Storytelling Over Sales Scripts",
    description:
      "Audiences scroll past hard-sell commercials. I structure brand integrations around relatable personal narratives—the discipline of showing up, pre-dawn miles, and recovery after failure.",
    proofPoint: "Retention-Led Narrative Architecture",
  },
  {
    id: "editorial-production",
    index: "03",
    title: "Elevated Visual Production",
    description:
      "Thoughtful framing, dynamic pacing, intentional sound design, and clean typography ensure every sponsored Reel matches the visual standard of modern sportswear campaigns.",
    proofPoint: "Director + Athlete + Editor in One Workflow",
  },
  {
    id: "natural-integration",
    index: "04",
    title: "Seamless Category Fit",
    description:
      "From performance activewear (Terractive) and streetwear (Third Society) to sports nutrition (Foodstrong), foot ergonomics (Frido), personal care (Soulflower), and lifestyle dining (Good Flippin' Burgers), products fit naturally into my actual routine.",
    proofPoint: "Proven Across 6 Apparel, Nutrition, Recovery & Lifestyle Brands",
  },
  {
    id: "commercial-reliability",
    index: "05",
    title: "Agency-Grade Professionalism",
    description:
      "Clear brief alignment, structured concept approval, on-time asset delivery, and transparent post-campaign Instagram Insights reporting without inflated or combined metrics.",
    proofPoint: "Transparent First-Party Analytics Handoff",
  },
  {
    id: "long-term-mindset",
    index: "06",
    title: "Built for Compounding Brand Equity",
    description:
      "I selectively partner with brands I genuinely use and believe in—prioritizing long-term audience trust and repeat brand recall over one-off transactional posts.",
    proofPoint: "Selective Category Alignment",
  },
];

export const collaborationProcessSteps: CollaborationStep[] = [
  {
    stepNumber: "01",
    phase: "CONNECT",
    title: "Brief & Objective Alignment",
    description:
      "The brand shares its campaign requirements, target product, key messaging pillars, and commercial objectives via the inquiry form, email, or direct message.",
    deliverableMilestone: "Initial Discovery & Fit Assessment (Within 24h)",
  },
  {
    stepNumber: "02",
    phase: "PLAN",
    title: "Creative Direction & Commercial Scope",
    description:
      "We align on the storytelling angle, hook concepts, deliverable formats, usage rights, publication timeline, and commercial terms before cameras roll.",
    deliverableMilestone: "Approved Creative Treatment & Scope Lock",
  },
  {
    stepNumber: "03",
    phase: "CREATE",
    title: "Production, Training Integration & Edit",
    description:
      "I film and edit the agreed content inside real training, running, or lifestyle environments—delivering a polished review cut for brand feedback.",
    deliverableMilestone: "High-Res Asset Delivery & Final Sign-Off",
  },
  {
    stepNumber: "04",
    phase: "LAUNCH",
    title: "Publication & Transparent Reporting",
    description:
      "The campaign goes live at peak audience activity windows, followed by verified Instagram Insights screenshots and performance metrics shared as agreed.",
    deliverableMilestone: "Live Publication + Verified Insights Report",
  },
];

