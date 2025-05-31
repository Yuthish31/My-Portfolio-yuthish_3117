import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState('');

  // Initialize EmailJS
  emailjs.init('K4Ed5UgbzKwnOdooZ');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setErrorDetails('Please fill in all fields');
      return;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus('error');
      setErrorDetails('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails('');

    try {
      // First send the notification to yourself
      const notificationResponse = await emailjs.send(
        'service_8e9jbwk', 
        'template_2c7lmpl', 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          reply_to: formData.email
        }
      );

      console.log('Notification email sent:', notificationResponse);

      // Then send the auto-reply
      const autoreplyResponse = await emailjs.send(
        'service_8e9jbwk',
        'template_rdnbqjy',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          your_name: 'Yuthishthira senthil M'
        }
      );

      console.log('Autoreply email sent:', autoreplyResponse);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setSubmitStatus('error');
      
      if (error.text) {
        setErrorDetails(`EmailJS Error: ${error.text}`);
      } else {
        setErrorDetails('Failed to send email. Please check your connection and try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Animated background elements */}
      <div className="bg-animation">
        <div className="circle-animation circle-1"></div>
        <div className="circle-animation circle-2"></div>
        <div className="circle-animation circle-3"></div>
        <div className="circle-animation circle-4"></div>
      </div>
      
      <div className="contact-card">
        <div className="contact-header">
          <img 
            src="https://github.com/Yuthish31/images-/blob/main/logo.png?raw=true" 
            alt="Logo" 
            className="logo" 
          />
          <h2>Let the Journey Begin</h2>
          <p>Even the greatest stories begin with a single message.</p>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info-section">
          <h3>Contact Information</h3>
          <p className="info-tagline">Let's turn your idea into a legendary build</p>
          
          <div className="info-items">
            <div className="info-item">
              <FaPhone className="info-icon phone-icon" />
              <span>+91 9360334471</span>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>yuthish2222k0156@gmail.com</span>
            </div>
            <div className="info-item">
              <FaLinkedin className="info-icon" />
              <a 
                href="https://www.linkedin.com/in/yuthishthirasenthil-m-334767334" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
        
        {submitStatus === 'success' ? (
          <div className="success-message">
            <svg viewBox="0 0 24 24" className="checkmark">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
            </svg>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. I'll get back to you soon.</p>
            <button 
              onClick={() => setSubmitStatus(null)}
              className="submit-btn"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
            
            {submitStatus === 'error' && (
              <div className="error-message">
                <p>Oops! Something went wrong.</p>
                {errorDetails && <p className="error-details">{errorDetails}</p>}
                <p>If the problem persists, please contact me directly at yuthish2222k0156@gmail.com</p>
              </div>
            )}
          </form>
        )}
        
        <div className="contact-footer">
          <p>© {new Date().getFullYear()} yuthish-3117. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;