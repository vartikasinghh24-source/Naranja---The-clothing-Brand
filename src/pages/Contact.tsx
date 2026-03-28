import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#ff7e00]">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl md:text-8xl font-serif italic font-bold tracking-tighter text-black">
            Contact Us
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-serif italic font-bold tracking-tighter text-black mb-8">
              Get in Touch.
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-black/80 mb-12 leading-relaxed">
              Have a question about your order? Want to share some citrus-inspired feedback? We'd love to hear from you.
            </p>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-[#ff7e00] transition-colors">
                  <Mail size={20} />
                </div>
                <p className="text-xl font-serif italic font-bold text-black">hello@naranja.studio</p>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-[#ff7e00] transition-colors">
                  <Phone size={20} />
                </div>
                <p className="text-xl font-serif italic font-bold text-black">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center group-hover:bg-black group-hover:text-[#ff7e00] transition-colors">
                  <MapPin size={20} />
                </div>
                <p className="text-xl font-serif italic font-bold text-black">123 Citrus Lane, Valencia, Spain</p>
              </div>
            </div>
            <div className="flex gap-8 mt-16">
              <Instagram size={24} className="hover:opacity-60 transition-opacity cursor-pointer" />
              <Twitter size={24} className="hover:opacity-60 transition-opacity cursor-pointer" />
              <Facebook size={24} className="hover:opacity-60 transition-opacity cursor-pointer" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black/5 p-12 rounded-[40px]"
          >
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-60">Name</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b-2 border-black py-4 outline-none focus:border-white transition-colors text-xl font-serif italic font-bold"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-60">Email</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b-2 border-black py-4 outline-none focus:border-white transition-colors text-xl font-serif italic font-bold"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-60">Message</label>
                <textarea 
                  rows={4}
                  className="bg-transparent border-b-2 border-black py-4 outline-none focus:border-white transition-colors text-xl font-serif italic font-bold resize-none"
                  placeholder="Your Message"
                />
              </div>
              <button className="mt-8 px-10 py-5 bg-black text-[#ff7e00] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#f49939] hover:text-black transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
