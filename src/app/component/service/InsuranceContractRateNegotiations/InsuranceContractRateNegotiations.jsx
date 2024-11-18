"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "antd";

const InsuranceContractRateNegotiations = () => {
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
              Insurance Contract Rate Negotiations
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
              Our expert team aids healthcare providers in safeguarding
              favorable terms with insurance payers. We strive for extraordinary
              reimbursement rates, reduced administrative burdens, and effective
              dispute resolution. We're well-versed in value-based care contract
              negotiations to improve care quality and increase revenue.
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
        </div>
      </div>
    </section>
  );
};

export default InsuranceContractRateNegotiations;
