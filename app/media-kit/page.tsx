"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import {
  collaborationOfferings,
  creatorProfile,
  whyWorkWithMePillars,
} from "@/data/creator";
import {
  creatorMetrics,
  METRIC_SCOPE_METADATA,
  verifiedPortfolioFacts,
} from "@/data/metrics";
import { brandCollaborations } from "@/data/collaborations";
import { featuredCampaignCaseStudies } from "@/data/campaigns";
import { audienceInsights } from "@/data/audience";
import { CONTENT_CATEGORIES } from "@/data/content";
import { contactConfig } from "@/data/contact";

export default function MediaKitPage() {
  const availableMetrics = creatorMetrics.filter(
    (m) => m.value !== null && m.value !== undefined && m.value !== ""
  );

  const validGender = audienceInsights.genderDistribution.filter(
    (g) => g.percentage !== null
  );
  const validAge = audienceInsights.ageDistribution.filter(
    (a) => a.percentage !== null
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("print") === "true") {
        const timer = setTimeout(() => {
          window.print();
        }, 450);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#141311] print:bg-white">
      {/* Sticky Control Bar (Hidden when printing) */}
      <div className="print:hidden sticky top-0 z-40 bg-[#141311] text-[#F7F5F0] px-4 sm:px-8 py-3.5">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] text-[#F7F5F0] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.14em] bg-[#F7F5F0] text-[#141311] hover:bg-[#EFECE6] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save as PDF / Print Media Kit</span>
          </button>
        </div>
      </div>

      {/* Main Editorial Media Kit Sheet */}
      <main className="max-w-5xl mx-auto p-6 sm:p-10 lg:p-14 print:p-6 space-y-10">
        {/* Header */}
        <header className="bg-[#141311] text-[#F7F5F0] p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-6 border-b border-[#F7F5F0]/15 text-xs uppercase tracking-[0.16em] text-[#A39E93]">
            <span>Creator Media Kit &amp; Partnership Dossier</span>
            <span className="inline-flex items-center gap-1.5 text-[#F7F5F0]">
              <MapPin className="w-3.5 h-3.5" />
              {creatorProfile.location}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F7F5F0] mb-2">
            divonmove
          </h1>
          <p className="font-serif italic text-xl sm:text-2xl text-[#D4C5B3] mb-6">
            &ldquo;{creatorProfile.primaryHeadline}&rdquo;
          </p>

          <p className="text-sm sm:text-base text-[#F7F5F0]/90 leading-relaxed mb-4">
            {creatorProfile.shortIntroduction}
          </p>
          <p className="text-xs sm:text-sm text-[#A39E93] leading-relaxed">
            {creatorProfile.extendedBio}
          </p>
        </header>

        {/* Snapshot */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#141311]/15 pb-2">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
              Creator Snapshot
            </h2>
            <span className="text-xs uppercase tracking-[0.14em] text-[#5C5852]">
              Scope-Separated Reporting
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#141311]/15 divide-y sm:divide-y-0 sm:divide-x divide-[#141311]/15 bg-white">
            {verifiedPortfolioFacts.map((fact) => (
              <div key={fact.id} className="p-6">
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                  {fact.scopeLabel}
                </span>
                <div className="font-display text-4xl font-extrabold text-[#141311] my-1">
                  {fact.value}
                </div>
                <p className="font-display font-bold text-sm text-[#141311] mb-1">
                  {fact.label}
                </p>
                <p className="text-xs text-[#5C5852]">{fact.detail}</p>
              </div>
            ))}
          </div>

          {availableMetrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {availableMetrics.map((m) => (
                <div
                  key={m.id}
                  className="p-4 bg-[#141311] text-[#F7F5F0]"
                >
                  <span className="text-[10px] uppercase tracking-[0.14em] text-[#A39E93]">
                    {METRIC_SCOPE_METADATA[m.scope].badgeLabel}
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold my-1">
                    {m.prefix}
                    {typeof m.value === "number"
                      ? m.value.toLocaleString()
                      : m.value}
                    {m.suffix}
                  </div>
                  <p className="font-display text-xs font-bold text-[#F7F5F0]">
                    {m.label}
                  </p>
                  <p className="text-[10px] text-[#A39E93]">
                    {m.reportingPeriod}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Audience & Content Pillars */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white border border-[#141311]/15">
            <h2 className="font-display text-lg font-extrabold tracking-tight mb-3 pb-2 border-b border-[#141311]/10">
              Audience Profile &amp; Affinity
            </h2>
            <ul className="space-y-2 mb-4 text-xs text-[#141311]">
              {audienceInsights.audienceInterests.map((interest) => (
                <li key={interest}>— {interest}</li>
              ))}
            </ul>
            {(validGender.length > 0 || validAge.length > 0) && (
              <div className="pt-3 border-t border-[#141311]/10 text-xs font-mono space-y-1">
                {validGender.length > 0 && (
                  <p>
                    Gender:{" "}
                    {validGender
                      .map((g) => `${g.label} (${g.percentage}%)`)
                      .join(" • ")}
                  </p>
                )}
                {validAge.length > 0 && (
                  <p>
                    Age:{" "}
                    {validAge
                      .map((a) => `${a.label} (${a.percentage}%)`)
                      .join(" • ")}
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="p-6 bg-white border border-[#141311]/15">
            <h2 className="font-display text-lg font-extrabold tracking-tight mb-3 pb-2 border-b border-[#141311]/10">
              Content Pillars &amp; Target Verticals
            </h2>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {CONTENT_CATEGORIES.map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-1 text-xs bg-[#EFECE6] border border-[#141311]/15"
                >
                  {cat}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {creatorProfile.targetBrandCategories.map((cat) => (
                <span
                  key={cat}
                  className="px-2 py-0.5 text-[11px] text-[#5C5852] bg-[#F7F5F0] border border-[#141311]/10"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Collaborations (Tier 1 Flagship + Tier 2 Additional) */}
        <section className="space-y-6">
          <div>
            <div className="flex items-center justify-between border-b border-[#141311]/15 pb-2 mb-4">
              <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
                Featured Brand Collaborations
              </h2>
              <span className="text-xs text-[#8C3A2B] font-semibold">
                Featured Campaigns
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {brandCollaborations
                .filter((b) => b.featured)
                .map((brand) => (
                  <div
                    key={brand.id}
                    className="p-5 bg-white border border-[#141311]/20"
                  >
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                      {brand.category}
                    </span>
                    <h3 className="font-display text-lg font-extrabold text-[#141311] mt-0.5">
                      {brand.brandName}
                    </h3>
                    <p className="font-serif italic text-sm text-[#8C3A2B] mb-2">
                      {brand.productFeatured}
                    </p>
                    <p className="text-xs text-[#5C5852] leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#5C5852] mb-3">
              More Brands I&apos;ve Worked With
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {brandCollaborations
                .filter((b) => !b.featured)
                .map((brand) => (
                  <div
                    key={brand.id}
                    className="p-4 bg-[#EFECE6] border border-[#141311]/12"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-display text-sm font-bold text-[#141311]">
                        {brand.brandName}
                      </h4>
                      <span className="font-mono text-[10px] text-[#5C5852]">
                        {brand.usageLabel || brand.collaborationType}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5C5852]">
                      {brand.category}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#141311]/15 pb-2">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
              Selected Campaign Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredCampaignCaseStudies.map((cs) => (
              <div
                key={cs.id}
                className="p-5 bg-white border border-[#141311]/15 space-y-2"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                  <span className="font-bold text-[#141311]">
                    {cs.brandName}
                  </span>
                  <span>{cs.category}</span>
                </div>
                <h3 className="font-display text-base font-extrabold text-[#141311]">
                  {cs.campaignTitle}
                </h3>
                <p className="text-xs text-[#5C5852] leading-relaxed">
                  <strong>Objective:</strong> {cs.campaignObjective}
                </p>
                <p className="text-xs text-[#141311] leading-relaxed">
                  <strong>Integration:</strong>{" "}
                  {cs.integrationStory.integrationExecution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration Offerings */}
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#141311]/15 pb-2">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight">
              Collaboration Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {collaborationOfferings.map((offer) => (
              <div
                key={offer.id}
                className="p-5 bg-white border border-[#141311]/15"
              >
                <span className="font-mono text-xs text-[#5C5852]">
                  {offer.index}
                </span>
                <h3 className="font-display text-base font-extrabold text-[#141311] mt-1 mb-1.5">
                  {offer.title}
                </h3>
                <p className="text-xs text-[#5C5852] leading-relaxed">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>

          <div className="p-5 bg-[#EFECE6] border border-[#141311]/15">
            <p className="text-xs uppercase tracking-[0.14em] text-[#5C5852] mb-3">
              Why Work With divonmove
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {whyWorkWithMePillars.slice(0, 3).map((p) => (
                <div key={p.id}>
                  <p className="font-display font-bold text-xs text-[#141311]">
                    {p.title}
                  </p>
                  <p className="text-[11px] text-[#5C5852] mt-0.5 leading-snug">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#141311] text-[#F7F5F0] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-[#F7F5F0]">
              Collaborate with divonmove
            </h3>
            <p className="text-xs text-[#A39E93] mt-1">
              {contactConfig.responseSla}
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-[#F7F5F0]">
              <Mail className="w-4 h-4 text-[#A39E93]" />
              <span>{contactConfig.email}</span>
            </div>
            <div className="flex items-center gap-2 text-[#F7F5F0]">
              <InstagramIcon className="w-4 h-4 text-[#A39E93]" />
              <span>{contactConfig.instagramHandle}</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
