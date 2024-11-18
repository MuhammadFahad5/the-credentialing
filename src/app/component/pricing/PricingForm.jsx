'use client'
import React from 'react'
import { Select, Input, SelectProps } from "antd";
import './pricingFeature.css'

const PricingForm = () => {
 
  const mulitpleOptions = [
    {
      value: 'Abdominal Radiologist',
      label: 'Abdominal Radiologist',
    },
    {
      value: 'Acupuncturist',
      label: 'Acupuncturist',
    },
    {
      value: 'Acute Care',
      label: 'Acute Care Nurse Practitioner (Adult/Gerontology)',
    },
    {
      value: 'Addiction Specialist',
      label: 'Addiction Specialist',
    },
    {
      value: 'Adult Nurse Practitioner',
      label: 'Adult Nurse Practitioner',
    },
    {
      value: 'Allergist',
      label: 'Allergist',
    },
    {
      value: 'Audiologist',
      label: 'Audiologist',
    },
    {
      value: 'Behavioral Analyst',
      label: 'Behavioral Analyst',
    },
  ]

  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };
  return (
    <section className='mt-20 pricing-form-section'>
      <div className="my-container">
        <div className="my-row">
          <div className='my-col '>
            <h2 className='text-[#212529] font-poppins text-[20px] font-bold tracking-tighter text-center pb-5'>The Credentialing Compare plans and Pricing</h2>
          </div>
          <div className='my-col md:w-[62%] mx-auto border-[1px] !p-7 rounded-2xl'>
            <h3 className='text-[#212529] font-poppins text-[20px] font-semibold tracking-tighter text-center pb-4 '>Plan & Pricing</h3>
            <hr />
            <form action="" className='py-3'>
              <div className='py-3'>
                <Select
                  mode="multiple"
                  allowClear
                  placeholder='Select Speciality'
                  id=''
                  className='w-full'
                  options={mulitpleOptions}
                  onChange={handleChange}
                  maxTagCount='responsive'
                />
              </div>
              <div className='py-3'>
                {/* <input type="number" className='w-full border-[1px] rounded-lg ' /> */}
                <Input type='number' placeholder="Number of Providers" className='p-[7px]' />
              </div>
              <div className='py-3'>
                <Input type='number' placeholder="Number of Applications" className='p-[7px]'/>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PricingForm
