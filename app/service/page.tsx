import React from 'react';
import Link from 'next/link';
import { ServiceChartIcon, ServiceCodeIcon, ServiceAnalystIcon, ServiceSocialIcon, CheckIcon } from '@/components/icons';

const services = [
  {
    id: 'digital-advertising',
    icon: <ServiceChartIcon className="h-8 w-8 text-nextwave-orange" />,
    title: 'Digital Advertising',
    description: "Transform your brand's online presence with our cutting-edge digital advertising solutions. Our expert team creates and manages targeted ad campaigns to maximize reach, drive conversions, and achieve measurable results across platforms like Google, Facebook, and LinkedIn.",
    features: ['Pay-Per-Click (PPC) Management', 'Social Media Advertising', 'Display & Video Ads', 'Campaign Strategy & Optimization'],
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1548&auto=format&fit=crop'
  },
  {
    id: 'web-development',
    icon: <ServiceCodeIcon className="h-8 w-8 text-nextwave-orange" />,
    title: 'Web Development',
    description: 'Build a powerful online presence with our innovative web development services. We design and develop responsive, user-friendly websites that are optimized for performance, security, and tailored to meet your business needs, from e-commerce stores to corporate sites.',
    features: ['Custom Website Design', 'E-commerce Solutions', 'CMS Development (WordPress, etc.)', 'Website Maintenance & Support'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'digital-analysis',
    icon: <ServiceAnalystIcon className="h-8 w-8 text-nextwave-orange" />,
    title: 'Digital Analytics',
    description: 'Unlock valuable insights with our comprehensive digital analysis services. Our skilled analysts provide in-depth reports and actionable data to make informed decisions, optimize strategies, and drive business growth by understanding user behavior and campaign performance.',
    features: ['Analytics Implementation & Audit', 'Custom Dashboards & Reporting', 'Conversion Rate Optimization (CRO)', 'Customer Journey Analysis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'social-media',
    icon: <ServiceSocialIcon className="h-8 w-8 text-nextwave-orange" />,
    title: 'Social Media Marketing',
    description: 'Engage and grow your audience with our strategic social media management services. We craft compelling content, manage campaigns, and analyze performance to enhance your brand`s visibility and foster meaningful connections across all relevant platforms.',
    features: ['Content Creation & Curation', 'Community Management', 'Influencer Marketing', 'Social Listening & Brand Monitoring'],
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop'
  },
  {
    id: 'seo',
    icon: <ServiceAnalystIcon className="h-8 w-8 text-nextwave-orange" />, // Re-using icon
    title: 'Search Engine Optimization (SEO)',
    description: 'Increase your organic visibility and drive qualified traffic to your website. Our SEO experts use proven on-page, off-page, and technical SEO techniques to help you rank higher in search engine results for your target keywords.',
    features: ['Keyword Research & Strategy', 'On-Page & Technical SEO', 'Link Building & Outreach', 'Local SEO Services'],
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1374&auto=format&fit=crop'
  },
  {
    id: 'content-marketing',
    icon: <ServiceChartIcon className="h-8 w-8 text-nextwave-orange" />, // Re-using icon
    title: 'Content Marketing',
    description: 'Attract, engage, and retain your audience with high-quality, relevant content. We develop and execute content strategies that establish your brand as an authority, from blog posts and articles to videos and infographics.',
    features: ['Content Strategy Development', 'Blog & Article Writing', 'Video & Infographic Production', 'Content Distribution & Promotion'],
    image: 'https://images.unsplash.com/photo-1455390587440-42f5b3c3b52d?q=80&w=1470&auto=format&fit=crop'
  },
];

const ServicePage = () => {
  return (
    <div className="bg-nextwave-bg font-sans text-nextwave-dark antialiased">
      {/* Hero Section */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32 bg-nextwave-light-gray">
        <h1 className="text-5xl font-extrabold tracking-tight text-nextwave-dark md:text-6xl lg:text-7xl">
          Our Suite of Digital Services
        </h1>
        <p className="mt-6 mx-auto max-w-3xl text-lg text-nextwave-gray">
          We offer a comprehensive range of digital marketing services designed to help your business grow. Explore our solutions and find the perfect fit for your needs.
        </p>
      </section>

      {/* Services List */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl space-y-24">
          {services.map((service, index) => (
            <div id={service.id} key={service.id} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div className={`relative h-96 lg:h-[500px] ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                 <div className="absolute inset-0 -rotate-3 transform rounded-4xl bg-gradient-to-tr from-orange-100 to-white dark:from-orange-900/30 dark:to-gray-900/0"></div>
                 <img
                    src={service.image}
                    alt={service.title}
                    className="relative h-full w-full rounded-3xl object-cover shadow-2xl"
                 />
              </div>
              <div>
                <div className="inline-block rounded-xl bg-nextwave-light-orange p-4 shadow-sm">
                    {service.icon}
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-nextwave-dark md:text-4xl">
                    {service.title}
                </h2>
                <p className="mt-4 text-lg text-nextwave-gray">
                    {service.description}
                </p>
                <ul className="mt-6 space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckIcon className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-green-500" />
                      <span className="text-lg text-nextwave-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                    href="/contact"
                    className="mt-8 inline-block transform rounded-full bg-nextwave-orange px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-opacity-90"
                    >
                    Get a Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
