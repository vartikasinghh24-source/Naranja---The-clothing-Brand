import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden pt-20 bg-[#ff7e00]">
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-64 h-64 opacity-20 pointer-events-none"
      >
        <img src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&q=80&w=600" alt="Orange" className="w-full h-full object-contain rounded-full" referrerPolicy="no-referrer" />
      </motion.div>
      <motion.div 
        animate={{ 
          y: [0, -40, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-10 w-80 h-80 opacity-15 pointer-events-none"
      >
        <img src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&q=80&w=600" alt="Orange Slice" className="w-full h-full object-contain rounded-full" referrerPolicy="no-referrer" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center"
      >
        <h2 className="text-[15vw] md:text-[12vw] font-serif italic font-black leading-none tracking-tighter mb-4 text-black">
          Juicy Style.
        </h2>
        <p className="text-xl md:text-2xl font-serif italic max-w-xl mx-auto px-6 text-black/80">
          Embrace the warmth of the sun with our latest citrus-inspired collection.
        </p>
        <Link to="/shop">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#f49939" }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 px-10 py-4 bg-black text-[#ff7e00] rounded-full font-bold uppercase tracking-widest text-sm flex items-center gap-3 group mx-auto"
          >
            Explore Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>

      <motion.div 
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 border-[40px] border-black/5 rounded-full pointer-events-none"
      />
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="py-12 bg-black text-[#ff7e00] overflow-hidden whitespace-nowrap flex border-y border-black">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 text-6xl md:text-8xl font-serif italic font-black uppercase tracking-tighter"
      >
        <span>Naranja Studio</span>
        <span>•</span>
        <span>Fresh Squeezed Style</span>
        <span>•</span>
        <span>Naranja Studio</span>
        <span>•</span>
        <span>Fresh Squeezed Style</span>
        <span>•</span>
      </motion.div>
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 text-6xl md:text-8xl font-serif italic font-black uppercase tracking-tighter"
      >
        <span>Naranja Studio</span>
        <span>•</span>
        <span>Fresh Squeezed Style</span>
        <span>•</span>
        <span>Naranja Studio</span>
        <span>•</span>
        <span>Fresh Squeezed Style</span>
        <span>•</span>
      </motion.div>
    </div>
  );
};

const ProductCarousel = () => {
  return (
    <section className="py-24 bg-[#ff7e00] overflow-hidden">
      <div className="px-6 mb-12 flex justify-between items-end max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tighter text-black">
          Featured Pieces
        </h2>
      </div>
      <div className="relative">
        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -1000 }}
          className="flex gap-8 px-6 cursor-grab active:cursor-grabbing"
        >
          {[...PRODUCTS, ...PRODUCTS].map((product, idx) => (
            <motion.div 
              key={`${product.id}-${idx}`}
              className="min-w-[300px] md:min-w-[400px] aspect-[3/4] rounded-3xl overflow-hidden relative group"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                <p className="text-white/60 text-xs uppercase tracking-widest font-bold mb-1">{product.category}</p>
                <h3 className="text-white text-2xl font-serif italic font-bold">{product.name}</h3>
                <p className="text-[#ff7e00] font-bold mt-2">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      
      <div className="bg-[#f49939]">
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl md:text-7xl font-serif italic font-bold tracking-tighter">
              The Fresh List
            </h2>
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:opacity-60 transition-opacity">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
      
      <section className="px-6 py-24 bg-[#ff7e00]">
        <div className="max-w-7xl mx-auto relative h-[70vh] rounded-[40px] overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000" 
            alt="Storefront"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-6">
            <h2 className="text-white text-5xl md:text-8xl font-serif italic font-bold tracking-tighter mb-8">
              Crafted for the <br /> Bold & Bright.
            </h2>
            <Link to="/about">
              <button className="bg-[#ff7e00] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#f49939] transition-colors">
                Our Story
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-black text-[#ff7e00]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
          <Link to="/shop" className="p-12 border border-[#ff7e00]/20 flex flex-col justify-between aspect-square hover:bg-[#ff7e00] hover:text-black transition-colors group">
            <span className="text-xl font-bold">01</span>
            <h3 className="text-5xl font-serif italic font-bold">Summer <br /> Essentials</h3>
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link to="/collections" className="p-12 border border-[#ff7e00]/20 flex flex-col justify-between aspect-square hover:bg-[#ff7e00] hover:text-black transition-colors group">
            <span className="text-xl font-bold">02</span>
            <h3 className="text-5xl font-serif italic font-bold">Limited <br /> Drops</h3>
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link to="/shop" className="p-12 border border-[#ff7e00]/20 flex flex-col justify-between aspect-square hover:bg-[#ff7e00] hover:text-black transition-colors group">
            <span className="text-xl font-bold">03</span>
            <h3 className="text-5xl font-serif italic font-bold">The <br /> Archive</h3>
            <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </section>

      <ProductCarousel />
    </div>
  );
};

export default Home;
