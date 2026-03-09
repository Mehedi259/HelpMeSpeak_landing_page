"use client";

import Image from "next/image";
import AppDetails from "./components/HomePage/AppDetails";
import AppMode from "./components/HomePage/AppMode";
import HeroSection from "./components/HomePage/HeroSection";
import PricingSection from "./components/HomePage/PricingSection";

export default function Home() {
  return (
    <div className="font-roboto overflow-x-hidden">
      {/* Hero Section with Dark Background */}
      <section className="relative bg-gradient-to-b from-[#0a0e27] via-[#0f1535] to-[#1a1f3a]">
        {/* Starry background effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-[10%] left-[5%] w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-[20%] right-[15%] w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-[40%] left-[20%] w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-[60%] right-[25%] w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-[80%] left-[40%] w-1 h-1 bg-white rounded-full"></div>
          <div className="absolute top-[15%] right-[45%] w-0.5 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-[35%] left-[60%] w-0.5 h-0.5 bg-white rounded-full"></div>
          <div className="absolute top-[70%] right-[10%] w-0.5 h-0.5 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-[1440px] mx-auto w-11/12">
          <HeroSection />
        </div>
      </section>

      {/* App Features Section */}
      <section className="bg-gradient-to-b from-[#1a1f3a] to-[#0f1535] text-white">
        <div className="max-w-[1440px] mx-auto w-11/12 py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            App Features
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Full aste sway way to converaátions or chat with
          </p>
          <AppMode />
        </div>
      </section>

      <PricingSection />
      <AppDetails />
    </div>
  );
}
