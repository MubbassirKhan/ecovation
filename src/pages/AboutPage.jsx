import React from 'react';
import { useNavigate } from 'react-router-dom';
import { teamMembers, WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL, PHONE_DISPLAY_OLD, PHONE_TEL_OLD, EMAIL, EMAIL_HREF, ADDRESS_LINES, ADDRESS_SINGLE } from '../data/siteData';

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

const values = [
  { icon: 'fa-recycle', title: 'Sustainability First', desc: 'Every material choice reflects our commitment to responsible sourcing and circular economy principles.' },
  { icon: 'fa-wave-square', title: 'Acoustic Expertise', desc: 'Deep knowledge of acoustic performance, NRC ratings and how sound shapes human experience.' },
  { icon: 'fa-pen-ruler', title: 'Design Precision', desc: 'Every space is planned with intention — proportions, light, flow and material harmony considered together.' },
  { icon: 'fa-helmet-safety', title: 'Execution Discipline', desc: 'On-site coordination, quality checks and accountable delivery on every project we undertake.' },
  { icon: 'fa-palette', title: 'Customization Depth', desc: '120+ panel colors, CNC cutting, printing and embossing for spaces that are genuinely unique.' },
  { icon: 'fa-handshake', title: 'Client Focus', desc: 'Long-term relationships built on trust, clear communication and consistent results.' },
];

const sustainability = [
  { icon: 'fa-bottle-water', title: 'Diverts Plastic Waste', desc: 'Every PET panel keeps post-consumer plastic bottles out of landfills and oceans.' },
  { icon: 'fa-seedling', title: 'Second Life Materials', desc: 'Giving discarded PET a premium second life as high-performance acoustic solutions.' },
  { icon: 'fa-feather', title: 'Lightweight', desc: 'Lighter than traditional materials — easier to install and lower transport footprint.' },
  { icon: 'fa-shield', title: 'Durable', desc: 'Long-lasting acoustic performance without degradation over time.' },
  { icon: 'fa-droplet-slash', title: 'Moisture Resistant', desc: 'Non-hygroscopic and mold-resistant — safe for diverse interior environments.' },
  { icon: 'fa-fire-flame-simple', title: 'Fire Rated', desc: 'EN13501-1: B-s1,d0 certified — meeting international safety standards.' },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div id="main-content">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative py-36 bg-cream-50 grid-bg overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-eco"></div>
        <div className="absolute top-16 right-16 w-32 h-32 border border-amber-eco/15 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 border border-amber-eco/30 px-4 py-2 mb-8 mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 bg-amber-eco"></span>
                <span className="font-body text-amber-eco text-[10px] sm:text-xs tracking-[0.2em] uppercase">About Ecovation</span>
              </div>
              <h1 className="font-display text-5xl md:text-9xl text-forest-900 leading-none">
                DESIGNING<br/><span className="text-gradient">BETTER<br/>SPACES</span>
              </h1>
            </div>
            <div className="lg:max-w-sm text-center lg:text-left mt-8 lg:mt-0">
              <p className="font-body text-forest-900 text-base md:text-lg leading-relaxed mb-8 mx-auto lg:mx-0">
                Ecovation combines sustainable materials, thoughtful interior design and acoustic innovation to create spaces that perform beautifully across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center lg:justify-start mb-6">
                <button onClick={() => navigate('/workspaces')} className="w-full sm:w-auto px-6 py-3 bg-amber-eco text-forest-900 font-body font-semibold hover:bg-amber-light transition-all duration-300 hover:shadow-xl hover:shadow-amber-eco/30 flex items-center justify-center gap-2 text-sm border border-amber-eco">
                  <i className="fas fa-building text-xs"></i> Explore Services
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 border border-forest-900 text-forest-900 font-body font-semibold hover:bg-forest-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                  <i className="fab fa-whatsapp"></i> Chat
                </a>
              </div>
              <div className="grid grid-cols-3 gap-2 md:gap-3">
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">15+</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Years Experience</div>
                </div>
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">200+</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Projects</div>
                </div>
                <div className="text-center border border-gray-300 p-2 md:px-6 md:py-4">
                  <div className="font-display text-2xl md:text-3xl text-amber-eco">100%</div>
                  <div className="font-body text-forest-800 text-[9px] md:text-xs mt-1">Recycled PET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 sm:gap-24 items-center">
            <div className="reveal">
              <span className="section-tag font-body text-amber-eco text-xs tracking-[0.2em] uppercase font-semibold block mb-6">Our Purpose</span>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-forest-900 leading-tight mb-10">MISSION<br/><span className="text-gradient">& VISION</span></h2>
              <div className="space-y-6">
                <div className="border-l-4 border-amber-eco pl-7 py-4">
                  <div className="flex items-center gap-3 mb-3">
                    <i className="fas fa-bullseye text-amber-eco text-sm"></i>
                    <h3 className="font-body font-semibold text-forest-900 text-lg">Our Mission</h3>
                  </div>
                  <p className="font-body text-forest-700 text-base leading-relaxed">
                    To transform modern interiors through sustainable materials, intelligent design and precision execution — creating environments that improve comfort, productivity, acoustic performance and well-being.
                  </p>
                </div>
                <div className="border-l-4 border-amber-eco pl-7 py-4">
                  <div className="flex items-center gap-3 mb-3">
                    <i className="fas fa-eye text-amber-eco text-sm"></i>
                    <h3 className="font-body font-semibold text-forest-900 text-lg">Our Vision</h3>
                  </div>
                  <p className="font-body text-forest-700 text-base leading-relaxed">
                    To make sustainable, high-performance interior solutions accessible to businesses and homeowners — establishing recycled materials as the standard for modern Indian interiors.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal reveal-right delay-200">
              <div className="relative group">
                <div className="aspect-[4/5] overflow-hidden border border-gray-300 rounded-lg shadow-lg">
                  <img
                    src="/images/Projects/project7.jpeg"
                    alt="Ecovation Design"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute -right-4 -bottom-4 bg-forest-900 p-6 shadow-xl border border-gray-800">
                  <div className="font-display text-3xl text-amber-eco font-bold">15+</div>
                  <p className="font-body text-gray-400 text-xs mt-1">Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ───────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">What Drives Us</span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-forest-900 mt-4">OUR <span className="text-gradient">VALUES</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={i} className={`group border border-gray-200 hover:border-amber-eco/50 p-8 hover:shadow-lg transition-all duration-500 reveal delay-${(i%3+1)*100} bg-white rounded-lg`}>
                <div className="w-12 h-12 border border-gray-300 group-hover:border-amber-eco group-hover:bg-amber-eco/5 flex items-center justify-center mb-6 transition-all duration-300 rounded-lg">
                  <i className={`fas ${v.icon} text-amber-eco text-base`}></i>
                </div>
                <h4 className="font-body font-semibold text-forest-900 text-lg mb-3">{v.title}</h4>
                <p className="font-body text-forest-700 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUSTAINABILITY ───────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        <div className="absolute left-0 top-0 w-1 h-full bg-amber-eco"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal">
              <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold block mb-6">Sustainability</span>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white leading-tight mb-8">WHY<br/><span className="text-amber-eco">RECYCLED PET?</span></h2>
              <p className="font-body text-gray-400 text-base leading-relaxed">
                Polyethylene terephthalate — the plastic in PET bottles — is one of the world's most recyclable materials. Ecovation transforms post-consumer PET bottles into premium acoustic panels, combining performance with environmental responsibility.
              </p>
            </div>
            <div className="reveal reveal-right delay-200">
              <div className="bg-gray-900 border border-gray-800 p-8">
                <div className="font-display text-7xl text-amber-eco font-bold mb-2">75%</div>
                <p className="font-body text-gray-300 text-lg font-medium">Minimum recycled content</p>
                <p className="font-body text-gray-500 text-sm mt-2 leading-relaxed">Each panel contains at least 75% post-consumer recycled PET — giving plastic waste a premium second life as acoustic solutions.</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800">
            {sustainability.map((s, i) => (
              <div key={i} className="bg-forest-900 hover:bg-gray-900 transition-colors duration-300 p-8 reveal group">
                <div className="w-10 h-10 border border-gray-700 group-hover:border-amber-eco flex items-center justify-center mb-5 transition-colors duration-300">
                  <i className={`fas ${s.icon} text-amber-eco text-sm`}></i>
                </div>
                <h4 className="font-body font-semibold text-white text-sm mb-3">{s.title}</h4>
                <div className="w-6 h-0.5 bg-amber-eco mb-3 group-hover:w-full transition-all duration-500"></div>
                <p className="font-body text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">The People</span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-forest-900 mt-4">MEET OUR<br/><span className="text-gradient">TEAM</span></h2>
          </div>

          {/* Full-width two-column grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => {
              const isRight = i % 2 === 1;
              return (
                <div key={i} className={`team-card group reveal ${isRight ? 'md:translate-y-4' : ''}`}>
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
                        <div className={`text-center ${isRight ? 'text-right pr-8' : 'text-left pl-8'} w-full`}>
                          <div className={`w-28 h-28 rounded-full bg-amber-eco/10 border-2 border-amber-eco/30 flex items-center justify-center ${isRight ? 'ml-auto mr-8' : 'mr-auto ml-8'} mb-4`}>
                            <span className="font-display text-5xl text-amber-eco font-bold">{member.initials}</span>
                          </div>
                          <p className="font-body text-gray-400 text-xs px-8">Photo coming soon</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content — left card aligns left, right card aligns right */}
                  <div className={`team-content ${isRight ? 'items-end text-right' : 'items-start text-left'}`}>
                    <h3 className="font-display text-3xl text-forest-900 font-bold mb-1">{member.name}</h3>
                    <p className="team-role font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">{member.role}</p>
                    <div className={`team-role-line ${isRight ? 'ml-auto' : 'mr-auto'}`}></div>
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

      {/* ── CONTACT SECTION (merged) ─────────────────────────── */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold">Reach Us</span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-forest-900 mt-4">GET IN<br/><span className="text-gradient">TOUCH</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="reveal space-y-6">

              {/* Primary Phone */}
              <div className="border border-gray-300 hover:border-amber-eco transition-colors duration-300 group p-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center transition-colors rounded-md group-hover:bg-amber-eco/5">
                    <i className="fas fa-phone text-amber-eco text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-forest-600 text-xs uppercase tracking-widest mb-2 font-semibold">Phone Numbers</p>
                    <a href={PHONE_TEL} className="font-display text-2xl text-forest-900 hover:text-amber-eco transition-colors font-bold block mb-1">{PHONE_DISPLAY}</a>
                    <span className="font-body text-amber-eco text-xs font-semibold uppercase tracking-wider">Primary</span>
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <a href={PHONE_TEL_OLD} className="font-body text-base text-forest-700 hover:text-amber-eco transition-colors font-medium block">{PHONE_DISPLAY_OLD}</a>
                      <span className="font-body text-forest-500 text-xs font-medium">Also reachable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="border border-gray-300 hover:border-amber-eco transition-colors duration-300 group p-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center transition-colors rounded-md group-hover:bg-amber-eco/5">
                    <i className="fas fa-envelope text-amber-eco text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-forest-600 text-xs uppercase tracking-widest mb-2 font-semibold">Email Address</p>
                    <a href={EMAIL_HREF} className="font-display text-xl text-forest-900 hover:text-amber-eco transition-colors font-bold">{EMAIL}</a>
                    <p className="font-body text-forest-500 text-xs mt-1">We reply within 24 hours on business days</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border border-green-600/40 bg-green-600/5 hover:bg-green-600/10 hover:border-green-500 transition-all duration-300 group p-6 flex items-start gap-5 block">
                <div className="w-12 h-12 flex-shrink-0 border border-green-600/40 group-hover:border-green-400 flex items-center justify-center transition-colors rounded-md">
                  <i className="fab fa-whatsapp text-green-500 text-lg"></i>
                </div>
                <div className="flex-1">
                  <p className="font-body text-forest-600 text-xs uppercase tracking-widest mb-2 font-semibold">WhatsApp</p>
                  <p className="font-body text-forest-900 font-semibold text-base">Chat with Our Team</p>
                  <p className="font-body text-forest-500 text-xs mt-1">Instant replies during business hours</p>
                </div>
                <i className="fas fa-external-link-alt text-green-400 text-xs mt-1"></i>
              </a>

              {/* Office Address */}
              <div className="border border-gray-300 hover:border-amber-eco transition-colors duration-300 group p-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center transition-colors rounded-md group-hover:bg-amber-eco/5">
                    <i className="fas fa-map-marker-alt text-amber-eco text-sm"></i>
                  </div>
                  <div className="flex-1">
                    <p className="font-body text-forest-600 text-xs uppercase tracking-widest mb-3 font-semibold">Office Address</p>
                    <p className="font-body text-forest-700 text-sm leading-relaxed">{ADDRESS_SINGLE}</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Mahalakshmi+Layout+Bengaluru+Karnataka+560082"
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-amber-eco text-xs font-semibold hover:underline"
                    >
                      <i className="fas fa-map-location-dot text-xs"></i> Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="border border-gray-300 p-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 flex-shrink-0 border border-gray-300 flex items-center justify-center rounded-md">
                    <i className="fas fa-clock text-amber-eco text-sm"></i>
                  </div>
                  <div>
                    <p className="font-body text-forest-600 text-xs uppercase tracking-widest mb-2 font-semibold">Business Hours</p>
                    <p className="font-body text-forest-900 font-semibold text-base">Monday – Friday</p>
                    <p className="font-body text-forest-500 text-sm">9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="reveal reveal-right delay-200 flex flex-col gap-6">
              <div className="border border-gray-300 overflow-hidden flex-1 min-h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6!2d77.5412!3d13.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d7c34b0000%3A0x0!2sMahalakshmi+Layout%2C+Bengaluru%2C+Karnataka+560082!5e0!3m2!1sen!2sin!4v1234567890"
                  title="Ecovation Office Location — Mahalakshmi Layout, Bengaluru"
                  width="100%" height="100%"
                  className="w-full min-h-80"
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Social Links */}
              <div className="border border-gray-300 p-6 bg-white">
                <p className="font-body font-semibold text-forest-900 text-sm mb-4">Follow Ecovation</p>
                <div className="flex gap-3">
                  {[
                    { icon: 'fa-facebook-f', href: '#', fab: true },
                    { icon: 'fa-instagram', href: '#', fab: true },
                    { icon: 'fa-linkedin-in', href: '#', fab: true },
                    { icon: 'fa-whatsapp', href: WHATSAPP_URL, fab: true, green: true },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target={s.green ? '_blank' : undefined} rel="noopener noreferrer"
                      className={`w-10 h-10 border flex items-center justify-center text-xs transition-all duration-300 ${s.green ? 'border-gray-300 text-forest-700 hover:border-green-400 hover:text-green-400' : 'border-gray-300 text-forest-700 hover:border-amber-eco hover:text-amber-eco'}`}>
                      <i className={`fab ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-forest-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-eco/10 rounded-full blur-3xl -mr-48"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 reveal">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-body text-amber-eco text-xs tracking-widest uppercase font-semibold block mb-6">Start a Project</span>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl text-white leading-none mb-6">LET'S CREATE<br/><span className="text-amber-eco">SOMETHING GREAT</span></h2>
              <p className="font-body text-gray-400 text-base leading-relaxed max-w-xl">Ready to transform your space with sustainable design and acoustic excellence? Call us, WhatsApp us or send us an email.</p>
            </div>
            <div className="flex flex-col gap-4">
              <a href={PHONE_TEL} className="flex items-center gap-4 p-5 border border-gray-700 hover:border-amber-eco bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 border border-gray-700 group-hover:border-amber-eco flex items-center justify-center transition-colors flex-shrink-0">
                  <i className="fas fa-phone text-amber-eco text-sm"></i>
                </div>
                <div>
                  <p className="font-body text-gray-400 text-xs uppercase tracking-wider">Call us</p>
                  <p className="font-body text-white font-semibold text-lg">{PHONE_DISPLAY}</p>
                  <p className="font-body text-gray-500 text-xs">Primary</p>
                </div>
              </a>
              <a href={PHONE_TEL_OLD} className="flex items-center gap-4 p-5 border border-gray-800 hover:border-gray-600 bg-white/3 hover:bg-white/7 transition-all duration-300 group">
                <div className="w-12 h-12 border border-gray-800 group-hover:border-gray-600 flex items-center justify-center transition-colors flex-shrink-0">
                  <i className="fas fa-phone text-gray-500 group-hover:text-gray-300 text-sm transition-colors"></i>
                </div>
                <div>
                  <p className="font-body text-gray-500 text-xs uppercase tracking-wider">Also reachable</p>
                  <p className="font-body text-gray-300 font-semibold text-base">{PHONE_DISPLAY_OLD}</p>
                </div>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 border border-green-600/30 bg-green-600/10 hover:bg-green-600/20 transition-all duration-300 group">
                <div className="w-12 h-12 border border-green-600/40 group-hover:border-green-400 flex items-center justify-center transition-colors flex-shrink-0">
                  <i className="fab fa-whatsapp text-green-400 text-lg"></i>
                </div>
                <div>
                  <p className="font-body text-gray-400 text-xs uppercase tracking-wider">WhatsApp</p>
                  <p className="font-body text-white font-semibold text-base">Chat on WhatsApp</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
