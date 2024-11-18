"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_87 from "../../../../../public/service/group-87.png";
import { IoMdArrowDropright } from "react-icons/io";
const TheImportanceOfCommercial = () => {
  return (
    <section className="overflow-x-hidden bg-[#f4f4f4] pb-5">
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
                src={Group_87}
                alt="Description of the image"
                width={356}
                height={367}
                className="my-[24px]"
              />
            </div>
          </div>
          <div className="my-col md:w-[67%] md:pt-[140px]">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[25px] mb-4 leading-10">
                <strong className="font-extrabold leading-10 mr-1">
                  The Importance
                </strong>
                of Commercial Insurance Credentialing
              </h2>
              <div className="row md:flex text-[17px] text-[#777] ml-[-5px]">
                <div className="col md:w-[50%] flex flex-col gap-3">
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Maximize Reimbursements</p>
                  </div>
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Access to a Larger Patient Base</p>
                  </div>

                  <div className="flex gap-1">
                    {" "}
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Increased Patient Trust</p>
                  </div>
                </div>
                <div className="col md:w-[50%] flex flex-col gap-3 ">
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Streamlined Billing and Claims</p>
                  </div>
                  <div className="flex gap-1">
                    <IoMdArrowDropright size={20} className="text-[#203993]" />
                    <p>Compliance and Quality</p>
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

export default TheImportanceOfCommercial;
