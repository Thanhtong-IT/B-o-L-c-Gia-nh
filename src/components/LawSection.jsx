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
          <div className="mb-4 inline-block bg-soviet-red/10 text-soviet-red px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em]">
            {data.label}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Timeline */}
          <div className="space-y-6">
            {data.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-5 p-5 rounded-xl glow-card"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-soviet-red text-white rounded-xl flex flex-col items-center justify-center font-black text-sm shadow-md shadow-soviet-red/20">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 mb-1">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-72 md:h-96"
          >
            <ImagePlaceholder src={data.image} alt="Pháp luật" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LawSection;
