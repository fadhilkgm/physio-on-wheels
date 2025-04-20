"use client";

import React, { useEffect } from "react";

const ProcessSection = () => {
  const instagramUrl =
    "https://www.instagram.com/reel/DIlMl5_SAkE/?igsh=MXdkYjVkcWw5NnozZQ==";

  useEffect(() => {
    // Load the Instagram embed script only once
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Re-process embeds when URL changes
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [instagramUrl]);

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
                    href="tel:+918848481112"
                    className="text-physio-primary font-semibold"
                  >
                    +91 884 848 1112
                  </a>{" "}
                  or book a{" "}
                  <a
                    href="https://wa.me/+918848481112"
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

        <div className="mt-20 lg:mt-28">
          <h3 className="text-2xl font-bold text-center text-physio-dark mb-8">
            Real moments from real progress
          </h3>
          <div className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={instagramUrl}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "10px",
                margin: 0,
                padding: 0,
                width: "60%",
                maxWidth: "540px",
              }}
            ></blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
