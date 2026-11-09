import { ContactConfig } from "@/types/creator";

/**
 * CENTRALIZED CONTACT & INQUIRY CONFIGURATION
 * -------------------------------------------
 * Update `email`, `instagramHandle`, `instagramDmUrl`, and `whatsappUrl` (optional) here.
 * If `whatsappUrl` is left `null`, the WhatsApp button is cleanly hidden.
 */
export const contactConfig: ContactConfig = {
  headline: "Have a brand worth talking about? Let's create something meaningful.",
  subheadline:
    "Available for paid Instagram Reel campaigns, natural product integrations, performance UGC assets, athletic event coverage, and long-term category ambassadorships.",
  email: "divyanshurathore11@gmail.com", // Replace with your primary collaboration email
  instagramHandle: "@divonmove", // Replace with exact handle
  instagramDmUrl: "https://www.instagram.com/divonmove/?hl=en", // Replace with exact Instagram profile / ig.me link
  whatsappUrl: null, // Optional: e.g. "https://wa.me/91XXXXXXXXXX" — Hidden automatically when null
  location: "India (Available Pan-India & Travel)",
  responseSla: "Direct response within 24 hours for qualified brand inquiries.",
  campaignObjectives: [
    "Product Launch & Category Awareness",
    "In-Routine Athletic Product Integration",
    "Direct-to-Consumer Conversions / Trials",
    "Performance UGC Assets for Brand Ad Channels",
    "Athletic Event / Race / Launch Coverage",
    "Long-Term Brand Ambassadorship (3–12 Months)",
  ],
  deliverableOptions: [
    "Sponsored Instagram Reel (Dedicated)",
    "Organic Product Integration in Training Reel",
    "Multi-Reel Flight + Story Amplification",
    "UGC Ad Creative Package (With Usage Rights)",
    "On-Ground Event / Race-Day Coverage",
    "Custom / Multi-Format Partnership",
  ],
  budgetRanges: [
    "Single Deliverable / Test Flight",
    "Multi-Asset Campaign Package",
    "Quarterly / Long-Term Retainer",
    "Discuss Custom Commercial Scope",
  ],
};

