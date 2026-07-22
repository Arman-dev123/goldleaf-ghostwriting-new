import React from "react";
import { CMS_CONTENT } from "@/src/lib/sanity";
import ServiceDetailTemplate from "@/src/components/ServiceDetailTemplate";

const serviceData = CMS_CONTENT.services.find((s) => s.slug === "illustrations")!;

export const metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDesc,
  keywords: ["book illustrations", "custom children book artist", "editorial vector diagrams"]
};

export default function IllustrationsPage() {
  return (
    <ServiceDetailTemplate
      service={serviceData}
      parentSlug="cover-design"
      parentName="Cover Design"
    />
  );
}
