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
      question: "Is in-home physiotherapy right for me?",
      answer: "In-home physiotherapy is ideal if you have mobility limitations, transportation challenges, a busy schedule, or simply prefer the comfort of your own environment. It's particularly beneficial for seniors, individuals with chronic conditions, and those recovering from surgery."
    },
    {
      id: "faq-2",
      question: "What conditions do you treat?",
      answer: "I specialize in treating a wide range of conditions including chronic pain, neurological disorders (stroke, Parkinson's, MS), post-surgical rehabilitation, balance disorders, arthritis, and geriatric mobility issues. Each treatment plan is personalized to your specific needs and goals."
    },
    {
      id: "faq-3",
      question: "Do I need a doctor's referral?",
      answer: "No, a doctor's referral is not required to begin physiotherapy in British Columbia. However, if you plan to use extended health insurance, your provider may require a referral for reimbursement."
    },
    {
      id: "faq-4",
      question: "What areas do you serve?",
      answer: "I provide in-home physiotherapy throughout North Vancouver, West Vancouver, the Sea to Sky Corridor up to Squamish, and virtual care across British Columbia. For areas outside these regions, please contact me to discuss options."
    },
    {
      id: "faq-5",
      question: "How can I schedule an appointment?",
      answer: "You can schedule an appointment by calling me at 1 (604) 849-3737 or by booking a virtual visit online. I offer flexible scheduling to accommodate your needs."
    },
    {
      id: "faq-6",
      question: "Are your services covered by my insurance?",
      answer: "Physiotherapy services are covered by most extended health insurance plans, MSP (with a referral), ICBC for accident claims, and WorkSafeBC for workplace injuries. I provide receipts for all sessions which you can submit to your insurance provider for reimbursement."
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
