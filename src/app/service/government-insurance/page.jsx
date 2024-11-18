import React from "react";
import OurEfficent from "@/app/component/service/Government_insurance/OurEfficent";
import WhatisGovernmetnInsurance from "@/app/component/service/Government_insurance/WhatisGovernmetnInsurance";
import WhyisGovernmentCredentialing from "@/app/component/service/Government_insurance/WhyisGovernmentCredentialing";
import FiveStepSolution from "@/app/component/service/Government_insurance/FiveStepSolution";
import HowCanWeHelp from "@/app/component/service/Government_insurance/HowCanWeHelp";
import BenefitsOfWorking from "@/app/component/service/Government_insurance/BenefitsOfWorking";
import Breadcrumb from "@/app/component/service/CommonComponent/Breadcrumb";

export const metadata = {
  title: "Government Insurance Credentialing Services | The Credentialing",
  description: "Navigate the complex government insurance credentialing process with ease. Our expert services ensure your practice meets all regulatory requirements for programs like Medicare and Medicaid.",
  keywords: "government insurance credentialing, Medicare credentialing, Medicaid credentialing, healthcare credentialing, medical credentialing, provider enrollment, healthcare services, regulatory compliance",
  openGraph: {
    title: "Government Insurance Credentialing Services | The Credentialing",
    description: "Simplify your government insurance credentialing with our comprehensive services. We help healthcare providers meet all necessary requirements for Medicare, Medicaid, and other government programs.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/service/government-insurance",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumb />
      <WhatisGovernmetnInsurance />
      <WhyisGovernmentCredentialing />
      <OurEfficent />
      <FiveStepSolution />
      <HowCanWeHelp />
      <BenefitsOfWorking />
    </>
  );
};
export default page;
