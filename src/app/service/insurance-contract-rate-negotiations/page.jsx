import Breadcrumb from "@/app/component/service/CommonComponent/Breadcrumb";
import GlossaryOfTerms from "@/app/component/service/InsuranceContractRateNegotiations/GlossaryOfTerms";
import InsuranceContractRateNegotiations from "@/app/component/service/InsuranceContractRateNegotiations/InsuranceContractRateNegotiations";
import OurComprehensive from "@/app/component/service/InsuranceContractRateNegotiations/OurComprehensive";
import WhyOptForInsurance from "@/app/component/service/InsuranceContractRateNegotiations/WhyOptForInsurance";
import React from "react";
export const metadata = {
  title: "Insurance Contract Rate Negotiations | The Credentialing",
  description: "Optimize your healthcare practice's revenue with our expert Insurance Contract Rate Negotiation services. We help you secure favorable terms with insurance payers, ensuring transparency and compliance.",
  keywords: "insurance contract negotiations, healthcare negotiations, reimbursement rates, value-based care, contract drafting, negotiation management, healthcare services, provider credentialing",
  openGraph: {
    title: "Insurance Contract Rate Negotiations | The Credentialing",
    description: "Navigate the complexities of insurance contract negotiations with our expert team. We strive for optimal reimbursement rates, reduced administrative burdens, and effective dispute resolution for healthcare providers.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/service/insurance-contract-rate-negotiations",
  },
};

export default function page() {
  return (
    <>
      <Breadcrumb />
      <InsuranceContractRateNegotiations />
      <OurComprehensive />
      <WhyOptForInsurance />
      <GlossaryOfTerms />
    </>
  );
}
