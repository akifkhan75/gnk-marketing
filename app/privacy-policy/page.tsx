import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-extrabold text-nextwave-dark mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-nextwave-gray text-lg">
            <p className="font-semibold">Last updated: October 26, 2024</p>
            <p>
              Nextwave ("us", "we", or "our") operates the nextwave.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>

            <h3 className="text-xl font-bold text-nextwave-dark pt-2">Types of Data Collected</h3>
            <h4 className="text-lg font-bold text-nextwave-dark">Personal Data</h4>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">Use of Data</h2>
            <p>Nextwave uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li>To provide and maintain the Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer care and support</li>
                <li>To provide analysis or valuable information so that we can improve the Service</li>
                <li>To monitor the usage of the Service</li>
                <li>To detect, prevent and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-nextwave-dark pt-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc list-inside pl-4">
              <li>By email: <a href="mailto:privacy@nextwave.com" className="text-nextwave-orange hover:underline">privacy@nextwave.com</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
