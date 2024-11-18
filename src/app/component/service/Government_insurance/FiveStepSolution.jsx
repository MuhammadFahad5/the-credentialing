"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_117 from "../../../../../public/service/group-117.png";
import { IoMdArrowDropright } from "react-icons/io";

const FiveStepSolution = () => {
  return (
    <section className="overflow-x-hidden">
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
                src={Group_117}
                alt="Description of the image"
                width={348}
                height={323}
                className="my-[24px]"
              />
            </div>
          </div>
          <div className="my-col md:w-[67%] flex flex-col self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10">
                <strong className="font-extrabold	leading-10	">Five Step </strong>
                Solution for Government Credentialing
              </h2>
              <p className="text-sm text-[#777]">
                The steps involved in government credentialing vary depending on
                the specific program, but they typically include the following:
              </p>
              <div className="row md:flex pt-5 text-sm text-[#777] ml-[-5px]">
                <div className="col md:w-[50%]">
                  <div className="flex">
                    <IoMdArrowDropright size={20} />
                    <p>Application Initiation</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright size={20} />
                    <p>Background Assessment</p>
                  </div>

                  <div className="flex">
                    {" "}
                    <IoMdArrowDropright size={20} />
                    <p>Credentialing Triumph</p>
                  </div>
                </div>
                <div className="col md:w-[50%]">
                  <div className="flex">
                    <IoMdArrowDropright size={20} />
                    <p>Document Scrutiny</p>
                  </div>
                  <div className="flex">
                    <IoMdArrowDropright size={20} />
                    <p>On-Site Evaluation (if necessary)</p>
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

export default FiveStepSolution;
