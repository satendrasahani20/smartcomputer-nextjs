import { centreTableHeading } from "@/components/common/constant/Admin";
import Table from "@/components/common/table/Table";
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import {
  initialValuesCentre,
} from "@/components/common/constant/formInitialValue";
import { updateQuardinateSchema } from "@/components/common/constant/validationSchema";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "@/components/common/toaster/Toaster";
import { debounce } from "lodash";
import { clearImageAction } from "@/service/action/common";
import CentreTableBody from "./CentreTableBody";
import CustomModal from "@/components/common/modals/Modal";
import RegistrationFormContent from "./RegistrationFormContent";
import { deleteCentreAction, getCentreAction, registerCentreAction, updateCentreAction } from "@/service/action/admin";
import InputField from "@/components/common/InputField";
import SearchField from "@/components/common/SearchField";

const Centre = () => {
  const { isCentreLoading,centreLists } = useSelector((state) => state.adminReducer);
  const [addCentre, setAddCentre] = useState({
    edit: false,
    modal: false,
  });
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [pageData, setPageData] = useState({
    page: 1,
    limit: 10,
  });

  function getCentre(search = "", page = 1) {
    dispatch(
      getCentreAction({
        search,
        pageData: { ...pageData, page },
      })
    );
  }

  const addCentreFormik = useFormik({
    initialValues: initialValuesCentre,
    // validationSchema: updateQuardinateSchema,
    onSubmit: (values) => {
      addCentre.edit ? dispatch(updateCentreAction({data:values,centreId:values?._id,cb:callBack})) :
      dispatch(registerCentreAction({data:values,cb:callBack}))
    },
  });

  function callBack(res) {
    Toaster.success(res?.message);
    getCentre();
    addCentreFormik.resetForm();
    setAddCentre({});
    dispatch(clearImageAction({ imageName: "ownerImage" }));
    dispatch(clearImageAction({ imageName: "inner" }));
    dispatch(clearImageAction({ imageName: "outer" }));
  }

  const editCentre = (data) => {
    setAddCentre({ edit: true, modal: true });
    addCentreFormik.setValues(data);
  };

  const handleCentreDelete = () => {
    dispatch(deleteCentreAction({
      centreId:addCentreFormik.values?._id,
      cb:callBack
    }))
  };

  const debounced = useRef(
    debounce((search, page) => {
      getCentre(search, page);
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
            addCentreFormik.resetForm();
            setAddCentre({ modal: true });
          }}
        >
          Add Centre
        </Button>
      </Box>
      <Table
        tableHeading={centreTableHeading}
        isDataLoading={isCentreLoading}
        getData={getCentre}
        data={centreLists}
        tableBody={
          <CentreTableBody
            detailBtn={editCentre}
            editBtn={editCentre}
            data={centreLists?.data}
          />
        }
      />
      <CustomModal
        open={addCentre?.modal}
        onClose={() => setAddCentre({})}
        successBtnTitle={addCentre?.edit ? "Upadate Centre" : "Add Centre"}
        title={addCentre?.edit ? "Upadate Centre" : "Add Centre"}
        onDone={addCentreFormik.handleSubmit}
        content={() => <RegistrationFormContent formik={addCentreFormik} />}
        onCancel={() => setAddCentre({})}
        onDelete={handleCentreDelete}
        width="80%"
      />
    </>
  );
};

export default Centre;
