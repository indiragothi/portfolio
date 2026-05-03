import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/Button';

const projects = [
  {
    title: 'Verda',
    sub: 'Wellness studio booking platform',
    tags: ['Full-Stack', 'UI'],
    year: '2025',
    img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1400&q=80&auto=format&fit=crop',
  },
  {
    title: 'Mossbank',
    sub: 'Banking dashboard & design system',
    tags: ['UI', 'Design System'],
    year: '2024',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80&auto=format&fit=crop',
  },
  {
    title: 'Fern & Folio',
    sub: 'Editorial e-commerce for an independent press',
    tags: ['Full-Stack', 'Branding'],
    year: '2024',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&q=80&auto=format&fit=crop',
  },
  {
    title: 'Linden Studio',
    sub: 'Portfolio for a boutique architecture studio',
    tags: ['UI', 'Branding'],
    year: '2024',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=80&auto=format&fit=crop',
  },
  {
    title: 'Pinegrove SaaS',
    sub: 'B2B onboarding & analytics dashboard',
    tags: ['Full-Stack'],
    year: '2023',
    img: 'https://images.unsplash.com/photo-1551288049-1c1f3f0e89cf?w=1400&q=80&auto=format&fit=crop',
  },
  {
    title: 'Sage Journal',
    sub: 'Mindful journaling iOS-style web app',
    tags: ['UI', 'Full-Stack'],
    year: '2023',
    img: 'https://images.unsplash.com/photo-1499914485622-a88fac536970?w=1400&q=80&auto=format&fit=crop',
  },
  {
    title: 'Olive Type',
    sub: 'Independent type foundry storefront',
    tags: ['Branding', 'Full-Stack'],
    year: '2022',
    img: 'https://images.unsplash.com/photo-1581090700227-1e8d3f6c39c9?w=1400&q=80&auto=format&fit=crop',
  },
  {
    title: 'Hearth Health',
    sub: 'Patient-facing clinic booking',
    tags: ['Full-Stack'],
    year: '2022',
    img: 'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=1400&q=80&auto=format&fit=crop',
  },
];

const FILTERS = ['All', 'Full-Stack', 'UI', 'Design System', 'Branding'];

const Portfolio = () => {
  const [active, setActive] = useState('All');
  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.tags.includes(active))),
    [active]
  );

  return (
    <div data-testid="portfolio-page">
      <PageHeader
        eyebrow="Selected work"
        title={<>A small <span className="italic text-[#607851]">garden</span> of recent projects.</>}
        description="A curated selection of recent client and personal projects — spanning full-stack apps, design systems, and brand-led marketing surfaces."
      >
        <Button to="/contact" testId="portfolio-cta-contact">Have a project in mind?</Button>
      </PageHeader>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-14 reveal">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              data-testid={`filter-${f.toLowerCase().replace(/\s+/g, '-')}`}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                active === f
                  ? 'bg-[#4A5D43] text-[#FAF8F3] border-[#4A5D43]'
                  : 'bg-white text-[#4A5D43] border-[#D3DEC6] hover:bg-[#E7EEDF]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="group hover-lift bg-white border border-[#E7EEDF] rounded-2xl overflow-hidden"
              data-testid={`project-${i}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full text-[11px] bg-[#FAF8F3]/90 backdrop-blur text-[#4A5D43] border border-[#E7EEDF]">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[11px] bg-[#2C3A2A]/85 text-[#E7EEDF]">
                  {p.year}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl text-[#2C3A2A]">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-[#4A5D43] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="mt-1.5 text-[14.5px] text-[#4A5D43]/80 leading-relaxed">{p.sub}</p>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-[#4A5D43]/70">
            Nothing here yet — try another filter.
          </div>
        )}
      </section>

      {/* Case-study teaser */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24 md:pb-32 reveal">
        <div className="rounded-3xl overflow-hidden border border-[#E7EEDF] grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80&auto=format&fit=crop"
              alt="Featured project"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-5 bg-[#2C3A2A] text-[#E7EEDF] p-10 md:p-14 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.22em] text-[#9CAF88]">Featured case study</p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl text-[#FAF8F3] leading-tight">
              Verda — turning a wellness studio booking flow into something genuinely calm.
            </h3>
            <p className="mt-4 text-[15.5px] leading-relaxed text-[#B8C9B0]">
              How a careful redesign and a leaner backend cut booking abandonment by 38% — without changing the brand.
            </p>
            <div className="mt-7">
              <Button to="/contact" variant="light" testId="case-study-cta">Request the case study</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
