import Breadcrumb from "@/app/component/service/CommonComponent/Breadcrumb";
import Benefits from "@/app/component/service/RevalidationandRecredentialing/Benefits";
import Revalidation from "@/app/component/service/RevalidationandRecredentialing/Revalidation";
import Revalidation_and_Recredentialing from "@/app/component/service/RevalidationandRecredentialing/Revalidation_and_Recredentialing";
import WeOffer from "@/app/component/service/RevalidationandRecredentialing/WeOffer";
import React from "react";
export const metadata = {
  title: "Revalidation And Recredentialing | The Credentialing",
  description: "Streamline the revalidation and recredentialing process with our expert services. We help healthcare providers maintain their credentials and billing privileges efficiently.",
  keywords: "revalidation, recredentialing, healthcare compliance, credentialing services, documentation collection, application assistance, healthcare providers, professional reputation, patient safety",
  openGraph: {
    title: "Revalidation And Recredentialing | The Credentialing",
    description: "Ensure hassle-free revalidation and recredentialing with our comprehensive services. Save time, maintain compliance, and enhance your professional reputation in the healthcare field.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/service/revalidation-and-recredentialing",
  },
};

export default function page() {
  return (
    <>
      <Breadcrumb />
      <Revalidation_and_Recredentialing />
      <WeOffer />
      <Benefits />
      <Revalidation />
    </>
  );
}
