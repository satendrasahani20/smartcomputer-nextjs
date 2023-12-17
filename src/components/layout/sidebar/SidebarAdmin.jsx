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
const SidebarAdmin = ({user}) => {
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
            <span>Admin Name: </span>{user?.name}
          </p>
          <p>
            <span>User Type: </span> {user?.role}{" "}
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
          <li onClick={() => router?.push("/admin/quardinator")}>
            <a href="#"  className={`${router.asPath.includes("/admin/quardinator") && "active"}`}>
              {" "}
              <span>
                <Image height="17" src={Assessment} alt="Assesments" />
              </span>{" "}
              Quardinator
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

export default SidebarAdmin;
