import React from 'react';
import Hero from '@/components/Hero';
import Partners from '@/components/Stats';
import TailoredStrategies from '@/components/About';
import ComprehensiveSolutions from '@/components/Services';
import ProvenSolutions from '@/components/Team';
import SuccessStories from '@/components/Testimonials';
import FAQ from '@/components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <TailoredStrategies />
      <ComprehensiveSolutions />
      <ProvenSolutions />
      <SuccessStories />
      <FAQ />
    </>
  );
}
