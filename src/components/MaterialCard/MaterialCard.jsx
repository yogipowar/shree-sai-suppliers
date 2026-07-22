import { ArrowRight } from 'lucide-react';
import Button from '../Button/Button';
import './MaterialCard.css';

const MaterialCard = ({ material, compact = false }) => {
  if (!material) return null;

  return (
    <article className={`material-card ${compact ? 'material-card--compact' : ''}`}>
      <div className="material-card__image-wrap">
        <img
          src={material.image}
          alt={material.name}
          className="material-card__image"
          loading="lazy"
        />
        {material.category && (
          <span className="material-card__category">{material.category}</span>
        )}
      </div>
      <div className="material-card__body">
        <h3 className="material-card__title">{material.name}</h3>
        <p className="material-card__desc">
          {material.shortDescription || material.description}
        </p>
        {material.applications?.length > 0 && (
          <ul className="material-card__apps">
            {material.applications.slice(0, 3).map((app) => (
              <li key={app}>{app}</li>
            ))}
          </ul>
        )}
        <Button
          to={`/contact?material=${encodeURIComponent(material.name)}`}
          variant="outline-dark"
          size="sm"
          className="material-card__btn"
        >
          Get Quote <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </article>
  );
};

export default MaterialCard;
