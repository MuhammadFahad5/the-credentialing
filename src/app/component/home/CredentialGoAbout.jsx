import React from 'react'
import Image from 'next/image'
import credential_go_about from '../../../../public/home/credentialing_goAbout_home.png'
import { FaCaretRight } from "react-icons/fa";


const CredentialGoAbout = () => {
    return (
        <section className='py-16'>
            <div className="my-container">
                <div className="my-row">
                    <div className="my-col-2">
                        <Image
                            src={credential_go_about}
                            alt="Credential Go About"
                            width={320}
                            height={380}
                            className='w-[85%]'
                        />
                    </div>
                    <div className="my-col-2">
                        <div className=''>
                            <h3 className="text-[#222] mb-5 font-bold text-[32px] md:text-[35px] font-poppins tracking-tighter leading-tight">

                                HOW WE GO ABOUT CREDENTIALING?
                            </h3>
                            <ul>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Thorough Documentation</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Comprehensive Research Analysis</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" />Adherence to State Guidelines</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Alignment with Payer Guidelines</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" /> Verification & Screening</li>
                                <li className='home-list'> <FaCaretRight size={17} className="text-primary mr-4" />Successful Panel Opening</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CredentialGoAbout
