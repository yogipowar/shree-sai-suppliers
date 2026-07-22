import {
  Phone,
  MessageCircle,
  ArrowRight,
  Package,
  Truck,
  Clock,
  ShieldCheck,
  BadgeCheck,
  Layers,
  CircleDollarSign,
  Boxes,
  Headphones,
  HardHat,
  Building2,
  Route,
  Factory,
  Home as HomeIcon,
  Landmark,
} from 'lucide-react';
import { businessInfo } from '../../constants/business';
import { images } from '../../constants/images';
import { materials } from '../../data/materials';
import {
  services,
  whyChooseUs,
  howItWorks,
  industries,
  trustStats,
} from '../../data/services';
import { testimonials } from '../../data/testimonials';
import Button from '../../components/Button/Button';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MaterialCard from '../../components/MaterialCard/MaterialCard';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import CTASection from '../../components/CTASection/CTASection';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Home.css';

const whyIcons = {
  quality: BadgeCheck,
  reliable: Truck,
  timely: Clock,
  pricing: CircleDollarSign,
  range: Boxes,
  availability: Headphones,
};

const serviceIcons = [Package, Boxes, Layers, Truck, HardHat];

const industryIcons = {
  residential: HomeIcon,
  commercial: Building2,
  road: Route,
  infrastructure: Landmark,
  'real-estate': Building2,
  industrial: Factory,
};

const Home = () => {
  const featuredMaterials = materials.slice(0, 6);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__media" aria-hidden="true">
          <img
            src={images.hero}
            alt="Construction workers at a building site in India"
            className="hero__image"
          />
          <div className="hero__overlay" />
        </div>
        <div className="container hero__content">
          <p className="hero__eyebrow animate-fade-in">{businessInfo.name}</p>
          <h1 id="hero-heading" className="hero__title animate-slide-up">
            {businessInfo.tagline}
          </h1>
          <p className="hero__subtitle animate-slide-up">
            Shree Sai Suppliers provides reliable and high-quality construction
            materials for builders, contractors, developers, and construction
            projects.
          </p>
          <div className="hero__actions animate-slide-up">
            <Button to="/contact" variant="primary" size="lg">
              Get a Quote
            </Button>
            <Button to="/materials" variant="outline" size="lg">
              Explore Materials
            </Button>
          </div>
          <div className="hero__quick-contact animate-slide-up">
            <a href={businessInfo.tollFreeTel} className="hero__quick-link">
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
            <a
              href={businessInfo.whatsappUrl}
              className="hero__quick-link hero__quick-link--wa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="trust-stats" aria-label="Business highlights">
        <div className="container trust-stats__grid">
          {trustStats.map((stat) => (
            <div key={stat.id} className="trust-stats__item">
              <p className="trust-stats__value">{stat.value}</p>
              <p className="trust-stats__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="section about-preview" aria-labelledby="about-preview-heading">
        <div className="container about-preview__grid">
          <div className="about-preview__media">
            <img
              src={images.aboutPreview}
              alt="Construction workers on a building site in India"
              loading="lazy"
            />
          </div>
          <div className="about-preview__content">
            <span className="section-title__eyebrow">About Us</span>
            <h2 id="about-preview-heading">
              Your Reliable Partner for Construction Materials
            </h2>
            <p>
              Shree Sai Suppliers is committed to providing quality construction
              materials with dependable service and reliable supply. We support
              builders, contractors, developers, and businesses with their
              construction material requirements.
            </p>
            <p>
              Based in Chakan, Pune, we serve construction projects across
              Maharashtra with a focus on quality, timely response, and
              professional service.
            </p>
            <Button to="/about" variant="secondary" size="md">
              Know More About Us <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section section--alt" aria-labelledby="materials-heading">
        <div className="container">
          <SectionTitle
            eyebrow="Our Materials"
            title="Quality Materials for Every Construction Need"
            subtitle="From aggregates and sand to cement and bricks — reliable construction materials for your project."
          />
          <div className="materials-grid">
            {featuredMaterials.map((material) => (
              <MaterialCard key={material.id} material={material} />
            ))}
          </div>
          <div className="section-cta">
            <Button to="/materials" variant="secondary" size="lg">
              View All Materials <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container">
          <SectionTitle
            eyebrow="Why Us"
            title="Why Choose Shree Sai Suppliers?"
            subtitle="Built around quality, reliability, and service that construction projects depend on."
          />
          <div className="why-grid">
            {whyChooseUs.map((item) => {
              const Icon = whyIcons[item.id] || ShieldCheck;
              return (
                <article key={item.id} className="why-card">
                  <div className="why-card__icon" aria-hidden="true">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
          <div className="section-cta">
            <Button to="/why-choose-us" variant="outline-dark" size="md">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section--alt" aria-labelledby="services-heading">
        <div className="container">
          <SectionTitle
            eyebrow="Our Services"
            title="Construction Material Supply Services"
            subtitle="Practical supply solutions for builders, contractors, and project teams."
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                icon={serviceIcons[index]}
              />
            ))}
          </div>
          <div className="section-cta">
            <Button to="/services" variant="secondary" size="md">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works" aria-labelledby="process-heading">
        <div className="container">
          <SectionTitle
            eyebrow="Process"
            title="How It Works"
            subtitle="A simple four-step process from enquiry to material delivery."
          />
          <ol className="process-grid">
            {howItWorks.map((step) => (
              <li key={step.step} className="process-card">
                <span className="process-card__number" aria-hidden="true">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className="section section--alt" aria-labelledby="industries-heading">
        <div className="container">
          <SectionTitle
            eyebrow="Industries"
            title="Industries We Serve"
            subtitle="Supporting a wide range of construction and infrastructure segments."
          />
          <div className="industries-grid">
            {industries.map((industry) => {
              const Icon = industryIcons[industry.id] || Building2;
              return (
                <article key={industry.id} className="industry-card">
                  <img
                    src={industry.image}
                    alt=""
                    className="industry-card__image"
                    loading="lazy"
                  />
                  <div className="industry-card__overlay">
                    <Icon size={22} aria-hidden="true" />
                    <h3>{industry.title}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section leadership" aria-labelledby="leadership-heading">
        <div className="container">
          <SectionTitle
            eyebrow="Leadership"
            title="Directors & Management"
            subtitle="Experienced leadership committed to quality supply and customer service."
          />
          <div className="leadership-grid">
            <article className="leader-card">
              <div className="leader-card__photo" aria-hidden="true">
                <span>{businessInfo.founder.charAt(0)}</span>
              </div>
              <h3>{businessInfo.founder}</h3>
              <p className="leader-card__role">{businessInfo.founderTitle}</p>
            </article>
            <article className="leader-card">
              <div className="leader-card__photo" aria-hidden="true">
                <span>{businessInfo.managementDirector.charAt(0)}</span>
              </div>
              <h3>{businessInfo.managementDirector}</h3>
              <p className="leader-card__role">{businessInfo.managementTitle}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--alt" aria-labelledby="testimonials-heading">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonials"
            title="What Our Customers Say"
            subtitle="Feedback from builders, contractors, and project teams we support."
          />
          <div className="testimonials-grid">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section home-contact" aria-labelledby="home-contact-heading">
        <div className="container home-contact__grid">
          <div className="home-contact__intro">
            <SectionTitle
              align="left"
              eyebrow="Get a Quote"
              title="Request Construction Materials"
              subtitle="Share your material requirements and we will respond with pricing and availability details."
            />
            <ul className="home-contact__highlights">
              <li>Quick quotation response</li>
              <li>Reliable material supply</li>
              <li>Available 24×7 for enquiries</li>
            </ul>
            <div className="home-contact__quick">
              <a href={businessInfo.tollFreeTel} className="home-contact__link">
                <Phone size={18} aria-hidden="true" />
                {businessInfo.tollFree}
              </a>
              <a
                href={businessInfo.whatsappUrl}
                className="home-contact__link home-contact__link--wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
          <ContactForm idPrefix="home-contact" title="Send Enquiry" />
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;
