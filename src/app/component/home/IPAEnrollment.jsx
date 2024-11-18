"use client"
import React from 'react'
import Image from 'next/image'
import ipa_enrollment from '../../../../public/home/ipa-enrollment-home.png'
import useMediaQuery from '@/app/globalComponents/useMediaQuery'
import { motion } from "framer-motion";

const IPAEnrollment = () => {
  const isDesktop = useMediaQuery('(min-width: 1280px)');
  return (
    <section className='back-ipa-enrollment py-16'>
      <div className="my-container">
        <div className="my-row">
          <motion.div
            initial={isDesktop?{ opacity: 0, x: 40 }:{}}
            whileInView={isDesktop?{ opacity: 1, x: 0 }:{}}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="my-col-2 flex justify-center">
            <Image
              src={ipa_enrollment}
              alt="IPA Enrollment"
              width={350}
              height={430}
              className='w-full max-w-[300px]'
            />
          </motion.div>
          <motion.div
            initial={isDesktop?{ opacity: 0, x: 40 }:{}}
            whileInView={isDesktop?{ opacity: 1, x: 0 }:{}}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="my-col-2">
            <h2 className="font-bold text-[#222] text-[29px] md:text-[32px] mb-5 tracking-tighter">

              IPA Enrollment
            </h2>
            <motion.p
              initial={isDesktop?{ opacity: 0, y: 40 }:{}}
              whileInView={isDesktop?{ opacity: 1, y: 0 }:{}}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-poppins text-[#777] text-[15.5px] md:text-[17px] leading-7 md:leading-8 opacity-90">
              We facilitate enrollment with Independent Physician Associations (IPA) for access to a wide patient and payer network. Our services cover IPA selection, application completion, document submission, follow-up, and issue resolution. We provide ongoing support to maintain IPA enrollment and compliance with updated standards.
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

export default IPAEnrollment