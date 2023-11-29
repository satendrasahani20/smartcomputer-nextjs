import IconButtons from "@/components/common/buttons/IconButton";
import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const TeacherForm = ({ formik }) => {
  useEffect(() => {
    console.log("formik?.values?.teacher", formik?.values?.teacher);
  }, [formik]);

  const handleAddMore = () => {
    let tempTecher = [
      {
        name: "",
        email: "",
        number: "",
        qualification: "",
      },
      ...formik.values?.teacher,
    ];
    formik.setValues((values) => ({ ...values, teacher: tempTecher }));
  };

  const handelChange = (e, index) => {
    let tempTeacher = formik.values?.teacher;
    tempTeacher[index][e.target.name] = e.target.value;
    formik.setValues((values) => ({ ...values, teacher: tempTeacher }));
  };

  const deletTeacher=(index)=>{
    let tempTeacher = formik.values?.teacher;
    tempTeacher =tempTeacher.filter((itm,id)=>id!==index)
    formik.setValues((values) => ({ ...values, teacher: tempTeacher }));
  }
  return (
    <>
      <h6 style={{ margin: "10px 0px 0px 10px" }}>
        Add Teacher <IconButtons lable={"add"} onClick={handleAddMore} />
      </h6>
      {formik?.values?.teacher?.map((item, index) => (
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <TextField
            label="Name"
            name="name"
            value={item?.name}
            sx={{ marginLeft: 1, marginTop: 2 }}
            size="small"
            onChange={(e) => handelChange(e, index)}
          />
          <TextField
            label="Email"
            name="email"
            value={item?.email}
            sx={{ marginLeft: 1, marginTop: 2 }}
            size="small"
            onChange={(e) => handelChange(e, index)}
          />
          <TextField
            label="Mobile No"
            name="number"
            value={item?.number}
            sx={{ marginLeft: 1, marginTop: 2 }}
            size="small"
            onChange={(e) => handelChange(e, index)}
          />
          <TextField
            label="Qualification"
            name="qualification"
            value={item?.qualification}
            sx={{ marginLeft: 1, marginTop: 2 }}
            size="small"
            onChange={(e) => handelChange(e, index)}
          />
          <Box sx={{ mt: 2 }}>
            <IconButtons lable={"delete"} color="red" onClick={()=>deletTeacher(index)}/>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default TeacherForm;
