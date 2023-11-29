import React from 'react'

const AboutArea = () => {
  return (
    <div className="about_area" id="about_area">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-6">
            <div className="single_about_info">
              <h3>
                Over 7000 Tutorials <br />
                from 20 Courses
              </h3>
              <p>
                Our set he for firmament morning sixth subdue darkness creeping
                gathered divide our let god moving. Moving in fourth air night
                bring upon you’re it beast let you dominion likeness open place
                day great wherein heaven sixth lesser subdue fowl
              </p>
              <a href="#" className="boxed_btn">Enroll a Course</a>
            </div>
          </div>
          <div className="col-xl-6 offset-xl-1 col-lg-6">
            <div className="about_tutorials">
              <div className="courses">
                <div className="inner_courses">
                  <div className="text_info">
                    <span>20+</span>
                    <p>Courses</p>
                  </div>
                </div>
              </div>
              <div className="courses-blue">
                <div className="inner_courses">
                  <div className="text_info">
                    <span>7638</span>
                    <p>Courses</p>
                  </div>
                </div>
              </div>
              <div className="courses-sky">
                <div className="inner_courses">
                  <div className="text_info">
                    <span>230+</span>
                    <p>Courses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutArea