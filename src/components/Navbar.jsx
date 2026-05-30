import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Toàn cầu', id: 'global-stats' },
    { label: 'Im lặng', id: 'silence' },
    { label: 'Việt Nam', id: 'vietnam' },
    { label: 'Hậu quả', id: 'consequences' },
    { label: 'Học thuật', id: 'academic' },
    { label: 'Pháp luật', id: 'law' },
    { label: 'Thế hệ trẻ', id: 'youth' },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={scrolled ? {} : {
        background: 'transparent',
      }}
    >
      <div className="navbar__inner">
        <span
          className="navbar__brand"
          style={scrolled ? {
            color: '#1a3a5c',
          } : {
            color: 'rgba(255,255,255,0.85)',
            textShadow: '0 1px 0 rgba(255,255,255,0.2), 0 3px 8px rgba(0,0,0,0.3)',
          }}
        >
          Nam giới &amp; Bạo lực gia đình
        </span>

        <div className="navbar__nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="navbar__link"
              onClick={() => scrollTo(link.id)}
              style={scrolled ? {
                color: '#4a5568',
              } : {
                color: 'rgba(255,255,255,0.75)',
                textShadow: '0 1px 0 rgba(0,0,0,0.2)',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
