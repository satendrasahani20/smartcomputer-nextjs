const PopularCourses = () => {
  // Computer Institute specific courses
  const courses = [
    {
      id: 1,
      title: "ADCA + CCC",
      subtitle: "Advanced Diploma in Computer Applications with CCC",
      image: "/assets/img/gallery/course-5.png",
    },
    {
      id: 2,
      title: "BCA + DCA", 
      subtitle: "Bachelor & Diploma in Computer Applications",
      image: "/assets/img/gallery/course-1.png",
    },
    {
      id: 3,
      title: "Tally + Accounting",
      subtitle: "Complete Accounting & GST with Tally Prime",
      image: "/assets/img/gallery/course-3.png",
    },
    {
      id: 4,
      title: "DTP + CorelDraw",
      subtitle: "Desktop Publishing & Graphic Design",
      image: "/assets/img/gallery/course-4.png",
    },
    {
      id: 5,
      title: "Web Development",
      subtitle: "HTML, CSS, JavaScript & PHP Programming",
      image: "/assets/img/gallery/course-2.png",
    },
    {
      id: 6,
      title: "Hardware + Networking",
      subtitle: "Computer Repair & Network Administration",
      image: "/assets/img/gallery/course-6.png",
    }
  ]

  const styles = {
    section: {
      padding: "80px 0",
      backgroundColor: "#f8fafc",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px"
    },
    header: {
      textAlign: "center",
      marginBottom: "60px",
    },
    headerBadge: {
      display: "inline-block",
      backgroundColor: "#3b82f6",
      color: "#ffffff", 
      padding: "8px 20px",
      borderRadius: "25px",
      fontSize: "16px",
      fontWeight: "600",
      marginBottom: "16px"
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#1a202c",
      marginBottom: "16px"
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#64748b",
      maxWidth: "600px",
      margin: "0 auto"
    },
    coursesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px",
    },
    courseCard: {
      backgroundColor: "#ffffff",
      borderRadius: "16px", 
      overflow: "hidden",
      boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      border: "1px solid #e2e8f0",
      cursor: "pointer",
      position: "relative"
    },
    imageContainer: {
      position: "relative",
      height: "200px",
      overflow: "hidden",
      background: "linear-gradient(135deg, #3b82f6, #1d4ed8)"
    },
    courseImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      backgroundColor: "#f1f5f9",
      transition: "transform 0.3s ease"
    },
   
    cardContent: {
      padding: "24px",
      textAlign: "center"
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "700",
      color: "#1a202c",
      lineHeight: "1.3",
      marginBottom: "8px"
    },
    cardSubtitle: {
      fontSize: "14px",
      color: "#64748b",
      lineHeight: "1.4",
      margin: "0"
    },
    enrollButton: {
      marginTop: "16px",
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      border: "none",
      padding: "10px 24px",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.3s ease"
    }
  }

  const responsiveCSS = `
    @media (max-width: 1024px) {
      .courses-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 25px !important;
      }
    }
    
    @media (max-width: 768px) {
      .courses-grid {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
      .section {
        padding: 60px 0 !important;
      }
      .title {
        font-size: 2rem !important;
      }
    }
    
    @media (max-width: 480px) {
      .container {
        padding: 0 15px !important;
      }
      .card-content {
        padding: 20px !important;
      }
      .image-container {
        height: 180px !important;
      }
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: responsiveCSS }} />
      <section style={styles.section} className="section" id="popular_courses">
        <div style={styles.container}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerBadge}>💻 Computer Courses</div>
            <h2 style={styles.title}>Professional Computer Courses</h2>
            <p style={styles.subtitle}>
              Master essential computer skills with our government-approved certification courses
            </p>
          </div>

          {/* Computer Course Cards */}
          <div style={styles.coursesGrid} className="courses-grid">
            {courses.map((course) => (
              <div 
                key={course.id} 
                style={styles.courseCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)"
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.15)"
                  
                  const image = e.currentTarget.querySelector('.course-image')
                  if (image) image.style.transform = "scale(1.05)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)"
                  
                  const image = e.currentTarget.querySelector('.course-image')
                  if (image) image.style.transform = "scale(1)"
                }}
              >
                {/* Course Image */}
                <div style={styles.imageContainer} className="image-container">
                  <img 
                    src={course.image || "/api/placeholder/400/200"} 
                    alt={course.title}
                    style={styles.courseImage}
                    className="course-image"
                  />
                 
                </div>

                {/* Course Content */}
                <div style={styles.cardContent} className="card-content">
                  <h3 style={styles.cardTitle}>{course.title}</h3>
                  <p style={styles.cardSubtitle}>{course.subtitle}</p>
                  
                  <button 
                    style={styles.enrollButton}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#2563eb"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#3b82f6"
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularCourses
