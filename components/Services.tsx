import React from 'react';
import Link from 'next/link';
import { CheckIcon } from '@/components/icons';

const ComprehensiveSolutions: React.FC = () => {
  const solutions = [
    'SEO techniques to increase organic search visibility',
    'Precision-targeted PPC campaigns that maximize ad spend',
    'Social media strategies to build stronger customer engagement',
    'Advanced analytics to track campaign success and areas for growth',
  ];

  return (
    <section className="my-24 rounded-4xl bg-nextwave-light-gray px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="relative flex h-96 items-center justify-center lg:h-[500px]">
          <div className="absolute inset-0 -rotate-3 transform rounded-4xl bg-gradient-to-tl from-gray-100 to-white dark:from-gray-800/30 dark:to-gray-900/0"></div>
          <img
            src="https://images.unsplash.com/photo-1491841550275-5b462bf48546?q=80&w=1470&auto=format&fit=crop"
            alt="Happy person with books"
            className="relative h-full w-full max-w-md rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-8 -left-8 w-52 transform rounded-2xl border border-gray-200/50 bg-white/70 p-4 shadow-lg backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/70">
            <div className="flex justify-center">
              <div className="relative h-24 w-24">
                <svg className="h-full w-full" viewBox="0 0 36 36">
                  <path
                    className="text-nextwave-border"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#F9A826"
                    strokeWidth="3"
                    strokeDasharray="74, 100"
                    strokeLinecap="round"
                  ></path>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-xl font-bold text-nextwave-dark">
                    74%
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-sm font-semibold text-gray-700 dark:text-gray-300">
              12k+
            </p>
            <p className="text-center text-xs text-nextwave-gray">
              Contribution last years
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">
            Comprehensive Marketing Solutions
          </h2>
          <p className="mt-6 max-w-lg text-lg text-nextwave-gray">
            We offer a full suite of digital marketing services to ensure all
            aspects of your online presence are optimized for success. From
            boosting your website's SEO to managing pay-per-click (PPC)
            advertising campaigns.
          </p>
          <ul className="mt-8 space-y-4">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-nextwave-gray">{solution}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/service"
            className="mt-8 inline-block font-semibold text-nextwave-dark hover:underline"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveSolutions;
