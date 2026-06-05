import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Tổng quan', id: 'overview', path: '/' },
  { name: 'Lý thuyết', id: 'theory', path: '/home' },
  { name: 'Toàn cầu', id: 'global', path: '/home' },
  { name: 'Việt Nam', id: 'vietnam', path: '/home' },
  { name: 'Học thuật', id: 'academic', path: '/home' },
  { name: 'Pháp luật', id: 'law', path: '/home' },
  { name: 'Thế hệ trẻ', id: 'youth', path: '/home' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/home';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (item) => {
    if (location.pathname === item.path) {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(item.path, { state: { scrollTo: item.id } });
    }
  };

  const menuTextColor = !isHomePage || scrolled ? '#374151' : '#ffffff';
  const menuHoverColor = '#ef4444';

  const logoColor = scrolled ? '#dc2626' : '#ffffff';

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isHomePage ? 'navbar--home' : 'navbar--overview'}`}
    >
      <div className="nav-container">
        <Link to="/" className="logo" style={{ color: logoColor }}>
          NAM GIỚI &amp; <span style={{ color: scrolled ? '#ea580c' : '#fed7aa' }}>BẠO LỰC GIA ĐÌNH</span>
        </Link>

        <div className="nav-menu hidden lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item)}
              className="nav-link"
              style={{ color: menuTextColor }}
              onMouseEnter={(e) => { e.currentTarget.style.color = menuHoverColor; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = menuTextColor; }}
            >
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
