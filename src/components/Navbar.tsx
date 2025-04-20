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

  // Smooth scroll function
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Close mobile menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Handle the home link specially
    if (sectionId === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    
    // For other sections
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 100; // Adjust offset to account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

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
        <a href="#" onClick={(e) => scrollToSection(e, 'top')} className="flex items-center">
          <Image
            src="/logo-physio-tp.png"
            alt="Physio On Wheels"
            width={50}
            height={50}
            className="object-contain h-16 w-auto md:h-20 md:w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-white items-center">
          <li>
            <a 
              href="/" 
              onClick={(e) => scrollToSection(e, 'top')} 
              className="hover:text-[#149386] text-[#1BA89B] font-semibold transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')} 
              className="hover:text-[#149386] transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={(e) => scrollToSection(e, 'services')} 
              className="hover:text-[#149386] transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#gallery" 
              onClick={(e) => scrollToSection(e, 'gallery')} 
              className="hover:text-[#149386] transition-colors"
            >
              Gallery
            </a>
          </li>
          <li>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')} 
              className="hover:text-[#149386] transition-colors"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-physio-primary text-white px-5 py-2 rounded-full hover:bg-physio-primary/90 transition-colors"
            >
              Contact
            </a>
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
              <a 
                href="/" 
                onClick={(e) => scrollToSection(e, 'top')} 
                className="block hover:text-[#149386] text-[#1BA89B] font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')} 
                className="block hover:text-[#149386]"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                onClick={(e) => scrollToSection(e, 'services')} 
                className="block hover:text-[#149386]"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#gallery" 
                onClick={(e) => scrollToSection(e, 'gallery')} 
                className="block hover:text-[#149386]"
              >
                Gallery
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                onClick={(e) => scrollToSection(e, 'faq')} 
                className="block hover:text-[#149386]"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-block mt-2 bg-[#1BA89B] text-white px-4 py-2 rounded-full hover:bg-[#149386] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;