"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  computeVerifiedEngagementRate,
  featuredCampaignCaseStudies,
} from "@/data/campaigns";
import { CampaignCaseStudy } from "@/types/campaign";

export default function CampaignCaseStudies() {
  const [selectedId, setSelectedId] = useState<string>(
    featuredCampaignCaseStudies[0].id
  );
  const [activePostIdx, setActivePostIdx] = useState<number>(0);

  const activeStudy: CampaignCaseStudy =
    featuredCampaignCaseStudies.find((c) => c.id === selectedId) ||
    featuredCampaignCaseStudies[0];

  const activePost =
    activeStudy.posts && activeStudy.posts[activePostIdx]
      ? activeStudy.posts[activePostIdx]
      : activeStudy.posts?.[0];

  const currentThumbnail = activePost?.thumbnail || activeStudy.thumbnail;
  const currentInstagramUrl =
    activePost?.instagramUrl || activeStudy.instagramUrl;

  const erResult = computeVerifiedEngagementRate(activeStudy.metrics);

  const metricRows: {
    key: string;
    label: string;
    value: number | string | null;
  }[] = [
    { key: "views", label: "Reel Views", value: activeStudy.metrics.views },
    { key: "reach", label: "Accounts Reached", value: activeStudy.metrics.reach },
    { key: "engagementRate", label: "Engagement Rate", value: erResult.rate },
    { key: "likes", label: "Likes", value: activeStudy.metrics.likes },
    { key: "saves", label: "Saves", value: activeStudy.metrics.saves },
    { key: "shares", label: "Shares", value: activeStudy.metrics.shares },
    { key: "comments", label: "Comments", value: activeStudy.metrics.comments },
    {
      key: "impressions",
      label: "Impressions",
      value: activeStudy.metrics.impressions,
    },
    {
      key: "profileActivity",
      label: "Profile Activity",
      value: activeStudy.metrics.profileActivity,
    },
  ];

  const availableMetrics = metricRows.filter(
    (m) => m.value !== null && m.value !== undefined && m.value !== ""
  );

  return (
    <section
      id="case-studies"
      className="py-20 md:py-28 bg-[#141311] text-[#F7F5F0] border-b border-[#F7F5F0]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#F7F5F0]/15">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#A39E93] mb-3">
              Featured Campaigns &amp; Case Studies
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F7F5F0]">
              How Products Become{" "}
              <span className="font-serif italic font-normal text-[#D4C5B3]">
                Stories That Connect.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#A39E93] max-w-xl leading-relaxed">
            A closer look at how Frido, Soulflower, and Third Society were
            woven into real training and lifestyle narratives.
          </p>
        </div>

        {/* 3-Flagship Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#F7F5F0]/15 divide-y sm:divide-y-0 sm:divide-x divide-[#F7F5F0]/15 mb-12">
          {featuredCampaignCaseStudies.map((study, index) => {
            const isSelected = study.id === activeStudy.id;
            return (
              <button
                key={study.id}
                type="button"
                onClick={() => {
                  setSelectedId(study.id);
                  setActivePostIdx(0);
                }}
                className={`text-left p-5 sm:p-6 transition-colors ${
                  isSelected
                    ? "bg-[#F7F5F0] text-[#141311]"
                    : "bg-[#141311] text-[#F7F5F0] hover:bg-[#1E1C19]"
                }`}
              >
                <span
                  className={`block font-mono text-xs mb-2 ${
                    isSelected ? "text-[#5C5852]" : "text-[#A39E93]"
                  }`}
                >
                  0{index + 1}
                </span>
                <p className="font-display text-lg font-extrabold tracking-tight">
                  {study.brandName}
                </p>
                <p
                  className={`text-xs mt-0.5 line-clamp-1 ${
                    isSelected ? "text-[#5C5852]" : "text-[#A39E93]"
                  }`}
                >
                  {study.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Spread */}
        <motion.div
          key={activeStudy.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          {/* Left Column: 9:16 Preview & Deliverables (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-[#F7F5F0]/15 bg-[#1C1B18] p-3">
              {/* If multiple Reels exist for this campaign, allow switching */}
              {activeStudy.posts && activeStudy.posts.length > 1 && (
                <div className="grid grid-cols-2 gap-1.5 mb-2.5">
                  {activeStudy.posts.map((post, idx) => (
                    <button
                      key={post.id}
                      type="button"
                      onClick={() => setActivePostIdx(idx)}
                      className={`px-3 py-2 text-[11px] font-mono uppercase tracking-[0.12em] border transition-colors cursor-pointer ${
                        activePostIdx === idx
                          ? "bg-[#F7F5F0] text-[#141311] border-[#F7F5F0] font-semibold"
                          : "bg-[#141311] text-[#A39E93] border-[#F7F5F0]/15 hover:text-[#F7F5F0]"
                      }`}
                    >
                      Reel 0{idx + 1}
                    </button>
                  ))}
                </div>
              )}

              <div className="relative aspect-[9/16] w-full bg-[#141311] overflow-hidden group">
                {activeStudy.videoPreviewUrl ? (
                  <video
                    src={activeStudy.videoPreviewUrl}
                    poster={currentThumbnail}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={currentThumbnail}
                    alt={`${activeStudy.brandName} — ${activePost?.title || activeStudy.campaignTitle}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                )}

                {activePost && (
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#141311]/90 via-[#141311]/55 to-transparent">
                    {activePost.publishedDate && (
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#D4C5B3] mb-0.5">
                        {activePost.publishedDate}
                      </p>
                    )}
                    <p className="font-display text-xs font-bold text-[#F7F5F0] leading-snug">
                      {activePost.title}
                    </p>
                  </div>
                )}
              </div>

              {currentInstagramUrl && (
                <div className="pt-3">
                  <a
                    href={currentInstagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-[0.14em] bg-[#F7F5F0] text-[#141311] font-medium hover:bg-[#EFECE6] transition-colors"
                  >
                    <span>
                      {activeStudy.posts && activeStudy.posts.length > 1
                        ? `Watch Reel 0${activePostIdx + 1} on Instagram`
                        : "Watch Published Reel"}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            <div className="p-6 border border-[#F7F5F0]/15 bg-[#1C1B18]">
              <p className="text-xs uppercase tracking-[0.16em] text-[#A39E93] mb-3">
                Deliverables
              </p>
              <ul className="space-y-2 text-sm text-[#F7F5F0]">
                {activeStudy.deliverables.map((del) => (
                  <li key={del}>— {del}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Narrative & Performance (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="pb-6 border-b border-[#F7F5F0]/15">
              <p className="font-serif italic text-lg text-[#D4C5B3] mb-1">
                {activeStudy.brandName} — {activeStudy.product}
              </p>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F7F5F0] mb-3">
                {activeStudy.campaignTitle}
              </h3>
              <p className="text-base text-[#A39E93] leading-relaxed">
                {activeStudy.campaignDescription}
              </p>
            </div>

            {/* Objective / Concept / Approach */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-[#F7F5F0]/15">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#A39E93] mb-2">
                  Objective
                </p>
                <p className="text-sm text-[#F7F5F0]/90 leading-relaxed">
                  {activeStudy.campaignObjective}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#A39E93] mb-2">
                  Concept
                </p>
                <p className="text-sm text-[#F7F5F0]/90 leading-relaxed">
                  {activeStudy.contentConcept}
                </p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#A39E93] mb-2">
                  Creative Approach
                </p>
                <p className="text-sm text-[#F7F5F0]/90 leading-relaxed">
                  {activeStudy.creativeApproach}
                </p>
              </div>
            </div>

            {/* 4-Part Storytelling Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-8 border-b border-[#F7F5F0]/15">
              <div>
                <p className="font-mono text-xs text-[#D4C5B3] mb-1">
                  01 / Context
                </p>
                <p className="text-sm text-[#A39E93] leading-relaxed">
                  {activeStudy.integrationStory.context}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#D4C5B3] mb-1">
                  02 / Integration
                </p>
                <p className="text-sm text-[#A39E93] leading-relaxed">
                  {activeStudy.integrationStory.integrationExecution}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#D4C5B3] mb-1">
                  03 / Why It Worked
                </p>
                <p className="text-sm text-[#A39E93] leading-relaxed">
                  {activeStudy.integrationStory.whyItWorked}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#D4C5B3] mb-1">
                  04 / Outcome
                </p>
                <p className="text-sm text-[#A39E93] leading-relaxed">
                  {activeStudy.integrationStory.outcomeSummary}
                </p>
              </div>
            </div>

            {/* Campaign Metrics */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#A39E93]">
                  Campaign Performance ({activeStudy.reportingPeriod})
                </p>
                {activeStudy.lastUpdated && (
                  <span className="font-mono text-xs text-[#A39E93]">
                    {activeStudy.lastUpdated}
                  </span>
                )}
              </div>

              {availableMetrics.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#F7F5F0]/15 border border-[#F7F5F0]/15 mb-4">
                  {availableMetrics.map((m) => (
                    <div key={m.key} className="p-5 bg-[#1C1B18]">
                      <p className="text-[11px] uppercase tracking-[0.14em] text-[#A39E93] mb-1">
                        {m.label}
                      </p>
                      <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#F7F5F0]">
                        {typeof m.value === "number"
                          ? m.value.toLocaleString()
                          : m.value}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-5 bg-[#1C1B18] border border-[#F7F5F0]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <p className="text-xs text-[#A39E93] leading-relaxed">
                    Campaign Reel Insights (Views, Reach, Likes, Saves, Shares,
                    Engagement Rate) automatically display once populated in{" "}
                    <code className="font-mono text-[#F7F5F0]">
                      data/campaigns.ts
                    </code>
                    .
                  </p>
                  <a
                    href="#contact"
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-[#F7F5F0] underline underline-offset-4"
                  >
                    <span>Request Insights</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              <p className="text-xs font-mono text-[#A39E93]">
                Formula: {activeStudy.engagementCalculationMethod}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
