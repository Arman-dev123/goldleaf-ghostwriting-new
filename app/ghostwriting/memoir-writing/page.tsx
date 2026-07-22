import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "memoir-writing")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["memoir writing", "legacy memoir ghostwriter", "family story writer"]
};

export default function MemoirWritingPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="ghostwriting"
      parentName="Ghostwriting"
    />
  );
}
