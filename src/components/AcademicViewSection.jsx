import React from 'react';
import { motion } from 'framer-motion';

const ICON_MAP = {
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  scale: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M3 12h18" />
      <path d="M17 7l-5 5-5-5" />
      <path d="M17 17l-5-5-5 5" />
    </svg>
  ),
  pencil: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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
                  {ICON_MAP[card.icon] || ICON_MAP.book}
                </div>
              </div>
              <div className="academic-card__title">{card.title}</div>
              {card.bulletPoints ? (
                <div className="academic-card__bullets">
                  {card.bulletPoints.map((bp, bi) => (
                    <div key={bi} className="academic-card__bullet-item">
                      <span className="academic-card__bullet-label">{bp.label}</span>
                      <span className="academic-card__bullet-text">{bp.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="academic-card__desc">{card.desc}</div>
              )}
              {card.source && (
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(107,91,149,0.15)' }}>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(139,123,181,0.7)', lineHeight: 1.6 }}>
                    {card.source}
                    {card.sourceLink && (
                      <a
                        href={card.sourceLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#6b8cce', textDecoration: 'underline', textUnderlineOffset: '2px', marginLeft: 4 }}
                      >
                        {card.sourceLink.text}
                      </a>
                    )}
                  </p>
                </div>
              )}
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
          {data.quoteNote && (
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
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicViewSection;
