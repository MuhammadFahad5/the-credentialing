"use client"
import React from 'react'
import Image from 'next/image'
import do_dont_home from '../../../../public/home/do-dont-home.png'
import { IoIosCheckmark } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import useMediaQuery from '@/app/globalComponents/useMediaQuery'
import { motion } from "framer-motion";

const CredentialDoDont = () => {
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    return (
        <section className='back-do-dont py-16'>
            <div className="my-container lg:max-w-[1440px]">
                <div className="my-row">
                    <motion.div
                        initial={isDesktop?{ opacity: 0, x: -40 }:{}}
                        whileInView={isDesktop?{ opacity: 1, x: 0 }:{}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='w-full md:w-[60%] bg-white p-7 rounded-md order-2 md:order-1'>
                        <div className="">
                            <h2 className="font-bold text-[28px] md:text-[36px] text-[#212529] lg:mr-16 mb-5">
                                DOs & DONT
                            </h2>
                        </div>
                        <div className="flex flex-wrap w-full row-do-dont">
                            <div className='w-full sm:w-[50%]'>
                                <div className="bg-primary w-full flex justify-center items-center px-[16px] py-[24px]">
                                    <h3 className="info-text text-white !text-[20px]">DOs</h3>
                                </div>

                                <ul className=" leading-7 md:leading-9 py-2">

                                    <li className="list-do-dont tick-do-dont"> <span><IoIosCheckmark size={30} className="text-green-600" /></span> Master digital credentialing</li>

                                    <li className="list-do-dont tick-do-dont"> <span><IoIosCheckmark size={30} className="text-green-600" /></span>Implement blockchain for secure</li>

                                    <li className="list-do-dont tick-do-dont"> <span><IoIosCheckmark size={30} className="text-green-600" /></span>Leverage AI for document parsing</li>

                                    <li className="list-do-dont tick-do-dont"> <span><IoIosCheckmark size={30} className="text-green-600" /></span>Prioritize cybersecurity vigilance</li>

                                </ul>
                            </div>
                            <div className='w-full sm:w-[50%]'>
                                <div className="bg-[#97643D] w-full flex justify-center items-center px-[16px] py-[24px]">
                                    <h3 className="info-text text-white !text-[20px]">DONT</h3>
                                </div>
                                <ul className="leading-7 md:leading-9 py-2">

                                    <li className="list-do-dont cross-do-dont"> <span><RxCross2 size={16} className="text-[#e63946]" /></span> Resist digital transformation</li>

                                    <li className="list-do-dont cross-do-dont"> <span><RxCross2 size={16} className="text-[#e63946]" /></span> Underestimate data security</li>

                                    <li className="list-do-dont cross-do-dont"> <span><RxCross2 size={16} className="text-[#e63946]" /></span> Rely solely on manual verification</li>

                                    <li className="list-do-dont cross-do-dont"> <span><RxCross2 size={16} className="text-[#e63946]" /></span> Overlook compliance with healthcare IT standards</li>

                                </ul>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={isDesktop?{ opacity: 0, x: -40 }:{}}
                        whileInView={isDesktop?{ opacity: 1, x: 0 }:{}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='w-full md:w-[40%] order-1 md:order-2 mb-10 md:mb-0'>
                        <Image
                            src={do_dont_home}
                            alt="DO & Dont"
                            width={460}
                            height={430}
                            className='w-full md:w-[85%] mx-auto md:ml-auto'
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default CredentialDoDont