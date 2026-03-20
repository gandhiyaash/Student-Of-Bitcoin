import { PieChart, Rocket, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

import bringinLogo from '../../assets/bringin-logo-horizontal-white.png';
import oppLogo from '../../assets/Orangepill.png';
import gorillaLogo from '../../assets/gorrilla-sats.jpeg';
import gridlessLogo from '../../assets/Gridless.webp';
import travelLogo from '../../assets/TravelwithBitcoin.png';
import juicyBLogo from '../../assets/JuicyB.png';

export function WhatWeDo() {
  const partners = [
    { name: 'bringin', logo: bringinLogo },
    { name: 'GRIDLESS', logo: gridlessLogo },
    { name: 'Travel with Bitcoin', logo: travelLogo },
    { name: 'Orange Pill App', logo: oppLogo },
    { name: 'GORILLA SATS', logo: gorillaLogo, customClass: 'scale-[1.4] md:scale-[1.5]' },
    { name: 'Juicy B', logo: juicyBLogo }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-[#417C5E] mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl tracking-tight text-gray-900 mb-6 max-w-2xl font-semibold" 
            style={{ lineHeight: 1.2 }}
          >
            Help entrepreneurs leverage Bitcoin's full potential.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            We're on a mission to onboard 21 million users by making bitcoin part of everyday life. Whether it's building a bitcoin bank, mining sustainably, travelling the world or just sipping fresh juice. We back bold ideas rethinking bitcoin.
          </motion.p>
        </div>

        {/* Partner Logos - Infinite Scroll */}
        <div className="mb-24 relative overflow-hidden flex items-center group/marquee">
          {/* Edge fade gradients for seamless entry/exit */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <style>{`
            @keyframes scroll {
              from { transform: translate3d(0, 0, 0); }
              to { transform: translate3d(-50%, 0, 0); }
            }
            .animate-infinite-scroll {
              animation: scroll 30s linear infinite;
              will-change: transform;
            }
            .group\\/marquee:hover .animate-infinite-scroll {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="flex w-max items-center gap-16 md:gap-32 pr-16 md:pr-32 animate-infinite-scroll">
            {/* Double the partners array to create seamless loop */}
            {[...partners, ...partners].map((partner, i) => (
              <div key={i} className="flex items-center justify-center h-24 flex-shrink-0 min-w-[160px] md:min-w-[200px] transition-transform duration-300">
                {partner.logo ? (
                  <img src={partner.logo} alt={`${partner.name} logo`} className={`max-h-16 md:max-h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${partner.customClass || ''}`} />
                ) : (
                  <span className="text-gray-400 font-semibold tracking-wider text-base uppercase whitespace-nowrap">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: PieChart,
              title: 'INVEST',
              description: 'We provide capital and strategic support to bitcoin-focused startups with high growth potential.'
            },
            {
              icon: Rocket,
              title: 'LAUNCH',
              description: 'We help entrepreneurs launch their bitcoin businesses with operational support and guidance.'
            },
            {
              icon: TrendingUp,
              title: 'SCALE',
              description: 'We accelerate growth through our network, expertise, and resources to scale globally.'
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-8">
                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-[#417C5E]/10 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gray-600 group-hover:text-[#417C5E] transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl tracking-tight text-gray-900 mb-4 font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <button className="px-8 py-4 border border-gray-200 text-gray-700 font-medium rounded-xl hover:border-gray-300 hover:bg-white hover:shadow-sm transition-all duration-300">
            Our Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
