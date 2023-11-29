import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

const Header = () => {
  const router=useRouter();
  return (
   <Fragment>
       <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      </Head>
      <header>
        <div className="header-area">
          <div id="sticky-header" className="main-header-area">
            <div className="container-fluid p-0">
              <div className="row align-items-center no-gutters">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo-img">
                    <a href="index.html">
                      <img src="assets/images/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7">
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a className="active" href="#popular_courses">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="#about_area">About Us</a>
                        </li>
                        <li>
                          <a href="#popular_courses">Courses</a>
                        </li>
                        <li>
                          <a href="#our_latest_blog">Gallery</a>
                        </li>
                        <li>
                          <a href="#">
                            Login <i className="ti-angle-down"></i>
                          </a>
                          <ul className="submenu">
                            <li onClick={()=>router.push("/login")}>
                              <a href="#-">Admin</a>
                            </li>
                            <li onClick={()=>router.push("/login")}>
                              <a href="#-">Centre</a>
                            </li>
                            <li onClick={()=>router.push("/login")}>
                              <a href="#-">Student</a>
                            </li>
                            <li onClick={()=>router.push("/login")}>
                              <a href="#-">Quardinator</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="log_chat_area d-flex align-items-center">
                    {/* <a href="#test-form" className="login popup-with-form">
                      <i className="flaticon-user"></i>
                      <span>log in</span>
                    </a> */}
                    <div className="live_chat_btn">
                      <a className="boxed_btn_orange" href="#">
                        <i className="fa fa-phone"></i>
                        <span>+91 84001 49333</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
   </Fragment>
  )
}

export default Header