import React from 'react'
import Image from 'next/image';
import { Input } from "antd";
import { FaInstagram, FaPhoneAlt, } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocation, TiSocialLinkedin } from "react-icons/ti";
import { FaAngleRight, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import logo from '../../../public/logo/logo_white.png'
const Footer = () => {
    return (
        <footer className='bg-[#212529] pt-8'>
            <div className="my-container !pb-16">
                <div className="my-row">
                    <div className="my-col">
                        <button className="bg-primary flex justify-center items-center py-[10px] px-[20px] font-shadow text-[21.5px] text-white relative footer-primary-btn mt-[-67px] md:mt-[-75px]">Get in Touch</button>

                    </div>
                </div>
                <div className="flex flex-wrap  w-full justify-between">
                    <div className='p-3 w-full md:w-[30%]'>
                        <h3 className="font-bold text-white mt-2 text-[1em]">NEWSLETTER</h3>
                        <p className=" text-[#777] mt-3 leading-7 text-[14px]">
                            Discover the world of technology with our most recent credentialing service innovations and regular email updates. Get our newsletter by subscribing now!
                        </p>
                        <div className="flex justify-center items-center mt-5">
                            <Input placeholder="Email Address " variant="borderless" className="rounded-l-full py-3 px-4 bg-white outline-none font-poppins" />
                            <button className="rounded-r-full h-[46px] p-3 bg-white border-l border-gray-200 "><p className="font-bold text-sm">Go!</p></button>
                        </div>

                    </div>
                    <div className='p-3 w-full md:w-[30%]'>
                        <h3 className="font-bold text-[11px] md:text-[1em] text-white">CONTACT Us</h3>
                        <div className="mt-5 text-white space-y-3 ">
                            <ul>
                                <li className='text-[#777] mt-3 leading-7 text-[14px] flex'> <TiLocation size={18} className="text-primary mr-4 mt-1" /> 626 RXR Plaza Uniondale, NY 11556</li>
                                <li className='text-[#777] mt-3 leading-7 text-[14px] hover:text-white cursor-pointer flex'> <FaPhoneAlt  size={18} className="text-primary mr-4 mt-1" /> (800) 500-8117</li>
                                <li className='text-[#777] mt-3 leading-7 text-[14px] hover:text-white cursor-pointer flex'> <MdOutlineEmail size={18} className="text-primary mr-4 mt-1" />info@thecredentialing.com</li>
                            </ul>

                        </div>
                        <div className="flex items-center gap-1 mt-5">
                            <FaFacebookF size={30} className=" cursor-pointer bg-white transition-all hover:bg-[#3b5a9a] rounded-full text-black hover:text-white w-[30px] h-[30px] p-[6px]" />
                            <TiSocialLinkedin size={30} className="cursor-pointer bg-white transition-all hover:bg-[#1aa9e1] rounded-full text-black hover:text-white w-[30px] h-[30px] p-1" />
                            <FaXTwitter size={30} className="cursor-pointer bg-white transition-all hover:bg-[#0073b2] rounded-full text-black hover:text-white w-[30px] h-[30px] p-1" />
                            <FaInstagram size={30} className="cursor-pointer bg-white transition-all hover:bg-[#7c4a3a] rounded-full text-black hover:text-white w-[30px] h-[30px] p-1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#16181b] '>
                <div className="my-container">
                    <div className="my-row">
                        <div className="my-col lg:w-[55%]">
                            <div className="flex flex-col lg:flex-row items-center">
                                <Image src={logo} alt="logo" width={250} style={{ opacity: '0.4' }}  className='w-full max-w-[250px]'/>
                                <p className="text-[#777] text-[11px] lg:ml-3">&copy; Copyright 2024. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="my-col lg:w-[45%]">
                        <ul className='flex flex-wrap justify-center'>
                                <li className='footer-list'> <FaAngleRight size={11} className="text-[#777] mr-1" /> FAQs</li>
                                <li className='footer-list'> <FaAngleRight size={11} className="text-[#777] mr-1" /> Blog's</li>
                                <li className='footer-list'> <FaAngleRight size={11} className="text-[#777] mr-1" />Sitemap</li>
                                <li className='footer-list'> <FaAngleRight size={11} className="text-[#777] mr-1" /> Contact Us</li>
                                <li className='footer-list'> <FaAngleRight size={11} className="text-[#777] mr-1" />Privacy Policy</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
