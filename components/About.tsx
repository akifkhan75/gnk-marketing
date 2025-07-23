import React from 'react';
import { CheckIcon } from '@/components/icons';

const TailoredStrategies: React.FC = () => {
  const strategies = [
    {
      title: 'Targeted Campaigns',
      description:
        'Reach the right audience based on demographics, interests, and behaviors.',
    },
    {
      title: 'Multi-Platform Expertise',
      description:
        'Google Ads, Facebook, Instagram, LinkedIn, and more. We cover all grounds.',
    },
    {
      title: 'Optimized ROI',
      description:
        'Continuous analysis and optimization for budget-friendly yet impactful results.',
    },
    {
      title: 'Data-Driven Strategies',
      description:
        'Harness insights from analytics to refine and improve campaign performance.',
    },
  ];

  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">
          Your Trusted Partner in Digital Marketing, Driving Business Success
        </h2>
        <p className="mt-6 text-lg text-nextwave-gray">
          Our proven strategies and expert team have consistently delivered
          impactful results, helping businesses thrive in the ever-evolving
          digital landscape.
        </p>
      </div>
      <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-nextwave-dark">
            Tailored Digital Strategies
          </h3>
          <p className="mt-4 max-w-lg text-base text-nextwave-gray">
            Our team conducts in-depth research on your target audience,
            competitors, and industry trends to develop strategies that resonate
            with your brand identity and align with your business objectives.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {strategies.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-nextwave-light-orange p-6"
              >
                <div className="flex items-center space-x-3">
                  <CheckIcon className="h-6 w-6 text-nextwave-orange" />
                  <h4 className="font-bold text-nextwave-dark md:text-base">
                    {item.title}
                  </h4>
                </div>
                <p className="mt-2 text-sm text-nextwave-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex h-96 items-center justify-center lg:h-auto">
          <div className="absolute inset-0 rotate-3 transform rounded-4xl bg-gradient-to-br from-gray-100 to-white dark:from-gray-800/30 dark:to-gray-900/0"></div>
          <img
            src="https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=1470&auto=format&fit=crop"
            alt="Excited person looking at a screen"
            className="relative h-full w-full max-w-md rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-8 right-0 transform rounded-2xl border border-gray-200/50 bg-white/70 p-4 shadow-lg backdrop-blur-xl dark:border-gray-700/50 dark:bg-gray-900/70">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                96% Successful Client
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredStrategies;
