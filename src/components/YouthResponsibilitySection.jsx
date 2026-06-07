import React from 'react';
import { motion } from 'framer-motion';

const ICON_SVG = {
  graduation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  megaphone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 11-5.8-1.6" />
    </svg>
  ),
};

const YouthResponsibilitySection = ({ data }) => {
  return (
    <section id="youth" className="presentation-section py-24 px-6" style={{ background: '#fffaf9' }}>
      <div className="presentation-section__inner">

        {/* Header */}
        <motion.div
          className="presentation-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="mb-5 inline-block px-5 py-2 rounded-full text-base font-black uppercase tracking-widest"
            style={{ color: '#dc2626', background: '#fee2e2' }}
          >
            {data.label}
          </div>
          <h2 style={{ color: '#111827', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            Trách nhiệm của{' '}
            <span style={{ color: '#dc2626' }}>thế hệ trẻ</span>
          </h2>
          <p style={{ color: '#6b7280', marginTop: 10, fontSize: '1.05rem', fontWeight: 500 }}>
            {data.subtitle}
          </p>
        </motion.div>

        {/* Left: 3 Cards | Right: Image */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '60fr 40fr', gap: 32, alignItems: 'stretch' }}
        >
          {/* Left: Stacked Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {data.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                style={{
                  background: '#ffffff',
                  borderRadius: 24,
                  border: '1px solid rgba(0,0,0,0.05)',
                  padding: 28,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  display: 'flex',
                  gap: 20,
                  alignItems: 'flex-start',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 64,
                    height: 64,
                    flexShrink: 0,
                    background: '#fee2e2',
                    color: '#dc2626',
                    borderRadius: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {ICON_SVG[card.icon] || ICON_SVG.graduation}
                </div>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ color: '#111827', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.35, marginBottom: 12 }}>
                    {card.title}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {card.points.map((pt, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#dc2626', flexShrink: 0, marginTop: 7 }} />
                        <span style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: 1.5 }}>{pt}</span>
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
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            <img
              src={data.image}
              alt="Thế hệ trẻ"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 480 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YouthResponsibilitySection;
