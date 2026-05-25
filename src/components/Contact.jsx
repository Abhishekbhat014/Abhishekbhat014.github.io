import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Loader2, User, Tag, MessageSquare } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { ScrollReveal } from './ui/ScrollReveal';
import { FramedText } from './ui/FramedText';

export const Contact = () => {
  const { email } = portfolioConfig.personalInfo;
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="get-in-touch" className="section contact-section">
      <div className="glowing-bg contact-glow"></div>
      
      <div className="container relative-z">
        <h2 className="section-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial' }}>
          <FramedText>Get In Touch</FramedText>
        </h2>
        <ScrollReveal size="md" variant="muted" containerClassName="section-subtitle light-subtitle" align="center">
          Let's collaborate! Drop me a message, and I'll get back to you as soon as possible.
        </ScrollReveal>

        <div className="contact-grid grid-2">
          {/* Contact Details Column */}
          <div className="contact-details glass-panel light-details">
            <h3 className="contact-info-title">Let's Connect</h3>
            <ScrollReveal size="sm" variant="muted" containerClassName="contact-info-desc">
              Whether you have an upcoming project, a job opportunity, or just want to chat about development systems - feel free to reach out.
            </ScrollReveal>

            <div className="info-cards-list">
              <div className="info-card light-info-card">
                <div className="info-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="info-text-wrapper">
                  <span className="info-label">Email Me</span>
                  <a href={`mailto:${email}`} className="info-val">{email}</a>
                </div>
              </div>

              <div className="info-card light-info-card">
                <div className="info-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="info-text-wrapper">
                  <span className="info-label">Location</span>
                  <span className="info-val">Bangalore, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="contact-form-container glass-panel light-form">
            {isSubmitted ? (
              <div className="success-banner">
                <CheckCircle size={48} className="success-icon animate-bounce" />
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-desc">
                  Thank you for reaching out. I've received your submission and will get in touch with you shortly.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-row">
                  <div className="form-group">
                    <div className="input-with-icon">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        aria-label="Your Name"
                        className={errors.name ? 'error-input' : ''}
                      />
                    </div>
                    {errors.name && (
                      <span className="error-msg">
                        <AlertCircle size={12} /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        aria-label="Your Email"
                        className={errors.email ? 'error-input' : ''}
                      />
                    </div>
                    {errors.email && (
                      <span className="error-msg">
                        <AlertCircle size={12} /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-with-icon">
                    <Tag size={18} className="input-icon" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      aria-label="Subject"
                      className={errors.subject ? 'error-input' : ''}
                    />
                  </div>
                  {errors.subject && (
                    <span className="error-msg">
                      <AlertCircle size={12} /> {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <div className="input-with-icon textarea-icon-wrapper">
                    <MessageSquare size={18} className="input-icon textarea-icon" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      aria-label="Your Message"
                      className={errors.message ? 'error-input' : ''}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <span className="error-msg">
                      <AlertCircle size={12} /> {errors.message}
                    </span>
                  )}
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          background-color: #ffffff !important; /* Force white background */
          color: #09090b !important;
        }
        .contact-glow {
          left: -5%;
          bottom: 10%;
          opacity: 0.05;
        }
        .light-subtitle {
          color: #4b5563 !important;
        }
        .light-details, .light-form {
          background: #ffffff !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04) !important;
        }
        .contact-details {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .contact-info-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: #09090b !important;
        }
        .contact-info-desc {
          font-size: 1rem;
          color: #27272a !important;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .light-info-card {
          background: #f9fafb !important;
          border: 1px solid rgba(0, 0, 0, 0.06) !important;
        }
        .info-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem;
          border-radius: var(--border-radius-sm);
        }
        .info-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-sm);
          background: rgba(249, 115, 22, 0.08);
          color: hsl(var(--primary));
        }
        .info-text-wrapper {
          display: flex;
          flex-direction: column;
        }
        .info-label {
          font-size: 0.8rem;
          color: #71717a !important;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .info-val {
          font-size: 1rem;
          color: #09090b !important;
          font-weight: 600;
          transition: color var(--transition-fast);
        }
        a.info-val:hover {
          color: hsl(var(--primary));
        }
        .contact-form-container {
          padding: 2.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .form-group-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .input-with-icon {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 14px;
          color: #a1a1aa;
          pointer-events: none;
          transition: color var(--transition-fast);
          z-index: 2;
        }
        .textarea-icon-wrapper {
          align-items: flex-start;
        }
        .textarea-icon {
          top: 14px;
        }
        .input-with-icon:focus-within .input-icon {
          color: hsl(var(--primary));
        }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem 0.8rem 2.75rem !important;
          border-radius: var(--border-radius-sm);
          background: #ffffff !important;
          border: 1px solid rgba(0, 0, 0, 0.15) !important;
          color: #09090b !important;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .form-group input::placeholder, .form-group textarea::placeholder {
          color: #a1a1aa !important;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: hsl(var(--primary)) !important;
          box-shadow: 0 0 0 2px var(--primary-glow) !important;
        }
        .form-group input.error-input, .form-group textarea.error-input {
          border-color: hsl(var(--error)) !important;
        }
        .error-msg {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: hsl(var(--error));
          font-weight: 500;
        }
        .submit-btn {
          align-self: flex-start;
          margin-top: 1rem;
        }
        
        /* Success Banner */
        .success-banner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 0;
        }
        .success-icon {
          color: hsl(var(--success));
          margin-bottom: 1.5rem;
        }
        .success-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #09090b !important;
        }
        .success-desc {
          font-size: 0.95rem;
          color: #4b5563 !important;
          max-width: 360px;
          margin-bottom: 2rem;
          line-height: 1.5;
        }
        
        /* Animate-spin */
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @media (max-width: 768px) {
          .form-group-row {
            grid-template-columns: 1fr;
          }
          .contact-details, .contact-form-container {
            padding: 1.75rem;
          }
          .submit-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
