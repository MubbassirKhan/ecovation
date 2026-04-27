import React, { useState, useEffect } from 'react';

const tabs = [
  { id: 'home', label: 'Home', icon: 'fa-house' },
  { id: 'workspaces', label: 'Workspaces', icon: 'fa-building' },
  { id: 'acoustic', label: 'Acoustic Panels', icon: 'fa-wave-square' },
  { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
];

export default function Navbar({ activeTab, onTabChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 border-b border-gray-200 backdrop-blur ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          
          {/* Logo */}
          <button onClick={() => onTabChange('home')} className="flex items-center gap-3 group">
            <img 
              src="/images/logos/logo_no_bg_black.png" 
              alt="Ecovation Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="font-display text-2xl tracking-widest text-forest-900 uppercase">ECO<span className="text-amber-eco">VATION</span></span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0 whitespace-nowrap">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`nav-link-item px-4 py-2 font-body text-sm font-medium tracking-wide transition-colors duration-300 ${activeTab === tab.id ? 'text-amber-eco active' : 'text-forest-600 hover:text-forest-900'}`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => onTabChange('contact')}
              className="ml-4 px-6 py-2.5 bg-amber-eco text-white font-body font-semibold text-sm tracking-wide hover:bg-amber-light transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              GET A QUOTE
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-forest-900 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-forest-900 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-forest-900 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav fixed top-0 right-0 h-full w-72 bg-white z-50 flex flex-col pt-24 px-8 border-l border-gray-200 ${mobileOpen ? 'open' : ''}`}>
        <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 text-forest-600 hover:text-forest-900">
          <i className="fas fa-times text-xl"></i>
        </button>
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => { onTabChange(tab.id); setMobileOpen(false); }}
            className={`flex items-center gap-4 py-4 border-b border-gray-200 text-left font-body font-medium transition-colors ${activeTab === tab.id ? 'text-amber-eco' : 'text-forest-700'}`}
          >
            <i className={`fas ${tab.icon} w-5`}></i>
            {tab.label}
          </button>
        ))}
        <button
          onClick={() => { onTabChange('contact'); setMobileOpen(false); }}
          className="mt-8 w-full py-3 bg-amber-eco text-white font-semibold tracking-wide"
        >
          GET A QUOTE
        </button>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/60 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
      )}
    </>
  );
}
