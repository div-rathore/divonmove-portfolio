# Divyanshu Rathore — Creator Portfolio, Media Kit & Brand Collaboration Toolkit

A conversion-focused, editorial personal brand website, live media kit, and partnership toolkit built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, **Motion**, **Lucide React**, and **Recharts**.

---

## 1. Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:3000` for the main portfolio and `http://localhost:3000/media-kit` for the printable/downloadable PDF Creator Media Kit.

---

## 2. Centralized Content Management (`data/`)

All content is decoupled from UI components inside strongly-typed TypeScript configuration files under `/data`:

| File | Purpose |
| :--- | :--- |
| `data/creator.ts` | Name, Instagram URL, headlines, bio, hero image/video, collaboration services, differentiators, and 4-step workflow. |
| `data/metrics.ts` | Account-level, 30-day rolling, lifetime, and campaign metrics. Any metric with `value: null` is automatically hidden. |
| `data/collaborations.ts` | Confirmed brand partners (**Foodstrong**, **Offlimits Apex**, **Frido**, **Soulflower**, **YourHappyLife**, **The Diet Bistro**) and future brands. |
| `data/campaigns.ts` | Deep-dive campaign case studies with 4-part storytelling and automated Engagement Rate calculation (`computeVerifiedEngagementRate`). |
| `data/audience.ts` | Gender split, age distribution, top cities, top countries, and audience interests. Unpopulated charts (`percentage: null`) automatically hide. |
| `data/content.ts` | 9:16 Reels showcase across all 7 categories (`Running`, `HYROX`, `Strength Training`, `Fitness Lifestyle`, `Nutrition and Recovery`, `Brand Collaborations`, `Personal Stories`). |
| `data/contact.ts` | Collaboration email, Instagram DM link, optional WhatsApp URL, and inquiry form options. |

---

## 3. How to Update Creator Metrics (`data/metrics.ts`)

Open `data/metrics.ts` and update any metric's `value` from `null` to your verified number or string:

```ts
{
  id: "instagram-followers",
  label: "Instagram Followers",
  value: "18.4K", // Was null — now automatically renders in Section 2 & /media-kit
  scope: "current_account",
  reportingPeriod: "Current Live Profile",
  lastUpdated: "Nov 2026",
  highlight: true,
}
```

---

## 4. How to Add a Brand Collaboration (`data/collaborations.ts`)

Append a new entry to `brandCollaborations` in `data/collaborations.ts`:

```ts
{
  id: "new-brand-slug",
  brandName: "Brand Name",
  category: "Sports Nutrition & Supplements",
  campaignName: "Campaign Title",
  productFeatured: "Product Name",
  description: "Short summary of how the product was integrated.",
  creativeAngle: "Storytelling hook and execution notes.",
  logo: "/brands/new-brand.svg",
  logoMonogram: "BN",
  thumbnail: "/content/new-brand-cover.jpg",
  instagramUrl: "https://www.instagram.com/reel/XXXX/",
  collaborationType: "Sponsored Instagram Reel",
  deliverables: ["1× Dedicated Instagram Reel (9:16)"],
  metrics: {
    views: 42000,
    reach: 36500,
    likes: 2100,
    comments: 84,
    shares: 310,
    saves: 490,
    impressions: 48000,
    profileActivity: 620,
    engagementRate: null, // Calculated automatically in case studies if null
  },
  reportingPeriod: "Individual Campaign Reel Insights",
  featured: true,
}
```

---

## 5. How to Replace Photographs, Thumbnails & Videos

1. **Hero Portrait / Video**:
   - Place your portrait image (e.g. `public/images/divyanshu-hero.jpg`) or vertical video (`public/content/hero-reel.mp4`).
   - Update `creatorProfile.heroMedia.posterImage` and `creatorProfile.heroMedia.videoUrl` in `data/creator.ts`.
2. **Reel Cover Thumbnails**:
   - Place 9:16 cover images in `public/content/`.
   - Update `thumbnail` and `instagramUrl` in `data/collaborations.ts`, `data/campaigns.ts`, and `data/content.ts`.
3. **Brand Logos**:
   - Place SVG or PNG logos in `public/brands/` and reference them via `logo` in `data/collaborations.ts`.

---

## 6. Deployment on Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Optional Environment Variable:
   - `NEXT_PUBLIC_SITE_URL`: Set to your production domain (e.g., `https://divyanshurathore.com`) for canonical URLs, Open Graph metadata, `sitemap.xml`, and `robots.txt`.
4. Click **Deploy**.

