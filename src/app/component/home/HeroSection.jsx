"use client"
import React from 'react'
import HomeForm from './homeForm'
import Image from 'next/image'
import blue_line from '../../../../public/home/slide-blue-line-home.png'
import useMediaQuery from '@/app/globalComponents/useMediaQuery'
import { motion } from "framer-motion";

const HeroSection = () => {

    const isDesktop = useMediaQuery('(min-width: 1024px)');
    return (
        <section
            className='mt-[62px] sm:mt-[70px] md:mt-[80px] h-100% home-main-bg-image'>
            <div className='my-container '>
                <div className='my-row py-16'>
                    <div className="my-col-2 text-center">
                        <div className='flex justify-center items-center relative'>
                            <motion.div
                                initial={isDesktop ? { opacity: 0, x: 60 } : {}}
                                whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                                className='absolute z-10 top-4 right-12 w-[52px]'
                            >
                                <Image
                                    src={blue_line}
                                    alt="blue fly"
                                    width={52}
                                    height={8}
                                    className='w-full'
                                />

                            </motion.div>
                            <motion.div
                                initial={isDesktop ? { opacity: 0, x: -60 } : {}}
                                whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className='w-full max-w-[40px]'>
                                <Image
                                    src="/home/slide-title-border.png"
                                    alt="heading border"
                                    width={40}
                                    height={10}
                                    className='opacity-30 w-full max-w-[40px]'
                                />

                            </motion.div>


                            <motion.h2
                                initial={isDesktop ? { opacity: 0, y: -80 } : {}}
                                whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-[18px] md:text-[20px] text-white font-poppins font-[500] px-6 tracking-tighter">
                                WANT TO GET YOUR PRACTICE CREDENTIALED?
                            </motion.h2>
                            <motion.div
                                initial={isDesktop ? { opacity: 0, x: 60 } : {}}
                                whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className='w-full max-w-[40px]'
                            >
                                <Image
                                    src="/home/slide-title-border.png"
                                    alt="heading border"
                                    width={40}
                                    height={10}
                                    className='opacity-30 w-full max-w-[40px]'
                                />
                            </motion.div>

                        </div>
                        <motion.h1
                            initial={isDesktop ? { opacity: 0, scale: 1.5 } : {}}
                            whileInView={isDesktop ? { opacity: 1, scale: 1 } : {}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-[46px] md:text-[3rem] leading-[3.1rem] font-poppins font-extrabold text-white my-1 px-0  lg:px-3 tracking-tighter mt-3">
                            Take a closer look at our extensive set of services
                        </motion.h1>
                        <motion.p
                            initial={isDesktop ? { opacity: 0, x: -150 } : {}}
                            whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className=" text-[#777] mt-3 leading-7 text-[14px]">
                            Empowering Your Practice
                        </motion.p>
                    </div>
                    <div className="my-col-2 " >
                        <motion.div
                            initial={isDesktop ? { opacity: 0, x: 50 } : {}}
                            whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className='hero-inner-img bg-[#203993] text-white flex items-center justify-center rounded-md'
                        >
                            <HomeForm />

                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
