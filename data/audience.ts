import { AudienceInsightsData } from "@/types/creator";

/**
 * CENTRALIZED AUDIENCE INSIGHTS CONFIGURATION
 * -------------------------------------------
 * Populate `percentage` values directly from your Instagram Professional Dashboard -> Total Followers.
 * Any chart category where all percentages are `null` will automatically hide its chart
 * until verified numbers are entered.
 */
export const audienceInsights: AudienceInsightsData = {
  reportingPeriod: "Instagram Professional Dashboard (Last 90 Days)",
  lastUpdated: "Verified Dashboard",
  sourceNote:
    "First-party Instagram Professional Dashboard -> Account & Follower Insights (1,260 Total Followers • 85,187 Viewers).",
  genderDistribution: [
    { label: "Men", percentage: null },
    { label: "Women", percentage: null },
  ],
  ageDistribution: [
    { label: "18–24", percentage: null },
    { label: "25–34", percentage: null },
    { label: "35–44", percentage: null },
    { label: "45+", percentage: null },
  ],
  topCities: [
    { rank: 1, name: "Mumbai", percentage: null },
    { rank: 2, name: "Delhi NCR", percentage: null },
    { rank: 3, name: "Bengaluru", percentage: null },
    { rank: 4, name: "Pune", percentage: null },
    { rank: 5, name: "Hyderabad", percentage: null },
  ],
  topCountries: [
    { rank: 1, name: "India", percentage: null },
    { rank: 2, name: "United States", percentage: null },
    { rank: 3, name: "United Arab Emirates", percentage: null },
    { rank: 4, name: "United Kingdom", percentage: null },
  ],
  audienceInterests: [
    "Distance Running & Marathon Prep",
    "HYROX & Functional Hybrid Training",
    "Strength & Hypertrophy Conditioning",
    "Sports Nutrition, Whey & Recovery Stacks",
    "Running Footwear & GPS Wearables",
    "Discipline, Early-Morning Routines & Lifestyle",
  ],
  activeHoursSummary:
    "Peak follower activity at 6:00 AM (550 active), 3:00 AM (521), 9:00 AM (515), 12:00 AM (508), and 9:00 PM (465) — aligned with early-morning runners and evening training schedules.",
};
