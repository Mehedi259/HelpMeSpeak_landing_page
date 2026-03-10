"use client";

import { motion } from "framer-motion";
import { Plane, Briefcase, GraduationCap, Globe, Users } from "lucide-react";

function TargetAudience() {
  const audiences = [
    {
      icon: Plane,
      title: "Travelers",
      description: "Navigate foreign countries with confidence and ease"
    },
    {
      icon: Briefcase,
      title: "Business Professionals",
      description: "Communicate effectively in international meetings"
    },
    {
      icon: GraduationCap,
      title: "Students",
      description: "Learn and practice languages for academic success"
    },
    {
      icon: Globe,
      title: "Expats",
      description: "Integrate smoothly into your new community"
    },
    {
      icon: Users,
      title: "Event Organizers",
      description: "Break language barriers at international events"
    }
  ];

  return (
    <div className="relative py-16 lg:py-24 bg-gradient-to-b from-[#0f1535] to-[#1a1f3a]">
      <div className="max-w-[1440px] mx-auto w-11/12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            animate={{ y: [0, -8, 0] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white text-4xl lg:text-5xl font-bold mb-4"
          >
            Who Is HelpMeSpeak For?
          </motion.h2>
          <motion.p 
            animate={{ y: [0, -5, 0] }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
            className="text-gray-400 text-lg"
          >
            Perfect for anyone who wants to communicate across languages
          </motion.p>
        </motion.div>

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                animate={{ y: [0, -8, 0] }}
                className="bg-gradient-to-br from-[#1a2847]/50 to-[#0f1535]/50 rounded-3xl p-6 lg:p-8 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all cursor-pointer"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6"
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h3 className="text-white text-xl lg:text-2xl font-bold mb-3">
                  {audience.title}
                </h3>
                
                <p className="text-gray-300 text-base leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TargetAudience;
