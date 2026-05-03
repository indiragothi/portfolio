import { Link } from 'react-router-dom';

const Logo = ({ size = 40, withText = true }) => {
  return (
    <Link to="/" className="flex items-center gap-3 group" data-testid="logo-link">
      <span
        className="logo-mark inline-flex items-center justify-center rounded-full"
        style={{ width: size, height: size }}
        aria-label="Indira Gothi logo"
      >
        <svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sageGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#B8C9B0" />
              <stop offset="100%" stopColor="#7E9568" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="31" fill="url(#sageGrad)" />
          <circle cx="32" cy="32" r="30" fill="none" stroke="#4A5D43" strokeOpacity="0.18" />
          {/* I */}
          <rect x="19" y="18" width="3" height="28" rx="1.5" fill="#FAF8F3" />
          {/* G */}
          <path
            d="M44 22.5c-2.2-2.4-5.2-3.8-8.6-3.8-6.4 0-11.4 5.6-11.4 13.3s5 13.3 11.4 13.3c5.4 0 9.6-3.8 9.6-10v-2.4h-8"
            fill="none"
            stroke="#FAF8F3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(2 0)"
          />
        </svg>
      </span>
      {withText && (
        <div className="flex flex-col leading-none">
          <span className="font-serif text-[18px] tracking-tight text-[#2C3A2A]">
            Indira Gothi
          </span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-[#607851] mt-1">
            Full-Stack &middot; UI
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
