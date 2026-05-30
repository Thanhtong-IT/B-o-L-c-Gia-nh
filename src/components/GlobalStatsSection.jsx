import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const ICON_MAP = {
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9.5 2a3.5 3.5 0 014.9.5c.1.3.4.5.7.5a3 3 0 013 3c0 .4.2.7.5.7A3.5 3.5 0 0121 9.5c0-1.5-1-2.8-2.4-3.3-.3-.1-.5-.4-.5-.7a3 3 0 013-3c.4 0 .7.2.7.5A3.5 3.5 0 0119.5 5" />
      <path d="M14.5 2a3.5 3.5 0 014.9.5c.1.3.4.5.7.5a3 3 0 013 3c0 .4.2.7.5.7A3.5 3.5 0 0121 9.5" />
      <path d="M9.5 2C8.1 2.5 7 3.8 7 5.3M9.5 2a3.5 3.5 0 014.9.5M9.5 2v3" />
      <path d="M3 9.5c0 1.5 1 2.8 2.5 3.3.3.1.5.4.5.7a3 3 0 003 3c.4 0 .7-.2.7-.5A3.5 3.5 0 0114.5 22" />
      <path d="M9.5 14.5v2a3 3 0 006 0v-2" />
      <path d="M12 16.5v-2" />
    </svg>
  ),
  wallet: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 10H18a2 2 0 010-4h4" />
      <circle cx="18" cy="10" r="1" fill="currentColor" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

const GlobalStatsSection = ({ data }) => {
  return (
    <section id="global-stats" className="presentation-section py-24 px-6" style={{ background: 'linear-gradient(180deg, #0f2440 0%, #1a3a5c 100%)' }}>
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

        <div className="stat-hero">
          {/* Big number */}
          <motion.div
            className="stat-hero__big-number"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="stat-hero__number">{data.bigNumber}</div>
            <div className="stat-hero__label">{data.bigLabel}</div>
          </motion.div>

          {/* Cards */}
          <div className="stat-hero__side-cards">
            {data.cards.map((card, i) => (
              <motion.div
                key={i}
                className="stat-side-card card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="stat-side-card__icon">
                  {ICON_MAP[card.icon] || ICON_MAP.brain}
                </div>
                <div className="stat-side-card__title">{card.title}</div>
                <div className="stat-side-card__desc">{card.desc}</div>
              </motion.div>
            ))}

            {/* Image placeholder */}
            <motion.div
              className="stat-side-card"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ImagePlaceholder src={data.image} alt="Thực trạng toàn cầu" style={{ width: '100%', height: '100%', minHeight: 160 }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalStatsSection;
