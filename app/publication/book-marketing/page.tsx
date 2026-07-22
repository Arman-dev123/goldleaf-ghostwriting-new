import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "book-marketing")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["book marketing", "bestseller book launching", "PR for authors"]
};

export default function BookMarketingPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="publication"
      parentName="Publication"
    />
  );
}
