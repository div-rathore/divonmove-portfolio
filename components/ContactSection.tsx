"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  MessageCircle,
} from "lucide-react";
import { InstagramIcon } from "@/components/InstagramIcon";
import { contactConfig } from "@/data/contact";
import { creatorProfile } from "@/data/creator";

interface InquiryFormState {
  brandName: string;
  contactName: string;
  workEmail: string;
  brandWebsite: string;
  campaignObjective: string;
  desiredDeliverables: string;
  budgetRange: string;
  timeline: string;
  additionalInfo: string;
}

const INITIAL_FORM_STATE: InquiryFormState = {
  brandName: "",
  contactName: "",
  workEmail: "",
  brandWebsite: "",
  campaignObjective: contactConfig.campaignObjectives[0],
  desiredDeliverables: contactConfig.deliverableOptions[0],
  budgetRange: contactConfig.budgetRanges[0],
  timeline: "",
  additionalInfo: "",
};

export default function ContactSection() {
  const [formData, setFormData] =
    useState<InquiryFormState>(INITIAL_FORM_STATE);
  const [submittedBrief, setSubmittedBrief] = useState<{
    subject: string;
    body: string;
    mailtoHref: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Brand Collaboration Inquiry: ${formData.brandName} × divonmove`;
    const bodyLines = [
      `Hi ${creatorProfile.firstName},`,
      ``,
      `We would love to explore a brand collaboration with you. Here are the campaign details:`,
      ``,
      `• Brand Name: ${formData.brandName}`,
      `• Contact Person: ${formData.contactName}`,
      `• Work Email: ${formData.workEmail}`,
      `• Brand Website: ${formData.brandWebsite || "Not specified"}`,
      `• Campaign Objective: ${formData.campaignObjective}`,
      `• Desired Deliverables: ${formData.desiredDeliverables}`,
      `• Expected Commercial Scope / Budget: ${formData.budgetRange}`,
      `• Target Campaign Timeline: ${formData.timeline || "Flexible / TBD"}`,
      ``,
      `Additional Campaign Brief / Notes:`,
      `${formData.additionalInfo || "None provided."}`,
      ``,
      `Best regards,`,
      `${formData.contactName}`,
      `${formData.brandName}`,
    ];

    const body = bodyLines.join("\n");
    const mailtoHref = `mailto:${contactConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmittedBrief({ subject, body, mailtoHref });
    window.location.href = mailtoHref;
  };

  const handleCopyBrief = async () => {
    if (!submittedBrief) return;
    try {
      await navigator.clipboard.writeText(
        `${submittedBrief.subject}\n\n${submittedBrief.body}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Ignore if clipboard unavailable
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#F7F5F0] text-[#141311] border-b border-[#141311]/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.18em] text-[#5C5852] mb-4">
              Collaboration Inquiry
            </p>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#141311] leading-[1.06] mb-5">
              Have a brand worth talking about?{" "}
              <span className="font-serif italic font-normal text-[#8C3A2B]">
                Let&apos;s create something meaningful.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed mb-8">
              {contactConfig.subheadline}
            </p>

            {/* Direct Channels */}
            <div className="divide-y divide-[#141311]/15 border-y border-[#141311]/15 mb-8">
              <a
                href={`mailto:${contactConfig.email}`}
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-4 h-4 text-[#5C5852] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                      Email
                    </p>
                    <p className="font-medium text-sm text-[#141311] truncate group-hover:underline">
                      {contactConfig.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5C5852] shrink-0" />
              </a>

              <a
                href={contactConfig.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3">
                  <InstagramIcon className="w-4 h-4 text-[#5C5852] shrink-0" />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                      Instagram DM
                    </p>
                    <p className="font-medium text-sm text-[#141311] group-hover:underline">
                      {contactConfig.instagramHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#5C5852] shrink-0" />
              </a>

              {contactConfig.whatsappUrl && (
                <a
                  href={contactConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-4 h-4 text-[#5C5852] shrink-0" />
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                        WhatsApp
                      </p>
                      <p className="font-medium text-sm text-[#141311] group-hover:underline">
                        Direct WhatsApp Inquiry
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#5C5852] shrink-0" />
                </a>
              )}
            </div>

            <p className="text-xs text-[#5C5852] leading-relaxed">
              {contactConfig.responseSla}
            </p>
          </div>

          {/* Right Column: Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#EFECE6] border border-[#141311]/15 p-6 sm:p-10">
              <div className="pb-5 mb-6 border-b border-[#141311]/12">
                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-[#141311]">
                  Partnership Brief
                </h3>
                <p className="text-xs text-[#5C5852] mt-1">
                  Share your campaign requirements below.
                </p>
              </div>

              {submittedBrief ? (
                <div className="space-y-6">
                  <div className="p-5 bg-[#F7F5F0] border border-[#141311]/20">
                    <h4 className="font-display font-bold text-base text-[#141311]">
                      Brief Prepared for {formData.brandName}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5C5852] mt-1 leading-relaxed">
                      Your inquiry has been formatted and opened in your default
                      email client addressed to{" "}
                      <span className="font-mono text-[#141311]">
                        {contactConfig.email}
                      </span>
                      . You can also copy the formatted brief below to paste
                      into webmail or an Instagram DM.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F7F5F0] border border-[#141311]/15">
                    <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[#141311]/10">
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#5C5852]">
                        Formatted Campaign Brief
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyBrief}
                        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-[#141311] hover:underline"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Brief</span>
                          </>
                        )}
                      </button>
                    </div>
                    <pre className="text-xs font-mono text-[#141311] whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                      {submittedBrief.body}
                    </pre>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={submittedBrief.mailtoHref}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] bg-[#141311] text-[#F7F5F0]"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email App</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyBrief}
                      className="inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.14em] bg-[#F7F5F0] text-[#141311] border border-[#141311]/25"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      <span>{copied ? "Copied!" : "Copy Text"}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmittedBrief(null)}
                      className="px-4 py-3 text-xs uppercase tracking-[0.14em] text-[#5C5852] hover:text-[#141311]"
                    >
                      Edit Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="brandName"
                        className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                      >
                        Brand Name *
                      </label>
                      <input
                        id="brandName"
                        name="brandName"
                        type="text"
                        required
                        placeholder="Brand name"
                        value={formData.brandName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contactName"
                        className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                      >
                        Contact Person&apos;s Name *
                      </label>
                      <input
                        id="contactName"
                        name="contactName"
                        type="text"
                        required
                        placeholder="Your name & role"
                        value={formData.contactName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="workEmail"
                        className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        id="workEmail"
                        name="workEmail"
                        type="email"
                        required
                        placeholder="name@brand.com"
                        value={formData.workEmail}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="brandWebsite"
                        className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                      >
                        Brand Website / Instagram
                      </label>
                      <input
                        id="brandWebsite"
                        name="brandWebsite"
                        type="text"
                        placeholder="https://yourbrand.com"
                        value={formData.brandWebsite}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="campaignObjective"
                        className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                      >
                        Campaign Objective *
                      </label>
                      <select
                        id="campaignObjective"
                        name="campaignObjective"
                        value={formData.campaignObjective}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                      >
                        {contactConfig.campaignObjectives.map((obj) => (
                          <option key={obj} value={obj}>
                            {obj}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="desiredDeliverables"
                        className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                      >
                        Desired Deliverables *
                      </label>
                      <select
                        id="desiredDeliverables"
                        name="desiredDeliverables"
                        value={formData.desiredDeliverables}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                      >
                        {contactConfig.deliverableOptions.map((del) => (
                          <option key={del} value={del}>
                            {del}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="budgetRange"
                        className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                      >
                        Expected Budget / Scope
                      </label>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                      >
                        {contactConfig.budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                      >
                        Campaign Timeline
                      </label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        placeholder="e.g., Next month"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="additionalInfo"
                      className="block text-xs uppercase tracking-[0.12em] text-[#141311] mb-1.5"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      rows={4}
                      placeholder="Share product details, key talking points, or campaign goals..."
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 text-sm bg-[#F7F5F0] text-[#141311] border border-[#141311]/20 focus:outline-none focus:border-[#141311]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#5C5852]">
                      Opens a formatted campaign brief in your email client.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 text-xs font-medium uppercase tracking-[0.14em] bg-[#141311] text-[#F7F5F0] hover:bg-[#2B2925] transition-colors cursor-pointer"
                    >
                      <span>Send Inquiry</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
