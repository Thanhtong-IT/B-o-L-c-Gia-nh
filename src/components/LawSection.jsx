import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const LawSection = ({ data }) => {
  return (
    <section id="law" className="py-24 px-6 bg-soviet-offwhite border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-block bg-soviet-red/10 text-soviet-red px-5 py-2 rounded-full text-base font-black uppercase tracking-[0.25em]">
            {data.label}
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="section-stretch-grid">
          {/* Timeline */}
          <div className="space-y-6">
            {data.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="info-card glow-card rounded-xl flex items-start gap-5"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-soviet-red text-white rounded-xl flex flex-col items-center justify-center font-black text-2xl shadow-md shadow-soviet-red/20">
                  {item.year}
                </div>
                <div>
                  <h3 className="card-title text-zinc-900 mb-1">{item.title}</h3>
                  <p className="card-description text-zinc-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image — stretches to match left column height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-image-stretch"
          >
            <ImagePlaceholder src={data.image} alt="Pháp luật" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LawSection;
