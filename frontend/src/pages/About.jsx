import { Award, Compass, Heart, Leaf } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';

const values = [
  { icon: <Leaf className="w-5 h-5" />, title: 'Calm by default', body: 'Design choices that lower cognitive load — generous space, gentle motion, considered typography.' },
  { icon: <Compass className="w-5 h-5" />, title: 'Clarity over cleverness', body: 'Solving the right problem first; favoring simple solutions that age well.' },
  { icon: <Heart className="w-5 h-5" />, title: 'Human-centered', body: 'Building for the actual humans who will use it — not just the spec.' },
  { icon: <Award className="w-5 h-5" />, title: 'Quiet quality', body: 'Polish in the small things — spacing, error states, empty states, micro-copy.' },
];

const experience = [
  { year: '2024 — Now', role: 'Independent Full-Stack & UI Developer', company: 'Self-employed', body: 'Partnering with founders and design-led teams on calm, accessible web products.' },
  { year: '2022 — 2024', role: 'Senior Frontend Engineer', company: 'Atelier Studio', body: 'Led design-system work and product UI for fintech and wellness clients.' },
  { year: '2020 — 2022', role: 'Full-Stack Engineer', company: 'Greenfield Labs', body: 'Shipped React + Node / Python services across e-commerce and SaaS products.' },
  { year: '2018 — 2020', role: 'UI Developer', company: 'Northpine', body: 'Built component libraries, marketing sites, and CMS-driven storefronts.' },
];

const About = () => {
  return (
    <div data-testid="about-page">
      <PageHeader
        eyebrow="About"
        title={<>Hi, I&rsquo;m Indira — building <span className="italic text-[#607851]">calm</span>, considered software.</>}
        description="I&rsquo;m a full-stack &amp; UI developer based between products and people. For 6+ years I&rsquo;ve helped startups, agencies, and design-led teams turn ambitious briefs into resilient, beautiful interfaces."
      >
        <Button to="/portfolio" testId="about-cta-portfolio">See my work</Button>
        <Button to="/contact" variant="secondary" testId="about-cta-contact">Get in touch</Button>
      </PageHeader>

      {/* Bio + portrait */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#B8C9B0]/70 to-[#7E9568]/30 blur-xl" />
              <div className="relative rounded-3xl overflow-hidden border border-[#E7EEDF]">
                <img
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80&auto=format&fit=crop"
                  alt="Workspace with plants and notebook"
                  className="w-full h-[520px] object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#FAF8F3] border border-[#E7EEDF] rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#607851]">Based in</p>
                <p className="font-serif text-base text-[#2C3A2A]">Bengaluru · Remote</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <SectionHeader
              eyebrow="My story"
              title={<>Code as a craft, <span className="italic text-[#607851]">design as care.</span></>}
            />
            <div className="mt-6 space-y-5 text-[16.5px] leading-relaxed text-[#4A5D43]/85">
              <p>
                I started as a designer who learned to ship, then became an engineer who never stopped designing. Today I work across the stack — from API contracts and database schemas to the last 4px of padding on a button.
              </p>
              <p>
                I love the quiet parts: empty states, error messages, loading skeletons, accessibility nuance. I think those details are where products become trustworthy.
              </p>
              <p>
                When I&rsquo;m not coding, you&rsquo;ll find me sketching, reading slow books, or tending to a too-large collection of houseplants.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                ['6+', 'Years experience'],
                ['40+', 'Shipped projects'],
                ['98%', 'Client retention'],
                ['12', 'Open-source repos'],
              ].map(([k, v]) => (
                <div key={v} className="border-t border-[#9CAF88]/40 pt-4">
                  <p className="font-serif text-3xl text-[#2C3A2A]">{k}</p>
                  <p className="text-sm text-[#4A5D43]/75 mt-1">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F2EDE0] border-y border-[#E7EEDF]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 reveal">
          <SectionHeader
            eyebrow="Principles"
            title={<>Four ideas that <span className="italic text-[#607851]">guide</span> the work.</>}
            description="I keep these close on every project — they help me say no to the right things and yes to the meaningful ones."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <Card key={v.title} className="!p-7">
                <div className="w-11 h-11 rounded-full bg-[#E7EEDF] text-[#4A5D43] flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="mt-5 font-serif text-xl text-[#2C3A2A]">{v.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#4A5D43]/80">{v.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 reveal">
        <SectionHeader
          eyebrow="Experience"
          title={<>A short, honest <span className="italic text-[#607851]">timeline.</span></>}
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 hidden md:block">
            <div className="sticky top-32">
              <div className="rounded-2xl border border-[#E7EEDF] bg-white p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-[#607851] mb-3">Currently</p>
                <p className="font-serif text-xl text-[#2C3A2A]">Independent practice</p>
                <p className="mt-2 text-sm text-[#4A5D43]/80">Available for select Q3 collaborations.</p>
              </div>
            </div>
          </div>
          <ol className="md:col-span-8 relative border-l border-[#9CAF88]/50 pl-7 space-y-10">
            {experience.map((e) => (
              <li key={e.year} className="relative">
                <span className="absolute -left-[35px] top-1.5 w-3 h-3 rounded-full bg-[#7E9568] ring-4 ring-[#FAF8F3]" />
                <p className="text-xs uppercase tracking-[0.22em] text-[#607851]">{e.year}</p>
                <h3 className="mt-2 font-serif text-2xl text-[#2C3A2A]">{e.role}</h3>
                <p className="mt-1 text-sm text-[#4A5D43]/80">{e.company}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-[#4A5D43]/85 max-w-2xl">{e.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24 md:pb-32 reveal">
        <SectionHeader
          eyebrow="Toolkit"
          title={<>The tools I <span className="italic text-[#607851]">reach for.</span></>}
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { t: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Radix UI'] },
            { t: 'Backend', items: ['Node.js', 'FastAPI', 'Python', 'REST', 'GraphQL', 'Auth / OAuth'] },
            { t: 'Design & ops', items: ['Figma', 'Design systems', 'MongoDB', 'PostgreSQL', 'AWS / Vercel', 'Testing & a11y'] },
          ].map((g) => (
            <Card key={g.t}>
              <p className="text-xs uppercase tracking-[0.22em] text-[#607851]">{g.t}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="px-3 py-1.5 rounded-full text-sm bg-[#E7EEDF] text-[#4A5D43] border border-[#D3DEC6]">
                    {i}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
