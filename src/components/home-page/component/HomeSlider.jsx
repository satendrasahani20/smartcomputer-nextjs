import { useRouter } from 'next/router'
import React from 'react'

const HomeSlider = () => {
  const router=useRouter();
  return (
    <div className="slider_area">
    <div
      className="single_slider d-flex align-items-center justify-content-center slider_bg_1"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xl-6 col-md-6">
            <div className="illastrator_png">
              <img src="assets/img/banner/edu_ilastration.png" alt="" />
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="slider_info">
              <h3>
                Learn your <br />
                Favorite Course <br />
                From Here
              </h3>
              <a onClick={()=>router.push("/login")} href="#" className="boxed_btn">Browse Our Courses</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeSlider