'use client';

import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

interface PhilosophyCard {
  title: string;
  description: string;
}

interface BannerData {
  title: string;
  description: string;
  avatars: string[];
  buttonText: string;
}

interface CTAProps {
  title: string;
  description: string;
  philosophies: PhilosophyCard[];
  banner: BannerData;
}

export function CTASection({ title, description, philosophies, banner }: CTAProps) {
  return (
    <section className="pb-18 sm:pb-14 lg:pb-18">
      <div className="flex flex-col gap-8 mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500 mb-2">
            {title.split('client say')[0]} <span className="text-primary-500">client say</span>
          </h2>
          <p className="text-sm self-stretch font-lexend font-normal text-light-green-500">
            {description}
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
                <div className="relative z-10 bg-white hover:p-6 rounded-[15px] flex flex-col h-full">
                  {/* Number Box */}
                  <div className="gradient-border w-[44px] h-[44px] flex flex-shrink-0 items-center justify-center text-dark-green font-lexend font-semibold text-[20px] transition-all duration-300 group-hover:text-white mb-3.5 relative">
                    {/* Number Box Gradient Background & Border (visible on hover) */}
                    <div
                      className="absolute -inset-[1px] rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(135deg, #FBCD61 10.42%, #0E2925 100%)' }}
                    ></div>
                    <span className="relative z-10">{index + 1}</span>
                  </div>

                  <h3 className="text-2xl tracking-[-0.8px] self-stretch font-lexend font-semibold text-light-green-500 mb-4">{item.title}</h3>
                  <p className="text-[#58605F] text-xl font-lexend font-normal self-stretch">{item.description}</p>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 py-16 sm:px-6 sm:py-8 md:px-8 md:py-10 xl:px-50 xl:py-16 items-center relative z-10">
            {/* Left Content */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-3xl text-white font-bold tracking-[-0.8px] font-lexend">
                {banner.title.split(' 😍')[0]} 😍
              </h3>
              <p className="text-white text-base font-lexend font-normal">
                {banner.description}
              </p>

              {/* Avatars and Others */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {banner.avatars.map((avatar, i) => (
                    <img key={i} src={avatar} alt="User" className="" />
                  ))}
                </div>
                <span className="text-white text-base font-lexend font-normal">and others</span>
              </div>
            </div>

            {/* Right Content (Registration Button) */}
            <div className="flex justify-start sm:justify-end">
              <button className="glass-panel px-12 py-4 text-white font-lexend font-semibold text-base hover:bg-white/20 transition cursor-pointer">
                {banner.buttonText}
              </button>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
