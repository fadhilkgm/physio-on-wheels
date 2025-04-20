"use client";

import React from "react";

const ProblemSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-[90rem]">
        <div className="text-center mb-12">
          <h2 className="text-[#1BA89B] text-xl font-medium mb-2">Services</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-physio-dark">
            Comprehensive in-home therapy services <br className="hidden md:block" /> with Physio on Wheels.
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-5 lg:px-0 pt-12">
          {[
            {
              imgSrc: "/stroke-rehab.jpg",
              title: "Stroke & Neuro Rehabilitation",
              desc: "Immerse yourself in a dynamic learning environment with experienced instructors. Our comprehensive courses cater to all levels, ensuring you gain fluency and confidence in the German language.",
            },
            {
              imgSrc: "/physio-img2.jpg",
              title: "Ortho & Sports Rehabilitation",
              desc: "Take your B2 proficiency exam conveniently at our dedicated exam center. Benefit from a seamless testing experience, ensuring you are well-prepared and supported throughout the process.",
            },
            {
              imgSrc: "/needle-treatment.jpg",
              title: "Needle Therapy",
              desc: "Relieve pain and inflammation with our expertly administered needle therapy. Our personalized approach ensures you receive the most effective treatment for your specific needs.",
            },

            {
              imgSrc: "/pain.jpg",
              title: "Pain Management",
              desc: "Relieve pain and inflammation with our expertly administered needle therapy. Our personalized approach ensures you receive the most effective treatment for your specific needs.",
            },
            {
              imgSrc: "/IASTM therapy.jpeg",
              title: "IASTM Therapy",
              desc: "Relieve pain and inflammation with our expertly administered needle therapy. Our personalized approach ensures you receive the most effective treatment for your specific needs.",
            },
            {
              imgSrc: "/antenatal.png",
              title: "Antenatal and Postnatal physiotherapy",
              desc: "Relieve pain and inflammation with our expertly administered needle therapy. Our personalized approach ensures you receive the most effective treatment for your specific needs.",
            },
            {
              imgSrc: "/gym physiotherapy.jpg",
              title: "Work Plus Therapy & Gym Physiotherapy",
              desc: "Relieve pain and inflammation with our expertly administered needle therapy. Our personalized approach ensures you receive the most effective treatment for your specific needs.",
            },
            {
              imgSrc: "/pediatric.jpg",
              title: "Geriatric & Pediatric Physiotherapy",
              desc: "Relieve pain and inflammation with our expertly administered needle therapy. Our personalized approach ensures you receive the most effective treatment for your specific needs.",
            },
            {
              imgSrc: "/postoperative.jpg",
              title: "Post Operative Physiotherapy",
              desc: "Relieve pain and inflammation with our expertly administered needle therapy. Our personalized approach ensures you receive the most effective treatment for your specific needs.",
            },

          ].map((card, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl shadow-lg p-5"
            >
              <img
                className="rounded-xl h-80 w-full object-cover"
                src={card.imgSrc}
                alt={card.title}
              />
              <div className="p-3">
                <h5 className="mb-2 text-xl font-semibold tracking-tight text-[#1BA89B]">
                  {card.title}
                </h5>
                <p className="mb-3 text-sm sm:text-base text-gray-700">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
