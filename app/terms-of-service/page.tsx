import React from "react";
import SectionHeading from "@/src/components/SectionHeading";

export const metadata = {
  title: "Terms of Service | GoldLeaf Ghostwriting",
  description: "Explore the work-for-hire covenants, complete copyright licensing, and payment structure terms of GoldLeaf Ghostwriting."
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 md:px-6 space-y-8">
      <SectionHeading
        badge="LEGAL AGREEMENTS"
        title="Terms of Service"
        subtitle="Last modified: July 19, 2026"
      />
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
        <p>
          Welcome to <strong>GoldLeaf Ghostwriting</strong>. By booking a diagnostic session or purchasing our writing/editing packages, you agree to comply with and be bound by the following Terms of Service.
        </p>

        <h3 className="text-lg font-sans font-bold text-slate-900 mt-6">1. Work-For-Hire Intellectual Property</h3>
        <p>
          GoldLeaf Ghostwriting provides intellectual services on a strict <strong>work-for-hire</strong> basis. All completed chapters, outlines, custom cover layouts, and publication files are the sole creative property of the client. The client retains 100% of all royalties, retail rights, and copyright registrations.
        </p>

        <h3 className="text-lg font-sans font-bold text-slate-900 mt-6">2. Client Review Iterations</h3>
        <p>
          To ensure writing accuracy, clients agree to review chapters iteratively. All modifications are compiled and executed by our editorial team in accordance with your specified timeline structure.
        </p>

        <h3 className="text-lg font-sans font-bold text-slate-900 mt-6">3. Payment Structures and Refund Guarantees</h3>
        <p>
          Our premium packages are billed in structured milestones. In alignment with our 100% Satisfaction Guarantee, refunds on open/active milestones are evaluated and executed promptly if creative progress fails to align with your outlined specifications.
        </p>
      </div>
    </div>
  );
}
