import React from 'react';
import Link from 'next/link';
import { SuccessStory } from '@/types';

const storiesData: SuccessStory[] = [
  {
    image:
      'https://images.unsplash.com/photo-1556156155-83e27c5913f0?q=80&w=1470&auto=format&fit=crop',
    title: 'How FitTech Doubled Their Revenue',
    description:
      'FitTech, a fitness equipment startup, partnered with us to improve their digital footprint and increase sales. With our strategic PPC campaigns and content marketing efforts, they saw a doubling of their revenue in just one year.',
    text: 'FitTech, a fitness equipment startup, partnered with us to improve their digital footprint and increase sales. With our strategic PPC campaigns and content marketing efforts, they saw a doubling of their revenue in just one year.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop',
    title: "Revitalizing a Legacy Brand – Classic Cuisines' Digital Makeover",
    description:
      'Classic Cuisines, a traditional family-run restaurant, wanted to modernize their brand and reach a younger audience. We revitalized their digital presence with a fresh website and targeted social media.',
    text: 'Classic Cuisines, a traditional family-run restaurant, wanted to modernize their brand and reach a younger audience. We revitalized their digital presence with a fresh website and targeted social media.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop',
    title: "From Startup to Industry Leader – TechWave's Digital Transformation",
    description:
      'TechWave, a tech startup, struggled to gain traction in a competitive market. Through our tailored digital marketing strategies, we helped them become an industry leader in their niche.',
    text: 'TechWave, a tech startup, struggled to gain traction in a competitive market. Through our tailored digital marketing strategies, we helped them become an industry leader in their niche.',
  },
];

const SuccessStories: React.FC = () => {
  return (
    <section className="bg-white px-4 py-24 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">
          Success Stories: Businesses Thriving Through Our Digital Marketing
          Expertise
        </h2>
        <p className="mt-6 text-lg text-nextwave-gray">
          Our mission is to help businesses succeed, and nothing makes us
          prouder than seeing our clients achieve their goals.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {storiesData.map((story, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-3xl bg-nextwave-light-gray"
          >
            <img
              src={story.image}
              alt={story.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-8">
              <h3 className="text-xl font-bold text-nextwave-dark">
                {story.title}
              </h3>
              <p className="mt-3 h-20 overflow-hidden text-sm text-nextwave-gray">
                {story.description}
              </p>
              <Link
                href="/articles"
                className="mt-6 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-nextwave-dark transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
