import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import heroImg from '../../assets/Bitcoin-for-Beginners-Mockup4-1.webp';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white -z-10" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-7xl tracking-tight text-gray-900 mb-6 font-semibold" style={{ lineHeight: 1.1 }}>
                Bringing Bitcoin Ideas To Life
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                We invest, launch, and scale businesses to accelerate bitcoin adoption globally.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button className="px-8 py-4 bg-[#417C5E] text-white rounded-xl hover:bg-[#366851] shadow-lg shadow-[#417C5E]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 font-medium">
                  Speak with Us
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 text-gray-600 hover:text-gray-900 font-medium hover:bg-gray-50 rounded-xl transition-all duration-300">
                  Learn more
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative z-10 w-full transform-gpu">
                <img 
                  src={heroImg} 
                  alt="Student of Bitcoin Hero visual" 
                  width={1600}
                  height={1068}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto rounded-[2rem] shadow-2xl ring-1 ring-gray-900/5 object-cover [image-rendering:auto] [backface-visibility:hidden]" 
                />
              </div>
              {/* Optional ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#417C5E]/20 to-transparent blur-3xl -z-10 rounded-full scale-90"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
