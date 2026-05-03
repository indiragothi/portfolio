import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const variants = {
  primary:
    'bg-[#4A5D43] hover:bg-[#364030] text-[#FAF8F3] border border-transparent',
  secondary:
    'bg-transparent hover:bg-[#E7EEDF] text-[#4A5D43] border border-[#9CAF88]',
  ghost:
    'bg-transparent hover:bg-[#E7EEDF] text-[#4A5D43] border border-transparent',
  light:
    'bg-[#FAF8F3] hover:bg-white text-[#2C3A2A] border border-[#E7EEDF]',
};

const sizes = {
  sm: 'px-4 py-2 text-[13px]',
  md: 'px-5 py-2.5 text-[14px]',
  lg: 'px-7 py-3.5 text-[15px]',
};

const Button = ({
  to,
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  type = 'button',
  testId,
  ...rest
}) => {
  const cls = `btn-shine inline-flex items-center gap-2 rounded-full tracking-wide transition-colors ${variants[variant]} ${sizes[size]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight className="w-4 h-4" />}
    </>
  );
  if (to) return <Link to={to} className={cls} data-testid={testId} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} data-testid={testId} {...rest}>{inner}</a>;
  return (
    <button type={type} onClick={onClick} className={cls} data-testid={testId} {...rest}>
      {inner}
    </button>
  );
};

export default Button;
