import { Quote, Star } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Card from '@/components/Card';
import Button from '@/components/Button';

const testimonials = [
  {
    q: 'Indira pairs a designer’s eye with an engineer’s discipline. Our app finally feels effortless to use — and our team is faster shipping changes too.',
    a: 'Maya Reddy',
    r: 'Founder, Verda',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop',
  },
  {
    q: 'Reliable, calm, and incredibly thoughtful with edge cases. Indira is the rare full-stack developer who actually cares about the design intent.',
    a: 'Daniel Khoury',
    r: 'Head of Product, Mossbank',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
  },
  {
    q: 'She rebuilt our marketing site in three weeks and our conversion went up 24%. More importantly, the team finally agrees on what \u201cgood\u201d looks like.',
    a: 'Aanya Verma',
    r: 'Marketing Lead, Pinegrove',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop',
  },
  {
    q: 'Working with Indira feels like adding a senior collaborator, not a contractor. Quiet, sharp, and deeply considered.',
    a: 'Owen Park',
    r: 'CTO, Hearth Health',
    img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&q=80&auto=format&fit=crop',
  },
  {
    q: 'A genuine UI craftsperson. Our design system finally has the clarity I always hoped for, and shipping new screens takes a fraction of the time.',
    a: 'Zara Iqbal',
    r: 'Design Director, Atelier Studio',
    img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80&auto=format&fit=crop',
  },
  {
    q: 'Communication is effortless, the work is meticulous. Indira raised the bar for what we expect from external partners.',
    a: 'Rahul Mehta',
    r: 'Engineering Manager, Olive Type',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop',
  },
];

const logos = ['Verda', 'Mossbank', 'Pinegrove', 'Hearth', 'Atelier', 'Olive', 'Linden', 'Greenfield'];

const Testimonials = () => {
  return (
    <div data-testid="testimonials-page">
      <PageHeader
        eyebrow="Testimonials"
        title={<>Kind words from <span className="italic text-[#607851]">people I&rsquo;ve worked with.</span></>}
        description="I&rsquo;m grateful for the partners who&rsquo;ve trusted me with their products. Here are a few of their words."
      >
        <Button to="/contact" testId="testimonials-cta-contact">Become the next one</Button>
      </PageHeader>

      {/* Featured testimonial */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-20 reveal">
        <div className="relative rounded-3xl bg-white border border-[#E7EEDF] p-10 md:p-16 overflow-hidden">
          <div className="absolute -top-20 -right-16 w-72 h-72 rounded-full bg-[#B8C9B0]/40 blur-3xl float-slow" />
          <Quote className="w-10 h-10 text-[#9CAF88]" />
          <p className="mt-6 font-serif text-2xl md:text-4xl leading-snug text-[#2C3A2A] max-w-4xl">
            &ldquo;Indira is the rare developer who designs while she builds. The result feels like a single, considered idea — not a stitched-together product.&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80&auto=format&fit=crop"
              alt="Maya Reddy"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#E7EEDF]"
            />
            <div>
              <p className="font-medium text-[#2C3A2A]">Maya Reddy</p>
              <p className="text-sm text-[#4A5D43]/75">Founder, Verda</p>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#7E9568] stroke-[#7E9568]" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 reveal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Card key={t.a} data-testid={`testimonial-${i}`}>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-[#7E9568] stroke-[#7E9568]" />
                ))}
              </div>
              <p className="mt-4 text-[15.5px] leading-relaxed text-[#2C3A2A]">
                &ldquo;{t.q}&rdquo;
              </p>
              <div className="mt-7 flex items-center gap-3">
                <img src={t.img} alt={t.a} className="w-10 h-10 rounded-full object-cover border border-[#E7EEDF]" />
                <div>
                  <p className="text-sm font-medium text-[#2C3A2A]">{t.a}</p>
                  <p className="text-xs text-[#4A5D43]/70">{t.r}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Logos */}
      <section className="bg-[#F2EDE0] border-y border-[#E7EEDF]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 reveal">
          <p className="text-center text-xs uppercase tracking-[0.22em] text-[#607851] mb-8">A few teams I&rsquo;ve been lucky to work with</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {logos.map((l) => (
              <p key={l} className="text-center font-serif text-xl md:text-2xl text-[#4A5D43]/70 hover:text-[#4A5D43] transition">
                {l}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">
        <div className="rounded-3xl bg-[#2C3A2A] text-[#FAF8F3] p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#9CAF88]">Want to be next?</p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl">Let&rsquo;s build something worth talking about.</h3>
          </div>
          <Button to="/contact" variant="light" size="lg" testId="testimonials-final-cta">Start a project</Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
