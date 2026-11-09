export type BrandCategory =
  | "Sports Nutrition & Supplements"
  | "Ergonomics, Recovery & Wellness"
  | "Joint Support, Ergonomics & Active Comfort"
  | "Clean Personal Care & Recovery"
  | "Athlete Recovery & Clean Personal Care"
  | "Food, QSR & Lifestyle"
  | "Activewear & Sportswear"
  | "Performance Sportswear & Athletic Apparel"
  | "Apparel, Streetwear & Lifestyle"
  | "Running Shoes & Performance Gear"
  | "Fitness Technology & Wearables"
  | "Athletic Events & Competitions";

export interface CampaignMetrics {
  views: number | null;
  reach: number | null;
  likes: number | null;
  comments: number | null;
  shares: number | null;
  saves: number | null;
  impressions: number | null;
  profileActivity: number | null;
  engagementRate: number | null;
}

export interface CollaborationPost {
  id: string;
  title: string;
  format: "Instagram Reel" | "Carousel Post" | "Story Sequence" | "UGC Asset";
  instagramUrl: string | null;
  thumbnail: string;
  publishedDate?: string | null;
  metrics?: Partial<CampaignMetrics>;
}

export interface BrandCollaboration {
  id: string;
  brandName: string;
  category: BrandCategory;
  campaignName: string;
  productFeatured: string;
  description: string;
  creativeAngle: string;
  logo: string | null;
  logoMonogram: string;
  thumbnail: string;
  instagramUrl: string | null;
  collaborationType:
    | "Sponsored Instagram Reel"
    | "Product Integration"
    | "UGC Content Creation"
    | "Multi-Asset Partnership"
    | "Brand Ambassadorship"
    | "UGC + Organic Reel";
  usageLabel?: string;
  isUgcOnly?: boolean;
  videoPreviewUrl?: string | null;
  deliverables: string[];
  posts?: CollaborationPost[];
  metrics: CampaignMetrics;
  reportingPeriod: string;
  featured: boolean;
  caseStudyId?: string;
}
