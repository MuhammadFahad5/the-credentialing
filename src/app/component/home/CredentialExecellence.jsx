"use client"
import React from 'react'
import Image from 'next/image'
import Excellence_home_1 from '../../../../public/home/excellence_home_1.png'
import Excellence_home_2 from '../../../../public/home/Excellence_home_2.png'
import Excellence_home_3 from '../../../../public/home/Excellence_home_3.png'
import Excellence_home_4 from '../../../../public/home/Excellence_home_4.png'
import useMediaQuery from '@/app/globalComponents/useMediaQuery'
import { motion } from "framer-motion";

const CredentialExecellence = () => {
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    return (
        <section className='py-16'>
            <div className="my-container">
                <div className="my-row">
                    <div className="my-col">
                        <div className='md:w-[84%] mx-auto'>
                            <motion.h2
                                initial={isDesktop?{ opacity: 0, y: 70 }:{}}
                                whileInView={isDesktop?{ opacity: 1, y: 0 }:{}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="font-bold text-[#222] text-[29px] md:text-[32px] mb-5 text-center tracking-tighter">
                                Credentialing Excellence Guaranteed
                            </motion.h2>
                            <motion.p
                                initial={isDesktop?{ opacity: 0, y: 70 }:{}}
                                whileInView={isDesktop?{ opacity: 1, y: 0 }:{}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="font-poppins text-[#777] text-xl text-center font-[300] tracking-tighter leading-7 md:leading-8"> Credentialing ensures that healthcare providers are properly recognized and authorized by insurance companies, guaranteeing a smooth and accurate reimbursement system. At TheCredentialing, were your dedicated partners in the provider credentialing process helping you keep pace with the fastly progressing healthcare industry and stay ahead of the competition. </motion.p>
                        </div>

                    </div>
                </div>
            </div>
            <div
                className='back-container-excellence'>
                <div className="my-container">
                    <div className="my-row  relative">
                        <span className='excellence-sun'></span>
                        <span className='excellence-cloud'></span>
                        <div className='w-[10%] xl:w-[8%]'></div>
                        <div className='w-full lg:w-[17%]'>
                            <div className='xl:mx-4 flex justify-center'>
                                <Image src={Excellence_home_1} alt="speciality image" width={170} height={170} className='w-full  max-w-[165px] border-2 p-1 rounded-full' />
                            </div>

                            <p className="font-shadow text-primary text-[25.2px] text-center font-[400] tracking-wide mt-4 mb-5">ASSESSMENT</p>

                        </div>
                        <div className='w-full lg:w-[17%] lg:mb-14'>
                            <div className=' flex justify-center  xl:mx-4 '>
                                <Image src={Excellence_home_2} alt="speciality image" width={170} height={170} className='w-full max-w-[165px]  border-2 p-1 rounded-full' />
                            </div>
                            <p className="font-shadow text-primary text-[25.2px] font-[400] tracking-wide mt-4 mb-5 text-center">COORDINATION</p>
                        </div>
                        <div className='w-full lg:w-[17%]'>
                            <div className=' flex justify-center xl:mx-4'>
                                <Image src={Excellence_home_3} alt="speciality image" width={170} height={170} className='w-full max-w-[165px] border-2 p-1 rounded-full' />
                            </div>
                            <p className="font-shadow text-primary text-[25.2px]  font-[400] tracking-wider mt-4 mb-5 text-center">VALIDATION</p>
                        </div>
                        <div className='lg:w-[5%]'></div>
                        <div className='w-full lg:w-[34%]'>
                            <div className='border-2 p-1 rounded-full xl:mx-4 max-w-[385px] mx-auto'>
                                <Image src={Excellence_home_4} alt="speciality image" width={338} height={338} className='w-full circle-animate' />
                            </div>
                            <p className="font-shadow text-primary text-[30.2px] font-[400] tracking-wide mt-4 mb-5 text-center">OUR CLIENTS</p>
                        </div>
                        <div className='xl:w-[2%]'></div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CredentialExecellence
