import React from 'react';
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const STAT_ICON_MAP = {
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  percent: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  ),
  trendingUp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
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

const VietnamStatsSection = ({ data }) => {
  return (
    <section id="vietnam" className="presentation-section py-24 px-6" style={{ background: '#ffffff' }}>
      <div className="presentation-section__inner">
        <motion.div
          className="presentation-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="presentation-section__label" style={{ color: '#6b5b95', borderColor: 'rgba(107,91,149,0.4)', background: 'rgba(107,91,149,0.08)' }}>{data.label}</div>
          <h2 className="presentation-section__title" style={{ color: '#0f2440' }}>{data.title}</h2>
        </motion.div>

        {/* 4 Highlight Stat Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          marginBottom: 48,
        }}>
          {data.highlightStats.map((stat, i) => (
            <motion.div
              key={i}
              className="card-hover"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                padding: '28px 24px',
                borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(107,91,149,0.08), rgba(26,58,92,0.04))',
                border: '1px solid rgba(107,91,149,0.12)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Icon */}
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(107,91,149,0.15), rgba(26,58,92,0.1))',
                border: '1px solid rgba(107,91,149,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
                color: '#6b5b95',
              }}>
                <div style={{ width: 22, height: 22 }}>
                  {STAT_ICON_MAP[stat.icon] || STAT_ICON_MAP.target}
                </div>
              </div>

              {/* Number */}
              <div style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #6b5b95, #1a3a5c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.1,
                marginBottom: 6,
              }}>
                {stat.number}
              </div>

              {/* Label */}
              <div style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#6b5b95',
                marginBottom: 8,
              }}>
                {stat.label}
              </div>

              {/* Sub */}
              <div style={{
                fontSize: '0.75rem',
                color: '#6b7280',
                lineHeight: 1.5,
              }}>
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Chart + Image */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <SimpleChart label={data.chartLabel} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <ImagePlaceholder
              src={data.image}
              alt="Thực trạng Việt Nam"
              style={{ width: '100%', maxWidth: 400 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SimpleChart = ({ label }) => {
  const bars = [
    { label: '2020', height: 35, color: '#1a3a5c' },
    { label: '2021', height: 50, color: '#2a5a8a' },
    { label: '2022', height: 65, color: '#6b5b95' },
    { label: '2023', height: 80, color: '#8b7bb5' },
  ];

  return (
    <div style={{
      padding: '32px',
      borderRadius: 24,
      background: 'linear-gradient(135deg, rgba(107,91,149,0.06), rgba(26,58,92,0.04))',
      border: '1px solid rgba(107,91,149,0.12)',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 20, height: 160, marginBottom: 20 }}>
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${bar.height}%` }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            style={{
              width: 48,
              background: `linear-gradient(180deg, ${bar.color}, ${bar.color}88)`,
              borderRadius: '8px 8px 0 0',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: 8,
            }}
          >
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white', opacity: 0.9 }}>{bar.label}</span>
          </motion.div>
        ))}
      </div>
      <div style={{
        padding: '12px 16px',
        background: 'rgba(107,91,149,0.08)',
        borderRadius: 12,
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: '#6b5b95', lineHeight: 1.5 }}>{label}</p>
      </div>
    </div>
  );
};

export default VietnamStatsSection;
