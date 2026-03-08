"use client";

import { ChartNetwork } from "lucide-react";
import { SquareCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";

const details = [
  {
    bold: "Shared Family Calendar —",
    det: "Color-coded family members + Google sync",
  },
  { bold: "Tasks & Chores —", det: "Assign, track, and reward kids chores" },
  {
    bold: "Meal & Pantry Planner —",
    det: "Plan meals, track groceries & expiry dates",
  },
  {
    bold: "Shared Family Calendar —",
    det: "Snap items, add QR labels, searchable",
  },
];

function AppDetails() {
  return (
    <div
      id="about"
      className="max-w-[1440px] mx-auto w-11/12 py-6 md:py-8 lg:py-12"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="w-full mx-auto lg:mx-0">
          <div
            style={{
              backgroundImage: "url('/images/detailsApp.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="h-[400px] lg:h-[880px] w-auto relative lg:ml-20 mx-auto lg:mx-0"
          ></div>
        </div>
        <div className="space-y-6">
          <h2 className="text-dark text-2xl md:text-3xl lg:text-4xl">
            Our Mission
          </h2>
          <h1 className="text-[#2A2A2A] text-3xl md:text-4xl lg:text-5xl font-semibold">
            We Build Tools That Make Global Communication Effortless
          </h1>
          <p className="font-roboto mb-10 lg:text-lg text-dark">
            HelpMeSpeak uses advanced AI and practical learning tools to help
            you communicate confidently. We focus on simplicity, speed, and
            accuracy for a seamless experience.
          </p>

          <div className="space-y-4">
            <div className="flex flex-row items-center gap-4">
              <SquareCheckBig className="text-primary" />
              <p className="font-roboto text-lg lg:text-2xl text-dark">
                Accuracy First
              </p>
            </div>
            <p className="font-roboto lg:text-lg text-dark">
              AI-powered translations you can trust
            </p>

            <div className="flex flex-row items-center gap-4">
              <ChartNetwork className="text-primary" />
              <p className="font-roboto text-lg lg:text-2xl text-dark">
                Continious Innovation
              </p>
            </div>
            <p className="font-roboto lg:text-lg text-dark">
              Always improving with real-time AI learning
            </p>
          </div>
          <div className="flex items-center">
            <button className="py-3 px-12 cursor-pointer rounded-xl bg-primary text-white border border-primary hover:bg-primary/90 duration-300 font-semibold disabled:opacity-50">
              Start Your Free Trial
            </button>
          </div>
          <div className="flex items-center">
            <div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.nureldin.helpmespeak"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={"/icons/playstore.png"}
                        width={500}
                        height={300}
                        alt="Google play icon"
                        className="w-[100px] h-8 lg:w-[120px] lg:h-10"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/helpmespeak-language-helper/id6758175527"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
      </div>
    </div>
  );
}

export default AppDetails;
