import React from 'react'

const HomeFooter = () => {
  return (
    <footer className="footer footer_bg_1">
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-4">
            <div className="footer_widget">
              <div className="footer_logo">
                <a href="#">
                  <img src="assets/images/logo.png" alt="" />
                </a>
              </div>
              <p>
                Firmament morning sixth subdue darkness creeping gathered
                divide our let god moving. Moving in fourth air night bring
                upon it beast let you dominion likeness open place day great.
              </p>
              <div className="socail_links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-2 offset-xl-1 col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">Courses</h3>
              <ul>
                <li><a href="#">DCA</a></li>
                <li><a href="#"> ADCA</a></li>
                <li><a href="#">CCC</a></li>
                <li><a href="#">TALLY</a></li>
                <li><a href="#">Web Design</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 col-lg-2">
            <div className="footer_widget">
              <h3 className="footer_title">Login</h3>
              <ul>
                <li><a href="#">Admin</a></li>
                <li><a href="#">Quardinator</a></li>
                <li><a href="#">Centre</a></li>
                <li><a href="#"> Student</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">Address</h3>
              <p>
                200, D-block, Green lane USA <br />
                +10 367 467 8934 <br />
                edumark@contact.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right_text">
      <div className="container">
        <div className="footer_border"></div>
        <div className="row">
          <div className="col-xl-12">
            <p className="copy_right text-center">
              Copyright &copy;
                {new Date().getFullYear()} {" "}
               All rights reserved | This template is made with
              <i className="fa fa-heart-o" aria-hidden="true"></i> by
              <a href="https://www.smartcomputerinstitute.com/" target="_blank">SMART COMPUTER</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default HomeFooter