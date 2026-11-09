import { BrandCategory, CampaignMetrics, CollaborationPost } from "./collaboration";

export type ContentCategory =
  | "Running"
  | "HYROX"
  | "Strength Training"
  | "Fitness Lifestyle"
  | "Nutrition and Recovery"
  | "Brand Collaborations"
  | "Personal Stories";

export interface CampaignCaseStudy {
  id: string;
  collaborationId: string;
  brandName: string;
  category: BrandCategory;
  product: string;
  campaignTitle: string;
  campaignObjective: string;
  contentConcept: string;
  deliverables: string[];
  creativeApproach: string;
  campaignDescription: string;
  integrationStory: {
    context: string;
    integrationExecution: string;
    whyItWorked: string;
    outcomeSummary: string;
  };
  thumbnail: string;
  videoPreviewUrl?: string | null;
  instagramUrl: string | null;
  posts: CollaborationPost[];
  metrics: CampaignMetrics;
  engagementCalculationMethod: string;
  reportingPeriod: string;
  lastUpdated: string | null;
  featuredOrder: number;
}

export interface ContentGalleryItem {
  id: string;
  title: string;
  category: ContentCategory;
  format: "Reel" | "Carousel" | "Editorial";
  duration?: string;
  shortCaption: string;
  narrativeContext: string;
  thumbnail: string;
  instagramUrl: string | null;
  isPlaceholderAsset: boolean;
  brandPartner?: string | null;
  metrics?: {
    views: number | null;
    likes: number | null;
    saves: number | null;
    shares: number | null;
    reportingScope: string;
  };
}

