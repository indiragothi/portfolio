const Card = ({ children, className = '', as: Tag = 'div', ...rest }) => {
  return (
    <Tag
      className={`hover-lift bg-white rounded-2xl border border-[#E7EEDF] p-6 md:p-8 shadow-[0_1px_0_rgba(74,93,67,0.04)] hover:shadow-[0_18px_50px_-20px_rgba(74,93,67,0.18)] hover:border-[#B8C9B0] ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Card;
