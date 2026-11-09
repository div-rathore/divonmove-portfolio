"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { brandCollaborations } from "@/data/collaborations";
import { BrandCollaboration } from "@/types/collaboration";

export default function BrandShowcase() {
  const [activeCollaboration, setActiveCollaboration] =
    useState<BrandCollaboration | null>(null);

  // Tier 1: Flagship Featured Collaborations (Frido, Soulflower, Third Society)
  const featuredCollaborations = brandCollaborations.filter((b) => b.featured);

  // Tier 2: More Brands I've Worked With (Foodstrong, Good Flippin' Burgers, Terractive)
  const additionalCollaborations = brandCollaborations.filter(
    (b) => !b.featured
  );

  const getAvailableMetricsList = (collab: BrandCollaboration) => {
    // Never display engagement/reach/view metrics for UGC-only brand-channel collaborations
    if (collab.isUgcOnly) return [];

    const entries: { label: string; value: string | number }[] = [];
    const { metrics } = collab;
    if (metrics.views !== null)
      entries.push({ label: "Views", value: metrics.views.toLocaleString() });
    if (metrics.reach !== null)
      entries.push({
        label: "Reach",
        value: metrics.reach.toLocaleString(),
      });
    if (metrics.likes !== null)
      entries.push({ label: "Likes", value: metrics.likes.toLocaleString() });
    if (metrics.saves !== null)
      entries.push({ label: "Saves", value: metrics.saves.toLocaleString() });
    if (metrics.shares !== null)
      entries.push({ label: "Shares", value: metrics.shares.toLocaleString() });
    if (metrics.engagementRate !== null)
      entries.push({
        label: "Engagement Rate",
        value: `${metrics.engagementRate}%`,
      });
    return entries;
  };

  return (
    <section
      id="collaborations"
      className="py-20 md:py-28 bg-[#F7F5F0] text-[#141311] border-b border-[#141311]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================================================================= */}
        {/* TIER 1: FEATURED COLLABORATIONS (FRIDO, SOULFLOWER, THIRD SOCIETY) */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#141311]/15 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8C3A2B] font-semibold mb-3">
              Featured Brand Collaborations
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141311]">
              Featured Partnerships.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5C5852] max-w-xl leading-relaxed">
            My strongest-performing collaborations across ergonomics &amp;
            recovery, personal care, and contemporary streetwear—built around
            authentic storytelling and real-life integration.
          </p>
        </div>

        {/* Large Premium Campaign Cards for Tier 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {featuredCollaborations.map((collab, idx) => {
            const availableMetrics = getAvailableMetricsList(collab);

            return (
              <article
                key={collab.id}
                onClick={() => setActiveCollaboration(collab)}
                className="group cursor-pointer bg-[#EFECE6] border border-[#141311]/20 hover:border-[#141311] transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  {/* Featured Card Header */}
                  <div className="px-6 py-4 bg-[#141311] text-[#F7F5F0] flex items-center justify-between gap-2 text-xs">
                    <span className="font-mono uppercase tracking-[0.14em] text-[#D4C5B3]">
                      0{idx + 1} // Featured Collaboration
                    </span>
                    <span className="uppercase tracking-[0.12em] text-[#A39E93]">
                      {collab.collaborationType}
                    </span>
                  </div>

                  {/* Larger 4:5 Reel Visual Preview */}
                  <div className="relative aspect-[4/5] w-full bg-[#E6E2D8] overflow-hidden border-b border-[#141311]/15">
                    <Image
                      src={collab.thumbnail}
                      alt={`${collab.brandName} — ${collab.campaignName}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>

                  {/* Dedicated Campaign Storytelling & Metrics */}
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-1">
                          {collab.category}
                        </p>
                        <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#141311] tracking-tight leading-snug break-words">
                          {collab.brandName}
                        </h3>
                      </div>

                      {collab.logo && (
                        <div className="relative w-20 h-9 shrink-0 overflow-hidden bg-[#F7F5F0] border border-[#141311]/12">
                          <Image
                            src={collab.logo}
                            alt={`${collab.brandName} official logo`}
                            fill
                            sizes="80px"
                            className="object-contain p-1.5"
                          />
                        </div>
                      )}
                    </div>

                    <p className="font-serif italic text-base text-[#8C3A2B] mb-4">
                      {collab.productFeatured}
                    </p>

                    <h4 className="font-display text-lg font-bold text-[#141311] mb-2.5 leading-snug">
                      {collab.campaignName}
                    </h4>

                    <p className="text-sm text-[#383633] leading-relaxed mb-5">
                      {collab.description}
                    </p>

                    <div className="p-4 bg-[#F7F5F0] border border-[#141311]/12 mb-5">
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852] mb-1">
                        Creative Approach
                      </p>
                      <p className="text-xs text-[#141311] leading-relaxed">
                        {collab.creativeAngle}
                      </p>
                    </div>

                    {/* Prominently Displayed Performance Metrics (When Populated) */}
                    {availableMetrics.length > 0 ? (
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#141311]/15">
                        {availableMetrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3 bg-[#141311] text-[#F7F5F0]"
                          >
                            <p className="text-[10px] uppercase tracking-[0.14em] text-[#A39E93]">
                              {m.label}
                            </p>
                            <p className="font-display text-2xl font-extrabold text-[#F7F5F0]">
                              {m.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="pt-4 border-t border-[#141311]/12 flex items-center justify-between text-xs text-[#5C5852]">
                        <span>Verified Reel Insights Case Study</span>
                        <span className="font-mono text-[11px] text-[#141311]">
                          Featured Partner
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-7 py-4 bg-[#F7F5F0] border-t border-[#141311]/15 flex flex-wrap items-center justify-between gap-2 text-xs uppercase tracking-[0.12em]">
                  <span className="text-[#141311] font-semibold group-hover:underline">
                    Explore Case Study
                  </span>
                  {collab.posts && collab.posts.filter((p) => p.instagramUrl).length > 1 ? (
                    <div className="flex items-center gap-3">
                      {collab.posts
                        .filter((p) => p.instagramUrl)
                        .map((post, pIdx) => (
                          <a
                            key={post.id}
                            href={post.instagramUrl!}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[#8C3A2B] font-medium hover:underline"
                          >
                            <span>Reel 0{pIdx + 1}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ))}
                    </div>
                  ) : collab.instagramUrl ? (
                    <a
                      href={collab.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-[#8C3A2B] font-medium hover:underline"
                    >
                      <span>Watch Reel</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-[#141311]" />
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* ================================================================= */}
        {/* TIER 2: MORE BRANDS I'VE WORKED WITH (COMPACT SECONDARY SECTION)  */}
        {/* ================================================================= */}
        <div className="pt-12 border-t border-[#141311]/15">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#5C5852] mb-1.5">
                Additional Brand Collaborations
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#141311]">
                More Brands I&apos;ve Worked With
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5C5852] max-w-md">
              Additional partnerships across sports nutrition, lifestyle dining,
              and brand-channel UGC production.
            </p>
          </div>

          {/* Compact Secondary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {additionalCollaborations.map((collab) => (
              <div
                key={collab.id}
                onClick={() => setActiveCollaboration(collab)}
                className="group cursor-pointer p-5 bg-[#EFECE6]/70 hover:bg-[#EFECE6] border border-[#141311]/12 hover:border-[#141311]/35 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                      {collab.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.1em] border ${
                        collab.isUgcOnly
                          ? "bg-[#141311] text-[#F7F5F0] border-[#141311]"
                          : "bg-[#F7F5F0] text-[#5C5852] border-[#141311]/15"
                      }`}
                    >
                      {collab.usageLabel || collab.collaborationType}
                    </span>
                  </div>

                  <div className="flex items-center gap-3.5 mb-3">
                    {collab.logo ? (
                      <div className="relative w-24 h-9 shrink-0 overflow-hidden border border-[#141311]/10 bg-[#F7F5F0]">
                        <Image
                          src={collab.logo}
                          alt={`${collab.brandName} logo`}
                          fill
                          sizes="96px"
                          className="object-contain p-1.5"
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-base sm:text-lg font-extrabold text-[#141311] leading-snug">
                        {collab.brandName}
                      </h4>
                      <p className="text-xs text-[#8C3A2B] font-serif italic leading-snug">
                        {collab.productFeatured}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#5C5852] leading-relaxed mb-4">
                    {collab.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#141311]/10 flex items-center justify-between text-[11px] text-[#5C5852]">
                  <span>
                    {collab.isUgcOnly
                      ? "Creative Production for Brand Channels"
                      : collab.campaignName}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5C5852] group-hover:text-[#141311] shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Campaign Detail Modal */}
      <AnimatePresence>
        {activeCollaboration && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCollaboration(null)}
            className="fixed inset-0 z-50 bg-[#141311]/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 shadow-2xl overflow-hidden my-8"
            >
              <div className="px-6 py-4 bg-[#EFECE6] border-b border-[#141311]/15 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#5C5852]">
                    {activeCollaboration.usageLabel ||
                      activeCollaboration.collaborationType}{" "}
                    — {activeCollaboration.category}
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-[#141311]">
                    {activeCollaboration.brandName}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveCollaboration(null)}
                  aria-label="Close modal"
                  className="p-2 text-[#5C5852] hover:text-[#141311] border border-[#141311]/15"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-5">
                  <div className="relative aspect-[9/16] w-full border border-[#141311]/15 bg-[#EAE5DC] overflow-hidden">
                    {activeCollaboration.videoPreviewUrl ? (
                      <video
                        src={activeCollaboration.videoPreviewUrl}
                        poster={activeCollaboration.thumbnail}
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={activeCollaboration.thumbnail}
                        alt={activeCollaboration.campaignName}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                </div>

                <div className="md:col-span-7 space-y-5">
                  {activeCollaboration.isUgcOnly && (
                    <div className="p-3.5 bg-[#141311] text-[#F7F5F0] text-xs leading-relaxed">
                      <strong className="uppercase tracking-[0.12em] block text-[#D4C5B3] mb-0.5">
                        UGC / Brand-Used Content
                      </strong>
                      Created specifically for {activeCollaboration.brandName}
                      &apos;s own marketing campaigns rather than publication on
                      my personal Instagram feed.
                    </div>
                  )}

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-1">
                      Campaign &amp; Product
                    </p>
                    <p className="font-display text-lg font-bold text-[#141311]">
                      {activeCollaboration.campaignName}
                    </p>
                    <p className="font-serif italic text-base text-[#8C3A2B]">
                      {activeCollaboration.productFeatured}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-1">
                      Overview
                    </p>
                    <p className="text-sm text-[#383633] leading-relaxed">
                      {activeCollaboration.description}
                    </p>
                  </div>

                  <div className="p-4 bg-[#EFECE6] border border-[#141311]/12">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-1">
                      Creative Direction
                    </p>
                    <p className="text-sm text-[#141311] leading-relaxed">
                      {activeCollaboration.creativeAngle}
                    </p>
                  </div>

                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-2">
                      Deliverables
                    </p>
                    <ul className="space-y-1.5 text-sm text-[#141311]">
                      {activeCollaboration.deliverables.map((item) => (
                        <li key={item}>— {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#141311]/12 flex flex-wrap items-center gap-3">
                    {!activeCollaboration.isUgcOnly &&
                    activeCollaboration.posts &&
                    activeCollaboration.posts.filter((p) => p.instagramUrl)
                      .length > 1 ? (
                      activeCollaboration.posts
                        .filter((p) => p.instagramUrl)
                        .map((post, idx) => (
                          <a
                            key={post.id}
                            href={post.instagramUrl!}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] bg-[#141311] text-[#F7F5F0]"
                          >
                            <span>Watch Reel 0{idx + 1}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ))
                    ) : !activeCollaboration.isUgcOnly &&
                      activeCollaboration.instagramUrl ? (
                      <a
                        href={activeCollaboration.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] bg-[#141311] text-[#F7F5F0]"
                      >
                        <span>Watch Reel</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : null}
                    {activeCollaboration.caseStudyId && (
                      <a
                        href="#case-studies"
                        onClick={() => setActiveCollaboration(null)}
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] bg-[#141311] text-[#F7F5F0]"
                      >
                        <span>View Full Case Study</span>
                      </a>
                    )}
                    <a
                      href="#contact"
                      onClick={() => setActiveCollaboration(null)}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.14em] border border-[#141311]/25 text-[#141311] hover:border-[#141311]"
                    >
                      <span>Inquire About Similar Work</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
