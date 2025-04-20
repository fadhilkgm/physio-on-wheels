"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      id: "faq-1",
      question: "Is home physiotherapy right for me?",
      answer: "Our mobile physiotherapy service is perfect if you have mobility challenges, difficulty traveling, or prefer the comfort and convenience of treatment at home. It's especially beneficial for seniors, post-operative patients, and those with chronic pain or neurological conditions."
    },
    {
      id: "faq-2",
      question: "What conditions do you treat?",
      answer: "Physio on Wheels treats a wide range of conditions including arthritis, stroke rehabilitation, Parkinson's, back/neck pain, joint replacements, sports injuries, and age-related mobility issues. Our Kerala-based team specializes in personalized care for Indian patients."
    },
    {
      id: "faq-3",
      question: "Do I need a doctor's prescription?",
      answer: "While a doctor's prescription isn't mandatory for physiotherapy in India, we recommend consulting your physician. Some insurance providers may require a prescription for claim processing."
    },
    {
      id: "faq-4",
      question: "Which areas in Kerala do you serve?",
      answer: "We currently cover major areas in Ernakulam, Thrissur, and nearby regions in central Kerala. Service availability depends on location - please call +91 XXXXX XXXXX to confirm coverage in your area."
    },
    {
      id: "faq-5",
      question: "How do I book a session?",
      answer: "Book easily via WhatsApp (+91 737 002 5002), our website (www.physioonwheels.in). We offer same-day appointments for urgent cases."
    },
    {
      id: "faq-6",
      question: "What is the cost of a session?",
      answer: "Our sessions are competitively priced. Please contact us for a quote. We accept cash, online bank transfers, or card payments."
    },
    {
      id: "faq-7",
      question: "What equipment do you bring?",
      answer: "Our mobile units carry portable electrotherapy machines, resistance bands, weights, and other essential equipment. For specialized devices, we may arrange clinic visits when necessary."
    },
    {
      id: "faq-8",
      question: "How are your physiotherapists qualified?",
      answer: "All Physio on Wheels therapists are BPT/MPT certified from recognized Indian universities, registered with the Kerala Para Medical Council, with minimum 3 years clinical experience."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-physiobg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-physio-dark">
          Frequently asked questions.
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-lg shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-physio-dark font-semibold hover:text-physio-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
