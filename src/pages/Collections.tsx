import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 1,
    title: "Summer Zest",
    description: "Lightweight fabrics and vibrant colors for the warmest days.",
    image: "https://images.unsplash.com/photo-1523381235208-27d346092425?auto=format&fit=crop&q=80&w=1200",
    color: "#ff7e00"
  },
  {
    id: 2,
    title: "The Archive",
    description: "Timeless pieces that define the Naranja aesthetic.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200",
    color: "#f49939"
  },
  {
    id: 3,
    title: "Citrus Nights",
    description: "Elegant evening wear with a citrus-inspired twist.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
    color: "#000000"
  }
];

const Collections = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#ff7e00]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif italic font-bold tracking-tighter text-black">
            Collections
          </h1>
        </header>

        <div className="flex flex-col gap-24">
          {collections.map((collection, idx) => (
            <motion.div 
              key={collection.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1 aspect-[16/9] md:aspect-[4/5] rounded-[40px] overflow-hidden group relative">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tighter text-black mb-6">
                  {collection.title}
                </h2>
                <p className="text-xl md:text-2xl font-serif italic text-black/80 mb-8 max-w-md mx-auto md:mx-0">
                  {collection.description}
                </p>
                <Link to="/shop">
                  <button className="px-10 py-4 bg-black text-[#ff7e00] rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 group mx-auto md:mx-0">
                    Shop Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
