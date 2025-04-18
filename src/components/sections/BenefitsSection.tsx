"use client";

import React from "react";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-physio-dark">
          Key benefits of in-home therapy <br className="hidden md:block" /> with Physio on Wheels.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-physiobg-light rounded-lg p-6 text-center">
            <div className="rounded-full bg-physio-primary bg-opacity-10 h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-physio-primary"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-physio-dark mb-2">
              Effective, compassionate care.
            </h3>
            <p className="text-gray-600 text-sm">
              Evidence-based therapy specific to your needs and a commitment to building a strong therapeutic relationship.
            </p>
          </div>

          <div className="bg-physiobg-light rounded-lg p-6 text-center">
            <div className="rounded-full bg-physio-primary bg-opacity-10 h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-physio-primary"
              >
                <path d="M20 7h-9" />
                <path d="M14 17H5" />
                <circle cx="17" cy="17" r="3" />
                <circle cx="7" cy="7" r="3" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-physio-dark mb-2">
              100% focus on accessibility.
            </h3>
            <p className="text-gray-600 text-sm">
              Physiotherapy services delivered directly to your home, facility, or hospital to eliminate travel and access barriers.
            </p>
          </div>

          <div className="bg-physiobg-light rounded-lg p-6 text-center">
            <div className="rounded-full bg-physio-primary bg-opacity-10 h-16 w-16 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 text-physio-primary"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-physio-dark mb-2">
              Convenient & comfortable.
            </h3>
            <p className="text-gray-600 text-sm">
              Care provided in your own environment to ensure a seamless, stress-free, and efficient rehabilitation experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
