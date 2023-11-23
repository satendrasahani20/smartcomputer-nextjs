import React from "react";
import { useRouter } from "next/router";
import Dashboard from "../../../../public/assets/images/dashboard.png";
import Downloads from "../../../../public/assets/images/download.png";
import Results from "../../../../public/assets/images/result.png";
import Assessment from "../../../../public/assets/images/assessment.png";
import ProfileIcon from "../../../../public/assets/images/profileIcon.png";
import ProfileImage from "../../../../public/assets/images/profile.png";
import Image from "next/image";
import { logoutAction } from "@/service/action/authentication";
import { useDispatch } from "react-redux";
const SidebarStudent = () => {
  const router = useRouter();
  const dispatch=useDispatch()
  const callBack=()=>{
    localStorage.removeItem("role");
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    router.push("/login")
  }
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
            <span>Student Name: </span>Satendra
          </p>
          <p>
            <span>User Type: </span> Student{" "}
          </p>
        </div>

        <ul>
          <li onClick={() => router?.push("/student/dashboard")}>
            <a href="#" className={`${router.asPath.includes("/student/dashboard") && "active"}`}>
              <span>
                <Image height="17" src={Dashboard} alt="Dashboard" />
              </span>
              Dashboard
            </a>
          </li>
          {/* <li onClick={() => router?.push("/student/assessment")}>
            <a href="#"  className={`${router.asPath.includes("/student/assessment") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={Assessment} alt="Assesments" />
              </span>{" "}
              Assessments
            </a>
          </li> */}
          {/* <li onClick={() => router?.push("/student/i-card")}>
            <a href="#"  className={`${router.asPath.includes("/student/i-card") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={Assessment} alt="Assesments" />
              </span>{" "}
              I-Card
            </a>
          </li> */}
          <li onClick={() => router?.push("/student/result")}>
            <a href="#"  className={`${router.asPath.includes("/student/result") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={Results} alt="Results" />
              </span>{" "}
              Results
            </a>
          </li>
          <li onClick={() => router?.push("/student/profile")}>
            <a href="#"  className={`${router.asPath.includes("/student/profile") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={ProfileIcon} alt="Profile" />
              </span>{" "}
              Profile
            </a>
          </li>
        </ul>

        <a href="#-" onClick={()=>dispatch(logoutAction({cb:callBack}))} className="logout">
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

export default SidebarStudent;
