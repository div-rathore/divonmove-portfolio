import { BrandCollaboration } from "@/types/collaboration";

/**
 * CENTRALIZED BRAND COLLABORATIONS REGISTRY
 * -----------------------------------------
 * Tier 1 — Featured Collaborations (featured: true):
 * 1. Frido
 * 2. Soulflower
 * 3. Third Society
 *
 * Tier 2 — More Brands I've Worked With (featured: false):
 * 4. Foodstrong
 * 5. Good Flippin' Burgers
 * 6. Terractive (UGC Content Creation / Brand-Used Content)
 */
export const brandCollaborations: BrandCollaboration[] = [
  // ===========================================================================
  // TIER 1: FEATURED COLLABORATIONS
  // ===========================================================================
  {
    id: "frido",
    brandName: "Frido",
    category: "Joint Support, Ergonomics & Active Comfort",
    campaignName: "Protecting the Knees & Daily Movement Ergonomics",
    productFeatured: "Frido Knee Support & Active Walking Comfort",
    description:
      "Two-reel collaboration addressing two relatable truths in fitness: protecting your knees instead of ignoring joint support ('dekh lenge'), and why 1 hour in the gym can't undo 23 hours of a sedentary lifestyle.",
    creativeAngle:
      "Opened with a culturally relatable hook ('We plan splits, macros, and training outfits—but knee support? Dekh lenge') and followed with a movement-first message on daily step goals.",
    logo: "/brands/frido.svg",
    logoMonogram: "FR",
    thumbnail: "/content/reels/frido-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DZHn5D6tOdr/?hl=en",
    collaborationType: "Sponsored Instagram Reel",
    deliverables: [
      "2× Narrative Instagram Reels (9:16)",
      "In-Training Knee Support & Daily Walking Integration",
    ],
    posts: [
      {
        id: "frido-reel-1",
        title: "No More 'Dekh Lenge': Training Hard & Protecting Your Knees with Frido",
        format: "Instagram Reel",
        instagramUrl: "https://www.instagram.com/p/DZHn5D6tOdr/?hl=en",
        thumbnail: "/content/reels/frido-1.jpg",
        publishedDate: "Jun 3, 2026",
      },
      {
        id: "frido-reel-2",
        title: "1 Hour in the Gym Can't Undo the Other 23: Daily Steps with Frido",
        format: "Instagram Reel",
        instagramUrl: "https://www.instagram.com/p/DbS4OAgtjOT/?hl=en",
        thumbnail: "/content/reels/frido-2.jpg",
        publishedDate: "Jul 27, 2026",
      },
    ],
    metrics: {
      views: null,
      reach: null,
      likes: 189,
      comments: 28,
      shares: null,
      saves: null,
      impressions: null,
      profileActivity: null,
      engagementRate: null,
    },
    reportingPeriod: "Verified Campaign Reel Insights",
    featured: true,
    caseStudyId: "case-frido",
  },
  {
    id: "soulflower",
    brandName: "Soulflower",
    category: "Athlete Recovery & Clean Personal Care",
    campaignName: "HYROX Post-Race Epsom Salt Recovery & Athlete Hair Care",
    productFeatured: "Soulflower Rosemary Redensyl Serum, Rosemary Water & Epsom Salt",
    description:
      "Two-reel partnership spanning pre-race HYROX training routines (Rosemary Redensyl Serum + Rosemary Water, reaching 80.5K views) and post-HYROX Mumbai finish-line recovery rituals with Soulflower Epsom Salt (6.4K views).",
    creativeAngle:
      "Blended humor and real HYROX Mumbai training/race moments—'Trying to grow my hair without growing my problems' and testing post-race Epsom salt recovery rituals with a HYROX doubles partner.",
    logo: "/brands/soulflower.svg",
    logoMonogram: "SF",
    thumbnail: "/content/reels/soulflower-2.jpg",
    instagramUrl: "https://www.instagram.com/p/DdV0r8BN3Um/?hl=en",
    collaborationType: "Product Integration",
    deliverables: [
      "2× Lifestyle & HYROX Recovery Reels (9:16)",
      "Code Integration (DIV20) & Authentic Usage",
    ],
    posts: [
      {
        id: "soulflower-reel-1",
        title: "Rosemary Redensyl Serum + Rosemary Water Routine",
        format: "Instagram Reel",
        instagramUrl: "https://www.instagram.com/p/DdV0r8BN3Um/?hl=en",
        thumbnail: "/content/reels/soulflower-2.jpg",
        publishedDate: "Sep 16, 2026",
      },
      {
        id: "soulflower-reel-2",
        title: "Post-HYROX Mumbai Finish Line Recovery with Soulflower Epsom Salt",
        format: "Instagram Reel",
        instagramUrl: "https://www.instagram.com/p/DdnxnRgNeCd/?hl=en",
        thumbnail: "/content/reels/soulflower-1.jpg",
        publishedDate: "Sep 23, 2026",
      },
    ],
    metrics: {
      views: 80500,
      reach: null,
      likes: 123,
      comments: 17,
      shares: null,
      saves: null,
      impressions: null,
      profileActivity: null,
      engagementRate: null,
    },
    reportingPeriod: "Verified Instagram Dashboard (80.5K Top Reel + 6.4K Second Reel)",
    featured: true,
    caseStudyId: "case-soulflower",
  },
  {
    id: "third-society",
    brandName: "Third Society",
    category: "Performance Sportswear & Athletic Apparel",
    campaignName: "HYROX Mumbai: Taking the Kit to the Race Floor",
    productFeatured: "Third Society Performance Race Kit",
    description:
      "Put Third Society's performance kit to the ultimate test on the competition floor at HYROX Mumbai Doubles—proving durability, sweat management, and movement under real race intensity.",
    creativeAngle:
      "'We sent them the kit. They took it to the floor.'—A raw, high-energy competition collab post with @thirdsociety.in capturing real race execution rather than a studio shoot.",
    logo: "https://www.thirdsociety.in/cdn/shop/files/Group_101194_7e572126-4088-4896-bc80-446a8f4a42e4.png?v=1744286992&width=500",
    logoMonogram: "TS",
    thumbnail: "/content/reels/thirdsociety-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DdsT7bGJzTJ/?hl=en",
    collaborationType: "Sponsored Instagram Reel",
    deliverables: [
      "1× HYROX Mumbai Race-Floor Collab Reel (9:16)",
      "Competition Wear-Test & Co-Authored Brand Post",
    ],
    posts: [
      {
        id: "third-society-reel-1",
        title: "HYROX Mumbai: Third Society on the Floor",
        format: "Instagram Reel",
        instagramUrl: "https://www.instagram.com/p/DdsT7bGJzTJ/?hl=en",
        thumbnail: "/content/reels/thirdsociety-1.jpg",
        publishedDate: "Sep 24, 2026",
      },
    ],
    metrics: {
      views: null,
      reach: null,
      likes: null,
      comments: null,
      shares: null,
      saves: null,
      impressions: null,
      profileActivity: null,
      engagementRate: null,
    },
    reportingPeriod: "234 Interactions (Top 3 Interactive Post — Verified Dashboard)",
    featured: true,
    caseStudyId: "case-third-society",
  },

  // ===========================================================================
  // TIER 2: MORE BRANDS I'VE WORKED WITH
  // ===========================================================================
  {
    id: "foodstrong",
    brandName: "Foodstrong",
    category: "Sports Nutrition & Supplements",
    campaignName: "Athletic Fuel & Nutrition Restock",
    productFeatured: "Foodstrong Performance Nutrition (Code: FSDIVYANSHU)",
    description:
      "Partnered with @foodstrong.co to showcase my daily athletic nutrition restock—highlighting taste, convenience, and consistent fueling across running and strength blocks.",
    creativeAngle:
      "Authentic athlete restock and daily fuel integration with dedicated audience code FSDIVYANSHU.",
    logo: "https://foodstrong.in/cdn/shop/files/food-strong-logo-registered-PNG_1100x_f375d47f-a612-4583-80d1-c001fd8127e6.webp?v=1734467227&width=180",
    logoMonogram: "FS",
    thumbnail: "/content/reels/foodstrong-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DfM6smYNOer/?hl=en",
    collaborationType: "Sponsored Instagram Reel",
    deliverables: [
      "1× Dedicated Instagram Reel (9:16)",
      "Nutrition Restock & Promo Code Integration",
    ],
    posts: [
      {
        id: "foodstrong-reel-1",
        title: "A Little Restock for the Gains — Foodstrong",
        format: "Instagram Reel",
        instagramUrl: "https://www.instagram.com/p/DfM6smYNOer/?hl=en",
        thumbnail: "/content/reels/foodstrong-1.jpg",
        publishedDate: "Nov 1, 2026",
      },
    ],
    metrics: {
      views: null,
      reach: null,
      likes: null,
      comments: null,
      shares: null,
      saves: null,
      impressions: null,
      profileActivity: null,
      engagementRate: null,
    },
    reportingPeriod: "Individual Campaign Reel Insights",
    featured: false,
  },
  {
    id: "good-flippin-burgers",
    brandName: "Good Flippin' Burgers",
    category: "Food, QSR & Lifestyle",
    campaignName: "Post-Long-Run Reward & Real-Life Balance",
    productFeatured: "Good Flippin' Burgers Signature Menu",
    description:
      "Showcased the relatable lifestyle side of heavy training volume—earning a proper post-long-run meal with Good Flippin' Burgers while keeping fitness sustainable.",
    creativeAngle:
      "Connecting big weekend mileage with an unapologetic, joyful post-run refuel experience.",
    logo: "https://goodflippin.com/wp-content/uploads/2025/01/gfb-logo-new.png.webp",
    logoMonogram: "GFB",
    thumbnail: "/content/campaign-goodflippin.svg",
    instagramUrl: null,
    collaborationType: "Sponsored Instagram Reel",
    deliverables: [
      "1× Lifestyle & Post-Run Refuel Reel (9:16)",
      "In-Store / Taste Experience Storytelling",
    ],
    metrics: {
      views: null,
      reach: null,
      likes: null,
      comments: null,
      shares: null,
      saves: null,
      impressions: null,
      profileActivity: null,
      engagementRate: null,
    },
    reportingPeriod: "Individual Campaign Reel Insights",
    featured: false,
  },
  {
    id: "terractive",
    brandName: "Terractive",
    category: "Activewear & Sportswear",
    campaignName: "Performance Activewear UGC Campaign Production",
    productFeatured: "Terractive Performance & Activewear Apparel",
    description:
      "Produced dedicated short-form video creative for Terractive's own brand marketing channels—demonstrating fabric movement, fit, and athletic performance.",
    creativeAngle:
      "Direct-to-brand creative production built specifically for Terractive's marketing and ad channels, independent of personal feed posting.",
    logo: "https://terractive.in/cdn/shop/files/terractive_logo_220x.png?v=1683089855",
    logoMonogram: "TA",
    thumbnail: "/content/campaign-terractive.svg",
    videoPreviewUrl: null,
    instagramUrl: null,
    collaborationType: "UGC Content Creation",
    usageLabel: "UGC / Brand-Used Content",
    isUgcOnly: true,
    deliverables: [
      "UGC Video Creative for Brand Marketing Channels",
      "In-Training Movement & Product Showcase",
    ],
    metrics: {
      views: null,
      reach: null,
      likes: null,
      comments: null,
      shares: null,
      saves: null,
      impressions: null,
      profileActivity: null,
      engagementRate: null,
    },
    reportingPeriod: "UGC / Brand-Used Content",
    featured: false,
  },
];
