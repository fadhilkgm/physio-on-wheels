"use client";

import React from "react";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <section id="action-plan" className="py-20 bg-physiobg-light">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-physio-dark leading-tight">
          Getting care has never been this simple.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {[
            {
              step: "1",
              title: "Reach out and connect.",
              description: (
                <>
                  Call me at{" "}
                  <a
                    href="tel:+917370025002"
                    className="text-physio-primary font-semibold"
                  >
                    +91 737 002 5002
                  </a>{" "}
                  or book a{" "}
                  <a
                    href="https://wa.me/+917370025002?text=Hi,%20I'm%20interested%20in%20booking%20a%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-physio-primary font-semibold"
                  >
                    consultation via WhatsApp
                  </a>{" "}
                  to chat about your goals and set things in motion.
                </>
              ),
            },
            {
              step: "2",
              title: "Start your sessions.",
              description:
                "Receive one-on-one therapy at your home, in care, or virtually. I tailor each session to meet your goals—whether that’s recovery, mobility, or pain relief.",
            },
            {
              step: "3",
              title: "Track progress & grow.",
              description:
                "Feel stronger, move easier, and celebrate your progress. We’ll check in regularly to adapt and keep you on track.",
            },
          ].map(({ step, title, description }) => (
            <div
              key={step}
              className="flex flex-col md:flex-row lg:flex-col items-start gap-4"
            >
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center text-physio-primary font-bold text-xl shadow-md">
                {step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-physio-dark mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="py-8 px-4 max-w-4xl mx-auto mt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-physio-dark leading-tight" id="gallery">
            Real moments from real progress
          </h2>

          {/* Grid layout with uniform 9:16 aspect ratio items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
              <video
                src="/gallery/IATSM video.mp4"
                controls
                className="w-full h-full object-cover"
                muted
                poster="/IASTM therapy.jpeg"
              ></video>
            </div>

            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
              <video
                src="/gallery/video2.MP4"
                controls
                muted
                poster="/IASTM therapy.jpeg"
                className="w-full h-full object-cover"
              ></video>
            </div>

            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img1.jpeg"
                alt="Physical therapy session"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img2.jpeg"
                alt="Physical therapy session"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img3.jpeg"
                alt="Physical therapy session"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img4.jpeg"
                alt="Physical therapy session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img5.PNG"
                alt="Physical therapy session"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-md">
              <img
                src="/gallery/img6.PNG"
                alt="Physical therapy session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-physio-dark text-sm">
              Experience the journey to recovery through our patients' successes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
