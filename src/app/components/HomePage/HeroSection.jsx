"use client";

import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="py-4 ">
      <div className="py-6 lg:py-8 relative">
        {/* heading */}
        <h1 className="text-[30px] md:text-4xl lg:text-[56px] font-semibold font-lato mx-auto text-center max-w-[850px] mb-7 tracking-wider ">
          <span className="text-primary">Learn</span> languages <br /> with
          real-time Translations & <span className="text-primary">AI Chat</span>{" "}
          <span className="text-2xl md:text-3xl lg:text-4xl">
            (reads more naturally in English)
          </span>
        </h1>

        <p className="font-roboto text-center mb-10 text-lg lg:text-2xl text-dark">
          Your personal AI language buddy — translate, chat, and master phrases
          anytime
        </p>
        <div className="flex items-center justify-center pb-6">
          <button className="py-3 px-12 cursor-pointer rounded-xl bg-primary text-white border border-primary hover:bg-primary/90 duration-300 font-semibold disabled:opacity-50">
            Start Your Free Trial
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <a href="https://play.google.com/store/apps/details?id=com.nureldin.helpmespeak" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/icons/playstore.png"}
                      width={500}
                      height={300}
                      alt="Google play icon"
                      className="w-[100px] h-8 lg:w-[120px] lg:h-10"
                    />
                  </a>
                  <a href="https://apps.apple.com/us/app/helpmespeak-language-helper/id6758175527" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={"/icons/applestore.png"}
                      width={500}
                      height={300}
                      alt="Google play icon"
                      className="w-[100px] h-8 lg:w-[120px] lg:h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto max-w-[920px] h-auto">
        <Image
          src={"/images/appImage.png"}
          height={800}
          width={1227}
          alt="App Image"
          className="mx-auto "
        />
      </div>
    </div>
  );
}

export default HeroSection;
