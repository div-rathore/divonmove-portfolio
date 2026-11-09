"use client";

import React from "react";
import { collaborationProcessSteps } from "@/data/creator";

export default function CollaborationProcess() {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-[#F7F5F0] text-[#141311] border-b border-[#141311]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[#141311]/15">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-3">
              How Collaborations Work
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141311]">
              A Straightforward Process.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5C5852] max-w-xl leading-relaxed">
            Four clear steps from initial brief to published content and
            verified campaign insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-x border-[#141311]/15 divide-y md:divide-y-0 md:divide-x divide-[#141311]/15 bg-[#EFECE6]">
          {collaborationProcessSteps.map((step) => (
            <div
              key={step.phase}
              className="p-7 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-xs text-[#5C5852]">
                    {step.stepNumber}
                  </span>
                  <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#8C3A2B]">
                    {step.phase}
                  </span>
                </div>

                <h3 className="font-display text-xl font-extrabold text-[#141311] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#5C5852] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#141311]/12">
                <p className="text-xs font-medium text-[#141311]">
                  {step.deliverableMilestone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
