import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { PHONE_DISPLAY, PHONE_TEL } from '../data/siteData';

const tabs = [
  { path: '/', label: 'Home', icon: 'fa-house' },
  { path: '/workspaces', label: 'Workspaces', icon: 'fa-building' },
  { path: '/residency', label: 'Residency', icon: 'fa-home' },
  { path: '/acoustic', label: 'Acoustic Panels', icon: 'fa-wave-square' },
  { path: '/about', label: 'About Us', icon: 'fa-circle-info' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only fixed top-0 left-0 z-50 bg-amber-eco text-forest-900 px-4 py-2 font-semibold"
      >
        Skip to main content
      </a>

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream-50 border-b ${scrolled ? 'border-amber-eco shadow-lg' : 'border-forest-300 shadow-md'}`} style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <img 
              src="/logo.png" 
              alt="Ecovation Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <span className="text-2xl font-bold tracking-tight text-forest-900 uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>ECO<span className="text-amber-eco">VATION</span></span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 whitespace-nowrap" aria-label="Main navigation">
            {tabs.map(tab => (
              <NavLink
                key={tab.path}
                to={tab.path}
                end={tab.path === '/'}
                className={({ isActive }) => `px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-amber-eco' : 'text-forest-900 hover:text-amber-light'}`}
                style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
              >
                {tab.label}
              </NavLink>
            ))}
            <a
              href={PHONE_TEL}
              className="ml-4 flex items-center gap-2 px-4 py-2 border border-forest-300 text-forest-700 text-xs font-medium hover:border-amber-eco hover:text-amber-eco transition-all duration-300"
              style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
            >
              <i className="fas fa-phone text-amber-eco text-xs"></i>
              {PHONE_DISPLAY}
            </a>
            <NavLink
              to="/about"
              className="ml-3 px-5 py-2.5 bg-amber-eco text-forest-900 font-semibold text-sm tracking-normal hover:bg-amber-light transition-all duration-300 hover:shadow-lg hover:shadow-amber-eco/40 whitespace-nowrap border border-amber-eco"
              style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
            >
              GET A QUOTE
            </NavLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block w-6 h-0.5 bg-forest-900 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-forest-900 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-forest-900 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer - Full Width from Top */}
      <div 
        id="mobile-nav"
        className={`fixed top-16 left-0 right-0 w-full bg-cream-50 z-40 max-h-screen overflow-y-auto border-b border-amber-eco/20 shadow-xl transition-all duration-300 ${mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`} 
        style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
      >
        <nav className="max-w-7xl mx-auto" aria-label="Mobile navigation">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === '/'}
              className={({ isActive }) => `flex items-center gap-4 px-6 py-4 border-b border-gray-200 text-left font-medium transition-all duration-300 ${isActive ? 'text-amber-eco bg-amber-eco/5 border-l-4 border-l-amber-eco pl-5' : 'text-forest-900 hover:text-amber-eco hover:bg-gray-50/50'}`}
              style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
            >
              <i className={`fas ${tab.icon} w-5 text-base`}></i>
              <span className="text-base font-semibold">{tab.label}</span>
            </NavLink>
          ))}
          {/* Phone in mobile menu */}
          <a
            href={PHONE_TEL}
            className="flex items-center gap-4 px-6 py-4 border-b border-gray-200 text-forest-900 hover:text-amber-eco transition-colors"
          >
            <i className="fas fa-phone text-amber-eco w-5 text-base"></i>
            <span className="text-base font-semibold">{PHONE_DISPLAY}</span>
          </a>
        </nav>
        <div className="px-6 py-6 border-t border-gray-200 bg-gradient-to-b from-cream-50 to-gray-50">
          <NavLink
            to="/about"
            className="w-full py-3 bg-amber-eco text-forest-900 font-semibold tracking-wide hover:bg-amber-light transition-all duration-300 text-center block rounded-sm hover:shadow-lg shadow-amber-eco/20"
            style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
          >
            GET A QUOTE
          </NavLink>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 lg:hidden transition-opacity duration-300" 
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
