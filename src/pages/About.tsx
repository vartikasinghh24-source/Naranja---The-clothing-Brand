import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#ff7e00]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif italic font-bold tracking-tighter text-black">
            Our Story
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[40px] overflow-hidden group relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=1200" 
              alt="Citrus Inspiration"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-serif italic font-bold tracking-tighter text-black mb-8">
              Born from the Sun.
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-black/80 mb-8 leading-relaxed">
              Naranja was founded with a simple idea: that clothing should feel as vibrant and refreshing as a perfectly ripe orange. Inspired by the warmth of the Mediterranean and the bold energy of citrus, we create pieces that celebrate life's most juicy moments.
            </p>
            <p className="text-xl md:text-2xl font-serif italic text-black/80 mb-8 leading-relaxed">
              Our commitment to quality is as strong as our passion for design. We source the finest fabrics and work with artisans who share our vision of sustainable, beautiful apparel. Every stitch is a testament to our love for the craft.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <h4 className="text-4xl font-serif italic font-bold text-black mb-2">100%</h4>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Organic Cotton</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-serif italic font-bold text-black mb-2">24/7</h4>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Fresh Style</p>
              </div>
              <div className="text-center">
                <h4 className="text-4xl font-serif italic font-bold text-black mb-2">01</h4>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60">Signature Logo</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
