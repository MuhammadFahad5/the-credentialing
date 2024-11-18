"use client";
import { Button } from "antd";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      heading: "What is the purpose of credentialing in healthcare?",
      paragraph:
        "Credentialing is recognized as a crucial process for all healthcare institutions that must be performed to ensure that those healthcare workers who will be providing the clinical services are qualified and competent enough to do so.",
    },
    {
      heading:
        "What is the difference between credentialing and payer enrollment?",
      paragraph:
        "Red flags include frequent practice changes or moves, unexplained time gaps in work history, and references that raise issues.",
    },
    {
      heading: "Can providers see patients before payer credentialing is done?",
      paragraph:
        "You must await the completion of your credentialing process and the counter execution of your contract by the insurance company, which will establish the effective date. Visits occurring before this effective date will be treated as out-of-network by the insurance company.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="my-container">
        <div className="my-row !pb-[40px]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              heading={faq.heading}
              paragraph={faq.paragraph}
              isOpen={activeIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;

const FAQItem = ({ heading, paragraph, isOpen, toggle }) => (
  <div className="my-col">
    <div
      className={` rounded-tl-[5px] rounded-b-[4px] transition-all bg-[#203993] "bg-black !mb-5 pb-5"`}
    >
      <div
        className={`relative rounded-tl-[3px] rounded-bl-[3px] right-[-3px] cursor-pointer transition-all bg-white `}
      >
        <div
          onClick={toggle}
          className={` text-[14px] !font-semibold p-[25px] flex justify-between cursor-pointer ${
            isOpen
              ? "bg-[#203993] text-white hover:!text-white hover:!bg-[#203993]"
              : "bg-[#f4f4f4] text-[#203993] hover:!text-[#203993] hover:!bg-[#f4f4f4]"
          }`}
        >
          <span className="w-[98%]">{heading}</span>
          <span className="w-[1%] mt-[3px]">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
      </div>
    </div>
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      <p className="text-[14px] text-[#777] py-2 leading-6">{paragraph}</p>
    </motion.div>
  </div>
);
