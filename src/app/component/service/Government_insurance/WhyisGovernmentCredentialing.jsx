"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyisGovernmentCredentialing = () => {
  return (
    <section>
      <div className="my-container">
        <div className="my-row">
          <div className="my-col">
            <motion.h1
              className="text-[#212529] font-bold text-3xl mb-4 tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Why is Government Credentialing Important?
            </motion.h1>
          </div>
        </div>

        <div className="my-row">
          <div className="my-col">
            <motion.p
              className="text-[#777] leading-7 tracking-tighter	text-[19px] font-light"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Government credentialing is important for a number of reasons. It
              ensures that patients have access to qualified and competent
              healthcare providers. It helps to prevent fraud and abuse in the
              healthcare system. Last but not least, it allows the government to
              track healthcare costs and trends.
            </motion.p>
          </div>
          <div className="my-col !py-[40px]">
            {" "}
            <hr />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyisGovernmentCredentialing;
