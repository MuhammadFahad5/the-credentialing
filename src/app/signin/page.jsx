import React from 'react'
import Signin from '../globalComponents/signin/Signin'
export const metadata = {
  title: "Sign In | The Credentialing",
  description: "Access your account at The Credentialing. Sign in to manage your provider credentialing process, stay updated on reimbursement systems, and partner with us for seamless healthcare solutions.",
  keywords: "sign in, provider credentialing, healthcare providers, account access, login",
  openGraph: {
    title: "Sign In | The Credentialing",
    description: "Log in to your account at The Credentialing. Manage your provider credentialing and ensure accurate reimbursements with our expert support.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/sign-in",
  },
};

const page = () => {
  return (
   <>
   <Signin />
   </>
  )
}

export default page
