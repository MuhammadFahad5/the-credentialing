"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_177 from "../../../../../public/service/group-177.png";
import { IoMdArrowDropright } from "react-icons/io";

const Benefits = () => {
  return (
    <section className="overflow-x-hidden bg-[#f4f4f4]">
      <div className="my-container">
        <motion.div
          className="my-row !items-start	"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="my-col md:w-[62%] flex flex-col self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10">
                <strong className="font-extrabold	leading-10">
                  Benefits of{" "}
                </strong>
                 Our Services
              </h2>

              <div className="row md:flex pt-5 text-[17px] text-[#777] ml-[-5px] flex flex-col md:flex-row gap-3">
                <div className="col md:w-[50%] flex flex-col space-y-4">
                  <div className="flex items-start w-full gap-1 justify-between">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">Save time and hassle</p>
                  </div>
                  <div className="flex items-start w-full gap-1 justify-between">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">
                      Ensure compliance with the latest regulations and payer
                      requirements
                    </p>
                  </div>

                  <div className="flex items-start w-full gap-1 justify-between">
                    {" "}
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">
                      Maintain your credentials and billing privileges
                    </p>
                  </div>
                </div>
                <div className="col md:w-[50%] flex flex-col space-y-4">
                  <div className="flex items-start w-full gap-1 justify-between">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">Improve patient safety</p>
                  </div>
                  <div className="flex items-start w-full gap-1 justify-between">
                    <IoMdArrowDropright
                      size={20}
                      className="text-[#203993] w-[30px] mt-1"
                    />
                    <p className="w-[95%]">
                      Enhance your professional reputation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-col md:w-[38%]">
            <div>
              <Image
                src={Group_177}
                alt="Description of the image"
                width={408}
                height={326}
                className="my-[24px]"
              />
            </div>
          </div>
          <div className="my-col !py-[40px]">
            {" "}
            <hr />{" "}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
