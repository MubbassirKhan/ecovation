import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WHATSAPP_URL } from '../data/siteData';

const roomTypes = [
  {
    icon: 'fa-couch',
    title: 'Living Rooms',
    desc: 'Modern, comfortable and personalized living environments designed around how you and your family actually use the space. Acoustic comfort, lighting design, and material selection refined to your lifestyle.',
    image: '/images/Projects/project9.jpeg',
  },
  {
    icon: 'fa-bed',
    title: 'Bedrooms',
    desc: 'Calm, warm and acoustically comfortable private spaces that help you rest and recharge. From master suites to children\'s rooms — designed for peace and quality of sleep.',
    image: '/images/Projects/project15.jpeg',
  },
  {
    icon: 'fa-laptop-house',
    title: 'Home Offices',
    desc: 'Productive and acoustically optimized work-from-home environments. Dedicated zones with smart acoustic treatment, ergonomic planning and professional-quality lighting.',
    image: '/images/Projects/project16.jpeg',
  },
  {
    icon: 'fa-tv',
    title: 'Entertainment Spaces',
    desc: 'Immersive spaces designed for better sound and visual comfort. Home theatres, media rooms and recreation zones with acoustic panels that enhance every experience.',
    image: '/images/Projects/project6.jpeg',
  },
  {
    icon: 'fa-utensils',
    title: 'Dining Areas',
    desc: 'Functional interiors with refined material and lighting choices. Dining spaces designed to feel warm, inviting and acoustically comfortable for conversation and gathering.',
    image: '/images/Projects/project5.jpeg',
  },
  {
    icon: 'fa-pen-ruler',
    title: 'Custom Residential Interiors',
    desc: 'Solutions tailored entirely to the homeowner\'s lifestyle, available space and personal preferences. Every detail designed around you.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  },
];

const turnkeyProcess = [
  { num: '01', icon: 'fa-comments', title: 'Design Consultation', desc: 'Understanding your lifestyle, aesthetic preferences, functional requirements and budget.' },
  { num: '02', icon: 'fa-ruler-combined', title: 'Space Planning', desc: 'Optimizing layouts for flow, comfort, light, storage and acoustic balance.' },
  { num: '03', icon: 'fa-palette', title: 'Material Selection', desc: 'Curating finishes, fabrics, flooring, cladding and acoustic panel choices for your home.' },
  { num: '04', icon: 'fa-wave-square', title: 'Custom Panel Solutions', desc: 'Selecting and customizing acoustic PET panels for bedrooms, home offices and entertainment spaces.' },
  { num: '05', icon: 'fa-chair', title: 'Furniture Coordination', desc: 'Sourcing and coordinating furniture that complements the design and spatial requirements.' },
  { num: '06', icon: 'fa-lightbulb', title: 'Electrical & Lighting', desc: 'Coordinating electrical points, lighting design and fixture selection for each room.' },
  { num: '07', icon: 'fa-volume-mute', title: 'Acoustic Treatment', desc: 'Applying the right acoustic solutions to reduce noise, improve speech clarity and enhance comfort.' },
  { num: '08', icon: 'fa-helmet-safety', title: 'Execution', desc: 'On-site coordination with skilled contractors, quality materials and strict timelines.' },
  { num: '09', icon: 'fa-screwdriver-wrench', title: 'Installation', desc: 'Precise installation of all panels, fixtures, furniture and finishing elements.' },
  { num: '10', icon: 'fa-key', title: 'Final Handover', desc: 'Walk-through, documentation and post-handover support for your complete peace of mind.' },
];

const features = [
  { icon: 'fa-leaf', title: 'Sustainable Materials', desc: 'Recycled PET panels and responsible material choices throughout your home.' },
  { icon: 'fa-volume-mute', title: 'Acoustic Comfort', desc: 'Quieter bedrooms, clearer home offices and immersive entertainment spaces.' },
  { icon: 'fa-palette', title: '120+ Color Options', desc: 'Match your interiors precisely with over 120 EP-series panel colours.' },
  { icon: 'fa-clipboard-check', title: 'One Team', desc: 'Design, materials, execution and handover coordinated by one accountable team.' },
];

export default function ResidencyPage() {
  const navigate = useNavigate();

  return (
    <div id="main-content">

      {/* Hero */}
      <section className="relative py-36 bg-cream-50 grid-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-1 h-full bg-amber-eco"></div>
        <div className="absolute top-16 left-16 w-32 h-32 border border-amber-eco/15 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 border border-amber-eco/30 px-4 py-2 mb-8 mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 bg-amber-eco"></span>
                <span className="font-body text-amber-eco text-[10px] sm:text-xs tracking-[0.2em] uppercase">Residential Interiors • Ecovation</span>
              </div>
              <h1 className="font-display text-5xl md:text-9xl text-forest-900 leading-none">
                DESIGNED<br/><span className="text-gradient">AROUND<br/>YOU</span>
              </h1>
            </div>
            <div className="lg:max-w-sm text-center lg:text-left mt-8 lg:mt-0">
              <p className="font-body text-forest-900 text-base md:text-lg leading-relaxed mb-8 mx-auto lg:mx-0">
                From elegant living spaces to functional bedrooms and home offices — Ecovation creates thoughtfully designed residential interiors that combine aesthetics, comfort, sustainability and acoustic performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center lg:justify-start mb-6">
                <button onClick={() => navigate('/about')} className="w-full sm:w-auto px-6 py-3 bg-amber-eco text-forest-900 font-body font-semibold hover:bg-amber-light transition-all duration-300 hover:shadow-xl hover:shadow-amber-eco/30 flex items-center justify-center gap-2 text-sm border border-amber-eco">
                  <i className="fas fa-home text-xs"></i> Plan Your Space
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 border border-forest-900 text-forest-900 font-body font-semibold hover:bg-forest-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                  <i className="fab fa-whatsapp"></i> Chat
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">10</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Process Steps</div>
                </div>
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">120+</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Color Options</div>
                </div>
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">100%</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Turnkey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Types - Condensed */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">What We Do</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-forest-900 mt-3">RESIDENTIAL<br/><span className="text-gradient">INTERIORS</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roomTypes.slice(0, 3).map((room, i) => (
              <div key={i} className={`group border border-gray-300 hover:border-amber-eco overflow-hidden transition-all duration-500 reveal bg-white`}>
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-forest-900/15 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <i className={`fas ${room.icon} text-amber-eco text-sm`}></i>
                    <h4 className="font-body font-semibold text-forest-900 text-sm">{room.title}</h4>
                  </div>
                  <p className="font-body text-forest-600 text-xs leading-relaxed line-clamp-2">{room.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
