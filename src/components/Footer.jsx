import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-20 px-6 bg-white border-t-8 border-soviet-red text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-3xl md:text-5xl font-serif italic text-zinc-900 mb-8 relative inline-block">
          <span className="absolute -top-8 -left-8 text-7xl text-soviet-red opacity-10 select-none">"</span>
          Bạo lực gia đình không phân biệt giới tính.
          <span className="absolute -bottom-8 -right-8 text-7xl text-soviet-red opacity-10 select-none">"</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-zinc-100 mt-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-soviet-red rounded-full flex items-center justify-center shadow-lg shadow-soviet-red/20">
              <span className="text-white font-black text-xl">BL</span>
            </div>
            <div className="text-left">
              <div className="text-soviet-red font-black text-sm uppercase tracking-widest">Nam giới &amp; Bạo lực gia đình</div>
              <div className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.15em]">Bài thuyết trình học thuật &copy; 2026</div>
            </div>
          </div>

          <div className="flex gap-6 flex-wrap justify-center">
            {['Giới thiệu', 'Toàn cầu', 'Việt Nam', 'Pháp luật'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  const el = document.getElementById(item.toLowerCase().replace(' ', '-'));
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-zinc-500 hover:text-soviet-red font-black text-[10px] uppercase tracking-[0.15em] transition-all hover:-translate-y-0.5"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="px-5 py-2 bg-soviet-gold text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-md">
            Bình đẳng giới
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
