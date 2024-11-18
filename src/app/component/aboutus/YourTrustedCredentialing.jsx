"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const YourTrustedCredentialing = () => {
  const words = ["Partner", "Expert", "Guide"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 30 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <section className="pt-[40px]">
      <div className="my-container">
        <div className="my-row">
          <div className="my-col">
            <motion.div
              className="leading-6 sm:flex"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h2 className=" text-[#212529] font-extrabold text-[27px] mb-4 leading-10">
                Your Trusted Credentialing
              </h2>
              <div className="bg-[#203993] inline-block h-[47px] ml-1">
                <motion.p
                  className=" text-white font-extrabold text-[27px] mb-4 leading-10 p-1 ml-2 inline-block"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  key={currentWordIndex}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {words[currentWordIndex]}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourTrustedCredentialing;
