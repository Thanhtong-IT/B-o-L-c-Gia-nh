import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, WandSparkles, Github, Globe } from 'lucide-react';

const tools = [
  { name: 'Cursor', desc: 'Hỗ trợ chỉnh sửa code, refactor layout và xây dựng giao diện React.', Icon: Sparkles },
  { name: 'ChatGPT', desc: 'Hỗ trợ rút gọn nội dung, lên ý tưởng và viết lời thuyết trình.', Icon: Bot },
  { name: 'Gemini', desc: 'Hỗ trợ gợi ý hình ảnh minh họa và kiểm tra nội dung.', Icon: WandSparkles },
  { name: 'GitHub', desc: 'Lưu trữ mã nguồn.', Icon: Github },
  { name: 'Vercel', desc: 'Deploy website để chia sẻ link.', Icon: Globe },
];

const teamMembers = [
  'Võ Thanh Tòng',
  'Lê Nguyễn Xuân Khôi',
  'Thân Trần Quốc Huy',
  'Trần Anh Tú',
  'Lại Bảo Khánh',
  'Nguyễn Phi Khanh',
];

const topics = [
  'Bức tranh toàn cảnh',
  'Thực trạng tại Việt Nam',
  'Chiều sâu học thuật',
  'Khung pháp lý và định hướng chính sách',
  'Trách nhiệm của thế hệ trẻ',
];

const OverviewPage = () => {
  return (
    <section id="overview" className="pt-32 pb-20 px-6 bg-soviet-offwhite border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">

        {/* Header — no badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
            Đề tài thuyết trình
          </h2>
        </motion.div>

        {/* Team + Content */}
        <div className="section-grid-2col mb-12">
          {/* Left: Team */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-base font-black uppercase tracking-[0.2em] text-soviet-red mb-5 pb-3 border-b-2 border-soviet-red/20">
              Đội ngũ thực hiện
            </h3>
            <ul className="space-y-3">
              {teamMembers.map((name, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-soviet-red/10 text-soviet-red text-base font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-zinc-700 text-xl font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Topics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-base font-black uppercase tracking-[0.2em] text-soviet-red mb-5 pb-3 border-b-2 border-soviet-red/20">
              Nội dung thuyết trình
            </h3>
            <ol className="space-y-2.5">
              {topics.map((topic, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 w-7 h-7 rounded bg-soviet-red text-white text-base font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-zinc-700 text-xl leading-relaxed">{topic}</span>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h3 className="text-base font-black uppercase tracking-[0.2em] text-soviet-red mb-8 pb-3 border-b-2 border-soviet-red/20 inline-block">
            Công cụ hỗ trợ thực hiện
          </h3>
          <div className="flex justify-center items-stretch gap-5 flex-wrap mt-8">
            {tools.map((tool, i) => {
              const Icon = tool.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="tool-card"
                >
                  <div className="tool-icon-wrap">
                    <Icon size={20} color="#dc2626" />
                  </div>
                  <h4 className="tool-title">{tool.name}</h4>
                  <p className="tool-desc">{tool.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewPage;
