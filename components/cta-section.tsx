'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export function CTASection() {
  const philosophies = [
    {

      title: 'Where does it come from?',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Create experiences?',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
      title: 'Where does it come from?',
      description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      title: 'Where can I get some?',
      description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
    },
  ];
  return (
    <section className="pb-18">
      <div className="flex flex-col gap-8 mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-[30px] leading-normal tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500">
            What our happy <span className="text-primary-500">client say</span>
          </h2>
          <p className="text-[14px] leading-[26px] self-stretch font-lexend font-normal text-light-green-500">
            Several selected clients, who already believe in our service.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {philosophies.map((item, index) => {
            return (
              <div
                key={index}
                className="group relative rounded-[16px] p-[1px] cursor-pointer transition-all duration-300 flex flex-col"
              >
                {/* Gradient Border Background (visible on hover) */}
                <div
                  className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, rgba(94, 111, 108, 0.95) 19.79%, rgba(251, 205, 97, 0.95) 100%), url("/IMAGE 2023-12-11 20_49_40 5.png") lightgray 50% / cover no-repeat'
                  }}
                ></div>

                {/* Inner White Card */}
                <div className="relative z-10 bg-white p-6 rounded-[15px] flex flex-col h-full">
                  {/* Number Box */}
                  <div className="gradient-border w-[44px] h-[44px] flex flex-shrink-0 items-center justify-center text-dark-green font-lexend font-semibold text-[20px] transition-all duration-300 group-hover:text-white mb-3.5 relative">
                    {/* Number Box Gradient Background & Border (visible on hover) */}
                    <div
                      className="absolute -inset-[1px] rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(135deg, #FBCD61 10.42%, #0E2925 100%)' }}
                    ></div>
                    <span className="relative z-10">{index + 1}</span>
                  </div>

                  <h3 className="text-[24px] leading-normal tracking-[-0.8px] self-stretch font-lexend font-semibold text-light-green-500 mb-4">{item.title}</h3>
                  <p className="text-[#58605F] text-[20px] font-lexend font-normal leading-normal self-stretch">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>


        {/* Bottom CTA Banner */}
        <div className="gradient-bg text-white rounded-2xl shadow-lg relative overflow-hidden">
          {/* Frame 18381.png pattern background on the right */}
          <div className="absolute inset-0 lg:inset-auto lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto pointer-events-none z-0">
            <img
              src="/Frame 18381.png"
              alt="Pattern"
              className="w-full h-full object-cover lg:w-auto lg:h-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-16 xl:px-50 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-[30px] text-white font-bold leading-normal tracking-[-0.8px] font-lexend">
                We will solve these <br /> problems for you. 😍
              </h3>
              <p className="text-white text-[16px] leading-[26px] font-lexend font-normal">
                Join with more 1200+ happy customers
              </p>

              {/* Avatars and Others */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img src="/Item-5.svg" alt="User" className="" />
                  <img src="/Item-4.svg" alt="User" className="" />
                  <img src="/Item-3.svg" alt="User" className="" />
                  <img src="/Item-2.svg" alt="User" className="" />
                  <img src="/Item.svg" alt="User" className="" />
                </div>
                <span className="text-white text-[16px] leading-[26px] font-lexend font-normal">and others</span>
              </div>
            </div>

            {/* Right Content (Registration Button) */}
            <div className="flex justify-center md:justify-end md:pr-12">
              <button className="glass-panel px-12 py-4 text-white font-lexend font-semibold text-[16px] hover:bg-white/20 transition cursor-pointer">
                Registration
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
