export type MetricScope =
  | "current_account"
  | "monthly_analytics"
  | "lifetime"
  | "campaign_specific";

export interface CreatorMetric {
  id: string;
  label: string;
  value: number | string | null;
  prefix?: string;
  suffix?: string;
  scope: MetricScope;
  reportingPeriod: string;
  lastUpdated: string | null;
  explanatoryNote?: string;
  highlight?: boolean;
}

export interface AudienceDemographicItem {
  label: string;
  percentage: number | null;
}

export interface AudienceTopLocation {
  rank: number;
  name: string;
  percentage: number | null;
}

export interface AudienceInsightsData {
  reportingPeriod: string;
  lastUpdated: string | null;
  sourceNote: string;
  genderDistribution: AudienceDemographicItem[];
  ageDistribution: AudienceDemographicItem[];
  topCities: AudienceTopLocation[];
  topCountries: AudienceTopLocation[];
  audienceInterests: string[];
  activeHoursSummary?: string | null;
}

export interface CreatorOffering {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverableFormats: string[];
  bestFor: string[];
  commercialNote: string;
}

export interface DifferentiatorPillar {
  id: string;
  index: string;
  title: string;
  description: string;
  proofPoint: string;
}

export interface CollaborationStep {
  stepNumber: string;
  phase: "CONNECT" | "PLAN" | "CREATE" | "LAUNCH";
  title: string;
  description: string;
  deliverableMilestone: string;
}

export interface CreatorProfile {
  name: string;
  firstName: string;
  lastName: string;
  location: string;
  instagramHandle: string;
  instagramUrl: string;
  primaryHeadline: string;
  alternativeHeadline: string;
  shortIntroduction: string;
  extendedBio: string;
  positioningPillars: string[];
  contentVerticals: string[];
  targetBrandCategories: string[];
  openToFormats: string[];
  positioningPrinciple: string;
  heroMedia: {
    posterImage: string;
    videoUrl?: string | null;
    altText: string;
    caption: string;
    isPlaceholder: boolean;
  };
}

export interface ContactConfig {
  headline: string;
  subheadline: string;
  email: string;
  instagramHandle: string;
  instagramDmUrl: string;
  whatsappUrl: string | null;
  location: string;
  responseSla: string;
  budgetRanges: string[];
  campaignObjectives: string[];
  deliverableOptions: string[];
}

