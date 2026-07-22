import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "proofreading")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["book proofreading", "manuscript spellcheck", "final punctuation scan"]
};

export default function ProofreadingPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="editing"
      parentName="Editing"
    />
  );
}
