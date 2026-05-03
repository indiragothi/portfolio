import { Code2, Layers, Sparkles, Boxes, Wrench, Gauge, ArrowUpRight, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Full-Stack Web Apps',
    body: 'From greenfield MVPs to mature platforms — React, FastAPI / Node, Mongo / Postgres. Strong typing, clean APIs, calm UI.',
    points: ['Architecture & API design', 'Auth, payments, storage', 'Database modeling', 'Deployment to AWS / Vercel'],
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'UI Engineering',
    body: 'Pixel-perfect implementation of design files into accessible, composable components — with the small details polished.',
    points: ['Tailwind / CSS architecture', 'Accessibility (WCAG AA)', 'Animations & micro-interactions', 'Design \u2192 code handoff'],
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Product Design',
    body: 'Lo-fi to hi-fi flows in Figma, clear documentation, and tight collaboration with engineering throughout.',
    points: ['User flows & wireframes', 'Visual design & prototyping', 'Branding refresh', 'Design tokens & libraries'],
  },
  {
    icon: <Boxes className="w-6 h-6" />,
    title: 'Design Systems',
    body: 'Component libraries that scale with your team — documented, themeable, and consistent across surfaces.',
    points: ['Token architecture', 'Component documentation', 'Storybook setup', 'Versioning & governance'],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Code Audits & Refactors',
    body: 'A second pair of eyes on your codebase — surfacing risks, opportunities, and a calm path to improvement.',
    points: ['Frontend health audit', 'Performance review', 'Refactor roadmap', 'Mentoring sessions'],
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'Performance & SEO',
    body: 'Make your product fast, accessible, and discoverable — without compromising the design.',
    points: ['Core Web Vitals', 'Image / asset strategy', 'Semantic SEO', 'Analytics setup'],
  },
];

const process = [
  { n: '01', t: 'Discover', d: 'A short kickoff to understand the problem, audience, and constraints. We agree on outcomes, not just outputs.' },
  { n: '02', t: 'Sketch', d: 'Rough flows, references, and a written design intent. Cheap iteration where it&rsquo;s easy to change direction.' },
  { n: '03', t: 'Design', d: 'Figma boards moving from low to high fidelity, with a focus on motion, accessibility, and edge cases.' },
  { n: '04', t: 'Build', d: 'Clean, typed code shipped in small slices. You always have a working preview.' },
  { n: '05', t: 'Polish', d: 'A focused pass on details, performance, accessibility, and handover. Documentation lives with the code.' },
];

const packages = [
  {
    name: 'Sprout',
    price: 'From $2.5k',
    sub: 'Landing pages & micro-sites',
    points: ['1–2 pages', 'Custom UI in Figma', 'Built in React + Tailwind', '2-week turnaround'],
  },
  {
    name: 'Branch',
    price: 'From $7k',
    sub: 'Marketing + product surfaces',
    points: ['5–8 pages', 'CMS integration', 'Design system starter', 'Performance & SEO pass'],
    featured: true,
  },
  {
    name: 'Forest',
    price: 'Custom',
    sub: 'Full product engagements',
    points: ['Discovery + roadmap', 'Full-stack delivery', 'Design system + docs', 'Long-term partnership'],
  },
];

const Services = () => {
  return (
    <div data-testid="services-page">
      <PageHeader
        eyebrow="Services"
        title={<>Considered work, <span className="italic text-[#607851]">end to end.</span></>}
        description="From a single landing page to a long-term product engagement — here&rsquo;s how I can help. Every engagement is shaped to your team, never copy-pasted."
      >
        <Button to="/contact" testId="services-cta-contact">Discuss your project</Button>
        <Button to="/portfolio" variant="secondary" testId="services-cta-portfolio">See past work</Button>
      </PageHeader>

      {/* Services grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-28 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Card key={s.title} className="flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#E7EEDF] text-[#4A5D43] flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#2C3A2A]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4A5D43]/80">{s.body}</p>
              <ul className="mt-5 space-y-2 text-[14.5px] text-[#4A5D43]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#7E9568] mt-1 shrink-0" />
                    <span className="text-[#4A5D43]/85">{p}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F2EDE0] border-y border-[#E7EEDF]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 reveal">
          <SectionHeader
            eyebrow="How we&rsquo;ll work"
            title={<>A simple, <span className="italic text-[#607851]">five-step</span> rhythm.</>}
            description="Predictable, transparent, and respectful of your time. You always know what&rsquo;s happening and why."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-5">
            {process.map((p) => (
              <Card key={p.n} className="!p-6">
                <p className="font-serif text-4xl text-[#9CAF88]">{p.n}</p>
                <h4 className="mt-4 font-serif text-xl text-[#2C3A2A]">{p.t}</h4>
                <p className="mt-2 text-[14px] leading-relaxed text-[#4A5D43]/80">{p.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 reveal">
        <SectionHeader
          eyebrow="Engagements"
          title={<>Three ways to <span className="italic text-[#607851]">work together.</span></>}
          description="Pick a starting point — we can shape it from there. Pricing is indicative; every engagement gets a tailored proposal."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <Card
              key={p.name}
              className={`relative ${p.featured ? '!bg-[#2C3A2A] !border-[#2C3A2A] text-[#FAF8F3]' : ''}`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.18em] bg-[#9CAF88] text-[#2C3A2A]">
                  Most popular
                </span>
              )}
              <p className={`text-xs uppercase tracking-[0.22em] ${p.featured ? 'text-[#9CAF88]' : 'text-[#607851]'}`}>{p.sub}</p>
              <h3 className={`mt-3 font-serif text-3xl ${p.featured ? 'text-[#FAF8F3]' : 'text-[#2C3A2A]'}`}>{p.name}</h3>
              <p className={`mt-2 text-2xl font-serif ${p.featured ? 'text-[#B8C9B0]' : 'text-[#607851]'}`}>{p.price}</p>
              <ul className={`mt-6 space-y-2 text-[15px] ${p.featured ? 'text-[#E7EEDF]' : 'text-[#4A5D43]'}`}>
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-1 shrink-0 ${p.featured ? 'text-[#9CAF88]' : 'text-[#7E9568]'}`} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button
                  to="/contact"
                  variant={p.featured ? 'light' : 'secondary'}
                  size="md"
                  testId={`package-cta-${p.name.toLowerCase()}`}
                >
                  Inquire
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24 md:pb-32">
        <div className="rounded-3xl bg-[#E7EEDF] border border-[#D3DEC6] p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#607851]">Not sure what fits?</p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl text-[#2C3A2A]">Let&rsquo;s scope it together — no pressure.</h3>
          </div>
          <Button to="/contact" size="lg" testId="services-final-cta">
            Book a 20-min intro <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
