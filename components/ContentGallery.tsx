"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { CONTENT_CATEGORIES, contentGalleryItems } from "@/data/content";
import { creatorProfile } from "@/data/creator";
import { ContentCategory } from "@/types/campaign";

export default function ContentGallery() {
  const [selectedCategory, setSelectedCategory] = useState<
    ContentCategory | "All"
  >("All");

  const filteredItems =
    selectedCategory === "All"
      ? contentGalleryItems
      : contentGalleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="content"
      className="py-20 md:py-28 bg-[#F7F5F0] text-[#141311] border-b border-[#141311]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#141311]/15">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-3">
              Content Showcase
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141311]">
              Selected Reels &amp; Stories.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5C5852] max-w-xl leading-relaxed">
            Spanning road running, HYROX preparation, strength blocks, nutrition,
            recovery, and personal narratives.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center gap-2 my-8">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`px-3.5 py-2 text-xs uppercase tracking-[0.12em] border transition-colors ${
              selectedCategory === "All"
                ? "bg-[#141311] text-[#F7F5F0] border-[#141311]"
                : "bg-transparent text-[#5C5852] border-[#141311]/15 hover:border-[#141311]"
            }`}
          >
            All ({contentGalleryItems.length})
          </button>

          {CONTENT_CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-2 text-xs uppercase tracking-[0.12em] border transition-colors ${
                selectedCategory === category
                  ? "bg-[#141311] text-[#F7F5F0] border-[#141311]"
                  : "bg-transparent text-[#5C5852] border-[#141311]/15 hover:border-[#141311]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 9:16 Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const hasVerifiedMetrics =
              item.metrics &&
              (item.metrics.views !== null ||
                item.metrics.likes !== null ||
                item.metrics.saves !== null);

            return (
              <article
                key={item.id}
                className="group bg-[#EFECE6] border border-[#141311]/15 flex flex-col justify-between"
              >
                <div>
                  {item.instagramUrl ? (
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative aspect-[9/16] w-full bg-[#1C1B19] overflow-hidden border-b border-[#141311]/12"
                    >
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </a>
                  ) : (
                    <div className="relative aspect-[9/16] w-full bg-[#1C1B19] overflow-hidden border-b border-[#141311]/12">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-[0.12em] text-[#5C5852] mb-2">
                      <span>{item.category}</span>
                      {item.metrics?.reportingScope && (
                        <span className="font-mono text-[10px]">
                          {item.metrics.reportingScope.split("•")[0].trim()}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-base font-bold text-[#141311] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#5C5852] leading-relaxed">
                      {item.shortCaption}
                    </p>

                    {hasVerifiedMetrics && item.metrics && (
                      <div className="mt-4 pt-3 border-t border-[#141311]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#141311]">
                        {item.metrics.views !== null && (
                          <span>
                            Views: {item.metrics.views.toLocaleString()}
                          </span>
                        )}
                        {item.metrics.likes !== null && (
                          <span>
                            Likes: {item.metrics.likes.toLocaleString()}
                          </span>
                        )}
                        {item.metrics.saves !== null && (
                          <span>
                            Saves: {item.metrics.saves.toLocaleString()}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-5 py-3.5 bg-[#F7F5F0] border-t border-[#141311]/12 flex items-center justify-between text-xs">
                  {item.instagramUrl ? (
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 uppercase tracking-[0.12em] text-[#141311] hover:underline"
                    >
                      <span>Watch Reel</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href={creatorProfile.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 uppercase tracking-[0.12em] text-[#5C5852] hover:text-[#141311]"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>Instagram</span>
                    </a>
                  )}
                  {item.brandPartner && (
                    <span className="font-serif italic text-xs text-[#8C3A2B]">
                      {item.brandPartner}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
