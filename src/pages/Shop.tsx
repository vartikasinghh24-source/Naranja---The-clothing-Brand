import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#ff7e00]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif italic font-bold tracking-tighter text-black mb-8">
            Shop All
          </h1>
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border-2 border-black font-bold text-sm uppercase tracking-widest transition-colors ${
                  filter === cat ? 'bg-black text-[#ff7e00]' : 'hover:bg-black hover:text-[#ff7e00]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-2xl font-serif italic opacity-60">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
