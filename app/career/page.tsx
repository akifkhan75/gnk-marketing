import React from 'react';
import { BriefcaseIcon, AcademicCapIcon, SparklesIcon } from '@/components/icons';

const jobOpenings = [
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    description: 'We are looking for a data-driven Digital Marketing Specialist to develop, implement, track and optimize our digital marketing campaigns across all digital channels.',
  },
  {
    title: 'Senior Frontend Developer (React)',
    department: 'Engineering',
    location: 'New York, NY',
    description: 'Join our development team to build beautiful, high-performance user interfaces for our clients. Strong experience with React, TypeScript, and modern web technologies is a must.',
  },
  {
    title: 'Content Strategist & Copywriter',
    department: 'Creative',
    location: 'Remote',
    description: 'We need a creative storyteller to lead our content strategy. You will be responsible for creating compelling blog posts, website copy, social media content, and more.',
  },
  {
    title: 'PPC Account Manager',
    department: 'Marketing',
    location: 'Remote',
    description: 'Manage and optimize PPC campaigns for a diverse portfolio of clients. You should have a deep understanding of Google Ads and social media advertising platforms.',
  },
];

const benefits = [
    { title: 'Competitive Salary', description: 'We offer competitive compensation packages.', icon: <BriefcaseIcon/> },
    { title: 'Flexible Work', description: 'Work from anywhere or from our modern offices.', icon: <BriefcaseIcon/> },
    { title: 'Health & Wellness', description: 'Comprehensive health, dental, and vision insurance.', icon: <BriefcaseIcon/> },
    { title: 'Generous PTO', description: 'Enjoy a healthy work-life balance with our PTO policy.', icon: <AcademicCapIcon/> },
    { title: 'Professional Growth', description: 'Access to courses, conferences, and training.', icon: <AcademicCapIcon/> },
    { title: 'Innovative Culture', description: 'Be part of a team that values creativity and new ideas.', icon: <SparklesIcon/> },
]

const CareerPage = () => {
  return (
    <div className="bg-nextwave-bg font-sans text-nextwave-dark antialiased">
      {/* Hero Section */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32 bg-nextwave-light-gray">
        <h1 className="text-5xl font-extrabold tracking-tight text-nextwave-dark md:text-6xl lg:text-7xl">
          Shape the Future of Digital with Us
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-nextwave-gray">
          We're always looking for talented, passionate people to join our team. If you're ready to do the best work of your career, we'd love to hear from you.
        </p>
      </section>

      {/* Why Work With Us Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">Why You'll Love Working Here</h2>
            <p className="mt-6 text-lg text-nextwave-gray">We're building a company culture that's supportive, inclusive, and focused on growth.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-lg">
            {benefits.map(benefit => (
                 <div key={benefit.title} className="flex items-start space-x-4">
                     <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-nextwave-light-orange flex items-center justify-center">
                        {React.cloneElement(benefit.icon, {className: 'h-6 w-6 text-nextwave-orange'})}
                     </div>
                     <div>
                         <h3 className="text-lg font-bold text-nextwave-dark">{benefit.title}</h3>
                         <p className="mt-1 text-nextwave-gray">{benefit.description}</p>
                     </div>
                 </div>
            ))}
        </div>
      </section>


      {/* Open Positions Section */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 bg-nextwave-light-gray">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">
            Current Openings
          </h2>
          <p className="mt-6 text-lg text-nextwave-gray">
            Find your next opportunity. We are looking for talented individuals to join our mission.
          </p>
        </div>
        <div className="mt-16 mx-auto max-w-screen-lg space-y-8">
          {jobOpenings.map((job) => (
            <div key={job.title} className="bg-white dark:bg-nextwave-dark rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md">
              <div>
                <h3 className="text-xl font-bold text-nextwave-dark">{job.title}</h3>
                <p className="mt-1 text-sm text-nextwave-gray">
                  {job.department} &middot; {job.location}
                </p>
                 <p className="mt-3 text-nextwave-gray">{job.description}</p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                <a href={`mailto:careers@nextwave.com?subject=Application for ${job.title}`} className="inline-block transform rounded-full bg-nextwave-orange px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-opacity-90">
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
