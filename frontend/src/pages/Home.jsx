import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Code2,
  Layers,
  Sparkles,
  Star,
  Quote,
} from 'lucide-react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';

const stats = [
  { k: '6+', v: 'Years crafting' },
  { k: '40+', v: 'Projects shipped' },
  { k: '20+', v: 'Happy clients' },
  { k: '15+', v: 'Tech & tools' },
];

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Full-Stack Development',
    body: 'End-to-end web apps with React, FastAPI/Node, and MongoDB / Postgres — calm interfaces over solid systems.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'UI Engineering',
    body: 'Design systems, micro-interactions, accessibility, and pixel-perfect implementation that respects your brand.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Product Design',
    body: 'From low-fidelity flows to high-fidelity Figma boards — designing for clarity, intent, and delight.',
  },
];

const stack = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'FastAPI',
  'Python', 'MongoDB', 'PostgreSQL', 'Figma', 'Framer Motion', 'AWS',
];

const Home = () => {
  return (
    <div data-testid="home-page">
      {/* Hero */}
      <section className="relative overflow-hidden grain">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E7EEDF] via-[#F2EDE0] to-[#FAF8F3]" />
        <div className="absolute -top-20 -right-32 w-[520px] h-[520px] rounded-full bg-[#B8C9B0]/50 blur-3xl float-slow" />
        <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-[#9CAF88]/40 blur-3xl float-slower" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.22em] text-[#607851] mb-6">
                <span className="inline-block w-6 h-px align-middle bg-[#9CAF88] mr-3" />
                Portfolio &middot; Indira Gothi
              </p>
              <h1 className="font-serif text-[44px] sm:text-[60px] lg:text-[84px] leading-[0.98] tracking-[-0.02em] text-[#2C3A2A]">
                Soft systems,
                <br />
                <span className="italic text-[#607851]">sharp&nbsp;interfaces.</span>
              </h1>
              <p className="mt-7 text-[17px] md:text-[19px] leading-relaxed text-[#4A5D43]/85 max-w-xl">
                Hi, I&rsquo;m Indira — a full-stack &amp; UI developer building considered, calm digital products. I help teams ship interfaces that feel as good as they work.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/portfolio" size="lg" testId="hero-cta-portfolio">
                  View selected work
                </Button>
                <Button to="/contact" size="lg" variant="secondary" testId="hero-cta-contact">
                  Start a project
                </Button>
              </div>

              <div className="mt-12 flex items-center gap-5 text-[#4A5D43]/80">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-[#FAF8F3]"
                      style={{
                        background: [
                          '#B8C9B0',
                          '#9CAF88',
                          '#7E9568',
                          '#D3DEC6',
                        ][i],
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#4A5D43]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#7E9568] stroke-[#7E9568]" />
                    ))}
                    <span className="ml-2 text-sm">5.0 average</span>
                  </div>
                  <p className="text-xs mt-0.5">Trusted by founders &amp; design-led teams</p>
                </div>
              </div>
            </div>

            {/* Right side portrait */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Soft sage backdrop blob */}
                <div className="absolute -inset-6 -z-10 rounded-[48%_52%_42%_58%/55%_45%_55%_45%] bg-gradient-to-br from-[#B8C9B0]/70 to-[#7E9568]/50 blur-[2px]" />
                <div className="absolute -right-6 top-10 -z-10 w-40 h-40 rounded-full bg-[#9CAF88]/40 blur-2xl float-slow" />

                {/* Portrait frame */}
                <div className="relative overflow-hidden rounded-[42%_58%_44%_56%/52%_48%_52%_48%] border border-[#E7EEDF] shadow-[0_30px_80px_-30px_rgba(74,93,67,0.45)] bg-[#E7EEDF]">
                  <img
                    src="https://customer-assets.emergentagent.com/job_indira-fullstack/artifacts/efq1lu2c_indira-iigg.jpg"
                    alt="Indira Gothi"
                    className="w-full h-[520px] md:h-[600px] object-cover object-top"
                  />
                </div>

                {/* Floating availability badge */}
                <div className="absolute -bottom-5 left-4 md:-left-6 bg-[#FAF8F3] border border-[#E7EEDF] rounded-2xl pl-4 pr-5 py-3 shadow-xl flex items-center gap-3">
                  <span className="relative flex w-2.5 h-2.5">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-[#7E9568] opacity-60 animate-ping" />
                    <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[#7E9568]" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#607851]">Now</p>
                    <p className="font-serif text-[15px] text-[#2C3A2A]">Taking Q3 bookings</p>
                  </div>
                </div>

                {/* Floating role chip */}
                <div className="hidden md:flex absolute -top-4 -right-4 items-center gap-2 rounded-full bg-[#2C3A2A] text-[#E7EEDF] px-4 py-2 shadow-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9CAF88]" />
                  <span className="text-[11px] uppercase tracking-[0.18em]">Full-Stack &middot; UI</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
            {stats.map((s) => (
              <div key={s.v} className="border-t border-[#9CAF88]/40 pt-5">
                <p className="font-serif text-3xl md:text-4xl text-[#2C3A2A]">{s.k}</p>
                <p className="mt-1 text-sm text-[#4A5D43]/75">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee tech */}
      <section className="py-10 border-y border-[#E7EEDF] bg-[#FDFCF8] overflow-hidden">
        <div className="marquee whitespace-nowrap text-[#4A5D43]/70 font-serif text-2xl">
          {[...stack, ...stack].map((t, i) => (
            <span key={i} className="flex items-center gap-3">
              {t}
              <span className="w-1.5 h-1.5 rounded-full bg-[#9CAF88]" />
            </span>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 reveal">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow="What I do"
            title={<>Three disciplines, <br /><span className="italic text-[#607851]">one craft.</span></>}
            description="I sit at the intersection of engineering and design — building products that are technically robust and visually quiet."
          />
          <Button to="/services" variant="secondary" testId="home-services-cta">All services</Button>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title}>
              <div className="w-12 h-12 rounded-full bg-[#E7EEDF] text-[#4A5D43] flex items-center justify-center">
                {s.icon}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#2C3A2A]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#4A5D43]/80">{s.body}</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-[#4A5D43] link-underline text-sm">
                Read more <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="bg-[#F2EDE0] border-y border-[#E7EEDF]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 reveal">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeader
              eyebrow="Selected work"
              title={<>Calm products, <span className="italic text-[#607851]">measurable impact.</span></>}
            />
            <Button to="/portfolio" variant="secondary" testId="home-portfolio-cta">View all projects</Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Verda — Wellness Studio',
                tag: 'Full-Stack · UI',
                img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&q=80&auto=format&fit=crop',
              },
              {
                title: 'Mossbank — Banking UX',
                tag: 'UI · Design system',
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
              },
            ].map((p) => (
              <Link to="/portfolio" key={p.title} className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-[#E7EEDF] bg-white">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-[320px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#FAF8F3]/90 backdrop-blur text-xs text-[#4A5D43]">
                    {p.tag}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <h3 className="font-serif text-2xl text-[#2C3A2A]">{p.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-[#4A5D43] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial preview */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Kind words"
              title={<>What partners <span className="italic text-[#607851]">say.</span></>}
              description="A small selection of feedback from founders, designers, and product leads I&rsquo;ve worked with."
            />
            <div className="mt-8">
              <Button to="/testimonials" variant="secondary" testId="home-testimonials-cta">All testimonials</Button>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Indira pairs a designer’s eye with an engineer’s discipline. Our app finally feels effortless.',
                a: 'Maya R.',
                r: 'Founder, Verda',
              },
              {
                q: 'Reliable, calm, and incredibly thoughtful with edge cases. A rare combination.',
                a: 'Daniel K.',
                r: 'Head of Product, Mossbank',
              },
            ].map((t) => (
              <Card key={t.a}>
                <Quote className="w-6 h-6 text-[#9CAF88]" />
                <p className="mt-4 font-serif text-[20px] leading-snug text-[#2C3A2A]">
                  &ldquo;{t.q}&rdquo;
                </p>
                <p className="mt-6 text-sm text-[#4A5D43]">{t.a} <span className="text-[#4A5D43]/60">· {t.r}</span></p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-3xl bg-[#2C3A2A] text-[#FAF8F3] p-10 md:p-16">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#9CAF88]/30 blur-3xl float-slow" />
          <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-[#7E9568]/25 blur-3xl float-slower" />
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.22em] text-[#9CAF88] mb-4">Let&rsquo;s collaborate</p>
              <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight">
                Have a product in mind? <span className="italic text-[#B8C9B0]">Let&rsquo;s build it, gently.</span>
              </h3>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Button to="/contact" variant="light" size="lg" testId="home-final-cta">
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
