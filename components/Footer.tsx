import React from 'react';
import Link from 'next/link';
import {
  NextwaveLogo,
  TwitterIcon,
  TelegramIcon,
  InstagramIcon,
} from '@/components/icons';

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-sm text-nextwave-gray transition-colors hover:text-nextwave-dark"
  >
    {children}
  </Link>
);

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-nextwave-border bg-white px-4 pt-16 pb-8 dark:bg-gray-950 sm:px-6 lg:px-8">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link href="/" className="flex items-center space-x-3" aria-label="Nextwave homepage">
            <NextwaveLogo className="h-8 w-8" />
            <span className="text-2xl font-bold text-nextwave-dark">
              Nextwave.
            </span>
          </Link>
          <p className="mt-4 text-sm text-nextwave-gray">
            Your Best Marketing Partner
          </p>
          <a
            href="mailto:hello@nextwave.com"
            className="mt-6 block text-2xl font-semibold text-nextwave-dark transition-colors hover:text-nextwave-orange"
          >
            hello@nextwave.com
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-8 sm:grid-cols-4">
          <div>
            <h3 className="font-bold tracking-wider text-nextwave-dark">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href="/about">About Us</FooterLink>
              </li>
              <li>
                <FooterLink href="/about#team">Our Team</FooterLink>
              </li>
              <li>
                <FooterLink href="/career">Careers</FooterLink>
              </li>
              <li>
                <FooterLink href="/articles">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold tracking-wider text-nextwave-dark">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href="/service#digital-advertising">Digital Advertising</FooterLink>
              </li>
              <li>
                <FooterLink href="/service#seo">Search Engine Optimization</FooterLink>
              </li>
              <li>
                <FooterLink href="/service#web-development">Web Development</FooterLink>
              </li>
              <li>
                <FooterLink href="/service#social-media">Social Media Management</FooterLink>
              </li>
              <li>
                <FooterLink href="/service#content-marketing">Content Marketing</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold tracking-wider text-nextwave-dark">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href="/contact">Help Center</FooterLink>
              </li>
              <li>
                <FooterLink href="#">User Guides</FooterLink>
              </li>
              <li>
                <FooterLink href="/#faq">FAQs</FooterLink>
              </li>
              <li>
                <FooterLink href="/articles">Case Studies</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Webinars</FooterLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold tracking-wider text-nextwave-dark">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center border-t border-nextwave-border pt-8 text-sm text-nextwave-gray sm:flex-row sm:justify-between">
        <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
        <div className="mt-4 flex items-center space-x-4 sm:mt-0">
          <a href="#" className="text-nextwave-gray hover:text-nextwave-dark" aria-label="Follow us on Twitter">
            <TwitterIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-nextwave-gray hover:text-nextwave-dark" aria-label="Join us on Telegram">
            <TelegramIcon className="h-5 w-5" />
          </a>
          <a href="#" className="text-nextwave-gray hover:text-nextwave-dark" aria-label="Follow us on Instagram">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <Link href="/terms-of-service" className="ml-4 hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
