"use client"
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import useMediaQuery from '@/app/globalComponents/useMediaQuery'
import { motion } from 'framer-motion'

const DontSettle = () => {
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    return (
        <section className='h-[65vh] back-dontsettle-home py-16'>
            <div className="my-container h-full">
                <div className="my-row h-full">
                    <div className="my-col flex flex-col items-center justify-center text-center">

                        <motion.h1
                            initial={isDesktop ? { opacity: 0, y: 70 } : {}}
                            whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white uppercase text-[38px] lg:text-[46px] font-[700] tracking-tight leading-10 dontsettle-heading-bg">Don't Settle For ORDINARY</motion.h1>
                        <motion.p
                            initial={isDesktop ? { opacity: 0, y: 80 } : {}}
                            whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-[white] text-[16px] md:text-[17px]  opacity-70 mt-7 leading-7">Get your hands on high-quality credentialing services tailored to your practice needs.</motion.p>

                        <motion.button
                            initial={isDesktop ? { opacity: 0, y: 70 } : {}}
                            whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-12 bg-primary text-white rounded-md px-[48px] py-[20px] text-[14px] hover:bg-[#0099e6] border-b-[1px] border-[#0099e6] border-opacity-50">
                            <p className="flex justify-center items-center gap-2 uppercase font-[500]">Call us Now <FaArrowRight size={20} /></p>
                        </motion.button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default DontSettle
