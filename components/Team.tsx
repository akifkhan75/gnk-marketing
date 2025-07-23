import React from 'react';
import Link from 'next/link';
import {
  ServiceChartIcon,
  ServiceCodeIcon,
  ServiceAnalystIcon,
  ServiceSocialIcon,
} from '@/components/icons';

const services = [
  {
    icon: <ServiceChartIcon className="h-7 w-7 text-nextwave-orange" />,
    title: 'Digital Advertising Agency',
    description:
      "Transform your brand's online presence with our cutting-edge digital advertising solutions. Our expert team creates and manages targeted ad campaigns to maximize reach, drive conversions, and achieve measurable results.",
    highlighted: false,
    href: '/service#digital-advertising',
  },
  {
    icon: <ServiceCodeIcon className="h-7 w-7 text-white" />,
    title: 'Web Development Agency',
    description:
      'Build a powerful online presence with our innovative web development services. We design and develop responsive, user-friendly websites that are optimized for performance and tailored to meet your business needs.',
    highlighted: true,
    href: '/service#web-development',
  },
  {
    icon: <ServiceAnalystIcon className="h-7 w-7 text-nextwave-orange" />,
    title: 'Digital Analyst Agency',
    description:
      'Unlock valuable insights with our comprehensive digital analysis services. Our skilled analysts provide in-depth reports and actionable data to make informed decisions, optimize strategies, and drive business growth.',
    highlighted: false,
    href: '/service#digital-analysis',
  },
  {
    icon: <ServiceSocialIcon className="h-7 w-7 text-nextwave-orange" />,
    title: 'Social Media Agency',
    description:
      'Engage and grow your audience with our strategic social media management services. We craft compelling content, manage campaigns, and analyze performance to enhance your brand`s visibility and foster meaningful connections.',
    highlighted: false,
    href: '/service#social-media',
  },
];

const ProvenSolutions: React.FC = () => {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">
          Empowering Your Business with Proven Digital Marketing Solutions
        </h2>
        <p className="mt-6 text-lg text-nextwave-gray">
          At NextWave, we combine innovation with data-driven strategies to
          deliver impactful digital marketing solutions that drive real results.
          Provenly helps many top brands succeed since 2014.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-3xl p-8 transition-all duration-300 ${
              service.highlighted
                ? 'bg-nextwave-orange text-white'
                : 'bg-nextwave-light-orange'
            }`}
          >
            <div
              className={`mb-6 w-max rounded-full p-3 ${
                service.highlighted ? 'bg-white/20' : 'bg-white'
              }`}
            >
              {service.icon}
            </div>
            <h3
              className={`text-xl font-bold ${
                service.highlighted ? 'text-white' : 'text-nextwave-dark'
              }`}
            >
              {service.title}
            </h3>
            <p
              className={`mt-3 text-sm ${
                service.highlighted ? 'text-white/80' : 'text-nextwave-gray'
              }`}
            >
              {service.description}
            </p>
            <Link
              href={service.href}
              className={`mt-6 inline-block rounded-full px-5 py-2 text-sm font-semibold ${
                service.highlighted
                  ? 'bg-white text-nextwave-orange'
                  : 'bg-white text-gray-800 hover:bg-gray-50 dark:bg-gray-200 dark:hover:bg-gray-300'
              }`}
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProvenSolutions;
