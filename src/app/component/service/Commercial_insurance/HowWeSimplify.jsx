import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_85 from "../../../../../public/service/group-85.png";
import { IoMdArrowDropright } from "react-icons/io";
const HowWeSimplify = () => {
  return (
    <div className="my-container">
      <motion.div
        className="my-row !items-start "
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="my-col md:w-[67%] md:pt-[50px]">
          <div className="leading-6">
            <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10">
              <strong className="font-extrabold leading-10 mr-1">How We</strong>
              Simplify The Commercial Insurance Credentialing Process?
            </h2>
            <div className="row md:flex text-[17px] text-[#777] ml-[-5px]">
              <div className="col md:w-[50%] flex flex-col gap-3">
                <div className="flex gap-1">
                  <IoMdArrowDropright size={20} className="text-[#203993]" />
                  <p>Complete Application Forms</p>
                </div>
                <div className="flex gap-1">
                  <IoMdArrowDropright size={20} className="text-[#203993]" />
                  <p>Gather Required Documents</p>
                </div>

                <div className="flex gap-1">
                  {" "}
                  <IoMdArrowDropright size={20} className="text-[#203993]" />
                  <p>Track Application Status</p>
                </div>
              </div>
              <div className="col md:w-[50%] flex flex-col gap-3 sm:mt-[10px] md:mt-[2px]">
                <div className="flex gap-1">
                  <IoMdArrowDropright size={20} className="text-[#203993]" />
                  <p>Resolve Application Issues</p>
                </div>
                <div className="flex gap-1">
                  <IoMdArrowDropright size={20} className="text-[#203993]" />
                  <p>Provide Ongoing Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-col md:w-[33%] md:pr-[10px]">
          <div>
            <Image
              src={Group_85}
              alt="Description of the image"
              width={417}
              height={354}
              className="my-[24px]"
            />
          </div>
        </div>
      </motion.div>
      <div className="my-col my-[40px]">
        {" "}
        <hr />{" "}
      </div>
    </div>
  );
};

export default HowWeSimplify;
