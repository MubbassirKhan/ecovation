import React, { useState } from 'react';

const panelTypes = [
  {
    icon: 'fa-shapes', title: 'Acoustic Baffles',
    image: '/images/Accoustic/Baffles/1.jpg',
    desc: 'Suspended vertical panels for open spaces and high ceilings. Perfect for reducing reverberation in large areas.',
    color: 'from-forest-700 to-forest-800'
  },
  {
    icon: 'fa-th-large', title: 'Cell Ceiling Systems',
    image: '/images/Accoustic/CellCeiling/1.jpg',
    desc: 'Modular ceiling systems for comprehensive acoustic coverage. Ideal for offices and commercial spaces.',
    color: 'from-forest-800 to-slate-eco'
  },
  {
    icon: 'fa-cut', title: 'CNC Cut Panels',
    image: '/images/Accoustic/CNC/1.jpg',
    desc: 'Custom-designed patterns for unique aesthetic appeal. Combines functionality with artistic design elements.',
    color: 'from-slate-eco to-forest-700'
  },
  {
    icon: 'fa-window-maximize', title: 'Acoustic Screens',
    image: '/images/Accoustic/Screens/1.jpg',
    desc: 'Portable and flexible solutions for dynamic spaces. Perfect for creating private areas in open offices.',
    color: 'from-forest-700 to-forest-900'
  },
  {
    icon: 'fa-cloud', title: 'Acoustic Clouds',
    image: '/images/Accoustic/Clouds/1.jpg',
    desc: 'Floating ceiling elements for decorative acoustic treatment. Adds visual interest while improving acoustics.',
    color: 'from-forest-600 to-forest-800'
  },
  {
    icon: 'fa-print', title: 'Printed Panels',
    image: '/images/Accoustic/Printed/1.jpg',
    desc: 'Custom graphics and designs on acoustic surfaces. Perfect for branding and artistic expression.',
    color: 'from-forest-800 to-forest-600'
  },
];

const specs = [
  ['1', 'Material', '100% Polyester Fiber (PET)'],
  ['2', 'Recycled Content', '≥ 75% (post-consumer PET bottles)'],
  ['3', 'Thickness Options', '9 mm, 12 mm (ready), 24 mm (4-wk lead time)'],
  ['4', 'Panel Size (Standard)', '1220 × 2440 mm (9mm); 1220 × 2440/2800 mm (12mm)'],
  ['5', 'Density', '1900 GSM for 9 mm; 2400 GSM for 12 mm'],
  ['6', 'Weight', '~5.6 kg/panel (9mm), ~7.2 kg/panel (12mm)'],
  ['7', 'Sound Absorption (NRC)', '0.30 – 0.95 (varies by thickness/mounting)'],
  ['8', 'Fire Rating', 'EN13501-1: B-s1, d0'],
  ['9', 'VOC Emission', 'Low VOC, <0.5 mg/m²/hr (ISO tested)'],
  ['10', 'Moisture Resistance', 'Non-hygroscopic / Mold resistant'],
  ['11', 'Colour Options', '73 standard colours'],
  ['12', 'Surface Finish', 'Smooth, pin-receptive, printable'],
  ['13', 'Applications', 'Walls, ceilings, screens, furniture, lighting'],
];

const spaces = [
  { icon: 'fa-building', title: 'Offices', desc: 'Enhance productivity with smart noise control' },
  { icon: 'fa-headphones', title: 'Studios', desc: 'Professional sound isolation & treatment' },
  { icon: 'fa-hospital', title: 'Healthcare', desc: 'Hygienic, mold-resistant solutions' },
  { icon: 'fa-graduation-cap', title: 'Education', desc: 'Better learning through clear acoustics' },
  { icon: 'fa-utensils', title: 'Hospitality', desc: 'Create inviting, comfortable spaces' },
  { icon: 'fa-home', title: 'Residential', desc: 'Peaceful, quality sound environments' },
];

const customizations = [
  { icon: 'fa-palette', title: '73 Colors', desc: 'Match any interior design perfectly' },
  { icon: 'fa-crop', title: 'Custom Shapes', desc: 'Geometric patterns & unique designs' },
  { icon: 'fa-print', title: 'Printed Graphics', desc: 'Branding & artistic expressions' },
  { icon: 'fa-expand', title: 'Any Size', desc: 'Custom dimensions & thickness' },
  { icon: 'fa-lightbulb', title: 'LED Lighting', desc: 'Integrated lighting solutions' },
  { icon: 'fa-cog', title: 'Any Installation', desc: 'Walls, ceilings, baffles & more' },
];

const colors = [
  '#2d5a3d','#1a3d2a','#4a7c5e','#8fbc8f','#c8e6c9','#f1f8e9',
  '#3e2723','#6d4c41','#a1887f','#d7ccc8','#efebe9','#fbe9e7',
  '#1a237e','#283593','#3949ab','#5c6bc0','#7986cb','#9fa8da',
  '#e65100','#ef6c00','#f57c00','#fb8c00','#ffa726','#ffcc02',
  '#880e4f','#ad1457','#c2185b','#e91e63','#f06292','#f8bbd0',
  '#006064','#00838f','#0097a7','#00bcd4','#4dd0e1','#b2ebf2',
  '#33691e','#558b2f','#689f38','#8bc34a','#aed581','#dcedc8',
  '#37474f','#455a64','#546e7a','#607d8b','#90a4ae','#cfd8dc',
];

export default function AcousticPage({ onTabChange }) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeSpec, setActiveSpec] = useState(null);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-36 bg-cream-50 grid-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-1 h-full bg-amber-eco"></div>
        <div className="absolute top-16 left-16 w-32 h-32 border border-amber-eco/15"></div>
        <div className="absolute bottom-16 left-32 w-16 h-16 border border-amber-eco/10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 border border-amber-eco/30 px-4 py-2 mb-8 mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 bg-amber-eco"></span>
                <span className="font-body text-amber-eco text-[10px] sm:text-xs tracking-[0.2em] uppercase text-center">PET Acoustic Solutions • Made in India</span>
              </div>
              <h1 className="font-display text-5xl md:text-9xl text-forest-900 leading-none">
                ACOUSTIC<br/><span className="text-gradient">PANELS</span>
              </h1>
            </div>
            <div className="lg:max-w-sm text-center lg:text-left mt-8 lg:mt-0">
              <p className="font-body text-forest-900 text-base md:text-lg leading-relaxed mb-10 mx-auto lg:mx-0">
                Advanced sound solutions made from 100% recycled PET materials for superior acoustic performance and sustainable design.
              </p>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">0.95</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Max NRC Rating</div>
                </div>
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">75%</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Recycled Content</div>
                </div>
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">73</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Colors Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Types */}
      <section className="py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
            <div>
              <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Product Range</span>
              <h2 className="font-display text-5xl md:text-7xl text-forest-900 mt-2">OUR ACOUSTIC<br/><span className="text-gradient">SOLUTIONS</span></h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {panelTypes.map((p, i) => (
              <div key={i} className={`group relative border border-gray-300 hover:border-amber-eco transition-all duration-500 overflow-hidden reveal delay-${(i%3+1)*100}`}>
                <div className={`aspect-video overflow-hidden relative`}>
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-forest-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-6 bg-cream-50 group-hover:bg-gray-100 transition-colors">
                  <h4 className="font-body font-semibold text-forest-900 text-base mb-2 flex items-center gap-2">
                    <i className={`fas ${p.icon} text-amber-eco text-xs`}></i> {p.title}
                  </h4>
                  <div className="card-line mb-3"></div>
                  <p className="font-body text-forest-800 text-xs leading-relaxed">{p.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-eco transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <span className="section-tag font-body text-amber-eco text-xs tracking-[0.2em] uppercase font-semibold block mb-6">Sustainable Innovation</span>
              <h2 className="font-display text-4xl md:text-6xl text-forest-900 leading-none mb-8">ACOUSTIC<br/>PERFORMANCE<br/><span className="text-gradient">MEETS DESIGN</span></h2>
              <p className="font-body text-forest-900 text-base leading-relaxed mb-8">
                Our PET acoustic panels turn recycled plastic into high-performance sound solutions for workplaces, studios, hospitality, and homes.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'fa-volume-mute', title: 'Superior Sound Absorption', desc: 'NRC ratings from 0.30 to 0.95 depending on thickness and mounting' },
                  { icon: 'fa-tools', title: 'Versatile Applications', desc: 'Suitable for walls, ceilings, partition screens, furniture, and lighting' },
                  { icon: 'fa-print', title: 'Customizable Surface', desc: 'Smooth, pin-receptive, printable surface for unlimited design possibilities' },
                  { icon: 'fa-droplet', title: 'Moisture Resistant', desc: 'Non-hygroscopic and mold-resistant for long-lasting performance' },
                ].map(f => (
                  <div key={f.title} className="group flex gap-4 p-4 border border-gray-300 hover:border-amber-eco transition-all duration-300">
                    <i className={`fas ${f.icon} text-amber-eco mt-1 text-sm flex-shrink-0`}></i>
                    <div>
                      <h4 className="font-body font-semibold text-forest-900 text-sm mb-1">{f.title}</h4>
                      <p className="font-body text-forest-800 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-right delay-200">
              <div className="bg-cream-50 border border-gray-300 p-8">
                <h3 className="font-body font-semibold text-forest-900 text-lg mb-6 section-tag pl-4">Why Choose Ecovation</h3>
                <div className="grid grid-cols-2 gap-px bg-gray-200">
                  {[
                    { num: '01', title: '100% Recycled', sub: 'Eco-friendly PET materials' },
                    { num: '02', title: 'NRC 0.95', sub: 'Professional-grade performance' },
                    { num: '03', title: '38 Years', sub: 'Industry experience' },
                    { num: '04', title: 'Design-Build', sub: 'Complete service' },
                    { num: '05', title: '73 Colors', sub: 'Full customization' },
                    { num: '06', title: 'Fire-Rated', sub: 'EN13501-1: B-s1,d0' },
                  ].map(w => (
                    <div key={w.num} className="bg-cream-50 hover:bg-gray-100 transition-colors p-5 group">
                      <div className="font-display text-3xl text-amber-eco/30 group-hover:text-amber-eco/50 transition-colors mb-2">{w.num}</div>
                      <div className="font-body font-semibold text-forest-900 text-sm">{w.title}</div>
                      <div className="font-body text-forest-800 text-xs mt-1">{w.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Picker */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Fully Customizable</span>
            <h2 className="font-display text-5xl md:text-7xl text-forest-900 mt-2">73 <span className="text-gradient">COLORS</span></h2>
            <p className="font-body text-forest-900 mt-4">Click a color to preview it on your panel</p>
          </div>
          <div className="reveal">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-1.5 md:gap-2 mb-8">
              {colors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`aspect-square border transition-all duration-200 hover:scale-110 hover:z-10 relative ${selectedColor === color ? 'border-amber-eco scale-110 shadow-lg' : 'border-transparent'}`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
            {selectedColor && (
              <div className="flex items-center gap-6 p-4 border border-amber-eco/30 bg-gray-100">
                <div className="w-16 h-16 flex-shrink-0" style={{ backgroundColor: selectedColor }}></div>
                <div>
                  <p className="font-body text-forest-900 font-medium">Selected Color</p>
                  <p className="font-body text-forest-800 text-sm">{selectedColor.toUpperCase()}</p>
                  <p className="font-body text-forest-900 text-xs mt-1">This color is available for all panel types and thicknesses.</p>
                </div>
                <button onClick={() => setSelectedColor(null)} className="ml-auto text-forest-800 hover:text-forest-900">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Customization Grid */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Customization</span>
            <h2 className="font-display text-5xl md:text-7xl text-forest-900 mt-2">FULLY <span className="text-gradient">CUSTOMIZABLE</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {customizations.map((c, i) => (
              <div key={i} className={`group border border-gray-300 hover:border-amber-eco p-6 text-center transition-all duration-300 reveal delay-${(i%3+1)*100} bg-cream-50 hover:bg-gray-100`}>
                <div className="w-12 h-12 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center mx-auto mb-4 transition-colors">
                  <i className={`fas ${c.icon} text-amber-eco text-base`}></i>
                </div>
                <h4 className="font-body font-semibold text-forest-900 text-sm mb-2">{c.title}</h4>
                <p className="font-body text-forest-800 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spaces */}
      <section className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Applications</span>
            <h2 className="font-display text-5xl md:text-7xl text-forest-900 mt-2">PERFECT FOR<br/><span className="text-gradient">EVERY SPACE</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spaces.map((s, i) => (
              <div key={i} className={`group flex gap-4 p-6 border border-gray-300 hover:border-amber-eco transition-all duration-300 reveal delay-${(i%3+1)*100} bg-cream-50 hover:bg-gray-100`}>
                <div className="w-12 h-12 flex-shrink-0 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center transition-colors">
                  <i className={`fas ${s.icon} text-amber-eco text-sm`}></i>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-forest-900 mb-1">{s.title}</h4>
                  <p className="font-body text-forest-800 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Technical Data</span>
            <h2 className="font-display text-5xl md:text-7xl text-forest-900 mt-2">PRODUCT<br/><span className="text-gradient">SPECIFICATIONS</span></h2>
          </div>
          <div className="reveal overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-amber-eco">
                  <th className="font-body font-semibold text-forest-900 text-xs tracking-widest uppercase p-4 text-left w-12">No.</th>
                  <th className="font-body font-semibold text-forest-900 text-xs tracking-widest uppercase p-4 text-left">Property</th>
                  <th className="font-body font-semibold text-forest-900 text-xs tracking-widest uppercase p-4 text-left">Specification</th>
                </tr>
              </thead>
              <tbody>
                {specs.map(([num, prop, spec], i) => (
                  <tr
                    key={i}
                    className={`spec-row border-b border-gray-300 cursor-pointer transition-all duration-200 ${activeSpec === i ? 'bg-amber-eco/10' : i % 2 === 0 ? 'bg-cream-50' : 'bg-gray-100/50'}`}
                    onClick={() => setActiveSpec(activeSpec === i ? null : i)}
                  >
                    <td className="font-body text-amber-eco text-sm p-4 font-semibold">{num}</td>
                    <td className="font-body text-forest-900 text-sm p-4 font-medium">{prop}</td>
                    <td className="font-body text-forest-900 text-sm p-4">{spec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="absolute right-0 top-0 w-1 h-full bg-amber-eco"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="font-display text-6xl md:text-8xl text-forest-900 mb-6 leading-none">READY TO<br/><span className="text-gradient">UPGRADE?</span></h2>
          <p className="font-body text-forest-900 text-lg mb-10">Get a custom quote for your acoustic panel requirements.</p>
          <button onClick={() => onTabChange('contact')} className="px-12 py-5 bg-amber-eco text-forest-900 font-body font-semibold tracking-wide hover:bg-amber-light transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-eco/30 inline-flex items-center gap-3">
            GET A QUOTE <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
