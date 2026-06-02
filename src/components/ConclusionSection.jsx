import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const ConclusionSection = ({ data }) => {
  return (
    <section id="conclusion" className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden border-t-8 border-soviet-red">
      {/* Background */}
      {data.image && (
        <>
          <img
            src={data.image}
            alt="Kết luận"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      {!data.image && (
        <div className="absolute inset-0 bg-gradient-to-br from-soviet-red/5 via-white to-soviet-gold/5" />
      )}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-block bg-soviet-red text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-soviet-red/20">
            {data.label}
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-zinc-900 uppercase leading-none mb-12"
        >
          {data.titleLine1}
          <br />
          <span className="text-soviet-red">{data.titleLine2}</span>
          <br />
          <span className="text-zinc-500">{data.titleLine3}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-48 h-1.5 bg-soviet-red mx-auto mb-12 rounded-full shadow-sm shadow-soviet-red/30"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-5xl font-serif italic text-zinc-700 leading-snug mb-12"
        >
          "{data.message}"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="inline-block"
        >
          <div className="px-6 py-3 bg-soviet-gold text-white font-black text-base uppercase tracking-[0.2em] rounded-full shadow-lg shadow-soviet-gold/20">
            Bình đẳng giới &bull; Mọi nạn nhân đều xứng đáng được bảo vệ
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSection;
