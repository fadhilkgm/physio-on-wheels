"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
<section id="hero" className="pt-28 h-full pb-16 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-physio-dark leading-tight">
          Improve your mobility and get back to doing what you love.
        </h1>
        <p className="text-lg text-gray-600">
          Receive expert in-home physical therapy services from Physio on Wheels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="tel:8848481112"
            className="bg-physio-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-opacity-90 transition text-center"
          >
            Call for a Free Consult
          </a>
          <a
            href="https://wa.me/+918848481112"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-physio-primary text-physio-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-physio-primary hover:text-white transition text-center flex items-center justify-center"
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

      <div className="rounded-lg overflow-hidden h-96 relative">
        <Image
          src="/physio-img.png"
          alt="Physical therapy vehicle"
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
