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
    
    // TODO: Integrate EmailJS here
    // Example integration (uncomment when EmailJS is set up):
    // import emailjs from '@emailjs/browser';
    // emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
    //   .then(() => { setSubmitted(true); setForm(...reset); })
    //   .catch(err => setErrors({submit: 'Failed to send. Please try again.'}))
    // .finally(() => setLoading(false));
    
    // For now, simulate submission
    await new Promise(r => setTimeout(r, 500));
    setLoading(false);
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', service: '', subject: '', message: '', terms: false });
  };

  const handleChange = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  return (
    <div id="main-content">
      {/* Hero */}
      <section className="relative py-24 sm:py-36 bg-gray-100 grid-bg overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-amber-eco"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 border border-amber-eco/30 px-4 py-2 mb-8">
                <i className="fas fa-headset text-amber-eco text-xs"></i>
                <span className="font-body text-amber-eco text-xs tracking-[0.2em] uppercase">We're Here to Help</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-9xl text-forest-900 leading-tight sm:leading-tight lg:leading-none mb-6">GET IN<br/><span className="text-gradient">TOUCH</span></h1>
              <p className="font-body text-forest-700 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
                Have a project in mind? Send us a message and we'll respond within 24 hours.
              </p>
            </div>

            {/* Right - Decorative Graphic */}
            <div className="hidden lg:flex items-center justify-center relative h-96">
              {/* Background circles */}
              <div className="absolute w-80 h-80 border border-amber-eco/10 rounded-full"></div>
              <div className="absolute w-60 h-60 border border-amber-eco/20 rounded-full"></div>
              <div className="absolute w-40 h-40 bg-amber-eco/5 rounded-full"></div>

              {/* Center content with icons */}
              <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Top icon */}
                <div className="mb-8 relative">
                  <div className="w-20 h-20 bg-amber-eco/10 border border-amber-eco/40 rounded-full flex items-center justify-center">
                    <i className="fas fa-message text-3xl text-amber-eco"></i>
                  </div>
                </div>

                {/* Center text */}
                <div className="text-center mb-8">
                  <p className="font-body text-forest-900 font-semibold text-lg">Fast Response</p>
                  <p className="font-body text-forest-600 text-xs text-center mt-1 max-w-xs">We reply to all inquiries within 24 hours</p>
                </div>

                {/* Bottom three icons */}
                <div className="flex gap-6 items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-eco/5 border border-amber-eco/30 rounded-lg flex items-center justify-center mx-auto mb-2 group hover:border-amber-eco hover:bg-amber-eco/10 transition-all duration-300">
                      <i className="fas fa-check text-xl text-forest-900 group-hover:text-amber-eco"></i>
                    </div>
                    <p className="font-body text-forest-600 text-xs font-semibold">Expert Team</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-eco/5 border border-amber-eco/30 rounded-lg flex items-center justify-center mx-auto mb-2 group hover:border-amber-eco hover:bg-amber-eco/10 transition-all duration-300">
                      <i className="fas fa-lightbulb text-xl text-forest-900 group-hover:text-amber-eco"></i>
                    </div>
                    <p className="font-body text-forest-600 text-xs font-semibold">Creative Ideas</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-amber-eco/5 border border-amber-eco/30 rounded-lg flex items-center justify-center mx-auto mb-2 group hover:border-amber-eco hover:bg-amber-eco/10 transition-all duration-300">
                      <i className="fas fa-handshake text-xl text-forest-900 group-hover:text-amber-eco"></i>
                    </div>
                    <p className="font-body text-forest-600 text-xs font-semibold">Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Cards */}
      <section className="py-8 sm:py-12 bg-cream-50 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { href: 'tel:+919513877866', icon: 'fa-phone', label: 'Call Us', value: '+91 9513877866', iconColor: 'text-amber-eco' },
              { href: 'mailto:info@ecovation.co.in', icon: 'fa-envelope', label: 'Email Us', value: 'info@ecovation.co.in', iconColor: 'text-amber-eco' },
              { href: 'https://wa.me/919513877866', icon: 'fa-whatsapp', label: 'WhatsApp', value: 'Chat Instantly', iconColor: 'text-green-400', fab: true },
              { href: null, icon: 'fa-clock', label: 'Working Hours', value: 'Mon–Fri, 9AM–6PM', iconColor: 'text-amber-eco' },
            ].map((c, i) => (
              <div key={i} className="group">
                {c.href ? (
                  <a href={c.href} target={c.fab ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-4 p-5 border border-gray-300 hover:border-amber-eco transition-all duration-300 bg-cream-50 hover:bg-gray-100 reveal">
                    <div className="w-10 h-10 border border-gray-300 group-hover:border-amber-eco flex items-center justify-center flex-shrink-0 transition-colors">
                      <i className={`${c.fab ? 'fab' : 'fas'} ${c.icon} ${c.iconColor} text-sm`}></i>
                    </div>
                    <div className="min-w-0">
                      <p className="font-body text-forest-600 text-xs uppercase tracking-wider">{c.label}</p>
                      <p className="font-body text-forest-900 text-sm font-medium truncate">{c.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-5 border border-gray-300 bg-cream-50 reveal">
                    <div className="w-10 h-10 border border-gray-300 flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${c.icon} ${c.iconColor} text-sm`}></i>
                    </div>
                    <div>
                      <p className="font-body text-forest-600 text-xs uppercase tracking-wider">{c.label}</p>
                      <p className="font-body text-forest-900 text-sm font-medium">{c.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 sm:py-32 bg-cream-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 border border-amber-eco/10 hidden sm:block"></div>
        <div className="absolute bottom-12 right-32 w-32 h-32 border border-amber-eco/5 hidden sm:block"></div>
        <div className="absolute top-20 right-20 w-48 h-48 border border-amber-eco/5 hidden sm:block"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 reveal px-4">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Send a Message</span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-forest-900 mt-4">LET'S <span className="text-amber-eco">TALK</span></h2>
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
            <div className="lg:col-span-2 reveal reveal-right delay-200 relative">
              {/* Visual accent */}
              <div className="absolute -top-12 -right-12 w-24 h-24 border border-amber-eco/20"></div>
              <div className="absolute bottom-24 right-0 w-32 h-32 bg-amber-eco/3"></div>
              
              <div className="relative z-10 bg-white border border-gray-300 p-8 md:p-10">
                <div aria-live="polite" aria-atomic="true" className="sr-only">
                  {submitted && "Message sent successfully. Thank you for reaching out. We'll respond within 24 hours."}
                </div>
                {submitted ? (
                  <div className="text-center">
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
                        <label htmlFor={`field-${f.field}`} className="font-body text-xs text-forest-700 uppercase tracking-wider block mb-2">
                          {f.label} {f.required && <span className="text-amber-eco">*</span>}
                        </label>
                        <input
                          id={`field-${f.field}`}
                          type={f.type}
                          value={form[f.field]}
                          onChange={e => handleChange(f.field, e.target.value)}
                          placeholder={f.placeholder}
                          className={`w-full bg-gray-100 border text-forest-900 font-body text-sm px-4 py-3 placeholder-forest-600 transition-all duration-300 ${errors[f.field] ? 'border-red-500' : 'border-gray-300'}`}
                          aria-describedby={errors[f.field] ? `error-${f.field}` : undefined}
                        />
                        {errors[f.field] && <p id={`error-${f.field}`} className="text-red-400 text-xs mt-1 font-body">{errors[f.field]}</p>}
                      </div>
                    ))}

                    <div>
                      <label htmlFor="field-service" className="font-body text-xs text-forest-700 uppercase tracking-wider block mb-2">Service Interested In</label>
                      <select
                        id="field-service"
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
                    <label htmlFor="field-subject" className="font-body text-xs text-forest-700 uppercase tracking-wider block mb-2">
                      Subject <span className="text-amber-eco">*</span>
                    </label>
                    <input
                      id="field-subject"
                      type="text"
                      value={form.subject}
                      onChange={e => handleChange('subject', e.target.value)}
                      placeholder="What is this regarding?"
                      className={`w-full bg-gray-100 border text-forest-900 font-body text-sm px-4 py-3 placeholder-forest-600 transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                      aria-describedby={errors.subject ? 'error-subject' : undefined}
                    />
                    {errors.subject && <p id="error-subject" className="text-red-400 text-xs mt-1 font-body">{errors.subject}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="field-message" className="font-body text-xs text-forest-700 uppercase tracking-wider block mb-2">
                      Your Message <span className="text-amber-eco">*</span>
                    </label>
                    <textarea
                      id="field-message"
                      rows={6}
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project, space size, timeline, or any questions…"
                      className={`w-full bg-gray-100 border text-forest-900 font-body text-sm px-4 py-3 placeholder-forest-600 transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                    />
                    {errors.message && <p id="error-message" className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>}
                  </div>

                  <div className="mb-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox"
                        id="field-terms"
                        checked={form.terms}
                        onChange={e => handleChange('terms', e.target.checked)}
                        className="sr-only"
                        aria-label="I agree to the terms and conditions"
                      />
                      <div
                        onClick={() => handleChange('terms', !form.terms)}
                        className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-200 ${form.terms ? 'bg-amber-eco border-amber-eco' : 'border-forest-500 hover:border-amber-eco'}`}
                        aria-hidden="true"
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
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Location</span>
            <h2 className="font-display text-6xl md:text-7xl text-forest-900 mt-2">FIND OUR <span className="text-gradient">OFFICE</span></h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 reveal">
            <div className="bg-gray-200 border border-gray-300 aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <i className="fas fa-map-location-dot text-5xl text-forest-700 mb-4"></i>
                <p className="font-body text-forest-600 text-sm mb-2">Ecovation Office</p>
                <p className="font-body text-forest-700 text-xs">Nagasandra, Bangalore</p>
              </div>
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
