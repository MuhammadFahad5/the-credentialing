// "use client";
// import { useState, useEffect } from "react";
// import LoaderSpinner from "./globalComponents/LoaderSpiner";
import HeroSection from "./component/home/HeroSection";
import GetStarted from "./component/home/GetStarted";
import CredentialNeed from "./component/home/CredentialNeed";
import CredentialStreamline from "./component/home/CredentialStreamline";
import CredentialGoAbout from "./component/home/CredentialGoAbout";
import CredentialExecellence from "./component/home/CredentialExecellence";
import CredentialServices from "./component/home/CredentialServices";
// import PatnerSlide from './component/home/PatnerSlide'
import CredentialDoDont from "./component/home/CredentialDoDont";
import CredentialNegotiation from "./component/home/CredentialNegotiation";
import IPAEnrollment from "./component/home/IPAEnrollment";
import CredentialingRevaliadtion from "./component/home/CredentialingRevaliadtion";
import DontSettle from "./component/home/DontSettle";
import SetsUsApart from "./component/home/SetsUsApart";
export const metadata = {
  title: "Professional Credentialing Services | The Credentialing",
  description: "Discover top-notch credentialing services for healthcare providers. Streamline your credentialing process with our expert solutions.",
  keywords: "credentialing, healthcare credentialing, medical credentialing, provider enrollment, healthcare services, professional credentialing",
  openGraph: {
    title: "Professional Credentialing Services | The Credentialing",
    description: "Streamline your credentialing process with our expert solutions tailored for healthcare providers. Get started today!",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/",
  },
};

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* {isLoading ? (
        <div className="w-full h-[100%] flex justify-center items-center absolute top-0 z-[99] bg-black">
          <LoaderSpinner setIsLoading={setIsLoading} isLoading={isLoading} />
        </div>
      ) : (
        <>
          <HeroSection />
          <GetStarted />
          <CredentialExecellence />
          <CredentialNeed />
          <CredentialStreamline />
          <CredentialGoAbout />
          <CredentialServices no="1" />
          <CredentialDoDont />
          <CredentialServices no="2" />
          <CredentialNegotiation />
          <IPAEnrollment />
          <CredentialingRevaliadtion />
          <DontSettle />
          <SetsUsApart />
        </>
      )} */}
      
      <HeroSection />
      <GetStarted />
      <CredentialExecellence />
      <CredentialNeed />
      <CredentialStreamline />
      <CredentialGoAbout />
      <CredentialServices no="1" />
      <CredentialDoDont />
      <CredentialServices no="2" />
      <CredentialNegotiation />
      <IPAEnrollment />
      <CredentialingRevaliadtion />
      <DontSettle />
      <SetsUsApart />
    </>
  );
}
