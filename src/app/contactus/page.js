import React from 'react'
import ConactBanner from '../component/company/contact/ConactBanner'
import ContactForm from '../component/company/contact/ContactForm'

export const metadata = {
  title: "Contact Us | The Credentialing",
  description: "Get in touch with The Credentialing. We're here to answer your questions and provide assistance. Reach out to us via phone, email, or by filling out our contact form.",
  keywords: "contact, customer service, credentialing inquiries, healthcare credentialing, support",
  openGraph: {
    title: "Contact Us | The Credentialing",
    description: "Have questions? Contact The Credentialing for more information and support. Our team is ready to assist you.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/contact-us",
  },
};

const page = () => {
  return (
    <>
    <ConactBanner/>
    <ContactForm/>
    </>
  )
}

export default page
