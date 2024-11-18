"use client"
import React from 'react'
import Image from 'next/image'
import negotiation_home from '../../../../public/home/negotiation-home.png'
import useMediaQuery from '@/app/globalComponents/useMediaQuery'
import { motion } from "framer-motion";

const CredentialNegotiation = () => {
    const isDesktop = useMediaQuery('(min-width: 1280px)');
    return (
        <section className='back-credential-negotiation py-16'>
            <div className="my-container">
                <div className="my-row justify-between">
                    <motion.div
                        initial={isDesktop?{ opacity: 0, x: -40 }:{}}
                        whileInView={isDesktop?{ opacity: 1, x: 0 }:{}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='my-col md:w-[60%] order-2 md:order-1'>
                        <h2 className="font-bold text-[#222] text-[29px] md:text-[32px] mb-5 tracking-tighter">
                            Insurance Contract Rate Negotiations
                        </h2>
                        <motion.p
                            initial={isDesktop?{ opacity: 0, y: 40 }:{}}
                            whileInView={isDesktop?{ opacity: 1, y: 0 }:{}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-poppins text-[#777] text-[15.5px] md:text-[17px] leading-7 md:leading-8 opacity-90">
                            We strive for high reimbursement rates, reduced administrative burdens, and effective dispute resolution. We're well-versed in value-based care contract negotiations to enhance care quality and increase revenue. Our comprehensive services include market analysis for fair rates, tailored negotiation strategies, contract drafting, negotiation management, and ongoing guidance.
                        </motion.p>
                        {/* <button className="w-[170px] p-4 mt-6 rounded-none bg-primary text-white hover:bg-[#0099e6]">
                            LEARN MORE
                        </button> */}
                    </motion.div>
                    <motion.div
                        initial={isDesktop?{ opacity: 0, x: -40 }:{}}
                        whileInView={isDesktop?{ opacity: 1, x: 0 }:{}}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className='my-col md:w-[35%] mb-6 md:mb-0 order-1 md:order-2'>
                        <Image
                            src={negotiation_home}
                            alt="Contract rate Negotiation"
                            width={350}
                            height={430}
                            className='w-full'
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CredentialNegotiation