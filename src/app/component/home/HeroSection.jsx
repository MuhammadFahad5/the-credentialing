import React from 'react'
import HomeForm from './homeForm'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section
            // style={{
            //     background:
            //         // "url('/home/credit-2.png')",
            //         "linear-gradient(rgba(0, 0, 0, 0.703), rgba(0, 0, 0, 0.777)) ,url(/home/credit-2.png')",
            //     backgroundPosition: "center",
            //     backgroundSize: "cover",
            //     // objectFit: "cover",
            // }}
            className='mt-[62px] sm:mt-[68px] md:mt-[76px] h-100% home-main-bg-image'>
            <div className='my-container '>
                <div className='my-row py-16'>
                    <div className="my-col-2 text-center">
                        <div className='flex justify-center items-center'>
                            <Image
                                src="/home/slide-title-border.png"
                                alt="heading border"
                                width={40}
                                height={10}
                                className='opacity-30 w-full max-w-[40px]'
                            />
                            <h2 className="text-[18px] md:text-[20px] text-white font-poppins font-[500] px-6 tracking-tighter">
                                WANT TO GET YOUR PRACTICE CREDENTIALED?
                            </h2>
                            <Image
                                src="/home/slide-title-border.png"
                                alt="heading border"
                                width={40}
                                height={10}
                                 className='opacity-30 w-full max-w-[40px]'
                            />
                        </div>
                        <h1 className="text-[46px] md:text-[3rem] leading-[3.1rem] font-poppins font-extrabold text-white my-1 px-0  lg:px-3 tracking-tighter mt-3">
                            Take a closer look at our extensive set of services
                        </h1>
                    </div>
                    <div className="my-col-2 ">
                        <div className='bg-[#203993] text-white flex items-center justify-center rounded-md'>
                            <HomeForm />
                        </div>
                    </div>

                </div>
                {/* <div className='my-row'>
                    <div className="my-col bg-">
                        
                    </div>

                </div> */}

            </div>
        </section>
    )
}

export default HeroSection
