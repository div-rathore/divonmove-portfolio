"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { creatorProfile } from "@/data/creator";

const NAV_LINKS = [
  { label: "Snapshot", href: "#metrics" },
  { label: "Partnerships", href: "#collaborations" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Work", href: "#content" },
  { label: "Audience", href: "#audience" },
  { label: "Services", href: "#offerings" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#141311]/12 py-3.5"
          : "bg-[#F7F5F0] border-b border-[#141311]/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Editorial Masthead */}
        <a href="#top" className="flex items-baseline gap-3 focus:outline-none">
          <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#141311]">
            divonmove
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.12em] text-[#5C5852] hover:text-[#141311] transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/media-kit"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs uppercase tracking-[0.12em] text-[#141311] border border-[#141311]/20 hover:border-[#141311] transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Media Kit</span>
          </Link>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] bg-[#141311] text-[#F7F5F0] hover:bg-[#2B2925] transition-colors"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            className="inline-flex items-center px-3 py-2 text-[11px] font-medium uppercase tracking-[0.12em] bg-[#141311] text-[#F7F5F0]"
          >
            Inquire
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 text-[#141311] border border-[#141311]/20"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F5F0] border-b border-[#141311]/15 px-4 pt-4 pb-6">
          <div className="divide-y divide-[#141311]/10 mb-5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm font-medium text-[#141311] flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#5C5852]" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-2">
            <Link
              href="/media-kit"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-[0.12em] text-[#141311] border border-[#141311]/25"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Media Kit PDF</span>
            </Link>
            <a
              href={creatorProfile.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs uppercase tracking-[0.12em] text-[#141311] border border-[#141311]/25"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
