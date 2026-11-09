import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { creatorProfile } from "@/data/creator";
import { contactConfig } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-[#141311] text-[#F7F5F0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F7F5F0]/12">
          <div className="md:col-span-5">
            <p className="font-display font-extrabold text-xl tracking-tight text-[#F7F5F0] mb-2">
              divonmove
            </p>
            <p className="font-serif italic text-lg text-[#D4C5B3] mb-3">
              &ldquo;{creatorProfile.primaryHeadline}&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.14em] text-[#A39E93]">
              {creatorProfile.positioningPillars.join(" / ")}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.16em] text-[#A39E93] mb-3">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#F7F5F0]/80">
              <a href="#metrics" className="hover:text-[#F7F5F0]">
                Snapshot
              </a>
              <a href="#collaborations" className="hover:text-[#F7F5F0]">
                Brand Partners
              </a>
              <a href="#case-studies" className="hover:text-[#F7F5F0]">
                Case Studies
              </a>
              <a href="#content" className="hover:text-[#F7F5F0]">
                Content Showcase
              </a>
              <a href="#audience" className="hover:text-[#F7F5F0]">
                Audience Insights
              </a>
              <a href="#offerings" className="hover:text-[#F7F5F0]">
                Offerings
              </a>
              <a href="#why-me" className="hover:text-[#F7F5F0]">
                Why Work With Me
              </a>
              <a href="#contact" className="hover:text-[#F7F5F0]">
                Inquire
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs uppercase tracking-[0.16em] text-[#A39E93] mb-3">
              Direct Links
            </p>
            <Link
              href="/media-kit"
              className="w-full inline-flex items-center justify-between py-2 text-xs uppercase tracking-[0.12em] text-[#F7F5F0] border-b border-[#F7F5F0]/15 hover:border-[#F7F5F0]"
            >
              <span>Printable Media Kit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={creatorProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-between py-2 text-xs uppercase tracking-[0.12em] text-[#F7F5F0] border-b border-[#F7F5F0]/15 hover:border-[#F7F5F0]"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${contactConfig.email}`}
              className="w-full inline-flex items-center justify-between py-2 text-xs text-[#F7F5F0] border-b border-[#F7F5F0]/15 hover:border-[#F7F5F0] truncate"
            >
              <span className="truncate">{contactConfig.email}</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A39E93]">
          <p>
            © {new Date().getFullYear()} divonmove — {creatorProfile.location}
          </p>
          <p>Creator Portfolio &amp; Brand Collaboration Toolkit</p>
        </div>
      </div>
    </footer>
  );
}
