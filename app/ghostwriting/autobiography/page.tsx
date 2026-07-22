import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "autobiography")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["autobiography ghostwriter", "professional biography co-author", "corporate autobiography"]
};

export default function AutobiographyPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="ghostwriting"
      parentName="Ghostwriting"
    />
  );
}
