import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { businessInfo } from '../../constants/business';
import { materials } from '../../data/materials';
import Button from '../Button/Button';
import './ContactForm.css';

const initialForm = {
  fullName: '',
  mobile: '',
  email: '',
  company: '',
  material: '',
  quantity: '',
  message: '',
};

const ContactForm = ({
  title = 'Send Enquiry',
  initialMaterial = '',
  idPrefix = 'contact',
}) => {
  const [form, setForm] = useState({
    ...initialForm,
    material: initialMaterial || '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialMaterial) {
      setForm((prev) => ({ ...prev, material: initialMaterial }));
    }
  }, [initialMaterial]);

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = 'Full name is required.';
    if (!form.mobile.trim()) {
      next.mobile = 'Mobile number is required.';
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.replace(/\s+/g, ''))) {
      next.mobile = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!form.material.trim()) {
      next.material = 'Please select or enter material required.';
    }
    if (!form.message.trim()) next.message = 'Please add a short message.';
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    setForm({ ...initialForm, material: initialMaterial || '' });
  };

  const fieldId = (name) => `${idPrefix}-${name}`;

  return (
    <div className="contact-form-wrap">
      {title && <h2 className="contact-form-wrap__title">{title}</h2>}

      {submitted ? (
        <div className="contact-success" role="status">
          <CheckCircle2 size={40} aria-hidden="true" />
          <h3>Enquiry Received</h3>
          <p>
            Thank you for contacting {businessInfo.name}. We will get back to
            you shortly regarding your requirements.
          </p>
          <Button
            type="button"
            variant="outline-dark"
            size="md"
            onClick={() => setSubmitted(false)}
          >
            Send Another Enquiry
          </Button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__row">
            <div className="form-field">
              <label htmlFor={fieldId('fullName')}>Full Name *</label>
              <input
                id={fieldId('fullName')}
                name="fullName"
                type="text"
                value={form.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.fullName && (
                <span className="form-error">{errors.fullName}</span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor={fieldId('mobile')}>Mobile Number *</label>
              <input
                id={fieldId('mobile')}
                name="mobile"
                type="tel"
                value={form.mobile}
                onChange={handleChange}
                autoComplete="tel"
                placeholder="10-digit mobile"
              />
              {errors.mobile && (
                <span className="form-error">{errors.mobile}</span>
              )}
            </div>
          </div>

          <div className="contact-form__row">
            <div className="form-field">
              <label htmlFor={fieldId('email')}>Email</label>
              <input
                id={fieldId('email')}
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && (
                <span className="form-error">{errors.email}</span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor={fieldId('company')}>Company Name</label>
              <input
                id={fieldId('company')}
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                autoComplete="organization"
              />
            </div>
          </div>

          <div className="contact-form__row">
            <div className="form-field">
              <label htmlFor={fieldId('material')}>Material Required *</label>
              <select
                id={fieldId('material')}
                name="material"
                value={form.material}
                onChange={handleChange}
              >
                <option value="">Select material</option>
                {materials.map((m) => (
                  <option key={m.id} value={m.name}>
                    {m.name}
                  </option>
                ))}
                <option value="Other / Mixed">Other / Mixed</option>
              </select>
              {errors.material && (
                <span className="form-error">{errors.material}</span>
              )}
            </div>
            <div className="form-field">
              <label htmlFor={fieldId('quantity')}>Quantity Required</label>
              <input
                id={fieldId('quantity')}
                name="quantity"
                type="text"
                value={form.quantity}
                onChange={handleChange}
                placeholder="e.g. 20 brass / 50 tons"
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor={fieldId('message')}>Message *</label>
            <textarea
              id={fieldId('message')}
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project or delivery location..."
            />
            {errors.message && (
              <span className="form-error">{errors.message}</span>
            )}
          </div>

          <Button type="submit" variant="primary" size="lg">
            Send Enquiry
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
