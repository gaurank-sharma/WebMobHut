import { useEffect, useState } from 'react';
import { ExternalLink, Award, Handshake, Target } from 'lucide-react';

const API = 'https://web-mob-hut-backend.vercel.app/api';

const WHY = [
  { icon: Target, title: 'Strategic Thinking', desc: 'We align every event with your brand vision and business objectives.' },
  { icon: Award, title: 'Proven Excellence', desc: '500+ events executed across India with meticulous attention to detail.' },
  { icon: Handshake, title: 'Long-term Partnership', desc: 'We build relationships, not just events. Most clients return for every activation.' },
];

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/clients?isActive=true`)
      .then((r) => r.json())
      .then((d) => { if (d.success) setClients(d.data); })
      .finally(() => setLoading(false));
  }, []);

  const featured = clients.filter((c) => c.isFeatured);
  const rest = clients.filter((c) => !c.isFeatured);

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[500px] h-[300px] bg-[#2eaff0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-5xl relative">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-4 block">
            Trusted Partners
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide leading-tight mb-6">
            Brands That <br />
            <span className="text-[#2eaff0]">Trust Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-sm md:text-base leading-relaxed">
            From Fortune 500 companies to growing startups, WebMobHut has been the creative force
            behind some of India's most memorable brand experiences, mall activations, and corporate events.
          </p>
        </div>
      </section>

      {/* ── FEATURED CLIENTS ── */}
      {(loading || featured.length > 0) && (
        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-neutral-900" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] px-4">Featured Partners</span>
              <div className="h-px flex-1 bg-neutral-900" />
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-8 h-8 border-2 border-[#2eaff0] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {featured.map((client) => (
                  <ClientCard key={client._id} client={client} featured />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── ALL CLIENTS ── */}
      {!loading && rest.length > 0 && (
        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-5xl">
            {featured.length > 0 && (
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-neutral-900" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-600 px-4">Our Clients</span>
                <div className="h-px flex-1 bg-neutral-900" />
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {rest.map((client) => (
                <ClientCard key={client._id} client={client} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {!loading && clients.length === 0 && (
        <section className="px-6 pb-20">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center py-20 bg-neutral-950 border border-neutral-800 rounded-2xl">
              <Handshake size={36} className="mx-auto text-neutral-700 mb-3" />
              <p className="text-gray-400 font-medium">Client logos coming soon.</p>
              <p className="text-gray-600 text-sm mt-1">Check back or contact us to partner with WebMobHut.</p>
            </div>
          </div>
        </section>
      )}

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-neutral-950 border-t border-neutral-800 py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-2 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold">Why Brands Choose WebMobHut</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {WHY.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-black border border-neutral-800 rounded-2xl p-7 hover:border-[#2eaff0]/30 transition-colors group">
                <div className="w-12 h-12 bg-[#2eaff0]/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#2eaff0]/20 transition-colors">
                  <Icon size={22} className="text-[#2eaff0]" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-neutral-800 py-20 px-6 bg-black">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to join our <span className="text-[#2eaff0]">partner network?</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Let's create something extraordinary together. Reach out to discuss your next brand activation or event.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2eaff0] text-black font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(46,175,240,0.2)]"
          >
            Work With Us
          </a>
        </div>
      </section>
    </div>
  );
}

function ClientCard({ client, featured = false }) {
  return (
    <div
      className={`group bg-[#0a0a0a] border rounded-2xl flex flex-col items-center justify-center p-5 hover:border-[#2eaff0]/30 transition-all duration-300 hover:-translate-y-1
        ${featured ? 'border-[#2eaff0]/10 aspect-video' : 'border-neutral-800 aspect-square'}`}
    >
      <img
        src={client.logo}
        alt={client.name}
        className="max-h-16 max-w-full object-contain filter brightness-75 group-hover:brightness-100 transition-all duration-300"
        loading="lazy"
      />
      {featured && (
        <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
          <p className="text-white text-xs font-semibold">{client.name}</p>
          {client.industry && <p className="text-gray-500 text-[10px] mt-0.5">{client.industry}</p>}
          {client.website && (
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#2eaff0] text-[10px] mt-1 hover:underline"
            >
              <ExternalLink size={9} /> Visit
            </a>
          )}
        </div>
      )}
    </div>
  );
}
