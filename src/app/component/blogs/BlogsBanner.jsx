import React from 'react'
import './blogs.css'
import blog_banner_img from '../../../../public/blogs/blog_banner_img.svg'
import Image from 'next/image'
Image

const BlogsBanner = () => {
    return (
        <section className='blogs-banner-bg mt-[76px] pt-10'>
            <div className="my-container !pb-0">
                <div className="my-row ">
                    <div className="my-col-2 !pb-0 ">
                        <h1 className='text-[30px] md:text-[59px] text-[#ffffff] font-bold font-poppins tracking-tighter leading-10 md:leading-[74px]'>Credentialing <br /> Blogs</h1>
                        <form action="" className='flex gap-4 mt-10'>
                            <input type="text" placeholder='Enter your email' className='px-3 py-[6px] rounded-[4px] outline-none w-[100%] max-w-[260px]' />
                            <button className='text-primary py-[9px] px-[15px] bg-[#fff] rounded-[4px] font-poppins text-[12px] font-semibold'>Subscribe</button>
                        </form>
                        <p className='text-[14px] text-[#fff] font-poppins mt-4 mb-6'>
                            We care about your data in our privacy policy.
                        </p>
                    </div>
                    <div className="my-col-2 !pb-0">
                        <Image
                            src={blog_banner_img}
                            alt="Blog banner"
                            width={540} height={450}
                            className='w-full '
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsBanner
