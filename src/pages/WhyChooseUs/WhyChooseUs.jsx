import { Link } from 'react-router-dom';
import {
  BadgeCheck,
  Truck,
  Clock,
  CircleDollarSign,
  Boxes,
  Headphones,
  ShieldCheck,
} from 'lucide-react';
import { whyChooseUs, howItWorks } from '../../data/services';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CTASection from '../../components/CTASection/CTASection';
import Button from '../../components/Button/Button';
import './WhyChooseUs.css';

const icons = {
  quality: BadgeCheck,
  reliable: Truck,
  timely: Clock,
  pricing: CircleDollarSign,
  range: Boxes,
  availability: Headphones,
};

const WhyChooseUs = () => {
  return (
    <div className="why-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Why Choose Us</span>
          </div>
          <h1>Why Choose Shree Sai Suppliers?</h1>
          <p>
            Quality materials, reliable supply, and professional service for
            construction projects across Maharashtra.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Strengths"
            title="Built for Construction Project Needs"
            subtitle="We focus on what matters most to builders, contractors, and developers."
          />
          <div className="why-page-grid">
            {whyChooseUs.map((item) => {
              const Icon = icons[item.id] || ShieldCheck;
              return (
                <article key={item.id} className="why-page-card">
                  <div className="why-page-card__icon" aria-hidden="true">
                    <Icon size={28} strokeWidth={1.75} />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionTitle
            eyebrow="Simple Process"
            title="From Enquiry to Delivery"
            subtitle="A clear process designed for fast response and reliable material supply."
          />
          <ol className="why-process">
            {howItWorks.map((step) => (
              <li key={step.step} className="why-process__item">
                <span className="why-process__num" aria-hidden="true">
                  {String(step.step).padStart(2, '0')}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="section-cta">
            <Button to="/contact" variant="primary" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default WhyChooseUs;
