import React from "react";
import PatnerSlide from "../../home/PatnerSlide";

const GlossaryOfTerms = () => {
  return (
    <>
      <section className="bg-[#f4f4f4]">
        <div className="my-container ">
          <div className="my-row pt-5">
            <div className="my-col">
              <h1 className="text-[#212529] font-bold text-3xl mb-4 tracking-tighter text-center">
                <span className="!font-normal">GLOSSARY</span> OF TERMS
              </h1>
            </div>
          </div>
          <div className="my-row">
            <div className="my-col md:w-[50%]">
              <div className="p-2 min-h-[110px]">
                <h1 className="text-[20px] text-[#212529] font-bold tracking-tighter">
                  Premium
                </h1>
                <p className="text-sm text-[#777] pt-4 leading-[26px]">
                  The premium is the policyholder's payment to the insurance
                  company, securing coverage against potential risks and
                  ensuring financial protection.
                </p>
              </div>
            </div>
            <div className="my-col md:w-[50%]">
              <div className="p-2 min-h-[110px]">
                <h1 className="text-[20px] text-[#212529] font-bold tracking-tighter">
                  Coinsurance
                </h1>
                <p className="text-sm text-[#777] pt-4 leading-[26px]">
                  The percentage of costs for covered services that the insured
                  individual must pay, usually after the deductible is met.
                </p>
              </div>
            </div>
            <div className="my-col md:w-[50%]">
              <div className="p-2 min-h-[110px]">
                <h1 className="text-[20px] text-[#212529] font-bold tracking-tighter">
                  Deductible
                </h1>
                <p className="text-sm text-[#777] !pt-1 leading-[26px]">
                  The amount the policyholder must pay out of pocket before the
                  insurance coverage kicks in.
                </p>
              </div>
            </div>
            <div className="my-col md:w-[50%]">
              <div className="p-2 min-h-[110px]">
                <h1 className="text-[20px] text-[#212529] font-bold tracking-tighter">
                  Coverage Limit
                </h1>
                <p className="text-sm text-[#777] !pt-1 leading-[26px]">
                  The maximum amount an insurance company will pay for covered
                  services within a specified period.
                </p>
              </div>
            </div>
            <div className="my-col md:w-[50%]">
              <div className="p-2 min-h-[110px]">
                <h1 className="text-[20px] text-[#212529] font-bold tracking-tighter">
                  Copayment
                </h1>
                <p className="text-sm text-[#777] !pt-1 leading-[26px]">
                  A fixed amount that the insured individual pays for covered
                  services, typically due at the time of service.
                </p>
              </div>
            </div>
            <div className="my-col md:w-[50%]">
              <div className="p-2 min-h-[110px]">
                <h1 className="text-[20px] text-[#212529] font-bold tracking-tighter">
                  Underwriting
                </h1>
                <p className="text-sm text-[#777] !pt-1 leading-[26px]">
                  The process by which an insurance company assesses the risk
                  and determines the premium for a policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="my-container mb-5 "><PatnerSlide /></div>
    </>
  );
};

export default GlossaryOfTerms;
