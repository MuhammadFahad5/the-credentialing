import React from 'react'
import './pricingFeature.css'
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

const PricingFeatures = () => {
    return (
        <section className='pb-16 pt-2'>
            <div className="my-container">
                <div className="my-row !items-start">
                    <div className="my-col-4 pricing-feature-col">
                        <div className='pricing-feature-box rounded-[20px] p-5 '>
                            <h3 className='text-[18px] font-poppins font-bold tracking-tighter my-3 '>Basic</h3>
                            <div className='flex'>
                                <span className='text-[22px] font-semibold mt-1 leading-none'>$</span>
                                <h4 className='text-[43px] font-poppins font-semibold leading-none'>199</h4>
                            </div>
                            <h6 className='text-[#777] text-[11.2px] uppercase -mt-1'>per Application</h6>
                            <button className=" bg-primary border text-[#ffff] font-poppins text-[10.5px] uppercase p-[10px] w-full rounded-lg my-5" href="/login">
                                Get Started
                            </button>
                            <h4 className='text-[18px] font-poppins font-semibold tracking-tighter'>Features Included:</h4>
                            <ul className='mt-6'>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />1-10 Apps</li>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />Bi-Weekly Reports</li>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />Free Cloud Access</li>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />Free EDI & ERA Setups</li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-col-4 pricing-feature-col">
                        <div className='pricing-feature-box rounded-[20px] p-5 relative'>
                            <div className='absolute bg-[#6d6d6d] top-0 right-0 rounded-tr-[20px] rounded-bl-[20px] py-2 pr-12 pl-6 font-poppins text-[#fff] text-[13px]'>Simple Pack</div>
                            <h3 className='text-[18px] font-poppins font-bold tracking-tighter my-3 '>Basic</h3>
                            <div className='flex'>
                                <span className='text-[22px] font-semibold mt-1 leading-none'>$</span>
                                <h4 className='text-[43px] font-poppins font-semibold leading-none'>179</h4>
                            </div>
                            <h6 className='text-[#777] text-[11.2px] uppercase -mt-1'>per Application</h6>
                            <button className=" bg-primary border text-[#ffff] font-poppins text-[10.5px] uppercase p-[10px] w-full rounded-lg my-5" href="/login">
                                Get Started
                            </button>
                            <h4 className='text-[18px] font-poppins font-semibold tracking-tighter'>Features Included:</h4>
                            <ul className='mt-6'>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />11-30 Apps</li>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />Weekly Updates</li>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />Bi-Weekly / Monthly Reports</li>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />Free Cloud Access</li>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />Free EDI & ERA Setups</li>
                                <li className='flex items-center text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' />Free EFTs Setup</li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-col-4 pricing-feature-col">
                        <div className='pricing-feature-box rounded-[20px] p-5 relative'>
                        <div className='absolute bg-[#ff9100] top-0 right-0 rounded-tr-[20px] rounded-bl-[20px] py-2 pr-12 pl-6 font-poppins text-[#fff] text-[13px]'>Simple Pack</div>

                            <h3 className='text-[18px] font-poppins font-bold tracking-tighter my-3 '>Basic</h3>
                            <div className='flex'>
                                <span className='text-[22px] font-semibold mt-1 leading-none'>$</span>
                                <h4 className='text-[43px] font-poppins font-semibold leading-none'>199</h4>
                            </div>
                            <h6 className='text-[#777] text-[11.2px] uppercase -mt-1'>per Application</h6>
                            <button className=" bg-primary border text-[#ffff] font-poppins text-[10.5px] uppercase p-[10px] w-full rounded-lg my-5" href="/login">
                                Get Started
                            </button>
                            <h4 className='text-[18px] font-poppins font-semibold tracking-tighter'>Features Included:</h4>
                            <ul className='mt-6'>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>31 + Apps (Limit to 199 Apps)</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Weekly Updates</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Bi-Weekly / Monthly Reports</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free Cloud Access</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free EDI & ERA Setups</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free EFTs Setup</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free Attestation & Re -Validation</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free Web-Portals Sign-ups</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-col-4 pricing-feature-col">
                        <div className='pricing-feature-box rounded-[20px] p-5 relative'>
                        <div className='absolute bg-[#ff9100] top-0 right-0 rounded-tr-[20px] rounded-bl-[20px] py-2 pr-12 pl-6 font-poppins text-[#fff] text-[13px]'>Simple Pack</div>

                            <h3 className='text-[18px] font-poppins font-bold tracking-tighter my-3 '>Basic</h3>
                            <div className='flex'>
                                <span className='text-[22px] font-semibold mt-1 leading-none'>$</span>
                                <h4 className='text-[43px] font-poppins font-semibold leading-none'>199</h4>
                            </div>
                            <h6 className='text-[#777] text-[11.2px] uppercase -mt-1'>per Application</h6>
                            <button className=" bg-primary border text-[#ffff] font-poppins text-[10.5px] uppercase p-[10px] w-full rounded-lg my-5" href="/login">
                                Get Started
                            </button>
                            <h4 className='text-[18px] font-poppins font-semibold tracking-tighter'>Features Included:</h4>
                            <ul className='mt-6'>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Starts from 99 Apps without any limitations</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>24/7 Support</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Daily / Weekly Updates</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Bi-Weekly / Monthly / Quarterly Reports</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Customize Reporting</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free Cloud Access</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free EDI & ERA Setups</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free EFTs Setup</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free Attestation & Re -Validation</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free Web-Portals Sign-ups</span></li>
                                <li className='flex items-start text-[13px] text-[#212529] my-3'><FaCircleCheck size={19} className='mr-3 text-[#212529]' /><span className='w-[85%]'>Free Re-determinations</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingFeatures
