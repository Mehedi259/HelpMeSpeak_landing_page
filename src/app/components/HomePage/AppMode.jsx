"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function AppMode() {
  const features = [
    {
      image: "/images/practiceUntilYouFeelReady_section_image.png",
      title: "Practice Until You Feel Ready",
      description: "Build confidence with real-time AI conversation training.",
      layout: "left"
    },
    {
      image: "/images/speakInstantly_section_image.png",
      title: "Speak Instantly in Any Situation",
      description: "Translate voice and text in seconds — no hesitation.",
      layout: "right",
      badge: "Laniers Alphacostar"
    },
    {
      image: "/images/travelWithoutLanguage_section_image.png",
      title: "Travel Without Language Stress",
      description: "Access categorized phrases for airports, restaurants, emergencies, and more.",
      layout: "left"
    }
  ];

  return (
    <div className="relative py-16 lg:py-24 bg-[#0a0f1e]">
      <div className="max-w-[1440px] mx-auto w-11/12">
        {/* Feature Sections */}
        <div className="space-y-8 lg:space-y-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`bg-gradient-to-br from-[#1a2847]/50 to-[#0f1535]/50 rounded-3xl p-8 lg:p-12 border border-blue-500/20 backdrop-blur-sm ${
                feature.layout === "right" ? "bg-[#0d1425]" : ""
              }`}
            >
              <div className={`flex flex-col ${
                feature.layout === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-12`}>
                {/* Text Content */}
                <motion.div 
                  initial={{ opacity: 0, x: feature.layout === "right" ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 text-center lg:text-left"
                >
                  <motion.h3 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-white text-2xl lg:text-3xl font-bold mb-4"
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                    className="text-gray-300 text-base lg:text-lg leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                  {feature.badge && (
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.4
                      }}
                      className="mt-6 inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2"
                    >
                      <span className="text-blue-400 text-sm">🏠 {feature.badge}</span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Image */}
                <motion.div 
                  initial={{ opacity: 0, x: feature.layout === "right" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex-1 relative"
                >
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative w-full max-w-[500px] mx-auto"
                  >
                    <Image
                      src={feature.image}
                      height={600}
                      width={500}
                      alt={feature.title}
                      className="w-full h-auto"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AppMode;
