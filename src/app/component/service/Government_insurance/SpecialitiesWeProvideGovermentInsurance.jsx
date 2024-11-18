"use client";
import React from "react";
import { motion } from "framer-motion";
import Group_76 from "../../../../../public/service/group-76.png";
import Group_75 from "../../../../../public/service/group-75.png";
import Group_77 from "../../../../../public/service/group-77.png";
import Group_74 from "../../../../../public/service/group-74.png";
import Image from "next/image";

const SpecialitiesWeProvideGovernmentInsurance = () => {
  return (
    <>
      <div className="my-col">
        <h1 className="text-[#212529] font-bold text-3xl mb-4 tracking-tighter">
          Specialities We Provide Government Insurance Credentialing Services
        </h1>
        <p className="text-[#777] leading-7 tracking-tighter	text-[19px] font-light">
          At TheCredentialing, we offer comprehensive government credentialing
          services for a wide range of healthcare providers. This includes but
          are not limited to the below.
        </p>
      </div>

      <div className="my-col md:w-[50%] lg:w-[25%]">
        <motion.div
          className=" bg-white border p-2 min-h-[260px] lg:min-h-[390px] xl:min-h-[360px]"
          style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: typeof window !== "undefined" && window.innerWidth < 1023 ? 0.5 : 0.5,
          }}
        >
          <div className=" flex justify-center">
            <Image
              src={Group_76}
              alt="Description of the image"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
            Mental Credentialing Services
          </h1>
          <p className="text-center text-sm text-[#777] p-4">
            We certify that your medical practice is in accordance with industry
            standards and regulatory requirements through our expertise in
            medical credentialing.
          </p>
        </motion.div>
      </div>

      <div className="my-col md:w-[50%] lg:w-[25%]">
        <motion.div
          className=" bg-white border p-2 min-h-[260px] lg:min-h-[390px] xl:min-h-[360px]"
          style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: typeof window !== "undefined" && window.innerWidth < 1023 ? 0.5 : 1,
          }}
        >
          <div className=" flex justify-center">
            <Image
              src={Group_75}
              alt="Description of the image"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
            Dental Credentialing Services
          </h1>
          <p className="text-sm	text-center text-[#777] p-4">
            We offer expedited dental credentialing services to help you get
            your new practice in-network quickly and start seeing patients.
          </p>
        </motion.div>
      </div>

      <div className="my-col md:w-[50%] lg:w-[25%]">
        <motion.div
          className=" bg-white border p-2 min-h-[260px] lg:min-h-[390px] xl:min-h-[360px]"
          style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: typeof window !== "undefined" && window.innerWidth < 1023 ? 0.5 : 1.5,
          }}
        >
          <div className=" flex justify-center">
            <Image
              src={Group_77}
              alt="Description of the image"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
            Mental Credentialing Services
          </h1>
          <p className="text-sm	text-center text-[#777] p-4">
            We understand the unique challenges that come with mental health
            credentialing, and we work with you to ensure that the process is as
            smooth and efficient as possible.
          </p>
        </motion.div>
      </div>

      <div className="my-col md:w-[50%] lg:w-[25%]">
        <motion.div
          className=" bg-white border p-2 min-h-[260px] lg:min-h-[390px] xl:min-h-[360px]"
          style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: typeof window !== "undefined" && window.innerWidth < 1023 ? 0.5 : 2,
          }}
        >
          <div className=" flex justify-center">
            <Image
              src={Group_77}
              alt="Description of the image"
              width={80}
              height={80}
            />
          </div>
          <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
            Vision Credentialing Services
          </h1>
          <p className="text-sm	text-center text-[#777] p-4">
            Ensure your vision practice is in compliance with industry standards
            and regulatory requirements by partnering with our experienced team
            of vision credentialing specialists.
          </p>
        </motion.div>
      </div>
      <div className="my-col my-[50px]">
        {" "}
        <hr />{" "}
      </div>
    </>
  );
};

export default SpecialitiesWeProvideGovernmentInsurance;
