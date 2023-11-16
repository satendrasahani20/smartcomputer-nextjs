import { studentTableHeading } from "@/components/common/constant/Admin";
import Table from "@/components/common/table/Table";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import StudentTableBody from "./StudentTableBody";
import CustomModal from "@/components/common/modals/Modal";
import RegistrationFormContent from "./RegistrationFormContent";
import { useFormik } from "formik";
import { studentRegister } from "@/components/common/constant/formInitialValue";
import { updateStudentSchema } from "@/components/common/constant/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudentAction,
  getCourse,
  getStudentListsAction,
  registerNewStudent,
  updateStudentAction,
} from "@/service/action/admin";
import { Toaster } from "@/components/common/toaster/Toaster";
import { debounce } from "lodash";
import { clearImageAction } from "@/service/action/common";
import SearchField from "@/components/common/SearchField";

const StudentDashboard = () => {
  const { studentLists } = useSelector((state) => state.adminReducer);
  const [addStudent, setAddStudent] = useState({
    edit: false,
    modal: false,
  });
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState({
    page: 1,
    limit: 10,
  });

  function getStudent(search = "", page = 1) {
    dispatch(
      getStudentListsAction({
        search,
        pageData: { ...pageData, page },
        role: "student",
      })
    );
  }

  useEffect(() => {
    getStudent();
    dispatch(getCourse({ pageData: { page: 1, limit: 100 } }));
  }, []);

  const addStudentFormik = useFormik({
    initialValues: studentRegister,
    validationSchema: updateStudentSchema,
    onSubmit: (values) => {
      addStudent.edit
        ? dispatch(
            updateStudentAction({
              studentId: values?._id,
              data: { ...values, role: "student" },
              cb: callBack,
            })
          )
        : dispatch(
            registerNewStudent({
              data: { ...values, role: "student" },
              cb: callBack,
            })
          );
    },
  });

  function callBack(res) {
    Toaster.success(res?.message);
    getStudent();
    addStudentFormik.resetForm();
    setAddStudent({});
    dispatch(clearImageAction({ imageName: "image" }));
  }

  const editStudent = (data) => {
    let dateOfBirth = new Date(data.dateOfBirth);
    addStudentFormik.setValues({ ...data, dateOfBirth });
    setAddStudent({ edit: true, modal: true });
  };

  const handleStudentDelete = () => {
    if (addStudent?.edit) {
      dispatch(
        deleteStudentAction({
          studentId: addStudentFormik.values?._id,
          cb: callBack,
        })
      );
    }
    return false;
  };

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
    <>
      <Box sx={{ position: "absolute", right: 14, marginTop: -6 }}>
        <SearchField search={search} setSearch={setSearch} />
        <Button
          size="small"
          variant="outlined"
          sx={{ borderColor: "white", color: "white" }}
          onClick={() => {
            addStudentFormik.resetForm();
            setAddStudent({ modal: true });
          }}
        >
          Add Student
        </Button>
      </Box>
      <Table
        tableHeading={studentTableHeading}
        isDataLoading={false}
        getData={getStudent}
        data={studentLists}
        tableBody={
          <StudentTableBody
            detailBtn={editStudent}
            editBtn={editStudent}
            data={studentLists?.data}
          />
        }
      />

      <CustomModal
        open={addStudent?.modal}
        onClose={() => setAddStudent({})}
        successBtnTitle={addStudent?.edit ? "Upadate Student" : "Add Student"}
        title={addStudent?.edit ? "Upadate Student" : "Add Student"}
        onDone={addStudentFormik.handleSubmit}
        content={() => <RegistrationFormContent formik={addStudentFormik} />}
        onCancel={() => setAddStudent({})}
        onDelete={handleStudentDelete}
      />
    </>
  );
};

export default StudentDashboard;
