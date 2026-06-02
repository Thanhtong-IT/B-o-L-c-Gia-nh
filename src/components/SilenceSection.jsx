import React from 'react';
import { motion } from 'framer-motion';
import { Frown, Users, HelpCircle, Shield } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const ICON_MAP = {
  frown: <Frown className="w-7 h-7 text-soviet-red" />,
  users: <Users className="w-7 h-7 text-soviet-red" />,
  help: <HelpCircle className="w-7 h-7 text-soviet-red" />,
  shield: <Shield className="w-7 h-7 text-soviet-red" />,
};

const SilenceSection = ({ data }) => {
  return (
    <section id="silence" className="py-24 px-6 bg-white border-b border-zinc-100">
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

        <div className="section-grid-2col">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="info-card glow-card rounded-xl group"
              >
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300 p-3 bg-soviet-red/5 rounded-lg w-fit">
                  {ICON_MAP[card.icon] || ICON_MAP.frown}
                </div>
                <h3 className="card-title text-zinc-900 mb-2">{card.title}</h3>
                <p className="card-description text-zinc-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-image"
          >
            <ImagePlaceholder src={data.image} alt="Vì sao im lặng" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SilenceSection;
