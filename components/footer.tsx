'use client';

import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface ReachUs {
  title: string;
  phone: string;
  email: string;
  address: string;
}

interface FooterProps {
  logo: string;
  reachUs: ReachUs;
  sections: FooterSection[];
  mapImage: string;
}

export function Footer({ logo, reachUs, sections, mapImage }: FooterProps) {
  return (
    <footer className="bg-dark-green text-white px-4 py-8 sm:px-8 sm:py-16 xl:px-25 xl:py-16">
      <div className="mx-auto">

        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="FAAVA Properties" className="h-[48px] object-contain" />
        </div>

        {/* Divider */}
        <div className="border-t border-white mb-8"></div>




        {/* Responsive Layout: Original grid for mobile/tablet, Flex for lg+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-between gap-4 lg:gap-6">

          {/* Reach us */}
          <div className="flex flex-col gap-6 lg:flex-[1.5] min-w-[200px]">
            <h3 className="text-[20px] font-lexend text-white font-semibold leading-normal">{reachUs.title}</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <img src="/call-calling.svg" alt="Phone" className="" />
                <span className="text-[16px] text-white font-lexend font-normal leading-[26px]">{reachUs.phone}</span>
              </div>
              <div className="flex items-center gap-6">
                <img src="/sms.svg" alt="Email" className="" />
                <span className="text-[16px] text-white font-lexend font-normal leading-[26px]">{reachUs.email}</span>
              </div>
              <div className="flex items-center gap-6">
                <img src="/location-2.svg" alt="Location" className="" />
                <span className="text-[16px] text-white font-lexend font-normal leading-[26px]">
                  {reachUs.address}
                </span>
              </div>
            </div>
          </div>

          {/* Grouping Company, Legal, Quick Links for Mobile */}
          <div className="grid grid-cols-2 gap-5 lg:gap-6 md:contents lg:contents">
            {sections.map((section, idx) => (
              <div key={idx} className="flex-1 min-w-[120px]">
                <h3 className="text-[20px] font-lexend text-white font-semibold leading-normal mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}><Link href={link.href} className="text-[16px] text-white font-lexend font-normal leading-[26px]">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="overflow-hidden lg:flex-[1.5] min-w-[310px] md:col-span-2 lg:col-span-1">
            <img src={mapImage} alt="Map" className="h-[260px] w-full object-cover sm:w-full sm:h-[260px] md:w-full lg:w-full" />
          </div>

        </div>



      </div>
    </footer>
  );
}
