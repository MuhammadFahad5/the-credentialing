"use client";
import React from "react";
import Image from "next/image";
import Group_120 from "../../../../../public/service/group-120.png";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import PatnerSlide from "../../home/PatnerSlide";

const JoinAwider = () => {
  return (
    <>
    <section className="overflow-x-hidden bg-[#f4f4f4]">
      <div className="my-container mb-5">
        <motion.div
          className="my-row !items-start py-[50px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="my-col md:w-[33%]">
            <div>
              <Image
                src={Group_120}
                alt="Description of the image"
                width={356}
                height={384}
                className="my-[24px]"
              />
            </div>
          </div>
          <div className="my-col md:w-[67%] self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[26px] mb-4 leading-[46PX]">
                <strong className="font-extrabold leading-10 pr-1">
                  Join a Wider
                </strong>
                Healthcare Network
              </h2>
              <p className="text-[25px] text-[#212529]">
                ENHANCE YOUR PRACTICE AND EXPAND YOUR REACH :
              </p>
              <div className="row pt-5 text-sm text-[#777] leading-6 ml-[-5px] flex flex-col gap-3">
                <div className="flex items-start w-full gap-1 justify-between">
                  <IoMdArrowDropright className="text-[#203993] w-[20px] mt-1" />
                  <p className="w-[95%]"> Access New Opportunities</p>
                </div>
                <div className="flex items-start w-full gap-1 justify-between">
                  <IoMdArrowDropright className="text-[#203993] w-[20px] mt-1" />
                  <p className="w-[95%]">Simplify the Process</p>
                </div>

                <div className="flex items-start w-full gap-1 justify-between">
                  {" "}
                  <IoMdArrowDropright className="text-[#203993] w-[20px] mt-1" />
                  <p className="w-[95%]">Professional Guidance</p>
                </div>

                <div className="flex items-start w-full gap-1 justify-between">
                  <IoMdArrowDropright className="text-[#203993] w-[20px] mt-1" />
                  <p className="w-[95%]">Ongoing Excellence</p>
                </div>
              </div>
              <p className="text-[25px] text-[#212529] pt-[45px]">
                TAKE THE NEXT STEP :
              </p>
              <p className="text-sm text-[#777] pt-[20px]">
                Enhance Your Practice with IPA Enrollment
              </p>
              <p className="text-sm text-[#777] pt-[30px]">
                Contact us today, and let us simplify the IPA enrollment
                process, so you can continue making a positive impact in the
                healthcare community
              </p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
    <div className="my-container mb-5 "><PatnerSlide /></div>
    </>
  );
};

export default JoinAwider;
