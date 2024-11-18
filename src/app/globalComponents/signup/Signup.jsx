"use client";
import React, { useEffect, useState } from "react";
import "../../globalComponents/ForgetPassword/forgetpassword.css";
import { Button, Checkbox, Input, Typography } from "antd";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import LoaderSpinner from "@/app/globalComponents/LoaderSpiner";
import { useFormState } from "../FormData/FormData";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { formData, handleChange } = useFormState();

  const handleSignup = async () => {
    console.log("signup formData :", formData);
  };
  return (
    <div className="overflow-x-hidden">
      {isLoading ? (
        <LoaderSpinner setIsLoading={setIsLoading} isLoading={isLoading} />
      ) : (
        <section className="background">
          <div className="my-container ">
            <div className="flex flex-col md:flex-row gap-[50px] !items-center">
              <div className="my-col md:!w-[50%] flex flex-col">
                <h1 className="text-[hsl(218,81%,95%)] text-[48px] font-bold leading-[-2]	">
                  Transform Your Practice{" "}
                  <span className="text-[hsl(218,81%,75%)]">
                    Complete Credentialing Solutions Await!
                  </span>
                </h1>
                <p className="text-[hsl(218,81%,85%)] text-[14px] leading-6">
                  Get ready to maximize the potential of TheCredentialing on
                  your way to professional success!
                </p>
                <p className="text-[hsl(218,81%,85%)] text-[14px] leading-6 pt-5">
                  Optimize Your Credentialing Journey with TheCredentialing!
                  From setting up a new practice to managing ongoing
                  credentialing, we make the process seamless. Let us handle
                  updates, progress tracking, timely submissions, and more.
                </p>
                <p className="text-[hsl(218,81%,85%)] text-[14px] leading-6 pt-5">
                  Prepare for a new experience of efficient practice management!
                </p>
              </div>
              <div className="my-col md:!w-[50%] bg-white rounded-md mt-5 !h-[20%]">
                <div className="p-[40px]">
                  <Typography.Title
                    level={5}
                    className="!text-[#212529] !text-[13px] "
                  >
                    First Name
                  </Typography.Title>
                  <Input
                    className="p-2"
                    name="firstname"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <Typography.Title
                    level={5}
                    className="!text-[#212529] !text-[13px] pt-5"
                  >
                    Last Name
                  </Typography.Title>
                  <Input
                    className="p-2"
                    name="lastname"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <Typography.Title
                    level={5}
                    className="!text-[#212529] !text-[13px] pt-5"
                  >
                    Email address
                  </Typography.Title>
                  <Input
                    className="p-2"
                    name="emailaddress"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <Typography.Title
                    level={5}
                    className="!text-[#212529] !text-[13px] pt-5"
                  >
                    Password
                  </Typography.Title>
                  <Input.Password
                    className="custom-password-input p-2"
                    name="password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    visibilityToggle={true}
                  />

                  <Typography.Title
                    level={5}
                    className="!text-[#212529] !text-[13px] pt-5"
                  >
                    Confirm Password
                  </Typography.Title>
                  <Input.Password
                    className="custom-password-input p-2"
                    name="confirmpassword"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    visibilityToggle={true}
                  />

                  <Typography.Title
                    level={5}
                    className="!text-[#212529] !text-[13px] pt-5"
                  >
                    Phone Number
                  </Typography.Title>
                  <Input
                    className="p-2"
                    name="phonenumber"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />

                  <div className="flex justify-center pt-5">
                    <Button
                      onClick={handleSignup}
                      type="primary"
                      className="rounded-3xl w-[80%] !p-4"
                    >
                      Submit
                    </Button>
                  </div>
                  <p className="text-[#777] text-[14px] leading-6 text-center pt-1">
                    If you don't have an account, please{" "}
                    <Link href={"signin"} className="text-[#0000ff]">
                      Sign In
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

export default Signup;
