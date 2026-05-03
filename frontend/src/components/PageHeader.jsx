const PageHeader = ({ eyebrow, title, description, children }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E7EEDF] via-[#F2EDE0] to-[#FAF8F3] grain border-b border-[#E7EEDF]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28 relative">
        <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[#B8C9B0]/40 blur-3xl float-slow pointer-events-none" />
        <div className="absolute -bottom-16 -left-10 w-80 h-80 rounded-full bg-[#9CAF88]/30 blur-3xl float-slower pointer-events-none" />

        <div className="relative max-w-3xl">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.22em] text-[#607851] mb-5">
              <span className="inline-block w-6 h-px align-middle bg-[#9CAF88] mr-3" />
              {eyebrow}
            </p>
          )}
          <h1 className="font-serif text-[40px] md:text-[64px] leading-[1.02] tracking-tight text-[#2C3A2A]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-[17px] md:text-[19px] text-[#4A5D43]/85 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
