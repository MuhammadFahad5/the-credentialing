import Breadcrumb from '@/app/component/service/CommonComponent/Breadcrumb'
import EnjoyAccessToAwidePatient from '@/app/component/service/IPA_Enrollment/EnjoyAccessToAwidePatient'
import JoinAwider from '@/app/component/service/IPA_Enrollment/JoinAwider'
import Cards from '@/app/component/service/IPA_Enrollment/Cards'
import React from 'react'
export const metadata = {
  title: "IPA Enrollment Services | The Credentialing",
  description: "Expand your practice's reach by joining a broader healthcare network with our IPA Enrollment Services. We simplify the process, ensuring accurate and timely enrollment for healthcare providers.",
  keywords: "IPA enrollment services, Independent Physician Associations, healthcare credentialing, medical credentialing, provider enrollment, healthcare network, patient network, payer network, IPA selection",
  openGraph: {
    title: "IPA Enrollment Services | The Credentialing",
    description: "Access a wider patient and payer network with our expert IPA Enrollment Services. We handle everything from IPA selection to document submission, ensuring your enrollment process is seamless and efficient.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/service/ipa-enrollment",
  },
};

export default function page() {
  return (
    <>
    <Breadcrumb />
    <EnjoyAccessToAwidePatient />
    <Cards />
    <JoinAwider />
    </>
  )
}
