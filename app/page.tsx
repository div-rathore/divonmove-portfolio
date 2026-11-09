import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CreatorMetrics from "@/components/CreatorMetrics";
import BrandShowcase from "@/components/BrandShowcase";
import CampaignCaseStudies from "@/components/CampaignCaseStudies";
import ContentGallery from "@/components/ContentGallery";
import AudienceInsights from "@/components/AudienceInsights";
import CollaborationServices from "@/components/CollaborationServices";
import CollaborationProcess from "@/components/CollaborationProcess";
import MediaKitDownload from "@/components/MediaKitDownload";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#141311]">
      <Navbar />
      <main className="flex-1">
        {/* SECTION 1: HERO */}
        <Hero />

        {/* SECTION 2: CREATOR SNAPSHOT / PERFORMANCE AT A GLANCE */}
        <CreatorMetrics />

        {/* SECTION 3: BRAND COLLABORATIONS */}
        <BrandShowcase />

        {/* SECTION 4: FEATURED CAMPAIGNS / CASE STUDIES */}
        <CampaignCaseStudies />

        {/* SECTION 5: CONTENT SHOWCASE */}
        <ContentGallery />

        {/* SECTION 6: AUDIENCE INSIGHTS */}
        <AudienceInsights />

        {/* SECTION 7: WHAT I OFFER BRANDS & SECTION 8: WHY WORK WITH ME */}
        <CollaborationServices />

        {/* SECTION 9: HOW COLLABORATIONS WORK */}
        <CollaborationProcess />

        {/* DOWNLOADABLE CREATOR MEDIA KIT */}
        <MediaKitDownload />

        {/* SECTION 10: CONTACT / COLLABORATION INQUIRY */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

