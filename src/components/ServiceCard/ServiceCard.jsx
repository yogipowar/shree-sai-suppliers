import { ArrowRight } from 'lucide-react';
import Button from '../Button/Button';
import './ServiceCard.css';

const ServiceCard = ({ service, icon: Icon }) => {
  if (!service) return null;

  return (
    <article className="service-card">
      {Icon && (
        <div className="service-card__icon" aria-hidden="true">
          <Icon size={28} strokeWidth={1.75} />
        </div>
      )}
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">
        {service.shortDescription || service.description}
      </p>
      <Button to="/contact" variant="outline-dark" size="sm" className="service-card__btn">
        Enquire Now <ArrowRight size={16} aria-hidden="true" />
      </Button>
    </article>
  );
};

export default ServiceCard;
