
import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => (
    <div className="text-center py-40">
        <h1 className="text-5xl font-extrabold text-nextwave-dark">404 - Page Not Found</h1>
        <p className="mt-6 text-xl text-nextwave-gray">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="mt-10 inline-block transform rounded-full bg-nextwave-orange px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-opacity-90">
            Go Back to Home
        </Link>
    </div>
);

export default NotFoundPage;
