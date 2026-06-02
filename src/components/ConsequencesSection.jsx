import React from 'react';
import { motion } from 'framer-motion';
import { Frown, AlertTriangle, Brain, Pill, UserX } from 'lucide-react';

const ICON_SIZE = 28;

const ICON_MAP = {
  frown: <Frown size={ICON_SIZE} strokeWidth={1.5} />,
  alert: <AlertTriangle size={ICON_SIZE} strokeWidth={1.5} />,
  brain: <Brain size={ICON_SIZE} strokeWidth={1.5} />,
  pill: <Pill size={ICON_SIZE} strokeWidth={1.5} />,
  userX: <UserX size={ICON_SIZE} strokeWidth={1.5} />,
};

const ConsequencesSection = ({ data }) => {
  return (
    <section id="consequences" className="py-24 px-6 bg-soviet-offwhite border-t border-zinc-200">
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card p-6 rounded-xl text-center group"
              style={{ minHeight: '140px' }}
            >
              <div className="mb-4 mx-auto transform transition-transform group-hover:scale-110 duration-300 p-3 bg-soviet-red/5 rounded-full w-fit">
                <div className="text-soviet-red">
                  {ICON_MAP[item.icon] || ICON_MAP.frown}
                </div>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-xl leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;
