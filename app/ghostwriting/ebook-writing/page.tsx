import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "ebook-writing")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["ebook writing", "hire an ebook ghostwriter", "digital book writer"]
};

export default function EBookWritingPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="ghostwriting"
      parentName="Ghostwriting"
    />
  );
}
