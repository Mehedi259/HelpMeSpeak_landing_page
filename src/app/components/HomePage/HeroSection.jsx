"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DownloadModal from "../DownloadModal";

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Blue glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-12">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 lg:space-y-8 z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Speak Anywhere.<br />
            Belong Everywhere.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-lg lg:text-xl max-w-lg"
          >
            Real-time translation and AI conversation practice that removes language anxiety — so you can travel, study, and work with confidence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="py-4 px-8 cursor-pointer rounded-lg bg-primary text-white hover:bg-primary/90 duration-300 font-semibold text-lg"
            >
              Download the App
            </motion.button>
            
            <div className="flex items-center gap-3">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="https://play.google.com/store/apps/details?id=com.nureldin.helpmespeak" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Image
                  src={"/icons/playstore.png"}
                  width={135}
                  height={40}
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
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
                  width={135}
                  height={40}
                  alt="Download on App Store"
                  className="h-10 w-auto"
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end z-10"
        >
          <div className="relative">
            {/* Glow effect behind phone */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110"
            ></motion.div>
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src={"/images/appImage.png"}
                height={700}
                width={500}
                alt="HelpMeSpeak App"
                className="relative z-10 drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Download Modal */}
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default HeroSection;
