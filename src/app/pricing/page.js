import React from 'react'
import PricingForm from '../component/pricing/PricingForm'
import PricingFeatures from '../component/pricing/PricingFeatures'
export const metadata = {
  title: "Pricing Plans | The Credentialing",
  description: "Compare our credentialing service plans and pricing to find the best fit for your healthcare needs. Transparent and competitive pricing for all providers.",
  keywords: "pricing plans, credentialing services, healthcare providers, compare pricing, affordable credentialing, service packages",
  openGraph: {
    title: "Pricing Plans | The Credentialing",
    description: "Explore our competitive pricing plans for credentialing services. Find the perfect plan tailored to your needs and budget.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/pricing",
  },
};

const page = () => {
  return (
    <>
      <PricingForm />
      <PricingFeatures />

    </>
  )
}

export default page
