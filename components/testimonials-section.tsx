'use client';

interface TestimonialItem {
  id: number;
  name: string;
  content: string;
  image: string;
  clusterImage: string;
}

interface TestimonialsSectionProps {
  title: string;
  highlight: string;
  description: string;
  items: TestimonialItem[];
}

export function TestimonialsSection({ title, highlight, description, items }: TestimonialsSectionProps) {
  const currentItem = items[0]; // Currently showing the first item as in the original code

  return (
    <section className="pb-18 sm:pb-14 lg:pb-18">
      <div className="mx-auto flex flex-col gap-12">
        {/* Section Title */}
        <div className="text-center gap-2 flex flex-col">
          <h2 className="text-3xl tracking-[-0.8px] self-stretch font-lexend font-bold text-light-green-500">
            {title} <span className="text-primary-500">{highlight}</span>
          </h2>
          <p className="text-sm self-stretch font-lexend font-normal text-light-green-500">
            {description}
          </p>
        </div>

        {/* Happy Clients - Matthew Paul Feature */}
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Left - Main Image */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="lg:max-w-[280px] xl:max-w-none"
                />
              </div>
            </div>

            {/* Middle - Testimonial Text */}
            <div className="flex flex-col justify-start items-start sm:justify-center sm:items-center sm:text-center lg:justify-start lg:items-start lg:text-start">
              <h3 className="text-3xl lg:text-2xl xl:text-3xl font-lexend font-bold text-light-green-500 mb-5">
                {currentItem.name}
              </h3>
              <p className="text-light-green-500 text-xl lg:text-lg xl:text-xl mb-8 font-lexend">
                {currentItem.content}
              </p>

              {/* Carousel Indicators */}
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-3 bg-primary-500 rounded-full" />
                <div className="w-3 h-3 bg-[#FFF9EB] rounded-full" />
                <div className="w-3 h-3 bg-[#FFF9EB] rounded-full" />
                <div className="w-3 h-3 bg-[#FFF9EB] rounded-full" />
                <div className="w-3 h-3 bg-[#FFF9EB] rounded-full" />
              </div>
            </div>

            {/* Right - Avatar Cluster */}
            <div className="flex items-center justify-center lg:col-span-1">
              <img src={currentItem.clusterImage} alt="" className="w-[397px] h-[355px] lg:w-[320px] lg:h-[285px] xl:w-[397px] xl:h-[355px] object-cover overflow-visible" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

