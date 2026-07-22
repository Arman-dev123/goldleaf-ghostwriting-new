import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "amazon-kdp")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["amazon KDP", "KDP setup assistance", "kindle books publishing"]
};

export default function AmazonKdpPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="publication"
      parentName="Publication"
    />
  );
}
