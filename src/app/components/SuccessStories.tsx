import { motion } from 'motion/react';
import juicyBImg from '../../assets/JuicyB-Founders.jpg';
import { LazyImage } from './ui/LazyImage';

export function SuccessStories() {
  const stories = [
    {
      number: '01',
      title: 'Juicy B',
      image: juicyBImg,
      description: 'An all-natural juice shop that serves as a Bitcoin literacy hub for the student community. The \'sats back\' loyalty program has resulted in 20% of revenue received in bitcoin!'
    },
    {
      number: '02',
      title: 'Bringin',
      image: null,
      description: 'From self-custody to your bank at lightning speed. Bringin bridges the gap between stacking sats and spending them with ease.'
    },
    {
      number: '03',
      title: 'Travel with Bitcoin',
      image: null,
      description: 'See the world with bitcoin through curated retreats and local travel experiences. 100% of revenue received in bitcoin.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wider text-[#417C5E] mb-4"
          >
            Success Stories
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl tracking-tight text-gray-900 mb-6 max-w-2xl font-semibold" 
            style={{ lineHeight: 1.2 }}
          >
            Real Businesses. Real Results.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl leading-relaxed"
          >
            We've helped entrepreneurs and businesses leverage Bitcoin to create tangible results. Here are just a few highlights from our growing portfolio:
          </motion.p>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="bg-gray-50/80 rounded-[2rem] p-8 lg:p-10 border border-gray-100 hover:border-gray-200 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col"
            >
              {/* Decorative background number gradient */}
              <div className="absolute -right-4 -bottom-4 text-[12rem] font-bold text-gray-900/[0.02] group-hover:text-[#417C5E]/[0.03] transition-colors duration-500 select-none z-0">
                {story.number}
              </div>
              
              <div className="relative z-10 flex-1">
                {story.image && (
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 shadow-sm">
                    <LazyImage
                      src={story.image}
                      alt={story.title}
                      width={1200}
                      height={1600}
                      wrapperClassName="w-full h-full bg-gray-100"
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="mb-6">
                  <span className="text-5xl font-light text-gray-300 group-hover:text-[#417C5E]/40 transition-colors duration-300 tracking-tighter">
                    {story.number}
                  </span>
                </div>
                <h3 className="text-xl text-gray-900 mb-4 font-semibold group-hover:text-[#417C5E] transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
