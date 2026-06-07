import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Scale, Pencil } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const ICON_MAP = {
  book: <BookOpen className="w-7 h-7 text-soviet-red" />,
  scale: <Scale className="w-7 h-7 text-soviet-red" />,
  pencil: <Pencil className="w-7 h-7 text-soviet-red" />,
};

const AcademicSection = ({ data }) => {
  return (
    <section id="academic" className="py-24 px-6 bg-soviet-offwhite border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-block bg-soviet-red/10 text-soviet-red px-5 py-2 rounded-full text-base font-black uppercase tracking-[0.25em]">
            {data.label}
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {data.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="info-card glow-card rounded-xl group"
            >
              <div className="mb-5 transform transition-transform group-hover:scale-110 duration-300 p-3 bg-soviet-red/5 rounded-lg w-fit">
                {ICON_MAP[card.icon] || ICON_MAP.book}
              </div>
              <h3 className="card-title text-zinc-900 mb-3">{card.title}</h3>
              <p className="card-description text-zinc-500">{card.desc}</p>
              {card.source && (
                <div className="mt-3 pt-3 border-t border-zinc-200">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {card.source}
                    {card.sourceLink && (
                      <a
                        href={card.sourceLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline underline-offset-2 hover:text-blue-700 ml-1"
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

        {/* Quote + Image */}
        <div className="section-grid-2col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-soviet-red to-soviet-darkred text-white p-10 shadow-lg shadow-soviet-red/20 relative overflow-hidden"
            style={{ borderRadius: '18px' }}
          >
            <div className="absolute top-4 right-6 text-8xl font-serif text-white/5 select-none leading-none">"</div>
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl font-serif italic leading-snug mb-6">
                "{data.quote}"
              </div>
              <div className="text-base font-black uppercase tracking-[0.2em] text-soviet-gold">
                — {data.quoteAuthor}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-image"
          >
            <ImagePlaceholder src={data.image} alt="Góc nhìn học thuật" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;
