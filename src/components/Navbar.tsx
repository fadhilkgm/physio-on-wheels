"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-2 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto rounded-full flex items-center justify-between px-10 py-2 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 shadow-md backdrop-blur-md"
            : "bg-white/95"
        } dark:bg-gray-900/90`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-physio-tp.png"
            alt="Physio On Wheels"
            width={70}
            height={70}
            className="object-contain h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-white items-center">
          <li>
            <Link href="#" className="hover:text-[#149386] text-[#1BA89B] font-semibold transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#149386] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#149386] transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-[#149386] transition-colors">
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="bg-physio-primary text-white px-5 py-2 rounded-full hover:bg-physio-primary/90 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center text-gray-600 dark:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md transition-all px-6 pt-2 pb-4 rounded-xl mt-2 mx-auto max-w-7xl">
          <ul className="flex flex-col space-y-3 text-gray-700 dark:text-white font-medium">
            <li>
              <Link href="#" className="block hover:text-[#149386] text-[#1BA89B] font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#149386]">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#149386]">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="block hover:text-[#149386]">
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="inline-block mt-2 bg-[#1BA89B] text-white px-4 py-2 rounded-full hover:bg-[#149386] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
