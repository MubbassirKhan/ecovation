import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-amber-eco flex items-center justify-center font-display text-white text-lg font-bold rounded-md">E</div>
              <span className="font-display text-lg font-bold tracking-tight text-forest-900">ECO<span className="text-amber-eco">VATION</span></span>
            </div>
            <p className="font-body text-forest-700 text-sm leading-relaxed mb-6">
              Transforming interiors through sustainable innovation. PET acoustic panels & workspace design from Bangalore.
            </p>
            <div className="flex gap-3">
              {['fa-facebook-f', 'fa-instagram', 'fa-linkedin-in'].map(icon => (
                <a key={icon} href="#" className="w-9 h-9 border border-gray-300 flex items-center justify-center text-forest-700 hover:border-amber-eco hover:text-amber-eco hover:bg-amber-eco/5 transition-all duration-300 rounded-md">
                  <i className={`fab ${icon} text-xs`}></i>
                </a>
              ))}
              <a href="https://wa.me/919513877866" className="w-9 h-9 border border-gray-300 flex items-center justify-center text-forest-700 hover:border-green-400 hover:text-green-400 hover:bg-green-400/5 transition-all duration-300 rounded-md">
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-body font-semibold text-forest-900 text-sm tracking-wider uppercase mb-6 section-tag">Navigate</h4>
            <ul className="space-y-3">
              {[['/', 'Home'],['/workspaces','Workspaces'],['/acoustic','Acoustic Panels'],['/contact','Contact']].map(([path, label]) => (
                <li key={path}>
                  <button onClick={() => navigate(path)} className="font-body text-forest-600 text-sm hover:text-amber-eco transition-colors duration-300 flex items-center gap-2 font-medium">
                    <span className="w-1 h-1 bg-amber-eco rounded-full inline-block"></span>{label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-body font-semibold text-forest-900 text-sm tracking-wider uppercase mb-6 section-tag">Products</h4>
            <ul className="space-y-3">
              {['Acoustic Baffles','Cell Ceiling Systems','CNC Cut Panels','Acoustic Screens','Printed Panels','Acoustic Clouds'].map(p => (
                <li key={p}>
                  <button onClick={() => navigate('/acoustic')} className="font-body text-forest-600 text-sm hover:text-amber-eco transition-colors duration-300 flex items-center gap-2 font-medium">
                    <span className="w-1 h-1 bg-amber-eco rounded-full inline-block"></span>{p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-forest-900 text-sm tracking-wider uppercase mb-6 section-tag">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <i className="fas fa-map-marker-alt text-amber-eco mt-0.5 text-xs flex-shrink-0"></i>
                <p className="font-body text-forest-600 text-sm leading-relaxed">Unit No, B/19/01<br/>Nagasandra Tumkur Road<br/>Bangalore — 560073</p>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fas fa-phone text-amber-eco text-xs flex-shrink-0"></i>
                <a href="tel:+919513877866" className="font-body text-forest-600 text-sm hover:text-amber-eco transition-colors font-medium">+91 9513877866</a>
              </div>
              <div className="flex gap-3 items-center">
                <i className="fas fa-envelope text-amber-eco text-xs flex-shrink-0"></i>
                <a href="mailto:info@ecovation.co.in" className="font-body text-forest-600 text-sm hover:text-amber-eco transition-colors font-medium">info@ecovation.co.in</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-forest-600 text-xs">© {year} Ecovation. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','Sustainability Report'].map(l => (
              <a key={l} href="#" className="font-body text-forest-600 text-xs hover:text-amber-eco transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
