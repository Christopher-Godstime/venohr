import React from "react";
import logo from "../assets/logo.png";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%]  border-b-[1px] border-gray-200 bg-[#011518] py-[40px]">
      <div className="max-w-[1480px] mx-auto">
        <div className="sm:flex items-center justify-between w-full">
          <div>
            <img className="lg:w-[216px] w-[150px]" src={logo} />
          </div>
          <div className="sm:flex sm:space-x-[24px] mt-[16px] sm:mt-[0px]">
            <input
              className="border-[1px] border-[#9EA0A3] px-[14px] py-[10px] rounded-[8px] sm:w-[267px] w-full bg-[#161618] placeholder:text-[#9EA0A3] text-[14px] text-white"
              placeholder="Email Address"
            />
            <button className="text-[#161618] w-full sm:w-[221px] h-[44px] px-[18px] py-[10px] flex justify-center items-center text-[14px] font-[500] bg-white whitespace-nowrap rounded-[8px] mt-[24px] sm:mt-[0px]">
              Subscribe to Our Newsletter
            </button>
          </div>
        </div>
        <div className="w-full mt-[30px] mb-[30px]  sm:flex justify-end items-center">
          <div className="flex items-center space-x-[30px] mt-[32px] sm:mt-[0px]">
            <RiInstagramFill className="text-white text-[28px]" />
            <FaLinkedin className="text-white text-[28px]" />
            <BsTwitterX className="text-white text-[28px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
