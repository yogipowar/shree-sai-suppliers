import { Link } from 'react-router-dom';
import { Target, Eye, Heart, ShieldCheck, Truck, Award } from 'lucide-react';
import { businessInfo } from '../../constants/business';
import { images } from '../../constants/images';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import CTASection from '../../components/CTASection/CTASection';
import Button from '../../components/Button/Button';
import './About.css';

const values = [
  {
    icon: Award,
    title: 'Quality',
    description:
      'We prioritize supplying construction materials that meet project expectations for consistency and reliability.',
  },
  {
    icon: Truck,
    title: 'Reliability',
    description:
      'Dependable supply support so your construction schedule stays on track.',
  },
  {
    icon: Heart,
    title: 'Service',
    description:
      'Responsive assistance for enquiries, quotations, and material requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'Transparent communication and professional dealings with every customer.',
  },
];

const About = () => {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1>Building Trust Through Quality and Reliable Supply</h1>
          <p>
            Learn about Shree Sai Suppliers — a construction material supplier
            committed to quality, reliability, and professional service.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-intro">
          <div className="about-intro__media">
            <img
              src={images.aboutPage}
              alt="Construction worker with machinery at an Indian site"
              loading="lazy"
            />
          </div>
          <div className="about-intro__content">
            <span className="section-title__eyebrow">Who We Are</span>
            <h2>Your Partner for Construction Materials</h2>
            <p>
              {businessInfo.name} provides quality construction materials to
              builders, contractors, construction companies, real estate
              developers, infrastructure projects, and individual customers.
            </p>
            <p>
              Based in Chakan, Pune (Maharashtra), we focus on dependable supply
              of crusher material, aggregates, sand, cement, bricks, GSB, and
              other construction materials with professional service and fast
              response.
            </p>
            <ul className="about-intro__meta">
              <li>
                <strong>Category:</strong> {businessInfo.category}
              </li>
              <li>
                <strong>GSTIN:</strong> {businessInfo.gstin}
              </li>
              <li>
                <strong>Availability:</strong> {businessInfo.hours}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container mission-vision">
          <article className="mission-card">
            <div className="mission-card__icon" aria-hidden="true">
              <Target size={28} />
            </div>
            <h2>Our Mission</h2>
            <p>
              To supply quality construction materials with reliable service,
              helping builders and contractors complete projects with confidence
              and consistency.
            </p>
          </article>
          <article className="mission-card">
            <div className="mission-card__icon" aria-hidden="true">
              <Eye size={28} />
            </div>
            <h2>Our Vision</h2>
            <p>
              To be a trusted construction material supplier known for quality,
              timely supply, and professional customer support across
              Maharashtra.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Values"
            title="What Guides Our Work"
            subtitle="The principles behind every enquiry, quotation, and supply commitment."
          />
          <div className="values-grid">
            {values.map((item) => (
              <article key={item.title} className="value-card">
                <div className="value-card__icon" aria-hidden="true">
                  <item.icon size={24} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container commitments">
          <article className="commitment-block">
            <h2>Quality Commitment</h2>
            <p>
              We focus on supplying construction materials suited for residential,
              commercial, and infrastructure applications. Our aim is consistent
              material quality that supports durable construction outcomes.
            </p>
          </article>
          <article className="commitment-block">
            <h2>Reliable Supply Commitment</h2>
            <p>
              Construction timelines depend on material availability. We work to
              provide dependable supply support, clear communication, and quick
              assistance for quotations and project requirements.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Leadership"
            title="Founders & Directors"
            subtitle="The leadership behind Shree Sai Suppliers."
          />
          <div className="about-leaders">
            <article className="about-leader">
              <div className="about-leader__photo" aria-hidden="true">
                <span>{businessInfo.founder.charAt(0)}</span>
              </div>
              <h3>{businessInfo.founder}</h3>
              <p>{businessInfo.founderTitle}</p>
            </article>
            <article className="about-leader">
              <div className="about-leader__photo" aria-hidden="true">
                <span>{businessInfo.managementDirector.charAt(0)}</span>
              </div>
              <h3>{businessInfo.managementDirector}</h3>
              <p>{businessInfo.managementTitle}</p>
            </article>
          </div>
          <div className="section-cta">
            <Button to="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
