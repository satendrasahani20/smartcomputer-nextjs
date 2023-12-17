import { getUser } from "@/service/action/common";
import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SidebarQuardinator from "./sidebar/SidebarQuardinator";
import CentreQuardinatorHeader from "./header/CentreQuardinatorHeader";
import SidebarCentre from "./sidebar/SidebarCentre";

const CentreQuardinatorLaout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.commonReducer);
  const { push } = useRouter();
  useEffect(() => {
    dispatch(getUser({ push }));
  }, []);
  return (
    !!Object.keys(user)?.length && (
      <Fragment>
        <div className="quardinate">
          {user?.role === "quardinate" ? (
            <SidebarQuardinator />
          ) : (
            <SidebarCentre  />
          )}
          <div className="body-data">
            <CentreQuardinatorHeader user={user} />
            <div className="child">
            {children}
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default CentreQuardinatorLaout;
