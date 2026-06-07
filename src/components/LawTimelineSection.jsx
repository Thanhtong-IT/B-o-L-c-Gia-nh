import React from 'react';
import { motion } from 'framer-motion';

const LawTimelineSection = ({ data }) => {
  return (
    <section id="law" className="presentation-section py-24 px-6" style={{ background: 'linear-gradient(180deg, #1a3a5c 0%, #0f2440 100%)' }}>
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
          {data.subtitle && (
            <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: 8, fontSize: '1.05rem' }}>
              {data.subtitle}
            </p>
          )}
        </motion.div>

        <div className="timeline">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="timeline-item__dot" />
              <div className="timeline-item__year">{card.year}</div>
              <div className="timeline-item__title">{card.title}</div>
              <div className="timeline-item__desc">
                {card.lines.map((line, j) => (
                  <div key={j} style={{ marginBottom: j < card.lines.length - 1 ? 6 : 0 }}>
                    {line.label && (
                      <span style={{ fontWeight: 700, color: '#ef4444', marginRight: 4 }}>
                        {line.label}:
                      </span>
                    )}
                    "{line.text}"
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawTimelineSection;
