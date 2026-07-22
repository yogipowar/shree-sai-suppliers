import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { businessInfo, navLinks } from '../../constants/business';
import './Footer.css';

const popularMaterials = [
  { label: 'Crusher Material', path: '/materials' },
  { label: 'Aggregate', path: '/materials' },
  { label: 'Sand', path: '/materials' },
  { label: 'Cement', path: '/materials' },
  { label: 'GSB', path: '/materials' },
  { label: 'Bricks', path: '/materials' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__main">
        <div className="footer__brand">
          <h3 className="footer__brand-name">{businessInfo.name}</h3>
          <p className="footer__brand-desc">
            Quality construction material supplier providing reliable materials
            and service for construction projects.
          </p>
          <p className="footer__gstin">
            <span>GSTIN:</span> {businessInfo.gstin}
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Popular Materials</h4>
          <ul className="footer__links">
            {popularMaterials.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact-list">
            <li>
              <Phone size={16} aria-hidden="true" />
              <div>
                <a href={businessInfo.tollFreeTel}>{businessInfo.tollFree}</a>
                <a href={businessInfo.phoneTel}>{businessInfo.phone}</a>
              </div>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={businessInfo.emailMailto}>{businessInfo.email}</a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <address>{businessInfo.address.full}</address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 {businessInfo.name}. All Rights Reserved.</p>
          <p className="footer__hours">{businessInfo.hours}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
