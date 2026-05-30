import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  frown: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2" />
    </svg>
  ),
  alertTriangle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9.5 2a3.5 3.5 0 014.9.5c.1.3.4.5.7.5a3 3 0 013 3c0 .4.2.7.5.7A3.5 3.5 0 0121 9.5c0-1.5-1-2.8-2.4-3.3-.3-.1-.5-.4-.5-.7a3 3 0 013-3c.4 0 .7.2.7.5A3.5 3.5 0 0119.5 5" />
      <path d="M14.5 2a3.5 3.5 0 014.9.5c.1.3.4.5.7.5a3 3 0 013 3c0 .4.2.7.5.7A3.5 3.5 0 0121 9.5" />
      <path d="M9.5 2C8.1 2.5 7 3.8 7 5.3M9.5 2a3.5 3.5 0 014.9.5M9.5 2v3" />
      <path d="M3 9.5c0 1.5 1 2.8 2.5 3.3.3.1.5.4.5.7a3 3 0 003 3c.4 0 .7-.2.7-.5A3.5 3.5 0 0114.5 22" />
      <path d="M9.5 14.5v2a3 3 0 006 0v-2" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  pill: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M10.5 13.5L13.5 10.5a4.24 4.24 0 016 6l-3 3a4.24 4.24 0 01-6-6z" />
      <path d="M8.5 8.5L5.5 5.5a4.24 4.24 0 000 6l3 3a4.24 4.24 0 006-6z" />
    </svg>
  ),
};

const ConsequencesSection = ({ data }) => {
  return (
    <section id="consequences" className="presentation-section py-24 px-6" style={{ background: 'linear-gradient(180deg, #0f2440 0%, #1a3a5c 100%)' }}>
      <div className="presentation-section__inner">
        <motion.div
          className="presentation-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="presentation-section__label">{data.label}</div>
          <h2 className="presentation-section__title" style={{ color: 'white' }}>{data.title}</h2>
        </motion.div>

        <div className="consequences-grid">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              className="consequence-card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="consequence-card__icon-wrap">
                <div className="consequence-card__icon">
                  {ICON_MAP[item.icon] || ICON_MAP.frown}
                </div>
              </div>
              <div className="consequence-card__title">{item.title}</div>
              {item.desc && (
                <div style={{
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: 6,
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}>
                  {item.desc}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;
