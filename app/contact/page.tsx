import React from 'react';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from '@/components/icons';

const ContactPage = () => {
  return (
    <div className="bg-nextwave-bg text-nextwave-dark">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-nextwave-dark md:text-5xl">Contact Us</h1>
          <p className="mt-6 text-lg text-nextwave-gray">
            Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach out to us through our contact details.
          </p>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 lg:gap-16">
          <div className="relative rounded-3xl bg-nextwave-light-orange p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-nextwave-dark">Get in Touch</h2>
            <p className="mt-4 text-nextwave-gray">Our team is ready to answer your questions and help you with your digital marketing needs.</p>
            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <PhoneIcon className="h-6 w-6 text-nextwave-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nextwave-dark">Call Us</h3>
                  <p className="text-nextwave-gray">Our team is available from Monday to Friday, 9am to 6pm.</p>
                  <a href="tel:+1234567890" className="mt-1 block text-nextwave-orange hover:underline font-semibold">(123) 456-7890</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MailIcon className="h-6 w-6 text-nextwave-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nextwave-dark">Email Us</h3>
                  <p className="text-nextwave-gray">Send us an email and we'll get back to you within 24 hours.</p>
                  <a href="mailto:hello@nextwave.com" className="mt-1 block text-nextwave-orange hover:underline font-semibold">hello@nextwave.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <LocationMarkerIcon className="h-6 w-6 text-nextwave-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nextwave-dark">Our Office</h3>
                  <p className="text-nextwave-gray">123 Marketing Lane, Suite 100, Innovation City, 54321</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-nextwave-gray">Full Name</label>
                <div className="mt-1">
                  <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-nextwave-border bg-nextwave-light-gray p-3 shadow-sm focus:border-nextwave-orange focus:ring-nextwave-orange sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-nextwave-gray">Email Address</label>
                <div className="mt-1">
                  <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-nextwave-border bg-nextwave-light-gray p-3 shadow-sm focus:border-nextwave-orange focus:ring-nextwave-orange sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-nextwave-gray">Subject</label>
                <div className="mt-1">
                  <input type="text" name="subject" id="subject" className="block w-full rounded-md border-nextwave-border bg-nextwave-light-gray p-3 shadow-sm focus:border-nextwave-orange focus:ring-nextwave-orange sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-nextwave-gray">Message</label>
                <div className="mt-1">
                  <textarea id="message" name="message" rows={4} className="block w-full rounded-md border-nextwave-border bg-nextwave-light-gray p-3 shadow-sm focus:border-nextwave-orange focus:ring-nextwave-orange sm:text-sm"></textarea>
                </div>
              </div>
              <div>
                <button type="submit" className="transform rounded-full bg-nextwave-orange px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-opacity-90 w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
