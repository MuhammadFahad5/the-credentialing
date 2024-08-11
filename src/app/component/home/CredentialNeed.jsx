import React from 'react'
import Image from 'next/image'
import credentialing_need_home from '../../../../public/home/credentialing_need_home.png'
import { FaCaretRight } from "react-icons/fa";


const CredentialNeed = () => {
    return (
        <section className='bg-[#f4f4f4] py-16'>
            <div className="my-container">
                <div className="my-row">
                    <div className='w-full md:w-[30%] p-3'>
                        <Image
                            src={credentialing_need_home}
                            alt="when need credentialing"
                            width={350}
                            height={430}
                            className='w-full'
                        />

                    </div>
                    <div className='w-full md:w-[70%] p-3'>
                        <div className='md:pl-16'>
                            <h3 className="text-[22px] md:text-[26px] text-[#222] mb-5 font-[400] tracking-tighter">
                                <span className="font-[900]">When Do</span> You need Credentialing
                                Services
                            </h3>
                            <ul>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Setting up on a New Practice Journey</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Transitioning Between Physician Practice Groups</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" />Exploring New Affiliations</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Enrollment with New Payers</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Ongoing Credentialing Management</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CredentialNeed
