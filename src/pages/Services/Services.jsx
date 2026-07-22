import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { services } from '../../data/services';
import Button from '../../components/Button/Button';
import CTASection from '../../components/CTASection/CTASection';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1>Construction Material Supply Services</h1>
          <p>
            Reliable material supply solutions for residential, commercial, and
            infrastructure construction projects.
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          className={`section service-detail ${index % 2 === 1 ? 'section--alt' : ''}`}
          aria-labelledby={`service-${service.id}`}
        >
          <div
            className={`container service-detail__grid ${
              index % 2 === 1 ? 'service-detail__grid--reverse' : ''
            }`}
          >
            <div className="service-detail__media">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
            </div>
            <div className="service-detail__content">
              <h2 id={`service-${service.id}`}>{service.title}</h2>
              <p>{service.description}</p>
              {service.benefits?.length > 0 && (
                <ul className="service-detail__benefits">
                  {service.benefits.map((benefit) => (
                    <li key={benefit}>
                      <Check size={18} aria-hidden="true" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Button to="/contact" variant="primary" size="md">
                Request This Service
              </Button>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </div>
  );
};

export default Services;
