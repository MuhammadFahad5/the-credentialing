"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_166 from "../../../../public/aboutus/group-166.png";
import { IoMdArrowDropright } from "react-icons/io";

const WhatCanYouVerify = () => {
  return (
    <section className="overflow-x-hidden bg-[#f4f4f4] mt-[60px]">
      <div className="my-container !pt-[50px]">
        <motion.div
          className="my-row !items-start	"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="my-col md:w-[33%] flex justify-center md:justify-start">
            <Image
              src={Group_166}
              alt="Description of the image"
              width={356}
              height={425}
              className="my-[24px]"
            />
          </div>
          <div className="my-col md:w-[67%] flex flex-col self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10 text-center md:text-start">
                <strong className="font-extrabold	leading-10	">What Can </strong>{" "}
                You Verify?
              </h2>

              <div className="row md:flex pt-5 text-[17px] text-[#777] ml-[-5px] flex flex-col md:flex-row gap-3 items-center md:align-start">
                <div className="col md:w-[50%] flex flex-col space-y-4">
                  <div className="flex items-start w-full gap-1 justify-between ">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">State Licenses</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">NPI Number</p>
                  </div>

                  <div className="flex">
                    {" "}
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">DEA Registration</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">Board Certifications</p>
                  </div>
                </div>
                <div className="col md:w-[50%] flex flex-col space-y-4 ml-[-20px]">
                  <div className="flex">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">SSA Death Master</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">OIG, SAM & OFAC</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">NPDB</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">NSC</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#777] pt-5">
                Our fast, accurate, and compliant verification process ensures
                that you can meet your credentialing requirements quickly and in
                an efficient manner.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatCanYouVerify;
