import React, { useEffect, useState } from "react";
import DashboardHeader from "./header/DashboardHeader";
import SidebarAdmin from "./sidebar/SidebarAdmin";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/service/action/common";
import { useRouter } from "next/router";
import SidebarStudent from "./sidebar/SideBarStudent";

const AdminLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.commonReducer);
  const { push } = useRouter();
  useEffect(() => {
    dispatch(getUser({ push }));
  }, []);
  return (
    !!Object.keys(user)?.length&&(
    <div className="dashboard_main">
      <DashboardHeader />
      <div className="menu_cont d-flex">
        {user?.role==="admin"?  <SidebarAdmin />:<SidebarStudent />}      
        <div className="show_data">{children}</div>
      </div>
    </div>
    )
  );
};

export default AdminLayout;
