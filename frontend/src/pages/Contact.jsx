import { useState } from 'react';
import { Mail, MapPin, Clock, Linkedin, Github, Twitter, Check, Loader2, AlertCircle } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Card from '@/components/Card';

const budgets = ['< $5k', '$5k – $15k', '$15k – $40k', '$40k+'];
const services = ['Full-Stack', 'UI Engineering', 'Product Design', 'Design System', 'Audit / Consulting'];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Full-Stack',
    budget: '$5k – $15k',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email.';
    if (form.message.trim().length < 10) return 'Tell me a bit more about the project (10+ chars).';
    return '';
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      setStatus('error');
      return;
    }
    setStatus('loading');
    setError('');
    // Simulate submission (no backend integration requested)
    await new Promise((r) => setTimeout(r, 900));
    setStatus('success');
    setForm({
      name: '',
      email: '',
      company: '',
      service: 'Full-Stack',
      budget: '$5k – $15k',
      message: '',
    });
  };

  return (
    <div data-testid="contact-page">
      <PageHeader
        eyebrow="Contact"
        title={<>Let&rsquo;s start a <span className="italic text-[#607851]">quiet conversation.</span></>}
        description="Tell me about your project, your team, and where you&rsquo;d like to be in three months. I usually reply within one business day."
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form */}
          <Card className="lg:col-span-8 !p-8 md:!p-10" as="div">
            <form onSubmit={onSubmit} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Your name" required>
                  <input
                    data-testid="input-name"
                    value={form.name}
                    onChange={update('name')}
                    type="text"
                    placeholder="Indira Gothi"
                    className="input"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    data-testid="input-email"
                    value={form.email}
                    onChange={update('email')}
                    type="email"
                    placeholder="hello@yourcompany.com"
                    className="input"
                  />
                </Field>
              </div>

              <Field label="Company (optional)">
                <input
                  data-testid="input-company"
                  value={form.company}
                  onChange={update('company')}
                  type="text"
                  placeholder="Your studio or team"
                  className="input"
                />
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Service">
                  <select
                    data-testid="input-service"
                    value={form.service}
                    onChange={update('service')}
                    className="input"
                  >
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Budget">
                  <select
                    data-testid="input-budget"
                    value={form.budget}
                    onChange={update('budget')}
                    className="input"
                  >
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Tell me about the project" required>
                <textarea
                  data-testid="input-message"
                  value={form.message}
                  onChange={update('message')}
                  rows={6}
                  placeholder="Goals, audience, timelines, links to anything you love or are inspired by..."
                  className="input resize-none"
                />
              </Field>

              {status === 'error' && error && (
                <div className="flex items-start gap-3 rounded-xl bg-[#FBEAEA] border border-[#E7B8B8] p-4 text-sm text-[#7A2E2E]">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {status === 'success' && (
                <div
                  className="flex items-start gap-3 rounded-xl bg-[#E7EEDF] border border-[#B8C9B0] p-4 text-sm text-[#2C3A2A]"
                  data-testid="contact-success"
                >
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#4A5D43]" />
                  <span>Thank you — your message has landed. I&rsquo;ll be in touch within one business day.</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <p className="text-xs text-[#4A5D43]/70">
                  By submitting you agree to be contacted about your enquiry. No newsletters, ever.
                </p>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  data-testid="contact-submit"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-[#4A5D43] hover:bg-[#364030] disabled:opacity-70 text-[#FAF8F3] px-7 py-3.5 text-[15px] tracking-wide transition"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Sending
                    </>
                  ) : (
                    <>Send message</>
                  )}
                </button>
              </div>
            </form>

            <style>{`
              .input {
                width: 100%;
                background: #FDFCF8;
                border: 1px solid #D3DEC6;
                color: #2C3A2A;
                border-radius: 12px;
                padding: 0.85rem 1rem;
                font-size: 14.5px;
                outline: none;
                transition: border-color .25s ease, box-shadow .25s ease, background .25s ease;
              }
              .input:focus {
                border-color: #7E9568;
                box-shadow: 0 0 0 4px rgba(126,149,104,0.15);
                background: #fff;
              }
              .input::placeholder { color: #4A5D43; opacity: 0.45; }
            `}</style>
          </Card>

          {/* Side info */}
          <div className="lg:col-span-4 space-y-5">
            <Card>
              <p className="text-xs uppercase tracking-[0.22em] text-[#607851]">Direct lines</p>
              <ul className="mt-5 space-y-4 text-[15px]">
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-1 text-[#4A5D43]" />
                  <a href="mailto:hello@indiragothi.dev" className="text-[#2C3A2A] hover:text-[#4A5D43] link-underline">
                    hello@indiragothi.dev
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-[#4A5D43]" />
                  <span className="text-[#2C3A2A]">Bengaluru, India · Remote-friendly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-1 text-[#4A5D43]" />
                  <span className="text-[#2C3A2A]">Mon – Fri · IST 9:30 – 18:00</span>
                </li>
              </ul>
            </Card>

            <Card>
              <p className="text-xs uppercase tracking-[0.22em] text-[#607851]">Elsewhere</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { i: <Linkedin className="w-4 h-4" />, l: 'LinkedIn' },
                  { i: <Github className="w-4 h-4" />, l: 'GitHub' },
                  { i: <Twitter className="w-4 h-4" />, l: 'Twitter' },
                ].map((s) => (
                  <a
                    key={s.l}
                    href="#"
                    className="flex flex-col items-center gap-2 rounded-xl border border-[#E7EEDF] py-4 text-[#4A5D43] hover:bg-[#E7EEDF] transition"
                  >
                    {s.i}
                    <span className="text-xs">{s.l}</span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="!bg-[#2C3A2A] !border-[#2C3A2A] text-[#E7EEDF]">
              <p className="text-xs uppercase tracking-[0.22em] text-[#9CAF88]">Quick note</p>
              <p className="mt-3 font-serif text-xl text-[#FAF8F3] leading-snug">
                I take on a small number of projects each quarter to keep the work calm and considered.
              </p>
              <p className="mt-3 text-sm text-[#B8C9B0]/90">
                Currently booking from <span className="text-[#FAF8F3]">August</span> onward.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, required, children }) => (
  <label className="block">
    <span className="block text-[12px] uppercase tracking-[0.2em] text-[#607851] mb-2">
      {label}{required && <span className="text-[#7E9568]"> *</span>}
    </span>
    {children}
  </label>
);

export default Contact;
