import { Award, Globe, TrendingUp } from 'lucide-react';
import speakerImage from '../../assets/0-Santosh-HeadshotPro.png';
import { motion } from 'motion/react';

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#2A2D35] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#417C5E] rounded-full opacity-[0.03] blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-[#63A983] mb-4">Why Choose Us</p>
            <h2 className="text-4xl lg:text-5xl tracking-tight text-white mb-10 font-semibold" style={{ lineHeight: 1.2 }}>
              We don't just consult, we build, explore and empower.
            </h2>

            <div className="space-y-8 mb-12">
              {[
                {
                  icon: Award,
                  title: 'Track Record',
                  description: '10+ years in tech and building enduring partnerships.'
                },
                {
                  icon: TrendingUp,
                  title: 'Real Impact',
                  description: 'Success stories of businesses transforming with Bitcoin.'
                },
                {
                  icon: Globe,
                  title: 'Global Perspective',
                  description: 'Deep insights from travelling across multiple continents.'
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#417C5E]/20 group-hover:border-[#417C5E]/30 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-[#63A983]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-white mb-2 font-medium tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 hover:scale-[1.02] shadow-xl hover:shadow-2xl transition-all duration-300 font-medium"
            >
              More About Us
            </motion.button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#417C5E]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src={speakerImage} 
                  alt="Speaker presenting"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
