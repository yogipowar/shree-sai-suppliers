import { Link, useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { businessInfo } from '../../constants/business';
import Button from '../../components/Button/Button';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const materialParam = searchParams.get('material') || '';

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact</span>
          </div>
          <h1>Contact Shree Sai Suppliers</h1>
          <p>
            Request a quotation, share your material requirements, or call us
            for quick assistance — we are available 24×7.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p className="contact-info__intro">
              Reach out by phone, WhatsApp, email, or the enquiry form. We will
              respond with pricing and availability details.
            </p>

            <ul className="contact-info__list">
              <li>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <span className="contact-info__label">Toll Free</span>
                  <a href={businessInfo.tollFreeTel}>{businessInfo.tollFree}</a>
                </div>
              </li>
              <li>
                <Phone size={20} aria-hidden="true" />
                <div>
                  <span className="contact-info__label">Phone</span>
                  <a href={businessInfo.phoneTel}>{businessInfo.phone}</a>
                </div>
              </li>
              <li>
                <Mail size={20} aria-hidden="true" />
                <div>
                  <span className="contact-info__label">Email</span>
                  <a href={businessInfo.emailMailto}>{businessInfo.email}</a>
                </div>
              </li>
              <li>
                <Clock size={20} aria-hidden="true" />
                <div>
                  <span className="contact-info__label">Hours</span>
                  <span>{businessInfo.hours}</span>
                </div>
              </li>
              <li>
                <MapPin size={20} aria-hidden="true" />
                <div>
                  <span className="contact-info__label">Head Office</span>
                  <address>
                    {businessInfo.address.line1}
                    <br />
                    {businessInfo.address.line2}
                    <br />
                    {businessInfo.address.line3}
                    <br />
                    {businessInfo.address.city}, {businessInfo.address.state}{' '}
                    {businessInfo.address.pincode}
                    <br />
                    {businessInfo.address.country}
                  </address>
                </div>
              </li>
            </ul>

            <p className="contact-info__gstin">
              <strong>GSTIN:</strong> {businessInfo.gstin}
            </p>

            <div className="contact-info__actions">
              <Button href={businessInfo.tollFreeTel} variant="secondary" size="md">
                <Phone size={16} aria-hidden="true" /> Call Now
              </Button>
              <Button
                href={businessInfo.whatsappUrl}
                variant="whatsapp"
                size="md"
                external
              >
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp
              </Button>
            </div>
          </div>

          <ContactForm
            initialMaterial={materialParam}
            idPrefix="page-contact"
          />
        </div>
      </section>

      <section className="section section--alt contact-map" aria-label="Office location map">
        <div className="container">
          <h2 className="contact-map__title">Head Office Location</h2>
          <p className="contact-map__address">{businessInfo.address.full}</p>
          <div className="contact-map__frame">
            <iframe
              title="Shree Sai Suppliers Head Office Map"
              src={businessInfo.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
