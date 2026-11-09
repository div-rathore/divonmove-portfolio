import { CreatorMetric, MetricScope } from "@/types/creator";

export const METRIC_SCOPE_METADATA: Record<
  MetricScope,
  {
    badgeLabel: string;
    description: string;
    accentClass: string;
  }
> = {
  current_account: {
    badgeLabel: "Current Account",
    description:
      "Point-in-time profile snapshot directly from Instagram Professional Dashboard.",
    accentClass: "border-[#141311]/20 text-[#141311] bg-[#EFECE6]",
  },
  monthly_analytics: {
    badgeLabel: "90-Day Insights",
    description:
      "Verified 90-day Instagram Professional Dashboard window. Separated from lifetime or single-campaign totals.",
    accentClass: "border-[#141311]/20 text-[#141311] bg-[#EFECE6]",
  },
  lifetime: {
    badgeLabel: "Top Content Benchmark",
    description:
      "Peak single-reel performance benchmark from the Instagram Professional Dashboard.",
    accentClass: "border-[#141311]/20 text-[#141311] bg-[#EFECE6]",
  },
  campaign_specific: {
    badgeLabel: "Single Campaign",
    description:
      "Isolated single-post or single-campaign performance from first-party Reel Insights.",
    accentClass: "border-[#141311]/20 text-[#141311] bg-[#EFECE6]",
  },
};

export const creatorMetrics: CreatorMetric[] = [
  {
    id: "total-views-90d",
    label: "Total Content Views",
    value: 283137,
    scope: "monthly_analytics",
    reportingPeriod: "Last 90 Days (Instagram Dashboard)",
    lastUpdated: "Verified Dashboard",
    explanatoryNote:
      "63.4% non-follower discovery (36.6% followers) • 274,650 Instagram + 8,487 Facebook views.",
    highlight: true,
  },
  {
    id: "unique-viewers-90d",
    label: "Unique Viewers Reached",
    value: 85187,
    scope: "monthly_analytics",
    reportingPeriod: "Last 90 Days (Instagram Dashboard)",
    lastUpdated: "Verified Dashboard",
    explanatoryNote:
      "Unique accounts reached across Reels (45.9%), Stories (49.6%), and Posts (4.4%).",
    highlight: true,
  },
  {
    id: "total-interactions-90d",
    label: "Total Interactions",
    value: 11025,
    scope: "monthly_analytics",
    reportingPeriod: "Last 90 Days (Instagram Dashboard)",
    lastUpdated: "Verified Dashboard",
    explanatoryNote:
      "53.1% from Reels • 41.2% from Stories • 5.6% from Posts (73.5% followers, 26.5% non-followers).",
    highlight: true,
  },
  {
    id: "engagement-rate",
    label: "Interaction-to-Reach Rate",
    value: "12.9",
    suffix: "%",
    scope: "monthly_analytics",
    reportingPeriod: "Last 90 Days (Instagram Dashboard)",
    lastUpdated: "Verified Dashboard",
    explanatoryNote:
      "Calculated from verified dashboard totals: (11,025 Interactions ÷ 85,187 Unique Viewers) × 100.",
    highlight: true,
  },
  {
    id: "top-reel-views",
    label: "Top Reel Views",
    value: "80.5K",
    scope: "lifetime",
    reportingPeriod: "Top Content (Last 90 Days)",
    lastUpdated: "Verified Dashboard",
    explanatoryNote:
      "Peak single-Reel views (80.5K), followed by recent top Reels at 6.4K, 5.7K, and 5.3K views.",
    highlight: true,
  },
  {
    id: "profile-activity-90d",
    label: "Profile Activity",
    value: 4209,
    scope: "monthly_analytics",
    reportingPeriod: "Last 90 Days (Instagram Dashboard)",
    lastUpdated: "Verified Dashboard",
    explanatoryNote:
      "4,169 profile visits + 40 external link taps generated from content discovery.",
    highlight: false,
  },
  {
    id: "accounts-engaged",
    label: "Accounts Engaged",
    value: 2147,
    scope: "monthly_analytics",
    reportingPeriod: "Last 90 Days (Instagram Dashboard)",
    lastUpdated: "Verified Dashboard",
    explanatoryNote:
      "Unique accounts actively liking, commenting, saving, sharing, or replying.",
    highlight: false,
  },
  {
    id: "instagram-followers",
    label: "Total Followers",
    value: 1260,
    scope: "current_account",
    reportingPeriod: "Current Live Profile",
    lastUpdated: "Verified Dashboard",
    explanatoryNote:
      "High-reach community punching at 224× follower count in 90-day views (283.1K views).",
    highlight: false,
  },
];

export const verifiedPortfolioFacts = [
  {
    id: "confirmed-brand-partners",
    value: "06",
    label: "Confirmed Brand Collaborations",
    scopeLabel: "Portfolio Record",
    detail:
      "Frido • Soulflower • Third Society • Foodstrong • Good Flippin' Burgers • Terractive",
  },
  {
    id: "ninety-day-views",
    value: "283K+",
    label: "90-Day Content Views",
    scopeLabel: "Verified Dashboard",
    detail:
      "283,137 total views • 85,187 unique viewers • 63.4% non-follower organic discovery",
  },
  {
    id: "ninety-day-interactions",
    value: "11.0K",
    label: "90-Day Content Interactions",
    scopeLabel: "Verified Dashboard",
    detail:
      "11,025 interactions • 4,169 profile visits • 2,147 engaged accounts",
  },
];
