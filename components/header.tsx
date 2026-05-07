'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

interface Logo {
  icon: string;
  text: string;
}

interface HeaderProps {
  navLinks: NavLink[];
  logo: Logo;
}

export function Header({ navLinks, logo }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  return (
    <header className="">
      <nav className="max-w-auto mx-auto px-4 py-2 sm:px-6 sm:py-4 lg:px-8 lg:py-5 mb-18">

        {/* Single row — logo | nav | search + hamburger */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex items-center justify-center bg-white">
              <img src={logo.icon} alt="logo" className="h-12 w-11.25 md:h-auto md:w-auto" />
            </div>
            <div className="flex flex-col leading-tight">
              <img src={logo.text} alt="logo" className="h-8 w-20.25 sm:h-auto sm:w-auto" />
            </div>
          </Link>

          {/* One div for everything on the right */}
          <div className="flex items-center gap-5">

            {/* Nav links — visible on lg+ */}
            <div className="hidden lg:flex items-center ">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`nav-link transition-colors duration-200 relative px-5 py-2.5 ${activeLink === link.label
                    ? ''
                    : 'text-gray-600 hover:text-[#C9A84C]'
                    }`}
                >
                  <span className={activeLink === link.label ? 'nav-link-active' : ''}>
                    {link.label}
                  </span>
                  {activeLink === link.label && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] nav-link-underline" />
                  )}
                </Link>
              ))}
            </div>

            {/* Search button — desktop only */}
            <button
              aria-label="Search"
              className="hidden lg:flex px-5 py-5 bg-dark-green rounded-custom-xl text-white items-center justify-center hover:bg-[#2d2d4e] transition-colors duration-200"
            >
              <img src="/search-normal.svg" alt="search" />
            </button>

            {/* Hamburger — mobile & tablet */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden flex items-center justify-center"
            >
              {isOpen ? <X size={22} /> : <img src="/menu.svg" alt="menu" className="" />}
            </button>

          </div>
        </div>

        {/* Mobile/Tablet dropdown menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 bg-gray-50 rounded-xl px-4 py-2 space-y-3 border border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setIsOpen(false);
                }}
                className={`block nav-link transition-colors duration-200 relative pb-1 ${activeLink === link.label
                  ? ''
                  : 'text-gray-600 hover:text-[#C9A84C]'
                  }`}
              >
                <span className={activeLink === link.label ? 'nav-link-active' : ''}>
                  {link.label}
                </span>
                {activeLink === link.label && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] nav-link-underline" />
                )}
              </Link>
            ))}
          </div>
        )}

      </nav>
    </header>
  );
}
