import ForgetPassword from "@/app/globalComponents/ForgetPassword/ForgetPassword";
import React from "react";

export const metadata = {
  title: "Forgot Password | The Credentialing",
  description: "Reset your password for The Credentialing account and regain access to our comprehensive credentialing solutions. We're here to assist healthcare providers in managing their credentialing needs effectively.",
  keywords: "forgot password, reset password, provider credentialing, healthcare providers, account recovery",
  openGraph: {
    title: "Forgot Password | The Credentialing",
    description: "Need to reset your password? Follow the steps to regain access to your The Credentialing account and continue optimizing your credentialing journey.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/forgot-password",
  },
};

const page = () => {
  return (
    <>
      <ForgetPassword />
    </>
  );
};

export default page;
