"use client"
import React from 'react'
import PatnerSlide from './PatnerSlide'

const SetsUsApart = () => {
    return (
        <section>
            <div className="my-container">
                <div className="my-row">
                    <div className="my-col">
                        <hr className='my-8' />
                        <h2 className="mt-16 text-[26px] md:text-[28px] text-[#222] tracking-tighter ">
                            WHAT SETS <span className="font-[800]">US APART</span>
                        </h2>
                    </div>
                </div>
                <div className="flex flex-wrap w-full">
                    <div className="my-col sm:w-[50%] lg:w-[33%] !pl-16">
                        <div className='pb-5'>
                            <h3 className="text-lg md:text-xl font-bold text-[#222] my-3 tracking-tighter">Expertise</h3>
                            <p className="text-[#777] text-[13px] md:text-[14px] leading-7">
                                Our in-depth industry knowledge ensures precision and compliance
                                in every aspect of credentialing.
                            </p>
                        </div>
                        <div className='pb-5'>
                            <h3 className="text-lg md:text-xl font-bold text-[#222] my-3 tracking-tighter">Dedication</h3>
                            <p className="text-[#777] text-[13px] md:text-[14px] leading-7">
                                We're committed to your success, working tirelessly to exceed your expectations and goals.
                            </p>
                        </div>
                        <div className='pb-5'>
                            <h3 className="text-lg md:text-xl font-bold text-[#222] my-3 tracking-tighter">Efficiency</h3>
                            <p className="text-[#777] text-[13px] md:text-[14px] leading-7">
                                We streamline the process, saving you time, reducing delays, and accelerating provider approvals.
                            </p>
                        </div>
                    </div>
                    <div className="my-col sm:w-[50%] lg:w-[33%] !pl-16">
                        <div className='pb-5'>
                            <h3 className="text-lg md:text-xl font-bold text-[#222] my-3 tracking-tighter">Pocket Friendly</h3>
                            <p className="text-[#777] text-[13px] md:text-[14px] leading-7">
                                We provide our services at a competitive rate of $149 per application.
                            </p>
                        </div>
                        <div className='pb-5'>
                            <h3 className="text-lg md:text-xl font-bold text-[#222] my-3 tracking-tighter">Proactive</h3>
                            <p className="text-[#777] text-[13px] md:text-[14px] leading-7">
                                Our team anticipates changes and needs, staying ahead of industry shifts and ensuring long-term success.
                            </p>
                        </div>
                        <div className='pb-5'>
                            <h3 className="text-lg md:text-xl font-bold text-[#222] my-3 tracking-tighter">Comprehensive</h3>
                            <p className="text-[#777] text-[13px] md:text-[14px] leading-7">
                                We handle initial credentialing, re-credentialing, and all related tasks with unparalleled thoroughness.
                            </p>
                        </div>
                    </div>
                    <div className="my-col lg:w-[34%]">
                        <div className="bg-[#f0eeeea2] p-1 rounded-md mt-5">
                            <h3 className="py-4 px-8 font-bold text-[16px] text-[#222] tracking-tighter">
                                A Gateway to Credentialing
                            </h3>
                            <div className="p-8 bg-white">
                                <p className="text-[#777] text-[13px] md:text-[14px] leading-7">
                                    Credentialing Services provide a gateway for your insurance to
                                    remove complexities, unlock new opportunities, maximize your
                                    revenue, and maintain your credentials through streamlining
                                    billing, secure reimbursement, negotiating strategies, and
                                    uninterrupted practice growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-row'>
                    <div className="my-col">
                        <hr className='my-12' />
                    </div>
                </div>
                <div className="my-row">
                    <div className='my-col md:max-w-[500px] lg:max-w-[550px] xl:max-w-[1050px] mx-auto'>
                        <h2 className="font-bold text-[30px] lg:text-[32px] text-center leading-relaxed tracking-tighter mb-6">
                            We're not the only ones{" "}
                            <span className="bg-primary px-6 py-2  text-white leading-normal">happy</span> about The
                            Credentialing Services
                        </h2>
                        <p className="text-primary font-light text-[15px] md:text-[17px] text-center">
                            Simple Words, Big Impact – Your Review Shapes Us.
                        </p>
                    </div>
                </div>
                <div className="my-row">
                    <div className="my-col">
                    <PatnerSlide/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SetsUsApart
