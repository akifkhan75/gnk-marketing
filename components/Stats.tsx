
import React from 'react';

const Partners: React.FC = () => {
  const partners = ['Logoipsum', 'LOCO', 'Umbrella', 'Logoipsum', 'WAVES'];

  return (
    <section className="bg-nextwave-orange py-12 my-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around items-center flex-wrap gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <span className="text-2xl font-bold text-white tracking-widest opacity-80">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
