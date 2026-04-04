import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Clock, ChevronRight, Search } from 'lucide-react';

const API = 'http://localhost:4000/api';

const TYPE_COLORS = {
  'full-time':  'bg-green-500/10 text-green-400 border-green-500/20',
  'part-time':  'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'contract':   'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'internship': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'freelance':  'bg-pink-500/10 text-pink-400 border-pink-500/20',
};

const FILTERS = ['All', 'full-time', 'part-time', 'contract', 'internship', 'freelance'];

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    fetch(`${API}/careers?isActive=true`)
      .then((r) => r.json())
      .then((d) => { if (d.success) setJobs(d.data); })
      .finally(() => setLoading(false));
  }, []);

  const filtered = jobs.filter((j) => {
    const matchType = filter === 'All' || j.type === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || j.title.toLowerCase().includes(q) || j.department?.toLowerCase().includes(q) || j.location?.toLowerCase().includes(q);
    return matchType && matchSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2eaff0]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto max-w-5xl text-center relative">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-4 block">
            Join Our Team
          </span>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide leading-tight mb-6">
            Build Something <br />
            <span className="text-[#2eaff0]">Extraordinary</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            We're always looking for passionate, creative individuals to join the WebMobHut family.
            Explore open roles and become part of a team that shapes unforgettable experiences.
          </p>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="border-t border-b border-neutral-900 py-10 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '10+', label: 'Years of Excellence' },
            { value: '500+', label: 'Events Delivered' },
            { value: '50+', label: 'Team Members' },
            { value: '2', label: 'Office Locations' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-[#2eaff0]">{value}</p>
              <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPENINGS ── */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#2eaff0] mb-2 block">Open Positions</span>
            <h2 className="text-3xl md:text-4xl font-bold">Current Openings</h2>
          </div>

          {/* Search + Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search by title, department, location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#0f0f0f] border border-neutral-800 text-white placeholder-neutral-600 rounded-full pl-10 pr-4 py-3 text-sm outline-none focus:border-[#2eaff0] transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border
                    ${filter === f
                      ? 'bg-[#2eaff0] text-black border-[#2eaff0]'
                      : 'border-neutral-800 text-gray-400 hover:border-[#2eaff0]/40 hover:text-white'
                    }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Jobs list */}
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-[#2eaff0] border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 bg-neutral-950 border border-neutral-800 rounded-2xl">
              <Briefcase size={36} className="mx-auto text-neutral-700 mb-3" />
              <p className="text-gray-400 font-medium">
                {jobs.length === 0 ? 'No open positions right now.' : 'No results match your search.'}
              </p>
              {jobs.length === 0 && (
                <p className="text-gray-600 text-sm mt-1">Check back soon or send us your resume.</p>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((job) => (
                <div
                  key={job._id}
                  className="bg-[#0a0a0a] border border-neutral-800 rounded-2xl overflow-hidden hover:border-[#2eaff0]/30 transition-all duration-300"
                >
                  {/* Job header — always visible */}
                  <button
                    className="w-full text-left p-6 flex items-start justify-between gap-4 group"
                    onClick={() => setExpanded(expanded === job._id ? null : job._id)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-white font-bold text-lg group-hover:text-[#2eaff0] transition-colors">
                          {job.title}
                        </h3>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full border capitalize ${TYPE_COLORS[job.type] || ''}`}>
                          {job.type}
                        </span>
                        {job.isFeatured && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-500 text-xs">
                        {job.department && (
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={11} /> {job.department}
                          </span>
                        )}
                        {job.location && (
                          <span className="flex items-center gap-1.5">
                            <MapPin size={11} /> {job.location}
                          </span>
                        )}
                        {job.experience && (
                          <span className="flex items-center gap-1.5">
                            <Clock size={11} /> {job.experience}
                          </span>
                        )}
                        {job.salary && (
                          <span className="text-[#2eaff0] font-medium">{job.salary}</span>
                        )}
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`text-gray-600 group-hover:text-[#2eaff0] transition-all shrink-0 ${expanded === job._id ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {/* Expanded detail */}
                  {expanded === job._id && (
                    <div className="px-6 pb-6 border-t border-neutral-800 pt-5 space-y-5">
                      <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>

                      <div className="grid sm:grid-cols-3 gap-5">
                        {job.requirements?.length > 0 && (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2eaff0] mb-3">Requirements</p>
                            <ul className="space-y-1.5">
                              {job.requirements.map((r, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                                  <span className="w-1.5 h-1.5 bg-[#2eaff0] rounded-full mt-1.5 shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {job.responsibilities?.length > 0 && (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2eaff0] mb-3">Responsibilities</p>
                            <ul className="space-y-1.5">
                              {job.responsibilities.map((r, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                                  <span className="w-1.5 h-1.5 bg-[#2eaff0] rounded-full mt-1.5 shrink-0" />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {job.benefits?.length > 0 && (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2eaff0] mb-3">Benefits</p>
                            <ul className="space-y-1.5">
                              {job.benefits.map((b, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-400 text-xs">
                                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <a
                          href={`mailto:${job.applicationEmail || 'careers@webmobhut.com'}?subject=Application for ${job.title}`}
                          className="px-7 py-3 bg-[#2eaff0] text-black font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(46,175,240,0.2)]"
                        >
                          Apply Now
                        </a>
                        <span className="text-gray-600 text-xs">
                          Send your CV to {job.applicationEmail || 'careers@webmobhut.com'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-neutral-950 border-t border-neutral-800 py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't see the right role?</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            We're always on the lookout for great talent. Send us your resume and tell us how you'd love to contribute.
          </p>
          <a
            href="mailto:careers@webmobhut.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2eaff0] text-black font-bold tracking-widest text-xs uppercase rounded-full hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(46,175,240,0.2)]"
          >
            Send Open Application
          </a>
        </div>
      </section>
    </div>
  );
}
