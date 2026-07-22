import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "book-writing")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["book writing", "hire a book ghostwriter", "professional book author"]
};

export default function BookWritingPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="ghostwriting"
      parentName="Ghostwriting"
    />
  );
}
