"use client";

import React from "react";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { audienceInsights } from "@/data/audience";
import { creatorProfile } from "@/data/creator";

export default function AudienceInsights() {
  const validGender = audienceInsights.genderDistribution.filter(
    (g) => g.percentage !== null && g.percentage !== undefined
  ) as { label: string; percentage: number }[];

  const validAge = audienceInsights.ageDistribution.filter(
    (a) => a.percentage !== null && a.percentage !== undefined
  ) as { label: string; percentage: number }[];

  const validCities = audienceInsights.topCities.filter(
    (c) => c.percentage !== null && c.percentage !== undefined
  ) as { rank: number; name: string; percentage: number }[];

  const validCountries = audienceInsights.topCountries.filter(
    (c) => c.percentage !== null && c.percentage !== undefined
  ) as { rank: number; name: string; percentage: number }[];

  const hasAnyQuantitativeChart =
    validGender.length > 0 ||
    validAge.length > 0 ||
    validCities.length > 0 ||
    validCountries.length > 0;

  return (
    <section
      id="audience"
      className="py-20 md:py-28 bg-[#EFECE6] text-[#141311] border-b border-[#141311]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#141311]/15">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-3">
              Audience Insights
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141311]">
              Who Connects With the Work.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5C5852] max-w-xl leading-relaxed">
            An engaged community of runners, gym-goers, and active consumers
            across {creatorProfile.location}.
          </p>
        </div>

        {/* Qualitative Profile & Category Fit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#141311]/15 divide-y lg:divide-y-0 lg:divide-x divide-[#141311]/15 bg-[#F7F5F0]">
          <div className="lg:col-span-7 p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.16em] text-[#5C5852] mb-3">
              Core Audience Interests
            </p>
            <h3 className="font-display text-2xl font-bold text-[#141311] mb-3">
              Active Lifestyle &amp; Performance Mindset
            </h3>
            <p className="text-sm text-[#5C5852] leading-relaxed mb-6">
              Viewers follow for honest training documentation, road running
              progression, HYROX preparation, and everyday discipline—making
              product recommendations feel like trusted peer advice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {audienceInsights.audienceInterests.map((interest) => (
                <div
                  key={interest}
                  className="p-3.5 bg-[#EFECE6] border border-[#141311]/10 text-xs sm:text-sm font-medium text-[#141311]"
                >
                  — {interest}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-[#5C5852] mb-3">
                Brand Category Alignment
              </p>
              <h3 className="font-display text-xl font-bold text-[#141311] mb-4">
                Relevant Consumer Categories
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {creatorProfile.targetBrandCategories.map((cat) => (
                  <span
                    key={cat}
                    className="px-3 py-1.5 text-xs text-[#141311] bg-[#EFECE6] border border-[#141311]/12"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            {audienceInsights.activeHoursSummary ? (
              <div className="pt-4 border-t border-[#141311]/12">
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#5C5852]">
                  Peak Audience Activity
                </p>
                <p className="text-xs text-[#141311] mt-1">
                  {audienceInsights.activeHoursSummary}
                </p>
              </div>
            ) : null}
          </div>
        </div>

        {/* Quantitative Charts (Only rendered when populated in data/audience.ts) */}
        {hasAnyQuantitativeChart ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {validAge.length > 0 && (
              <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#141311]/15">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-lg font-bold text-[#141311]">
                    Age Distribution
                  </h3>
                  <span className="text-xs text-[#5C5852]">
                    {audienceInsights.reportingPeriod}
                  </span>
                </div>
                <div className="h-56 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={validAge} layout="vertical">
                      <XAxis type="number" hide domain={[0, 100]} />
                      <YAxis
                        type="category"
                        dataKey="label"
                        stroke="#141311"
                        fontSize={12}
                        width={60}
                      />
                      <Tooltip
                        cursor={{ fill: "rgba(20,19,17,0.04)" }}
                        contentStyle={{
                          backgroundColor: "#F7F5F0",
                          borderColor: "rgba(20,19,17,0.2)",
                          color: "#141311",
                        }}
                      />
                      <Bar dataKey="percentage" radius={[0, 2, 2, 0]}>
                        {validAge.map((_, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={index === 1 ? "#8C3A2B" : "#141311"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {validGender.length > 0 && (
              <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#141311]/15">
                <h3 className="font-display text-lg font-bold text-[#141311] mb-6">
                  Gender Distribution
                </h3>
                <div className="space-y-4">
                  {validGender.map((g, idx) => (
                    <div key={g.label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-[#141311]">{g.label}</span>
                        <span className="font-mono font-bold text-[#141311]">
                          {g.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-[#EFECE6]">
                        <div
                          className={`h-full ${
                            idx === 0 ? "bg-[#141311]" : "bg-[#8C3A2B]"
                          }`}
                          style={{ width: `${g.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {validCities.length > 0 && (
              <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#141311]/15">
                <h3 className="font-display text-lg font-bold text-[#141311] mb-4">
                  Top Cities
                </h3>
                <div className="space-y-3">
                  {validCities.map((city) => (
                    <div key={city.name}>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-[#141311]">
                          0{city.rank}. {city.name}
                        </span>
                        <span className="text-[#5C5852]">
                          {city.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-[#EFECE6]">
                        <div
                          className="h-full bg-[#141311]"
                          style={{ width: `${city.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {validCountries.length > 0 && (
              <div className="p-6 sm:p-8 bg-[#F7F5F0] border border-[#141311]/15">
                <h3 className="font-display text-lg font-bold text-[#141311] mb-4">
                  Top Countries
                </h3>
                <div className="space-y-3">
                  {validCountries.map((country) => (
                    <div key={country.name}>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-[#141311]">
                          0{country.rank}. {country.name}
                        </span>
                        <span className="text-[#5C5852]">
                          {country.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-[#EFECE6]">
                        <div
                          className="h-full bg-[#141311]"
                          style={{ width: `${country.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
