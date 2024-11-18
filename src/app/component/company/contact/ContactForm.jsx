import React from 'react'
import { MdEmail, MdLocationPin } from "react-icons/md";
// import { FaPhoneAlt , } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import Link from 'next/link';


const ContactForm = () => {
    return (
        <section className='mb-20 mt-12'>
            <div className="my-container">
                <div className="my-row !items-start">
                    <div className="my-col-2">
                        <h2 className='text-[32px] font-poppins font-bold tracking-tighter text-[#212529]'>Contact Us</h2>
                        <p className='text-[14px] font-poppins  text-[#777777]'>Feel free to ask for details, don't save any questions!</p>
                        <form action="" className='mt-3 '>
                            <div className='flex flex-col lg:flex-row lg:gap-6'>
                                <div className='flex flex-col w-full lg:w-[50%] mt-5'>
                                    <label htmlFor="name" className='text-[12.5px] font-poppins  text-[#777777] mb-[6px]'>Full Name*</label>
                                    <input type="text" id='name' placeholder='' className='border-[1px] border-[#77777738] rounded-[4px] p-2 outline-none' />
                                </div>
                                <div className='flex flex-col w-full lg:w-[50%] mt-5'>
                                    <label htmlFor="email" className='text-[12.5px] font-poppins  text-[#777777] mb-[6px]'>Email Address*</label>
                                    <input type="email" id='email' placeholder='' className='border-[1px] border-[#77777738] rounded-[4px] p-2 outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row lg:gap-6'>
                                <div className='flex flex-col w-full lg:w-[50%]  mt-5'>
                                    <label htmlFor="subject" className='text-[12.5px] font-poppins  text-[#777777] mb-[6px]'>Subject*</label>
                                    <input type="text" id='subject' placeholder='' className='border-[1px] border-[#77777738] rounded-[4px] p-2 outline-none' />
                                </div>
                                <div className='flex flex-col w-full lg:w-[50%] mt-5'>
                                    <label htmlFor="phone" className='text-[12.5px] font-poppins  text-[#777777] mb-[6px]'>Phone*</label>
                                    <input type="number" id='phone' placeholder='' className='border-[1px] border-[#77777738] rounded-[4px] p-2 outline-none' />
                                </div>
                            </div>
                            <div className='flex flex-col mt-5'>
                                    <label htmlFor="msg" className='text-[12.5px] font-poppins  text-[#777777] mb-[6px]'>Message*</label>
                                    <textarea id="msg" name="w3review" rows="10" placeholder='' className='border-[1px] border-[#77777738] rounded-[4px] p-2 outline-none'/>
                                    {/* <input type="number" id='phone' placeholder='' className='border-[1px] border-[#77777738] rounded-[4px] p-2 outline-none' /> */}
                                </div>
                                <div className=' mt-5'>
                                <button className='bg-primary hover:bg-[#00a1f2] text-white rounded-[4px] px-7 py-4 text-[11.2px] uppercase font-poppins font-semibold tracking-tight'>Send message</button>
                            </div>
                        </form>
                    </div>
                    <div className="my-col-2">
                        <div className=''>
                            <h3 className='text-[19px] font-poppins font-semibold  tracking-tighter text-[#212529]'>Our <strong>Office</strong></h3>
                            <ul>
                                <li className='text-[#777] mt-3 leading-7 text-[14px] flex'> <MdLocationPin size={22} className="text-primary mr-3 mt-1 border-[1px] border-primary rounded-full p-1" /><strong className='text-[#000]'>Address: </strong> &nbsp; 626 RXR Plaza Uniondale, NY 11556</li>
                                <li className='text-[#777] mt-3 leading-7 text-[14px] hover:text-white cursor-pointer flex'> <FaPhoneAlt size={22} className="text-primary mr-3 mt-1 border-[1px] border-primary rounded-full p-1" /><strong className='text-[#000]'>Phone: </strong> &nbsp; <Link href="tel:(800) 500-8117" className='text-primary hover:text-[#0099e6] hover:underline'>(800) 500-8117</Link></li>
                                <li className='text-[#777] mt-3 leading-7 text-[14px] hover:text-white cursor-pointer flex'> <MdEmail size={22} className="text-primary mr-3 mt-1 border-[1px] border-primary rounded-full p-1" /><strong className='text-[#000]'>Email: </strong> &nbsp; <Link href="mailto:info@medsnexus.com" className='text-primary hover:text-[#0099e6] hover:underline'> info@thecredentialing.com</Link></li>
                            </ul>
                        </div>
                        <div className='my-16'>
                            <h3 className='text-[19px] font-poppins font-semibold  tracking-tighter text-[#212529]'>Business <strong>Hours</strong></h3>
                            <p className='text-[14px] font-poppins  text-[#777777] flex mt-2'>< GoClock size={16} className='mr-3 mt-[3px]' /> Monday - Friday - 9am to 6pm</p>

                        </div>
                        <div>
                            <h3 className='text-[19px] font-poppins font-semibold  tracking-tighter text-[#212529]'>Get in <strong>Touch</strong></h3>
                            <p className='text-[17px] font-poppins  text-[#777777] tracking-tighter font-light mt-2'>Customer contentment is our top priority and the heart of our business philosophy. We give value to our customers and are dedicated to building long-lasting relationships to ensure they are happy and have a positive experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
