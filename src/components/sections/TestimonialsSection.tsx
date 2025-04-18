"use client";

import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alan",
      age: "60",
      condition: "Frequent faller",
      quote: "Excellent in all aspects, motivation, anatomy knowledge, neurological knowledge, how to put it all together in a cohesive manner.",
      title: "Better balance.",
      rating: 5,
    },
    {
      id: 2,
      name: "John",
      age: "79",
      condition: "Chronic stroke",
      quote: "Pascal has an excellent professional manner, exudes a very positive personality, and takes care in providing physical therapy that addresses differing concerns at different times.",
      title: "Fit after stroke.",
      rating: 5,
    },
    {
      id: 3,
      name: "Rosemarie",
      age: "84",
      condition: "Total knee replacement",
      quote: "Pascal is professional, punctual, and effective. He helped me walk stairs, take long walks, and improve my knee. Highly recommend!",
      title: "Successful knee recovery.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-physio-dark">
          A few kind words from happy patients.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-physiobg-light rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-physio-dark mb-2">
                {testimonial.title}
              </h3>

              <p className="text-gray-600 mb-4 h-36 sm:h-48 md:h-64 lg:h-48">
                "{testimonial.quote}"
              </p>

              <div className="flex justify-start mt-auto">
                <div className="flex flex-col">
                  <div className="flex space-x-1 mb-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <svg
                        key={`testimonial-${testimonial.id}-star-${i}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-yellow-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">
                    {testimonial.name} · {testimonial.age} · {testimonial.condition}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
