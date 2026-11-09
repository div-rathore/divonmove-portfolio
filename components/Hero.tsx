"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { creatorProfile } from "@/data/creator";
import { brandCollaborations } from "@/data/collaborations";

export default function Hero() {
  return (
    <section
      id="top"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#F7F5F0] text-[#141311] border-b border-[#141311]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Issue / Masthead Sub-bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-10 border-b border-[#141311]/12 text-xs text-[#5C5852]">
          <div className="flex flex-wrap items-center gap-2 uppercase tracking-[0.14em]">
            <span className="text-[#141311] font-medium">
              Creator Portfolio &amp; Media Kit
            </span>
            <span>—</span>
            <span>{creatorProfile.positioningPillars.join(" / ")}</span>
          </div>
          <span className="font-mono uppercase tracking-[0.14em]">
            {creatorProfile.instagramHandle}
          </span>
        </div>

        {/* Main Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-4">
                divonmove
              </p>

              <h1 className="font-display text-4xl sm:text-6xl xl:text-[4.35rem] font-extrabold tracking-tight leading-[1.03] text-[#141311] mb-6">
                Building strength. Chasing miles.{" "}
                <span className="font-serif italic font-normal text-[#8C3A2B]">
                  Creating stories.
                </span>
              </h1>

              <p className="font-serif italic text-xl sm:text-2xl text-[#5C5852] mb-6 pl-4 border-l border-[#141311]/30">
                &ldquo;{creatorProfile.alternativeHeadline}&rdquo;
              </p>

              <p className="text-base sm:text-lg text-[#383633] leading-relaxed max-w-2xl mb-9">
                {creatorProfile.shortIntroduction}
              </p>
            </motion.div>

            {/* Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 mb-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-medium uppercase tracking-[0.14em] bg-[#141311] text-[#F7F5F0] hover:bg-[#2B2925] transition-colors"
              >
                <span>Collaborate With Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-medium uppercase tracking-[0.14em] bg-[#EFECE6] text-[#141311] border border-[#141311]/20 hover:border-[#141311] transition-colors"
              >
                <span>Explore My Work</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={creatorProfile.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs uppercase tracking-[0.14em] text-[#141311] border border-[#141311]/20 hover:border-[#141311] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <Link
                href="/media-kit"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs uppercase tracking-[0.14em] text-[#5C5852] hover:text-[#141311] transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Media Kit</span>
              </Link>
            </motion.div>

            {/* Editorial Positioning Ledger & Confirmed Collaborations */}
            <div className="pt-8 border-t border-[#141311]/12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#5C5852] mb-2">
                  Positioning Principle
                </p>
                <p className="text-sm text-[#141311] leading-relaxed">
                  {creatorProfile.positioningPrinciple}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#5C5852]">
                    Featured Brand Campaigns
                  </p>
                  <a
                    href="#collaborations"
                    className="text-[11px] uppercase tracking-[0.12em] text-[#141311] underline underline-offset-4"
                  >
                    All 6 Partners
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-1">
                  {brandCollaborations
                    .filter((b) => b.featured)
                    .map((brand) => (
                      <a
                        key={brand.id}
                        href="#collaborations"
                        className="font-display font-extrabold text-base text-[#141311] hover:text-[#8C3A2B] transition-colors"
                      >
                        {brand.brandName}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait / Video Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="border border-[#141311]/15 bg-[#EFECE6] p-3 sm:p-4">
              <div className="relative aspect-[4/5] w-full bg-[#E6E2D8] overflow-hidden">
                {creatorProfile.heroMedia.videoUrl ? (
                  <video
                    src={creatorProfile.heroMedia.videoUrl}
                    poster={creatorProfile.heroMedia.posterImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={creatorProfile.heroMedia.posterImage}
                    alt={creatorProfile.heroMedia.altText}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                )}
              </div>

              <div className="pt-3 flex items-center justify-between text-xs text-[#5C5852]">
                <span className="font-serif italic text-sm text-[#141311]">
                  divonmove — Hybrid Athlete &amp; Creator
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em]">
                  Run • Strength • HYROX
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
