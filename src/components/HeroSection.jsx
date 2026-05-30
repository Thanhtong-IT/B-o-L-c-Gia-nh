import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ data }) => {
  const scrollToContent = () => {
    const el = document.getElementById('intro');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden border-b-8 border-soviet-red">
      {/* Background image */}
      {data.image && (
        <>
          <img
            src={data.image}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* Fallback gradient if no image */}
      {!data.image && (
        <div className="absolute inset-0 bg-gradient-to-br from-soviet-red/10 via-white to-soviet-gold/5" />
      )}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-block bg-soviet-red text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-soviet-red/20">
            {data.label}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-8 uppercase leading-none">
            {data.title}
            <br />
            <span className="text-soviet-gold">{data.titleLine2}</span>
            <br />
            <span className="text-white/80">{data.titleLine3}</span>
          </h1>

          <div className="h-2 w-48 bg-soviet-red mx-auto mb-10 shadow-sm rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl md:text-3xl font-serif italic text-zinc-100 leading-snug max-w-3xl mx-auto mb-6"
        >
          "{data.subtitle}"
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1 }}
          className="text-sm md:text-base text-white/70 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {data.description}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          onClick={scrollToContent}
          className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors border border-white/30 hover:border-white/60 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm"
        >
          Xem nội dung
          <svg className="w-4 h-4 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-1 h-16 bg-gradient-to-b from-soviet-red via-soviet-gold to-transparent rounded-full" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
