import React from "react";
import Logo from "../../../../public/assets/images/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutAction } from "@/service/action/authentication";
const SidebarQuardinator = () => {
  const router = useRouter();
  const dispatch=useDispatch()
  const callBack=()=>{
    localStorage.removeItem("role");
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    router.push("/login")
  }
  return (
    <div className="sidebar">
      <div className="logo">
        <Image src={Logo} width={40} height={40} />
        <h5 style={{ color: "#fff", textAlign: "center" }}>Smart Computer</h5>
      </div>
      <ul>
        <li
          onClick={() => router.push("/quardinator/student")}
          className={`${
            router.asPath.includes("/quardinator/student") && "active"
          } pointer`}
        >
          Students
        </li>
        <li
          onClick={() => router.push("/quardinator/centre")}
          className={`${router.asPath.includes("/quardinator/centre") && "active"} pointer`}
        >
          Centre
        </li>
        <li  onClick={()=>dispatch(logoutAction({cb:callBack}))} className="pointer">Logout</li>
      </ul>
    </div>
  );
};

export default SidebarQuardinator;
