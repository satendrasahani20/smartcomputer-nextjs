import React from "react";

const PopularCourses = () => {
  return (
    <div className="popular_courses" id="popular_courses">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section_title text-center mb-100">
              <h3>Popular Courses</h3>
              <p>
                Your domain control panel is designed for ease-of-use and <br />
                allows for all aspects of your domains.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="all_courses">
        <div className="container">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single_courses">
                    <div className="thumb">
                      <a href="#">
                        <img src="assets/img/courses/1.png" alt="" />
                      </a>
                    </div>
                    <div className="courses_info">
                      <span>Photoshop</span>
                      <h3>
                        <a href="#">
                          Mobile App design step by step <br />
                          from beginner
                        </a>
                      </h3>
                      <div className="star_prise d-flex justify-content-between">
                        <div className="star">
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div className="prise">
                          <span className="offer">$89.00</span>
                          <span className="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single_courses">
                    <div className="thumb">
                      <a href="#">
                        <img src="assets/img/courses/2.png" alt="" />
                      </a>
                    </div>
                    <div className="courses_info">
                      <span>Adobe XD</span>
                      <h3>
                        <a href="#">UI/UX design with Adobe XD with Anderson</a>
                      </h3>
                      <div className="star_prise d-flex justify-content-between">
                        <div className="star">
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div className="prise">
                          <span className="offer">$89.00</span>
                          <span className="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single_courses">
                    <div className="thumb">
                      <a href="#">
                        <img src="assets/img/courses/3.png" alt="" />
                      </a>
                    </div>
                    <div className="courses_info">
                      <span>Wordpress</span>
                      <h3>
                        <a href="#">
                          Wordpress theme development <br />
                          from scratch
                        </a>
                      </h3>
                      <div className="star_prise d-flex justify-content-between">
                        <div className="star">
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div className="prise">
                          <span className="offer">$89.00</span>
                          <span className="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single_courses">
                    <div className="thumb">
                      <a href="#">
                        <img src="assets/img/courses/4.png" alt="" />
                      </a>
                    </div>
                    <div className="courses_info">
                      <span>Photoshop</span>
                      <h3>
                        <a href="#">
                          Mobile App design step by step <br />
                          from beginner
                        </a>
                      </h3>
                      <div className="star_prise d-flex justify-content-between">
                        <div className="star">
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div className="prise">
                          <span className="offer">$89.00</span>
                          <span className="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single_courses">
                    <div className="thumb">
                      <img src="assets/img/courses/5.png" alt="" />
                    </div>
                    <div className="courses_info">
                      <span>UI/UX</span>
                      <h3>
                        <a href="#">
                          How to complete user research <br />
                          and make work flow
                        </a>
                      </h3>
                      <div className="star_prise d-flex justify-content-between">
                        <div className="star">
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div className="prise">
                          <span className="offer">$89.00</span>
                          <span className="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single_courses">
                    <div className="thumb">
                      <a href="#">
                        <img src="assets/img/courses/6.png" alt="" />
                      </a>
                    </div>
                    <div className="courses_info">
                      <span>Wordpress</span>
                      <h3>
                        <a href="#">
                          Commitment to dedicated <br />
                          Support
                        </a>
                      </h3>
                      <div className="star_prise d-flex justify-content-between">
                        <div className="star">
                          <i className="flaticon-mark-as-favorite-star"></i>
                          <span>(4.5)</span>
                        </div>
                        <div className="prise">
                          <span className="offer">$89.00</span>
                          <span className="active_prise"> $49 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourses;
