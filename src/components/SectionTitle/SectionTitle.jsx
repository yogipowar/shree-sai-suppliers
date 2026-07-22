import './SectionTitle.css';

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) => {
  return (
    <div
      className={`section-title section-title--${align} ${light ? 'section-title--light' : ''} ${className}`.trim()}
    >
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
