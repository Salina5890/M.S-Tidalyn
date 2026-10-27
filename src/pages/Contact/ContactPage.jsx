import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Badge from '../../components/common/Badge/Badge';
import {
  Mail,
  MessageSquare,
  CheckCircle2,
  Instagram,
  Linkedin,
  ExternalLink,
  User,
  Building,
  Lock,
  ArrowRight,
  AlertCircle,
  Loader2,
  Tag,
} from 'lucide-react';
import { BRAND } from '../../utils/navigation';
import { SERVICES } from '../../data/servicesData';
import { submitProjectInquiry } from '../../lib/firebase';
import useScrollReveal from '../../utils/useScrollReveal';
import './ContactPage.css';

export function ContactPage() {
  useScrollReveal();
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: serviceParam || 'General Inquiry',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    if (serviceParam) {
      const matched = SERVICES.find((s) => s.id === serviceParam);
      setFormData((prev) => ({
        ...prev,
        subject: matched ? matched.title : serviceParam,
      }));
    }
  }, [serviceParam]);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide at least 10 characters in your message.';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});

    setIsSubmitting(true);

    try {
      await submitProjectInquiry({
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        serviceInterest: formData.subject,
        projectType: 'contact-form-message',
        budgetRange: 'Not applicable',
        message: formData.message,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setSubmitError(
        err.message || 'An unexpected error occurred while sending your message. Please try again or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubmitError(null);
    setFieldErrors({});
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: serviceParam || 'General Inquiry',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <div className="container">
        {/* 1. Contact Page Header */}
        <header className="contact-header reveal-on-scroll">
          <Badge
            variant="subtle"
            className="contact-header__badge"
            icon={<MessageSquare size={14} aria-hidden="true" />}
          >
            Contact Us
          </Badge>
          <h1 className="contact-header__title">Get In Touch</h1>
          <p className="contact-header__lead">
            Have questions about our software development, school portals, or technical capabilities?
            Send us a message or reach out through our official channels.
          </p>
        </header>

        {/* 2. Contact Information Cards (Staggered Entrance, Equal Heights) */}
        <div className="contact-channels-row" role="region" aria-label="Official Contact Channels">
          <a
            href={`mailto:${BRAND.email}`}
            className="contact-channel-item reveal-on-scroll reveal-delay-1"
            title={`Send an email to ${BRAND.email}`}
            aria-label={`Email ${BRAND.email}`}
          >
            <div className="contact-channel-item__icon" aria-hidden="true">
              <Mail size={20} />
            </div>
            <div className="contact-channel-item__content">
              <span className="contact-channel-item__label">Direct Email</span>
              <span className="contact-channel-item__val">{BRAND.email}</span>
            </div>
          </a>

          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-item reveal-on-scroll reveal-delay-2"
            title="Visit our official Instagram profile (opens in new tab)"
            aria-label="Visit our official Instagram profile"
          >
            <div className="contact-channel-item__icon" aria-hidden="true">
              <Instagram size={20} />
            </div>
            <div className="contact-channel-item__content">
              <span className="contact-channel-item__label">Instagram</span>
              <span className="contact-channel-item__val">
                {BRAND.instagramHandle}
                <ExternalLink size={12} className="external-link-icon" aria-hidden="true" />
              </span>
            </div>
          </a>

          <a
            href={BRAND.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel-item reveal-on-scroll reveal-delay-3"
            title="Connect with us on LinkedIn (opens in new tab)"
            aria-label="LinkedIn Company Page"
          >
            <div className="contact-channel-item__icon" aria-hidden="true">
              <Linkedin size={20} />
            </div>
            <div className="contact-channel-item__content">
              <span className="contact-channel-item__label">LinkedIn</span>
              <span className="contact-channel-item__val">
                {BRAND.linkedinHandle}
                <ExternalLink size={12} className="external-link-icon" aria-hidden="true" />
              </span>
            </div>
          </a>
        </div>

        {/* 3. Contact Form Card */}
        <div className="contact-form-card reveal-on-scroll reveal-delay-2">
          {submitted ? (
            <div className="contact-success-card animate-soar-1" role="status" aria-live="polite">
              <div className="contact-success-icon" aria-hidden="true">
                <CheckCircle2 size={36} />
              </div>
              <h2 className="contact-success-title">Message Sent Successfully!</h2>
              <p className="contact-success-lead">
                Thank you, <strong>{formData.name || 'there'}</strong>. We have received your message.
                Our team will review your inquiry and get in touch with you soon at <strong>{formData.email}</strong>.
              </p>

              <div className="contact-success-details">
                <div className="contact-success-details-row">
                  <span className="contact-success-details-label">Subject:</span>
                  <span className="contact-success-details-val">{formData.subject}</span>
                </div>
                {formData.organization && (
                  <div className="contact-success-details-row">
                    <span className="contact-success-details-label">Organization:</span>
                    <span className="contact-success-details-val">{formData.organization}</span>
                  </div>
                )}
                <div className="contact-success-details-row">
                  <span className="contact-success-details-label">Status:</span>
                  <span className="contact-success-details-val">Inquiry Received</span>
                </div>
              </div>

              <button
                type="button"
                className="form-submit-btn contact-success-btn"
                onClick={handleReset}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div>
              <div className="contact-form-card__header">
                <h2 className="contact-form-card__title">Contact Us</h2>
                <p className="contact-form-card__subtitle">
                  Send us a message and our team will get back to you promptly.
                </p>
              </div>

              {/* Error Banner */}
              {submitError && (
                <div className="form-error-banner animate-soar-1" role="alert">
                  <AlertCircle size={20} className="form-error-icon" aria-hidden="true" />
                  <div className="form-error-content">
                    <strong className="form-error-title">Notice</strong>
                    <p className="form-error-desc">{submitError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Row 1: Full Name & Email Address */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      <span>Your Full Name</span>
                      <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <div className="form-input-wrap">
                      <User size={16} className="form-input-icon" aria-hidden="true" />
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: null });
                        }}
                        placeholder="e.g. John Doe"
                        aria-required="true"
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined}
                        className={`form-input ${fieldErrors.name ? 'form-input--error' : ''}`}
                      />
                    </div>
                    <div className="form-error-container" aria-live="polite">
                      {fieldErrors.name && (
                        <span id="contact-name-error" className="field-error-msg" role="alert">
                          <AlertCircle size={13} aria-hidden="true" />
                          <span>{fieldErrors.name}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      <span>Email Address</span>
                      <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <div className="form-input-wrap">
                      <Mail size={16} className="form-input-icon" aria-hidden="true" />
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: null });
                        }}
                        placeholder="name@example.com"
                        aria-required="true"
                        aria-invalid={Boolean(fieldErrors.email)}
                        aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined}
                        className={`form-input ${fieldErrors.email ? 'form-input--error' : ''}`}
                      />
                    </div>
                    <div className="form-error-container" aria-live="polite">
                      {fieldErrors.email && (
                        <span id="contact-email-error" className="field-error-msg" role="alert">
                          <AlertCircle size={13} aria-hidden="true" />
                          <span>{fieldErrors.email}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Row 2: Subject/Topic & Organization */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">
                      <span>Subject / Topic</span>
                    </label>
                    <div className="form-input-wrap">
                      <Tag size={16} className="form-input-icon" aria-hidden="true" />
                      <select
                        id="contact-subject"
                        name="subject"
                        disabled={isSubmitting}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="form-select with-icon"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Web Application Development">Web Application Development</option>
                        <option value="Mobile Application Development">Mobile Application Development</option>
                        <option value="SaaS Product Development">SaaS Product Development</option>
                        <option value="School Website Development">School Website Development</option>
                        <option value="Software Maintenance & Support">Software Maintenance & Support</option>
                        <option value="Technical Consultation">Technical Consultation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="form-error-container" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-organization" className="form-label">
                      <span>Organization / School Name</span>
                      <span className="optional-tag">(Optional)</span>
                    </label>
                    <div className="form-input-wrap">
                      <Building size={16} className="form-input-icon" aria-hidden="true" />
                      <input
                        id="contact-organization"
                        name="organization"
                        type="text"
                        disabled={isSubmitting}
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company, School, or Brand"
                        className="form-input"
                      />
                    </div>
                    <div className="form-error-container" />
                  </div>
                </div>

                {/* Row 3: Your Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    <span>Your Message</span>
                    <span className="required-star" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: null });
                    }}
                    placeholder="How can we help you? Describe your questions or requirements..."
                    aria-required="true"
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? 'contact-message-error' : undefined}
                    className={`form-textarea ${fieldErrors.message ? 'form-textarea--error' : ''}`}
                  />
                  <div className="form-error-container" aria-live="polite">
                    {fieldErrors.message && (
                      <span id="contact-message-error" className="field-error-msg" role="alert">
                        <AlertCircle size={13} aria-hidden="true" />
                        <span>{fieldErrors.message}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Submit Row */}
                <div className="form-submit-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="form-submit-btn"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin-fast" aria-hidden="true" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={18} aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <div className="form-privacy-note">
                    <Lock size={13} aria-hidden="true" />
                    <span>Your privacy is important to us. We never share your contact details.</span>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
