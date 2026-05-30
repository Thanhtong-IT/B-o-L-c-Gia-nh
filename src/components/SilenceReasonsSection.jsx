import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  frown: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" />
      <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  help: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2.5" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const SilenceReasonsSection = ({ data }) => {
  return (
    <section id="silence" className="presentation-section py-24 px-6" style={{ background: 'linear-gradient(135deg, #1a3a5c 0%, #0f2440 100%)' }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          {/* 4 Big Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {data.reasons.map((reason, i) => (
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
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(107,91,149,0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: 12,
                  cursor: 'default',
                }}
              >
                {/* Icon circle */}
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(107,91,149,0.3), rgba(26,58,92,0.2))',
                  border: '1px solid rgba(107,91,149,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(139,123,181,0.9)',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}>
                  {reason.emoji}
                </div>

                {/* Icon SVG */}
                <div style={{ color: 'rgba(139,123,181,0.5)', marginTop: -4 }}>
                  <div style={{ width: 16, height: 16 }}>
                    {ICON_MAP[reason.icon] || ICON_MAP.help}
                  </div>
                </div>

                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'white', lineHeight: 1.3 }}>
                  {reason.title}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                  {reason.desc}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <IllustrationFrame src={data.image} alt="Vì sao im lặng" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const IllustrationFrame = ({ src, alt }) => {
  const [hasError, setHasError] = React.useState(false);
  if (!src || hasError) {
    return (
      <div className="illustration-frame" style={{ width: '100%', maxWidth: 440 }}>
        <div className="illustration-frame__inner">
          <svg className="illustration-frame__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
            <circle cx="12" cy="12" r="10" />
            <path d="M12 17h.01" />
          </svg>
          <p className="illustration-frame__text">Thêm ảnh minh họa</p>
        </div>
      </div>
    );
  }
  return (
    <div className="illustration-frame" style={{ width: '100%', maxWidth: 440 }}>
      <img src={src} alt={alt} onError={() => setHasError(true)} />
    </div>
  );
};

export default SilenceReasonsSection;
