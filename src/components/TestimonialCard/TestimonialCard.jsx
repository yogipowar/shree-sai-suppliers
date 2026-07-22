import { Star } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  return (
    <article className="testimonial-card">
      <div className="testimonial-card__rating" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="testimonial-card__review">
        “{testimonial.review}”
      </blockquote>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar" aria-hidden="true">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="testimonial-card__name">{testimonial.name}</p>
          <p className="testimonial-card__role">
            {testimonial.role}
            {testimonial.company ? `, ${testimonial.company}` : ''}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
