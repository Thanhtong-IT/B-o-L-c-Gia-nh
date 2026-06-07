import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Home, Megaphone } from 'lucide-react';

const ICON_MAP = {
  graduation: <GraduationCap className="w-8 h-8" strokeWidth={1.8} />,
  home: <Home className="w-8 h-8" strokeWidth={1.8} />,
  megaphone: <Megaphone className="w-8 h-8" strokeWidth={1.8} />,
};

const YouthSection = ({ data }) => {
  return (
    <section id="youth" className="py-24 px-6" style={{ background: '#fffaf9' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div
            className="mb-5 inline-block px-5 py-2 rounded-full text-base font-black uppercase tracking-widest"
            style={{ color: '#dc2626', background: '#fee2e2' }}
          >
            {data.label}
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4">
            Trách nhiệm của{' '}
            <span style={{ color: '#dc2626' }}>thế hệ trẻ</span>
          </h2>
          <p className="text-lg text-zinc-500 font-medium">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Left: 3 Cards | Right: Image */}
        <div
          className="flex flex-col lg:flex-row items-stretch"
          style={{ gap: 32 }}
        >
          {/* Left: Stacked Cards */}
          <div className="flex-1 flex flex-col gap-5">
            {data.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
                style={{
                  background: '#ffffff',
                  borderRadius: 24,
                  border: '1px solid rgba(0,0,0,0.05)',
                  padding: 28,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  transition: 'box-shadow 0.2s ease',
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                }}
              >
                {/* Icon */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-2xl"
                  style={{
                    width: 64,
                    height: 64,
                    background: '#fee2e2',
                    color: '#dc2626',
                  }}
                >
                  {ICON_MAP[card.icon] || ICON_MAP.graduation}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-zinc-900 mb-3" style={{ fontSize: '1.05rem', lineHeight: 1.35 }}>
                    {card.title}
                  </h3>
                  <ul className="space-y-2">
                    {card.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span
                          className="mt-1.5 flex-shrink-0"
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: '#dc2626',
                          }}
                        />
                        <span className="text-zinc-600 text-sm leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-[38%]"
          >
            <div
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{ height: '100%', minHeight: 480 }}
            >
              <img
                src={data.image}
                alt="Thế hệ trẻ"
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouthSection;
