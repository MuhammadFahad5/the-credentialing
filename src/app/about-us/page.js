import React from "react";
import YourTrustedCredentialing from "../component/aboutus/YourTrustedCredentialing";
import WhoWeAre from "../component/aboutus/WhoWeAre";
import Breadcrumb from "../component/service/CommonComponent/Breadcrumb";
import OurMissionandVision from "../component/aboutus/OurMissionandVision";
import Cards from "../component/aboutus/Cards";
import WhatCanYouVerify from "../component/aboutus/WhatCanYouVerify";
import FAQs from "../component/aboutus/FAQs";
export const metadata = {
  title: "About Us | The Credentialing",
  description: "Learn about The Credentialing, a leading provider of innovative credentialing solutions dedicated to simplifying the credentialing process for healthcare providers. Discover our commitment to excellence, integrity, and customer focus.",
  keywords: "credentialing, healthcare credentialing, provider credentialing services, compliance, patient safety, healthcare solutions",
  openGraph: {
    title: "About Us | The Credentialing",
    description: "Discover how The Credentialing transforms the credentialing process for healthcare providers through innovative solutions and dedicated support.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/about-us",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumb heading={"About Us"} />
      <YourTrustedCredentialing />
      <WhoWeAre />
      <OurMissionandVision />
      <Cards />
      <WhatCanYouVerify />
      <FAQs />
    </>
  );
};

export default page;
