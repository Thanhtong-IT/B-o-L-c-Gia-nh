import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Bot, Sparkles, Github, Globe } from 'lucide-react';

const ICON_MAP = {
  cursor: <MousePointerClick className="w-7 h-7 text-soviet-red" />,
  bot: <Bot className="w-7 h-7 text-soviet-red" />,
  sparkles: <Sparkles className="w-7 h-7 text-soviet-red" />,
  github: <Github className="w-7 h-7 text-soviet-red" />,
  globe: <Globe className="w-7 h-7 text-soviet-red" />,
};

const ToolsSection = ({ data }) => {
  return (
    <section id="tools" className="py-24 px-6 bg-soviet-offwhite border-t border-zinc-200">
      <div className="max-w-5xl mx-auto">
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card p-6 rounded-xl text-center group"
            >
              <div className="mb-4 mx-auto transform transition-transform group-hover:scale-110 duration-300 p-3 bg-soviet-red/5 rounded-full w-fit">
                {ICON_MAP[card.icon] || ICON_MAP.cursor}
              </div>
              <h3 className="text-sm font-bold text-zinc-900 mb-2">{card.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
