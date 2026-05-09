
'use client';

import { useState } from 'react';

interface HeroStat {
  value: string;
  label: string;
}

interface SearchOption {
  label: string;
  value: string;
}

interface HeroProps {
  title: string;
  highlight: string;
  stats: HeroStat[];
  searchOptions: SearchOption[];
  mainImage: string;
}

export function HeroSection({ title, highlight, stats, searchOptions, mainImage }: HeroProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to split title by \n and handle highlight
  const renderTitle = () => {
    const lines = title.split('\n');
    return lines.map((line, i) => (
      <span key={i}>
        {line.includes(highlight) ? (
          <>
            {line.replace(highlight, '')}
            <span className="text-primary-gold">{highlight}</span>
          </>
        ) : line}
        {i < lines.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="relative pb-18 sm:pb-14 lg:pb-18 min-h-[420px] lg:min-h-[510px] ">

      <section className="custom-gradient-card text-white rounded-[32px] overflow-hidden ">

        {/* Mobile/Tablet — building as full background (hidden on desktop lg+) */}
        <div className="absolute inset-0 xl:hidden z-0 pointer-events-none lg:h-[540px] lg:w-[720px] lg:left-20 lg:-top-5">
          <img
            src={mainImage}
            alt=""
            className="w-full h-full object-cover scale-y-75 md:scale-y-100 object-bottom opacity-75 origin-bottom-[2px]"
          />
        </div>

        {/* Mobile/Tablet — dark overlay for text legibility (hidden on desktop lg+) */}
        <div className="absolute custom-gradient-card rounded-4xl xl:hidden z-[1]" />

        {/* Main content */}
        <div className="relative z-10 px-4 md:px-10 lg:px-8 py-4 lg:py-10.5">
          <div className="flex flex-col justify-between gap-8 w-full xl:w-[55%]">

            {/* Heading + Stats */}
            <div className="flex flex-col gap-5 md:gap-3.5">
              <h1 className="text-[30px] md:text-[38px] lg:text-[48px] text-white leading-[-0.8px] font-extrabold leading-tight tracking-tight font-lexend">
                {renderTitle()} 🤩
              </h1>

              {/* Stats — stacked on mobile, inline on desktop */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-[24px] lg:text-[30px] text-white leading-[-0.8px] font-bold font-lexend">{stat.value}</span>
                    <span className="text-[16px] text-white leading-[26px] font-normal">
                      {stat.label.split('this app')[0]} <br className="hidden md:block" /> this app
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Search Panel */}
            <div className="bg-white rounded-[16px] p-6 md:px-6 md:py-3 text-white w-full lg:min-w-[680px]">
              <div className="flex flex-col lg:flex-row lg:items-center gap-5 w-full">

                <div className="flex flex-col sm:flex-row gap-5 lg:flex lg:flex-row lg:items-center lg:contents">
                  {searchOptions.map((option, i) => (
                    <div key={i} className="relative gradient-border flex flex-row items-center justify-between gap-4 px-4 py-2 cursor-pointer hover:bg-slate-50 transition-all duration-150 w-fit">
                      <div className="flex flex-col gap-1.5" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                        <span className="text-[14px] font-normal font-body text-light-green-500 leading-normal">{option.label}</span>
                        <span className="text-[16px] font-lexend text-light-green-500 font-semibold">{option.value}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenIndex(openIndex === i ? null : i);
                        }}
                        className="p-1"
                      >
                        <img src="/arrow-bottom.svg" alt="arrow" className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                      </button>

                      {openIndex === i && (
                        <div className="absolute top-full left-0 mt-2 p-2 bg-white border rounded shadow-md z-20 text-light-green-500 text-xs">
                          {option.label} dropdown
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Search Button */}
                <button className="flex h-[56px] md:h-[64px] w-full md:w-auto py-9 px-8 justify-center items-center rounded-[12px] bg-light-green-500 text-white font-montserrat text-[20px] font-medium transition-all hover:bg-light-green lg:flex-1">
                  Search
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Desktop (lg+) — building outside <section> so it overflows above the card */}
      <div className="hidden xl:flex absolute -top-10 right-8 bottom-2 justify-center pointer-events-none z-0">
        <img
          src={mainImage}
          alt="3D Building"
          className="object-contain object-center"
        />
      </div>

    </div>
  );
}