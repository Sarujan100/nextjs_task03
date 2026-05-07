'use client';

import Image from 'next/image';
import { MapPin, Heart, Share2, Bath, Bed, Ruler } from 'lucide-react';
import { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  location: string;
  price: string;
  content: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
}

interface ProjectsProps {
  title: string;
  items: ProjectItem[];
}

export function ProjectsGridSection({ title, items }: ProjectsProps) {
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderTitle = () => {
    const parts = title.split('Dubai');
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="text-primary-500">Dubai</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="">
      <div className="mx-auto pb-18 sm:pb-14 lg:pb-18">
        {/* Section Title */}
        <div className="text-center pb-6">
          <h2 className="text-[30px] leading-normal tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500">
            {renderTitle()}
          </h2>
        </div>


        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {items.map((project) => (
            <div key={project.id} className="project-card bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-64 bg-gray-300 flex items-center justify-center overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 p-5 ">

                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 flex flex-col gap-3">
                    <h3 className="text-[14px] lg:text-[16px] leading-normal self-stretch font-lexend font-semibold text-dark-green">{project.title}</h3>
                    {/* Price */}
                    <p className="text-[14px] lg:text-[16px] leading-[26px] self-stretch font-lexend font-normal text-dark-green">{project.price}</p>
                    <div className="flex items-center text-dark-green text-[16px] sm:text-[14px] lg:text-[16px] font-lexend font-normal gap-2 lg:gap-3 w-full overflow-hidden">
                      <img src="/location.svg" alt="location" className="shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="text-[16px] leading-[26px] self-stretch font-lexend font-normal text-dark-green-100">
                      {project.content}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 lg:gap-5 text-[#0E2824] text-[14px] lg:text-[16px] font-lexend font-medium">
                    <div className="flex items-center gap-2">
                      <img src="/bathtub.png" alt="bathrooms" className="object-contain" />
                      <span>{project.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/bed.png" alt="bedrooms" className="object-contain" />
                      <span>{project.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="/square_foot.png" alt="area" className="object-contain" />
                      <span>{project.area}</span>
                    </div>
                  </div>
                  <button className="text-light-green font-normal text-[12px] leading-normal font-body hover:text-white transition project-card project-card-hover  rounded-full px-3.5 py-2">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>




        {/* Load More Button */}
        <div className="flex justify-center mt-6">
          <button className="relative flex items-center group cursor-pointer">
            <img
              src="/Rectangle 166.png"
              alt="decorative"
              className="absolute -left-10 top-3/4 -translate-y-1/2 object-contain z-0"
            />
            <span className="relative z-10 font-lexend text-[16px] font-semibold text-light-green-500 flex items-center justify-center gap-2.5 ml-4">
              All ads
              <img src="/Line arrow-right.svg" alt="arrow" className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
