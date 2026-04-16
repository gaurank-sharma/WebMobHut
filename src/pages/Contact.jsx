import { useState } from 'react';
import { Phone, Mail, Globe, CheckCircle, AlertCircle, MapPin as MapPinIcon } from 'lucide-react';

function MapPin({ top, left, label, primary = false, labelDir = 'right' }) {
  const labelStyle = labelDir === 'left'
    ? { right: '110%', left: 'auto', textAlign: 'right' }
    : { left: '110%' };
  return (
    <div className="absolute" style={{ top, left, transform: 'translate(-50%, -50%)' }}>
      {primary && (
        <div className="absolute inset-0 rounded-full bg-[#2eaff0]/20 animate-ping scale-150" />
      )}
      <div className={`relative rounded-full flex items-center justify-center ${
        primary
          ? 'w-4 h-4 bg-[#2eaff0] shadow-[0_0_14px_4px_rgba(46,175,240,0.5)]'
          : 'w-2.5 h-2.5 bg-white/70 shadow-[0_0_6px_2px_rgba(255,255,255,0.15)]'
      }`} />
      <div
        className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
        style={labelStyle}
      >
        <span className={`text-[9px] font-semibold leading-none px-1.5 py-0.5 rounded ${
          primary
            ? 'text-[#2eaff0] bg-black/80'
            : 'text-white/70 bg-black/60'
        }`}>
          {label}
        </span>
      </div>
    </div>
  );
}

const API = 'https://web-mob-hut-backend.vercel.app/api';

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: '', lastName: '', company: '', email: '', phone: '', subject: '', message: '',
  });
  const [status, setStatus] = useState(null);
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

  /* Shared input classes */
  const inputCls = `w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-colors focus:border-[#2eaff0]
    bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-400
    dark:bg-[#1a1a1a] dark:border-neutral-700 dark:text-white dark:placeholder-neutral-600`;

  return (
    <div className="min-h-screen font-sans flex flex-col
      bg-white text-gray-900
      dark:bg-black dark:text-white">

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
            <p className="mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed
              text-gray-500 dark:text-gray-400">
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
                <p className="leading-relaxed text-sm md:text-base
                  text-gray-500 dark:text-gray-400">
                  If you would like to work with WebMobHut, we'd love to hear from you. Send us a note
                  and we'll set up a time to get to know each other.
                </p>
              </div>

              {/* Contact card */}
              <div className="border rounded-2xl p-6 space-y-5
                bg-gray-50 border-gray-200
                dark:bg-[#0f0f0f] dark:border-neutral-800">
                <div>
                  <p className="font-bold text-lg">Viraj Ratra</p>
                  <p className="text-[#2eaff0] text-sm font-medium">Director, WebMobHut Pvt Ltd</p>
                </div>
                <div className="h-px bg-gray-200 dark:bg-neutral-800" />
                {[
                  { icon: Phone,      label: '+91-9910319121',       href: 'tel:+919910319121' },
                  { icon: Mail,       label: 'webmobhut@gmail.com',  href: 'mailto:webmobhut@gmail.com' },
                  { icon: Globe,      label: 'www.webmobhut.com',    href: 'https://www.webmobhut.com' },
                  { icon: MapPinIcon, label: 'Delhi NCR & Bangalore', href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#2eaff0]/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-[#2eaff0]" />
                    </div>
                    {href ? (
                      <a href={href} className="text-sm hover:text-[#2eaff0] transition-colors
                        text-gray-600 dark:text-gray-300">{label}</a>
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-300">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Office hours */}
              <div className="border rounded-2xl p-6
                bg-gray-50 border-gray-200
                dark:bg-[#0f0f0f] dark:border-neutral-800">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#2eaff0] mb-4">Working Hours</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Always available</span>
                  <span className="text-[#2eaff0] font-bold text-base">24 × 7</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="border p-8 md:p-10 rounded-2xl shadow-lg
              bg-gray-50 border-gray-200
              dark:bg-[#0d0d0d] dark:border-neutral-800 dark:shadow-2xl">

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={30} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus(null)}
                    className="mt-6 px-6 py-2.5 border text-sm rounded-full transition-colors
                      border-gray-300 text-gray-500 hover:border-[#2eaff0] hover:text-[#2eaff0]
                      dark:border-neutral-700 dark:text-gray-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-bold text-lg mb-6">Send us a message</h3>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-sm px-4 py-3 rounded-lg">
                      <AlertCircle size={15} />
                      {errorMsg || 'Something went wrong. Please try again.'}
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider
                      text-gray-500 dark:text-gray-400">
                      Name <span className="text-red-500 normal-case font-normal italic">(Required)</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="First" className={inputCls} />
                      <input type="text" name="lastName"  value={form.lastName}  onChange={handleChange} required placeholder="Last"  className={inputCls} />
                    </div>
                  </div>

                  {/* Company + Phone */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider text-gray-500 dark:text-gray-400">Company</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider text-gray-500 dark:text-gray-400">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputCls} />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Email <span className="text-red-500 normal-case font-normal italic">(Required)</span>
                    </label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@company.com" className={inputCls} />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider text-gray-500 dark:text-gray-400">Subject</label>
                    <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="How can we help you?" className={inputCls} />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Message <span className="text-red-500 normal-case font-normal italic">(Required)</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project or event..." className={`${inputCls} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 bg-[#2eaff0] text-black font-bold tracking-widest text-sm uppercase rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {status === 'loading'
                      ? <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" /> Sending...</>
                      : 'Submit'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAN INDIA MAP ── */}
      <section className="py-24 px-6 border-t
        bg-gray-50 border-gray-200
        dark:bg-neutral-950 dark:border-neutral-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-6">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-2 block">WebMobHut</span>
            <h2 className="text-4xl md:text-5xl font-bold">We Work PAN India</h2>
            <div className="h-0.5 w-20 bg-[#2eaff0] mx-auto mt-5 mb-4" />
            <p className="text-sm text-gray-500 dark:text-gray-500">Delivering extraordinary experiences across every corner of India</p>
          </div>

          {/* City pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Jaipur', 'Ahmedabad', 'Lucknow', 'Chandigarh', 'Surat'].map((city) => (
              <span key={city} className="text-xs px-3 py-1.5 bg-[#2eaff0]/10 text-[#2eaff0] border border-[#2eaff0]/20 rounded-full">{city}</span>
            ))}
          </div>

          <div className="relative max-w-3xl mx-auto aspect-[16/11] rounded-3xl border shadow-2xl overflow-hidden flex items-center justify-center
            bg-gray-100 border-gray-200
            dark:bg-black dark:border-neutral-800">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b4/India_outline.svg"
              alt="India Map"
              className="w-full h-full object-contain opacity-20 pointer-events-none
                filter invert-0 dark:invert"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30 pointer-events-none" />

            <MapPin top="37%" left="40%" label="Delhi NCR" primary />
            <MapPin top="43%" left="37%" label="Jaipur"      labelDir="left" />
            <MapPin top="42%" left="50%" label="Lucknow" />
            <MapPin top="30%" left="38%" label="Chandigarh"  labelDir="left" />
            <MapPin top="50%" left="30%" label="Ahmedabad"   labelDir="left" />
            <MapPin top="63%" left="31%" label="Mumbai"      labelDir="left" />
            <MapPin top="66%" left="33.5%" label="Pune"      labelDir="left" />
            <MapPin top="64%" left="42%" label="Hyderabad" />
            <MapPin top="49%" left="62%" label="Kolkata" />
            <MapPin top="74%" left="41%" label="Bangalore" primary />
            <MapPin top="77%" left="46%" label="Chennai" />
            <MapPin top="56%" left="31.5%" label="Surat"     labelDir="left" />

            <div className="absolute bottom-3 left-4 text-[10px] text-neutral-500">
              © WebMobHut Pvt Ltd — PAN India Operations
            </div>
            <div className="absolute bottom-3 right-4 flex items-center gap-3 text-[10px] text-neutral-500">
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#2eaff0] rounded-full inline-block" /> HQ</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 bg-white/60 rounded-full inline-block" /> City</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
