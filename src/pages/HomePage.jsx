import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { teamMembers, PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL } from '../data/siteData';

const projects = [
  { label: 'Meeting Room', image: '/images/Projects/project1.jpeg', icon: 'fa-handshake', type: 'Workspace' },
  { label: 'Open Office', image: '/images/Projects/project2.jpeg', icon: 'fa-people-group', type: 'Workspace' },
  { label: 'Collaboration Zone', image: '/images/Projects/project3.jpeg', icon: 'fa-users', type: 'Workspace' },
  { label: 'Reception', image: '/images/Projects/project4.jpeg', icon: 'fa-door-open', type: 'Workspace' },
  { label: 'Breakout Space', image: '/images/Projects/project5.jpeg', icon: 'fa-mug-hot', type: 'Acoustic' },
  { label: 'Workspace Interior', image: '/images/Projects/project6.jpeg', icon: 'fa-building', type: 'Workspace' },
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

const bottleStages = [
  { num: '01', icon: 'fa-recycle', title: 'Collection', desc: 'PET bottles collected from post-consumer recycling partners across India.' },
  { num: '02', icon: 'fa-scissors', title: 'Shredding', desc: 'Bottles shredded, washed, and cleaned into pure PET flakes.' },
  { num: '03', icon: 'fa-fire', title: 'Fiber Extrusion', desc: 'Flakes melted and extruded into fine, uniform polyester fibers.' },
  { num: '04', icon: 'fa-layer-group', title: 'Board Forming', desc: 'Fibers thermally bonded under high pressure into rigid acoustic boards.' },
  { num: '05', icon: 'fa-palette', title: 'Color & Finish', desc: 'Dyed in 120+ colors with smooth, pin-receptive, printable surfaces.' },
  { num: '06', icon: 'fa-cut', title: 'CNC Cutting', desc: 'Precision cutting into custom shapes, sizes and architectural designs.' },
  { num: '07', icon: 'fa-shield-check', title: 'QC Testing', desc: 'NRC, fire resistance and dimensional accuracy tested to standard.' },
  { num: '08', icon: 'fa-truck', title: 'Installation', desc: 'Professional delivery and on-site installation at your space.' },
];

const applications = [
  { icon: 'fa-building', label: 'Corporate Offices' },
  { icon: 'fa-handshake', label: 'Meeting Rooms' },
  { icon: 'fa-microphone', label: 'Conference Rooms' },
  { icon: 'fa-door-open', label: 'Reception Areas' },
  { icon: 'fa-users', label: 'Collaboration Zones' },
  { icon: 'fa-mug-hot', label: 'Cafeterias' },
  { icon: 'fa-utensils', label: 'Restaurants' },
  { icon: 'fa-graduation-cap', label: 'Educational Spaces' },
  { icon: 'fa-laptop-house', label: 'Home Offices' },
  { icon: 'fa-couch', label: 'Living Rooms' },
  { icon: 'fa-bed', label: 'Bedrooms' },
  { icon: 'fa-tv', label: 'Entertainment Rooms' },
  { icon: 'fa-shop', label: 'Commercial Interiors' },
  { icon: 'fa-home', label: 'Residential Interiors' },
];

const services = [
  { icon: 'fa-building', title: 'Interior Turnkey', desc: 'Complete design-to-execution workspace and residential solutions — from concept to handover.', path: '/workspaces', tag: '01' },
  { icon: 'fa-home', title: 'Residential Interiors', desc: 'Thoughtfully designed home interiors combining aesthetics, comfort and acoustic performance.', path: '/residency', tag: '02' },
  { icon: 'fa-wave-square', title: 'Acoustic Panels', desc: 'PET acoustic panels for superior sound absorption and speech clarity in any space.', path: '/acoustic', tag: '03' },
  { icon: 'fa-cut', title: 'CNC Cutting', desc: 'Precision CNC cutting for custom patterns, shapes and architectural panel applications.', path: '/acoustic', tag: '04' },
  { icon: 'fa-print', title: 'Printed Panels', desc: 'High-quality printed designs on acoustic surfaces for brand expression and visual environments.', path: '/acoustic', tag: '05' },
  { icon: 'fa-border-all', title: 'Ceiling Solutions', desc: 'Acoustic ceiling treatments, baffles, clouds and custom ceiling designs for any space.', path: '/acoustic', tag: '06' },
];

const whyReasons = [
  { icon: 'fa-recycle', title: 'Sustainable Materials', desc: 'Solutions built around 100% recycled PET and responsible material choices that support environmental goals.' },
  { icon: 'fa-palette', title: '120+ Panel Colors', desc: 'A broad colour palette with over 120 EP-series colours for complete design flexibility.' },
  { icon: 'fa-cut', title: 'Custom Fabrication', desc: 'CNC cutting, printing, embossing and customized panel designs for any architectural requirement.' },
  { icon: 'fa-wave-square', title: 'Acoustic Performance', desc: 'Solutions engineered to improve sound absorption, reduce echo and enhance speech clarity.' },
  { icon: 'fa-helmet-safety', title: 'Turnkey Execution', desc: 'From concept and material selection to installation and final handover — one accountable team.' },
  { icon: 'fa-pen-ruler', title: 'Design + Execution', desc: 'A single coordinated team bridging design intent and project delivery for seamless results.' },
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
              <div className="absolute inset-0 bg-black/55"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"></div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-32 pb-24 md:pt-40 md:pb-20">
          <div className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left">

            {/* Positioning badge */}
            <div className={`inline-flex items-center gap-2 border border-amber-eco/50 px-4 py-2 mb-6 mx-auto lg:mx-0 transition-all duration-700 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="w-1.5 h-1.5 bg-amber-eco rounded-full"></span>
              <span className="font-body text-amber-eco text-xs tracking-widest uppercase">Interior Turnkey Solutions</span>
            </div>

            <h1 className={`font-display leading-tight mb-6 md:mb-8 transition-all duration-700 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="block text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide">Sustainable Interiors.</span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-amber-eco font-bold tracking-tight -mt-1 md:-mt-4 drop-shadow-lg">Acoustic</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-medium drop-shadow-md mt-1 md:mt-2">Innovation. Turnkey Execution.</span>
            </h1>

            <p className={`font-body text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-4 max-w-2xl mx-auto lg:mx-0 transition-all duration-700 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Premium interior and acoustic solutions crafted from recycled PET — designed, customized and delivered for modern workspaces and residences.
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 transition-all duration-700 delay-400 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <button onClick={() => navigate('/acoustic')} className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 bg-amber-eco text-white font-body font-semibold tracking-normal hover:bg-amber-light transition-all duration-300 hover:shadow-xl hover:shadow-amber-eco/30 flex items-center justify-center gap-2.5 text-sm md:text-base border border-amber-eco">
                <i className="fas fa-compass text-xs md:text-sm"></i> Explore Our Solutions
              </button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 md:px-10 md:py-4 border-2 border-white text-white font-body font-semibold tracking-normal hover:bg-white hover:text-forest-900 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm md:text-base hover:shadow-xl">
                <i className="fab fa-whatsapp text-xs md:text-sm"></i> Talk to Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
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

        {/* Stats badge in corner */}
        <div className="absolute top-40 right-8 lg:right-12 hidden lg:block z-10">
          <div className="bg-white/10 backdrop-blur-xl border border-white/30 p-6 lg:p-8 shadow-2xl">
            <div className="text-center">
              <span className="block font-display text-5xl lg:text-6xl text-amber-eco leading-none font-bold">120+</span>
              <span className="block font-body text-white/90 text-[9px] tracking-wider uppercase font-semibold mt-3">Panel Colors</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────── */}
      <div className="bg-forest-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {[
              { target: 15, suffix: '+', label: 'Years Experience' },
              { target: 200, suffix: '+', label: 'Projects Delivered' },
              { target: 120, suffix: '+', label: 'Panel Colors' },
              { target: 100, suffix: '%', label: 'Recycled PET' },
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${i < 3 ? 'md:border-r md:border-gray-700' : ''}`}>
                <span className="font-display text-5xl sm:text-6xl text-amber-eco leading-none font-bold">
                  <StatCounter target={stat.target} suffix={stat.suffix} />
                </span>
                <span className="font-body text-gray-400 text-xs font-medium uppercase tracking-wider mt-3">{stat.label}</span>
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
                Ecovation combines sustainable materials, thoughtful interior design and acoustic innovation to create spaces that perform beautifully — improving comfort, productivity, acoustic performance and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-recycle', label: 'Recycled PET Materials' },
                  { icon: 'fa-wave-square', label: 'Acoustic Planning' },
                  { icon: 'fa-palette', label: '120+ Custom Colors' },
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
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 leading-tight mb-8 font-bold">MISSION<br/><span className="text-gradient">& VISION</span></h2>
              <div className="space-y-5">
                <div className="border-l-4 border-amber-eco pl-6 py-4">
                  <h4 className="font-body font-semibold text-forest-900 mb-2.5 flex items-center gap-2.5"><i className="fas fa-bullseye text-amber-eco text-sm"></i> Our Mission</h4>
                  <p className="font-body text-forest-700 text-sm md:text-base leading-relaxed">To transform modern interiors through sustainable materials, intelligent design and precision execution — creating spaces that improve how people live and work.</p>
                </div>
                <div className="border-l-4 border-amber-eco pl-6 py-4">
                  <h4 className="font-body font-semibold text-forest-900 mb-2.5 flex items-center gap-2.5"><i className="fas fa-eye text-amber-eco text-sm"></i> Our Vision</h4>
                  <p className="font-body text-forest-700 text-sm md:text-base leading-relaxed">To make sustainable, high-performance interior solutions accessible to businesses and homeowners, establishing recycled materials as the standard for modern Indian interiors.</p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s => (
              <div key={s.tag} className="group bg-white border border-gray-300 p-8 hover:border-amber-eco hover:shadow-xl transition-all duration-500 reveal cursor-pointer rounded-lg" onClick={() => navigate(s.path)}>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 border-2 border-gray-300 group-hover:border-amber-eco flex items-center justify-center transition-all duration-300 rounded-lg group-hover:bg-amber-eco/5">
                    <i className={`fas ${s.icon} text-xl text-forest-600 group-hover:text-amber-eco transition-colors duration-300`}></i>
                  </div>
                  <span className="font-display text-5xl text-gray-200 group-hover:text-amber-eco/20 transition-colors font-bold">{s.tag}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl text-forest-900 mb-4 font-bold">{s.title.toUpperCase()}</h3>
                <p className="font-body text-forest-700 text-sm leading-relaxed mb-6">{s.desc}</p>
                <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold flex items-center gap-2">
                  Explore <i className="fas fa-arrow-right text-xs group-hover:translate-x-2 transition-transform duration-300"></i>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTLE TO PRODUCT ─────────────────────────────────── */}
      <section className="py-32 bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-amber-eco"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Circular Economy</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mt-4 font-bold">
              FROM BOTTLE<br/><span className="text-amber-eco">TO PRODUCT</span>
            </h2>
            <p className="font-body text-gray-400 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
              Every panel starts as a recycled PET bottle. Here's how we transform plastic waste into premium acoustic solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800">
            {bottleStages.map((stage, i) => (
              <div key={i} className="bg-forest-900 hover:bg-gray-900 transition-colors duration-300 p-8 reveal group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="font-display text-4xl text-amber-eco/30 group-hover:text-amber-eco/60 transition-colors duration-500 font-bold">{stage.num}</div>
                  <div className="w-10 h-10 border border-gray-700 group-hover:border-amber-eco flex items-center justify-center transition-colors duration-300">
                    <i className={`fas ${stage.icon} text-amber-eco text-sm`}></i>
                  </div>
                </div>
                <h4 className="font-body font-semibold text-white text-base mb-3">{stage.title}</h4>
                <div className="w-8 h-0.5 bg-amber-eco mb-4 group-hover:w-full transition-all duration-500"></div>
                <p className="font-body text-gray-400 text-sm leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center reveal">
            <div className="inline-flex items-center gap-3 border border-amber-eco/30 px-6 py-3 text-amber-eco">
              <i className="fas fa-leaf text-sm"></i>
              <span className="font-body text-sm">100% Recycled PET · Diverts plastic from landfills · Fire rated · Acoustically tested</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ECOVATION ─────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Our Edge</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 mt-4 font-bold">WHY CHOOSE<br/><span className="text-gradient">ECOVATION</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyReasons.map((w, i) => (
              <div key={i} className="group border border-gray-200 p-8 hover:border-amber-eco/50 hover:shadow-lg transition-all duration-500 reveal rounded-lg bg-white">
                <div className="w-12 h-12 border border-gray-300 group-hover:border-amber-eco group-hover:bg-amber-eco/5 flex items-center justify-center mb-6 transition-all duration-300 rounded-lg">
                  <i className={`fas ${w.icon} text-amber-eco text-base`}></i>
                </div>
                <h4 className="font-body font-semibold text-forest-900 text-lg mb-3">{w.title}</h4>
                <p className="font-body text-forest-700 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ──────────────────────────────────────── */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Where We Fit</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 mt-4 font-bold">WHERE ECOVATION<br/><span className="text-gradient">SOLUTIONS FIT</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {applications.map((app, i) => (
              <div key={i} className="group border border-gray-300 hover:border-amber-eco p-4 text-center transition-all duration-300 bg-white hover:bg-amber-eco/3 reveal rounded-md">
                <div className="w-10 h-10 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center mx-auto mb-3 transition-colors duration-300 rounded-md group-hover:bg-amber-eco/10">
                  <i className={`fas ${app.icon} text-amber-eco text-sm`}></i>
                </div>
                <p className="font-body text-forest-700 text-xs font-medium leading-tight group-hover:text-amber-eco transition-colors">{app.label}</p>
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
                  <span className="font-body text-amber-eco text-xs mt-1">{p.type}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-eco transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────── */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">The People</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest-900 mt-4 font-bold">MEET OUR<br/><span className="text-gradient">TEAM</span></h2>
          </div>
          {/* Full-width two-column grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => {
              const isRight = i % 2 === 1;
              return (
                <div key={i} className={`team-card team-card-home group reveal ${isRight ? 'md:translate-y-4' : ''}`}>
                  {/* Portrait */}
                  <div className="team-visual aspect-[4/5] sm:aspect-[16/11] lg:aspect-[16/9]">
                    {member.image ? (
                      <div className="team-photo-frame">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="team-photo"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className={`w-full px-8 ${isRight ? 'flex flex-col items-end' : 'flex flex-col items-start'}`}>
                          <div className="w-28 h-28 rounded-full bg-amber-eco/10 border-2 border-amber-eco/30 flex items-center justify-center mb-4">
                            <span className="font-display text-5xl text-amber-eco font-bold">{member.initials}</span>
                          </div>
                          <p className="font-body text-gray-400 text-xs">Photo coming soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="team-content team-content-home">
                    <h3 className="font-display text-3xl text-forest-900 font-bold mb-1 text-center">{member.name}</h3>
                    <p className="team-role font-body text-amber-eco text-xs tracking-widest uppercase font-semibold text-center">{member.role}</p>
                    <div className="team-role-line mx-auto"></div>
                    <p className="font-body text-forest-700 text-sm leading-relaxed text-justify">{member.bio}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── CLIENTS ───────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 reveal">
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
      <section className="py-36 bg-gradient-to-br from-forest-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-eco/10 rounded-full blur-3xl -ml-48"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Get Started</span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mt-4 mb-6 leading-tight font-bold">LET'S BUILD<br/><span className="text-amber-eco">BETTER SPACES</span></h2>
          <p className="font-body text-white/80 text-lg md:text-xl mb-12">Share your space requirements and we'll respond within 24 hours with the right solution.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/about')} className="px-10 py-4 bg-amber-eco text-forest-900 font-body font-semibold text-base tracking-normal hover:bg-amber-light transition-all duration-300 hover:shadow-2xl hover:shadow-amber-eco/40 inline-flex items-center justify-center gap-3 border border-amber-eco hover:-translate-y-1">
              CONTACT US <i className="fas fa-arrow-right text-sm"></i>
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 border-2 border-white/30 text-white font-body font-semibold text-base hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-3">
              <i className="fab fa-whatsapp text-green-400"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
