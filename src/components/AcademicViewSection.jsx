import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M3 12h18" />
      <path d="M17 7l-5 5-5-5" />
      <path d="M17 17l-5-5-5 5" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
};

const AcademicViewSection = ({ data }) => {
  return (
    <section id="academic" className="presentation-section py-24 px-6" style={{ background: '#f7f8fa' }}>
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

        {/* Cards */}
        <div className="academic-view__grid">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="academic-card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="academic-card__icon-wrap">
                <div className="academic-card__icon">
                  {ICON_MAP[card.icon] || ICON_MAP.heart}
                </div>
              </div>
              <div className="academic-card__title">{card.title}</div>
              <div className="academic-card__desc">{card.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Quote — larger, glowing */}
        <motion.div
          className="academic-view__quote-box glow-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, #1a3a5c, #0f2440)',
            position: 'relative',
            overflow: 'hidden',
            padding: '56px 48px',
            borderRadius: 28,
            border: '1px solid rgba(107,91,149,0.2)',
            boxShadow: '0 8px 32px rgba(107,91,149,0.15), 0 0 60px rgba(107,91,149,0.08)',
          }}
        >
          {/* Animated glow border */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 28,
            background: 'linear-gradient(135deg, rgba(107,91,149,0.3), transparent, rgba(107,91,149,0.2))',
            opacity: 0,
            animation: 'pulseGlow 3s ease-in-out infinite',
          }} />

          {/* Background pattern */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `
              linear-gradient(rgba(107,91,149,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(107,91,149,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }} />

          {/* Large decorative quote mark */}
          <div style={{
            position: 'absolute', top: -10, right: 32,
            fontSize: '10rem', fontFamily: "'Lora', serif",
            color: 'rgba(107,91,149,0.06)', lineHeight: 1, pointerEvents: 'none',
          }}>"</div>

          {/* Accent line top */}
          <div style={{
            width: 60, height: 3, borderRadius: 2,
            background: 'linear-gradient(90deg, #6b5b95, #8b7bb5)',
            marginBottom: 28,
          }} />

          <p className="academic-view__quote-mark">"</p>

          <p style={{
            fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)',
            fontStyle: 'italic',
            fontFamily: "'Lora', serif",
            color: 'rgba(255,255,255,0.95)',
            lineHeight: 1.7,
            marginBottom: 16,
            position: 'relative',
            textShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}>
            "{data.quote}"
          </p>

          <p style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(139,123,181,0.85)',
            marginBottom: 20,
          }}>
            — {data.quoteAuthor}
          </p>

          {/* Note below quote */}
          <div style={{
            paddingTop: 20,
            borderTop: '1px solid rgba(107,91,149,0.15)',
            marginTop: 4,
          }}>
            <p style={{
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              fontStyle: 'italic',
            }}>
              {data.quoteNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicViewSection;
