import { useState } from 'react';
import { Phone, Mail, Globe, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const API = 'https://web-mob-hut-backend.vercel.app/api';

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '', email: '', phone: '', subject: '', message: '',
  });
  const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(`${API}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          company: form.company,
          subject: form.subject,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Something went wrong');
      setStatus('success');
      setForm({ firstName: '', lastName: '', company: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">

      {/* ── HERO ── */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide leading-tight">
              Experience <br />
              <span className="text-[#2eaff0]">Connection</span>
            </h1>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Ready to Experience Everything? If you're searching for the right agency partner,
              we want to hear from you. Shoot us an email or fill out this form and we'll eagerly respond.
            </p>
          </div>

          {/* ── GRID ── */}
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT — Info */}
            <div className="space-y-10 md:pr-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How can we help?</h2>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  If you would like to work with WebMobHut, we'd love to hear from you. Send us a note
                  and we'll set up a time to get to know each other. We love a good challenge,
                  and look forward to meeting you.
                </p>
              </div>

              {/* Contact card */}
              <div className="bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-6 space-y-5">
                <div>
                  <p className="font-bold text-lg text-white">Bhawna</p>
                  <p className="text-[#2eaff0] text-sm font-medium">Director, WebMobHut Pvt Ltd</p>
                </div>
                <div className="h-px bg-neutral-800" />
                {[
                  { icon: Phone, label: '+91-8860585993', href: 'tel:+918860585993' },
                  { icon: Mail, label: 'bhavishya39@gmail.com', href: 'mailto:bhavishya39@gmail.com' },
                  { icon: Globe, label: 'www.webmobhut.com', href: 'https://www.webmobhut.com' },
                  { icon: MapPin, label: 'Delhi NCR & Bangalore', href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#2eaff0]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-[#2eaff0]" />
                    </div>
                    {href ? (
                      <a href={href} className="text-gray-300 text-sm hover:text-[#2eaff0] transition-colors">{label}</a>
                    ) : (
                      <span className="text-gray-300 text-sm">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Office hours */}
              <div className="bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-6">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#2eaff0] mb-4">Office Hours</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="text-white">9:00 AM – 6:00 PM</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-white">10:00 AM – 3:00 PM</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-gray-600">Closed</span></div>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="bg-[#0d0d0d] border border-neutral-800 p-8 md:p-10 rounded-2xl shadow-2xl">

              {/* Success state */}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={30} className="text-green-400" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-6 px-6 py-2.5 border border-neutral-700 text-gray-300 text-sm rounded-full hover:border-[#2eaff0] hover:text-[#2eaff0] transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white font-bold text-lg mb-6">Send us a message</h3>

                  {/* Error */}
                  {status === 'error' && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-lg">
                      <AlertCircle size={15} />
                      {errorMsg || 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Name <span className="text-red-500 normal-case font-normal italic">(Required)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text" name="firstName" value={form.firstName} onChange={handleChange} required
                          placeholder="First"
                          className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-neutral-700 text-white placeholder-neutral-600 rounded-lg text-sm outline-none focus:border-[#2eaff0] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text" name="lastName" value={form.lastName} onChange={handleChange} required
                          placeholder="Last"
                          className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-neutral-700 text-white placeholder-neutral-600 rounded-lg text-sm outline-none focus:border-[#2eaff0] transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Company + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Company</label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-neutral-700 text-white placeholder-neutral-600 rounded-lg text-sm outline-none focus:border-[#2eaff0] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Phone</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+91 00000 00000"
                        className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-neutral-700 text-white placeholder-neutral-600 rounded-lg text-sm outline-none focus:border-[#2eaff0] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Email <span className="text-red-500 normal-case font-normal italic">(Required)</span>
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="you@company.com"
                      className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-neutral-700 text-white placeholder-neutral-600 rounded-lg text-sm outline-none focus:border-[#2eaff0] transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">Subject</label>
                    <input
                      type="text" name="subject" value={form.subject} onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-neutral-700 text-white placeholder-neutral-600 rounded-lg text-sm outline-none focus:border-[#2eaff0] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1.5 uppercase tracking-wider">
                      Message <span className="text-red-500 normal-case font-normal italic">(Required)</span>
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} required rows={5}
                      placeholder="Tell us about your project or event..."
                      className="w-full px-4 py-2.5 bg-[#1a1a1a] border border-neutral-700 text-white placeholder-neutral-600 rounded-lg text-sm outline-none focus:border-[#2eaff0] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-[#2eaff0] text-black font-bold tracking-widest text-sm uppercase rounded-full hover:bg-white transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                    ) : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── NATIONAL IMPACT MAP ── */}
      <section className="bg-neutral-950 py-24 px-6 border-t border-neutral-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-2 block">WebMobHut</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">National Impact</h2>
            <div className="h-0.5 w-20 bg-[#2eaff0] mx-auto mt-5" />
          </div>
          <div className="relative max-w-3xl mx-auto aspect-[16/10] bg-black rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden flex items-center justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b4/India_outline.svg"
              alt="India Map"
              className="w-full h-full object-contain filter invert opacity-30 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 pointer-events-none" />
            {/* Delhi pin */}
            <div className="absolute top-[38%] left-[40%] group">
              <div className="w-10 h-10 bg-[#2eaff0]/20 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 animate-pulse group-hover:scale-125 transition-transform">
                <div className="w-3 h-3 bg-[#2eaff0] rounded-full shadow-[0_0_12px_#2eaff0]" />
              </div>
              <div className="absolute top-1 left-7 bg-neutral-900 border border-neutral-700 p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                <p className="font-bold text-white text-xs">Delhi NCR</p>
                <p className="text-neutral-400 text-[10px]">Delhi · Noida · Gurgaon</p>
              </div>
            </div>
            {/* Bangalore pin */}
            <div className="absolute top-[73%] left-[41%] group">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group-hover:scale-125 transition-transform">
                <div className="w-2.5 h-2.5 bg-white rounded-full" />
              </div>
              <div className="absolute top-1 left-6 bg-neutral-900 border border-neutral-700 p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                <p className="font-bold text-white text-xs">Bangalore</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-[10px] text-neutral-600">
              © WebMobHut Pvt Ltd — Delhi NCR & Bangalore
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
