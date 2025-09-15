import React from 'react'

const HomeFooter = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 25%, #2d3561 50%, #1a1f3a 75%, #0a0e27 100%)',
      color: '#e2e8f0!important',
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      padding: '80px 0 30px 0',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(99, 102, 241, 0.2)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      position: 'relative',
      zIndex: 10
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr 1.5fr',
      gap: '60px',
      marginBottom: '50px',
      animation: 'slideInUp 0.8s ease-out'
    },
    brandSection: {
      animation: 'fadeInLeft 1s ease-out'
    },
    logo: {
      height: '48px',
      width: 'auto',
      marginBottom: '20px',
      filter: 'brightness(0) saturate(100%) invert(67%) sepia(29%) saturate(463%) hue-rotate(195deg) brightness(91%) contrast(85%)',
      transition: 'transform 0.3s ease'
    },
    brandTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#60a5fa',
      marginBottom: '12px',
      letterSpacing: '-0.025em'
    },
    brandDescription: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: '#94a3b8',
      marginBottom: '24px',
      maxWidth: '280px'
    },
    socialContainer: {
      display: 'flex',
      gap: '12px'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      background: 'rgba(99, 102, 241, 0.1)',
      border: '1px solid rgba(99, 102, 241, 0.2)',
      borderRadius: '8px',
      color: '#94a3b8',
      textDecoration: 'none',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      backdropFilter: 'blur(10px)'
    },
    footerColumn: {
      animation: 'fadeInUp 1s ease-out'
    },
    columnTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#fff!important',
      marginBottom: '20px',
      position: 'relative',
      paddingBottom: '8px'
    },
    columnTitleAccent: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '24px',
      height: '2px',
      background: 'linear-gradient(90deg, #60a5fa, #3b82f6)',
      borderRadius: '1px'
    },
    linksList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    linkItem: {
      marginBottom: '12px'
    },
    footerLink: {
      color: '#fff!important',
      textDecoration: 'none',
      fontSize: '15px',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '4px 0'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: 'white!important',
      fontSize: '15px'
    },
    contactIcon: {
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(99, 102, 241, 0.1)',
      borderRadius: '4px',
      fontSize: '12px'
    },
    newsletterForm: {
      marginTop: '20px'
    },
    emailInput: {
      width: '100%',
      padding: '12px 16px',
      background: 'rgba(15, 23, 42, 0.8)',
      border: '1px solid rgba(99, 102, 241, 0.3)',
      borderRadius: '8px',
      color: '#e2e8f0',
      fontSize: '14px',
      marginBottom: '12px',
      transition: 'all 0.3s ease',
      outline: 'none'
    },
    subscribeBtn: {
      width: '100%',
      padding: '12px 20px',
      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      border: 'none',
      borderRadius: '8px',
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    bottomBar: {
      borderTop: '1px solid rgba(99, 102, 241, 0.2)',
      paddingTop: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      animation: 'fadeIn 1.2s ease-out'
    },
    copyright: {
      color: '#fff!important',
      fontSize: '14px'
    },
    legalLinks: {
      display: 'flex',
      gap: '24px',
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    legalLink: {
      color: '#fff!important',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease'
    },
    backToTop: {
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      border: 'none',
      borderRadius: '50%',
      color: '#ffffff',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1000,
      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }

  const animationCSS = `
    @keyframes slideInUp {
      from {
        transform: translateY(60px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeInLeft {
      from {
        transform: translateX(-40px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    @keyframes fadeInUp {
      from {
        transform: translateY(30px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .footer-grid {
      animation-delay: 0.1s;
    }

    .footer-column:nth-child(2) { animation-delay: 0.2s; }
    .footer-column:nth-child(3) { animation-delay: 0.3s; }
    .footer-column:nth-child(4) { animation-delay: 0.4s; }
    .footer-column:nth-child(5) { animation-delay: 0.5s; }

    .social-link:hover {
      transform: translateY(-2px);
      background: rgba(99, 102, 241, 0.2);
      border-color: rgba(99, 102, 241, 0.4);
      color: #60a5fa;
      box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
    }

    .footer-link:hover {
      color: #60a5fa;
      transform: translateX(4px);
    }

    .footer-link:hover::before {
      content: '→';
      margin-right: 4px;
      color: #60a5fa;
    }

    .email-input:focus {
      border-color: #60a5fa;
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    }

    .subscribe-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
    }

    .legal-link:hover {
      color: #60a5fa;
    }

    .back-to-top:hover {
      transform: scale(1.1) translateY(-2px);
      box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
    }

    .logo:hover {
      transform: scale(1.05);
    }

    @media (max-width: 1024px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
      }
      
      .brand-section {
        grid-column: 1 / -1;
      }
    }

    @media (max-width: 768px) {
      .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
      }
      
      .bottom-bar {
        flex-direction: column;
        text-align: center;
        gap: 15px;
      }
    }

    @media (max-width: 480px) {
      .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
      }
      
      .footer {
        padding: 50px 0 20px 0;
      }
      
      .legal-links {
        flex-direction: column;
        gap: 10px;
      }
    }
  `

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
      <footer style={styles.footer} className="footer">
        <div style={styles.container}>
          {/* Main Footer Grid */}
          <div style={styles.footerGrid} className="footer-grid">
            {/* Brand Section */}
            <div style={styles.brandSection} className="brand-section">
              <img 
                src="assets/images/logo.png" 
                alt="Smart Computer Institute" 
                style={styles.logo}
                className="logo"
              />
              <h3 style={styles.brandTitle}>Smart Computer Institute</h3>
              <p style={styles.brandDescription}>
                Empowering the next generation with cutting-edge technology education and industry-relevant skills.
              </p>
              <div style={styles.socialContainer}>
                <a href="#" style={styles.socialLink} className="social-link" title="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" style={styles.socialLink} className="social-link" title="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" style={styles.socialLink} className="social-link" title="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" style={styles.socialLink} className="social-link" title="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Courses */}
            <div style={styles.footerColumn} className="footer-column">
              <h4 style={styles.columnTitle}>
                Courses
                <span style={styles.columnTitleAccent}></span>
              </h4>
              <ul style={styles.linksList}>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Web Development</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Python Programming</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Data Science</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Digital Marketing</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Graphic Design</a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div style={styles.footerColumn} className="footer-column">
              <h4 style={styles.columnTitle}>
                Company
                <span style={styles.columnTitleAccent}></span>
              </h4>
              <ul style={styles.linksList}>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">About Us</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Our Team</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Careers</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Success Stories</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">News & Blog</a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div style={styles.footerColumn} className="footer-column">
              <h4 style={styles.columnTitle}>
                Support
                <span style={styles.columnTitleAccent}></span>
              </h4>
              <ul style={styles.linksList}>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Help Center</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Contact Us</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Student Portal</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">FAQs</a>
                </li>
                <li style={styles.linkItem}>
                  <a href="#" style={styles.footerLink} className="footer-link">Live Chat</a>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div style={styles.footerColumn} className="footer-column">
              <h4 style={styles.columnTitle}>
                Get In Touch
                <span style={styles.columnTitleAccent}></span>
              </h4>
              <div style={styles.contactInfo}>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>📞</span>
                  <span>+91 918400149333</span>
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>✉️</span>
                  <span>info@smartcomputerinstitute.com</span>
                </div>
                <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>▨ </span>
                  <span>Head-office : Block-21 pmawas manbela raptinager medical collage-gorakhpur 273013 </span>
                </div>
                 <div style={styles.contactItem}>
                  <span style={styles.contactIcon}>▨ </span>
                  <span>Main-Branch : Near Police chauki Bansgaon road kauriram  gorakhpur 273413 </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={styles.bottomBar} className="bottom-bar">
            <p style={styles.copyright}>
              © {new Date().getFullYear()} Smart Computer Institute. All rights reserved.
            </p>
            <ul style={styles.legalLinks} className="legal-links">
              <li>
                <a href="#" style={styles.legalLink} className="legal-link">Privacy Policy</a>
              </li>
              <li>
                <a href="#" style={styles.legalLink} className="legal-link">Terms of Service</a>
              </li>
              <li>
                <a href="#" style={styles.legalLink} className="legal-link">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Top Button */}
        <button 
          style={styles.backToTop}
          className="back-to-top"
          onClick={scrollToTop}
          title="Back to top"
        >
          ↑
        </button>
      </footer>
    </>
  )
}

export default HomeFooter
