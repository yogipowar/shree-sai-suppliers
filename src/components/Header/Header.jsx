import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, HardHat } from 'lucide-react';
import { businessInfo, navLinks } from '../../constants/business';
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label={`${businessInfo.name} home`}>
          <span className="header__logo-icon" aria-hidden="true">
            <HardHat size={28} strokeWidth={2} />
          </span>
          <span className="header__logo-text">
            <span className="header__logo-name">{businessInfo.name}</span>
            <span className="header__logo-tag">Construction Materials</span>
          </span>
        </Link>

        <nav className="header__nav" aria-label="Primary">
          <ul className="header__nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a
            href={businessInfo.tollFreeTel}
            className="header__phone"
            aria-label={`Call ${businessInfo.tollFree}`}
          >
            <Phone size={18} aria-hidden="true" />
            <span>{businessInfo.tollFree}</span>
          </a>
          <Button to="/contact" variant="primary" size="sm" className="header__cta">
            Get a Quote
          </Button>
          <button
            type="button"
            className="header__menu-btn"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div
        className={`header__drawer-overlay ${menuOpen ? 'header__drawer-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`header__drawer ${menuOpen ? 'header__drawer--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="header__drawer-top">
          <span className="header__drawer-title">{businessInfo.name}</span>
          <button
            type="button"
            className="header__drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav>
          <ul className="header__drawer-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `header__drawer-link ${isActive ? 'header__drawer-link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__drawer-footer">
          <a href={businessInfo.tollFreeTel} className="header__drawer-phone">
            <Phone size={18} />
            {businessInfo.tollFree}
          </a>
          <Button to="/contact" variant="primary" size="md">
            Get a Quote
          </Button>
        </div>
      </aside>
    </header>
  );
};

export default Header;
