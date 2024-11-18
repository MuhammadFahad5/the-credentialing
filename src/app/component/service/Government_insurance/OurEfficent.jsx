"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_119 from "../../../../../public/service/group-119.png";
import SpecialitiesWeProvideGovermentInsurance from "./SpecialitiesWeProvideGovermentInsurance";
import AdditionalServices from "./AdditionalServices";

const OurEfficent = () => {
  return (
    <section className="overflow-x-hidden bg-[#f4f4f4]">
      <div className="my-container !px-[23px]">
        <div className="my-row">
          <div className="my-col md:w-[33%]">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={Group_119}
                alt="Description of the image"
                width={334} // Desired width
                height={451} // Desired height
                className="my-[24px]"
              />
            </motion.div>
          </div>
          <div className="my-col md:w-[67%]">
            <motion.div
              className="md:ml-[40px] mr-[13px] leading-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10">
                <strong className="font-extrabold	leading-10">
                  Our Efficient{" "}
                </strong>
                Credentialing Workflow:
              </h2>
              <p className="text-[#777] mb-[18px] text-[14px]">
                <strong>Request a Quote:</strong> Fill out the below form with
                your particulars.
              </p>
              <p className="text-[#777] mb-[18px] text-[14px]">
                <strong >Provide Your Information:</strong> Each provider will
                credential with us once, very thoroughly. Once your
                credentialing profile is complete, we will use it for all future
                credentialing applications that you request. Use our online
                applications to provide information and upload documents to get
                started.
              </p>
              <p className="text-[#777] mb-[18px] text-[14px]">
                <strong className="mr-1">
                  Monitor Your Progress with Our Credentialing System: 
                </strong>
                Once you have completed your profile, you can log into our
                credentialing platform to track the progress of your
                credentialing applications.
              </p>
            </motion.div>
          </div>
          <div className="my-col !py-[40px]">
            {" "}
            <hr />{" "}
          </div>

          <SpecialitiesWeProvideGovermentInsurance />
          <AdditionalServices />
        </div>
      </div>
    </section>
  );
};
export default OurEfficent;
