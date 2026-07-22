import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "copy-editing")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["manuscript copy editing", "sentence flow improvements", "author voice styling"]
};

export default function CopyEditingPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="editing"
      parentName="Editing"
    />
  );
}
