"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_174 from "../../../../../public/service/group-174.png";
import { IoMdArrowDropright } from "react-icons/io";
import PatnerSlide from "../../home/PatnerSlide"

const Revalidation = () => {
  return (
    <>
    <section className="overflow-x-hidden bg-[#f4f4f4]">
      <div className="my-container !pt-[50px]">
        <motion.div
          className="my-row !items-start	"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="my-col md:w-[33%]">
            <div>
              <Image
                src={Group_174}
                alt="Description of the image"
                width={356}
                height={425}
                className="my-[24px]"
              />
            </div>
          </div>
          <div className="my-col md:w-[67%] flex flex-col self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10">
                <strong className="font-extrabold leading-10 mr-1">
                  Revalidation and
                </strong>
                recredentialing are important for a number of reasons
              </h2>

              <div className="row md:flex pt-5 text-[17px] text-[#777] ml-[-5px] flex flex-col gap-3">
                <div className="col space-y-4">
                  <div className="flex items-start w-full gap-1 justify-between">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[20px] mt-1"
                    />
                    <p className="w-[95%]">
                      To ensure that healthcare providers have the necessary
                      skills and knowledge to provide high-quality care
                    </p>
                  </div>
                  <div className="flex items-start w-full gap-1 justify-between">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[20px] mt-1"
                    />
                    <p className="w-[95%]">To protect patients from harm</p>
                  </div>
                  <div className="flex items-start w-full gap-1 justify-between ">
                    {" "}
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[20px] mt-1"
                    />
                    <p className="w-[95%]">
                      To maintain compliance with regulatory requirements
                    </p>
                  </div>
                  <div className="flex items-start w-full gap-1 justify-between">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[20px] mt-1"
                    />
                    <p className="w-[95%]">To improve patient safety</p>
                  </div>
                  <div className="flex items-start w-full gap-1 justify-between">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[20px] mt-1"
                    />
                    <p className="w-[95%]">
                      To enhance the professional reputation of healthcare
                      providers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    <div className="my-container mb-5 "><PatnerSlide /></div>
    </>
  );
};

export default Revalidation;
