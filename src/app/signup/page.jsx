import React from "react";
import Signup from "../globalComponents/signup/Signup";

export const metadata = {
  title: "Sign Up | The Credentialing",
  description: "Join The Credentialing today! Create your account to access complete credentialing solutions that optimize your practice management and enhance professional success.",
  keywords: "sign up, create account, provider credentialing, healthcare providers, practice management",
  openGraph: {
    title: "Sign Up | The Credentialing",
    description: "Transform your practice with The Credentialing. Sign up now to streamline your credentialing journey and enjoy efficient practice management.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/sign-up",
  },
};

const page = () => {
  return (
    <>
      <Signup />
    </>
  );
};

export default page;
