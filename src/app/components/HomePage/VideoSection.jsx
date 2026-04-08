"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative py-16 lg:py-24 bg-gradient-to-b from-[#1a1f3a] to-[#0f1535]">
      <div className="max-w-[1440px] mx-auto w-11/12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            See HelpMeSpeak in Action
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
            Watch how easy it is to break language barriers
          </motion.p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-500/30"
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto"
              controls
              autoPlay
              muted
              loop
              playsInline
              poster="/images/appImage.png"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/images/PR HelpMeSpeak Ad (1920_1080) 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay (shows when paused) */}
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={handlePlayPause}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </motion.div>
              </motion.div>
            )}

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default VideoSection;
