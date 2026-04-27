import React from 'react';

export default function Footer({ onTabChange }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/logos/logo_no_bg.png" 
                alt="Ecovation Logo" 
                className="h-10 w-auto"
              />
              <span className="font-display text-2xl tracking-widest text-forest-900 uppercase">ECO<span className="text-amber-eco">VATION</span></span>
            </div>
            <p className="font-body text-forest-700 text-sm leading-relaxed mb-6">
              Transforming interiors through sustainable innovation. PET acoustic panels & workspace design from Bangalore.
            </p>
            <div className="flex gap-3">
              {['fa-facebook-f', 'fa-instagram', 'fa-linkedin-in'].map(icon => (
                <a key={icon} href="#" className="w-9 h-9 border border-gray-300 flex items-center justify-center text-forest-700 hover:border-amber-eco hover:text-amber-eco transition-all duration-300">
                  <i className={`fab ${icon} text-xs`}></i>
                </a>
              ))}
              <a href="https://wa.me/919513877866" className="w-9 h-9 border border-gray-300 flex items-center justify-center text-forest-700 hover:border-green-400 hover:text-green-400 transition-all duration-300">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-semibold text-forest-900 text-sm tracking-widest uppercase mb-6 section-tag">Navigate</h4>
            <ul className="space-y-3">
              {[['home','Home'],['workspaces','Workspaces'],['acoustic','Acoustic Panels'],['contact','Contact']].map(([tab, label]) => (
                <li key={tab}>
                  <button onClick={() => onTabChange(tab)} className="font-body text-forest-700 text-sm hover:text-amber-eco transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-amber-eco inline-block"></span>{label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body font-semibold text-forest-900 text-sm tracking-widest uppercase mb-6 section-tag">Products</h4>
            <ul className="space-y-3">
              {['Acoustic Baffles','Cell Ceiling Systems','CNC Cut Panels','Acoustic Screens','Printed Panels','Acoustic Clouds'].map(p => (
                <li key={p}>
                  <button onClick={() => onTabChange('acoustic')} className="font-body text-forest-600 text-sm hover:text-amber-eco transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-amber-eco inline-block"></span>{p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-forest-900 text-sm tracking-widest uppercase mb-6 section-tag">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <i className="fas fa-map-marker-alt text-amber-eco mt-1 text-xs"></i>
                <p className="font-body text-forest-600 text-sm leading-relaxed">Unit No, B/19/01<br/>Nagasandra Tumkur Road<br/>Bangalore — 560073</p>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fas fa-phone text-amber-eco text-xs"></i>
                <a href="tel:+919513877866" className="font-body text-forest-600 text-sm hover:text-amber-eco transition-colors">+91 9513877866</a>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fas fa-envelope text-amber-eco text-xs"></i>
                <a href="mailto:info@ecovation.co.in" className="font-body text-forest-600 text-sm hover:text-amber-eco transition-colors">info@ecovation.co.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <p className="font-body text-forest-600 text-xs">© {year} Ecovation. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Privacy Policy','Terms of Service','Sustainability Report'].map(l => (
              <a key={l} href="#" className="font-body text-forest-600 text-[10px] md:text-xs hover:text-amber-eco transition-colors tracking-wider uppercase font-medium">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
