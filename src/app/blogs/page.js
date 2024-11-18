import React from 'react'
import BlogsBanner from '../component/blogs/BlogsBanner'
import BlogsSection from '../component/blogs/BlogsSection'
export const metadata = {
  title: "Blogs | The Credentialing",
  description: "Explore our insightful blogs on healthcare credentialing, covering guides, challenges, and software recommendations to enhance your practice.",
  keywords: "credentialing, healthcare blogs, insurance credentialing, healthcare software, patient access, financial stability",
  openGraph: {
    title: "Blog | The Credentialing",
    description: "Stay informed with our blogs on healthcare credentialing. Learn about best practices, software solutions, and strategies to navigate the credentialing landscape.",
    images: [
      {
        url: "/logo/the_credentialing_logo.svg",
        width: 800,
        height: 600,
        alt: "Credentialing Logo",
      },
    ],
    type: "website",
    url: "https://thecredentialing.com/blogs",
  },
};

const page = () => {
  return (
    <>
    <BlogsBanner/>
    <BlogsSection/>
    </>
  )
}

export default page
