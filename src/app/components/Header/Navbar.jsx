// components/Navbar.jsx
"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { toast } from "react-toastify";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sidebarRef = useRef(null);

  const [email, setEmail] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(false);

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

  // Email send handler (unchanged)
  const handleSendEmail = async () => {
    if (!email) {
      toast.error("Please Enter your email!", {
        pauseOnHover: true,
        progress: undefined,
        style: { backgroundColor: "#E6E6FA", color: "#00000069" },
        hideProgressBar: true,
      });
      return;
    }

    setLoadingEmail(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({ type: "download", email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message, {
          pauseOnHover: true,
          progress: undefined,
          style: { backgroundColor: "#E6E6FA", color: "#00000069" },
          hideProgressBar: true,
        });
        setEmail("");
      } else {
        toast.error(data.error || "Failed to send email", {
          pauseOnHover: true,
          progress: undefined,
          style: { backgroundColor: "#E6E6FA", color: "#00000069" },
          hideProgressBar: true,
        });
      }
    } catch (err) {
      console.error("Send email error:", err);
      toast.error("Something went wrong!", {
        pauseOnHover: true,
        progress: undefined,
        style: { backgroundColor: "#E6E6FA", color: "#00000069" },
        hideProgressBar: true,
      });
    } finally {
      setLoadingEmail(false);
    }
  };

  return (
    <div>
      <nav
        id="home"
        className="grid grid-cols-2 lg:grid-cols-3 items-center py-4 max-w-[1440px] mx-auto w-11/12"
      >
        <div className="flex items-center justify-start">
          <Link href={"/"}>
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                src="/icons/logo.png"
                height={500}
                width={500}
                alt="Logo image"
                className="w-[50px] md:w-[70px] h-auto"
              />
              <h1 className="text-dark text-xs sm:text-sm md:text-lg font-bold font-poppins">
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
                className={`hover:text-primary transition duration-300`}
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
                className="block py-2 hover:text-primary transition"
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* COL 3: Right Side (Download & User Auth) */}
        <div className="flex items-center justify-end gap-2">
          {/* Download Input Section (Desktop only) */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="relative">
              <Image
                src={"/icons/mail.png"}
                height={14}
                width={14}
                alt="Email icon"
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail..."
                className="py-[9px] px-4 pl-[35px] placeholder:text-sm focus:ring-2 focus:ring-primary focus:outline-none rounded-xl bg-secondary font-normal w-52"
              />
            </div>
            <button
              disabled={loadingEmail}
              onClick={handleSendEmail}
              className="py-[9px] px-5 rounded-xl bg-primary cursor-pointer text-white border border-primary hover:bg-primary/90 duration-300 disabled:opacity-50"
            >
              {loadingEmail ? "Sending..." : "Get Download Link"}
            </button>
          </div>

          <div className="hidden lg:block"></div>

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
                src={"/icons/logo 4.png"}
                height={74}
                width={122}
                className="w-[100px] h-auto"
                alt="Task mama logo"
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

          {/* Download Input Section (Mobile) */}
          <div className="mt-8 pt-4 border-t border-gray-200">
            <h4 className="text-md font-bold mb-3 text-gray-800">
              Get the App Link
            </h4>
            <div className="relative mb-3">
              <Image
                src={"/icons/mail.png"}
                height={14}
                width={14}
                alt="Email icon"
                className="absolute left-4 top-1/2 -translate-y-1/2"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail..."
                className="w-full py-3 px-8 pl-[35px] placeholder:text-sm focus:ring-2 focus:ring-primary focus:outline-none rounded-xl bg-secondary text-sm font-normal"
              />
            </div>
            <button
              disabled={loadingEmail}
              onClick={handleSendEmail}
              className="w-full py-3 px-4 rounded-xl bg-primary text-white text-sm border border-primary hover:bg-primary/90 duration-300 disabled:opacity-50"
            >
              {loadingEmail ? "Sending..." : "Get Download Link"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
