'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-dark-green text-white px-4 py-8 sm:px-8 sm:py-16 xl:px-25 xl:py-16">
      <div className="mx-auto">

        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img src="/Frame 11.png" alt="FAAVA Properties" className="h-[48px] object-contain" />
        </div>

        {/* Divider */}
        <div className="border-t border-white mb-8"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.5fr] gap-4">

          {/* Reach us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[20px] font-lexend text-white font-semibold leading-normal">Reach us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <img src="/call-calling.svg" alt="Phone" className="" />
                <span className="text-[16px] text-white font-lexend font-normal leading-[26px]">+1012 3456 789</span>
              </div>
              <div className="flex items-center gap-6">
                <img src="/sms.svg" alt="Email" className="" />
                <span className="text-[16px] text-white font-lexend font-normal leading-[26px]">demo@gmail.com</span>
              </div>
              <div className="flex items-center gap-6">
                <img src="/location-2.svg" alt="Location" className="" />
                <span className="text-[16px] text-white font-lexend font-normal leading-[26px]">
                  132 Dartmouth Street Boston, Massachusetts 02156 United States
                </span>
              </div>
            </div>
          </div>

          {/* Grouping Company, Legal, Quick Links for Mobile */}
          <div className="grid grid-cols-2 gap-5 lg:gap-6 md:contents lg:grid lg:col-span-3 lg:grid-cols-3">
            {/* Company */}
            <div>
              <h3 className="text-[20px] font-lexend text-white font-semibold leading-normal mb-6">Company</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">About</Link></li>
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Contact</Link></li>
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Blogs</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-[20px] font-lexend text-white font-semibold leading-normal mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Privacy Policy</Link></li>
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Terms & Services</Link></li>
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Terms of Use</Link></li>
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Refund Policy</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-[20px] font-lexend text-white font-semibold leading-normal mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Techlabz Keybox</Link></li>
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Downloads</Link></li>
                <li><Link href="#" className="text-[16px] text-white font-lexend font-normal leading-[26px]">Forum</Link></li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className=" overflow-hidden">
            <img src="/Rectangle.png" alt="Map" className="h-full w-full object-cover" />
          </div>

        </div>
      </div>
    </footer>
  );
}
