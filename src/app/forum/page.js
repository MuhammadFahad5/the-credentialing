import React from 'react'
export const metadata = {
  title: "Forum | The Credentialing",
  description: "Join our upcoming forum dedicated to healthcare credentialing discussions, resources, and community support. Stay tuned for more information!",
  keywords: "forum, healthcare credentialing, community support, discussions, coming soon",
  openGraph: {
    title: "Forum | The Credentialing",
    description: "Coming soon: A dedicated forum for healthcare professionals to discuss credentialing topics and share valuable resources.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/forum",
  },
};

const page = () => {

  return (
    <>
      <div className='my-16 h-[50vh] relative'>
        <h2 className='absolute translate-x-[-50%] left-[50%] bottom-[10%] font-mono text-[36px] text-[#212529] tracking-tighter w-full text-center'>Coming Soon. . .</h2>
      </div>
    </>
  )
}

export default page
