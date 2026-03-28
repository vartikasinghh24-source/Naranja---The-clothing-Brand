import React from 'react';
import { motion } from 'motion/react';
import { Product } from '../data/products';

const ProductCard = ({ product, key }: { product: Product; key?: React.Key }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -10,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
      }}
      viewport={{ once: true }}
      className="group cursor-pointer bg-white/5 p-4 rounded-3xl transition-all duration-300"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-black/5 rounded-2xl mb-4">
        <motion.img 
          src={product.image} 
          alt={product.name}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform">
            Add to Bag
          </button>
        </div>
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-60 mb-1">{product.category}</p>
          <h3 className="font-serif italic text-xl font-bold">{product.name}</h3>
        </div>
        <p className="font-bold">{product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
