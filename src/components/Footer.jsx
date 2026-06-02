import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const footerLinks = [
  { label: 'Giới thiệu', id: 'intro' },
  { label: 'Toàn cầu', id: 'global' },
  { label: 'Việt Nam', id: 'vietnam' },
  { label: 'Pháp luật', id: 'law' },
];

const Footer = () => {
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== '/home') return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer border-t-8 border-soviet-red">
      <div className="footer-content">
        {/* Cột 1: Logo */}
        <div className="footer-col footer-col--logo">
          <div className="footer-logo">
            NAM GIỚI &amp; BẠO LỰC GIA ĐÌNH
          </div>
          <div className="footer-subtitle">BÀI THUYẾT TRÌNH HỌC THUẬT &copy; 2026</div>
        </div>

        {/* Cột 2: Links */}
        <div className="footer-col footer-col--links">
          <div className="footer-links">
            {footerLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cột 3: Badge */}
        <div className="footer-col footer-col--badge">
          <Link to="/home" className="footer-badge">
            BÌNH ĐẲNG GIỚI
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
