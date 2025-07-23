import React from 'react';
import Link from 'next/link';

const articles = [
  {
    slug: 'local-seo-guide-2024',
    category: 'SEO',
    title: 'The 2024 Guide to Local SEO for Small Businesses',
    excerpt: 'Unlock the power of local search and drive foot traffic to your store. Our comprehensive guide covers everything you need to know.',
    author: 'Jessica Thompson',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=400&h=224&fit=crop',
  },
  {
    slug: 'content-strategy-that-converts',
    category: 'Content Marketing',
    title: 'How to Create a Content Strategy That Converts',
    excerpt: 'Content is king, but strategy is queen. Learn how to build a content plan that not only engages but also turns readers into customers.',
    author: 'David Lee',
    date: 'Oct 05, 2024',
    image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=400&h=224&fit=crop',
  },
  {
    slug: 'rise-of-short-form-video',
    category: 'Social Media',
    title: 'The Rise of Short-Form Video: A Marketer\'s Playbook',
    excerpt: 'From TikTok to Reels, short-form video is dominating social media. Here\'s how your brand can leverage this trend for maximum impact.',
    author: 'Samantha Rodriguez',
    date: 'Sep 28, 2024',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&h=224&fit=crop',
  },
  {
    slug: 'core-web-vitals-guide',
    category: 'Web Development',
    title: 'Core Web Vitals: What They Are and Why They Matter for Your Website',
    excerpt: 'Google\'s Core Web Vitals are crucial for user experience and SEO. We break down what they mean and how to optimize for them.',
    author: 'Michael Chen',
    date: 'Sep 21, 2024',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&h=224&fit=crop',
  },
  {
    slug: 'measuring-ppc-roi',
    category: 'PPC',
    title: 'Beyond the Click: Measuring the True ROI of Your PPC Campaigns',
    excerpt: 'Are your PPC campaigns truly profitable? Learn how to track and measure the metrics that matter for a clear view of your return on investment.',
    author: 'David Lee',
    date: 'Sep 14, 2024',
    image: 'https://images.unsplash.com/photo-1556156155-83e27c5913f0?q=80&w=400&h=224&fit=crop',
  },
  {
    slug: 'data-storytelling-guide',
    category: 'Analytics',
    title: 'Data Storytelling: How to Turn Numbers into Narratives',
    excerpt: 'Data is powerful, but it\'s the story it tells that inspires action. Discover how to transform raw data into compelling narratives that drive decisions.',
    author: 'Jessica Thompson',
    date: 'Sep 07, 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=224&fit=crop',
  },
];

const ArticlesPage = () => {
  return (
    <div className="bg-nextwave-bg font-sans text-nextwave-dark antialiased">
      {/* Hero Section */}
      <section className="px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32 bg-nextwave-light-gray">
        <h1 className="text-5xl font-extrabold tracking-tight text-nextwave-dark md:text-6xl lg:text-7xl">
          Nextwave Insights
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-nextwave-gray">
          Stay ahead of the curve with our latest articles, case studies, and expert analysis on the ever-evolving world of digital marketing.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div key={article.title} className="group flex flex-col overflow-hidden rounded-3xl bg-nextwave-light-gray shadow-md transition-shadow hover:shadow-xl">
                <div className="flex-shrink-0">
                  <Link href={`/articles/${article.slug}`}>
                    <img className="h-56 w-full object-cover" src={article.image} alt={`Featured image for ${article.title}`} />
                  </Link>
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-nextwave-orange">
                      {article.category}
                    </p>
                    <Link href={`/articles/${article.slug}`} className="mt-2 block">
                      <p className="text-xl font-bold text-nextwave-dark group-hover:text-nextwave-orange transition-colors">{article.title}</p>
                      <p className="mt-3 text-base text-nextwave-gray">{article.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                       <span className="sr-only">{article.author}</span>
                       <div className="h-10 w-10 rounded-full bg-nextwave-orange flex items-center justify-center font-bold text-white">
                         {article.author.charAt(0)}
                       </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-nextwave-dark">{article.author}</p>
                      <div className="flex space-x-1 text-sm text-nextwave-gray">
                        <time dateTime={new Date(article.date).toISOString()}>{article.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
