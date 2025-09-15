"use client"

import { useRouter } from "next/router"
import { useState } from "react"

const HomeSlider = () => {
  const router = useRouter()
  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/result/${search}`)
    }
  }

  const heroStyle = {
    background: "linear-gradient(-45deg, #1e40af, #059669, #3b82f6, #10b981)",
    backgroundSize: "400% 400%",
    animation: "gradientWave 8s ease infinite",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  }

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0,0,0,0.05)",
    zIndex: 1,
  }

  const particlesStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    pointerEvents: "none"
  }

  const contentStyle = {
    position: "relative",
    zIndex: 10,
    paddingTop: "120px",
    paddingBottom: "80px",
  }

  const titleStyle = {
    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
    fontWeight: "800",
    color: "#ffffff",
    lineHeight: "1.1",
    marginBottom: "24px",
    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
    animation: "slideInDown 1.2s ease-out"
  }

  const accentTextStyle = {
    
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "",
    backgroundClip: "text",
    animation: "shimmer 3s ease-in-out infinite"
  }

  const subtitleStyle = {
    fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
    color: "rgba(255,255,255,0.9)",
    marginBottom: "40px",
    maxWidth: "650px",
    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
    animation: "slideInUp 1.4s ease-out"
  }

  const searchBoxStyle = {
    backgroundColor: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(25px)",
    borderRadius: "24px",
    padding: "32px",
    border: "2px solid rgba(255,255,255,0.15)",
    marginBottom: "48px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
    animation: "fadeInScale 1.6s ease-out"
  }

  const inputStyle = {
    width: "100%",
    padding: "20px 28px 20px 60px",
    borderRadius: "16px",
    border: "2px solid rgba(255,255,255,0.1)",
    fontSize: "16px",
    backgroundColor: "rgba(255,255,255,0.95)",
    color: "#1f2937",
    outline: "none",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    backdropFilter: "blur(10px)"
  }

  const buttonStyle = {
    width: "100%",
    padding: "20px 28px",
    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    color: "#ffffff",
    border: "none",
    borderRadius: "16px",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    boxShadow: "0 12px 35px rgba(59, 130, 246, 0.4)",
    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    animation: "buttonGlow 4s ease-in-out infinite"
  }

  // const statsStyle = {
  //   display: "grid",
  //   gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  //   gap: "24px",
  //   paddingTop: "48px",
  //   animation: "slideInUp 1.8s ease-out"
  // }

  // const statItemStyle = {
  //   textAlign: "center",
  //   padding: "20px",
  //   backgroundColor: "rgba(255,255,255,0.08)",
  //   borderRadius: "20px",
  //   backdropFilter: "blur(20px)",
  //   border: "1px solid rgba(255,255,255,0.1)",
  //   transition: "all 0.3s ease"
  // }

  // const statNumberStyle = {
  //   fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
  //   fontWeight: "800",
  //   WebkitBackgroundClip: "text",
  //   backgroundClip: "text",
  //   display: "block",
  //   marginBottom: "8px"
  // }

  // const statLabelStyle = {
  //   fontSize: "14px",
  //   color: "rgba(255,255,255,0.8)",
  //   fontWeight: "600",
  //   textShadow: "0 1px 3px rgba(0,0,0,0.3)"
  // }

  const imageContainerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "slideInRight 1.6s ease-out"
  }

  const imageWrapperStyle = {
    backgroundColor: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(25px)",
    borderRadius: "32px",
    padding: "40px",
    border: "2px solid rgba(255,255,255,0.15)",
    // maxWidth: "550px",
    // boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
    transition: "all 0.4s ease"
  }

  const imageStyle = {
    width: "100%",
    borderRadius: "20px",
    marginleftf:"20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    transition: "transform 0.4s ease"
  }

  // Advanced Animation CSS
  const animationCSS = `
    @keyframes gradientWave {
      0% { background-position: 0% 50%; }
      25% { background-position: 100% 50%; }
      50% { background-position: 100% 100%; }
      75% { background-position: 0% 100%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes slideInDown {
      0% {
        transform: translateY(-50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slideInUp {
      0% {
        transform: translateY(50px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes slideInRight {
      0% {
        transform: translateX(50px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
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

    @keyframes shimmer {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }

    @keyframes buttonGlow {
      0%, 100% {
        box-shadow: 0 12px 35px rgba(59, 130, 246, 0.4);
        transform: scale(1);
      }
      50% {
        box-shadow: 0 16px 45px rgba(59, 130, 246, 0.6);
        transform: scale(1.02);
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-20px) rotate(120deg); }
      66% { transform: translateY(-10px) rotate(240deg); }
    }

    @keyframes particle1 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
      50% { transform: translate(50px, -30px) scale(1.5); opacity: 1; }
    }

    @keyframes particle2 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
      50% { transform: translate(-40px, 60px) scale(1.2); opacity: 1; }
    }

    @keyframes particle3 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
      50% { transform: translate(80px, 20px) scale(1.3); opacity: 1; }
    }

    .floating-particle {
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      pointer-events: none;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }

    .particle1 {
      top: 15%; left: 10%; width: 20px; height: 20px;
      animation: particle1 8s infinite;
    }

    .particle2 {
      top: 60%; right: 15%; width: 15px; height: 15px;
      animation: particle2 12s infinite;
    }

    .particle3 {
      bottom: 25%; left: 25%; width: 25px; height: 25px;
      animation: particle3 10s infinite;
    }

    .particle4 {
      top: 30%; right: 30%; width: 12px; height: 12px;
      animation: float 6s ease-in-out infinite;
    }

    .particle5 {
      bottom: 45%; left: 15%; width: 18px; height: 18px;
      animation: float 9s ease-in-out infinite reverse;
    }

    .search-icon-container {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: #3b82f6;
      transition: all 0.3s ease;
    }

    .image-hover:hover {
      transform: scale(1.05) rotate(2deg) !important;
    }

    .wrapper-hover:hover {
      transform: translateY(-10px) !important;
      box-shadow: 0 35px 70px rgba(0,0,0,0.25) !important;
    }

    .stat-hover:hover {
      transform: translateY(-5px) scale(1.05) !important;
      background-color: rgba(255,255,255,0.15) !important;
    }

    @media (max-width: 768px) {
      .floating-particle {
        display: none;
      }
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
      <section id="home" style={heroStyle}>
        <div style={overlayStyle}></div>

        {/* Floating Particles */}
        <div style={particlesStyle}>
          <div className="floating-particle particle1"></div>
          <div className="floating-particle particle2"></div>
          <div className="floating-particle particle3"></div>
          <div className="floating-particle particle4"></div>
          <div className="floating-particle particle5"></div>
        </div>

        <div className="container" style={contentStyle}>
          <div className="row align-items-center g-5">
            {/* Content Section */}
            <div className="col-lg-6">
              <div className="text-center text-lg-start">
                <h2 style={titleStyle}>
                  SMART COMPUTER
                  <span style={{ display: "block", ...accentTextStyle }}>INSTITUTE</span>
                </h2>
                <p style={subtitleStyle}>
                  Computer is Where Science and Art Break Even - Empowering the next generation with cutting-edge technology education
                </p>

                {/* Enhanced Search Section */}
                <div style={searchBoxStyle}>
                  <h3 style={{ 
                    fontSize: "20px", 
                    fontWeight: "700", 
                    marginBottom: "20px", 
                    color: "#ffffff",
                    textAlign: "center",
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)"
                  }}>
                    🔍 Verify Your Certificate
                  </h3>
                  <form onSubmit={handleSearch}>
                    <div style={{ marginBottom: "20px", position: "relative" }}>
                      <div className="search-icon-container">
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Enter certificate number or student ID..."
                        style={inputStyle}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(59, 130, 246, 0.5)"
                          e.target.style.boxShadow = "0 12px 35px rgba(59, 130, 246, 0.2)"
                          e.target.style.transform = "translateY(-2px)"
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(255,255,255,0.1)"
                          e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)"
                          e.target.style.transform = "translateY(0)"
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      style={buttonStyle}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-3px) scale(1.02)"
                        e.target.style.boxShadow = "0 20px 50px rgba(59, 130, 246, 0.6)"
                        e.target.style.background = "linear-gradient(135deg, #2563eb, #1e40af)"
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0) scale(1)"
                        e.target.style.boxShadow = "0 12px 35px rgba(59, 130, 246, 0.4)"
                        e.target.style.background = "linear-gradient(135deg, #3b82f6, #1d4ed8)"
                      }}
                    >
                      Search Certificate
                    </button>
                  </form>
                </div>

                {/* Enhanced Stats */}
                
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="col-lg-6">
              <div style={imageContainerStyle}>
                <div 
                  style={imageWrapperStyle}
                  className="wrapper-hover"
                >
                  <img
                    src="/assets/img/gallery/edu-student.png"
                    alt="Smart Computer Institute Education"
                    style={imageStyle}
                    className="image-hover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeSlider
