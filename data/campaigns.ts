import { CampaignCaseStudy } from "@/types/campaign";
import { CampaignMetrics } from "@/types/collaboration";

export function computeVerifiedEngagementRate(metrics: CampaignMetrics): {
  rate: string | null;
  formulaUsed: string;
} {
  if (metrics.engagementRate !== null && metrics.engagementRate !== undefined) {
    return {
      rate: `${metrics.engagementRate.toFixed(2)}%`,
      formulaUsed: "Direct Verified Instagram Insights Rate",
    };
  }

  const interactions =
    (metrics.likes ?? 0) +
    (metrics.comments ?? 0) +
    (metrics.shares ?? 0) +
    (metrics.saves ?? 0);

  if (interactions === 0) {
    return {
      rate: null,
      formulaUsed:
        "ER = ((Likes + Comments + Shares + Saves) ÷ Accounts Reached) × 100",
    };
  }

  if (metrics.reach && metrics.reach > 0) {
    const calculated = (interactions / metrics.reach) * 100;
    return {
      rate: `${calculated.toFixed(2)}%`,
      formulaUsed:
        "((Likes + Comments + Shares + Saves) ÷ Accounts Reached) × 100",
    };
  }

  if (metrics.views && metrics.views > 0) {
    const calculated = (interactions / metrics.views) * 100;
    return {
      rate: `${calculated.toFixed(2)}%`,
      formulaUsed: "((Likes + Comments + Shares + Saves) ÷ Reel Views) × 100",
    };
  }

  return {
    rate: null,
    formulaUsed:
      "ER = ((Likes + Comments + Shares + Saves) ÷ Accounts Reached) × 100",
  };
}

/**
 * TIER 1 FEATURED CAMPAIGN CASE STUDIES
 * 1. Frido
 * 2. Soulflower
 * 3. Third Society
 */
export const featuredCampaignCaseStudies: CampaignCaseStudy[] = [
  {
    id: "case-frido",
    collaborationId: "frido",
    brandName: "Frido",
    category: "Joint Support, Ergonomics & Active Comfort",
    product: "Frido Knee Support & Active Walking Solutions",
    campaignTitle: "No More 'Dekh Lenge': Knee Protection & Daily Movement with Frido",
    campaignObjective:
      "Turn everyday joint support and walking ergonomics into high-retention, relatable fitness conversations across two dedicated Instagram Reels.",
    contentConcept:
      "Reel 01 calls out how athletes plan splits, macros, and outfits while ignoring knee support ('dekh lenge'). Reel 02 tackles the 23 sedentary hours outside the gym through daily step goals.",
    deliverables: [
      "2× Narrative Storytelling Reels (9:16)",
      "In-Training Knee Support & Daily Step Integration",
    ],
    creativeApproach:
      "Used a sharp, conversational hook ('We plan our splits. We plan our Macros. But knee support? Dekh lenge') paired with real training and walking footage.",
    campaignDescription:
      "A two-Reel partnership translating joint protection and daily movement ergonomics into relatable athlete habits.",
    integrationStory: {
      context:
        "Runners and gym-goers obsess over programming and nutrition, yet frequently brush off knee support and daily low-impact steps until soreness hits.",
      integrationExecution:
        "Integrated Frido directly into training blocks and daily step routines, using direct-to-camera storytelling and DM link callouts.",
      whyItWorked:
        "Spoke in the exact language Indian lifters and runners use every day ('dekh lenge'), driving 189 likes and 28 high-intent comments on Reel 01.",
      outcomeSummary:
        "Positioned Frido as an essential training and daily-movement partner rather than a clinical orthopedic product.",
    },
    thumbnail: "/content/reels/frido-1.jpg",
    videoPreviewUrl: null,
    instagramUrl: "https://www.instagram.com/p/DZHn5D6tOdr/?hl=en",
    posts: [
      {
        id: "frido-post-01",
        title: "No More 'Dekh Lenge' — Knee Support Reel",
        format: "Instagram Reel",
        instagramUrl: "https://www.instagram.com/p/DZHn5D6tOdr/?hl=en",
        thumbnail: "/content/reels/frido-1.jpg",
        publishedDate: "Jun 3, 2026",
      },
      {
        id: "frido-post-02",
        title: "1 Hour in the Gym vs. the Other 23 — Walking Reel",
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
    engagementCalculationMethod:
      "Verified Post Interactions (189 Likes + 28 Comments on Reel 01).",
    reportingPeriod: "Verified Reel Insights",
    lastUpdated: "Verified Dashboard",
    featuredOrder: 1,
  },
  {
    id: "case-soulflower",
    collaborationId: "soulflower",
    brandName: "Soulflower",
    category: "Athlete Recovery & Clean Personal Care",
    product: "Soulflower Rosemary Redensyl Serum, Rosemary Water & Epsom Salt",
    campaignTitle: "From 80.5K-View Hair Care Routine to Post-HYROX Epsom Salt Recovery",
    campaignObjective:
      "Integrate Soulflower's hair care and Epsom salt recovery products into authentic HYROX training and post-race recovery narratives.",
    contentConcept:
      "Reel 01 ('Trying to grow my hair without growing my problems') wove Rosemary Redensyl Serum & Rosemary Water into daily training life, hitting 80.5K views. Reel 02 captured post-HYROX Mumbai recovery with Soulflower Epsom Salt (6.4K views).",
    deliverables: [
      "2× Lifestyle & HYROX Recovery Reels (9:16)",
      "Promo Code Integration (DIV20) Across Both Reels",
    ],
    creativeApproach:
      "Led with self-aware humor and real post-race exhaustion alongside a HYROX doubles partner, keeping the product placement effortless and entertaining.",
    campaignDescription:
      "Two high-performing Reels (80.5K views and 6.4K views) connecting hybrid athletics with daily hair care and post-race recovery.",
    integrationStory: {
      context:
        "Heavy sweat, intense HYROX prep, and full-send race days create a natural need for both scalp care and post-race muscle recovery.",
      integrationExecution:
        "Showcased the Rosemary Redensyl Serum in a relatable daily routine (Sep 16) and the Epsom Salt soak immediately after crossing the HYROX Mumbai finish line (Sep 23).",
      whyItWorked:
        "Both Reels ranked as the #1 and #2 top-viewed content on the 90-day Instagram Professional Dashboard (80.5K views and 6.4K views).",
      outcomeSummary:
        "Generated over 86.9K combined views across the two Reels with strong promo code (DIV20) visibility.",
    },
    thumbnail: "/content/reels/soulflower-2.jpg",
    videoPreviewUrl: null,
    instagramUrl: "https://www.instagram.com/p/DdV0r8BN3Um/?hl=en",
    posts: [
      {
        id: "soulflower-post-01",
        title: "Rosemary Redensyl Serum Routine (80.5K Views)",
        format: "Instagram Reel",
        instagramUrl: "https://www.instagram.com/p/DdV0r8BN3Um/?hl=en",
        thumbnail: "/content/reels/soulflower-2.jpg",
        publishedDate: "Sep 16, 2026",
      },
      {
        id: "soulflower-post-02",
        title: "Post-HYROX Epsom Salt Recovery (6.4K Views)",
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
    engagementCalculationMethod:
      "Verified 90-Day Dashboard: 80.5K views + 248 interactions on Reel 01 (Sep 16) • 6.4K views on Reel 02 (Sep 23).",
    reportingPeriod: "Verified Instagram Dashboard",
    lastUpdated: "Verified Dashboard",
    featuredOrder: 2,
  },
  {
    id: "case-third-society",
    collaborationId: "third-society",
    brandName: "Third Society",
    category: "Performance Sportswear & Athletic Apparel",
    product: "Third Society Performance Race Kit",
    campaignTitle: "We Sent Them the Kit. They Took It to the Floor — HYROX Mumbai",
    campaignObjective:
      "Validate Third Society's athletic apparel under true competition pressure on the race floor at HYROX Mumbai.",
    contentConcept:
      "Instead of a staged gym shoot, wore the Third Society kit through every run lap and functional station at HYROX Mumbai Doubles alongside @mad_hokar.",
    deliverables: [
      "1× Co-Published HYROX Mumbai Competition Reel (9:16)",
      "Real-World Race-Floor Performance Validation",
    ],
    creativeApproach:
      "Captured raw competition intensity, camaraderie, and finish-line emotion—'That's the only review that matters to us.'",
    campaignDescription:
      "A high-impact competition collaboration proving Third Society's performance kit on the HYROX Mumbai floor.",
    integrationStory: {
      context:
        "Performance apparel brands need proof that their gear holds up when athletes are pushed to their limit.",
      integrationExecution:
        "Raced HYROX Mumbai in full Third Society kit and published a joint collaboration Reel with @thirdsociety.in.",
      whyItWorked:
        "Ranked as the #3 most interactive piece of content on the 90-day dashboard with 234 total interactions.",
      outcomeSummary:
        "Delivered authentic athlete co-sign and race-day social proof for Third Society.",
    },
    thumbnail: "/content/reels/thirdsociety-1.jpg",
    videoPreviewUrl: null,
    instagramUrl: "https://www.instagram.com/p/DdsT7bGJzTJ/?hl=en",
    posts: [
      {
        id: "thirdsociety-post-01",
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
      profileActivity: 234,
      engagementRate: null,
    },
    engagementCalculationMethod:
      "Verified 90-Day Dashboard: 234 total interactions (Sep 24 Top Content).",
    reportingPeriod: "Verified Instagram Dashboard",
    lastUpdated: "Verified Dashboard",
    featuredOrder: 3,
  },
];
