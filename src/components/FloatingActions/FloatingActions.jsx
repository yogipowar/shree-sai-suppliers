import { Phone, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../constants/business';
import './FloatingActions.css';

const FloatingActions = () => {
  return (
    <div className="fab" role="group" aria-label="Quick contact actions">
      <a
        href={businessInfo.whatsappUrl}
        className="fab__btn fab__btn--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="WhatsApp Us"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span className="fab__tooltip">WhatsApp</span>
      </a>
      <a
        href={businessInfo.tollFreeTel}
        className="fab__btn fab__btn--call"
        aria-label={`Call ${businessInfo.tollFree}`}
        title="Call Now"
      >
        <Phone size={22} aria-hidden="true" />
        <span className="fab__tooltip">Call</span>
      </a>
    </div>
  );
};

export default FloatingActions;
