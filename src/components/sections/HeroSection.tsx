"use client";

import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20  bg-white relative z-10 overflow-hidden"
    >
      <div className="container max-w-[90rem] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-physio-dark leading-tight">
              Get moving, feel alive <br /> with personalized in-home physical therapy.
            </h1>
            <p className="text-lg text-gray-600">
              Experience the freedom to heal at home with <i>"Physio on Wheels"</i>, your trusted partner in physical therapy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:8848481112"
                className="bg-physio-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-physio-primary/90 transition shadow"
              >
                Call for a Consult
              </a>
              <a
                href="https://wa.me/+918848481112"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-physio-primary text-physio-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-physio-primary hover:text-white transition shadow flex items-center justify-center"
              >
                Book my Virtual Visit
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[28rem] relative">
            <Image
              src="/van.png"
              alt="Physical therapy session"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
