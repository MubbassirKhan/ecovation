import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PHONE_DISPLAY, PHONE_TEL, PHONE_DISPLAY_OLD, PHONE_TEL_OLD, WHATSAPP_URL, EMAIL, EMAIL_HREF, ADDRESS_LINES } from '../data/siteData';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 border-t border-gray-800 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <img 
                src="/images/logos/logo_no_bg_black.png" 
                alt="Ecovation Logo" 
                className="h-9 w-auto brightness-0 invert"
              />
              <span className="font-display text-lg font-bold tracking-tight text-white">ECO<span className="text-amber-eco">VATION</span></span>
            </div>
            <p className="font-body text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Sustainable interiors and acoustic solutions designed for better spaces. Premium PET acoustic panels & turnkey interior execution from Bengaluru.
            </p>
            <div className="flex gap-3 mb-6">
              {['fa-facebook-f', 'fa-instagram', 'fa-linkedin-in'].map(icon => (
                <a key={icon} href="#" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-amber-eco hover:text-amber-eco hover:bg-amber-eco/5 transition-all duration-300">
                  <i className={`fab ${icon} text-xs`}></i>
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-gray-700 flex items-center justify-center text-gray-400 hover:border-green-400 hover:text-green-400 hover:bg-green-400/5 transition-all duration-300">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
            <div className="space-y-2">
              <a href={PHONE_TEL} className="flex items-center gap-3 text-gray-400 hover:text-amber-eco transition-colors group">
                <i className="fas fa-phone text-amber-eco text-xs w-4"></i>
                <span className="font-body text-sm font-medium">{PHONE_DISPLAY} <span className="text-amber-eco text-[10px] font-bold tracking-wider ml-1">PRIMARY</span></span>
              </a>
              <a href={PHONE_TEL_OLD} className="flex items-center gap-3 text-gray-500 hover:text-gray-300 transition-colors">
                <i className="fas fa-phone text-gray-600 text-xs w-4"></i>
                <span className="font-body text-sm">{PHONE_DISPLAY_OLD}</span>
              </a>
              <a href={EMAIL_HREF} className="flex items-center gap-3 text-gray-400 hover:text-amber-eco transition-colors">
                <i className="fas fa-envelope text-amber-eco text-xs w-4"></i>
                <span className="font-body text-sm font-medium">{EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-semibold text-white text-xs tracking-widest uppercase mb-6 border-l-2 border-amber-eco pl-3">Navigate</h4>
            <ul className="space-y-3">
              {[['/', 'Home'],['/workspaces','Workspaces'],['/residency','Residency'],['/acoustic','Acoustic Panels'],['/about','About Us']].map(([path, label]) => (
                <li key={path}>
                  <button onClick={() => navigate(path)} className="font-body text-gray-400 text-sm hover:text-amber-eco transition-colors duration-300 flex items-center gap-2 font-medium">
                    <span className="w-1 h-1 bg-amber-eco rounded-full inline-block"></span>{label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body font-semibold text-white text-xs tracking-widest uppercase mb-6 border-l-2 border-amber-eco pl-3">Services</h4>
            <ul className="space-y-3">
              {['Interior Turnkey Solutions','Acoustic Panels','CNC Cutting','Printed Panels','Embossed Panels','Ceiling Solutions','Custom Solutions'].map(p => (
                <li key={p}>
                  <button onClick={() => navigate('/acoustic')} className="font-body text-gray-400 text-sm hover:text-amber-eco transition-colors duration-300 flex items-center gap-2 font-medium text-left">
                    <span className="w-1 h-1 bg-amber-eco rounded-full inline-block flex-shrink-0"></span>{p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-white text-xs tracking-widest uppercase mb-6 border-l-2 border-amber-eco pl-3">Our Office</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <i className="fas fa-map-marker-alt text-amber-eco mt-1 text-xs flex-shrink-0"></i>
                <div>
                  {ADDRESS_LINES.map((line, i) => (
                    <p key={i} className="font-body text-gray-400 text-xs leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-4 px-4 py-2.5 bg-green-600/20 border border-green-600/40 text-green-400 text-xs font-semibold hover:bg-green-600/30 transition-all duration-300">
                <i className="fab fa-whatsapp text-sm"></i>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-gray-500 text-xs">© {year} Ecovation Interiors. All rights reserved.</p>
          <p className="font-body text-gray-600 text-xs">Sustainable Interiors & PET Acoustic Solutions — Bengaluru</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service'].map(l => (
              <a key={l} href="#" className="font-body text-gray-500 text-xs hover:text-amber-eco transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
