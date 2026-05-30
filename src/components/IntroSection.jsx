import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const IntroSection = ({ data }) => {
  return (
    <section id="intro" className="py-24 px-6 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-block bg-soviet-red/10 text-soviet-red px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em]">
            {data.label}
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Points */}
          <div className="space-y-6">
            {data.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-4 p-6 rounded-xl glow-card"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-soviet-red/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-soviet-red" />
                </div>
                <p className="text-zinc-700 text-base leading-relaxed font-medium pt-1">
                  {point}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-80 md:h-96"
          >
            <ImagePlaceholder src={data.image} alt="Giới thiệu" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
