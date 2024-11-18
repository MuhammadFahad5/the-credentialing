import React from "react";

const AdditionalServices = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="my-container">
        <div className="my-row">
          <div className="my-col">
            <h1 className="text-[#212529] font-bold text-3xl mb-4 tracking-tighter text-center">
              Additional Services
            </h1>
          </div>
          <div className="my-col md:w-[50%] md:!pb-[80px]">
            <div
              className=" bg-white border p-5 rounded-lg "
              style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
            >
              <h1 className="text-center text-[18px] text-[#212529] font-bold tracking-tighter">
                Lab Credentialing Services
              </h1>
              <p className="text-sm text-center text-[#777] p-2 leading-[26px]">
                We're your dedicated partner in streamlining the process,
                ensuring your lab meets all the necessary standards and
                achieving accreditation.
              </p>
            </div>
          </div>
          <div className="my-col md:w-[50%] md:!pb-[80px]">
            <div
              className=" bg-white border p-5 rounded-lg "
              style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px -3px 3px 0px" }}
            >
              <h1 className="text-center text-[18px] text-[#212529] font-bold tracking-tighter">
                DMEs Credentialing Services
              </h1>
              <p className="text-sm	text-center text-[#777] p-2 leading-[26px]">
                Come to terms with the credentialing maze for Durable Medical
                Equipment (DME) through our specialized DMEs Credentialing
                Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
