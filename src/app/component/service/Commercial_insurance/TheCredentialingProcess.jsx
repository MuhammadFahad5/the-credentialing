"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_94 from "../../../../../public/service/group-94.png";
import { IoMdArrowDropright } from "react-icons/io";
import HowWeSimplify from "./HowWeSimplify";

const TheCredentialingProcess = () => {
  return (
    <section className="overflow-x-hidden bg-[#f4f4f4]">
      <div className="my-container">
        <motion.div
          className="my-row !items-start "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="my-col md:w-[33%]">
            <div>
              <Image
                src={Group_94}
                alt="Description of the image"
                width={348}
                height={323}
                className="my-[24px]"
              />
            </div>
          </div>
          <div className="my-col md:w-[67%] md:pt-[50px] self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10">
                <strong className="font-extrabold leading-10 mr-1">
                  The Credentialing
                </strong>
                Process
              </h2>
              <div className="row md:flex text-[17px] text-[#777] ml-[-5px]">
                <div className="col md:w-[50%] flex flex-col gap-3">
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Insurances</p>
                  </div>
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Boarded</p>
                  </div>

                  <div className="flex gap-1">
                    {" "}
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Recommended</p>
                  </div>
                  <div className="flex gap-1">
                    {" "}
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Medical Oversight</p>
                  </div>
                </div>
                <div className="col md:w-[50%] flex flex-col gap-3">
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Disciplinary</p>
                  </div>
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Affiliations</p>
                  </div>
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Interview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="my-col my-[40px]">
          {" "}
          <hr />{" "}
        </div>
      </div>
      <HowWeSimplify />
    </section>
  );
};

export default TheCredentialingProcess;
