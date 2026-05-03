import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Logo from '@/components/Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F3]/85 backdrop-blur-md border-b border-[#E7EEDF]'
          : 'bg-[#FAF8F3] border-b border-transparent'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Logo size={38} />

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                data-testid={`nav-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-[14px] tracking-wide link-underline transition-colors ${
                    isActive ? 'text-[#4A5D43] font-medium' : 'text-[#4A5D43]/70 hover:text-[#4A5D43]'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/contact"
              data-testid="nav-cta"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#4A5D43] hover:bg-[#364030] text-[#FAF8F3] text-[13px] tracking-wide px-5 py-2.5 transition-colors"
            >
              Let&rsquo;s Talk
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#D3DEC6] text-[#4A5D43] hover:bg-[#E7EEDF] transition"
            aria-label="Toggle menu"
            data-testid="nav-toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#FAF8F3] transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="px-6 py-8 flex flex-col gap-2">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `font-serif text-3xl py-3 border-b border-[#E7EEDF] transition-colors ${
                  isActive ? 'text-[#4A5D43]' : 'text-[#4A5D43]/70'
                }`
              }
              style={{ animation: open ? `pageFade 0.5s ${i * 60}ms both` : 'none' }}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#4A5D43] text-[#FAF8F3] py-4 text-base"
            data-testid="mobile-nav-cta"
          >
            Let&rsquo;s Talk <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
