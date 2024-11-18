'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import blog_banner_img from '../../../../public/blogs/blog_main_image.jpg'
import Link from 'next/link'
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import './blogs.css'


const BlogsSection = () => {
    const [recent, setRecent] = useState(false)
    const [populer, setPopuler] = useState(true)
    const populerTab = () => {
        setPopuler(true)
        setRecent(false)
    }
    const recentTab = () => {
        setPopuler(false)
        setRecent(true)
    }
    const blogsData = [
        {
            key: '1',
            title: 'Insurance Credentialing Guide for Mental Health Clinics',
            content: 'Discover how mental health clinics can navigate the insurance credentialing process to expand patient access, ensure financial stability, and maintain compliance.',
            image: blog_banner_img,
            date: 'August 15, 2024'
        },
        {
            key: '2',
            title: 'How to Choose the Best Healthcare Credentialing Software',
            content: 'Know how to choose the best healthcare credentialing software with our comprehensive guide. Learn about key factors like functionality, compliance, and cost.',
            image: blog_banner_img,
            date: 'August 15, 2024'
        },
        {
            key: '3',
            title: 'Cost-Effective Healthcare Credentialing: Maximizing Your ROI',
            content: 'Team of highly experienced web developers to help your brand reach its full potential. Get more sales for your business with high-quality and professional web development experience.',
            image: blog_banner_img,
            date: 'August 15, 2024'
        },
        {
            key: '4',
            title: 'Challenges in Healthcare Credentialing and How to Overcome Them',
            content: 'Team of highly experienced web developers to help your brand reach its full potential. Get more sales for your business with high-quality and professional web development experience.',
            image: blog_banner_img,
            date: 'August 15, 2024'
        },
    ]
    return (
        <section>
            <div className="my-container">
                <div className="my-row !items-start">
                    <div className="w-full lg:w-[75%] order-2 lg:order-1">
                        <div className='my-row !items-start'>
                            {
                                blogsData.map(item => {
                                    return (
                                        <div className='my-col sm:w-1/2 mb-8' key={item.key}>
                                            <div>
                                                <Image
                                                    src={item.image}
                                                    alt="Blog Image"
                                                    width={320} height={240}
                                                    className='w-full '
                                                />
                                            </div>
                                            <div className='mt-4'>
                                                <Link href='#' className='text-[21px] text-primary font-poppins font-semibold tracking-tighter pt-4'>{item.title}</Link>
                                            </div>
                                            <p className='text-[14px] text-[#777] font-poppins leading-[26px] mt-3'>{item.content}</p>
                                            <div className='flex mt-3 items-center'>
                                                <FaCalendarAlt size={16} className='text-primary mb-[3px]' /> <p className='text-[14px] text-[#777] font-poppins leading-[26px]  ml-3'>{item.date}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            {/* <div className='my-col sm:w-1/2'></div> */}
                        </div>


                    </div>
                    <div className="my-col lg:w-[25%] order-1 lg:order-2">
                        <div className='flex items-center lg:ml-3'>
                            <input type="text" placeholder='Search' className='h-11 px-[12px] py-[6px] border-[1px] border-[#7777774f] rounded-tl-[4px] rounded-bl-[4px] w-full lg:max-w-[215px] outline-none' />
                            <button className='h-11 bg-[#000] px-[14px] py-[6px] rounded-tr-[4px] rounded-br-[4px]'><IoMdSearch className='text-[#fff]' /></button>
                        </div>
                        <div className='flex flex-wrap lg:ml-3 mt-5'>
                            <div
                                // className='border-x-[1px] border-t-[1px] rounded-tl-[4px] rounded-tr-[4px] transition-all hover:bg-black bg-[#f4f4f4]'
                                className={`border-x-[1px] border-t-[1px] rounded-tl-[4px] rounded-tr-[4px] transition-all hover:bg-black  ${populer ? 'bg-black' : 'bg-[#f4f4f4]'}`}
                            >
                                <div
                                    //  className='relative py-3 px-6 bottom-[-2px] bg-[#f4f4f4] cursor-pointer' 
                                    className={`relative py-3 px-6 rounded-tl-[3px] rounded-tr-[3px] bottom-[-3px] cursor-pointer transition-all hover:bg-white ${populer ? 'bg-white' : 'bg-[#f4f4f4]'}`}
                                    onClick={populerTab}>
                                    <span className='text-[12px] font-poppins font-bold uppercase tracking-tight'>populer</span>
                                </div>

                            </div>
                            <div
                                // className='border-x-[1px] border-t-[1px]  ml-[1px] rounded-tl-[4px] rounded-tr-[4px] bg-[#f4f4f4] transition-all hover:bg-black'
                                className={`border-x-[1px] border-t-[1px]  ml-[1px] rounded-tl-[4px] rounded-tr-[4px] transition-all hover:bg-black ${recent ? 'bg-black' : 'bg-[#f4f4f4]'}`}
                            >
                                <div
                                    // className='relative py-3 px-6 bottom-[-2px] bg-white cursor-pointer' 
                                    className={`relative py-3 px-6 rounded-tl-[3px] rounded-tr-[3px] bottom-[-3px] cursor-pointer transition-all hover:bg-white ${recent ? 'bg-white' : 'bg-[#f4f4f4]'}`}
                                    onClick={recentTab}>
                                    <span className='text-[12px] font-poppins font-bold uppercase tracking-tight'>  Recent</span>
                                </div>

                            </div>
                            <div className='border-[1px] w-full'>
                                {
                                    populer &&
                                    <div className='p-4'>
                                        <ul className='text-center mt-2'>
                                            {
                                                blogsData.map(item => {
                                                    return (
                                                        <li className='blogs-tab-list mt-8' key={item.key}>
                                                            <Link href='#'>
                                                                <div className='w-[45%] mx-auto'>
                                                                    <Image
                                                                        src={blog_banner_img}
                                                                        alt="Blog Image"
                                                                        width={100} height={100}
                                                                        className='w-full rounded-sm'
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <span className='text-[15px] text-primary font-poppins mt-2 hover:underline'>How to Choose the Best Healthcare Credentialing Software</span>
                                                                    <p className='text-[14px] text-[#777]  font-poppins leading-[26px]'>14 Agust 2024</p>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }

                                        </ul>
                                    </div>
                                }

                                {
                                    recent &&
                                    <div className='p-4'>
                                    <ul className='text-center mt-2'>
                                        {
                                            blogsData.map(item => {
                                                return (
                                                    <li className='blogs-tab-list mt-8' key={item.key}>
                                                        <Link href='#'>
                                                            <div className='w-[45%] mx-auto'>
                                                                <Image
                                                                    src={blog_banner_img}
                                                                    alt="Blog Image"
                                                                    width={320} height={240}
                                                                    className='w-full rounded-sm'
                                                                />
                                                            </div>
                                                            <div>
                                                            <span className='text-[15px] text-primary font-poppins mt-2 hover:underline'>How to Choose the Best Healthcare Credentialing Software</span>

                                                                <p className='text-[14px] text-[#777]  font-poppins leading-[26px] '>14 Agust 2024</p>
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogsSection
