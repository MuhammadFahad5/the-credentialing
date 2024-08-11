import React from 'react'
import Image from 'next/image'
import ipa_enrollment from '../../../../public/home/ipa-enrollment-home.png'

const IPAEnrollment = () => {
  return (
    <section className='back-ipa-enrollment py-16'>
        <div className="my-container">
            <div className="my-row">
                <div className="my-col-2">
                <Image
                            src={ipa_enrollment}
                            alt="IPA Enrollment"
                            width={350}
                            height={430}
                            className='w-full'
                        />
                </div>
                <div className="my-col-2"></div>
            </div>
        </div>
    </section>
  )
}

export default IPAEnrollment