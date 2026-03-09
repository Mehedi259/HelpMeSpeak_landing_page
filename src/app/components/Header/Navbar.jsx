// components/Navbar.jsx
"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import DownloadModal from "../DownloadModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sidebarRef = useRef(null);

  // Close dropdown/sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close Mobile Sidebar
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        menuOpen
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="bg-gradient-to-b from-[#0a0e27] to-[#0f1535]">
      <nav
        id="home"
        className="grid grid-cols-2 lg:grid-cols-3 items-center py-4 max-w-[1440px] mx-auto w-11/12"
      >
        <div className="flex items-center justify-start">
          <Link href={"/"}>
            <div className="flex items-center gap-3">
              <Image
                src="/icons/logo.png"
                height={50}
                width={50}
                alt="Logo image"
                className="w-[40px] md:w-[50px] h-auto"
              />
              <h1 className="text-white text-sm md:text-lg font-bold font-poppins">
                HelpMeSpeak
              </h1>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center">
          <ul className="flex items-center gap-[43px]">
            <li>
              <Link
                href={"/"}
                className={`text-white hover:text-primary transition duration-300`}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="block py-2 text-white hover:text-primary transition"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* COL 3: Right Side (Download Button) */}
        <div className="flex items-center justify-end gap-2">
          {/* Download Button (Desktop only) */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="py-[9px] px-5 rounded-xl bg-primary cursor-pointer text-white border border-primary hover:bg-primary/90 duration-300"
            >
              Get Download Link
            </button>
          </div>

          <div className="flex items-center lg:hidden gap-3">
            <button
              className="bg-primary p-2 rounded-xl text-white cursor-pointer transition hover:bg-primary/90"
              onClick={() => setMenuOpen(true)}
              aria-label="Toggle navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-full lg:hidden z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: menuOpen ? "rgba(0, 0, 0, 0.5)" : "transparent",
        }}
        onClick={() => setMenuOpen(false)}
      >
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6 transform transition-transform duration-300 ease-in-out z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-10 border-b border-gray-300 pb-4">
            <Link href={"/"} onClick={() => setMenuOpen(false)}>
              <Image
                src={"/icons/logo.png"}
                height={50}
                width={50}
                className="w-[40px] h-auto"
                alt="HelpMeSpeak logo"
              />
            </Link>
            <button
              className="text-gray-600 hover:text-primary transition cursor-pointer"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col gap-5 text-lg font-semibold mb-10">
            <li>
              <Link
                href={"/"}
                className={`block py-2 hover:text-primary transition `}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="block py-2 hover:text-primary transition"
              >
                About Us
              </a>
            </li>
          </ul>

          {/* Download Button (Mobile) */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <button
              onClick={() => {
                setIsModalOpen(true);
                setMenuOpen(false);
              }}
              className="w-full py-3 px-4 rounded-xl bg-primary text-white text-sm border border-primary hover:bg-primary/90 duration-300"
            >
              Get Download Link
            </button>
          </div>
        </div>
      </div>

      {/* Download Modal */}
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Navbar;
