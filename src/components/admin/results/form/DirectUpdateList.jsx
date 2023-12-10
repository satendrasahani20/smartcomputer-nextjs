import InputField from "@/components/common/InputField";
import Button from "@/components/common/buttons/Button";
import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import ResultListBody from "../ResultListsBody";
import Table from "@/components/common/table/Table";
import { directResultTableHeading } from "@/components/common/constant/Admin";
import ResultUpdateForm from "./ResultUpdateForm";
import { debounce } from "lodash";
import { directResultUpdateAction, getAllCertificate } from "@/service/action/admin";
import { useDispatch } from "react-redux";
import { Toaster } from "@/components/common/toaster/Toaster";

const DirectUpdateFor = () => {
  const dispatch=useDispatch();
  const [allStudent,setAllStudent]=useState([])

  function callBackGetResult(res){
    setAllStudent(res)
   }

  const [email, setEmail] = useState("");

 
  const formik = useFormik({
    initialValues:{
      courseId: "",
      courseName: "",
      studentId: "",
      name: "",
      attemptCount: 0,
      testId: "",
      email: "",
      maxMark: 0,
      cuttOffScore: 0,
      obtainedScore: 0
    },
    onSubmit: (values) => {
      dispatch(directResultUpdateAction({data:values,cb:callBack}))
    },
  });

  function callBack(res){
    Toaster.success(res.message)
    formik.resetForm()
 }

  const updateResultEdit = (row) => {
    formik.setValues(row);
  };

  
  const debounced = useRef(
    debounce((email, page) => {
      dispatch(getAllCertificate({page,search:email,cb:callBackGetResult}))
    }, 1000)
  );
  useEffect(() => {
    debounced.current.cancel();
    debounced.current(email, 1);
  }, [email]);
  

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <TextField
          label="Search"
          name="email"
          fullWidth
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          onChange={(e)=>setEmail(e.target.value)}
        />
        <Button label={"Search"} size="small" className="search-direct" />
      </Box>
      <ResultUpdateForm formik={formik} />
      <Table
        tableHeading={directResultTableHeading}
        isDataLoading={false}
        // getData={getQuardinater}
        data={allStudent}
        tableBody={
          <ResultListBody
            // detailBtn={editQuardinater}
            // editBtn={editQuardinater}
            data={allStudent?.data}
            // showResult={showResult}
            editBtn={updateResultEdit}
          />
        }
      />
    </>
  );
};

export default DirectUpdateFor;
