import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "custom-cover")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["custom book cover", "dust jacket design", "premium typography covers"]
};

export default function CustomCoverPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="cover-design"
      parentName="Cover Design"
    />
  );
}
