import { useRouter } from "next/router";
import React, { useState } from "react";

const HomeSlider = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <div className="slider_area">
      <div className="single_slider d-flex align-items-center justify-content-center slider_bg_1">
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
                  Search Result
                </h3>
                <input className="home-search-input" value={search} onChange={(e)=>setSearch(e.target.value)} type="search" /> <br/>
                <a
                  onClick={() => router.push(`/result/${search}`)}
                  href="#"
                  className="boxed_btn "
                >
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
