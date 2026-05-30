import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Wallet, Target, Shield } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const ICON_MAP = {
  brain: <Brain className="w-7 h-7 text-soviet-red" />,
  wallet: <Wallet className="w-7 h-7 text-soviet-red" />,
  target: <Target className="w-7 h-7 text-soviet-red" />,
  shield: <Shield className="w-7 h-7 text-soviet-red" />,
};

const GlobalSection = ({ data }) => {
  return (
    <section id="global" className="py-24 px-6 bg-soviet-offwhite">
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

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-soviet-red text-white px-10 py-8 rounded-2xl shadow-lg shadow-soviet-red/20"
            style={{ borderRadius: '1.5rem' }}
          >
            <div className="text-5xl md:text-7xl font-black tracking-tighter mb-3">{data.bigNumber}</div>
            <div className="text-white/80 text-sm font-medium max-w-md">{data.bigLabel}</div>
          </div>
        </motion.div>

        {/* Cards + Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glow-card p-6 rounded-xl group"
              >
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300 p-3 bg-soviet-red/5 rounded-lg w-fit">
                  {ICON_MAP[card.icon] || ICON_MAP.brain}
                </div>
                <h3 className="text-base font-bold text-zinc-900 mb-2">{card.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
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
            <ImagePlaceholder src={data.image} alt="Thực trạng toàn cầu" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
