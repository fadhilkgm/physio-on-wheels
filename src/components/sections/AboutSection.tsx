"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-physiobg-light">
      <div className="max-w-7xl mx-auto p-4 py-16  sm:p-6 bg-white rounded-lg">
        <div className="text-center mb-12">
          <h2 className=" text-[#1BA89B] text-xl font-medium mb-2">About US</h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Text content section - on left for desktop */}
          <div className="w-full lg:w-3/5 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-physio-dark">
              Empowering Mobility, One Home at a Time
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-physio-secondary mb-2">
                  Kerala’s Trusted Mobile Physiotherapy
                </h3>
                <p className="text-gray-700">
                  Born from the success of{" "}
                  <strong>MFitt Gym & Physiotherapy</strong> in
                  Kunnamangalam,
                  <strong>Physio on Wheels</strong> was founded on a simple
                  belief: <em>true healing happens where life happens</em>.
                  Whether it’s your living room, workplace, or garden, we bring
                  expert therapy to you—because recovery thrives in comfort and
                  familiarity. (And yes, it saves you the traffic hassle in
                  Calicut too!)
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-physio-secondary mb-2">
                  Deep Roots in Calicut’s Healthcare
                </h3>
                <p className="text-gray-700">
                  With <strong>5+ years</strong> of combined clinical
                  experience, our team of
                  <strong>
                    {" "}
                    Kerala Medical Council-certified physiotherapists
                  </strong>{" "}
                  specializes in:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mt-2">
                  <li>
                    Post-surgical rehab (knee/hip replacements, spinal
                    surgeries)
                  </li>
                  <li>
                    Stroke & neurological recovery (Parkinson’s, paralysis)
                  </li>
                  <li>Chronic pain management (arthritis, back/neck pain)</li>
                  <li>Geriatric mobility & fall prevention</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-physio-secondary mb-2">
                  Why Choose Us?
                </h3>
                <p className="text-gray-700">
                  As the{" "}
                  <strong>
                    first mobile physiotherapy service in Calicut
                  </strong>
                  , we combine MFitt’s legacy of fitness excellence with
                  personalized home care. Our therapists carry portable
                  equipment, customize treatments for Kerala’s lifestyle (think
                  squatting, stair climbing, or traditional homemaking tasks).
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
