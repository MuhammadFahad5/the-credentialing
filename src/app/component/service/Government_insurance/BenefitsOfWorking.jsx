"use client";
import React from "react";
import Image from "next/image";
import Group_115 from "../../../../../public/service/group-115.png";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";
import PatnerSlide from "../../home/PatnerSlide";

const BenefitsOfWorking = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="my-container mb-5">
        <motion.div
          className="my-row !items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="my-col md:w-[33%]">
            <div>
              <Image
                src={Group_115}
                alt="Description of the image"
                width={348}
                height={368}
                className="my-[24px]"
              />
            </div>
          </div>
          <div className="my-col md:w-[67%] self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10">
                <strong className="font-extrabold leading-10 pr-1">
                  Benefits of
                </strong>
                Working with TheCredentialing
              </h2>
              <p className="text-sm text-[#777]">
                The steps involved in government credentialing vary depending on
                the specific program, but they typically include the following:
              </p>
              <div className="row pt-5 text-[17px] text-[#777] leading-6 ml-[-5px] flex flex-col gap-3">
                <div className="flex items-start w-full gap-1 justify-between">
                  <IoMdArrowDropright className="text-[#203993] w-[20px] mt-1" />
                  <p className="w-[95%]">
                    {" "}
                    Reduce the stress and burden of government insurance
                    credentialing.
                  </p>
                </div>
                <div className="flex items-start w-full gap-1 justify-between">
                  <IoMdArrowDropright className="text-[#203993] w-[20px] mt-1" />
                  <p className="w-[95%]">
                    Improve your chances of getting credentialed quickly and
                    easily.
                  </p>
                </div>

                <div className="flex items-start w-full gap-1 justify-between">
                  {" "}
                  <IoMdArrowDropright className="text-[#203993] w-[20px] mt-1" />
                  <p className="w-[95%]">
                    Ensure that your credentialing is maintained and up-to-date.
                  </p>
                </div>

                <div className="flex items-start w-full gap-1 justify-between">
                  <IoMdArrowDropright className="text-[#203993] w-[20px] mt-1" />
                  <p className="w-[95%]">
                    Focus on what you do best: providing quality care to your
                    patients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <PatnerSlide />
      </div>
    </section>
  );
};

export default BenefitsOfWorking;
