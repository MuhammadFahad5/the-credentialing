import React from "react";
import TheCredentialingProcess from "@/app/component/service/Commercial_insurance/TheCredentialingProcess";
import TheImportanceOfCommercial from "@/app/component/service/Commercial_insurance/TheImportanceOfCommercial";
import WhatisCommercialinsurance from "@/app/component/service/Commercial_insurance/WhatisCommercialinsurance";
import Breadcrumb from "@/app/component/service/CommonComponent/Breadcrumb";
import SpecialtiesWeProvideCommercial from "@/app/component/service/Commercial_insurance/SpecialtiesWeProvideCommercial";
import AdditionalServices from "@/app/component/service/Commercial_insurance/AdditionalServices";
import WhyOutsource from "@/app/component/service/Commercial_insurance/WhyOutsource";


export const metadata = {
  title: "Commercial Insurance Credentialing Services | The Credentialing",
  description: "Simplify your commercial insurance credentialing process with our expert solutions. Ensure your practice meets all necessary standards to maximize reimbursements and patient trust.",
  keywords: "commercial insurance credentialing, healthcare credentialing, insurance provider enrollment, healthcare services, medical credentialing, insurance network participation",
  openGraph: {
    title: "Commercial Insurance Credentialing Services | The Credentialing",
    description: "Maximize your practice's reimbursements and access to a larger patient base with our specialized commercial insurance credentialing services. We streamline the process from start to finish.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/service/commercial-insurance",
  },
};

export default function page() {
  return (
    <>
      <Breadcrumb />
      <WhatisCommercialinsurance />
      <TheCredentialingProcess />
      <TheImportanceOfCommercial />
      <SpecialtiesWeProvideCommercial />
      <AdditionalServices />
      <WhyOutsource />
    </>
  );
}
