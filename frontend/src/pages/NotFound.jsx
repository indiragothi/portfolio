import { Link } from 'react-router-dom';
import Button from '@/components/Button';

const NotFound = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-32 md:py-44 text-center" data-testid="notfound-page">
      <p className="text-xs uppercase tracking-[0.22em] text-[#607851]">404</p>
      <h1 className="mt-4 font-serif text-5xl md:text-7xl text-[#2C3A2A] leading-tight">
        This page took a <span className="italic text-[#607851]">walk in the garden.</span>
      </h1>
      <p className="mt-5 text-[#4A5D43]/80 max-w-xl mx-auto">
        We couldn&rsquo;t find what you were looking for. Let&rsquo;s get you back somewhere familiar.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <Button to="/" testId="notfound-home">Back to home</Button>
        <Link to="/portfolio" className="text-[#4A5D43] link-underline text-sm">Or browse the portfolio</Link>
      </div>
    </section>
  );
};

export default NotFound;
