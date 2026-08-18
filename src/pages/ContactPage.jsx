import React, { useState } from 'react';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, EMAIL, EMAIL_HREF, ADDRESS_LINES } from '../data/siteData';

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
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-9xl text-forest-900 leading-tight sm:leading-tight lg:leading-none mb-6">LET'S BUILD<br/><span className="text-gradient">BETTER SPACES</span></h1>
              <p className="font-body text-forest-700 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
                Tell us about your space, requirements and vision. Our team will help you explore the right interior and acoustic solution.
              </p>
            </div>

            {/* Right - Decorative */}
            <div className="hidden lg:flex items-center justify-center relative h-96">
              <div className="absolute w-80 h-80 border border-amber-eco/10 rounded-full"></div>
              <div className="absolute w-60 h-60 border border-amber-eco/20 rounded-full"></div>
              <div className="absolute w-40 h-40 bg-amber-eco/5 rounded-full"></div>
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-amber-eco/10 border border-amber-eco/40 rounded-full flex items-center justify-center">
                    <i className="fas fa-message text-3xl text-amber-eco"></i>
                  </div>
                </div>
                <div className="text-center mb-8">
                  <p className="font-body text-forest-900 font-semibold text-lg">Fast Response</p>
                  <p className="font-body text-forest-600 text-xs text-center mt-1 max-w-xs">We reply to all inquiries within 24 hours</p>
                </div>
                <div className="flex gap-6 items-center justify-center">
                  {[
                    { icon: 'fa-check', label: 'Expert Team' },
                    { icon: 'fa-lightbulb', label: 'Creative Ideas' },
                    { icon: 'fa-handshake', label: 'Professional' },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-16 h-16 bg-amber-eco/5 border border-amber-eco/30 rounded-lg flex items-center justify-center mx-auto mb-2 hover:border-amber-eco hover:bg-amber-eco/10 transition-all duration-300 group">
                        <i className={`fas ${item.icon} text-xl text-forest-900 group-hover:text-amber-eco`}></i>
                      </div>
                      <p className="font-body text-forest-600 text-xs font-semibold">{item.label}</p>
                    </div>
                  ))}
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
              { href: PHONE_TEL, icon: 'fa-phone', label: 'Call Us', value: PHONE_DISPLAY, iconColor: 'text-amber-eco' },
              { href: EMAIL_HREF, icon: 'fa-envelope', label: 'Email Us', value: EMAIL, iconColor: 'text-amber-eco' },
              { href: WHATSAPP_URL, icon: 'fa-whatsapp', label: 'WhatsApp', value: 'Chat Instantly', iconColor: 'text-green-400', fab: true },
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
        <div className="absolute top-0 right-0 w-96 h-96 border border-amber-eco/10 hidden sm:block"></div>
        <div className="absolute bottom-12 right-32 w-32 h-32 border border-amber-eco/5 hidden sm:block"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 reveal px-4">
            <span className="font-body text-amber-eco text-xs tracking-[0.3em] uppercase font-semibold">Send a Message</span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-forest-900 mt-4">LET'S <span className="text-amber-eco">TALK</span></h2>
          </div>
          {/* Contact Info - Full Width Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 reveal">
            {[
              { 
                icon: 'fa-phone', 
                title: 'Phone Numbers', 
                content: [PHONE_DISPLAY, `Primary`],
                href: PHONE_TEL,
                sub: [PHONE_DISPLAY_OLD, 'Also reachable']
              },
              { 
                icon: 'fa-envelope', 
                title: 'Email Address', 
                content: [EMAIL],
                href: EMAIL_HREF,
                note: 'We reply within 24 hours on business days'
              },
              { 
                icon: 'fa-map-marker-alt', 
                title: 'Office Address', 
                content: ADDRESS_LINES.slice(0, 2)
              },
              { 
                icon: 'fa-clock', 
                title: 'Business Hours', 
                content: ['Monday – Friday', '9:00 AM – 6:00 PM IST']
              },
            ].map((info, i) => (
              <div key={i} className="border border-gray-300 hover:border-amber-eco/50 transition-all duration-300 group p-5 bg-white hover:shadow-md">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gray-300 group-hover:border-amber-eco transition-colors">
                    <i className={`fas ${info.icon} text-amber-eco text-sm`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body font-semibold text-forest-900 text-xs uppercase tracking-wider">{info.title}</h4>
                  </div>
                </div>
                <div className="ml-13">
                  {info.href ? (
                    <>
                      <a href={info.href} className="font-body text-forest-900 font-semibold text-sm hover:text-amber-eco transition-colors block mb-1">{info.content[0]}</a>
                      {info.content[1] && <p className="font-body text-forest-600 text-xs">{info.content[1]}</p>}
                      {info.sub && (
                        <div className="mt-2 pt-2 border-t border-gray-200">
                          <a href={info.href} className="font-body text-forest-700 text-xs hover:text-amber-eco transition-colors block mb-0.5">{info.sub[0]}</a>
                          <p className="font-body text-forest-500 text-xs">{info.sub[1]}</p>
                        </div>
                      )}
                      {info.note && <p className="font-body text-forest-500 text-xs mt-2">{info.note}</p>}
                    </>
                  ) : (
                    <>
                      {info.content.map((line, idx) => (
                        <p key={idx} className="font-body text-forest-700 text-sm leading-relaxed mb-1">{line}</p>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-12 mb-12">

            {/* Form */}
            <div className="lg:col-span-2 reveal relative">
              <div className="absolute -top-12 -right-12 w-24 h-24 border border-amber-eco/20 hidden sm:block"></div>
              
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
                        <div key={f.field}>
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
                          <option value="interior-turnkey">Interior Turnkey Solutions</option>
                          <option value="residential">Residential Interiors</option>
                          <option value="acoustic-panels">Acoustic Panels</option>
                          <option value="cnc-cutting">CNC Cutting</option>
                          <option value="printed-panels">Printed Panels</option>
                          <option value="ceiling-solutions">Ceiling Solutions</option>
                          <option value="custom-solutions">Custom Solutions</option>
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
                        placeholder="Tell us about your project, space size, timeline, acoustic requirements or any questions…"
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

            {/* Map & Social */}
            <div className="reveal reveal-right delay-200 flex flex-col gap-6">
              {/* Small Map */}
              <div className="border border-gray-300 overflow-hidden h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6!2d77.5412!3d13.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17d7c34b0000%3A0x0!2sMahalakshmi+Layout%2C+Bengaluru%2C+Karnataka+560082!5e0!3m2!1sen!2sin!4v1234567890"
                  title="Ecovation Office Location — Mahalakshmi Layout, Bengaluru"
                  width="100%" height="100%"
                  className="w-full h-64"
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* WhatsApp CTA */}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 border border-green-600/40 bg-green-600/5 hover:bg-green-600/10 transition-all duration-300 group">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-green-600/40 group-hover:border-green-400 transition-colors">
                  <i className="fab fa-whatsapp text-green-500 text-lg"></i>
                </div>
                <div>
                  <h4 className="font-body font-semibold text-forest-900 text-sm">Chat on WhatsApp</h4>
                  <p className="font-body text-forest-600 text-xs">Instant support</p>
                </div>
              </a>

              {/* Social Links */}
              <div className="border border-gray-300 p-5 bg-white">
                <h4 className="font-body font-semibold text-forest-900 text-xs uppercase tracking-wider mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: 'fa-facebook-f', href: '#', fab: true },
                    { icon: 'fa-instagram', href: '#', fab: true },
                    { icon: 'fa-linkedin-in', href: '#', fab: true },
                    { icon: 'fa-whatsapp', href: WHATSAPP_URL, fab: true, green: true },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target={s.green ? '_blank' : undefined} rel="noopener noreferrer"
                      className={`w-10 h-10 border flex items-center justify-center text-xs transition-all duration-300 ${s.green ? 'border-gray-300 text-green-500 hover:border-green-400 hover:bg-green-50' : 'border-gray-300 text-forest-700 hover:border-amber-eco hover:bg-amber-eco/5 hover:text-amber-eco'}`}>
                      <i className={`fab ${s.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
