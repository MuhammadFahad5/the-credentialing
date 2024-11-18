"use client"
import React from 'react'
import Image from 'next/image'
import revalidation_home from '../../../../public/home/revalidation_home.png'
import useMediaQuery from '@/app/globalComponents/useMediaQuery'
import { motion } from 'framer-motion'

const CredentialingRevaliadtion = () => {
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  return (
    <section className='back-revalidation-home py-16'>
      <div className="my-container">
        <div className="my-row">
          <motion.div
            initial={isDesktop ? { opacity: 0, x: -40 } : {}}
            whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="my-col-2 md:w-[33%] flex justify-center">
            <Image
              src={revalidation_home}
              alt="Revalidation"
              width={350}
              height={430}
              className='w-full'
            />
          </motion.div>
          <motion.div
            initial={isDesktop ? { opacity: 0, x: -40 } : {}}
            whileInView={isDesktop ? { opacity: 1, x: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="my-col md:w-[67%]">
            <h2 className="font-bold text-[#222] text-[29px] md:text-[32px] mb-5 tracking-tighter">
              Revalidation and Recredentialing
            </h2>
            <motion.p
              initial={isDesktop?{ opacity: 0, y: 40 }:{}}
              whileInView={isDesktop?{ opacity: 1, y: 0 }:{}}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-poppins text-[#777] text-[15.5px] md:text-[17px] leading-7 md:leading-8 opacity-90">
              We assist healthcare providers in renewing and maintaining credentials, ensuring compliance with the latest regulations and payer requirements. Our services include deadline tracking, application assistance, documentation collection, follow-up, and issue resolution for hassle-free revalidation and recredentialing.
            </motion.p>
            {/* <button className="w-[170px] p-4 mt-6 rounded-none bg-primary text-white hover:bg-[#0099e6]">
              LEARN MORE
            </button> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CredentialingRevaliadtion
