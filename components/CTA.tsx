'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FAQItem } from '@/types';
import { ChevronDownIcon } from '@/components/icons';

const faqData: FAQItem[] = [
    {
        id: 'faq-1',
        question: "What Digital Marketing Services Do You Offer?",
        answer: "Our agency offers a wide range of digital marketing services tailored to your business needs. We provide a comprehensive solution to help you thrive in the digital landscape, including SEO, PPC, social media marketing, content creation, and web development."
    },
    {
        id: 'faq-2',
        question: "How do you measure the success of a marketing campaign?",
        answer: "We measure success using a variety of key performance indicators (KPIs) tailored to your campaign goals. These can include metrics like website traffic, conversion rates, cost per acquisition (CPA), return on ad spend (ROAS), and customer lifetime value."
    },
    {
        id: 'faq-3',
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term strategy. While some results can be seen in the first few months, it typically takes 6-12 months to see significant and sustainable improvements in search rankings and organic traffic."
    },
    {
        id: 'faq-4',
        question: "What industries do you specialize in?",
        answer: "We have experience working with a diverse range of industries, including e-commerce, technology, healthcare, real estate, and professional services. We tailor our strategies to the unique challenges and opportunities of each industry."
    },
    {
        id: 'faq-5',
        question: "How much do your services cost?",
        answer: "Our pricing is customized based on the scope of the project and the specific services you require. We offer flexible packages and will work with you to create a plan that fits your budget and goals. Contact us for a custom quote."
    }
];

const AccordionItem = ({ item, isOpen, onClick }: { item: FAQItem & {id: string}, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border-b border-nextwave-border">
            <h2>
                <button
                    className="w-full flex justify-between items-center text-left py-6"
                    onClick={onClick}
                    aria-expanded={isOpen}
                    aria-controls={item.id}
                >
                    <span className="text-lg font-semibold text-nextwave-dark">{item.question}</span>
                    <ChevronDownIcon className={`h-6 w-6 text-nextwave-gray transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </h2>
            <div 
                id={item.id}
                className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : ''}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-6 text-nextwave-gray pr-8">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};


const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section id="faq" className="px-4 sm:px-6 lg:px-8 py-24 my-24">
        <div className="grid lg:grid-cols-2 gap-16">
            <div className="max-w-md">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-nextwave-dark">
                    Frequently Asked Question
                </h2>
                <p className="mt-6 text-lg text-nextwave-gray">
                    Whether you're new to digital marketing or looking to understand more about our services, these FAQs are designed to provide you with clear and concise information.
                </p>
                <p className="mt-6 text-nextwave-gray">
                    Can't find the answer you're looking for? Feel free to{' '}
                    <Link href="/contact" className="font-semibold text-nextwave-orange hover:underline">
                        contact our team
                    </Link>.
                </p>
            </div>
            <div>
                {faqData.map((item, index) => (
                    <AccordionItem 
                        key={item.id}
                        item={{...item, id: `faq-panel-${index}`}}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default FAQ;
