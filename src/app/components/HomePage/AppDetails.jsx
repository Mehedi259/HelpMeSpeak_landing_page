"use client";

import { ChartNetwork } from "lucide-react";
import { SquareCheckBig } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="w-full mx-auto lg:mx-0"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              backgroundImage: "url('/images/detailsApp.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="h-[400px] lg:h-[880px] w-auto relative lg:ml-20 mx-auto lg:mx-0"
          ></motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            animate={{ y: [0, -8, 0] }}
            className="text-white text-2xl md:text-3xl lg:text-4xl"
          >
            Our Mission
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            animate={{ y: [0, -10, 0] }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold"
          >
            We Build Tools That Make Global Communication Effortless
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            animate={{ y: [0, -6, 0] }}
            className="font-roboto mb-10 lg:text-lg text-white"
          >
            HelpMeSpeak uses advanced AI and practical learning tools to help
            you communicate confidently. We focus on simplicity, speed, and
            accuracy for a seamless experience.
          </motion.p>

          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              animate={{ y: [0, -7, 0] }}
            >
              <div className="flex flex-row items-center gap-4">
                <SquareCheckBig className="text-primary" />
                <p className="font-roboto text-lg lg:text-2xl text-white">
                  Accuracy First
                </p>
              </div>
              <p className="font-roboto lg:text-lg text-white">
                AI-powered translations you can trust
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              animate={{ y: [0, -7, 0] }}
            >
              <div className="flex flex-row items-center gap-4">
                <ChartNetwork className="text-primary" />
                <p className="font-roboto text-lg lg:text-2xl text-white">
                  Continuous Innovation
                </p>
              </div>
              <p className="font-roboto lg:text-lg text-white">
                Always improving with real-time AI learning
              </p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            animate={{ y: [0, -8, 0] }}
            className="flex items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-12 cursor-pointer rounded-xl bg-primary text-white border border-primary hover:bg-primary/90 duration-300 font-semibold disabled:opacity-50"
            >
              Start Your Free Trial
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            animate={{ y: [0, -6, 0] }}
            className="flex items-center"
          >
            <div>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
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
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
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
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default AppDetails;
