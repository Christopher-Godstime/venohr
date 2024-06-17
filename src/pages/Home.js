import React, { useState } from "react";
import talent from "../assets/talent.png";
import talent2 from "../assets/talent2.png";
import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
import Faqs from "../components/Faqs";

const Home = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    role: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch(
        "https://veno-hr-staging-cfbf122f44d5.herokuapp.com/api/v1/wait-list",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatusMessage("You have successfully signed up for early access!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          companyName: "",
          role: "",
        });
      } else {
        const errorData = await response.json();
        setStatusMessage(
          `Error: ${
            errorData.message || "Something went wrong, please try again later."
          }`
        );
      }
    } catch (error) {
      setStatusMessage("Error: Something went wrong, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:pt-[100px] pt-[80px]">
        <div className="max-w-[1480px] mx-auto">
          <div className="flex flex-col justify-center items-center space-y-[24px] lg:w-[977px] mx-auto md:pb-[100px] pb-[60px]">
            <h4 className="lg:text-[60px] text-[36px] font-[600] md:font-[700] leading-[44px] lg:leading-[93px] text-[#101828] text-center tracking-tight">
              Recruit Top Talent and Manage Effortlessly with VenoHR
            </h4>
            <h4 className="text-[20px] font-[400] leaading-[30px] text-[#667085] text-center font-ibm">
              Transform your human resources and hiring processes with VenoHR's
              innovative solutions, making recruitment more efficient and
              effective.
            </h4>
            <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[14px] md:text-[16px] font-[500] text-white bg-primary hover:bg-[#00A35A] md:w-fit w-full">
              Sign Up for Early Access
            </button>
          </div>
          <div className="pb-[60px] md:pb-[0px]">
            <img src={talent} />
          </div>
        </div>
      </div>
      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[100px] py-[80px]">
        <div className="max-w-[1480px] mx-auto">
          <div className="">
            <h4 className="lg:text-[60px] text-[36px] font-[600] leading-[44px] lg:leading-[93px] text-[#101828] text-center tracking-tight md:w-[590px] mx-auto mb-[80px]">
              All the ATS features you need in one place
            </h4>
            <div>
              <div className=" lg:flex lg:space-x-[30px] mb-[30px] ">
                <div className="2xl:w-[60%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA]  2xl:h-[687px] lg:h-[800px] h-fit  flex flex-col border-[#DFE4ED] border-[1px]">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Job Posting and Distribution
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3] mt-[16px]">
                    Discover top tech talents from emerging tech hubs and cut
                    your hiring expenses by over 35%
                  </h4>
                  <button className="text-white  px-[20px] py-[12px] rounded-[8px]  flex justify-center bg-[#00CC71] hover:bg-[#00A35A] text-[14px] font-[500] mt-[24px] w-fit  ">
                    Get started
                  </button>
                  <div className="mt-auto pt-[30px] ">
                    <img className=" mx-auto" src={t1} />
                  </div>
                </div>
                <div className="2xl:w-[40%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA]   lg:2xl:h-[687px] lg:h-[800px] h-fit flex flex-col mt-[30px] lg:mt-[0px] border-[#DFE4ED] border-[1px]">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Candidate Database Management
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3] mt-[16px]">
                    Get a curated list of qualified candidates within 72 hours
                    and reduce your hiring time by over 40%.
                  </h4>
                  <button className="text-white  px-[20px] py-[12px] rounded-[8px] w-fit flex justify-center bg-[#00CC71] hover:bg-[#00A35A] text-[14px] font-[500] mt-[24px] ">
                    Get started
                  </button>
                  <div className="mt-auto pt-[30px]">
                    <img className=" mx-auto" src={t2} />
                  </div>
                </div>
              </div>
              <div className=" lg:flex ">
                <div className="2xl:w-[60%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA]  2xl:h-[687px] lg:h-[800px] h-fit  flex flex-col order-2 border-[#DFE4ED] border-[1px]">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Integration Capabilities
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3] mt-[16px]">
                    Get a curated list of qualified candidates within 72 hours
                    and reduce your hiring time by over 40%. Get a curated list
                    of qualified candidates within 72 hours and reduce your
                    hiring time by over 40%.
                  </h4>

                  <button className="text-white  px-[20px] py-[12px] rounded-[8px]  flex justify-center bg-[#00CC71] hover:bg-[#00A35A] text-[14px] font-[500] mt-[24px] w-fit ">
                    Get started
                  </button>
                  <div className="mt-auto pt-[30px] ">
                    <img className=" mx-auto" src={t3} />
                  </div>
                </div>
                <div className="2xl:w-[40%] lg:w-[50%] rounded-[24px] px-[40px] pt-[40px] bg-[#FAFAFA]   lg:2xl:h-[687px] lg:h-[800px] h-fit flex flex-col mt-[30px] lg:mt-[0px] order-1 lg:mr-[30px] border-[#DFE4ED] border-[1px]">
                  <h4 className="text-[36px] font-[700] text-text leading-[44px]">
                    Application Tracking
                  </h4>
                  <h4 className="text-[18px] font-[500] leading-[28px] text-[#9EA0A3] mt-[16px]">
                    Grow your tech team conveniently with vetted talents that
                    align with your organizational culture and values.
                  </h4>
                  <button className="text-white  px-[20px] py-[12px] rounded-[8px] w-fit flex justify-center bg-[#00CC71] hover:bg-[#00A35A] text-[14px] font-[500] mt-[24px] ">
                    Get started
                  </button>
                  <div className="mt-auto pt-[30px]">
                    <img className=" mx-auto" src={t4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:pt-[100px] pt-[80px]">
        <div className="max-w-[1480px] mx-auto">
          <div className="flex flex-col justify-center items-center space-y-[24px] lg:w-[777px] mx-auto md:pb-[100px] pb-[60px]">
            <h4 className="lg:text-[60px] text-[36px] font-[600] md:font-[700] leading-[44px] lg:leading-[93px] text-[#101828] text-center tracking-tight">
              Powerful tools to help manage your employees
            </h4>
            <h4 className="text-[20px] font-[400] leaading-[30px] text-[#667085] text-center font-ibm">
              Grow your tech team conveniently with vetted talents that align
              with your organizational culture and values.
            </h4>
            <button className="px-[18px] py-[16px] md:px-[20px] md:py-[12px] rounded-[8px] text-[14px] md:text-[16px] font-[500] text-white bg-primary hover:bg-[#00A35A] md:w-fit w-full">
              Sign Up for Early Access
            </button>
          </div>
          <div className="pb-[60px] md:pb-[0px]">
            <img src={talent2} />
          </div>
        </div>
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[7%]  xl:py-[100px] py-[80px]">
        <div className="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[48px] gap-y-[30px] md:gap-y-[48px]">
          <div className="max-w-[352px] flex flex-col items-center mx-auto">
            <div className="w-[96px] h-[96px] rounded-full flex justify-center items-center bg-primary">
              <img className="w-[48px]" src={i1} />
            </div>
            <h4 className="text-[20px] md:text-[24px] font-[600] text-center text-[#222B34] mt-[20px] md:mt-[48px]">
              Compliance
            </h4>
            <h4 className="lg:text-[18px] text-[14px] font-[500] text-center text-[#77828D] mt-[16px]">
              Streamline your hiring process with our advanced applicant
              tracking system, designed to match top talent with your unique
              needs effortlessly.
            </h4>
          </div>

          <div className="max-w-[352px] flex flex-col items-center mx-auto">
            <div className="w-[96px] h-[96px] rounded-full flex justify-center items-center bg-primary">
              <img className="w-[48px]" src={i2} />
            </div>
            <h4 className="text-[20px] md:text-[24px] font-[600] text-center text-[#222B34] mt-[20px] md:mt-[48px]">
              Employee Onboarding
            </h4>
            <h4 className="lg:text-[18px] text-[14px] font-[500] text-center text-[#77828D] mt-[16px]">
              Simplify your recruitment process and effortlessly find the best
              candidates with our advanced hiring solutions.
            </h4>
          </div>

          <div className="max-w-[352px] flex flex-col items-center mx-auto">
            <div className="w-[96px] h-[96px] rounded-full flex justify-center items-center bg-primary">
              <img className="w-[48px]" src={i3} />
            </div>
            <h4 className="text-[20px] md:text-[24px] font-[600] text-center text-[#222B34] mt-[20px] md:mt-[48px]">
              Performance Tracking
            </h4>
            <h4 className="lg:text-[18px] text-[14px] font-[500] text-center text-[#77828D] mt-[16px]">
              Empower your hiring process with actionable insights and
              analytics, ensuring you choose the best candidates based on real
              data.
            </h4>
          </div>

          <div className="max-w-[352px] flex flex-col items-center mx-auto">
            <div className="w-[96px] h-[96px] rounded-full flex justify-center items-center bg-primary">
              <img className="w-[48px]" src={i4} />
            </div>
            <h4 className="text-[20px] md:text-[24px] font-[600] text-center text-[#222B34] mt-[20px] md:mt-[48px]">
              Learning and Development
            </h4>
            <h4 className="lg:text-[18px] text-[14px] font-[500] text-center text-[#77828D] mt-[16px]">
              Streamline recruitment and easily identify top talent with our
              efficient and user-friendly hiring solutions.
            </h4>
          </div>

          <div className="max-w-[352px] flex flex-col items-center mx-auto">
            <div className="w-[96px] h-[96px] rounded-full flex justify-center items-center bg-primary">
              <img className="w-[48px]" src={i5} />
            </div>
            <h4 className="text-[20px] md:text-[24px] font-[600] text-center text-[#222B34] mt-[20px] md:mt-[48px]">
              Payroll
            </h4>
            <h4 className="lg:text-[18px] text-[14px] font-[500] text-center text-[#77828D] mt-[16px]">
              Customize your hiring process to perfectly fit your unique
              requirements with our flexible and adaptable solutions.
            </h4>
          </div>

          <div className="max-w-[352px] flex flex-col items-center mx-auto">
            <div className="w-[96px] h-[96px] rounded-full flex justify-center items-center bg-primary">
              <img className="w-[48px]" src={i6} />
            </div>
            <h4 className="text-[20px] md:text-[24px] font-[600] text-center text-[#222B34] mt-[20px] md:mt-[48px]">
              Employee Data
            </h4>
            <h4 className="lg:text-[18px] text-[14px] font-[500] text-center text-[#77828D] mt-[16px]">
              Prioritize and identify top candidates effortlessly with our
              intelligent, streamlined hiring platform.
            </h4>
          </div>
        </div>
      </div>

      <div className="pb-[80px]">
        <Faqs />
      </div>

      <div className="px-[3%] lg:px-[5%] xl:px-[7%] xl:py-[140px] py-[80px] bg-primary">
        <div className="max-w-[560px] mx-auto ">
          <h4 className="md:text-[28px] text-[20px] xl:text-[48px] xl:leading-[74px] font-[600] text-text text-center tracking-tight ">
            Be the First to Experience
          </h4>
          <h4 className="md:text-[20px] text-[16px] font-[500] text-text text-center mt-[8px]">
            Sign up now to get early access and exclusive updates
          </h4>
          <form
            onSubmit={handleSubmit}
            className="mt-[24px] lg:mt-[33px] grid grid-cols-1 gap-[16px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[17px]">
              <div className="w-full">
                <h4 className="text-[12px] font-[600]">First Name</h4>
                <input
                  className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#E6EAEB] border-[1px] w-full text-[14px]"
                  placeholder="Enter first name"
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <h4 className="text-[12px] font-[600]">Last Name</h4>
                <input
                  className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#E6EAEB] border-[1px] w-full text-[14px]"
                  placeholder="Enter last name"
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <h4 className="text-[12px] font-[600]">Email</h4>
              <input
                className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#E6EAEB] border-[1px] w-full text-[14px]"
                placeholder="Enter email address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <h4 className="text-[12px] font-[600]">Company Name</h4>
              <input
                className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#E6EAEB] border-[1px] w-full text-[14px]"
                placeholder="Enter company Name"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full">
              <h4 className="text-[12px] font-[600]">Your role</h4>
              <input
                className="placeholder:text-[14px] lg:placeholder:text-[16px] px-[14px] py-[10px] rounded-[8px] mt-[8px] border-[#E6EAEB] border-[1px] w-full text-[14px]"
                placeholder="Enter your role"
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="bg-[#04040A] w-full px-[20px] py-[12px] text-[14px] md:text-[16px] font-[500] text-white rounded-[8px] hover:bg-gray-800 mt-[16px]"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Get Early Access"}
            </button>
          </form>
          {statusMessage && (
            <p className="mt-4 text-center text-white">{statusMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
