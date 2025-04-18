"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-physio-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-sm text-gray-300 mb-4">Physio on Wheels</h3>
            <p className="text-sm text-gray-400">
              Registered as <em>Pascal Bolla Healthcare & Consulting</em> in British Columbia, Canada
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-300 mb-4">Address</h3>
            <address className="not-italic text-sm text-gray-400">
              Box 917<br />
              2007 Smoke Bluff Road<br />
              Squamish, BC, V8B 0A6
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-300 mb-4">Contacts</h3>
            <p className="text-sm text-gray-400 mb-1">
              <a
                href="mailto:pascal@physioonwheels.com"
                className="hover:text-white transition"
              >
                pascal@physioonwheels.com
              </a>
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <a
                href="tel:16048493737"
                className="hover:text-white transition"
              >
                1 (604) 849 3737
              </a>
            </p>
            <p className="text-sm text-gray-400">
              <a
                href="https://www.linkedin.com/in/pascalbolla/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                linkedin.com/in/pascalbolla
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p className="flex items-center justify-center">
            made with
            <span className="text-red-400 mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </span>
            in Squamish, BC {currentYear} by Pascal Bolla
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
