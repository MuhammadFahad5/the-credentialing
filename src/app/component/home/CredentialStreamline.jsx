"use client"
import React from 'react'
import credentialing_streamline_home from '../../../../public/home/credentialing_streamline_home.png'
import Image from 'next/image'
import { FaCaretRight } from "react-icons/fa";
import { motion } from "framer-motion";
import useMediaQuery from '@/app/globalComponents/useMediaQuery'

const CredentialStreamline = () => {
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    return (
        <section className=' py-16'>
            <div className="my-container">
                <div className="my-row">
                    <motion.div
                        initial={isDesktop?{ opacity: 0, x: -40 }:{}}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='w-full md:w-[60%] p-3'>
                        <div className=''>
                            <h3 className="text-[#222] mb-5 font-bold text-[32px] md:text-[35px] font-poppins tracking-tighter leading-tight">
                                STREAMLINING CREDENTIALING
                            </h3>
                            <ul>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Update & Oversight</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Progress Tracking</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" />Timely Submissions</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> CAQH Management</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Verification & Screening</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" />Deadline Management</li>

                            </ul>
                        </div>
                    </motion.div>
                    <div className='w-full md:w-[40%] p-3'>
                        <Image
                            src={credentialing_streamline_home}
                            alt="credentialing streamline"
                            width={320}
                            height={380}
                            className='w-full'
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CredentialStreamline
