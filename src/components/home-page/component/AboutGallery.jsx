"use client"

import { useState } from "react"

const AboutGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const students = [
    {
      id: 1,

      image: "/assets/img/gallery/gallery-img.jpeg",
      category: "web-dev",
      year: "2023",
    },
    {
      id: 2,
      image: "/assets/img/gallery/gallery-img-1.png",
      category: "marketing",
      year: "2023",
    },
    {
      id: 3,
      image: "/assets/img/gallery/gallery-img-2.png",
      category: "design",
      year: "2024",
    },
    {
      id: 4,
   
      image: "/assets/img/gallery/group-1.png",
      category: "data",
      year: "2023",
    },
    {
      id: 5,
      image: "/assets/img/gallery/group-2.png",
      category: "mobile",
      year: "2022",
    },
    {
      id: 6,
      image: "/assets/img/gallery/gallery-img-2.png",
      category: "security",
      year: "2025",
    },
  ]

  const categories = [
    { id: "all", name: "All Students", count: students.length },
    { id: "web-dev", name: "Web Development", count: students.filter((s) => s.category === "web-dev").length },
    { id: "design", name: "Design", count: students.filter((s) => s.category === "design").length },
    { id: "marketing", name: "Marketing", count: students.filter((s) => s.category === "marketing").length },
    { id: "data", name: "Data Science", count: students.filter((s) => s.category === "data").length },
    { id: "mobile", name: "Mobile Dev", count: students.filter((s) => s.category === "mobile").length },
  ]

  const filteredStudents =
    activeCategory === "all" ? students : students.filter((student) => student.category === activeCategory)

  // Simplified styles for clean card design
  const styles = {
    section: {
      padding: '80px 0',
      backgroundColor: '#000',
      color: "#000",
      // backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh'

    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    headerContainer: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '24px',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.3)'
    },
    mainTitle: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: '800',
      marginBottom: '24px',
      color: '#ffffff',
      lineHeight: '1.2',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    titleSpan: {
      display: 'block',
      color: '#fbbf24'
    },
    description: {
      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
      color: 'rgba(255, 255, 255, 0.9)',
      lineHeight: '1.6',
      maxWidth: '700px',
      margin: '0 auto'
    },
    filterContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '50px'
    },
    filterButton: {
      padding: '10px 20px',
      borderRadius: '25px',
      fontWeight: '600',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer',
      backdropFilter: 'blur(10px)'
    },
    activeFilter: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: '#667eea',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-2px)'
    },
    inactiveFilter: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
      marginBottom: '60px'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      position: 'relative',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    },
    imageContainer: {
      position: 'relative',
      height: '280px',
      overflow: 'hidden'
    },
    studentImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    
    yearBadge: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      color: '#667eea',
      padding: '6px 12px',
      borderRadius: '15px',
      fontSize: '12px',
      fontWeight: '600',
      backdropFilter: 'blur(10px)'
    },
    cardContent: {
      padding: '30px',
      textAlign: 'center'
    },
    studentName: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1a202c',
      marginBottom: '8px',
      lineHeight: '1.3'
    },
    course: {
      fontSize: '16px',
      color: '#64748b',
      fontWeight: '500',
      marginBottom: '12px'
    },
    achievement: {
      fontSize: '14px',
      color: '#667eea',
      fontWeight: '600',
      marginBottom: '25px',
      lineHeight: '1.4'
    },
    viewProfileButton: {
      background: 'linear-gradient(135deg, #667eea, #00b7eaff)',
      color: '#ffffff',
      padding: '12px 30px',
      borderRadius: '25px',
      border: 'none',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },
    ctaSection: {
      textAlign: 'center',
      padding: '50px 30px',
      backgroundColor: 'rgba(0, 130, 147, 1)',
      borderRadius: '20px',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: '#ffffff'
    },
    ctaTitle: {
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
      fontWeight: '700',
      marginBottom: '16px'
    },
    ctaDescription: {
      fontSize: '18px',
      opacity: 0.9,
      marginBottom: '32px',
      maxWidth: '600px',
      margin: '0 auto 32px'
    },
    ctaButtons: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    ctaButtonPrimary: {
      padding: '14px 28px',
      backgroundColor: '#ffffff',
      color: '#667eea',
      borderRadius: '12px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    ctaButtonSecondary: {
      padding: '14px 28px',
      backgroundColor: 'transparent',
      color: '#ffffff',
      borderRadius: '12px',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'inline-block'
    }
  }

  // Responsive CSS
  const responsiveCSS = `
    @media (max-width: 768px) {
      .grid {
        grid-template-columns: 1fr !important;
        gap: 25px !important;
      }
      
      .filter-container {
        flex-direction: column !important;
        align-items: center !important;
      }
      
      .cta-buttons {
        flex-direction: column !important;
        align-items: center !important;
      }
      
      .section {
        padding: 60px 0 !important;
      }
      
      .card-content {
        padding: 25px !important;
      }
    }

    @media (max-width: 480px) {
      .container {
        padding: 0 15px !important;
      }
      
      .image-container {
        height: 240px !important;
      }
    }
  `

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: responsiveCSS }} />
      <section style={styles.section} className="section" id="student_gallery">
        <div style={styles.container} className="container">
          {/* Section Header */}
          <div style={styles.headerContainer}>
            <div style={styles.badge}>
              🎓 Student Success Stories
            </div>
            <h2 style={styles.mainTitle}>
              Meet Our Successful
              <span style={styles.titleSpan}>Alumni & Students</span>
            </h2>
            <p style={styles.description}>
              Discover the inspiring journeys of our students who have transformed their careers 
              and achieved remarkable success in their chosen fields.
            </p>
          </div>

          {/* Category Filter */}
          <div style={styles.filterContainer} className="filter-container">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  ...styles.filterButton,
                  ...(activeCategory === category.id ? styles.activeFilter : styles.inactiveFilter)
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
                    e.target.style.transform = 'translateY(-2px)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                    e.target.style.transform = 'translateY(0)'
                  }
                }}
              >
                {category.name}
                <span style={{ 
                  marginLeft: '14px', 
                  fontSize: '12px', 
                  opacity: 0.8,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  padding: '4px 8px',
                  borderRadius: '10px'
                }}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Students Grid */}
          <div style={styles.grid} className="grid">
            {filteredStudents.map((student) => (
              <div 
                key={student.id} 
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)'
                  
                  const image = e.currentTarget.querySelector('.student-image')
                  const overlay = e.currentTarget.querySelector('.image-overlay')
                  const viewIcon = e.currentTarget.querySelector('.view-icon')
                  
                  if (image) image.style.transform = 'scale(1.1)'
                  if (overlay) overlay.style.opacity = '1'
                  if (viewIcon) viewIcon.style.transform = 'scale(1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
                  
                  const image = e.currentTarget.querySelector('.student-image')
                  const overlay = e.currentTarget.querySelector('.image-overlay')
                  const viewIcon = e.currentTarget.querySelector('.view-icon')
                  
                  if (image) image.style.transform = 'scale(1)'
                  if (overlay) overlay.style.opacity = '0'
                  if (viewIcon) viewIcon.style.transform = 'scale(0.8)'
                }}
              >
                {/* Student Image */}
                <div style={styles.imageContainer} className="image-container">
                  <img
                    src={student.image || "/placeholder.svg"}
                    alt={student.name}
                    style={styles.studentImage}
                    className="student-image"
                  />
                 
                  <div style={styles.yearBadge}>
                    Class of {student.year}
                  </div>
                </div>

                {/* Card Content */}
                <div style={styles.cardContent} className="card-content">
                  {/* Title (Student Name) */}
                  <h3 style={styles.studentName}>{student.name}</h3>
                  
                  {/* Subtitle (Course) */}
                  <p style={styles.course}>{student.course}</p>
                  
                  {/* Achievement */}
                  <p style={styles.achievement}>{student.achievement}</p>
                  
                  {/* Action Button */}
                  <button 
                    style={styles.viewProfileButton}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)'
                      e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)'
                      e.target.style.background = 'linear-gradient(135deg, #5a67d8, #6b46c1)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)'
                      e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)'
                      e.target.style.background = 'linear-gradient(135deg, #667eea, #764ba2)'
                    }}
                  >
                    <span>👤</span>
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div style={styles.ctaSection}>
            <h3 style={styles.ctaTitle}>Ready to Join Our Success Stories?</h3>
            <p style={styles.ctaDescription}>
              Take the first step towards your dream career. Our expert faculty and industry-aligned 
              curriculum will help you achieve your professional goals.
            </p>
            <div style={styles.ctaButtons} className="cta-buttons">
              <a 
                href="#" 
                style={styles.ctaButtonPrimary}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#f8fafc'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ffffff'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                Apply Now
              </a>
              <a 
                href="#" 
                style={styles.ctaButtonSecondary}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                  e.target.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'cyan'
                  e.target.style.color = "white"
                  e.target.style.borderColor = 'cyan'
                  e.target.style.transform = 'translateY(0)'
                }}
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutGallery
