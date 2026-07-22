import React from "react";
import SectionHeading from "@/src/components/SectionHeading";

export const metadata = {
  title: "Privacy Policy | GoldLeaf Ghostwriting",
  description: "Read about GoldLeaf Ghostwriting's absolute commitment to client privacy, confidential narrative recordings, and non-disclosure safeguards."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 md:px-6 space-y-8">
      <SectionHeading
        badge="PRIVACY ASSURANCE"
        title="Privacy Policy"
        subtitle="Last modified: July 19, 2026"
      />
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm leading-relaxed">
        <p>
          At <strong>GoldLeaf Ghostwriting</strong>, our commitment to our clients' privacy is absolute. This document outlines how we collect, handle, and securely lock all project materials, interview voice recordings, outlines, drafts, and email entries.
        </p>

        <h3 className="text-lg font-sans font-bold text-slate-900 mt-6">1. Strict Client Anonymity</h3>
        <p>
          We operate strictly as an invisible writing service. We never list client books in public portfolio decks, mention author names to third parties, or claim co-author credits on any retail distribution networks, unless explicitly requested by the author in writing.
        </p>

        <h3 className="text-lg font-sans font-bold text-slate-900 mt-6">2. Non-Disclosure Safeguards (NDAs)</h3>
        <p>
          Before any manuscript details are shared, we execute a legally binding Non-Disclosure Agreement. This NDA shields your voice clips, industry blueprints, family histories, and personal concepts. All text drafts are stored in secure cloud containers accessed only by your primary assigned team of literary experts.
        </p>

        <h3 className="text-lg font-sans font-bold text-slate-900 mt-6">3. Data Retention and Erasure</h3>
        <p>
          At project closure, all voice memos, outline transcripts, and working drafts can be completely purged from our active local records upon your formal written request.
        </p>
      </div>
    </div>
  );
}
