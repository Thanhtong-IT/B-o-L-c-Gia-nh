import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Wallet, Target, Shield } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const ICON_MAP = {
  brain: <Brain className="w-7 h-7 text-soviet-red" />,
  wallet: <Wallet className="w-7 h-7 text-soviet-red" />,
  target: <Target className="w-7 h-7 text-soviet-red" />,
  shield: <Shield className="w-7 h-7 text-soviet-red" />,
};

const GlobalSection = ({ data }) => {
  return (
    <section id="global" className="py-24 px-6 bg-soviet-offwhite">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="stat-highlight inline-block bg-soviet-red text-white shadow-lg shadow-soviet-red/20"
            style={{ borderRadius: '1.5rem' }}
          >
            <p className="stat-text">
              Nam giới chiếm từ 33% đến 50% nạn nhân bạo lực gia đình trong một số nghiên cứu tại Mỹ, Canada, Úc và Vương quốc Anh.
            </p>
            <div className="stat-source">
              <a
                href="https://oss.jomh.org/files/article/20250805-596/pdf/JOMH2025032001.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="source-link"
              >
                Nguồn: Journal of Men's Health
              </a>
            </div>
          </div>
        </motion.div>

        <div className="section-stretch-grid">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="info-card glow-card rounded-xl group"
              >
                <div className="mb-4 transform transition-transform group-hover:scale-110 duration-300 p-3 bg-soviet-red/5 rounded-lg w-fit">
                  {ICON_MAP[card.icon] || ICON_MAP.brain}
                </div>
                <h3 className="card-title text-zinc-900 mb-2">{card.title}</h3>
                <p className="card-description text-zinc-500">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-image-stretch"
          >
            <ImagePlaceholder src={data.image} alt="Thực trạng toàn cầu" className="w-full h-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
