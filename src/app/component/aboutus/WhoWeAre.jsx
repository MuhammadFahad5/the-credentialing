"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Group_37 from "../../../../public/aboutus/group-37.png";

const WhoWeAre = () => {
  return (
    <section className="overflow-x-hidden bg-[#f4f4f4]">
      <div className="my-container">
        <motion.div
          className="my-row !items-start py-[30px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="my-col md:w-[33%]">
            <Image
              src={Group_37}
              alt="Description of the image"
              width={280}
              height={220}
              className="my-[24px]"
            />
          </div>
          <div className="my-col md:w-[67%] flex flex-col self-center">
            <div className="md:ml-[40px] mr-[13px] leading-6">
              <h2 className=" text-[#212529] font-normal text-[27px] mb-4 leading-10">
                Who
                <strong className="font-extrabold	leading-10	">We Are </strong>
              </h2>
              <p className="text-sm text-[#777]">
                TheCredentialing is a leading provider of innovative
                credentialing solutions that transform the credentialing process
                for healthcare providers of all sizes. Our distinctive solutions
                simplify credentialing workflows, streamline compliance, and
                ensure accuracy with industry standards and best practices;
                ultimately saving time and effort to maximize value and return
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
