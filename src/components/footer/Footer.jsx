import React from "react";
import Image from "next/image";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full px-10 py-10 mt-10 bg-gray-800 text-white">
      
      <div className="md:flex justify-center">
        <div className="md:w-3/12 ">
          <h1 className="text-5xl">ECCIPL</h1>
          <h1 className="md:pe-10">
            Make the right choice and choose to build your dream with us
          </h1>
        </div>
        <div className="md:w-3/12">
          <h1>About</h1>
          <h1>Careers</h1>
          <h1>Portfolio</h1>
        </div>
        <div className="md:w-3/12">
          <h1>Privacy Policy</h1>
          <h1>Terms & Conditions</h1>
          <h1>Cookie Policy</h1>
        </div>
        <div className="md:w-3/12">
          <h1>Contact Us</h1>
          <h1>email: eccipl@gmail.com</h1>
          <div className="flex">
            <AiFillInstagram className="text-white h-7 m-2 w-7" />
            <AiFillLinkedin className="text-white h-7 m-2 w-7" />
            <AiFillFacebook className="text-white h-7 m-2 w-7" />
            <AiFillYoutube className="text-white h-7 m-2 w-7" />
          </div>
        </div>
      </div>
      <hr className="bg-white my-5"></hr>

      <div className="md:flex justify-between mb-10">
        <div className="md:w-5/12">
          <div className="md:flex justify-between w-full">
            <div className="md:px-2">
              <h1 className="text-xl font-bold mt-10">Pune office </h1>
              <h1> 1/2/13, second floor,</h1>
              <h1>Flat no.5, Shilpayatan apartment, </h1>
              <h1>Palande courier services lane,</h1>
              <h1>Pune - 411004</h1>
              <h1>Ph no. (020) 25462555</h1>
            </div>
            <div className="md:ms-8">
              <h1 className="text-xl font-bold mt-10">Thane office </h1>
              <h1>Matru Chaya, Flat No. 301,</h1>
              <h1>Opposite Bedekar Hospital,</h1>
              <h1>Maharashi Karve Road, Naupada,</h1>
              <h1>Thane West 400602</h1>
              <h1>Tele: +91 22 2541 4479</h1>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/images/footerImage.png"}
            width={500}
            height={200}
            alt="Dosti Vihar, Thane"
          />
          <h1 className="text-3xl font-bold mt-5">Contact Us today</h1>
          <h1 className="">Let us give your Dreams foundation and structure</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
