"use client";

import React from "react";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <section id="action-plan" className="py-16 bg-physiobg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-physio-dark">
          Get started. The process is easy.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:gap-16">
          <div className="flex flex-col md:flex-row lg:flex-col items-start gap-4">
            <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-physio-primary font-bold text-xl shadow-sm flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-lg font-bold text-physio-dark mb-2">
                Call me for a free consult.
              </h3>
              <p className="text-gray-600">
                You can reach me at <a href="tel:16048493737" className="text-physio-primary font-medium">1 (604) 849-3737</a> to discuss your needs and set up an in-home visit. Or book your <a href="https://cal.com/pascalbolla" target="_blank" rel="noopener noreferrer" className="text-physio-primary font-medium">virtual visit</a>.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col items-start gap-4">
            <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-physio-primary font-bold text-xl shadow-sm flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-lg font-bold text-physio-dark mb-2">
                Start your therapy sessions.
              </h3>
              <p className="text-gray-600">
                Get personalised physiotherapy right where you need it. I can visit you in your home, long-term care facility, and in hospital. We can also keep it virtual. Or mix and match :-)
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col items-start gap-4">
            <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center text-physio-primary font-bold text-xl shadow-sm flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-lg font-bold text-physio-dark mb-2">
                Celebrate your wins.
              </h3>
              <p className="text-gray-600">
                Put the results of your hard work to good use and check in with me as needed.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center">
          <div className="rounded-lg overflow-hidden w-full max-w-2xl h-72 md:h-96 relative">
            <Image
              src="https://ext.same-assets.com/3699100661/1302934572.jpeg"
              alt="Senior woman doing physical therapy exercises"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
