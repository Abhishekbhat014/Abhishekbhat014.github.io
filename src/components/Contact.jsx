import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Loader2, User, Tag, MessageSquare, Briefcase, IndianRupee, Clock, XCircle } from 'lucide-react';
import { portfolioConfig } from '../config/portfolioConfig';
import { ScrollReveal } from './ui/ScrollReveal';
import { FramedText } from './ui/FramedText';
import { BasicDropdown } from './ui/BasicDropdown';

const projectTypeItems = [
  { id: 'mobile', label: 'Mobile App', value: 'Mobile App' },
  { id: 'web', label: 'Website / Web Application', value: 'Website / Web Application' },
  { id: 'improvement', label: 'Existing Project Improvement', value: 'Existing Project Improvement' },
  { id: 'backend', label: 'Backend / API', value: 'Backend / API' },
  { id: 'other', label: 'Other', value: 'Other' },
];

const budgetItems = [
  { id: 'not_sure', label: 'Not sure yet', value: 'Not sure yet' },
  { id: 'under_25k', label: 'Under ₹25,000', value: 'Under ₹25,000' },
  { id: '25k_50k', label: '₹25,000 – ₹50,000', value: '₹25,000 – ₹50,000' },
  { id: '50k_100k', label: '₹50,000 – ₹1,00,000', value: '₹50,000 – ₹1,00,000' },
  { id: '100k_plus', label: '₹1,00,000+', value: '₹1,00,000+' },
  { id: 'discuss', label: 'Prefer to discuss', value: 'Prefer to discuss' },
];

const timelineItems = [
  { id: 'no_deadline', label: 'No specific deadline', value: 'No specific deadline' },
  { id: '1_month', label: 'Within 1 month', value: 'Within 1 month' },
  { id: '1_3_months', label: '1–3 months', value: '1–3 months' },
  { id: '3_6_months', label: '3–6 months', value: '3–6 months' },
  { id: 'not_sure_timeline', label: 'Not sure yet', value: 'Not sure yet' },
];

export const Contact = () => {
  const { email } = portfolioConfig.personalInfo;
  
  // Form State
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    project_name: '', 
    project_type: '', 
    budget: '', 
    timeline: '', 
    message: '' 
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Valid email is required';
    }
    if (!formData.project_type) tempErrors.project_type = 'Project type is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      tempErrors.message = 'Please provide a brief description (min 10 characters)';
    }
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleDropdownChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Honeypot check
    if (e.target.botcheck && e.target.botcheck.value) {
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '909f59db-3bcc-40ca-a2e1-c7286aebf080',
          subject: `New Project Inquiry — ${formData.project_type}`,
          from_name: formData.name,
          replyto: formData.email,
          Name: formData.name,
          Email: formData.email,
          'Project / Idea Name': formData.project_name || 'Not provided',
          'Project Type': formData.project_type,
          Budget: formData.budget || 'Not specified',
          Timeline: formData.timeline || 'Not specified',
          'Project Description': formData.message
        })
      });

      const result = await response.json();
      
      if (response.status === 200) {
        setIsSubmitted(true);
        // Clear form on success
        setFormData({ 
          name: '', email: '', project_name: '', project_type: '', 
          budget: '', timeline: '', message: '' 
        });
      } else {
        setSubmitError(result.message || 'Something went wrong. Your message couldn\'t be sent.');
      }
    } catch (error) {
      setSubmitError('Failed to send request. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch" className="section contact-section">
      <div className="glowing-bg contact-glow"></div>
      
      <div className="container relative-z">
        <h2 className="section-title" style={{ background: 'none', WebkitBackgroundClip: 'initial', WebkitTextFillColor: 'initial', marginBottom: '0.5rem' }}>
          <FramedText>Have an idea? Let's build it.</FramedText>
        </h2>
        
        <ScrollReveal size="md" variant="muted" containerClassName="section-subtitle light-subtitle" align="center">
          Tell me a little about what you're trying to build. You don't need to have everything figured out — just describe the idea and I'll get back to you.
        </ScrollReveal>

        <div className="contact-grid grid-2">
          {/* Contact Details Column */}
          <div className="contact-details glass-panel light-details">
            <h3 className="contact-info-title">Let's Connect</h3>
            <ScrollReveal size="sm" variant="muted" containerClassName="contact-info-desc">
              Have an idea but don't know where to start? Tell me what you're thinking about. 
              <br/><br/>
              <span style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>Apps · Websites · Software Products</span>
              <br/><br/>
              For general inquiries, feel free to reach out directly:
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
                <h3 className="success-title">Thanks for reaching out!</h3>
                <p className="success-desc">
                  Your idea has been sent successfully. I'll get back to you as soon as I can.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-primary">
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                
                {submitError && (
                  <div className="error-banner">
                    <XCircle size={20} />
                    <span>{submitError}</span>
                  </div>
                )}
                
                {/* Honeypot Field */}
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="name" className="visually-hidden">Name</label>
                    <div className="input-with-icon">
                      <User size={18} className="input-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        aria-required="true"
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
                    <label htmlFor="email" className="visually-hidden">Email</label>
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        aria-required="true"
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

                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="project_name" className="visually-hidden">Project / Idea Name</label>
                    <div className="input-with-icon">
                      <Tag size={18} className="input-icon" />
                      <input
                        type="text"
                        id="project_name"
                        name="project_name"
                        value={formData.project_name}
                        onChange={handleInputChange}
                        placeholder="Project Name (Optional)"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="project_type" className="visually-hidden">What would you like to build?</label>
                    <BasicDropdown
                      label="Project Type"
                      items={projectTypeItems}
                      value={formData.project_type}
                      onChange={(item) => handleDropdownChange('project_type', item.value)}
                      icon={Briefcase}
                      error={Boolean(errors.project_type)}
                    />
                    {errors.project_type && (
                      <span className="error-msg">
                        <AlertCircle size={12} /> {errors.project_type}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="form-group-row">
                  <div className="form-group">
                    <label htmlFor="budget" className="visually-hidden">Estimated Budget</label>
                    <BasicDropdown
                      label="Estimated Budget"
                      items={budgetItems}
                      value={formData.budget}
                      onChange={(item) => handleDropdownChange('budget', item.value)}
                      icon={IndianRupee}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="timeline" className="visually-hidden">Expected Timeline</label>
                    <BasicDropdown
                      label="Expected Timeline"
                      items={timelineItems}
                      value={formData.timeline}
                      onChange={(item) => handleDropdownChange('timeline', item.value)}
                      icon={Clock}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="visually-hidden">Tell me about your idea</label>
                  <div className="input-with-icon textarea-icon-wrapper">
                    <MessageSquare size={18} className="input-icon textarea-icon" />
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your idea, the problem you're trying to solve, or what you'd like to build..."
                      aria-required="true"
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
                      Send Inquiry <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        .contact-section {
          position: relative;
          background-color: #09090b !important;
          color: #f9fafb !important;
        }
        .contact-glow {
          left: -5%;
          bottom: 10%;
          opacity: 0.15;
        }
        .light-subtitle {
          color: #a1a1aa !important;
          max-width: 650px;
          margin: 0 auto 3.5rem auto;
        }
        .light-details, .light-form {
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
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
          color: #f9fafb !important;
        }
        .contact-info-desc {
          font-size: 1rem;
          color: #a1a1aa !important;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }
        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .light-info-card {
          background: rgba(255, 255, 255, 0.01) !important;
          border: 1px solid rgba(255, 255, 255, 0.04) !important;
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
          color: #f9fafb !important;
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
          color: #71717a;
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
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #f9fafb !important;
          font-family: inherit;
          font-size: 0.95rem;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
        }
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        .form-group input::placeholder, .form-group textarea::placeholder {
          color: #71717a !important;
        }
        .form-group input:focus, .form-group textarea:focus {
          border-color: hsl(var(--primary)) !important;
          background: rgba(255, 255, 255, 0.04) !important;
          box-shadow: 0 0 0 3px hsla(24, 95%, 53%, 0.15) !important;
          outline: none;
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
        .error-banner {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: var(--border-radius-sm);
          color: #fca5a5;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
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
          color: #f9fafb !important;
        }
        .success-desc {
          font-size: 0.95rem;
          color: #a1a1aa !important;
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
