'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

interface InspirationItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface InspirationProps {
  title: string;
  description: string;
  items: InspirationItem[];
}

export function InspirationCarouselSection({ title, description, items }: InspirationProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
  }, [selectedIndex, emblaApi]);

  return (
    <section className="py-18 sm:py-14 lg:py-18 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center  gap-6">
          {/* Left Content */}
          <div className="w-full lg:w-1/3 flex flex-col items-start sm:text-center sm:items-center lg:items-start lg:sm:text-start">
            <h2 className="text-5xl font-bold text-light-green-500 font-lexend mb-2.5">
              {title}
            </h2>
            <p className="text-inspiration-desc mb-8 max-w-md">
              {description}
            </p>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={scrollPrev}
                className="p-3 rounded-xl flex items-center justify-center bg-[#F4F5F7] hover:bg-[#E0E6ED] transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <img src="/Line arrow-left.svg" alt="Previous" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 rounded-xl flex items-center justify-center bg-[#F4F5F7] hover:bg-[#E0E6ED] transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <img src="/Line arrow-right.svg" alt="Next" />
              </button>
            </div>

            {/* Dots Indicators (Mobile) */}
            <div className="flex lg:hidden items-center justify-start sm:justify-center gap-5 w-full">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="focus:outline-none transition-all cursor-pointer"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === selectedIndex ? (
                    <Image src="/Active.svg" alt="Active" width={27} height={27} />
                  ) : (
                    <div className="w-3 h-3 bg-[#D8D8D8] rounded-full hover:bg-[#A0A0A0] transition-colors" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Carousel */}
          <div className="w-full lg:w-2/3 relative">
            <div className="overflow-visible lg:overflow-hidden" ref={emblaRef}>
              <div className="flex gap-7 items-start">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    className={`relative cursor-pointer transition-all duration-500 ${index === selectedIndex
                      ? 'flex-[0_0_80%] sm:flex-[0_0_400px] h-[450px] sm:h-[582px]'
                      : 'flex-[0_0_70%] sm:flex-[0_0_340px] h-[380px] sm:h-[482px]'
                      }`}
                    onClick={() => emblaApi?.scrollTo(index)}
                  >
                    <div className="relative h-full w-full rounded-[14px] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />

                      {/* Overlay Card */}
                      {index === selectedIndex && (
                        <div className="absolute bottom-6 left-6 sm:absolute sm:bottom-6 sm:left-6 flex items-end justify-center gap-2.5">
                          <div className="inspiration-card px-4 py-8 shadow-lg sm:max-w-[260px] max-w-[220px]">
                            <div className="flex items-center gap-2 text-base text-[#5E6F6C] font-medium font-poppins mb-2">
                              <span>{item.description}</span>
                            </div>
                            <h3 className="text-2xl tracking-[-0.8px] font-semibold text-[#252F40] font-lexend">
                              {item.title}
                            </h3>
                          </div>

                          {/* Arrow Button attached to card */}
                          <button
                            className="hidden sm:block bg-dark-green p-3 rounded-xl flex items-center justify-center hover:bg-black transition-colors shadow-lg cursor-pointer flex-shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollNext();
                            }}
                          >
                            <img src="/Line arrow-right-2.svg" alt="Next" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicators (Desktop) - Aligned under the 400px active slide */}
            <div className="hidden lg:flex w-[400px] items-center justify-center gap-5 mt-8">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className="focus:outline-none transition-all cursor-pointer"
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index === selectedIndex ? (
                    <Image src="/Active.svg" alt="Active" width={27} height={27} />
                  ) : (
                    <div className="w-3 h-3 bg-[#D8D8D8] rounded-full hover:bg-[#A0A0A0] transition-colors" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

