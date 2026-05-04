'use client';

export function TrustedCompaniesSection() {
  const companies = [
    { id: 1, name: 'Company 1', logo: '/Group.svg' },
    { id: 2, name: 'Company 2', logo: '/Group-2.svg' },
    { id: 3, name: 'Company 3', logo: '/Group-3.svg' },
    { id: 4, name: 'Company 4', logo: '/Group-4.svg' },
    { id: 5, name: 'Company 5', logo: '/Group-5.svg' },
    { id: 6, name: 'Company 6', logo: '/Group-6.svg' },
    { id: 7, name: 'Company 7', logo: '/Group-7.svg' },
  ];

  return (
    <section className="bg-[#F4F6F6] py-12 mx-[-1rem] sm:mx-[-1.5rem] lg:mx-[-100px]">
      <div className="flex flex-col gap-6">
        {/* Section Title */}
        <div className="text-center px-4 sm:px-6 lg:px-[100px]">
          <h2 className="text-[20px] leading-normal font-semibold text-dark-blue font-lexend">
            TRUSTED BY OVER 1K+ COMPANIES
          </h2>
        </div>

        {/* Companies Flex (Horizontal Scroll) */}
        <div className="w-full overflow-x-auto scrollbar-hide py-4">
          <div className="flex items-center justify-center gap-8 md:gap-14 mx-auto min-w-max px-4">
            {companies.map((company) => (
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
