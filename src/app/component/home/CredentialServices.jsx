import React from 'react'

const CredentialServices = ({no}) => {
    return (
        <section className='py-16'>
            <div className="my-container">
                <div className="my-row">
                    <div className="my-col">
                        <div className='md:w-[84%] mx-auto'>
                            <h2 className="font-bold text-[#222] text-[39px] md:text-[42px] mb-5 text-center tracking-tighter uppercase">
                               {no==='1'?'SERVICES WE OFFER':null}
                            </h2>
                            <h2 className="font-bold text-[#222] text-[29px] md:text-[32px] mb-5 text-center tracking-tighter">
                                Commercial Insurance Credentialing
                            </h2>
                            <p className="font-poppins text-[#777] text-[17px] text-center opacity-90  leading-8">
                            {no==='1'?
                            ' We simplify the complex process of getting healthcare providers credentialed with commercial insurance companies. Our services encompass completing applications, document gathering, follow-up, and issue resolution. We also offer ongoing support for credential maintenance and compliance with ever-changing requirements.'
                            :
                            `Get government credentialed quickly and easily with our comprehensive services. We'll take the stress out of the process, from application to approval and beyond. Let us handle the paperwork and red tape, so you can focus on what you do best providing quality care to your patients.`
                            }
                                 </p>
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
                    </div>
                    <div className="my-col-4 ">
                        <div className='our-services-home  our-services-home-css'>
                            <h4 className="text-[#222] mb-5 font-bold text-[19px] md:text-[21px] font-poppins tracking-tighter leading-tight">

                                Medical Credentialing Services
                            </h4>
                            <p className="font-poppins text-[#777] text-[14px] font-[300] tracking-tighter leading-6"> We offer comprehensive Medical Credentialing Services dedicated to simplifying and enhancing the often complex and time-consuming credentialing process for healthcare providers. </p>

                        </div>
                    </div>
                    <div className="my-col !pt-0">
                        <button className="w-[170px] p-4 rounded-none bg-primary text-white hover:bg-[#0099e6]">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CredentialServices
