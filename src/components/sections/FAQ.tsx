"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is your pricing structure per hectare?",
      answer: "Pricing depends on the specific service (Spraying, Spreading, Seeding or Mapping), field size, and topography. We offer competitive per-hectare rates with volume discounts for larger commercial farms. Contact us for a customized quote tailored to your operation."
    },
    {
      question: "Do you supply the water and chemicals?",
      answer: "We typically require the farmer to provide the necessary chemicals/fertilizers and a clean water source at the field edge. We supply the drones, operators and mixing equipment."
    },
    {
      question: "Are there terrain limitations for drone applications?",
      answer: "Unlike tractors, drones can easily navigate uneven terrain, muddy fields after heavy rainfall, and steep slopes. Our drones use terrain-following radar to maintain a consistent altitude over the crop canopy, regardless of the ground profile."
    },
    {
      question: "What happens if a drone needs emergency repairs?",
      answer: "We maintain a robust local inventory of spare parts and operate a dedicated repair facility. In the event of an equipment failure, our trained technicians can quickly deploy backup units or perform on-site repairs to ensure zero downtime during critical application windows."
    },
    {
      question: "How does multi-spectral mapping benefit my crops?",
      answer: "Multi-spectral mapping captures data beyond the visible light spectrum, allowing us to identify plant stress, nutrient deficiencies, and disease outbreaks before they become visible to the naked eye. This data enables highly targeted, variable-rate applications of fertilizer or pesticide, saving you money and improving overall crop yield."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand font-semibold tracking-wide uppercase text-sm mb-3">Questions & Answers</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-tech-gray" : "bg-white hover:border-gray-200"
                }`}
            >
              <button
                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-primary pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180 text-brand" : ""
                    }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
