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
        </motion.div>

        <div className="timeline">
          {data.items.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="timeline-item__dot" />
              <div className="timeline-item__year">{item.year}</div>
              <div className="timeline-item__title">{item.title}</div>
              <div className="timeline-item__desc">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawTimelineSection;
