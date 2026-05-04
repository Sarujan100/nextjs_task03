'use client';

import { useState } from 'react';
import Image from 'next/image';

export function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What features come with Designer Search?',
      answer: 'With the Job Board you have access to one job posting and you can easily swap out listings as many times as you need to. If you’d like to have multiple postings up at the same time, you are able to purchase multiple Job Board subscriptions.',
    },
    {
      question: 'What features come with the Job Board?',
      answer: 'With the Job Board you have access to one job posting and you can easily swap out listings as many times as you need to. If you’d like to have multiple postings up at the same time, you are able to purchase multiple Job Board subscriptions.',
    },
    {
      question: 'How many jobs can I post with the Job Board?',
      answer: 'With the Job Board you have access to one job posting and you can easily swap out listings as many times as you need to. If you’d like to have multiple postings up at the same time, you are able to purchase multiple Job Board subscriptions.',
    },
    {
      question: 'What comes with the Job Board and Designer Search bundle?',
      answer: 'With the Job Board you have access to one job posting and you can easily swap out listings as many times as you need to. If you’d like to have multiple postings up at the same time, you are able to purchase multiple Job Board subscriptions.',
    },
    {
      question: 'Is this a monthly subscription?',
      answer: 'With the Job Board you have access to one job posting and you can easily swap out listings as many times as you need to. If you’d like to have multiple postings up at the same time, you are able to purchase multiple Job Board subscriptions.',
    },
    {
      question: 'How do I make a purchase?',
      answer: 'With the Job Board you have access to one job posting and you can easily swap out listings as many times as you need to. If you’d like to have multiple postings up at the same time, you are able to purchase multiple Job Board subscriptions.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="pb-18">
      <div className="flex flex-col gap-6 md:gap-8 mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-[30px] leading-normal tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500">
            Frequently asked <span className="text-primary-500">“questions”</span>
          </h2>
        </div>


        <div className="flex flex-col gap-2">
          <h2 className="text-[24px] leading-normal self-stretch font-lexend font-medium text-dark-green">You asked, we answered! ✋ </h2 >
          <p className="faq-question">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        </div>

        {/* FAQ Accordion */}
        <div className="">
          {faqs.map((faq, index) => (
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
