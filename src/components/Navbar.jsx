import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Giới thiệu', id: 'intro' },
  { name: 'Toàn cầu', id: 'global' },
  { name: 'Im lặng', id: 'silence' },
  { name: 'Hậu quả', id: 'consequences' },
  { name: 'Việt Nam', id: 'vietnam' },
  { name: 'Học thuật', id: 'academic' },
  { name: 'Pháp luật', id: 'law' },
  { name: 'Thế hệ trẻ', id: 'youth' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md py-4 border-b-4 border-soviet-red shadow-xl'
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollTo('hero')}
          className={`font-black tracking-[0.2em] uppercase text-xs transition-all duration-500 ${
            scrolled ? 'text-soviet-red scale-105' : 'text-white'
          }`}
          style={!scrolled ? { textShadow: '0 2px 8px rgba(0,0,0,0.4)' } : {}}
        >
          NAM GIỚI &amp; <span className="text-soviet-orange">BẠO LỰC GIA ĐÌNH</span>
        </button>

        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-black text-[10px] uppercase tracking-[0.15em] transition-all duration-300 relative group ${
                scrolled ? 'text-zinc-500' : 'text-white/80'
              }`}
              style={!scrolled ? { textShadow: '0 1px 4px rgba(0,0,0,0.3)' } : {}}
            >
              <span className="group-hover:text-soviet-red transition-colors">{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-soviet-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
