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
            <h3 className="font-semibold text-sm text-gray-300 mb-4">
              Physio on Wheels
            </h3>
            <p className="text-sm text-gray-400">
              A mobile healthcare initiative by <strong>Mfitt Calicut</strong>
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-gray-300 mb-4">
              Address
            </h3>
            <address className="not-italic text-sm text-gray-400">
              Kunnamangalam,
              <br />
              Calicut,<br />
              Kerala, India
            </address>
          </div>

          <div>
            <h3 className="font-semibold text-sm text-gray-300 mb-4">
              Contacts
            </h3>
            <p className="text-sm text-gray-400 mb-1">
              <a
                href="mailto:physioonwheelskgm@gmail.com"
                className="hover:text-white transition"
              >
                physioonwheelskgm@gmail.com
              </a>
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <a href="tel:16048493737" className="hover:text-white transition">
              +91 737 002 5002
              </a>
            </p>
            <p className="text-sm text-gray-400">
              <a
                href="https://www.instagram.com/physio_on_wheels"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-1"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
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
            </span>{" "}
            {currentYear} by Fadhil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
