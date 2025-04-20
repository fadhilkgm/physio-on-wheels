"use client";
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Prakash",
      age: "63",
      condition: "Post-hip replacement",
      quote:
        "Having therapy come to my home was a game-changer! The Physio team helped me recover faster than I expected with their personalized exercises and care.",
      title: "Back on my feet faster",
      rating: 5,
      image: "/testimonials/testimonial1.jpg",
    },
    {
      id: 2,
      name: "Thomas",
      age: "72",
      condition: "Parkinson's management",
      quote:
        "The convenience of home therapy has been incredible. Their specialists understand neurological conditions and created a program that's significantly improved my mobility and confidence.",
      title: "Regained independence",
      rating: 5,
      image: "/testimonials/testimonial2.jpg",
    },
    {
      id: 3,
      name: "Susan",
      age: "62",
      condition: "Arthritis management",
      quote:
        "No more painful trips to the clinic! The physio comes to me with everything needed. Their arthritis program has reduced my stiffness and improved my quality of life.",
      title: "Moving with ease again",
      rating: 5,
      image: "/testimonials/testimonial3.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-100">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-physio-dark">
          A few kind words from happy patients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 w-16 h-16 rounded-full overflow-hidden border-2 border-physio-dark">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `/testimonials/default-profile.jpg`;
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-physio-dark">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.age} · {testimonial.condition}
                  </p>
                </div>
              </div>

              <h4 className="font-medium text-lg text-physio-dark mb-3">
                {testimonial.title}
              </h4>

              <p className="text-gray-600 mb-6 italic font-light">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center mt-auto">
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={`testimonial-${testimonial.id}-star-${i}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
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
