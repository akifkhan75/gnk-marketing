import React from 'react';

const TermsOfServicePage = () => {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-nextwave-dark mb-8">Terms of Service</h1>
        <div className="space-y-6 text-nextwave-gray text-lg">
            <p className="font-semibold">Last updated: October 26, 2024</p>
            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">1. Agreement to Terms</h2>
            <p>
              By using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
            </p>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">2. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Nextwave and its licensors.
            </p>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">3. Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party web sites or services that are not owned or controlled by Nextwave. Nextwave has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
            </p>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">4. Termination</h2>
            <p>
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">5. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of our Country, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">6. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
            </p>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="list-disc list-inside pl-4">
              <li>By email: <a href="mailto:legal@nextwave.com" className="text-nextwave-orange hover:underline">legal@nextwave.com</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
