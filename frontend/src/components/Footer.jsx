import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Dribbble,
  ArrowUpRight,
  ArrowUp,
} from 'lucide-react';

const navLinks = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Testimonials', '/testimonials'],
  ['Contact', '/contact'],
];

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/indiragothi', Icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com/indiragothi', Icon: Twitter },
  { label: 'Instagram', href: 'https://instagram.com/indiragothi', Icon: Instagram },
  { label: 'GitHub', href: 'https://github.com/indiragothi', Icon: Github },
  { label: 'Dribbble', href: 'https://dribbble.com/indiragothi', Icon: Dribbble },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative bg-[#2C3A2A] text-[#E7EEDF] mt-24 overflow-hidden"
      data-testid="footer"
    >
      {/* Soft sage glow accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#7E9568]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#9CAF88]/12 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Headline + email + Start a Project (kept) */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[44px] sm:text-[58px] lg:text-[68px] leading-[0.98] tracking-[-0.01em] text-[#FAF8F3]">
              Let&rsquo;s build
              <br />
              something
              <br />
              <span className="italic text-[#9CAF88]">memorable.</span>
            </h2>

            <a
              href="mailto:hello@indiragothi.com"
              className="mt-10 inline-block font-serif italic text-2xl md:text-[28px] text-[#E7EEDF] hover:text-[#FAF8F3] transition-colors link-underline"
              data-testid="footer-email"
            >
              hello@indiragothi.com
            </a>

            {/* Start a project — kept as-is in behavior */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-[#FAF8F3] border-b border-[#9CAF88]/60 pb-1 hover:border-[#FAF8F3] transition-colors"
                data-testid="footer-cta"
              >
                Start a project
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#9CAF88] mb-7">
              Navigate
            </p>
            <ul className="space-y-5 text-[16px]">
              {navLinks.map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group inline-flex items-center text-[#E7EEDF] hover:text-[#FAF8F3] transition-colors"
                    data-testid={`footer-nav-${label.toLowerCase()}`}
                  >
                    <span className="link-underline">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere — social icons */}
          <div className="lg:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#9CAF88] mb-7">
              Elsewhere
            </p>
            <ul className="space-y-5 text-[16px]">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[#E7EEDF] hover:text-[#FAF8F3] transition-colors"
                    data-testid={`footer-social-${label.toLowerCase()}`}
                  >
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-[#9CAF88] group-hover:text-[#FAF8F3] group-hover:bg-[#FAF8F3]/5 transition-all">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="link-underline">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 h-px bg-[#FAF8F3]/15" />

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-5">
          <p className="text-xs text-[#B8C9B0]/80">
            &copy; {year} Indira Gothi. Crafted with care.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            data-testid="footer-back-to-top"
            aria-label="Back to top"
            className="group self-start md:self-auto inline-flex items-center gap-3 text-[#E7EEDF] hover:text-[#FAF8F3] transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.22em]">Back to top</span>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#9CAF88]/40 group-hover:border-[#FAF8F3] group-hover:bg-[#FAF8F3]/5 transition-all">
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
