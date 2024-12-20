import React, { Fragment } from "react";
import Header from "./component/Header";
import HomeSlider from "./component/HomeSlider";
import AboutArea from "./component/AboutArea";
import PopularCourses from "./component/PopularCourses";
import AboutGallery from "./component/AboutGallery";
import HomeFooter from "./component/HomeFooter";
// import Image from "../../../public"
const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <HomeSlider />
      <AboutArea />
      <PopularCourses/>
      <AboutGallery/>
      <HomeFooter/>
    </Fragment>
  );
};

export default HomePage;
