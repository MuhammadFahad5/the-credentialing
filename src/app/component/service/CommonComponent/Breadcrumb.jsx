"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { usePathname } from "next/navigation";

const Breadcrumb = ({ heading }) => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    const formattedSegment = lastSegment.replace(/_/g, " ").toUpperCase();
    setActiveTab(formattedSegment);
  }, [pathname, activeTab]);

  return (
    <section className=" pt-[85px] bg-[#212529] text-white border-b-[6px] border-[rgb(255 255 251 / 0%)] ">
      <div className="my-container !py-[10px]">
        <div className="my-row">
          <div className="my-col flex flex-col md:flex-row justify-between ">
            <div className="w-fit relative">
            <p className="font-normal text-[22px] order-last md:order-first" id="breadcrumb-heading">
              {heading || "services"}
            </p>
            <div className="border-b-[6px] border-[#203993] w-full absolute mt-[22px]"></div>
            </div>

            <div className="flex text-[12px] pt-[8px] order-first md:order-last">
              <p>HOME</p>
              <IoIosArrowForward className="w-[15px] h-[16px] mx-2 text-[rgba(221,223,224,0.75)]" />
              <p>{activeTab}</p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Breadcrumb;
