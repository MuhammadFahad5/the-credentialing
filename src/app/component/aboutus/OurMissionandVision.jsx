"use client";
import { Button } from "antd";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { HiMinusSm } from "react-icons/hi";

const OurMissionandVision = () => {
  const [ourMission, setOurMission] = useState(true);
  const [ourVision, setOurVision] = useState(true);

  const toggleMission = () => {
    setOurMission(!ourMission);
  };
  const toggleVission = () => {
    setOurVision(!ourVision);
  };
  return (
    <section>
      <div className="my-container">
        <div className="my-row flex !items-start">
          <div className="my-col md:w-[50%] ">
            <Button
              type="text"
              onClick={toggleMission}
              className="text-[#212529] text-base font-semibold hover:!bg-white px-0"
            >
              {ourMission ? (
                <HiMinusSm
                  onClick={toggleMission}
                  className="w-[24px] h-[24px] p-1 text-white bg-[#203993] mt-[4px] rounded-sm"
                />
              ) : (
                <GoPlus
                  onClick={toggleMission}
                  className="w-[24px] h-[24px] p-1 text-white bg-[#203993] mt-[4px] rounded-sm"
                />
              )}
              Our Mission
            </Button>

            <p
              className="ifdisplay text-sm text-[#777] leading-6 pt-2"
              style={{ display: ourMission ? "block" : "none" }}
            >
              At TheCredentialing, we tend to provide you with much more than
              just expertise in the provider credentialing services, we serve as
              your dedicated partner helping you stay on the top of the
              ever-changing credentialing world. We perfectly understand that
              precision, compliance and efficiency are the areas, most
              emphasized when it comes to healthcare credentialing. That's why
              we equipped with ample resources, ensure that your journey through
              credentialing is seamless, efficient, and in full compliance with
              industry standards.
            </p>
          </div>
          <div className="my-col md:w-[50%] ">
            <Button
              type="text"
              onClick={toggleVission}
              className="text-[#212529] text-base font-semibold hover:!bg-white px-0"
            >
              {ourVision ? (
                <HiMinusSm
                  onClick={toggleVission}
                  className="w-[24px] h-[24px] p-1 text-white bg-[#203993] mt-[4px] rounded-sm"
                />
              ) : (
                <GoPlus
                  onClick={toggleVission}
                  className="w-[24px] h-[24px] p-1 text-white bg-[#203993] mt-[4px] rounded-sm"
                />
              )}
              Our Vision
            </Button>
            <p
              className="text-sm text-[#777] leading-6 pt-2"
              style={{ display: ourVision ? "block" : "none" }}
            >
              We see credentialing not just as an ordinary regulatory
              requirement rather we believe that it is an opportunity to
              demonstrate your commitment to quality care and patient safety.
              Abiding by this vision, our experienced credentialing specialists
              work closely with each client to develop a well rounded plan that
              meets their specific needs and goals. Right from the start of the
              application till the issue resolution, not a single minor detail
              is overlooked.
            </p>
          </div>
        </div>
        <div className="my-col my-[40px]">
          {" "}
          <hr />{" "}
        </div>
      </div>
    </section>
  );
};

export default OurMissionandVision;
