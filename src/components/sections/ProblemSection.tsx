"use client";

import React from "react";

const ProblemSection = () => {
  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-blue-50"
      id="services"
    >
      <div className="container mx-auto px-4 max-w-[90rem]">
        <div className="text-center mb-12">
          <h2 className="text-[#1BA89B] text-xl font-medium mb-2">Services</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-physio-dark">
            Comprehensive in-home therapy services{" "}
            <br className="hidden md:block" /> with Physio on Wheels.
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-5 lg:px-0 pt-12">
          {[
            {
              imgSrc: "/stroke-rehab.jpg",
              title: "Stroke & Neuro Rehabilitation",
              desc: "Regain mobility and independence with our specialized neuro rehabilitation programs. Our evidence-based therapies focus on restoring function, improving coordination, and enhancing quality of life after stroke or neurological conditions.",
            },
            {
              imgSrc: "/physio-img2.jpg",
              title: "Ortho & Sports Rehabilitation",
              desc: "Recover from injuries, surgeries, or sports-related strains with customized rehabilitation plans. Our therapies target pain relief, strength restoration, and optimal performance for athletes and active individuals.",
            },
            {
              imgSrc: "/needle-treatment.jpg",
              title: "Needle Therapy",
              desc: "Experience targeted pain relief and accelerated healing with our precision needle therapy. This technique stimulates trigger points to reduce muscle tension, improve circulation, and promote recovery.",
            },
            {
              imgSrc: "/pain.jpg",
              title: "Pain Management",
              desc: "Combat chronic or acute pain with our multidisciplinary approach. From manual therapy to advanced modalities, we create personalized plans to address the root cause of your discomfort.",
            },
            {
              imgSrc: "/IASTM therapy.jpeg",
              title: "IASTM Therapy",
              desc: "Break down scar tissue and fascial restrictions using specialized tools. IASTM therapy enhances mobility, reduces pain, and speeds up recovery for soft tissue injuries.",
            },
            {
              imgSrc: "/antenatal.png",
              title: "Antenatal and Postnatal Physiotherapy",
              desc: "Support your body through pregnancy and postpartum recovery with safe, effective exercises. Our programs alleviate back pain, pelvic discomfort, and prepare you for a stronger postpartum journey.",
            },
            {
              imgSrc: "/gym physiotherapy.jpg",
              title: "Work Plus Therapy & Gym Physiotherapy",
              desc: "Bridge the gap between rehabilitation and fitness with tailored gym-based physio. Whether recovering from injury or enhancing performance, we design programs to meet your goals.",
            },
            {
              imgSrc: "/pediatric.jpg",
              title: "Geriatric & Pediatric Physiotherapy",
              desc: "Specialized care for all ages—from children with developmental delays to seniors managing arthritis. Our gentle, adaptive techniques improve mobility, balance, and daily function.",
            },
            {
              imgSrc: "/postoperative.jpg",
              title: "Post-Operative Physiotherapy",
              desc: "Optimize recovery after surgery with guided rehabilitation. We focus on reducing swelling, restoring range of motion, and rebuilding strength for a faster return to daily activities.",
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
