import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer border-t-8 border-soviet-red">
      <div className="footer-content">
        {/* Cột 1: Logo + Thông tin */}
        <div className="footer-logo-block">
          <div className="footer-logo">
            NAM GIỚI &amp; BẠO LỰC GIA ĐÌNH
          </div>
          <div className="footer-subtitle">BÀI THUYẾT TRÌNH HỌC THUẬT &copy; 2026</div>
        </div>

        {/* Cột 2: Badge */}
        <div className="footer-badge-wrap">
          <Link to="/home" className="footer-badge">
            BÌNH ĐẲNG GIỚI
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
