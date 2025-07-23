'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NextwaveLogo, PhoneIcon, MenuIcon, XIcon } from '@/components/icons';
import { ThemeToggle } from '@/components/ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'Articles', href: '/articles' },
    { name: 'About Us', href: '/about' },
    { name: 'Career', href: '/career' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 px-4 py-6 backdrop-blur-md dark:bg-gray-950/80 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-3" aria-label="Nextwave homepage">
            <NextwaveLogo className="h-8 w-8" />
            <span className="text-2xl font-bold text-nextwave-dark">
              GNK Marketing
            </span>
          </Link>
          <nav className="hidden items-center space-x-2 lg:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-nextwave-orange text-white'
                      : 'text-nextwave-gray hover:text-nextwave-dark'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="hidden items-center space-x-4 lg:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="flex items-center space-x-2 rounded-full border border-nextwave-border px-5 py-3 text-sm font-semibold text-nextwave-dark transition-colors hover:bg-nextwave-light-orange"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>Consult With Us</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-nextwave-dark dark:text-nextwave-gray"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="mt-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800 lg:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-md px-4 py-2 text-base font-medium ${
                    isActive
                      ? 'bg-nextwave-orange text-white'
                      : 'text-nextwave-gray hover:bg-nextwave-light-gray hover:text-nextwave-dark'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 flex items-center justify-center space-x-2 rounded-full border border-nextwave-border px-5 py-3 text-sm font-semibold text-nextwave-dark transition-colors hover:bg-nextwave-light-orange"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>Consult With Us</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
