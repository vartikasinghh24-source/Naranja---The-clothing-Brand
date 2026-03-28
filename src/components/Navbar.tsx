import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X, Search, Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center transition-colors duration-300 ${isHome ? 'bg-transparent' : 'bg-black'} text-white`}>
      <div className="flex items-center gap-8">
        <button onClick={() => setIsOpen(true)} className="hover:opacity-70 transition-opacity">
          <Menu size={24} />
        </button>
        <div className="hidden md:flex gap-6 text-xs uppercase tracking-widest font-semibold">
          <Link to="/shop" className="hover:underline underline-offset-4">Shop</Link>
          <Link to="/collections" className="hover:underline underline-offset-4">Collections</Link>
          <Link to="/about" className="hover:underline underline-offset-4">About</Link>
        </div>
      </div>

      <Link to="/" className="flex items-center gap-3 absolute left-1/2 -translate-x-1/2">
        <Logo />
        <h1 className="text-3xl font-serif italic font-bold tracking-tighter">
          Naranja
        </h1>
      </Link>

      <div className="flex items-center gap-6">
        <Search size={20} className="hidden md:block cursor-pointer" />
        <div className="relative cursor-pointer">
          <ShoppingBag size={22} />
          <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black text-[#ff7e00] z-[60] flex flex-col p-12"
          >
            <button onClick={() => setIsOpen(false)} className="self-end mb-12">
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-6xl md:text-8xl font-serif italic font-bold">
              <motion.div whileHover={{ x: 20 }}>
                <Link to="/shop" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Shop All</Link>
              </motion.div>
              <motion.div whileHover={{ x: 20 }}>
                <Link to="/collections" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Collections</Link>
              </motion.div>
              <motion.div whileHover={{ x: 20 }}>
                <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Our Story</Link>
              </motion.div>
              <motion.div whileHover={{ x: 20 }}>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Contact</Link>
              </motion.div>
            </div>
            <div className="mt-auto flex justify-between items-end border-t border-[#ff7e00]/30 pt-8">
              <div className="flex gap-6">
                <Instagram size={20} />
                <Twitter size={20} />
                <Facebook size={20} />
              </div>
              <p className="text-sm uppercase tracking-widest opacity-60">© 2024 Naranja Studio</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
