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
              Get moving, feel alive <br /> with personalized in-home physical
              therapy.
            </h1>
            <p className="text-lg text-gray-600">
              Experience the freedom to heal at home with{" "}
              <i>"Physio on Wheels"</i>, your trusted partner in physical
              therapy.
              <br /><br />A mobile healthcare initiative by{" "}
              <span className="inline-flex items-center space-x-2">
                <Image
                  src="/mfitt-tp.png"
                  width={100}
                  height={30}
                  alt="MFITT Calicut"
                  className="inline"
                />
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:7370025002"
                className="bg-physio-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-physio-primary/90 transition shadow"
              >
                Call for a Consult
              </a>
              <a
                href="https://wa.me/+917370025002?text=Hi,%20I'm%20interested%20in%20booking%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="border border-physio-primary text-physio-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-physio-primary hover:text-white transition shadow flex items-center justify-center"
              >
                Book a Consultation
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
