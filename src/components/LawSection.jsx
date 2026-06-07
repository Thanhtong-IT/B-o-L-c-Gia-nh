import React from 'react';
import { motion } from 'framer-motion';

const LawSection = ({ data }) => {
  return (
    <section id="law" className="py-24 px-6 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="mb-4 inline-block bg-soviet-red/10 text-soviet-red px-5 py-2 rounded-full text-base font-black uppercase tracking-[0.25em]">
            {data.label}
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-zinc-900 mb-3 tracking-tight leading-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-lg text-zinc-500 font-medium max-w-2xl mx-auto">
              {data.subtitle}
            </p>
          )}
        </motion.div>

        {/* Left: Cards | Right: Image */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Left: Stacked Cards */}
          <div className="flex-1 flex flex-col gap-5">
            {data.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-zinc-100 p-7 flex items-start gap-6"
              >
                {/* Year Badge */}
                <div className="flex-shrink-0 w-20 h-20 bg-soviet-red text-white rounded-xl flex flex-col items-center justify-center shadow-md shadow-soviet-red/20 leading-none text-center px-1">
                  <span className="font-black text-2xl">{card.year}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-black text-zinc-900 mb-4 leading-snug">
                    {card.title}
                  </h3>
                  <div className="space-y-3">
                    {card.lines.map((line, j) => (
                      <div key={j} className="flex items-start gap-2">
                        {line.label ? (
                          <>
                            <span className="text-sm font-black text-soviet-red uppercase tracking-wide flex-shrink-0 mt-0.5">
                              {line.label}:
                            </span>
                            <span className="text-base text-zinc-700 leading-relaxed">
                              "{line.text}"
                            </span>
                          </>
                        ) : (
                          <span className="text-base text-zinc-700 leading-relaxed">
                            {line.text}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-[42%]"
          >
            <div className="rounded-2xl overflow-hidden shadow-md h-full min-h-[480px]">
              <img
                src={data.image}
                alt="Pháp luật"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LawSection;
