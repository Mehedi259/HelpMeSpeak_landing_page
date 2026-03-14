"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#003950] py-8 lg:py-10">
      <div className="max-w-[1440px] w-11/12 mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8 lg:gap-12">
        {/* Logo + Description */}
        <div className="">
          <Link href={"/"}>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                src="/icons/logo.png"
                height={500}
                width={500}
                alt="Logo image"
                className="w-[50px] md:w-[70px] h-auto"
              />
              <h1 className="text-primary text-xs sm:text-sm md:text-lg font-bold font-poppins">
                HelpMeSpeak
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-3 text-white">
          <h3 className="pb-2 text-xl md:text-2xl">Legal</h3>
          <ul className="flex flex-row gap-6">
            <li className="text-[#c5c6c7] hover:text-primary">
              <Link href={"/privacy"}>Privacy Policy</Link>
            </li>
            <li className="text-[#c5c6c7] hover:text-primary">
              <Link href={"#"}>Terms and Services</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-[#c5c6c7] text-sm md:text-base">
            Contact E-mail: <span>  </span> h@helpmespeak.app
          </p>
          <p className="text-[#c5c6c7] text-sm md:text-base">
            Support E-mail: <span>  </span> support@helpmespeak.app
          </p>
        </div>
      </div>
      {/* Divider */}
      <div className="border-b border-dark w-full mt-12 md:mt-16 lg:mt-20"></div>

      {/* Copyright */}
      <div className="flex justify-between items-center max-w-[1440px] mx-auto w-11/12">
        <p className="text-center text-[#ADADAD] text-xs md:text-sm pt-6 lg:pt-8">
          © 2025 HelpMeSpeak, Inc. All rights reserved.
        </p>
        <div className="flex flex-row gap-8 mt-6 md:mt-8 lg:mt-11">
          <a href="https://facebook.com/helpmespeakapp" target="_blank" rel="noopener noreferrer">
            <Image
              src={"/icons/facebook.jpg"}
              height={60}
              width={60}
              alt="Facebook"
              className="h-[34px] md:h-[34px] lg:h-10 w-[34px] md:w-[34px] lg:w-10 object-cover hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="https://instagram.com/helpmespeakapp" target="_blank" rel="noopener noreferrer">
            <Image
              src={"/icons/instagram.jpg"}
              height={60}
              width={60}
              alt="Instagram"
              className="h-[34px] md:h-[34px] lg:h-10 w-[34px] md:w-[34px] lg:w-10 object-cover hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="https://tiktok.com/@helpmespeakapp" target="_blank" rel="noopener noreferrer">
            <Image
              src={"/icons/tiktok.jpg"}
              height={60}
              width={60}
              alt="TikTok"
              className="h-[34px] md:h-[34px] lg:h-10 w-[34px] md:w-[34px] lg:w-10 object-cover hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
