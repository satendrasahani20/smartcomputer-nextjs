import React from "react";
import { useRouter } from "next/router";
import Dashboard from "../../../../public/assets/images/dashboard.png";
import Downloads from "../../../../public/assets/images/download.png";
import Results from "../../../../public/assets/images/result.png";
import Assessment from "../../../../public/assets/images/assessment.png";
import ProfileIcon from "../../../../public/assets/images/profileIcon.png";
import ProfileImage from "../../../../public/assets/images/profile.png";
import Image from "next/image";
const SidebarAdmin = () => {
  const router = useRouter();
  return (
    <>
      <div className="menu_bar">
        <div className="profile_sec">
          <figure>
            <Image
              src={ProfileImage}
              width={150}
              height={150}
              alt="Student Image"
            />
          </figure>
          <p>
            <span>Admin Name: </span>Satendra
          </p>
          <p>
            <span>User Type: </span> Admin{" "}
          </p>
        </div>

        <ul>
          <li onClick={() => router?.push("/admin/student")}>
            <a href="#" className={`${router.asPath.includes("/admin/student") && "active"}`}>
              <span>
                <Image height="17" src={Dashboard} alt="Dashboard" />
              </span>
              Students
            </a>
          </li>
          <li onClick={() => router?.push("/admin/centre")}>
            <a href="#"  className={`${router.asPath.includes("/admin/centre") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={Assessment} alt="Assesments" />
              </span>{" "}
              Centre
            </a>
          </li>
          <li onClick={() => router?.push("/admin/results")}>
            <a href="#"  className={`${router.asPath.includes("/admin/results") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={Results} alt="Results" />
              </span>{" "}
              Results
            </a>
          </li>
          <li onClick={() => router?.push("/admin/assessments")}>
            <a href="#"  className={`${router.asPath.includes("/admin/assessments") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={Downloads} alt="Download" />
              </span>{" "}
              Assessments{" "}
            </a>
          </li>
          <li onClick={() => router?.push("/admin/profile")}>
            <a href="#"  className={`${router.asPath.includes("/admin/profile") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={ProfileIcon} alt="Profile" />
              </span>{" "}
              Profile
            </a>
          </li>
        </ul>

        <a href="#" className="logout">
          Logout
        </a>
      </div>

      <div className="menubar clearfix">
        <div className="navbar-fostrap">
          <span></span> <span></span> <span></span>
        </div>
      </div>
    </>
  );
};

export default SidebarAdmin;
