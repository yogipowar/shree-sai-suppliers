import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../constants/business';
import Button from '../Button/Button';
import './CTASection.css';

const CTASection = ({
  title = 'Need Quality Construction Materials for Your Project?',
  description = 'Contact Shree Sai Suppliers today for reliable material supply and quick assistance with your construction requirements.',
}) => {
  return (
    <section className="cta-section" aria-labelledby="cta-heading">
      <div className="container cta-section__inner">
        <div className="cta-section__content">
          <h2 id="cta-heading" className="cta-section__title">
            {title}
          </h2>
          <p className="cta-section__desc">{description}</p>
        </div>
        <div className="cta-section__actions">
          <Button to="/contact" variant="primary" size="lg">
            Request a Quote
          </Button>
          <Button
            href={businessInfo.tollFreeTel}
            variant="outline"
            size="lg"
            ariaLabel={`Call ${businessInfo.tollFree}`}
          >
            <Phone size={18} aria-hidden="true" />
            Call Us
          </Button>
          <Button
            href={businessInfo.whatsappUrl}
            variant="whatsapp"
            size="lg"
            external
            ariaLabel="Chat on WhatsApp"
          >
            <MessageCircle size={18} aria-hidden="true" />
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
