"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_124 from "../../../../../public/service/group-124.png";
import { IoMdArrowDropright } from "react-icons/io";

const OurComprehensive = () => {
  return (
    <section className="overflow-x-hidden bg-[#f4f4f4]">
      <div className="my-container">
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
                src={Group_124}
                alt="Description of the image"
                width={348}
                height={323}
                className="my-[24px]"
              />
            </div>
          </div>
          <div className="my-col md:w-[67%] flex flex-col self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[25px] mb-4 leading-10">
                <strong className="font-extrabold leading-10">
                  Our Comprehensive{" "}
                </strong>
                Services Includes
              </h2>
              <div className="row flex flex-col md:flex-row gap-3 pt-3 text-[17px] text-[#777] ml-[-5px]">
                <div className="col md:w-[50%] flex flex-col gap-3">
                  <div className="flex">
                    <IoMdArrowDropright size={20} className="text-[#203993] w-[30px] mt-1" />
                    <p className="w-[95%]">Market analysis for fair rates</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright size={20} className="text-[#203993] w-[30px] mt-1" />
                    <p className="w-[95%]">Tailored negotiation strategies</p>
                  </div>

                  <div className="flex">
                    {" "}
                    <IoMdArrowDropright size={20} className="text-[#203993] w-[30px] mt-1" />
                    <p className="w-[95%]">Contract drafting</p>
                  </div>
                </div>
                <div className="col md:w-[50%] flex flex-col gap-3">
                  <div className="flex">
                    <IoMdArrowDropright size={20} className="text-[#203993] w-[30px] mt-1" />
                    <p className="w-[95%]">Negotiation management</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright size={20} className="text-[#203993] w-[30px] mt-1" />
                    <p className="w-[95%]">Ongoing guidance</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright size={20} className="text-[#203993] w-[30px] mt-1" />
                    <p className="w-[95%]">Commercial Insurance Credentialing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurComprehensive;
