
import { Button, Form, Select, Input } from "antd";

// import { SPECIOAL_OPTIONS } from "@/constants"; 
// import './contact-form.css'

export default function ContactForm() {

  let nameSelect = [
    {
      value: 'Abdominal Radiologist',
      label: 'Abdominal Radiologist',
    },
    {
      value: 'Audiologist',
      label: 'Audiologist',
    },
    {
      value: 'Allergist',
      label: 'Allergist',
    },
    {
      value: 'Clinical Intern',
      label: 'Clinical Intern',
    },
  ]
  return (
    <Form className="bg-primary w-full p-5 py-12 lg:py-14 rounded-md" >
      <div className="flex justify-center items-center flex-col pb-5">
        <h2 className="text-[25px] font-[600] text-white tracking-tighter">Get
          In Touch</h2>
        <p className="text-[14px] font-poppins text-[#fff] mb-4 text-wrap p-2 text-center font-[300] opacity-[0.7]">
          Lets start talking about getting you credentialed
        </p>
        <div className="flex flex-col gap-3 w-[100%]">
          <div className="flex justify-around items-center gap-3 flex-col lg:flex-row w-[90%] m-auto">
            <Input
              type="text"
              placeholder="Your Name..."
              name="name"
              size="large"
              className="rounded-[5px] w-full py-3 text-[14px] font-semibold font-poppins"

            />
            <Input type="phone" placeholder="Your Phone..." name="phone" size="large"
              className="rounded-[5px] w-full py-3 text-[14px] font-semibold font-poppins" />
          </div>

          <div className="flex justify-around items-center gap-3 flex-col lg:flex-row w-[90%] m-auto">
            <Input type="email" placeholder="Your Email..." name="email" size="large" className="w-full lg:w-[95%] rounded-[5px] py-3 text-[14px] font-semibold font-poppins" />
            <Select
              className='w-full !rounded-md h-[47px]'
              defaultValue="Select Speciality"
              name='status'
              // style={{
              //   width: "100%",
              //   display: "flex",
              //   alignItems: "center",
              //   background: "#f3f4f8"
              // }}
              allowClear
              options={nameSelect}
            />
          </div>
          <textarea
            className="rounded-[5px] px-3 py-3 h-32  outline-none w-[90%] m-auto text-[14px] font-normal font-poppins"
            placeholder="Your Message..."
            rows="4"
            //  cols="50"
          />
          <button className="border-none rounded-[5px] bg-[#212529] hover:bg-[#32383e] h-14 font-semibold text-[0.8rem] text-white w-[90%] m-auto mt-3">
            SUBMIT
          </button>
        </div>
      </div>
    </Form>
  )
}
