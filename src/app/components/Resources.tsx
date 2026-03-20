import React from 'react';
import beginnersBook from '../../assets/Bitcoin-for-Beginners-Mockup4-1.webp';
import businessBook from '../../assets/Bitcoin-for-Businesses-Mockup.webp';
import { LazyImage } from './ui/LazyImage';

export function Resources() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-6">
            <p className="text-sm uppercase tracking-wide text-[#417C5E] mb-3 font-semibold">Becoming a Student of Bitcoin</p>
            <h2 className="text-4xl lg:text-5xl tracking-tight text-gray-900 mb-6 font-semibold" style={{ lineHeight: 1.2 }}>
              Have trouble explaining bitcoin to your customers?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Leverage our simple and visual learning material to engage your customers.
            </p>
            <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-800 font-medium rounded-xl hover:border-[#417C5E] hover:text-[#417C5E] shadow-sm hover:shadow-md transition-all duration-300">
              View Resources
            </button>
          </div>

          {/* Right Column - Images */}
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative h-full min-h-[400px] flex items-center">
              {/* Back Image */}
              <div className="absolute right-0 top-0 w-4/5 transform translate-y-8 z-10 hover:z-30 transition-all duration-300 group">
                <div className="rounded-2xl overflow-hidden shadow-2xl isolate ring-1 ring-black/5 bg-white">
                  <LazyImage
                    src={businessBook}
                    alt="Bitcoin for Business book"
                    width={1600}
                    height={1066}
                    wrapperClassName="w-full"
                    className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Front Image */}
              <div className="absolute left-0 bottom-0 w-3/4 transform -translate-y-8 z-20 hover:z-30 transition-all duration-300 group">
                <div className="rounded-2xl overflow-hidden shadow-2xl isolate ring-4 ring-white bg-white">
                  <LazyImage
                    src={beginnersBook}
                    alt="Bitcoin for Beginners book"
                    width={1600}
                    height={1068}
                    wrapperClassName="w-full"
                    className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
