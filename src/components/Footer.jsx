import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer-section" style={{ background: 'white', borderTop: '1px solid rgba(107,91,149,0.12)' }}>
      <div className="footer-section__inner">
        <div className="footer-section__brand">
          <div className="footer-section__brand-icon">BL</div>
          <div className="footer-section__brand-text">
            <span className="footer-section__brand-title">Nam giới &amp; Bạo lực gia đình</span>
            <span className="footer-section__brand-sub">Bài thuyết trình học thuật &copy; 2026</span>
          </div>
        </div>

        <div className="footer-section__tag">
          Bình đẳng giới &bull; Nhận thức xã hội &bull; Học thuật
        </div>
      </div>
    </footer>
  );
};

export default Footer;
