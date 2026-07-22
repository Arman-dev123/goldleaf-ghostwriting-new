import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "self-publishing")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["self-publishing", "independent imprint publishing", "print-on-demand setups"]
};

export default function SelfPublishingPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="publication"
      parentName="Publication"
    />
  );
}
