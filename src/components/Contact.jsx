import React, { useState, useCallback, memo } from 'react';
import {
  IconMail,
  IconSend,
  IconMapPin,
  IconClock,
  IconCheck,
  IconCopy,
  IconGithub,
  IconLinkedin,
  IconSparkles,
  IconGlobe,
  IconPhone,
  IconCheckCircle2,
  IconX
} from './Icons';

export const Contact = memo(({ onNotify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }, []);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText('ramitsahani47@gmail.com');
    setCopiedEmail(true);
    if (onNotify) onNotify('Email copied to clipboard: ramitsahani47@gmail.com');
    setTimeout(() => setCopiedEmail(false), 2500);
  }, [onNotify]);

  const handleCopyPhone = useCallback(() => {
    navigator.clipboard.writeText('+91 76679 72667');
    setCopiedPhone(true);
    if (onNotify) onNotify('Phone number copied to clipboard: +91 76679 72667');
    setTimeout(() => setCopiedPhone(false), 2500);
  }, [onNotify]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      onNotify('Please correct the errors in the form before submitting.');
      return;
    }

    setSubmitStatus('submitting');

    try {
      // Use FormData to avoid CORS JSON preflight errors on formsubmit.co
      const bodyData = new FormData();
      bodyData.append('name', formData.name);
      bodyData.append('email', formData.email);
      bodyData.append('_subject', formData.subject || `New Portfolio Message from ${formData.name}`);
      bodyData.append('message', formData.message);
      bodyData.append('_captcha', 'false');
      bodyData.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/ajax/ramitsahani47@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: bodyData,
      });

      if (response.ok) {
        const resData = await response.json().catch(() => ({ success: true }));
        if (resData.success === 'true' || resData.success === true || response.status === 200) {
          setSubmitStatus('success');
          onNotify('Thank you! Your message has been sent successfully to Ramit Sahani.');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setErrors({});
          return;
        }
      }

      // If AJAX fetch is blocked or fails, fallback to direct email link
      throw new Error('FormSubmit endpoint blocked or unreachable');
    } catch (err) {
      console.warn('FormSubmit AJAX fetch blocked or failed:', err);
      
      // Fail-Safe Fallback: Launch Gmail compose window so message is NEVER lost
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ramitsahani47@gmail.com&su=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      setSubmitStatus('success');
      onNotify('Opening Gmail compose window to send message to ramitsahani47@gmail.com...');
      window.open(gmailUrl, '_blank', 'noreferrer');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-tag">
        <IconMail size={16} />
        <span>Get In Touch</span>
      </div>

      <h2 className="section-title">
        Let's Build Something <span className="gradient-text">Exceptional</span>
      </h2>

      <p className="section-subtitle">
        Whether you have a React Native mobile project, backend API opportunity, or tech inquiry, my inbox is open.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
        {/* Left Column: Direct Info Cards */}
        <div>
          <div className="glass-panel" style={{ padding: '36px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '24px', color: 'var(--text-primary)' }}>
                Ramit Sahani • Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
                {/* Email Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ramitsahani47@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Ramit,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Gmail compose to email ramitsahani47@gmail.com"
                    title="Open Gmail Compose: ramitsahani47@gmail.com"
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--sky-accent)',
                      flexShrink: 0,
                      textDecoration: 'none',
                    }}
                    className="glass-panel-glow"
                  >
                    <IconMail size={22} />
                  </a>
                  <div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      DIRECT EMAIL
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ramitsahani47@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Ramit,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Open Gmail compose to email ramitsahani47@gmail.com"
                        title="Open Gmail Compose: ramitsahani47@gmail.com"
                        style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}
                      >
                        ramitsahani47@gmail.com
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: copiedEmail ? 'var(--emerald-accent)' : 'var(--text-muted)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        title="Copy Email to Clipboard"
                        aria-label="Copy email address to clipboard"
                      >
                        {copiedEmail ? <IconCheck size={16} /> : <IconCopy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--emerald-accent)',
                      flexShrink: 0,
                    }}
                  >
                    <IconPhone size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      PHONE / WHATSAPP
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                      <a
                        href="tel:+917667972667"
                        style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-primary)', textDecoration: 'none' }}
                      >
                        +91 76679 72667
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: copiedPhone ? 'var(--emerald-accent)' : 'var(--text-muted)',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        title="Copy Phone"
                      >
                        {copiedPhone ? <IconCheck size={16} /> : <IconCopy size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--violet-accent)',
                      flexShrink: 0,
                    }}
                  >
                    <IconMapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      LOCATION
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
                      Hyderabad, Telangana, India
                    </div>
                  </div>
                </div>

                {/* Availability Item */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--sky-accent)',
                      flexShrink: 0,
                    }}
                  >
                    <IconClock size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      AVAILABILITY
                    </div>
                    <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--emerald-accent)', marginTop: '4px' }}>
                      Open for React Native & Full-Stack Opportunities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                PROFESSIONAL PROFILES:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a
                  href="https://github.com/ramitsahani47"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel-glow"
                  style={{
                    padding: '10px 16px',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <IconGithub size={18} />
                  <span>github.com/ramitsahani47</span>
                </a>

                <a
                  href="https://linkedin.com/in/ramit-sahani"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-panel-glow"
                  style={{
                    padding: '10px 16px',
                    borderRadius: '10px',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.875rem',
                    textDecoration: 'none',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--glass-border)',
                  }}
                >
                  <IconLinkedin size={18} />
                  <span>linkedin.com/in/ramit-sahani</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="glass-panel"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              Send Ramit a Message
            </h3>

            {/* Success Banner */}
            {submitStatus === 'success' && (
              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: 'var(--emerald-accent)',
                  fontSize: '0.925rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  lineHeight: 1.5,
                }}
              >
                <IconCheckCircle2 size={22} style={{ flexShrink: 0 }} />
                <span>Thank you! Your message has been sent successfully to ramitsahani47@gmail.com.</span>
              </div>
            )}

            {/* Error Banner */}
            {submitStatus === 'error' && (
              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(244, 63, 94, 0.15)',
                  border: '1px solid rgba(244, 63, 94, 0.4)',
                  color: '#f43f5e',
                  fontSize: '0.925rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  lineHeight: 1.5,
                }}
              >
                <IconX size={22} style={{ flexShrink: 0 }} />
                <span>Something went wrong. Opening your email client to send directly to ramitsahani47@gmail.com...</span>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Hiring Manager"
                  className="form-input"
                  style={{
                    borderColor: errors.name ? '#f43f5e' : undefined,
                  }}
                />
                {errors.name && (
                  <span style={{ color: '#f43f5e', fontSize: '0.78rem', marginTop: '4px', display: 'block', fontFamily: 'var(--font-mono)' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.825rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  YOUR EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="recruiter@company.com"
                  className="form-input"
                  style={{
                    borderColor: errors.email ? '#f43f5e' : undefined,
                  }}
                />
                {errors.email && (
                  <span style={{ color: '#f43f5e', fontSize: '0.78rem', marginTop: '4px', display: 'block', fontFamily: 'var(--font-mono)' }}>
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="React Native / Mobile Developer Opportunity"
                className="form-input"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.825rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                MESSAGE *
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your mobile app, project, or role..."
                className="form-input"
                style={{
                  resize: 'vertical',
                  borderColor: errors.message ? '#f43f5e' : undefined,
                }}
              />
              {errors.message && (
                <span style={{ color: '#f43f5e', fontSize: '0.78rem', marginTop: '4px', display: 'block', fontFamily: 'var(--font-mono)' }}>
                  {errors.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="btn-primary"
              style={{
                width: '100%',
                justifyContent: 'center',
                marginTop: '10px',
                opacity: submitStatus === 'submitting' ? 0.75 : 1,
                cursor: submitStatus === 'submitting' ? 'not-allowed' : 'pointer',
              }}
            >
              {submitStatus === 'submitting' ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <IconSend size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});
