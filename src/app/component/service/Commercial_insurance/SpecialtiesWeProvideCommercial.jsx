"use client";
import React from "react";
import { motion } from "framer-motion";
import Group_76 from "../../../../../public/service/group-76.png";
import Group_75 from "../../../../../public/service/group-75.png";
import Group_77 from "../../../../../public/service/group-77.png";
import Group_74 from "../../../../../public/service/group-74.png";
import Image from "next/image";

const SpecialtiesWeProvideCommercial = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="my-container">
        <div className="my-row">
          <div className="my-col">
            <motion.h1
              className="text-[#212529] text-center font-bold text-3xl mb-4 tracking-tighter"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Specialities We Provide Government Insurance Credentialing
              Services
            </motion.h1>
          </div>

          <div className="my-col md:w-[50%] lg:w-[25%]">
            <motion.div
              className=" bg-white border p-2 min-h-[260px] lg:min-h-[390px] xl:min-h-[375px]"
              style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: typeof window !== "undefined" && window.innerWidth < 1023 ? 0.5 : 0.5,
              }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Group_76}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[18px] text-[#212529] font-bold tracking-tighter p-1">
                Mental Credentialing Services
              </h1>
              <p className="text-center text-sm text-[#777] p-4 leading-[26px]">
                Our Medical Credentialing Services simplify and enhance the
                credentialing process for healthcare providers.
              </p>
            </motion.div>
          </div>

          <div className="my-col md:w-[50%] lg:w-[25%]">
            <motion.div
              className=" bg-white border p-2 min-h-[260px] lg:min-h-[390px] xl:min-h-[375px]"
              style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: typeof window !== "undefined" && window.innerWidth < 1023 ? 0.5 : 1,
              }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Group_75}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[18px] text-[#212529] font-bold tracking-tighter p-1">
                Dental Credentialing Services
              </h1>
              <p className="text-sm	text-center text-[#777] p-4 leading-[26px]">
                Our Dental Credentialing Services leave no room for compromise
                and are committed to guaranteeing that dental professionals
                achieve effective and spotless credentialing.
              </p>
            </motion.div>
          </div>

          <div className="my-col md:w-[50%] lg:w-[25%]">
            <motion.div
              className=" bg-white border p-2 min-h-[260px] lg:min-h-[390px] xl:min-h-[375px]"
              style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: typeof window !== "undefined" && window.innerWidth < 1023 ? 0.5 : 1.5,
              }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Group_74}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[18px] text-[#212529] font-bold tracking-tighter p-1">
                Vision Credentialing Services
              </h1>
              <p className="text-sm	text-center text-[#777] p-4 leading-[26px]">
                When it comes to vision care providers, precision is the most
                redeeming quality. We offer specialized expertise in securing
                your credentialing, leaving no room for oversight.
              </p>
            </motion.div>
          </div>

          <div className="my-col md:w-[50%] lg:w-[25%]">
            <motion.div
              className=" bg-white border p-2 min-h-[260px] lg:min-h-[390px] xl:min-h-[375px]"
              style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: typeof window !== "undefined" && window.innerWidth < 1023 ? 0.5 : 2,
              }}
            >
              <div className=" flex justify-center">
                <Image
                  src={Group_77}
                  alt="Description of the image"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-center text-[18px] text-[#212529] font-bold tracking-tighter p-1">
                Mental Credentialing Services
              </h1>
              <p className="text-sm	text-center text-[#777] p-4 leading-[26px]">
                Our team excels by living up to the unique demands of mental
                health credentialing, ensuring your practice is fully accredited
                and recognized.
              </p>
            </motion.div>
          </div>
          <div className="my-col my-[50px]">
            {" "}
            <hr />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesWeProvideCommercial;
