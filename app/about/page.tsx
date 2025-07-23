import React from 'react';
import { TwitterIcon, TelegramIcon, InstagramIcon } from '@/components/icons';

const teamMembers = [
  {
    name: 'Jessica Thompson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b2943e?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Strategy',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'Samantha Rodriguez',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&h=400&fit=crop',
  },
  {
    name: 'David Lee',
    role: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop',
  },
];

const AboutPage = () => {
  return (
    <div className="bg-nextwave-bg font-sans text-nextwave-dark antialiased">
      {/* Hero Section */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32 bg-nextwave-light-gray">
        <h1 className="text-5xl font-extrabold tracking-tight text-nextwave-dark md:text-6xl lg:text-7xl">
          We're a passionate team of digital innovators.
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-nextwave-gray">
          Nextwave was born from a shared vision: to create digital marketing solutions that are not only effective but also transparent, creative, and tailored to the unique DNA of each business we partner with.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-screen-xl items-center gap-16 lg:grid-cols-2">
          <div className="relative h-96 lg:h-[500px]">
            <div className="absolute inset-0 -rotate-3 transform rounded-4xl bg-gradient-to-tr from-orange-100 to-white dark:from-orange-900/30 dark:to-gray-900/0"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
              alt="Team collaborating"
              className="relative h-full w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg text-nextwave-gray">
              Founded in 2014, Nextwave started as a small team with a big idea. We saw a gap in the market for a digital marketing agency that truly listened to its clients and prioritized genuine partnership over quick wins.
            </p>
            <p className="mt-4 text-nextwave-gray">
              Over the years, we've grown into a full-service agency with a diverse team of experts, but our core values remain the same. We are committed to driving measurable results, fostering innovation, and building lasting relationships with our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-4 py-24 bg-nextwave-light-gray sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">
            Meet the Experts
          </h2>
          <p className="mt-6 text-lg text-nextwave-gray">
            Our success is driven by our talented and dedicated team. Get to know the faces behind Nextwave's innovative solutions.
          </p>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mx-auto max-w-screen-xl">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                className="mx-auto h-40 w-40 rounded-full object-cover"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-6 text-xl font-bold text-nextwave-dark">{member.name}</h3>
              <p className="text-nextwave-orange">{member.role}</p>
              <div className="mt-3 flex justify-center space-x-3">
                <a href="#" className="text-nextwave-gray hover:text-nextwave-dark" aria-label={`Twitter profile of ${member.name}`}><TwitterIcon className="h-5 w-5" /></a>
                <a href="#" className="text-nextwave-gray hover:text-nextwave-dark" aria-label={`Telegram profile of ${member.name}`}><TelegramIcon className="h-5 w-5" /></a>
                <a href="#" className="text-nextwave-gray hover:text-nextwave-dark" aria-label={`Instagram profile of ${member.name}`}><InstagramIcon className="h-5 w-5" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">
            Why Partner with Nextwave?
          </h2>
          <p className="mt-6 text-lg text-nextwave-gray">
            We're more than just a marketing agency; we're your growth partner. Here’s what sets us apart.
          </p>
        </div>
        <div className="mt-16 grid max-w-screen-lg mx-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Data-Driven Decisions', description: 'We leverage analytics to inform every strategy, ensuring your marketing budget is spent effectively.' },
            { title: 'Transparent Collaboration', description: 'We believe in open communication and work closely with you at every step of the journey.' },
            { title: 'Creative Innovation', description: 'Our team constantly explores new ideas and technologies to keep your brand ahead of the curve.' },
            { title: 'Customized Strategies', description: "We don't do one-size-fits-all. Every campaign is tailored to your unique goals and audience." },
            { title: 'Proven Track Record', description: 'With years of experience and a portfolio of success stories, we deliver results you can count on.' },
            { title: 'Dedicated Support', description: 'Your success is our priority. Our team is always here to provide support and guidance.' },
          ].map(item => (
            <div key={item.title} className="rounded-2xl bg-nextwave-light-orange p-8">
              <h3 className="text-xl font-bold text-nextwave-dark">{item.title}</h3>
              <p className="mt-2 text-nextwave-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
