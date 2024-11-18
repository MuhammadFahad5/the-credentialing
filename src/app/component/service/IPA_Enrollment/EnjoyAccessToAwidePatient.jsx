"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";

const EnjoyAccessToAwidePatient = () => {
  return (
    <section className="pt-[40px]">
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
              Enjoy Access to a Wide Patient and payer Network
            </motion.h1>
          </div>
        </div>

        <div className="my-row !items-start">
          <div className="my-col lg:w-[80%]">
            <motion.p
              className="text-[#777] leading-7 tracking-tighter	text-[19px] font-light"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              At TheCredentialing, we understand the importance of expanding
              your reach and connecting you with a broader network of patients
              and payers. Independent Physician Associations are your gateway to
              a vast healthcare community. Our comprehensive IPA Enrollment
              Services are designed to simplify the process, making it easier
              for healthcare providers like you to access this extensive
              network.
            </motion.p>
          </div>

          <div className="my-col lg:w-[18%]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Button
                type="primary"
                className="bg-black text-[12px] px-[24px] py-[20px] font-medium hover:!bg-[#32383e]"
              >
                GET A QUOTE!
              </Button>
            </motion.div>
          </div>

          <div className="my-col my-[40px]">
            {" "}
            <hr />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnjoyAccessToAwidePatient;
