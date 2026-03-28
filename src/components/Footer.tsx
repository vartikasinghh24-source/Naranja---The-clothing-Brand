import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-[#ff7e00] px-6 py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-6xl font-serif italic font-bold tracking-tighter mb-8">Naranja</h2>
          <p className="text-xl max-w-md opacity-80 mb-8">
            Stay fresh. Join our newsletter for exclusive drops and citrus-infused updates.
          </p>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-transparent border-b border-[#ff7e00] py-2 flex-1 outline-none focus:border-white transition-colors"
            />
            <button className="uppercase tracking-widest font-bold text-sm hover:text-white transition-colors">Join</button>
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 opacity-60">Shop</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
            <li><Link to="/collections" className="hover:text-white transition-colors">Collections</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 opacity-60">Info</h4>
          <ul className="flex flex-col gap-4">
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-[#ff7e00]/20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm opacity-60">
        <p>© 2024 Naranja Clothing Co. All rights reserved.</p>
        <div className="flex gap-8">
          <Instagram size={20} />
          <Twitter size={20} />
          <Facebook size={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
