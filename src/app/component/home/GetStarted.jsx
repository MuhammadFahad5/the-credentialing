import React from 'react'

const GetStarted = () => {
    return (
        <section className='bg-[#203993]'>
            <div className="my-container">
                <div className="my-row">
                    <div className="my-col flex flex-wrap justify-between">
                        <h2 className="font-poppins text-[20px] text-white text-wrap tracking-tighter font-[600] my-2">
                            Register With Top Insurance Companies with Help of
                            <span className="font-shadow text-[28px] font-medium"> The Credentialing</span>{" "}
                        </h2>
                        <button className="bg-[#212529] text-white border-none hero px-[24px] py-[16px]  rounded-md hover:bg-[#32383e] text-nowrap text-[14px] font-semibold">
                            Get Started Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetStarted
