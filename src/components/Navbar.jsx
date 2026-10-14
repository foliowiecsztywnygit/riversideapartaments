import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Apartamenty', path: '/apartamenty' },
    { name: 'Wellness', path: '/wellness' },
    { name: 'O nas', path: '/o-nas' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Atrakcje', path: '/atrakcje' },
    { name: 'Regulamin', path: '/regulamin' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 py-3' : 'bg-gradient-to-b from-black/70 to-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="text-white text-xl font-serif font-bold tracking-wider hidden md:block">RIVER SIDE</span>
            <span className="text-white text-lg font-serif font-bold tracking-wider md:hidden">RIVER SIDE</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-7 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === '/apartamenty' && location.pathname === '/domki');
              return (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-accent' : 'text-white hover:text-accent'}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/apartamenty" 
              className="border border-white/60 text-white px-7 py-2.5 text-xs font-semibold tracking-widest hover:border-accent hover:text-accent transition-colors duration-300"
            >
              REZERWUJ
            </Link>
          </div>

          {/* Mobile menu (simplified) */}
          <div className="md:hidden flex items-center">
            <button className="text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-3 text-base font-medium tracking-wide ${location.pathname === link.path ? 'text-accent' : 'text-white hover:text-accent'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
