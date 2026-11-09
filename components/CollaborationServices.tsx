"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  collaborationOfferings,
  creatorProfile,
  whyWorkWithMePillars,
} from "@/data/creator";

export default function CollaborationServices() {
  return (
    <>
      {/* SECTION 7: WHAT I OFFER BRANDS */}
      <section
        id="offerings"
        className="py-20 md:py-28 bg-[#F7F5F0] text-[#141311] border-b border-[#141311]/12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#141311]/15">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-3">
                What I Offer Brands
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141311]">
                Collaboration Formats.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5C5852] max-w-xl leading-relaxed">
              Every partnership is tailored to your campaign objective,
              product category, and usage requirements.
            </p>
          </div>

          <div className="divide-y divide-[#141311]/15 border-b border-[#141311]/15">
            {collaborationOfferings.map((service) => (
              <div
                key={service.id}
                className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-[#5C5852] block mb-1">
                    {service.index}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-[#141311]">
                    {service.title}
                  </h3>
                  <p className="font-serif italic text-base text-[#8C3A2B] mt-0.5">
                    {service.subtitle}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm sm:text-base text-[#383633] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-xs text-[#5C5852]">
                    {service.commercialNote}
                  </p>
                </div>

                <div className="lg:col-span-3">
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#5C5852] mb-2">
                    Deliverables
                  </p>
                  <ul className="space-y-1 text-xs text-[#141311]">
                    {service.deliverableFormats.map((format) => (
                      <li key={format}>— {format}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: WHY WORK WITH ME? */}
      <section
        id="why-me"
        className="py-20 md:py-28 bg-[#EFECE6] text-[#141311] border-b border-[#141311]/12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#141311]/15">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-3">
                Why Work With Me
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141311]">
                Creative Production Meets{" "}
                <span className="font-serif italic font-normal text-[#8C3A2B]">
                  Real Athletic Discipline.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#5C5852] max-w-xl leading-relaxed">
              {creatorProfile.positioningPrinciple}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#141311]/15 border-b border-x border-[#141311]/15">
            {whyWorkWithMePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-7 sm:p-8 bg-[#F7F5F0] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#5C5852] block mb-3">
                    {pillar.index}
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-[#141311] mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#5C5852] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#141311]/10 flex items-center justify-between text-xs">
                  <span className="font-serif italic text-sm text-[#8C3A2B]">
                    {pillar.proofPoint}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5C5852]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
