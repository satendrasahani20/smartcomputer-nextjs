"use client"

const LeadershipSection = () => {
  const sectionStyle = {
    background: "linear-gradient(-45deg, #1e40af, #059669, #3b82f6, #10b981)",
    backgroundSize: "400% 400%",
    animation: "gradientWave 8s ease infinite",
    padding: "80px 0",
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
    pointerEvents: "none",
  }

  const contentStyle = {
    position: "relative",
    zIndex: 10,
  }

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "#ffffff",
    borderRadius: "50px",
    fontSize: "16px",
    fontWeight: "700",
    marginBottom: "32px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
    animation: "slideInDown 1.2s ease-out",
  }

  const titleStyle = {
    fontSize: "clamp(2rem, 5vw, 3.5rem)",
    fontWeight: "800",
    color: "#ffffff",
    lineHeight: "1.2",
    marginBottom: "24px",
    textShadow: "0 4px 20px rgba(0,0,0,0.3)",
    animation: "slideInDown 1.4s ease-out",
    textAlign: "center",
  }

  const accentTextStyle = {
    display: "block",
    color: "#fbbf24",
    marginTop: "8px",
  }

  const descriptionStyle = {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: "1.6",
    maxWidth: "700px",
    margin: "0 auto 48px",
    textAlign: "center",
    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
    animation: "slideInUp 1.6s ease-out",
  }

  const cardStyle = {
    backgroundColor: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(25px)",
    borderRadius: "32px",
    padding: "48px",
    border: "2px solid rgba(255,255,255,0.15)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    animation: "fadeInScale 1.8s ease-out",
    textAlign: "center",
    maxWidth: "400px",
    margin: "0 auto",
  }

  const imageContainerStyle = {
    position: "relative",
    width: "200px",
    height: "200px",
    margin: "0 auto 32px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "4px solid rgba(255,255,255,0.3)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  }

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  }

  const nameStyle = {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: "800",
    color: "#ffffff",
    marginBottom: "12px",
    textShadow: "0 4px 12px rgba(0,0,0,0.4)",
  }

  const titleTextStyle = {
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    color: "#fbbf24",
    fontWeight: "600",
    marginBottom: "24px",
    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
  }

  const quoteStyle = {
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.9)",
    fontStyle: "italic",
    lineHeight: "1.6",
    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
  }

  // Animation CSS matching the existing patterns
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

    .leadership-card:hover {
      transform: translateY(-10px) scale(1.02) !important;
      box-shadow: 0 35px 70px rgba(0,0,0,0.25) !important;
    }

    .leadership-image:hover {
      transform: scale(1.1) !important;
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
      <section style={sectionStyle} id="leadership">
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
          {/* Section Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={badgeStyle}>👑 Leadership Team</div>
            <h2 style={titleStyle}>
              Meet Our Visionary
              <span style={accentTextStyle}>Leadership</span>
            </h2>
            <p style={descriptionStyle}>
              Guided by experienced professionals who are committed to excellence and innovation in computer education.
            </p>
          </div>

          {/* Leadership Card */}
          <div style={cardStyle} className="leadership-card">
            {/* Profile Image */}
            <div style={imageContainerStyle}>
              <img
                src="/assets/images/profile.png"
                alt="Vineet Kumar - Manager & Director"
                style={imageStyle}
                className="leadership-image"
              />
            </div>

            {/* Name and Title */}
            <h3 style={nameStyle}>Vineet Kumar</h3>
            <p style={titleTextStyle}>Manager & Director</p>

            {/* Optional Quote */}
            <p style={quoteStyle}>
              "Empowering students with cutting-edge technology education and preparing them for tomorrow's digital
              world."
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeadershipSection
