import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const projects = [
  { label: 'Meeting Room', image: '/images/Projects/project1.jpeg', icon: 'fa-handshake' },
  { label: 'Open Office', image: '/images/Projects/project2.jpeg', icon: 'fa-people-group' },
  { label: 'Collaboration Zone', image: '/images/Projects/project3.jpeg', icon: 'fa-users' },
  { label: 'Reception', image: '/images/Projects/project4.jpeg', icon: 'fa-door-open' },
  { label: 'Breakout Space', image: '/images/Projects/project5.jpeg', icon: 'fa-mug-hot' },
  { label: 'Workspace Interior', image: '/images/Projects/project6.jpeg', icon: 'fa-building' },
];

const clients = [
  { name: 'ADT', logo: '/images/logos/adt.png' },
  { name: 'Alphadyne', logo: '/images/logos/alphadyne.jpeg' },
  { name: 'Enfinity', logo: '/images/logos/enfinity.jpg' },
  { name: 'Sears', logo: '/images/logos/sears.jpeg' },
  { name: 'UKG', logo: '/images/logos/ukg.jpeg' },
  { name: 'Client 1', logo: '/images/clients/image1.png' },
  { name: 'Client 2', logo: '/images/clients/image2.png' },
  { name: 'Client 3', logo: '/images/clients/image3.png' },
];

function StatCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 80));
    const timer = setInterval(() => {
      cur = Math.min(cur + step, target);
      setCount(cur);
      if (cur >= target) clearInterval(timer);
    }, 25);
    return () => clearInterval(timer);
  }, [target]);
  return <span>{count}{suffix}</span>;
}

const heroImages = [
  '/images/bg.png',
  '/images/Projects/project1.jpeg',
  '/images/Projects/project2.jpeg',
  '/images/Projects/project3.jpeg',
  '/images/Projects/project4.jpeg',
];

export default function HomePage() {
  const navigate = useNavigate();
  const [heroVisible, setHeroVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 100);
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="main-content">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-Screen Carousel Background */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-all duration-1200 ease-in-out ${idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <img 
                src={img} 
                alt={`Hero Background ${idx}`} 
                className="w-full h-full object-cover"
              />
              {/* Overlays for readability */}
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-32 pb-24 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">
            <h1 className={`font-display leading-tight mb-6 md:mb-8 transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="block text-base sm:text-2xl md:text-4xl lg:text-5xl text-white/90 font-light tracking-wide">Sustainable</span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-amber-eco font-bold tracking-tight -mt-2 md:-mt-6 drop-shadow-lg">Interiors</span>
              <span className="block text-lg sm:text-2xl md:text-4xl lg:text-5xl text-white font-medium drop-shadow-md mt-2 md:mt-4">& Acoustics</span>
            </h1>

            <p className={`font-body text-white/95 text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 delay-300 font-normal ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Transforming modern workspaces with sustainable acoustic solutions. Custom PET panels and interior design built for comfort, clarity, and environmental responsibility.
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 transition-all duration-700 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <button onClick={() => navigate('/workspaces')} className="w-full sm:w-auto px-8 py-3.5 md:px-11 md:py-4 bg-amber-eco text-white font-body font-semibold tracking-normal hover:bg-amber-light transition-all duration-300 hover:shadow-xl hover:shadow-amber-eco/30 flex items-center justify-center gap-2.5 text-sm md:text-base rounded-md border border-amber-eco">
                <i className="fas fa-compass text-xs md:text-sm"></i> EXPLORE SERVICES
              </button>
              <button onClick={() => navigate('/contact')} className="w-full sm:w-auto px-8 py-3.5 md:px-11 md:py-4 border-2 border-white text-white font-body font-semibold tracking-normal hover:bg-white hover:text-forest-900 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm md:text-base rounded-md hover:shadow-xl">
                <i className="fas fa-comment-dots text-xs md:text-sm"></i> GET A QUOTE
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Progress Indicators (Center Bottom) */}
        <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentImageIndex(idx)}
              className={`group relative h-0.5 transition-all duration-500 overflow-hidden ${idx === currentImageIndex ? 'w-12 md:w-14 bg-white/50' : 'w-4 md:w-6 bg-white/25 hover:bg-white/35'}`}
            >
              {idx === currentImageIndex && (
                <div className="absolute top-0 left-0 h-full bg-white animate-[progress_5s_linear_forwards]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Decorative badge in corner */}
        <div className="absolute top-40 right-8 lg:right-12 hidden lg:block z-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/40 p-6 lg:p-8 shadow-2xl">
             <div className="text-center">
                <span className="block font-display text-5xl lg:text-6xl text-amber-eco leading-none font-bold">73+</span>
                <span className="block font-body text-white/90 text-[9px] tracking-wider uppercase font-semibold mt-3">Panel Colors</span>
             </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-amber-eco to-amber-light">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
            {[
              { target: 38, suffix: '+', label: 'Years Experience' },
              { target: 200, suffix: '+', label: 'Projects Delivered' },
              { target: 73, suffix: '', label: 'Panel Color Options' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-5 flex-1">
                <span className="font-display text-5xl sm:text-6xl md:text-7xl text-white leading-none font-bold"><StatCounter target={stat.target} suffix={stat.suffix} /></span>
                <span className="font-body text-white/95 text-xs md:text-sm font-medium uppercase tracking-wider md:max-w-[140px]">{stat.label}</span>
                {i < 2 && <div className="hidden lg:block w-px h-12 bg-white/30 ml-8"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="reveal">
              <span className="section-tag font-body text-amber-eco text-xs tracking-widest uppercase font-semibold block mb-6">Who We Are</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 leading-tight mb-8 font-bold">
                DESIGNING<br/>SPACES THAT<br/><span className="text-gradient">WORK & SOUND</span><br/>RIGHT
              </h2>
              <p className="font-body text-forest-700 text-base md:text-lg leading-relaxed mb-8">
                Ecovation transforms interiors through thoughtful design, recycled-material innovation, and acoustic comfort. We create spaces that look premium, work better, and support sustainability goals.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-recycle', label: 'Recycled PET Materials' },
                  { icon: 'fa-wave-square', label: 'Acoustic Planning' },
                  { icon: 'fa-palette', label: 'Custom Finishes' },
                  { icon: 'fa-clipboard-check', label: 'End-to-End Delivery' },
                ].map(f => (
                  <div key={f.label} className="flex items-center gap-3 border border-gray-300 p-4 hover:border-amber-eco hover:bg-amber-eco/5 transition-all duration-300 group rounded-md">
                    <i className={`fas ${f.icon} text-amber-eco text-base`}></i>
                    <span className="font-body text-forest-700 text-sm group-hover:text-amber-eco transition-colors font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-right delay-200">
              <div className="relative group">
                <div className="bg-gray-300 border border-gray-400 aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="/images/Projects/project7.jpeg" 
                    alt="Workspace Project" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 md:-right-6 md:-bottom-6 bg-white border border-amber-eco/40 p-4 md:p-6 max-w-[200px] md:max-w-xs shadow-xl rounded-lg">
                  <div className="font-display text-3xl md:text-4xl text-amber-eco font-bold">200+</div>
                  <p className="font-body text-forest-700 text-xs md:text-sm mt-2 leading-relaxed">Successful projects delivered across India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="reveal order-2 lg:order-1">
              <div className="relative group">
                <div className="bg-gray-300 border border-gray-400 aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                  <img 
                    src="/images/Projects/project8.jpeg" 
                    alt="Acoustic Project" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="reveal reveal-right delay-200 order-1 lg:order-2">
              <span className="section-tag font-body text-amber-eco text-xs tracking-widest uppercase font-semibold block mb-6">Our Purpose</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 leading-tight mb-8 font-bold">MISSION<br/><span className="text-gradient">&amp; VISION</span></h2>
              <div className="space-y-5">
                <div className="border-l-3 border-amber-eco pl-6 py-4">
                  <h4 className="font-body font-semibold text-forest-900 mb-2.5 flex items-center gap-2.5"><i className="fas fa-bullseye text-amber-eco text-sm"></i> Our Mission</h4>
                  <p className="font-body text-forest-700 text-sm md:text-base leading-relaxed">To deliver sustainable, acoustically comfortable interiors that improve the way people work and live.</p>
                </div>
                <div className="border-l-3 border-amber-eco pl-6 py-4">
                  <h4 className="font-body font-semibold text-forest-900 mb-2.5 flex items-center gap-2.5"><i className="fas fa-eye text-amber-eco text-sm"></i> Our Vision</h4>
                  <p className="font-body text-forest-700 text-sm md:text-base leading-relaxed">To make circular materials and responsible design the standard for modern interiors across India.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">What We Do</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 mt-4 font-bold">OUR SERVICES</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: 'fa-building', title: 'Workspaces', desc: 'Workspace design and fit-outs that improve flow, comfort, and brand experience. Built for productivity, collaboration, and acoustic balance.', tab: 'workspaces', tag: '01' },
              { icon: 'fa-wave-square', title: 'Acoustic Panels', desc: 'PET acoustic panels and systems that reduce echo and improve speech clarity. Customizable forms and finishes for any interior style.', tab: 'acoustic', tag: '02' },
            ].map(s => (
              <div key={s.tab} className="group bg-white border border-gray-300 p-8 md:p-10 hover:border-amber-eco hover:shadow-xl transition-all duration-500 reveal cursor-pointer text-center md:text-left rounded-lg" onClick={() => navigate(s.tab === 'workspaces' ? '/workspaces' : s.tab === 'acoustic' ? '/acoustic' : '/contact')}>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 border-2 border-gray-300 group-hover:border-amber-eco flex items-center justify-center transition-all duration-300 mx-auto md:mx-0 rounded-lg group-hover:bg-amber-eco/5">
                    <i className={`fas ${s.icon} text-2xl text-forest-600 group-hover:text-amber-eco transition-colors duration-300`}></i>
                  </div>
                  <span className="font-display text-5xl md:text-6xl text-gray-200 group-hover:text-amber-eco/20 transition-colors hidden md:block font-bold">{s.tag}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-forest-900 mb-4 font-bold">{s.title.toUpperCase()}</h3>
                <div className="card-line mb-6 mx-auto md:mx-0 h-1"></div>
                <p className="font-body text-forest-700 text-sm md:text-base leading-relaxed mb-8">{s.desc}</p>
                <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold flex items-center justify-center md:justify-start gap-2 group">
                  Explore <i className="fas fa-arrow-right text-xs group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────── */}
      <section className="py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6 reveal">
            <div>
              <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Portfolio</span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 mt-4 font-bold">FEATURED<br/>PROJECTS</h2>
            </div>
            <div className="flex gap-3">
              <button onClick={() => navigate('/workspaces')} className="px-6 py-3 bg-amber-eco text-white font-body font-semibold text-sm tracking-normal hover:bg-amber-light transition-all rounded-md border border-amber-eco hover:shadow-lg">Workspaces</button>
              <button onClick={() => navigate('/acoustic')} className="px-6 py-3 border-2 border-gray-300 text-forest-700 font-body font-semibold text-sm hover:border-amber-eco hover:text-amber-eco transition-all rounded-md hover:shadow-lg">Acoustic</button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {projects.map((p, i) => (
              <div key={i} className={`group img-zoom aspect-square border border-gray-300 hover:border-amber-eco transition-all duration-500 reveal delay-${(i%3+1)*100} relative overflow-hidden cursor-pointer rounded-lg shadow-md hover:shadow-lg`}>
                <img 
                  src={p.image} 
                  alt={p.label} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-forest-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                  <i className={`fas ${p.icon} text-3xl text-amber-eco mb-3`}></i>
                  <span className="font-body text-white text-sm font-semibold tracking-wide uppercase">{p.label}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-eco transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Our Edge</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 mt-4 font-bold">WHY CHOOSE<br/><span className="text-gradient">ECOVATION</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Designed for Performance', desc: 'Layouts and finishes planned for comfort, productivity, and acoustic balance.' },
              { num: '02', title: 'Material Responsibility', desc: 'Recycled-material solutions that support sustainability goals without sacrificing quality.' },
              { num: '03', title: 'End-to-End Delivery', desc: 'From planning and visualization to execution and handover—one accountable team.' },
            ].map(w => (
              <div key={w.num} className="bg-white p-10 group hover:bg-gradient-to-br hover:from-white hover:to-amber-eco/5 transition-all duration-500 reveal border border-gray-200 hover:border-amber-eco/30 rounded-lg shadow-sm hover:shadow-md">
                <div className="font-display text-6xl text-gray-200 group-hover:text-amber-eco/30 transition-colors duration-500 mb-6 font-bold">{w.num}</div>
                <h4 className="font-body font-semibold text-forest-900 text-lg mb-4">{w.title}</h4>
                <p className="font-body text-forest-700 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Our Approach</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 mt-4 font-bold">HOW WE <span className="text-gradient">WORK</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-comments', title: 'Consultation', desc: 'We align on goals, scope, timelines, and budget—then map the best approach.' },
              { icon: 'fa-pen-ruler', title: 'Design & Visualization', desc: 'Space planning, material selection, and 3D views so you can approve with confidence.' },
              { icon: 'fa-helmet-safety', title: 'Execution & Handover', desc: 'On-site coordination, quality checks, and a clean handover with support.' },
            ].map((p, i) => (
              <div key={i} className={`group reveal delay-${(i+1)*100} relative`}>
                <div className="border border-gray-300 group-hover:border-amber-eco transition-all duration-500 p-8 relative bg-white rounded-lg shadow-sm hover:shadow-lg group-hover:bg-white">
                  <div className="absolute top-6 right-6 font-display text-5xl text-gray-200 group-hover:text-amber-eco/20 transition-colors duration-500 font-bold">0{i+1}</div>
                  <div className="w-14 h-14 bg-gray-100 border border-gray-300 group-hover:border-amber-eco group-hover:bg-amber-eco/10 flex items-center justify-center mb-6 transition-all duration-300 rounded-lg">
                    <i className={`fas ${p.icon} text-amber-eco text-lg`}></i>
                  </div>
                  <h4 className="font-body font-semibold text-forest-900 text-lg mb-4">{p.title}</h4>
                  <p className="font-body text-forest-700 text-sm leading-relaxed">{p.desc}</p>
                </div>
                {i < 2 && <div className="hidden md:block absolute -right-4 top-12 w-8 h-0.5 bg-amber-eco/30"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ───────────────────────────────────────────── */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 reveal">
          <div className="text-center">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Trusted By</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 mt-4 font-bold">OUR CLIENTS</h2>
          </div>
        </div>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="marquee-track flex gap-8 items-center whitespace-nowrap">
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="flex-shrink-0 border border-gray-300 px-8 py-5 hover:border-amber-eco hover:bg-white transition-all duration-300 group bg-white flex items-center justify-center h-24 w-52 rounded-lg shadow-sm hover:shadow-md">
                  <img 
                    src={c.logo} 
                    alt={c.name} 
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-36 bg-gradient-to-r from-forest-900 to-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-eco/10 rounded-full blur-3xl -ml-48"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Get Started</span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mt-4 mb-8 leading-tight font-bold">READY TO<br/><span className="text-amber-eco">START?</span></h2>
          <p className="font-body text-white/90 text-lg md:text-xl mb-12">Share a few details and we'll send next steps within 24 hours.</p>
          <button onClick={() => navigate('/contact')} className="px-10 py-4 bg-amber-eco text-forest-900 font-body font-semibold text-base tracking-normal hover:bg-amber-light transition-all duration-300 hover:shadow-2xl hover:shadow-amber-eco/40 inline-flex items-center gap-3 rounded-md border border-amber-eco hover:-translate-y-1">
            CONTACT US <i className="fas fa-arrow-right text-sm"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
