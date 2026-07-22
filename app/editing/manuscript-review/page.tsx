import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "manuscript-review")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["manuscript diagnostics report", "developmental book evaluation", "market positioning for books"]
};

export default function ManuscriptReviewPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="editing"
      parentName="Editing"
    />
  );
}
