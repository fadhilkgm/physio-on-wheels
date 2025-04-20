"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="solution" className="py-16 bg-physiobg-light">
      <div className="max-w-7xl mx-auto p-4 py-16  sm:p-6 bg-white rounded-lg">
      <div className="text-center mb-12">
          <h2 className=" text-[#1BA89B] text-xl font-medium mb-2">
            About US
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Text content section - on left for desktop */}
          <div className="w-full lg:w-3/5 space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-physio-dark">
              Hi, I'm Pascal. I deliver accessible physical therapy.
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-physio-secondary mb-2">
                  Therapy where it works best.
                </h3>
                <p className="text-gray-700">
                  Inspired by one of my favourite professors, the idea for
                  Physio on Wheels came from a simple truth: We move to interact
                  with our surroundings. To improve mobility problems we need to
                  assess and address this interaction. That's why I bring
                  therapy to you. But let's face it, it's also very convenient
                  :-)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-physio-secondary mb-2">
                  Over a decade of experience.
                </h3>
                <p className="text-gray-700">
                  With over a decade of experience in accessible care delivery
                  and an MSc in Rehabilitation Science, I specialize in
                  providing in-home therapy for individuals with chronic pain,
                  neurological disorders, post-surgical rehabilitation needs,
                  and older adults with complex mobility issues.
                </p>
                <p className="text-gray-700">
                  With over a decade of experience in accessible care delivery
                  and an MSc in Rehabilitation Science, I specialize in
                  providing in-home therapy for individuals with chronic pain,
                  neurological disorders, post-surgical rehabilitation needs,
                  and older adults with complex mobility issues.
                </p>
                <p className="text-gray-700">
                  With over a decade of experience in accessible care delivery
                  and an MSc in Rehabilitation Science, I specialize in
                  providing in-home therapy for individuals with chronic pain,
                  neurological disorders, post-surgical rehabilitation needs,
                  and older adults with complex mobility issues.
                </p>
              </div>
            </div>

   
          </div>

          {/* Image section - on right for desktop */}
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
            <div className="relative h-[700px] lg:h-full">
              <Image
                src="/about-img.jpg"
                alt="Managing Director of Vidacta India"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
