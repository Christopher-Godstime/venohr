import React from "react";
import Faqs from "../components/Faqs";

const Contact = () => {
  return (
    <div>
      {" "}
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[100px] py-[80px]">
        <div className="max-w-[664px] mx-auto">
          <h4 className="md:text-[28px] text-[20px] xl:text-[36px] 2xl:text-[64px] 2xl:leading-[72px] tracking-tight font-[600] text-text text-center">
            Have any questions? Contact us
          </h4>
          <form className="mt-[24px] lg:mt-[48px] grid grid-cols-1 gap-[24px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[17px]">
              <div className="w-full">
                <h4 className="text-[14px] font-[500]">First Name</h4>
                <input
                  className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                  placeholder="Enter first name"
                  type="text"
                />
              </div>
              <div className="w-full">
                <h4 className="text-[14px] font-[500]">Last Name</h4>
                <input
                  className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                  placeholder="Enter last name"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full">
              <h4 className="text-[14px] font-[500]">Email address</h4>
              <input
                className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                placeholder="Enter email address"
                type="email"
              />
            </div>

            <div className="w-full">
              <h4 className="text-[14px] font-[500]">Description</h4>
              <textarea
                className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#EAECF0] border-[1px] w-full text-[14px]"
                placeholder="Enter a description..."
                rows="5"
              />
            </div>
            <button className="bg-primary w-full px-[20px] py-[12px] text-[14px] md:text-[16px] font-[500] text-white rounded-[8px] hover:bg-[#00A35A]">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="pb-[80px]">
        <Faqs />
      </div>
    </div>
  );
};

export default Contact;
