import { getCentreAction, getStudentListsAction } from "@/service/action/admin";
import { TextField } from "@mui/material";
import { debounce } from "lodash";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CentreQuardinatorHeader = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const {user}=useSelector((state)=>state.commonReducer)
  const router=useRouter();
  const [pageData, setPageData] = useState({
    page: 1,
    limit: 10,
  });

  function getStudent(search = "", page = 1) {
    if(router.asPath?.includes("/centre")){
      dispatch(
        getCentreAction({
          search,
          pageData: { ...pageData, page },
        })
      );
    }else{
      dispatch(
        getStudentListsAction({
          search,
          pageData: { ...pageData, page },
          role: "student",
        })
      );
    }
      
  }

  const debounced = useRef(
    debounce((search, page) => {
      getStudent(search, page);
    }, 1000)
  );
  useEffect(() => {
    debounced.current.cancel();
    debounced.current(search, 1);
  }, [search]);
  return (
    <Fragment>
      <div className="header">
        <div className="search">
        <TextField
          value={search}
          size="small"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="profile">
           <Image className="profile-img" src={user?.image} alt="profile" width={30} height={30}/>
      </div>
      </div>
      <div className="back-section"></div>
    </Fragment>
  );
};

export default CentreQuardinatorHeader;
