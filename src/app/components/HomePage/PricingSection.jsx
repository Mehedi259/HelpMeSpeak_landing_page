"use client";

import { FaCheck } from "react-icons/fa";

function PricingSection() {
  return (
    <div className="relative pb-14">
      <br />
      <div className="text-center py-6 space-y-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold font-lato leading-normal text-dark">
          Choose The Right Plan For You
        </h1>
        <p className="font-roboto text-center text-lg lg:text-2xl text-dark">
          Flexible plans to match your needs.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-12 max-w-[1440px] w-11/12 mx-auto py-12 lg:py-20">
        <div className="bg-[#415479] rounded-[20px] text-white py-8 md:py-12 px-5 lg:px-6 md:-mr-4 z-0 w-[350px] md:w-[384px]">
          <p className="text-base md:text-lg lg:text-[25px] font-medium tracking-tight mb-4">
            Free
          </p>
          <div className="flex items-center gap-2.5 relative">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-[50px] font-poppins text-[#FDF6E3]">
              €0
              <span className="text-xs md:text-sm text-white">/Month</span>
            </h1>{" "}
          </div>
          <br />
          <br />
          <div>
            <p>Perfect for casual use - start translating today</p>
          </div>
          <br />
          <br />
          <ul className="font-poppins space-y-3 px-4">
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                1 Language Pair
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                Basic Phrases
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                No Offline Packs
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-[#AA9BD8] rounded-[20px] text-white py-8 md:py-12 px-5 lg:px-6 md:-mr-4 z-0 w-[350px] md:w-[384px]">
          <p className="text-base md:text-lg lg:text-[25px] font-medium tracking-tight mb-4">
            Pro Monthly
          </p>
          <div className="flex items-center gap-2.5 relative">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-[50px] font-poppins text-[#FDF6E3]">
              €7.99
              <span className="text-xs md:text-sm text-white">/Month</span>
            </h1>{" "}
          </div>
          <br />
          <br />
          <div>
            <p>Unlock Unlimited Possibilities with Monthly Flexibility</p>
          </div>
          <br />
          <br />
          <ul className="font-poppins space-y-3 px-4">
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                Unlimited Language Pairs
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                All Phrase Library
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                Offline Packs
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-[#7D778E] rounded-[20px] text-white py-8 md:py-12 px-5 lg:px-6 md:-mr-4 z-0 w-[350px] md:w-[384px]">
          <p className="text-base md:text-lg lg:text-[25px] font-medium tracking-tight mb-4">
            Pro Annual
          </p>
          <div className="flex items-center gap-2.5 relative">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-[50px] font-poppins text-[#FDF6E3]">
              €59.99
              <span className="text-xs md:text-sm text-white">/Year</span>
            </h1>{" "}
          </div>
          <br />
          <br />
          <div>
            <p>Save More With The Best Value - Go Annual</p>
          </div>
          <br />
          <br />
          <ul className="font-poppins space-y-3 px-4">
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                Same As Monthly
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                ≈37–38% Cheaper Vs Monthly
              </span>
            </li>
            <li className="flex flex-row gap-3 items-center">
              <span className="">
                <FaCheck className="text-black/50 bg-white p-1 rounded-full text-xl" />
              </span>{" "}
              <span className="text-sm md:text-base tracking-wider">
                Optional 7-Days Trial
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
