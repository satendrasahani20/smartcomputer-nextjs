import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    preferredContact: 'email'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: '',
      preferredContact: 'email'
    })

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000)
  }

  const styles = {
    contactSection: {
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    },
    backgroundPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.03,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      zIndex: 1
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      position: 'relative',
      zIndex: 10
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '80px',
      animation: 'fadeInUp 0.8s ease-out'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: '800',
      color: '#1e293b',
      marginBottom: '16px',
      background: 'linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'start'
    },
    contactInfo: {
      animation: 'fadeInLeft 1s ease-out'
    },
    infoTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '24px'
    },
    infoDescription: {
      fontSize: '1.1rem',
      color: '#64748b',
      lineHeight: '1.6',
      marginBottom: '40px'
    },
    contactMethods: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      marginBottom: '40px'
    },
    contactMethod: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '20px',
      background: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      transition: 'all 0.3s ease'
    },
    methodIcon: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      fontSize: '20px'
    },
    methodInfo: {
      flex: 1
    },
    methodTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '4px'
    },
    methodDetails: {
      fontSize: '0.95rem',
      color: '#64748b'
    },
    officeHours: {
      background: '#ffffff',
      padding: '32px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(59, 130, 246, 0.1)'
    },
    hoursTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    hoursList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    hoursItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 0',
      borderBottom: '1px solid #f1f5f9',
      fontSize: '0.95rem'
    },
    hoursDay: {
      color: '#64748b',
      fontWeight: '500'
    },
    hoursTime: {
      color: '#1e293b',
      fontWeight: '600'
    },
    formContainer: {
      background: '#ffffff',
      padding: '40px',
      borderRadius: '20px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid rgba(59, 130, 246, 0.1)',
      animation: 'fadeInRight 1s ease-out'
    },
    formTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#1e293b',
      marginBottom: '8px'
    },
    formSubtitle: {
      fontSize: '1rem',
      color: '#64748b',
      marginBottom: '32px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    inputRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontSize: '0.95rem',
      fontWeight: '600',
      color: '#374151'
    },
    input: {
      padding: '14px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '1rem',
      color: '#1f2937',
      backgroundColor: '#ffffff',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    select: {
      padding: '14px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '1rem',
      color: '#1f2937',
      backgroundColor: '#ffffff',
      transition: 'all 0.3s ease',
      outline: 'none',
      cursor: 'pointer'
    },
    textarea: {
      padding: '14px 16px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '1rem',
      color: '#1f2937',
      backgroundColor: '#ffffff',
      transition: 'all 0.3s ease',
      outline: 'none',
      minHeight: '120px',
      resize: 'vertical',
      fontFamily: 'inherit'
    },
    radioGroup: {
      display: 'flex',
      gap: '24px',
      marginTop: '8px'
    },
    radioOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer'
    },
    radioInput: {
      width: '18px',
      height: '18px',
      accentColor: '#3b82f6'
    },
    radioLabel: {
      fontSize: '0.95rem',
      color: '#374151',
      cursor: 'pointer'
    },
    submitBtn: {
      padding: '16px 32px',
      background: 'linear-gradient(135deg, #3b82f6, #17c3f7ff)',
      color: '#ffffff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      width : "250px"
    },
    successMessage: {
      background: 'linear-gradient(135deg, #10b981, #059669)',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      textAlign: 'center',
      fontSize: '1.1rem',
      fontWeight: '600',
      animation: 'slideInDown 0.5s ease-out',
      marginBottom: '24px'
    }
  }

  const animationCSS = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .input:focus {
      border-color: #3b82f6 !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    }

    .select:focus {
      border-color: #3b82f6 !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    }

    .textarea:focus {
      border-color: #3b82f6 !important;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
    }

    .contact-method:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15);
      border-color: rgba(59, 130, 246, 0.3);
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
    }

    .submit-btn:active {
      transform: translateY(0);
    }

    .submit-btn.loading {
      animation: pulse 1.5s ease-in-out infinite;
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr !important;
        gap: 50px !important;
      }
      
      .input-row {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }
      
      .radio-group {
        flex-direction: column !important;
        gap: 12px !important;
      }
      
      .section-title {
        font-size: 2.5rem !important;
      }
      
      .form-container {
        padding: 32px 24px !important;
      }
    }

    @media (max-width: 480px) {
      .section-title {
        font-size: 2rem !important;
      }
      
      .contact-section {
        padding: 60px 0 !important;
      }
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
      <section style={styles.contactSection} className="contact-section">
        <div style={styles.backgroundPattern}></div>
        
        <div style={styles.container}>
          {/* Section Header */}
          <div style={styles.sectionHeader}>
            <h2 style={styles.sectionTitle}>Get In Touch</h2>
            <p style={styles.sectionSubtitle}>
              Ready to start your learning journey? Contact us today and discover how Smart Computer Institute can help you achieve your goals.
            </p>
          </div>

          {/* Main Content Grid */}
          <div style={styles.contactGrid} className="contact-grid">
           
              {/* Office Hours */}
              
            </div>

            {/* Contact Form */}
            <div style={styles.formContainer}>
              <h3 style={styles.formTitle}>Send us a Message</h3>
              <p style={styles.formSubtitle}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {showSuccess && (
                <div style={styles.successMessage}>
                  ✅ Thank you! Your message has been sent successfully. We'll contact you soon.
                </div>
              )}

              <form style={styles.form} onSubmit={handleSubmit}>
                {/* Name and Email Row */}
                <div style={styles.inputRow} className="input-row">
                  <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={styles.input}
                      className="input"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={styles.input}
                      className="input"
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone and Course Row */}
                <div style={styles.inputRow} className="input-row">
                  <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={styles.input}
                      className="input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label} htmlFor="course">Interested Course</label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      style={styles.select}
                      className="select"
                    >
                      <option value="">Select a course</option>
                      <option value="web-development">Web Development</option>
                      <option value="python-programming">Python Programming</option>
                      <option value="data-science">Data Science</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="mobile-development">Mobile Development</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Preferred Contact Method</label>
                  <div style={styles.radioGroup} className="radio-group">
                    <div style={styles.radioOption}>
                      <input
                        type="radio"
                        id="contact-email"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        style={styles.radioInput}
                      />
                      <label style={styles.radioLabel} htmlFor="contact-email">Email</label>
                    </div>
                    <div style={styles.radioOption}>
                      <input
                        type="radio"
                        id="contact-phone"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        style={styles.radioInput}
                      />
                      <label style={styles.radioLabel} htmlFor="contact-phone">Phone</label>
                    </div>
                    <div style={styles.radioOption}>
                      <input
                        type="radio"
                        id="contact-whatsapp"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleInputChange}
                        style={styles.radioInput}
                      />
                      <label style={styles.radioLabel} htmlFor="contact-whatsapp">WhatsApp</label>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div style={styles.inputGroup}>
                  <label style={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    style={styles.textarea}
                    className="textarea"
                    placeholder="Tell us about your learning goals, questions, or how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={styles.submitBtn}
                  className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '🔄 Sending Message...' : '📨 Send Message'}
                </button>
              </form>
            </div>
          </div>
      </section>
    </>
  )
}

export default Contact
