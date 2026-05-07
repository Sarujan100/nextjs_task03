'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  subtitle: string;
  description: string;
  items: FAQItem[];
}

export function FAQSection({ title, subtitle, description, items }: FAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="pb-18 sm:pb-14 lg:pb-18">
      <div className="flex flex-col gap-6 md:gap-8 mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-[30px] leading-normal tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500">
            {title.split('“questions”')[0]} <span className="text-primary-500">“questions”</span>
          </h2>
        </div>


        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] leading-normal self-stretch font-lexend font-medium text-dark-green">{subtitle}</h2 >
          <p className="faq-question">{description}</p>
        </div>

        {/* FAQ Accordion */}
        <div className="">
          {items.map((faq, index) => (
            <div
              key={index}
              className=""
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between gap-2.5 py-3 md:py-2.5 text-left transition"
              >
                <h3 className="text-[20px] leading-normal self-stretch font-lexend font-normal text-dark-green">{faq.question}</h3>
                <img
                  src={expandedIndex === index ? "/chevron-up.svg" : "/chevron-down.svg"}
                  alt="Toggle FAQ"
                  className="flex-shrink-0"
                />
              </button>

              {expandedIndex === index && (
                <div className="pl-3 md:pl-4 ">
                  <p className="text-[14px] font-open-sans font-normal text-dark-green leading-normal">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
