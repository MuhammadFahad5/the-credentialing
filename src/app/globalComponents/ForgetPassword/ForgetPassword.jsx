"use client";
import React, { useEffect, useState } from "react";
import "./forgetpassword.css";
import { Button, Input, Typography } from "antd";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import LoaderSpinner from "@/app/globalComponents/LoaderSpiner";
import { useFormState } from "../FormData/FormData";

const ForgetPassword = () => {
  const { formData, handleChange } = useFormState();
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   const handleReadyStateChange = () => {
  //     if (document.readyState === "complete") {
  //       setIsLoading(false);
  //     }
  //   };

  //   if (document.readyState === "complete") {
  //     // If the page is already fully loaded
  //     setIsLoading(false);
  //   } else {
  //     // Otherwise, wait for it to complete
  //     document.addEventListener("readystatechange", handleReadyStateChange);
  //   }

  //   return () => {
  //     document.removeEventListener("readystatechange", handleReadyStateChange);
  //   };
  // }, []);
  const handleForgetPassword = async () => {
    console.log("forgetpassword formData :", formData);
  };
  return (
    <div className="overflow-x-hidden">
      {isLoading ? (
        <LoaderSpinner setIsLoading={setIsLoading} isLoading={isLoading} />
      ) : (
        <section className="background">
          <div className="my-container ">
            <div className="flex flex-col md:flex-row gap-[50px] pt-[100px]">
              <div className="my-col md:!w-[50%]">
                <h1 className="text-[hsl(218,81%,95%)] text-[48px] font-bold leading-[-2]	">
                  Provider Credentialing{" "}
                  <span className="text-[hsl(218,81%,75%)]">Excellence</span>
                </h1>
                <p className="text-[hsl(218,81%,85%)] text-[14px] leading-6">
                  At TheCredentialing, our mission is to ensure that healthcare
                  providers receive proper recognition and authorization from
                  insurance companies. We stand as dedicated partners in the
                  provider credentialing process, guaranteeing a smooth and
                  accurate reimbursement system. With us, you not only keep pace
                  with the rapidly evolving healthcare industry but also stay
                  steps ahead of the competition.
                </p>
                <p className="text-[hsl(218,81%,85%)] text-[14px] leading-6 pt-[30px]">
                  Experience the power of TheCredentialing for yourself!
                </p>
              </div>
              <div className="my-col md:!w-[50%] bg-white rounded-md mt-5 !h-[20%]">
                <div className="p-[40px]">
                  <Typography.Title
                    level={5}
                    className="!text-[#212529] !text-[13px]"
                  >
                    Email
                  </Typography.Title>
                  <Input
                    className="p-2"
                    name="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <div className="mt-5 flex justify-center">
                    <Button
                      type="primary"
                      className="rounded-3xl w-[80%] !p-4"
                      onClick={handleForgetPassword}
                    >
                      Send Email
                    </Button>
                  </div>
                  <p className="text-[#777] text-[14px] leading-6 text-center pt-1">
                    If you don't have an account, please{" "}
                    <Link href={"signup"} className="text-[#0000ff]">
                      Sign Up
                    </Link>
                  </p>
                  <div className="text-center pt-5">
                    <Button
                      type="primary"
                      icon={<FcGoogle className="w-[20px] h-[19px] bg-white" />}
                      className=" bg-white text-[14px] text-black border border-black py-5 hover:!bg-black hover:!text-white"
                    >
                      Sign in with Google
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ForgetPassword;
