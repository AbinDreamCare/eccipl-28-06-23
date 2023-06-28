import React from "react";
import Image from "next/image";
import contactusImage from "../../../public/images/contactUs.webp";
import { GrLocation } from "react-icons/gr";
import { BiMessageAltDetail } from "react-icons/bi";
import { TbBrandTelegram } from "react-icons/tb";
import { AiOutlinePhone } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import UseMediaQuery from "@/hooks/MediaQuerry";

const ContactUs = () => {
  const isAboveMediumScreens = UseMediaQuery("(min-width: 1060px)");

  const info = [
    {
      icon: <BiMessageAltDetail />,
      title1: "Thane Office",
      title2: "sdk.mumbai@gmail.com",
    },
    {
      icon: <BiMessageAltDetail />,
      title1: "Pune Office",
      title2: "sdk.pune@gmail.com",
    },
    { icon: <AiOutlinePhone />, title1: "Thane Office", title2: "022 2541 4199/479" },
    {
      icon: <AiOutlinePhone />,
      title1: "Pune Office",
      title2: "020 24470704, 020 24432771",
    },
  ];
  return (
    <div className="relative mt-10 mb-10 h-full">
      <div className="md:flex justify-evenly m-10">
        <div className="mb-4 h-full md:w-4/12">
          <Image
            height={600}
            className="bg-cover rounded-lg"
            src={contactusImage}
            alt="logo"
          />
        </div>
        <div className=" md:w-6/12">
          <div>
            <h1 className="text-3xl font-semibold ">Info</h1>
            <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 mt-5">
              {info.map((inputData, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-4 rounded-lg shadow"
                >
                  <div className="mr-4">{inputData.icon}</div>
                  <div>
                    <div className="text-base font-medium">
                      {inputData.title1}
                    </div>
                    <div className="text-sm text-gray-500">
                      {inputData.title2}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-3xl font-semibold my-10">Contact Us</h1>
            <div className="md:space-y-4">
              <div className="md:flex md:space-x-4">
                <input
                  type="text"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
                  placeholder="Enter Your Name"
                />
                <input
                  type="text"
                  className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
                  placeholder="Enter Your E-mail"
                />
              </div>
              <div>
                <textarea
                  className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400"
                  placeholder="Enter your Message"
                ></textarea>
              </div>
              <div className="w-full text-center">
                {isAboveMediumScreens ? (
                  <button className=" px-4 mt-3 py-2 relative overflow-hidden">
                    <span className="absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500"></span>
                    <span className="relative z-10">Get in touch</span>
                  </button>
                ) : (
                  <button className="bg-black px-4 mt-3 py-2 text-white">
                    Get in touch
                  </button>
                )}
              </div>
            </div>
          </div>
         
        </div>
        <div className="absolute top-32 right-1 items-center">
            <h1 className="text-7xl font-bold opacity-10 text-gray-700 rotate-90 whitespace-nowrap">
              CONTACT US
            </h1>
          </div>
      </div>
    </div>
  );
};

export default ContactUs;
