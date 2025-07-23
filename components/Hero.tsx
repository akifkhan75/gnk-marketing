import React from 'react';
import Link from 'next/link';
import {
  ChartBarIcon,
  InstagramIcon,
  FacebookIcon,
  XSocialIcon,
  TikTokIcon,
} from '@/components/icons';

const Hero: React.FC = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <h1 className="text-5xl font-extrabold leading-tight tracking-tighter text-nextwave-dark md:text-6xl lg:text-7xl">
            Empowering Your Business with Cutting-Edge Digital Marketing
            Solutions
            <span className="absolute top-[35%] right-[5%] -rotate-12 -translate-y-1/2 transform rounded-full bg-nextwave-light-orange px-4 py-2 text-sm font-bold text-nextwave-orange lg:right-[-5%]">
              Nextwave
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-nextwave-gray">
            At NextWave, we bring together innovation, strategy, and creativity
            to deliver personalized digital marketing solutions that drive real
            results.
          </p>
          <div className="mt-10 flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-6">
            <Link
              href="/contact"
              className="transform rounded-full bg-nextwave-orange px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-opacity-90"
            >
              Get Started
            </Link>
            <Link href="/service" className="font-semibold text-nextwave-dark hover:underline">
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative flex h-[500px] items-center justify-center">
          <div className="absolute inset-0 -rotate-6 transform rounded-4xl bg-gradient-to-tr from-orange-100 to-white dark:from-orange-900/30 dark:to-gray-900/0"></div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop"
              alt="Woman holding a tablet in a modern office"
              className="absolute top-1/2 left-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute top-1/4 -left-10 w-60 transform rounded-2xl border border-gray-200/50 bg-white/70 p-4 shadow-lg backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/70">
              <div className="flex items-center space-x-3">
                <div className="rounded-lg bg-orange-100 p-3">
                  <ChartBarIcon className="h-6 w-6 text-nextwave-orange" />
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Segmentation
                </p>
              </div>
              <div className="mt-2 flex h-12 items-end space-x-1">
                <div
                  className="w-full rounded-t-sm bg-orange-200"
                  style={{ height: '40%' }}
                ></div>
                <div
                  className="w-full rounded-t-sm bg-orange-200"
                  style={{ height: '60%' }}
                ></div>
                <div
                  className="w-full rounded-t-sm bg-nextwave-orange"
                  style={{ height: '80%' }}
                ></div>
                <div
                  className="w-full rounded-t-sm bg-orange-200"
                  style={{ height: '50%' }}
                ></div>
                <div
                  className="w-full rounded-t-sm bg-orange-200"
                  style={{ height: '30%' }}
                ></div>
              </div>
            </div>
            <div className="absolute bottom-1/4 -right-12 transform rounded-2xl border border-gray-200/50 bg-white/70 p-4 shadow-lg backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/70">
              <p className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Advertising Platform
              </p>
              <div className="flex space-x-3 text-gray-600 dark:text-gray-400">
                <InstagramIcon className="h-7 w-7" />
                <FacebookIcon className="h-7 w-7" />
                <XSocialIcon className="h-7 w-7" />
                <TikTokIcon className="h-7 w-7" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
