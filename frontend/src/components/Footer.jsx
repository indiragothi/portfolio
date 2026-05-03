import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import Logo from '@/components/Logo';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#2C3A2A] text-[#E7EEDF] mt-24" data-testid="footer">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#9CAF88] text-[#2C3A2A] font-serif font-semibold">IG</span>
              <div>
                <p className="font-serif text-xl text-[#FAF8F3]">Indira Gothi</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#B8C9B0]">Full-Stack &middot; UI</p>
              </div>
            </div>
            <p className="mt-6 text-[#B8C9B0]/90 text-[15px] leading-relaxed max-w-md">
              Crafting calm, considered digital products at the intersection of beautiful interfaces and reliable engineering.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 text-[#FAF8F3] border-b border-[#9CAF88]/60 pb-1 hover:border-[#FAF8F3]"
              data-testid="footer-cta"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9CAF88] mb-4">Navigate</p>
            <ul className="space-y-2.5 text-[15px]">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Services', '/services'],
                ['Portfolio', '/portfolio'],
                ['Testimonials', '/testimonials'],
                ['Contact', '/contact'],
              ].map(([l, h]) => (
                <li key={h}>
                  <Link to={h} className="text-[#E7EEDF]/80 hover:text-[#FAF8F3] transition">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#9CAF88] mb-4">Elsewhere</p>
            <div className="flex flex-col gap-3 text-[15px]">
              <a href="mailto:hello@indiragothi.dev" className="flex items-center gap-3 text-[#E7EEDF]/80 hover:text-[#FAF8F3]">
                <Mail className="w-4 h-4" /> hello@indiragothi.dev
              </a>
              <a href="#" className="flex items-center gap-3 text-[#E7EEDF]/80 hover:text-[#FAF8F3]">
                <Linkedin className="w-4 h-4" /> linkedin.com/in/indiragothi
              </a>
              <a href="#" className="flex items-center gap-3 text-[#E7EEDF]/80 hover:text-[#FAF8F3]">
                <Github className="w-4 h-4" /> github.com/indiragothi
              </a>
              <a href="#" className="flex items-center gap-3 text-[#E7EEDF]/80 hover:text-[#FAF8F3]">
                <Twitter className="w-4 h-4" /> @indiragothi
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#3F503D] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-[#B8C9B0]/80">&copy; {year} Indira Gothi. All rights reserved.</p>
          <p className="text-xs text-[#B8C9B0]/80">Designed &amp; built with care, in soft sage.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
