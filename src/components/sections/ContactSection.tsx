"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a server or API
    console.log("Form submitted");
    alert("Thank you for your message. We'll get back to you soon!");
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-physio-dark mb-6">
            I look forward to getting you moving.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:16048493737"
              className="bg-physio-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-opacity-90 transition text-center"
            >
              Call for a Free Consult
            </a>
            <a
              href="https://cal.com/pascalbolla"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-physio-primary text-physio-primary px-6 py-3 rounded-full text-sm font-semibold hover:bg-physio-primary hover:text-white transition text-center flex items-center justify-center"
            >
              Book my Virtual Visit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-physiobg-light rounded-lg p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-center text-physio-dark mb-6">
            Send me a quick note as your first step toward better mobility.
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Name"
                className="bg-white"
                required
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Email"
                className="bg-white"
                required
              />
            </div>

            <div>
              <Input
                type="tel"
                placeholder="Phone number"
                className="bg-white"
              />
            </div>

            <div>
              <Textarea
                placeholder="Message"
                className="bg-white min-h-24"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-physio-dark text-white hover:bg-opacity-90"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
