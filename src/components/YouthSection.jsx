import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Users, Code, Megaphone } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const ICON_MAP = {
  eye: <Eye className="w-7 h-7 text-soviet-red" />,
  users: <Users className="w-7 h-7 text-soviet-red" />,
  code: <Code className="w-7 h-7 text-soviet-red" />,
  megaphone: <Megaphone className="w-7 h-7 text-soviet-red" />,
};

const YouthSection = ({ data }) => {
  return (
    <section id="youth" className="py-24 px-6 bg-white border-b border-zinc-100">
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
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[10px] font-black text-soviet-red/50 tracking-widest">{card.number}</div>
                  <div className="transform transition-transform group-hover:scale-110 duration-300 p-2 bg-soviet-red/5 rounded-lg">
                    {ICON_MAP[card.icon] || ICON_MAP.eye}
                  </div>
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
            <ImagePlaceholder src={data.image} alt="Thế hệ trẻ" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouthSection;
