import { studentTableHeading } from "@/components/common/constant/Admin";
import Table from "@/components/common/table/Table";
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CustomModal from "@/components/common/modals/Modal";
import RegistrationFormContent from "./RegistrationFormContent";
import { useFormik } from "formik";
import { quardinatorRegister } from "@/components/common/constant/formInitialValue";
import { updateQuardinateSchema } from "@/components/common/constant/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudentAction,
  getStudentListsAction,
  registerNewStudent,
  updateStudentAction,
} from "@/service/action/admin";
import { Toaster } from "@/components/common/toaster/Toaster";
import { debounce } from "lodash";
import { clearImageAction } from "@/service/action/common";
import QuardinatorTabelBody from "./QuardinatorTableBody";
import SearchField from "@/components/common/SearchField";

const Quardinator = () => {
  const { studentLists } = useSelector((state) => state.adminReducer);
  const [addQuardinater, setAddQuardinater] = useState({
    edit: false,
    modal: false,
  });
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState({
    page: 1,
    limit: 10,
  });

  function getQuardinater(search = "", page = 1) {
    dispatch(
      getStudentListsAction({
        search,
        pageData: { ...pageData, page },
        role: "quardinate",
      })
    );
  }

  const addQuardinaterFormik = useFormik({
    initialValues: quardinatorRegister,
    validationSchema: updateQuardinateSchema,
    onSubmit: (values) => {
      addQuardinater.edit
        ? dispatch(
            updateStudentAction({
              studentId: values?._id,
              data: { ...values, role: "quardinate" },
              cb: callBack,
            })
          )
        : dispatch(
            registerNewStudent({
              data: { ...values, role: "quardinate" },
              cb: callBack,
            })
          );
    },
  });

  function callBack(res) {
    Toaster.success(res?.message);
    getQuardinater();
    addQuardinaterFormik.resetForm();
    setAddQuardinater({});
    dispatch(clearImageAction({ imageName: "image" }));
  }

  const editQuardinater = (data) => {
    let dateOfBirth = new Date(data.dateOfBirth);
    addQuardinaterFormik.setValues({ ...data, dateOfBirth });
    setAddQuardinater({ edit: true, modal: true });
  };

  const handleQuardinaterDelete = () => {
    if (addQuardinater?.edit) {
      dispatch(
        deleteStudentAction({
          studentId: addQuardinaterFormik.values?._id,
          cb: callBack,
        })
      );
    }
    return false;
  };

  const debounced = useRef(
    debounce((search, page) => {
      getQuardinater(search, page);
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
            addQuardinaterFormik.resetForm();
            setAddQuardinater({ modal: true });
          }}
        >
          Add Quardinater
        </Button>
      </Box>
      <Table
        tableHeading={studentTableHeading}
        isDataLoading={false}
        getData={getQuardinater}
        data={studentLists}
        tableBody={
          <QuardinatorTabelBody
            detailBtn={editQuardinater}
            editBtn={editQuardinater}
            data={studentLists?.data}
          />
        }
      />

      <CustomModal
        open={addQuardinater?.modal}
        onClose={() => setAddQuardinater({})}
        successBtnTitle={
          addQuardinater?.edit ? "Upadate Quardinater" : "Add Quardinater"
        }
        title={addQuardinater?.edit ? "Upadate Quardinater" : "Add Quardinater"}
        onDone={addQuardinaterFormik.handleSubmit}
        content={() => (
          <RegistrationFormContent formik={addQuardinaterFormik} />
        )}
        onCancel={() => setAddQuardinater({})}
        onDelete={handleQuardinaterDelete}
      />
    </>
  );
};

export default Quardinator;
