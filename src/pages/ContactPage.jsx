import React, { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', subject: '', message: '', terms: false });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    if (!form.terms) e.terms = 'Please accept terms';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-36 bg-gray-100 grid-bg overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-eco"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 border border-amber-eco/30 px-4 py-2 mb-8">
            <i className="fas fa-headset text-amber-eco text-xs"></i>
            <span className="font-body text-amber-eco text-xs tracking-[0.2em] uppercase">We're Here to Help</span>
          </div>
          <h1 className="font-display text-5xl md:text-9xl text-forest-900 leading-none mb-6">GET IN<br/><span className="text-gradient">TOUCH</span></h1>
          <p className="font-body text-forest-700 text-xl max-w-xl leading-relaxed">
            Have a project in mind? Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick Cards */}
      <section className="py-12 bg-cream-50 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: 'tel:+919513877866', icon: 'fa-phone', label: 'Call Us', value: '+91 9513877866', iconColor: 'text-amber-eco' },
              { href: 'mailto:info@ecovation.co.in', icon: 'fa-envelope', label: 'Email Us', value: 'info@ecovation.co.in', iconColor: 'text-amber-eco' },
              { href: 'https://wa.me/919513877866', icon: 'fa-whatsapp', label: 'WhatsApp', value: 'Chat Instantly', iconColor: 'text-green-400', fab: true },
              { href: null, icon: 'fa-clock', label: 'Working Hours', value: 'Mon–Fri, 9AM–6PM', iconColor: 'text-amber-eco' },
            ].map((c, i) => (
              <div key={i} className="group">
                {c.href ? (
                  <a href={c.href} target={c.fab ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 border border-gray-300 hover:border-amber-eco transition-all duration-300 bg-cream-50 hover:bg-gray-100 reveal">
                    <div className="w-12 h-12 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center flex-shrink-0 transition-colors">
                      <i className={`${c.fab ? 'fab' : 'fas'} ${c.icon} ${c.iconColor} text-base`}></i>
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-forest-600 text-[10px] uppercase tracking-wider">{c.label}</p>
                      <p className="font-body text-forest-900 text-sm font-semibold truncate">{c.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-6 border border-gray-300 bg-cream-50 reveal">
                    <div className="w-12 h-12 border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${c.icon} ${c.iconColor} text-base`}></i>
                    </div>
                    <div>
                      <p className="font-body text-forest-600 text-[10px] uppercase tracking-wider">{c.label}</p>
                      <p className="font-body text-forest-900 text-sm font-semibold">{c.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Send a Message</span>
            <h2 className="font-display text-5xl md:text-7xl text-forest-900 mt-2">LET'S <span className="text-gradient">TALK</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Info */}
            <aside className="space-y-6 reveal">
              {[
                { icon: 'fa-map-marker-alt', title: 'Our Office', content: ['Unit No, B/19/01', 'Nagasandra Tumkur Road', 'Bangalore, Karnataka — 560073', 'India'] },
                { icon: 'fa-phone', title: 'Phone', content: ['+91 9513877866'] },
                { icon: 'fa-envelope', title: 'Email', content: ['info@ecovation.co.in'] },
                { icon: 'fa-clock', title: 'Business Hours', content: ['Monday – Friday', '9:00 AM – 6:00 PM IST'] },
              ].map(info => (
                <div key={info.title} className="flex gap-4 p-5 border border-gray-300 hover:border-amber-eco transition-colors duration-300 group">
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-gray-300 group-hover:border-amber-eco transition-colors">
                    <i className={`fas ${info.icon} text-amber-eco text-xs`}></i>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-forest-900 text-sm mb-2">{info.title}</h4>
                    {info.content.map((line, i) => <p key={i} className="font-body text-forest-600 text-xs leading-relaxed">{line}</p>)}
                  </div>
                </div>
              ))}

              <div className="p-5 border border-gray-300">
                <h4 className="font-body font-semibold text-forest-900 text-sm mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: 'fa-facebook-f', href: '#', fab: true },
                    { icon: 'fa-instagram', href: '#', fab: true },
                    { icon: 'fa-linkedin-in', href: '#', fab: true },
                    { icon: 'fa-whatsapp', href: 'https://wa.me/919513877866', fab: true, green: true },
                  ].map((s, i) => (
                    <a key={i} href={s.href}
                      className={`w-9 h-9 border flex items-center justify-center text-xs transition-all duration-300 ${s.green ? 'border-gray-300 text-forest-700 hover:border-green-400 hover:text-green-400' : 'border-gray-300 text-forest-700 hover:border-amber-eco hover:text-amber-eco'}`}>
                      <i className={`fab ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-2 reveal reveal-right delay-200">
              {submitted ? (
                <div className="border border-amber-eco/30 bg-gray-100 p-16 text-center">
                  <div className="w-16 h-16 bg-amber-eco flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-check text-2xl text-forest-900"></i>
                  </div>
                  <h3 className="font-display text-4xl text-forest-900 mb-4">MESSAGE SENT!</h3>
                  <p className="font-body text-forest-700">Thank you for reaching out. We'll respond within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 px-8 py-3 border border-amber-eco text-amber-eco font-body text-sm hover:bg-amber-eco hover:text-forest-900 transition-all">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {[
                      { field: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith', required: true },
                      { field: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', required: true },
                      { field: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXXXXXXX' },
                    ].map(f => (
                      <div key={f.field} className={f.field === 'phone' ? '' : ''}>
                        <label className="font-body text-xs text-forest-700 uppercase tracking-wider block mb-2">
                          {f.label} {f.required && <span className="text-amber-eco">*</span>}
                        </label>
                        <input
                          type={f.type}
                          value={form[f.field]}
                          onChange={e => handleChange(f.field, e.target.value)}
                          placeholder={f.placeholder}
                          className={`w-full bg-gray-100 border text-forest-900 font-body text-sm px-4 py-3 placeholder-forest-500 transition-all duration-300 ${errors[f.field] ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors[f.field] && <p className="text-red-400 text-xs mt-1 font-body">{errors[f.field]}</p>}
                      </div>
                    ))}

                    <div>
                      <label className="font-body text-xs text-forest-700 uppercase tracking-wider block mb-2">Service Interested In</label>
                      <select
                        value={form.service}
                        onChange={e => handleChange('service', e.target.value)}
                        className="w-full bg-gray-100 border border-gray-300 text-forest-900 font-body text-sm px-4 py-3 transition-all duration-300 appearance-none"
                      >
                        <option value="">— Select a Service —</option>
                        <option value="acoustic-panels">Acoustic Panels</option>
                        <option value="workspaces">Workspace Design</option>
                        <option value="custom-design">Custom Design</option>
                        <option value="other">Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="font-body text-xs text-forest-700 uppercase tracking-wider block mb-2">
                      Subject <span className="text-amber-eco">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={e => handleChange('subject', e.target.value)}
                      placeholder="What is this regarding?"
                      className={`w-full bg-gray-100 border text-forest-900 font-body text-sm px-4 py-3 placeholder-forest-500 transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1 font-body">{errors.subject}</p>}
                  </div>

                  <div className="mb-6">
                    <label className="font-body text-xs text-forest-700 uppercase tracking-wider block mb-2">
                      Your Message <span className="text-amber-eco">*</span>
                    </label>
                    <textarea
                      rows={6}
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project, space size, timeline, or any questions…"
                      className={`w-full bg-gray-100 border text-forest-900 font-body text-sm px-4 py-3 placeholder-forest-500 transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>}
                  </div>

                  <div className="mb-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => handleChange('terms', !form.terms)}
                        className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-200 ${form.terms ? 'bg-amber-eco border-amber-eco' : 'border-forest-500 hover:border-amber-eco'}`}
                      >
                        {form.terms && <i className="fas fa-check text-forest-900 text-xs"></i>}
                      </div>
                      <span className="font-body text-forest-700 text-sm">
                        I agree to the <a href="#" className="text-amber-eco hover:underline">terms and conditions</a> <span className="text-amber-eco">*</span>
                      </span>
                    </label>
                    {errors.terms && <p className="text-red-400 text-xs mt-1 ml-8 font-body">{errors.terms}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-amber-eco text-forest-900 font-body font-semibold tracking-wide hover:bg-amber-light transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-eco/20 flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <><i className="fas fa-circle-notch fa-spin"></i> Sending...</>
                    ) : (
                      <><i className="fas fa-paper-plane"></i> SEND MESSAGE</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Location</span>
            <h2 className="font-display text-5xl md:text-7xl text-forest-900 mt-2">FIND OUR <span className="text-gradient">OFFICE</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 reveal">
            <div className="bg-white border border-gray-300 p-8 md:p-12 flex flex-col items-center justify-center text-center group hover:border-amber-eco transition-all duration-500">
              <div className="w-16 h-16 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-amber-eco/10 transition-colors">
                <i className="fas fa-map-location-dot text-3xl text-amber-eco"></i>
              </div>
              <h3 className="font-display text-2xl text-forest-900 mb-3">ECOVATION OFFICE</h3>
              <p className="font-body text-forest-700 text-sm leading-relaxed">
                Unit No, B/19/01, Nagasandra Tumkur Road<br/>
                Bangalore, Karnataka — 560073, India
              </p>
              <div className="card-line mt-6 w-12 group-hover:w-24 mx-auto"></div>
            </div>
            <div className="border border-gray-300 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.056447024341!2d77.57819!3d13.108883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d4d4d4d4d4d%3A0x0!2sNagasandra%20Tumkur%20Road!5e0!3m2!1sen!2sin!4v1234567890"
                title="Ecovation Office Location"
                width="100%" height="100%"
                className="min-h-64 w-full"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
