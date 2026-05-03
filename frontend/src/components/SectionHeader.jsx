const SectionHeader = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.22em] text-[#607851] mb-4">
          <span className="inline-block w-6 h-px align-middle bg-[#9CAF88] mr-3" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-[#2C3A2A]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[#4A5D43]/80 text-[16px] md:text-[17px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
