import React from "react";
import logo from "../assets/logoblack.png";

const Navbar = () => {
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%] border-[1px] border-[#F2F2F2]  ">
      <div className="max-w-[1480px] h-[80px] flex items-center mx-auto justify-between">
        <div>
          <img className="w-[112px]" src={logo} />
        </div>
        <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[14px] md:text-[16px] font-[500] text-white bg-primary hover:bg-[#00A35A] w-fit">
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Navbar;
