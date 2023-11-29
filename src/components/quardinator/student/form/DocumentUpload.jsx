import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageAction } from "@/service/action/common";
import MaterialIcons from "@/components/common/icons/materialIcons";
import InputField from "@/components/common/InputField";
import CustomDatePicker from "@/components/common/date-picker/CustomDatePicker";
import RadioButton from "@/components/common/radio-button/RadioButton";
import SampleImage from "../../../../../public/assets/images/profile-sample.png";
const DocumentUpload = ({ formik }) => {
  const { courseData } = useSelector((state) => state.adminReducer);
  const [corseLists, setCourseLists] = useState([]);
  const dispatch = useDispatch();
  const { image, isLoadingimage } = useSelector(
    (state) => state?.commonReducer
  );
  const handleChangeFile = (name, e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    dispatch(uploadImageAction({ data: formData, imageType: name }));
  };

  useEffect(() => {
    if (image) {
      formik.setValues((values) => ({ ...values, image }));
    }
  }, [image]);

  useEffect(() => {
    let tempArr = [];
    if (courseData?.data) {
      courseData?.data?.map((itm) => {
        tempArr.push({ value: itm?._id, label: itm?.label });
      });
    }
    setCourseLists(tempArr);
  }, [courseData]);

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {isLoadingimage ? (
          <MaterialIcons iconName={"loader"} />
        ) : (
          <Image src={formik?.values?.image || SampleImage} width={54} height={54} />
        )}

        <Button
          variant="contained"
          sx={{ mt: 1 }}
          component="label"
          size="small"
        >
          Upload
          <input
            type="file"
            hidden
            onChange={(e) => handleChangeFile("image", e)}
          />
        </Button>
      </Box>
      <Box sx={{ width: "90%" }}>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <InputField
            label="name"
            name="name"
            sx={{ marginLeft: 1 }}
            size="small"
            formik={formik}
          />
          <InputField
            label="Father Name"
            name="fatherName"
            sx={{ marginLeft: 1 }}
            size="small"
            formik={formik}
          />
          <InputField
            label="Email"
            name="email"
            sx={{ marginLeft: 1 }}
            size="small"
            formik={formik}
          />
        </Box>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <Box sx={{ marginTop: 1 }}>
            <CustomDatePicker
              name={"dateOfBirth"}
              formik={formik}
              className="date-picker-student"
            />
          </Box>
          <InputField
            label="Contact"
            name="number"
            sx={{ marginLeft: 1, marginTop: 2 }}
            size="small"
            formik={formik}
          />
          <Box sx={{ marginLeft: 1, width: "1000px", marginTop: 2 }}>
            <RadioButton formik={formik} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentUpload;
