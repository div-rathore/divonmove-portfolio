"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import {
  creatorMetrics,
  METRIC_SCOPE_METADATA,
  verifiedPortfolioFacts,
} from "@/data/metrics";
import { MetricScope } from "@/types/creator";

export default function CreatorMetrics() {
  const [activeScopeFilter, setActiveScopeFilter] = useState<
    MetricScope | "all"
  >("all");
  const [showSchemaLedger, setShowSchemaLedger] = useState(false);

  const availableMetrics = creatorMetrics.filter(
    (m) => m.value !== null && m.value !== undefined && m.value !== ""
  );

  const filteredAvailableMetrics =
    activeScopeFilter === "all"
      ? availableMetrics
      : availableMetrics.filter((m) => m.scope === activeScopeFilter);

  const unpopulatedMetricsCount =
    creatorMetrics.length - availableMetrics.length;

  return (
    <section
      id="metrics"
      className="py-20 md:py-28 bg-[#EFECE6] text-[#141311] border-b border-[#141311]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#141311]/15">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-3">
              Creator Snapshot &amp; Performance
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141311]">
              Performance at a Glance.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5C5852] max-w-xl leading-relaxed">
            Every metric is separated by reporting window—distinguishing live
            profile counts, 30-day Instagram Insights, and individual campaign
            performance.
          </p>
        </div>

        {/* Baseline Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#141311]/15 divide-y md:divide-y-0 md:divide-x divide-[#141311]/15 bg-[#F7F5F0]">
          {verifiedPortfolioFacts.map((fact) => (
            <div key={fact.id} className="p-7 sm:p-9">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#5C5852] mb-3">
                {fact.scopeLabel}
              </p>
              <div className="font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-[#141311] mb-2">
                {fact.value}
              </div>
              <h3 className="font-display text-base font-bold text-[#141311] mb-1.5">
                {fact.label}
              </h3>
              <p className="text-xs text-[#5C5852] leading-relaxed">
                {fact.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Live Instagram Metrics Grid (Renders automatically when populated) */}
        {availableMetrics.length > 0 ? (
          <div className="mt-12">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <button
                type="button"
                onClick={() => setActiveScopeFilter("all")}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.12em] border transition-colors ${
                  activeScopeFilter === "all"
                    ? "bg-[#141311] text-[#F7F5F0] border-[#141311]"
                    : "bg-[#F7F5F0] text-[#5C5852] border-[#141311]/15 hover:text-[#141311]"
                }`}
              >
                All ({availableMetrics.length})
              </button>
              {(Object.keys(METRIC_SCOPE_METADATA) as MetricScope[]).map(
                (scope) => {
                  const count = availableMetrics.filter(
                    (m) => m.scope === scope
                  ).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={scope}
                      type="button"
                      onClick={() => setActiveScopeFilter(scope)}
                      className={`px-3.5 py-1.5 text-xs uppercase tracking-[0.12em] border transition-colors ${
                        activeScopeFilter === scope
                          ? "bg-[#141311] text-[#F7F5F0] border-[#141311]"
                          : "bg-[#F7F5F0] text-[#5C5852] border-[#141311]/15 hover:text-[#141311]"
                      }`}
                    >
                      {METRIC_SCOPE_METADATA[scope].badgeLabel} ({count})
                    </button>
                  );
                }
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#141311]/15 border border-[#141311]/15">
              {filteredAvailableMetrics.map((metric) => {
                const scopeMeta = METRIC_SCOPE_METADATA[metric.scope];
                return (
                  <div
                    key={metric.id}
                    className="p-6 sm:p-7 bg-[#F7F5F0] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                          {scopeMeta.badgeLabel}
                        </span>
                        {metric.lastUpdated && (
                          <span className="font-mono text-[10px] text-[#5C5852] inline-flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {metric.lastUpdated}
                          </span>
                        )}
                      </div>

                      <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#141311] mb-2">
                        {metric.prefix}
                        {typeof metric.value === "number"
                          ? metric.value.toLocaleString()
                          : metric.value}
                        {metric.suffix}
                      </div>

                      <h3 className="font-display text-base font-bold text-[#141311] mb-1">
                        {metric.label}
                      </h3>

                      <p className="text-xs text-[#8C3A2B] mb-3">
                        {metric.reportingPeriod}
                      </p>
                    </div>

                    {metric.explanatoryNote && (
                      <p className="text-xs text-[#5C5852] pt-3 border-t border-[#141311]/10 leading-relaxed">
                        {metric.explanatoryNote}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Clean Editorial Note for Unpopulated Analytics */}
        {unpopulatedMetricsCount > 0 && (
          <div className="mt-8 p-6 sm:p-8 bg-[#F7F5F0] border border-[#141311]/15">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#5C5852] mb-1">
                  First-Party Instagram Insights
                </p>
                <p className="text-sm text-[#141311] max-w-2xl leading-relaxed">
                  Unpopulated account metrics ({unpopulatedMetricsCount} slots)
                  remain hidden until verified numbers are entered in{" "}
                  <code className="font-mono text-xs bg-[#EFECE6] px-1.5 py-0.5">
                    data/metrics.ts
                  </code>
                  .
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowSchemaLedger(!showSchemaLedger)}
                  className="px-4 py-2.5 text-xs uppercase tracking-[0.12em] text-[#141311] border border-[#141311]/25 hover:border-[#141311] transition-colors"
                >
                  {showSchemaLedger
                    ? "Hide Metric Slots"
                    : "View Metric Slots (8)"}
                </button>
                <a
                  href="#contact"
                  className="px-4 py-2.5 text-xs font-medium uppercase tracking-[0.12em] bg-[#141311] text-[#F7F5F0] hover:bg-[#2B2925] transition-colors"
                >
                  Request Live Insights
                </a>
              </div>
            </div>

            {showSchemaLedger && (
              <div className="mt-6 pt-6 border-t border-[#141311]/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {creatorMetrics.map((slot) => (
                  <div
                    key={slot.id}
                    className="p-4 bg-[#EFECE6] border border-[#141311]/10"
                  >
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852] mb-1">
                      {METRIC_SCOPE_METADATA[slot.scope].badgeLabel}
                    </p>
                    <p className="font-display font-bold text-sm text-[#141311]">
                      {slot.label}
                    </p>
                    <p className="text-xs text-[#5C5852] mt-1">
                      {slot.reportingPeriod}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
