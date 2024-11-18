"use client";
import React from "react";
import { motion } from "framer-motion";
import Icon_1 from "../../../../public/aboutus/icon-1.png";
import Icon_2 from "../../../../public/aboutus/icon-2.png";
import Icon_3 from "../../../../public/aboutus/icon-3.png";
import Icon_4 from "../../../../public/aboutus/icon-4.png";
import Icon_5 from "../../../../public/aboutus/icon-5.png";
import Icon_6 from "../../../../public/aboutus/icon-6.png";
import Image from "next/image";

const Cards = () => {
  return (
    <section className="overflow-x-hidden bg-[#f4f4f4]">
      <div className="my-container">
        <div className="my-row">
          <div className="my-col md:w-[50%] lg:w-[33%] sm:!pt-0">
            <motion.div
              className="p-2 min-h-[260px] lg:min-h-[300px] "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Icon_1}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
                Customer Focus
              </h1>
              <p className="text-center text-sm text-[#777] p-4 leading-[26px]">
                Our commitment to providing our clients with unparalleled
                services and support is evident in our attentiveness to their
                needs and feedback, which we proactively incorporate into our
                offerings.
              </p>
            </motion.div>
          </div>
          <div className="my-col md:w-[50%] lg:w-[33%] ">
            <motion.div
              className="p-2 min-h-[260px] lg:min-h-[300px] "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Icon_2}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
                Integrity
              </h1>
              <p className="text-center text-sm text-[#777] p-4 leading-[26px]">
                We conduct our business with utmost honesty, transparency, and
                fairness, forging long-term relationships with our clients and
                partners built on mutual trust and respect.
              </p>
            </motion.div>
          </div>
          <div className="my-col md:w-[50%] lg:w-[33%] ">
            <motion.div
              className="p-2 min-h-[260px] lg:min-h-[300px] "
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Icon_3}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
                Excellence
              </h1>
              <p className="text-center text-sm text-[#777] p-4 leading-[26px]">
                Unrelenting in our pursuit of excellence, we constantly
                challenge ourselves to improve our skills and knowledge,
                delivering exceptional results that exceed our clients'
                expectations.
              </p>
            </motion.div>
          </div>
          <div className="my-col md:w-[50%] lg:w-[33%] ">
            <motion.div
              className="p-2 min-h-[260px] lg:min-h-[300px] "
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Icon_4}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
                Collaboration
              </h1>
              <p className="text-center text-sm text-[#777] p-4 leading-[26px]">
                Recognizing the power of teamwork, we collaborate closely with
                our clients, partners, and team members to achieve common goals
                and achieve mutual success
              </p>
            </motion.div>
          </div>
          <div className="my-col md:w-[50%] lg:w-[33%] ">
            <motion.div
              className="p-2 min-h-[260px] lg:min-h-[300px] "
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Icon_5}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
                Innovation
              </h1>
              <p className="text-center text-sm text-[#777] p-4 leading-[26px]">
                Embracing a culture of innovation, we are constantly seeking new
                and better ways to do things, challenging the status quo and
                experimenting with groundbreaking ideas.
              </p>
            </motion.div>
          </div>
          <div className="my-col md:w-[50%] lg:w-[33%] ">
            <motion.div
              className="p-2 min-h-[260px] lg:min-h-[300px] "
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Icon_6}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[20px] text-[#212529] font-bold tracking-tighter">
                Adaptability
              </h1>
              <p className="text-center text-sm text-[#777] p-4 leading-[26px]">
                We are open to change and try to remain flexible and adaptable
                in our approach, ensuring we evolve with the need of our clients
                and industry trends for sustained success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
