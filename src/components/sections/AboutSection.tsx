"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="solution" className="py-16 bg-physiobg-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="lg:order-2">
            <div className="rounded-lg overflow-hidden h-80 md:h-96 relative">
              <Image
                src="https://ext.same-assets.com/3699100661/80946248.jpeg"
                alt="Pascal, the physiotherapist"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:order-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-physio-dark">
              Hi, I'm Pascal. I deliver accessible physical therapy.
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-physio-secondary mb-2">
                  Therapy where it works best.
                </h3>
                <p className="text-gray-700">
                  Inspired by one of my favourite professors, the idea for Physio on Wheels came from a simple truth: We move to interact with our surroundings. To improve mobility problems we need to assess and address this interaction. That's why I bring therapy to you. But let's face it, it's also very convenient :-)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-physio-secondary mb-2">
                  Over a decade of experience.
                </h3>
                <p className="text-gray-700">
                  With over a decade of experience in accessible care delivery and an MSc in Rehabilitation Science, I specialize in providing in-home therapy for individuals with chronic pain, neurological disorders, post-surgical rehabilitation needs, and older adults with complex mobility issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
