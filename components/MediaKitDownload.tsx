"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Download, Printer } from "lucide-react";
import { creatorProfile } from "@/data/creator";
import { brandCollaborations } from "@/data/collaborations";

const MEDIA_KIT_CONTENTS = [
  "Creator Introduction & Positioning",
  "Current Instagram Statistics",
  "Audience Demographics & Interests",
  "Confirmed Brand Collaborations",
  "Selected Campaign Case Studies",
  "Content Categories & Offerings",
];

export default function MediaKitDownload() {
  return (
    <section
      id="media-kit"
      className="py-20 md:py-24 bg-[#EFECE6] text-[#141311] border-b border-[#141311]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F5F0] border border-[#141311]/15 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-3">
                Creator Media Kit
              </p>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#141311] mb-4">
                Share the Complete{" "}
                <span className="font-serif italic font-normal text-[#8C3A2B]">
                  Partnership Dossier.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed mb-6 max-w-2xl">
                A print-ready editorial summary of divonmove&apos;s
                positioning, collaborations (
                {brandCollaborations.map((b) => b.brandName).join(", ")}), case
                studies, and collaboration offerings—formatted for sharing
                internally with brand and agency teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-xs text-[#141311]">
                {MEDIA_KIT_CONTENTS.map((item) => (
                  <div key={item}>— {item}</div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <Link
                  href="/media-kit?print=true"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-xs font-medium uppercase tracking-[0.14em] bg-[#141311] text-[#F7F5F0] hover:bg-[#2B2925] transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Save PDF Media Kit</span>
                </Link>

                <Link
                  href="/media-kit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs uppercase tracking-[0.14em] bg-transparent text-[#141311] border border-[#141311]/25 hover:border-[#141311] transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Preview Media Kit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#141311] text-[#F7F5F0] p-7 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#A39E93] mb-2">
                  Media Kit Overview
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight mb-1">
                  divonmove
                </h3>
                <p className="font-serif italic text-lg text-[#D4C5B3] mb-6">
                  &ldquo;{creatorProfile.primaryHeadline}&rdquo;
                </p>

                <div className="divide-y divide-[#F7F5F0]/15 border-y border-[#F7F5F0]/15 text-xs">
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-[#A39E93]">Focus</span>
                    <span>Fitness • Running • HYROX</span>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-[#A39E93]">Brand Partners</span>
                    <span>6 Confirmed Collaborations</span>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <span className="text-[#A39E93]">Format</span>
                    <span>A4 / Letter Print PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
