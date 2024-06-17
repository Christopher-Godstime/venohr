import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Faqs = () => {
  const [clickedIndex, setClickedIndex] = useState({});

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };

  const Dropdown = [
    {
      title: "How can my company become a partner with Rivala?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "What benefits do partners gain from collaborating with Rivala?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "What type of companies does Rivala partner with?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "Can partners choose talents based on specific criteria?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
    {
      title: "How does Rivala manage payroll, local compliance for partners?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    },
  ];
  return (
    <div className="px-[3%] lg:px-[5%] xl:px-[7%] xl:py-[120px] py-[80px] ">
      <div className="max-w-[1480px] mx-auto ">
        <h4 className="text-[36px] leading-[44px] md:text-[48px] font-[700] md:leading-[60px] text-center ">
          Frequently Asked Questions
        </h4>
        <div className=" mt-[24px] xl:w-[846px] mx-auto">
          {Dropdown.map((drop, i) => (
            <div key={i} className="border-b-[1px] border-[#E6E7E8]">
              <div
                onClick={handleClick(i)}
                className="py-[16px] flex justify-between items-center "
              >
                <h4 className="text-[16px] lg:text-[24px] cursor-pointer font-[600]">
                  {drop.title}
                </h4>
                <div
                  onClick={handleClick(i)}
                  className={`text-sm duration-300 cursor-pointer ${
                    clickedIndex[i] ? "rotate-180" : "rotate-0"
                  } `}
                >
                  <FiChevronDown className="text-[28px]" />
                </div>
              </div>
              {clickedIndex[i] ? (
                <h4 className="text-[14px] lg:text-[16px] py-[20px] px-[38px] font-light -mt-[20px] mb-[28px]">
                  {drop.content}
                </h4>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
