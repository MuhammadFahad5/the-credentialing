"use client"

import React from 'react'
import useMediaQuery from '@/app/globalComponents/useMediaQuery'
import { motion } from "framer-motion";

const CredentialServices = ({ no }) => {
    const isDesktop = useMediaQuery('(min-width: 1280px)');

    const credentialServicesData_1 = [
        {
            title: 'Medical Credentialing Services',
            description: 'We offer comprehensive Medical Credentialing Services dedicated to simplifying and enhancing the often complex and time-consuming credentialing process for healthcare providers.',
        },
        {
            title: 'Dental Credentialing Services',
            description: 'Our Dental Credentialing Services leave no room for compromise and are committed to guaranteeing that dental professionals achieve effective and spotless credentialing.',
        },
        {
            title: 'Vision Credentialing Services',
            description: 'When it comes to vision care providers, precision is the most redeeming quality. We offer specialized expertise in securing your credentialing, leaving no room for any error to occur.',
        },
        {
            title: 'Mental Credentialing Services',
            description: 'We have a seasoned team of professionals, capable of meeting the distinctive requirements of mental health credentialing, guaranteeing that your practice achieves full accreditation and recognition.',
        },
    ]

    const credentialServicesData_2 = [
        {
            title: 'Medical Credentialing Services',
            description: 'We certify that your medical practice is in accordance with industry standards and regulatory requirements through our expertise in medical credentialing.',
        },
        {
            title: 'Dental Credentialing Services',
            description: 'Our Dental Credentialing Services leave no room for compromise and are committed to guaranteeing that dental professionals achieve effective and spotless credentialing.',
        },
        {
            title: 'Vision Credentialing Services',
            description: 'When it comes to vision care providers, precision is the most redeeming quality. We offer specialized expertise in securing your credentialing, leaving no room for any error to occur.',
        },
        {
            title: 'Mental Credentialing Services',
            description: 'We have a seasoned team of professionals, capable of meeting the distinctive requirements of mental health credentialing, guaranteeing that your practice achieves full accreditation and recognition.',
        },
    ]
    return (
        <section className='py-16'>
            <div className="my-container">
                <div className="my-row !items-start">
                    <div className="my-col">
                        <div className='md:w-[84%] mx-auto'>
                            <motion.h2
                                initial={isDesktop ? { opacity: 0, y: 70 } : {}}
                                whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="font-bold text-[#222] text-[39px] md:text-[42px] mb-5 text-center tracking-tighter uppercase">
                                {no === '1' ? 'SERVICES WE OFFER' : null}
                            </motion.h2>
                            <h2 className="font-bold text-[#222] text-[29px] md:text-[32px] mb-5 text-center tracking-tighter">
                                Commercial Insurance Credentialing
                            </h2>
                            <motion.p
                                initial={isDesktop ? { opacity: 0, y: 70 } : {}}
                                whileInView={isDesktop ? { opacity: 1, y: 0 } : {}}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="font-poppins text-[#777] text-[17px] text-center opacity-90  leading-8">
                                {no === '1' ?
                                    ' We simplify the complex process of getting healthcare providers credentialed with commercial insurance companies. Our services encompass completing applications, document gathering, follow-up, and issue resolution. We also offer ongoing support for credential maintenance and compliance with ever-changing requirements.'
                                    :
                                    `Get government credentialed quickly and easily with our comprehensive services. We'll take the stress out of the process, from application to approval and beyond. Let us handle the paperwork and red tape, so you can focus on what you do best providing quality care to your patients.`
                                }
                            </motion.p>
                        </div>

                    </div>
                    {
                        no === '1' ?

                            credentialServicesData_1.map((item, index) => {
                                return (
                                    <div className="my-col-4 " key={index}>
                                        <div className='our-services-home  our-services-home-css md:min-h-[245px] lg:min-h-[365px] xl:min-h-[300px]'>
                                            <h4 className="text-[#222] mb-5 font-bold text-[19px] md:text-[21px] font-poppins tracking-tighter leading-tight">
                                                {item.title}
                                            </h4>
                                            <p className="font-poppins text-[#777] text-[14px] font-[300] tracking-tighter leading-6"> {item.description} </p>

                                        </div>
                                    </div>
                                )
                            })
                            :
                            credentialServicesData_2.map((item, index) => {
                                return (
                                    <div className="my-col-4 " key={index}>
                                        <div className='our-services-home  our-services-home-css md:min-h-[245px] lg:min-h-[365px] xl:min-h-[300px]'>
                                            <h4 className="text-[#222] mb-5 font-bold text-[19px] md:text-[21px] font-poppins tracking-tighter leading-tight">

                                                {item.title}
                                            </h4>
                                            <p className="font-poppins text-[#777] text-[14px] font-[300] tracking-tighter leading-6"> {item.description} </p>

                                        </div>
                                    </div>
                                )
                            })
                    }
                    {/* <div className="my-col-4 ">
                        <div className='our-services-home  our-services-home-css'>
                            <h4 className="text-[#222] mb-5 font-bold text-[19px] md:text-[21px] font-poppins tracking-tighter leading-tight">

                                Medical Credentialing Services
                            </h4>
                            <p className="font-poppins text-[#777] text-[14px] font-[300] tracking-tighter leading-6"> We offer comprehensive Medical Credentialing Services dedicated to simplifying and enhancing the often complex and time-consuming credentialing process for healthcare providers. </p>

                        </div>
                    </div>
                    <div className="my-col-4 ">
                        <div className='our-services-home  our-services-home-css'>
                            <h4 className="text-[#222] mb-5 font-bold text-[19px] md:text-[21px] font-poppins tracking-tighter leading-tight">

                                Medical Credentialing Services
                            </h4>
                            <p className="font-poppins text-[#777] text-[14px] font-[300] tracking-tighter leading-6"> We offer comprehensive Medical Credentialing Services dedicated to simplifying and enhancing the often complex and time-consuming credentialing process for healthcare providers. </p>

                        </div>
                    </div>
                    <div className="my-col-4 ">
                        <div className='our-services-home  our-services-home-css'>
                            <h4 className="text-[#222] mb-5 font-bold text-[19px] md:text-[21px] font-poppins tracking-tighter leading-tight">

                                Medical Credentialing Services
                            </h4>
                            <p className="font-poppins text-[#777] text-[14px] font-[300] tracking-tighter leading-6"> We offer comprehensive Medical Credentialing Services dedicated to simplifying and enhancing the often complex and time-consuming credentialing process for healthcare providers. </p>

                        </div>
                    </div>
                    <div className="my-col-4 ">
                        <div className='our-services-home  our-services-home-css'>
                            <h4 className="text-[#222] mb-5 font-bold text-[19px] md:text-[21px] font-poppins tracking-tighter leading-tight">

                                Medical Credentialing Services
                            </h4>
                            <p className="font-poppins text-[#777] text-[14px] font-[300] tracking-tighter leading-6"> We offer comprehensive Medical Credentialing Services dedicated to simplifying and enhancing the often complex and time-consuming credentialing process for healthcare providers. </p>

                        </div>
                    </div> */}
                    {/* <div className="my-col !pt-0">
                        <button className="w-[170px] p-4 rounded-none bg-primary text-white hover:bg-[#0099e6]">
                            LEARN MORE
                        </button>
                    </div> */}
                </div>
            </div>
        </section >
    )
}

export default CredentialServices
