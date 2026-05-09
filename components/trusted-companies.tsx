'use client';

interface CompanyItem {
  id: number;
  name: string;
  logo: string;
}

interface TrustedCompaniesProps {
  title: string;
  items: CompanyItem[];
}

export function TrustedCompaniesSection({ title, items }: TrustedCompaniesProps) {
  return (
    <section className="bg-[#F4F6F6] py-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-72px] xl:mx-[-100px]">
      <div className="flex flex-col gap-6 sm:gap-1 lg:gap-6">
        {/* Section Title */}
        <div className="text-center px-4 sm:px-6 lg:px-[100px]">
          <h2 className="text-xl font-semibold text-dark-blue font-lexend">
            {title}
          </h2>
        </div>

        {/* Companies Flex (Horizontal Scroll) */}
        <div className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-center gap-8 md:gap-14 mx-auto min-w-max px-4 min-h-[80px]">
            {items.map((company) => (
              <div
                key={company.id}
                className="flex-shrink-0 w-[140px] h-16 flex items-center justify-center filter grayscale transition cursor-pointer"
              >
                <img src={company.logo} alt={company.name} className="max-h-8 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
