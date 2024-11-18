import React from "react";
import PatnerSlide from "../../home/PatnerSlide";

const WhyOutsource = () => {
  return (
    <section className="overflow-x-hidden md:pb-[40px]">
      <div className="my-container">
        <div className="my-row">
          <div className="my-col">
            <h1 className="text-[#212529] font-bold text-3xl tracking-tighter text-center">
              Why Outsource?
            </h1>
          </div>
          <div className="my-col">
            <p className="text-sm text-center text-[#777] leading-[26px]">
              Outsourcing offers a strategic advantage by allowing healthcare
              practitioners to focus on their core competencies, while relevant
              experts handle specialized tasks. It reduces operational costs, as
              the global talent pool for companies is just a click away saving
              you the hassle and expense of hiring and maintaining in-house
              teams. Additionally, outsourcing enhances flexibility, enabling
              organizations to scale resources up or down as needed, adapting
              swiftly to market demands.
            </p>
          </div>
        </div>
        <PatnerSlide />
      </div>
    </section>
  );
};

export default WhyOutsource;
