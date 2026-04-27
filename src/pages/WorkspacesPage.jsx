import React from 'react';

const solutions = [
  { icon: 'fa-people-group', title: 'Open Office Areas', desc: 'Layouts that balance teamwork with acoustic comfort and natural flow.' },
  { icon: 'fa-handshake', title: 'Meeting Rooms', desc: 'Clear speech, privacy, and a premium client experience.' },
  { icon: 'fa-door-open', title: 'Reception & Lobby', desc: 'First impressions that reflect your brand identity powerfully.' },
  { icon: 'fa-mug-hot', title: 'Breakout Spaces', desc: 'Relaxed zones designed for quick resets and creative ideas.' },
  { icon: 'fa-bullseye', title: 'Focus Zones', desc: 'Quiet areas built for deep work and concentration.' },
  { icon: 'fa-laptop-house', title: 'Hybrid Collaboration', desc: 'Video-ready spaces with lighting and acoustic planning.' },
];

const process = [
  { num: '01', title: 'Discovery', desc: 'Understand goals, headcount, workflows, and constraints.' },
  { num: '02', title: 'Space Planning', desc: 'Layouts that optimize flow, collaboration, and focus.' },
  { num: '03', title: 'Design Development', desc: 'Materials, finishes, lighting, and acoustic comfort details.' },
  { num: '04', title: '3D & Visualization', desc: 'Preview the look and feel before execution begins.' },
  { num: '05', title: 'Execution', desc: 'On-site coordination with quality checks and timelines.' },
  { num: '06', title: 'Handover', desc: 'Final walkthrough, documentation, and support.' },
];

export default function WorkspacesPage({ onTabChange }) {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-36 bg-gray-50 grid-bg overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-eco"></div>
        <div className="absolute top-12 right-12 w-48 h-48 border border-amber-eco/15"></div>
        <div className="absolute bottom-12 right-24 w-24 h-24 border border-amber-eco/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-amber-eco/30 px-4 py-2 mb-8">
              <span className="w-1.5 h-1.5 bg-amber-eco"></span>
              <span className="font-body text-amber-eco text-xs tracking-[0.2em] uppercase">Interior Design & Fit-Out</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-9xl text-forest-900 leading-none mb-6">
              MODERN<br/><span className="text-gradient">WORKSPACES</span>
            </h1>
            <p className="font-body text-forest-700 text-xl leading-relaxed max-w-xl">
              Sustainable workplace design and fit-outs that improve productivity, comfort, and brand experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start mb-32">
            <div className="reveal">
              <span className="section-tag font-body text-amber-eco text-xs tracking-[0.2em] uppercase font-semibold block mb-6">About This Service</span>
              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-forest-900 leading-none mb-8">TRANSFORMING<br/>WORK<br/>ENVIRONMENTS</h2>
              <p className="font-body text-forest-700 text-base leading-relaxed mb-10">
                We design modern workspaces with smart space planning, ergonomic layouts, and acoustic comfort—creating offices that support focus, collaboration, and well-being.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'fa-users', title: 'Collaborative Spaces', desc: 'Open areas designed to foster teamwork while maintaining acoustic comfort' },
                  { icon: 'fa-brain', title: 'Focus Zones', desc: 'Quiet areas with optimized acoustics for deep work and concentration' },
                  { icon: 'fa-leaf', title: 'Sustainable Materials', desc: '75% recycled content reducing environmental impact significantly' },
                  { icon: 'fa-chart-line', title: 'Productivity Enhancement', desc: 'Proven to improve focus and reduce stress through better acoustics' },
                ].map(f => (
                  <div key={f.title} className="group flex gap-4 p-4 border border-gray-300 hover:border-amber-eco transition-all duration-300 bg-white">
                    <div className="w-10 h-10 flex-shrink-0 bg-gray-100 group-hover:bg-amber-eco/10 flex items-center justify-center transition-colors">
                      <i className={`fas ${f.icon} text-amber-eco text-sm`}></i>
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-forest-900 text-sm mb-1">{f.title}</h4>
                      <p className="font-body text-forest-600 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-right delay-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-gray-200 border border-gray-300 aspect-video overflow-hidden group relative">
                  <img 
                    src="/images/Projects/project10.jpeg" 
                    alt="Modern Office Design" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-forest-900/10 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                {[
                  { img: '/images/Projects/project11.jpeg', label: 'Creative Workspace' },
                  { img: '/images/Projects/project12.jpeg', label: 'Open Office' },
                  { img: '/images/Projects/project13.jpeg', label: 'Meeting Room' },
                  { img: '/images/Projects/project14.jpeg', label: 'Collaborative Space' },
                ].map(item => (
                  <div key={item.label} className="bg-gray-200 border border-gray-300 aspect-square overflow-hidden group hover:border-amber-eco transition-colors duration-300 relative">
                    <img 
                      src={item.img} 
                      alt={item.label} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-forest-900/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="mb-32">
            <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Zone by Zone</span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-forest-900 mt-2">WORKSPACE<br/><span className="text-gradient">SOLUTIONS</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((s, i) => (
                <div key={i} className={`group border border-gray-300 hover:border-amber-eco p-8 transition-all duration-500 reveal delay-${(i%3+1)*100} bg-white hover:bg-gray-50`}>
                  <div className="w-12 h-12 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center mb-6 transition-colors duration-300">
                    <i className={`fas ${s.icon} text-amber-eco text-base`}></i>
                  </div>
                  <h4 className="font-body font-semibold text-forest-900 text-base mb-3">{s.title}</h4>
                  <div className="card-line mb-3"></div>
                  <p className="font-body text-forest-700 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">How We Deliver</span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-forest-900 mt-2">OUR <span className="text-gradient">PROCESS</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-300">
              {process.map((p, i) => (
                <div key={i} className="bg-white p-8 group hover:bg-gray-50 transition-colors duration-300 reveal">
                  <div className="font-display text-6xl text-gray-300 group-hover:text-amber-eco/20 transition-colors duration-500 mb-4">{p.num}</div>
                  <h4 className="font-body font-semibold text-forest-900 mb-2">{p.title}</h4>
                  <p className="font-body text-forest-700 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amber-eco relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white mb-6">TRANSFORM YOUR<br/>WORKSPACE</h2>
          <p className="font-body text-white text-lg mb-10">Share your requirements and get a quick consultation from our team.</p>
          <button onClick={() => onTabChange('contact')} className="px-12 py-5 bg-white text-forest-900 font-body font-semibold tracking-wide hover:bg-cream-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center gap-3">
            GET A QUOTE <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
