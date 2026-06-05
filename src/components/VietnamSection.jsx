import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Percent } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const STAT_ICON_MAP = {
  users: <Users className="w-5 h-5 text-soviet-red" />,
  percent: <Percent className="w-5 h-5 text-soviet-red" />,
  trendingUp: <TrendingUp className="w-5 h-5 text-soviet-red" />,
};

const VietnamSection = ({ data }) => {
  return (
    <section id="vietnam" className="py-24 px-6 bg-white border-b border-zinc-100">
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
          <p className="text-zinc-500 text-xl max-w-2xl mx-auto">{data.description}</p>
        </motion.div>

        {/* Stat cards: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {data.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card p-6 rounded-xl text-center group"
              style={{ minHeight: '200px' }}
            >
              <div className="inline-flex items-center justify-center w-10 h-10 bg-soviet-red/10 rounded-full mb-3">
                {STAT_ICON_MAP[stat.icon] || STAT_ICON_MAP.users}
              </div>
              <div className="text-5xl md:text-6xl font-black text-soviet-red mb-1">{stat.number}</div>
              <div className="text-base font-black uppercase tracking-[0.1em] text-soviet-red/70 mb-2">{stat.label}</div>
              <p className="text-zinc-500 text-base leading-relaxed mb-4">{stat.sub}</p>
              {stat.source && (
                <a
                  href={stat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link text-zinc-400"
                >
                  {stat.source}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-64 md:h-80"
        >
          <ImagePlaceholder src={data.image} alt="Thực trạng Việt Nam" className="w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default VietnamSection;
