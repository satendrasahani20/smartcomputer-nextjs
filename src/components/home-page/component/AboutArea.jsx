const AboutArea = () => {
  const sectionStyle = {
    backgroundColor: "#f8fafc",
    padding: "80px 0",
  }

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 16px",
    backgroundColor: "rgba(30, 64, 175, 0.1)",
    color: "#1e40af",
    borderRadius: "50px",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "24px",
  }

  const titleStyle = {
    fontSize: "clamp(1.875rem, 4vw, 3rem)",
    fontWeight: "bold",
    lineHeight: "1.2",
    color: "#1f2937",
    marginBottom: "24px",
  }

  const accentTextStyle = {
    color: "#1e40af",
    display: "block",
  }

  const descriptionStyle = {
    fontSize: "18px",
    color: "#6b7280",
    lineHeight: "1.7",
    marginBottom: "32px",
  }

  const featureItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "16px",
  }

  const iconStyle = {
    width: "32px",
    height: "32px",
    backgroundColor: "#1e40af",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  }

  const featureTitleStyle = {
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "4px",
  }

  const featureDescStyle = {
    color: "#6b7280",
    fontSize: "14px",
  }

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    backgroundColor: "#0deaeeff",
    color: "#ffffff!important",
    padding: "12px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
    marginTop: "16px",
  }

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    border: "1px solid #e5e7eb",
  }

  const cardIconWrapperStyle = {
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 16px",
  }

  const cardNumberStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "8px",
  }

  const cardLabelStyle = {
    fontSize: "14px",
    opacity: 0.8,
  }

  return (
    <section style={sectionStyle} id="about_area">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Content Section */}
          <div className="col-lg-6">
            <div style={badgeStyle}>About Our Institute</div>
            <h2 style={titleStyle}>
              Over 7000 Tutorials from
              <span style={accentTextStyle}>20+ Professional Courses</span>
            </h2>
            <p style={descriptionStyle}>
              Smart Computer Institute has been empowering students with cutting-edge computer education for over a
              decade. Our comprehensive curriculum covers everything from basic computer literacy to advanced
              programming and design skills, ensuring our graduates are industry-ready.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <div style={featureItemStyle}>
                <div style={iconStyle}>
                  <svg
                    style={{ width: "16px", height: "16px", color: "#ffffff" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 style={featureTitleStyle}>Industry-Certified Curriculum</h4>
                  <p style={featureDescStyle}>
                    All our courses are designed with industry standards and certified by leading technology partners.
                  </p>
                </div>
              </div>

              <div style={featureItemStyle}>
                <div style={iconStyle}>
                  <svg
                    style={{ width: "16px", height: "16px", color: "#ffffff" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 style={featureTitleStyle}>Expert Faculty</h4>
                  <p style={featureDescStyle}>
                    Learn from experienced professionals with years of industry experience and teaching expertise.
                  </p>
                </div>
              </div>

              <div style={featureItemStyle}>
                <div style={iconStyle}>
                  <svg
                    style={{ width: "16px", height: "16px", color: "#ffffff" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 style={featureTitleStyle}>Placement Support</h4>
                  <p style={featureDescStyle}>
                    Comprehensive placement assistance with tie-ups with leading companies and startups.
                  </p>
                </div>
              </div>
            </div>

            <a href="#popular_courses" style={buttonStyle}>
              <span>Explore Our Courses</span>
              <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Statistics Cards */}
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-6">
                <div
                  style={{
                    ...cardStyle,
                    background: "linear-gradient(135deg, #1e40af 0%, #1d4ed8 100%)",
                    color: "#ffffff",
                  }}
                >
                  <div style={{ ...cardIconWrapperStyle, backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <svg
                      style={{ width: "32px", height: "32px" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div style={cardNumberStyle}>20+</div>
                  <div style={cardLabelStyle}>Professional Courses</div>
                </div>
              </div>

              <div className="col-6">
                <div
                  style={{
                    ...cardStyle,
                    background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
                    color: "#ffffff",
                  }}
                >
                  <div style={{ ...cardIconWrapperStyle, backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <svg
                      style={{ width: "32px", height: "32px" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div style={cardNumberStyle}>7638</div>
                  <div style={cardLabelStyle}>Successful Students</div>
                </div>
              </div>

              <div className="col-6">
                <div
                  style={{
                    ...cardStyle,
                    background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                    color: "#ffffff",
                  }}
                >
                  <div style={{ ...cardIconWrapperStyle, backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <svg
                      style={{ width: "32px", height: "32px" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div style={cardNumberStyle}>95%</div>
                  <div style={cardLabelStyle}>Success Rate</div>
                </div>
              </div>

              <div className="col-6">
                <div
                  style={{
                    ...cardStyle,
                    background: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
                    color: "#ffffff",
                  }}
                >
                  <div style={{ ...cardIconWrapperStyle, backgroundColor: "rgba(255,255,255,0.2)" }}>
                    <svg
                      style={{ width: "32px", height: "32px" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <div style={cardNumberStyle}>15+</div>
                  <div style={cardLabelStyle}>Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutArea
