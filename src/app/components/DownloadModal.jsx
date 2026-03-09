"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function DownloadModal({ isOpen, onClose }) {
  const [copiedLink, setCopiedLink] = useState(null);

  const links = [
    {
      name: "Google Play Store",
      url: "https://play.google.com/store/apps/details?id=com.nureldin.helpmespeak",
      icon: "/icons/playstore.png",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Apple App Store",
      url: "https://apps.apple.com/us/app/helpmespeak-language-helper/id6758175527",
      icon: "/icons/applestore.png",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const copyToClipboard = (url, name) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(name);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-[#1a2847] to-[#0f1535] rounded-3xl p-6 md:p-8 max-w-md w-full border border-blue-500/30 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Download HelpMeSpeak
                </h2>
                <p className="text-gray-400 text-sm">
                  Choose your platform and copy the download link
                </p>
              </motion.div>

              {/* Links */}
              <div className="space-y-4">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                        <Image
                          src={link.icon}
                          width={48}
                          height={48}
                          alt={link.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-semibold">{link.name}</h3>
                        <p className="text-gray-400 text-xs">Tap to visit or copy link</p>
                      </div>
                    </div>

                    {/* URL Display */}
                    <div className="bg-black/30 rounded-lg p-3 mb-3 border border-white/5">
                      <p className="text-gray-300 text-xs break-all font-mono">
                        {link.url}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 bg-gradient-to-r ${link.color} text-white py-2.5 px-4 rounded-lg font-semibold text-sm text-center hover:shadow-lg transition-shadow`}
                      >
                        Visit Store
                      </motion.a>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => copyToClipboard(link.url, link.name)}
                        className="bg-white/10 hover:bg-white/20 text-white py-2.5 px-4 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors"
                      >
                        {copiedLink === link.name ? (
                          <>
                            <Check size={16} className="text-green-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            <span>Copy</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <p className="text-gray-500 text-xs">
                  Available on iOS and Android devices
                </p>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
