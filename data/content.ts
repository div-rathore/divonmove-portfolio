import { ContentCategory, ContentGalleryItem } from "@/types/campaign";

export const CONTENT_CATEGORIES: ContentCategory[] = [
  "Running",
  "HYROX",
  "Fitness Lifestyle",
  "Brand Collaborations",
  "Nutrition and Recovery",
  "Personal Stories",
];

/**
 * CENTRALIZED CONTENT SHOWCASE GALLERY
 * ------------------------------------
 * Populated with real Instagram Reel thumbnails and real captions from @divonmove.
 */
export const contentGalleryItems: ContentGalleryItem[] = [
  {
    id: "content-organic-01",
    title: "Trained Together. Suffered Together. Raced Together. Aced It Together.",
    category: "HYROX",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "HYROX Mumbai Doubles race documentary—brotherhood, endurance, and leaving everything on the competition floor.",
    narrativeContext:
      "5.3K views & 391 interactions (#1 most-interacted post on the 90-day Instagram Dashboard).",
    thumbnail: "/content/reels/organic-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DdvKa6LI_CD/?hl=en",
    isPlaceholderAsset: false,
    metrics: {
      views: 5300,
      likes: 232,
      saves: null,
      shares: null,
      reportingScope: "Sep 25 • 391 Total Interactions",
    },
  },
  {
    id: "content-organic-05",
    title: "Saturdays Are Reserved for Long Runs",
    category: "Running",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "\"Saturdays are reserved for long runs baby 🦁\" — Cinematic weekend mileage, pacing, and road running storytelling.",
    narrativeContext:
      "Signature long-run storytelling blending endurance miles with cinematic framing.",
    thumbnail: "/content/reels/organic-5.jpg",
    instagramUrl: "https://www.instagram.com/p/DfC4Fl8KZQH/?hl=en",
    isPlaceholderAsset: false,
    metrics: {
      views: null,
      likes: null,
      saves: null,
      shares: null,
      reportingScope: "Oct 28 • Published Reel",
    },
  },
  {
    id: "content-organic-02",
    title: "Good Trip. NGL :) — RunCation & Active Travel",
    category: "Fitness Lifestyle",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "Taking the miles on the road—combining travel, exploration, and running everywhere (#RunCation #TravelRunner).",
    narrativeContext:
      "Active travel and lifestyle storytelling connecting fitness with exploration.",
    thumbnail: "/content/reels/organic-2.jpg",
    instagramUrl: "https://www.instagram.com/p/De4jHYdtbE_/?hl=en",
    isPlaceholderAsset: false,
    metrics: {
      views: null,
      likes: 115,
      saves: null,
      shares: null,
      reportingScope: "Oct 24 • Published Reel",
    },
  },
  {
    id: "content-organic-03",
    title: "Go Places I've Never Been & Figure Life Out As I Go",
    category: "Personal Stories",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "\"Honestly, I just want to do my thing, go places I’ve never been, make memories I’ll laugh about later, and figure life out as I go. 🩵\"",
    narrativeContext:
      "Personal reflection and lifestyle cinema that builds deep audience connection.",
    thumbnail: "/content/reels/organic-3.jpg",
    instagramUrl: "https://www.instagram.com/p/DerXtn0NhXJ/?hl=en",
    isPlaceholderAsset: false,
    metrics: {
      views: null,
      likes: null,
      saves: null,
      shares: null,
      reportingScope: "Oct 19 • Published Reel",
    },
  },
  {
    id: "content-organic-04",
    title: "Maybe Life Was Never That Complicated",
    category: "Personal Stories",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "\"maybe life was never that complicated. 🤍\" — Stripping away the noise through movement, nature, and perspective.",
    narrativeContext:
      "Minimalist visual storytelling and relatable personal philosophy.",
    thumbnail: "/content/reels/organic-4.jpg",
    instagramUrl: "https://www.instagram.com/p/De1uYVxNk_Y/?hl=en",
    isPlaceholderAsset: false,
    metrics: {
      views: null,
      likes: null,
      saves: null,
      shares: null,
      reportingScope: "Oct 23 • Published Reel",
    },
  },
  {
    id: "content-brand-soulflower-1",
    title: "Trying to Grow My Hair Without Growing My Problems — Soulflower",
    category: "Brand Collaborations",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "Soulflower Rosemary Redensyl Serum + Rosemary Water integrated into a relatable post-workout athlete hair care routine.",
    narrativeContext:
      "#1 top-viewed Reel on the 90-day Instagram Dashboard with 80.5K views.",
    thumbnail: "/content/reels/soulflower-2.jpg",
    instagramUrl: "https://www.instagram.com/p/DdV0r8BN3Um/?hl=en",
    isPlaceholderAsset: false,
    brandPartner: "Soulflower",
    metrics: {
      views: 80500,
      likes: 94,
      saves: null,
      shares: null,
      reportingScope: "Sep 16 • 80.5K Views",
    },
  },
  {
    id: "content-brand-soulflower-2",
    title: "Crossing the Finish Line & Post-HYROX Recovery — Soulflower",
    category: "Brand Collaborations",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "Testing post-race recovery rituals with a HYROX partner using Soulflower Epsom Salt after HYROX Mumbai.",
    narrativeContext:
      "#2 top-viewed Reel on the 90-day Instagram Dashboard with 6.4K views.",
    thumbnail: "/content/reels/soulflower-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DdnxnRgNeCd/?hl=en",
    isPlaceholderAsset: false,
    brandPartner: "Soulflower",
    metrics: {
      views: 6400,
      likes: 123,
      saves: null,
      shares: null,
      reportingScope: "Sep 23 • 6.4K Views",
    },
  },
  {
    id: "content-brand-thirdsociety",
    title: "We Sent Them the Kit. They Took It to the Floor — Third Society",
    category: "Brand Collaborations",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "HYROX Mumbai race-floor collaboration with @thirdsociety.in—putting the kit through a full competition test.",
    narrativeContext:
      "234 interactions (#3 top interactive post on the 90-day Dashboard).",
    thumbnail: "/content/reels/thirdsociety-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DdsT7bGJzTJ/?hl=en",
    isPlaceholderAsset: false,
    brandPartner: "Third Society",
    metrics: {
      views: null,
      likes: null,
      saves: null,
      shares: null,
      reportingScope: "Sep 24 • 234 Interactions",
    },
  },
  {
    id: "content-brand-frido-1",
    title: "No More 'Dekh Lenge': Protecting Your Knees — Frido",
    category: "Brand Collaborations",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "\"We plan our splits. We plan our Macros. We even plan our training outfits. But knee support? 'dekh lenge'\" — Solved with Frido.",
    narrativeContext:
      "Relatable problem-solution storytelling around joint protection for runners and lifters.",
    thumbnail: "/content/reels/frido-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DZHn5D6tOdr/?hl=en",
    isPlaceholderAsset: false,
    brandPartner: "Frido",
    metrics: {
      views: null,
      likes: 189,
      saves: null,
      shares: null,
      reportingScope: "Jun 3 • 189 Likes, 28 Comments",
    },
  },
  {
    id: "content-brand-frido-2",
    title: "1 Hour in the Gym Can't Undo the Other 23 — Frido",
    category: "Brand Collaborations",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "\"Your workout isn't the problem. Your sedentary lifestyle is.\" Completing daily step goals and staying moving with Frido.",
    narrativeContext:
      "Everyday movement and walking ergonomics integration.",
    thumbnail: "/content/reels/frido-2.jpg",
    instagramUrl: "https://www.instagram.com/p/DbS4OAgtjOT/?hl=en",
    isPlaceholderAsset: false,
    brandPartner: "Frido",
    metrics: {
      views: null,
      likes: null,
      saves: null,
      shares: null,
      reportingScope: "Jul 27 • Published Reel",
    },
  },
  {
    id: "content-nutrition-foodstrong",
    title: "A Little Restock for the Gains — Foodstrong",
    category: "Nutrition and Recovery",
    format: "Reel",
    duration: "Reel",
    shortCaption:
      "Daily athletic fuel restock with @foodstrong.co keeping the nutrition consistent across training blocks.",
    narrativeContext:
      "Sports nutrition partnership with dedicated audience code FSDIVYANSHU.",
    thumbnail: "/content/reels/foodstrong-1.jpg",
    instagramUrl: "https://www.instagram.com/p/DfM6smYNOer/?hl=en",
    isPlaceholderAsset: false,
    brandPartner: "Foodstrong",
    metrics: {
      views: null,
      likes: null,
      saves: null,
      shares: null,
      reportingScope: "Nov 1 • Published Reel",
    },
  },
];
