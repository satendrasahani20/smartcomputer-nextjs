import {
  studentLists,
  studentTableHeading,
} from "@/components/common/constant/Admin";
import Table from "@/components/common/table/Table";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import StudentTableBody from "./StudentTableBody";
import CustomModal from "@/components/common/modals/Modal";
import RegistrationFormContent from "./RegistrationFormContent";
import { useFormik } from "formik";
import { studentRegister } from "@/components/common/constant/formInitialValue";
import { updateStudentSchema } from "@/components/common/constant/validationSchema";
import { useDispatch } from "react-redux";
import { registerNewStudent } from "@/service/action/admin";
import { Toaster } from "@/components/common/toaster/Toaster";


const StudentDashboard = () => {
  const [addStudent, setAddStudent] = useState({
    edit: false,
    modal: false,
  });
  const dispatch=useDispatch();
  const callBack=(res)=>{
    console.log("callle",res)
    Toaster.success(res?.message)
  }
    const addStudentFormik = useFormik({
    initialValues: studentRegister,
    validationSchema: updateStudentSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
      dispatch(registerNewStudent({data:values,cb:callBack}))
    },
  });
  return (
    <>
      <Box sx={{ position: "absolute", right: 14, marginTop: -6 }}>
        <Button
          size="small"
          variant="outlined"
          sx={{ borderColor: "white", color: "white" }}
          onClick={() => setAddStudent({ modal: true })}
        >
          Add Student
        </Button>
      </Box>
      <Table
        tableHeading={studentTableHeading}
        isDataLoading={false}
        getData={() => console.log("ddd")}
        tableBody={
          <StudentTableBody
            detailBtn={() => console.log("ddd")}
            editBtn={() => console.log("ddd")}
            data={studentLists}
          />
        }
      />

      <CustomModal
        open={addStudent?.modal}
        onClose={() => setAddStudent({})}
        title={addStudent?.edit ? "Upadate Student" : "Add Student"}
        onDone={addStudentFormik.handleSubmit}
        content={() => <RegistrationFormContent formik={addStudentFormik} />}
        onCancel={() => setAddStudent({})}
      />
    </>
  );
};

export default StudentDashboard;
