import { Check } from 'lucide-react';
import ctaImage from '../../assets/Adopting-Bitcoin-scaled.jpg';
import { motion } from 'motion/react';
import { LazyImage } from './ui/LazyImage';

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#2A2D35] rounded-[2rem] overflow-hidden shadow-2xl relative"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#417C5E] rounded-full opacity-[0.05] blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-12 gap-0 relative z-10">
            {/* Left Column - Content */}
            <div className="lg:col-span-6 p-12 lg:p-20 flex flex-col justify-center">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm font-semibold uppercase tracking-wider text-[#63A983] mb-4"
              >
                Let's Get Started
              </motion.p>
              
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-5xl tracking-tight text-white mb-6 font-semibold" 
                style={{ lineHeight: 1.2 }}
              >
                Bring your idea to life
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-300 mb-10 leading-relaxed"
              >
                Are you an entrepreneur with an idea or a business looking to scale? We're here to help.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl">
                  Speak with Us
                </button>
              </motion.div>

              <div className="space-y-4">
                {['Free call', 'Actionable advice', 'No obligations'].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#417C5E]/20 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#63A983]" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm tracking-wide">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-6 relative group h-full">
              <div className="h-full min-h-[400px] lg:min-h-full">
                <LazyImage
                  src={ctaImage}
                  alt="Bitcoin community"
                  width={1600}
                  height={2133}
                  wrapperClassName="w-full h-full bg-[#2A2D35]"
                  className="w-full h-full object-cover transform scale-[1.01] group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A2D35] to-transparent w-32 hidden lg:block" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
