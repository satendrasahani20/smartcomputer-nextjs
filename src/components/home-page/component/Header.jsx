"use client"
import Head from "next/head"
import { useRouter } from "next/router"
import { Fragment, useState } from "react"

const Header = () => {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const headerStyle = {
    background: "linear-gradient(-45deg, #1e62afff, #0ea5e9, #3b82f6, #6366f1)",
    backgroundSize: "400% 400%",
    animation: "gradientFlow 8s ease infinite",
    boxShadow: "0 8px 32px rgba(14, 165, 233, 0.3)",
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.1)"
  }

  const headerOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.05)",
    zIndex: 1
  }

  const floatingElements = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    pointerEvents: "none"
  }

  // Logo styling with enhanced animations
  const logoStyle = {
    height: "60px",
    width: "auto",
    maxWidth: "240px",
    borderRadius: "12px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
    animation: "logoGlow 3s ease-in-out infinite alternate"
  }

  // Enhanced navigation link styling
  const createNavLinkStyle = () => ({
    color: "white!important",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "12px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    fontWeight: "600",
    fontSize: "16px",
    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(10px)"
  })

  const btnPrimaryStyle = {
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "#ffffff",
    padding: "14px 28px",
    borderRadius: "14px",
    border: "none",
    fontWeight: "700",
    fontSize: "15px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    boxShadow: "0 8px 25px rgba(16, 185, 129, 0.4)",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    animation: "buttonPulse 4s ease-in-out infinite"
  }

  const dropdownStyle = {
    position: "relative",
  }

  const loginButtonStyle = {
    color: "#ffffff",
    background: "none",
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 20px",
    borderRadius: "12px",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    fontWeight: "600",
    fontSize: "16px",
    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
    backdropFilter: "blur(10px)"
  }

  // Animation CSS
  const animationCSS = `
    @keyframes gradientFlow {
      0% { background-position: 0% 50%; }
      25% { background-position: 100% 50%; }
      50% { background-position: 100% 100%; }
      75% { background-position: 0% 100%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes logoGlow {
      0% { 
        filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.3));
        transform: scale(1);
      }
      100% { 
        filter: drop-shadow(0 8px 20px rgba(59, 130, 246, 0.6));
        transform: scale(1.02);
      }
    }

    @keyframes buttonPulse {
      0%, 100% { 
        box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
        transform: scale(1);
      }
      50% { 
        box-shadow: 0 12px 35px rgba(16, 185, 129, 0.6);
        transform: scale(1.02);
      }
    }

    @keyframes slideIn {
      0% {
        transform: translateY(-20px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes fadeInScale {
      0% {
        transform: scale(0.8);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-15px) rotate(120deg); }
      66% { transform: translateY(-8px) rotate(240deg); }
    }

    // .nav-link-enhanced::before {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: -100%;
    //   width: 100%;
    //   height: 100%;
    //   background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    //   transition: left 0.5s ease;
    // }

    .nav-link-enhanced:hover::before {
      left: 100%;
    }

    .nav-link-enhanced::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 3px;
      background: linear-gradient(45deg, #fbbf24, #f59e0b);
      transition: all 0.4s ease;
      transform: translateX(-50%);
      border-radius: 2px;
    }

    .nav-link-enhanced:hover::after {
      width: 80%;
    }

    .floating-particle {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      animation: float 8s ease-in-out infinite;
      pointer-events: none;
    }

    .floating-particle:nth-child(1) { 
      top: 20%; left: 15%; width: 12px; height: 12px; 
      animation-delay: 0s; 
    }
    .floating-particle:nth-child(2) { 
      top: 60%; right: 20%; width: 8px; height: 8px; 
      animation-delay: 2s; 
    }
    .floating-particle:nth-child(3) { 
      bottom: 30%; left: 25%; width: 15px; height: 15px; 
      animation-delay: 4s; 
    }
    .floating-particle:nth-child(4) { 
      top: 40%; right: 35%; width: 10px; height: 10px; 
      animation-delay: 6s; 
    }

    .container-animated {
      animation: slideIn 0.8s ease-out;
    }

    .mobile-menu-animated {
      animation: fadeInScale 0.4s ease-out;
    }

    @media (max-width: 768px) {
      .floating-particle {
        display: none;
      }
    }
  `

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
        <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
      </Head>
      <header style={headerStyle}>
        <div style={headerOverlay}></div>
        
        {/* Floating Animation Particles */}
        <div style={floatingElements}>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
          <div className="floating-particle"></div>
        </div>

        <div className="container container-animated" style={{position: 'relative', zIndex: 10}}>
          <div className="d-flex align-items-center justify-content-between py-3">
            {/* Logo Section - Enhanced */}
            <div className="d-flex align-items-center">
              <a href="/" className="d-flex align-items-center text-decoration-none" style={{ gap: "15px" }}>
                <img 
                  src="/assets/img/gallery/nav-logo.png" 
                  alt=" " 
                  style={logoStyle}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1) rotate(5deg)"
                    e.target.style.filter = "drop-shadow(0 12px 25px rgba(59, 130, 246, 0.8))"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1.02) rotate(0deg)"
                    e.target.style.filter = "drop-shadow(0 8px 20px rgba(59, 130, 246, 0.6))"
                  }}
                  onError={(e) => {
                    e.target.style.display = "none"
                    e.target.parentNode.innerHTML += `
                      <div style="
                        color: #ffffff; 
                        font-size: 22px; 
                        font-weight: 800;
                        text-shadow: 0 4px 8px rgba(0,0,0,0.4);
                        background: linear-gradient(45deg, #ffffff, #e0f2fe);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                      ">
                        Smart Computer Institute
                      </div>
                    `
                  }}
                />
              </a>
            </div>

            {/* Desktop Navigation - Enhanced */}
            <nav className="d-none d-lg-flex align-items-center" style={{ gap: "12px" }}>
              <a 
                href="#home" 
                style={createNavLinkStyle()}
                className="nav-link-enhanced"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)"
                  e.target.style.transform = "translateY(-3px) scale(1.05)"
                  e.target.style.boxShadow = "0 12px 30px rgba(255,255,255,0.2)"
                  e.target.style.textShadow = "0 4px 12px rgba(0,0,0,0.5)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.transform = "translateY(0) scale(1)"
                  e.target.style.boxShadow = "none"
                  e.target.style.textShadow = "0 2px 8px rgba(0,0,0,0.3)"
                }}
              >
                Home
              </a>
              <a 
                href="#about_area" 
                style={createNavLinkStyle()}
                className="nav-link-enhanced"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)"
                  e.target.style.transform = "translateY(-3px) scale(1.05)"
                  e.target.style.boxShadow = "0 12px 30px rgba(255,255,255,0.2)"
                  e.target.style.textShadow = "0 4px 12px rgba(0,0,0,0.5)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.transform = "translateY(0) scale(1)"
                  e.target.style.boxShadow = "none"
                  e.target.style.textShadow = "0 2px 8px rgba(0,0,0,0.3)"
                }}
              >
                About Us
              </a>
              <a 
                href="#popular_courses" 
                style={createNavLinkStyle()}
                className="nav-link-enhanced"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)"
                  e.target.style.transform = "translateY(-3px) scale(1.05)"
                  e.target.style.boxShadow = "0 12px 30px rgba(255,255,255,0.2)"
                  e.target.style.textShadow = "0 4px 12px rgba(0,0,0,0.5)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.transform = "translateY(0) scale(1)"
                  e.target.style.boxShadow = "none"
                  e.target.style.textShadow = "0 2px 8px rgba(0,0,0,0.3)"
                }}
              >
                Courses
              </a>
              <a 
                href="#student_gallery" 
                style={createNavLinkStyle()}
                className="nav-link-enhanced"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)"
                  e.target.style.transform = "translateY(-3px) scale(1.05)"
                  e.target.style.boxShadow = "0 12px 30px rgba(255,255,255,0.2)"
                  e.target.style.textShadow = "0 4px 12px rgba(0,0,0,0.5)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.transform = "translateY(0) scale(1)"
                  e.target.style.boxShadow = "none"
                  e.target.style.textShadow = "0 2px 8px rgba(0,0,0,0.3)"
                }}
              >
                Gallery
              </a>
              <a 
                href="#student_contact" 
                style={createNavLinkStyle()}
                className="nav-link-enhanced"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)"
                  e.target.style.transform = "translateY(-3px) scale(1.05)"
                  e.target.style.color = "white!important"
                  e.target.style.boxShadow = "0 12px 30px rgba(255,255,255,0.2)"
                  e.target.style.textShadow = "0 4px 12px rgba(0,0,0,0.5)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                  e.target.style.transform = "translateY(0) scale(1)"
                  e.target.style.boxShadow = "none"
                  e.target.style.textShadow = "0 2px 8px rgba(0,0,0,0.3)"
                }}
              >
                Contact 
              </a>

              {/* Login Dropdown - Enhanced */}
              <div style={dropdownStyle} className="dropdown">
                <button
                  style={loginButtonStyle}
                  className="dropdown-toggle nav-link-enhanced"
                  data-bs-toggle="dropdown"
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(255,255,255,0.15)"
                    e.target.style.transform = "translateY(-3px) scale(1.05)"
                    e.target.style.boxShadow = "0 12px 30px rgba(255,255,255,0.2)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent"
                    e.target.style.transform = "translateY(0) scale(1)"
                    e.target.style.boxShadow = "none"
                  }}
                >
                  <span style={{ color: "#ffffff", fontWeight: "600" }}>Login</span>
                </button>
                <ul className="dropdown-menu" style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.95)", 
                  border: "none", 
                  borderRadius: "16px", 
                  boxShadow: "0 20px 60px rgba(14, 165, 233, 0.3)",
                  backdropFilter: "blur(30px)",
                  animation: "fadeInScale 0.3s ease-out"
                }}>
                  <li>
                    <button 
                      onClick={() => router.push("/login")} 
                      className="dropdown-item" 
                      style={{ 
                        color: "#1e40af", 
                        fontWeight: "600",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      Admin
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => router.push("/login")} 
                      className="dropdown-item" 
                      style={{ 
                        color: "#1e40af", 
                        fontWeight: "600",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      Centre
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => router.push("/login")} 
                      className="dropdown-item" 
                      style={{ 
                        color: "#1e40af", 
                        fontWeight: "600",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      Student
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => router.push("/login")} 
                      className="dropdown-item" 
                      style={{ 
                        color: "#1e40af", 
                        fontWeight: "600",
                        padding: "12px 24px",
                        borderRadius: "12px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      Coordinator
                    </button>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Contact Button - Enhanced */}
            <div className="d-none d-lg-flex">
              <a 
                href="tel:+918400149333" 
                style={btnPrimaryStyle}
                onMouseEnter={(e) => {
                  e.target.style.background = "linear-gradient(135deg, #059669, #047857)"
                  e.target.style.transform = "translateY(-5px) scale(1.05)"
                  e.target.style.boxShadow = "0 15px 40px rgba(16, 185, 129, 0.6)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "linear-gradient(135deg, #10b981, #059669)"
                  e.target.style.transform = "translateY(0) scale(1)"
                  e.target.style.boxShadow = "0 8px 25px rgba(16, 185, 129, 0.4)"
                }}
              >
                <svg
                  style={{ width: "20px", height: "20px", marginRight: "10px", color: "#ffffff" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span style={{ color: "#ffffff", fontWeight: "700" }}>+91 84001 49333</span>
              </a>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="d-lg-none btn"
              style={{ 
                padding: "12px", 
                borderRadius: "12px", 
                border: "none", 
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 8px 25px rgba(255,255,255,0.2)",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease"
              }}
            >
              <svg
                style={{ width: "24px", height: "24px", color: "#ffffff" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu - Enhanced */}
          {isMobileMenuOpen && (
            <div
              className="d-lg-none mobile-menu-animated"
              style={{ 
                borderTop: "1px solid rgba(255,255,255,0.2)", 
                paddingTop: "24px", 
                paddingBottom: "24px",
                backgroundColor: "rgba(0,0,0,0.1)",
                borderRadius: "0 0 20px 20px",
                marginTop: "12px",
                backdropFilter: "blur(30px)"
              }}
            >
              <nav className="d-flex flex-column" style={{ gap: "16px" }}>
                <a href="#home" style={{...createNavLinkStyle(), textAlign: "center"}}>
                  Home
                </a>
                <a href="#about_area" style={{...createNavLinkStyle(), textAlign: "center"}}>
                  About Us
                </a>
                <a href="#popular_courses" style={{...createNavLinkStyle(), textAlign: "center"}}>
                  Courses
                </a>
                <a href="#student_gallery" style={{...createNavLinkStyle(), textAlign: "center"}}>
                  Gallery
                </a>
                
                <div style={{ paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
                  <p style={{ 
                    color: "#ffffff", 
                    fontSize: "18px", 
                    marginBottom: "16px", 
                    fontWeight: "700", 
                    textShadow: "0 4px 8px rgba(0,0,0,0.4)",
                    textAlign: "center"
                  }}>
                    Login Options:
                  </p>
                  <div className="row g-3">
                    <div className="col-6">
                      <button
                        onClick={() => router.push("/login")}
                        className="btn w-100"
                        style={{ ...btnPrimaryStyle, fontSize: "14px", padding: "12px 10px" }}
                      >
                        <span style={{ color: "#ffffff", fontWeight: "600" }}>Admin</span>
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => router.push("/login")}
                        className="btn w-100"
                        style={{ ...btnPrimaryStyle, fontSize: "14px", padding: "12px 10px" }}
                      >
                        <span style={{ color: "#ffffff", fontWeight: "600" }}>Centre</span>
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => router.push("/login")}
                        className="btn w-100"
                        style={{ ...btnPrimaryStyle, fontSize: "14px", padding: "12px 10px" }}
                      >
                        <span style={{ color: "#ffffff", fontWeight: "600" }}>Student</span>
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                        onClick={() => router.push("/login")}
                        className="btn w-100"
                        style={{ ...btnPrimaryStyle, fontSize: "14px", padding: "12px 10px" }}
                      >
                        <span style={{ color: "#ffffff", fontWeight: "600" }}>Coordinator</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="tel:+918400149333" 
                  style={{ ...btnPrimaryStyle, justifyContent: "center", marginTop: "24px" }}
                >
                  <svg
                    style={{ width: "20px", height: "20px", marginRight: "10px", color: "#ffffff" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span style={{ color: "#ffffff", fontWeight: "700" }}>+91 84001 49333</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </Fragment>
  )
}

export default Header
