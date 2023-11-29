import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageAction } from "@/service/action/common";
import MaterialIcons from "@/components/common/icons/materialIcons";
import InputField from "@/components/common/InputField";
import SampleImage from "../../../../../public/assets/images/profile-sample.png";
import ImageSample from "../../../../../public/assets/images/image.png";
const DocumentUpload = ({ formik }) => {
  const dispatch = useDispatch();
  const { ownerImage, isLoadingownerImage,inner,isLoadinginner,isLoadingouter,outer } = useSelector(
    (state) => state?.commonReducer
  );
  const handleChangeFile = (name, e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    dispatch(uploadImageAction({ data: formData, imageType: name }));
    e.target.value=null
  };

  useEffect(() => {
    if (ownerImage) {
      formik.setValues((values) => ({ ...values, ownerImage }));
    }
  }, [ownerImage]);
  useEffect(() => {
    if (inner) {
      let tempImage={outer,inner}
      formik.setValues((values) => ({ ...values, centrePhoto:tempImage }));
    }
  }, [inner]);
  useEffect(() => {
    if (outer) {
      let tempImage={outer,inner}
      formik.setValues((values) => ({ ...values, centrePhoto:tempImage }));
    }
  }, [outer]);
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
        {isLoadingownerImage ? (
          <MaterialIcons iconName={"loader"} />
        ) : (
          <Image
            src={formik?.values?.ownerImage || SampleImage}
            width={54}
            height={54}
          />
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
            onChange={(e) => handleChangeFile("ownerImage", e)}
          />
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {isLoadinginner ? (
          <MaterialIcons iconName={"loader"} />
        ) : (
          <Image
            src={formik?.values?.centrePhoto?.inner || ImageSample}
            width={54}
            height={54}
          />
        )}

        <Button
          variant="contained"
          sx={{ mt: 1 }}
          component="label"
          size="small"
        >
          Front Centre
          <input
            type="file"
            hidden
            onChange={(e) => handleChangeFile("inner", e)}
          />
        </Button>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {isLoadingouter ? (
          <MaterialIcons iconName={"loader"} />
        ) : (
          <Image
            src={formik?.values?.centrePhoto?.outer || ImageSample}
            width={54}
            height={54}
          />
        )}

        <Button
          variant="contained"
          sx={{ mt: 1 }}
          component="label"
          size="small"
        >
          Back Centre
          <input
            type="file"
            hidden
            onChange={(e) => handleChangeFile("outer", e)}
          />
        </Button>
      </Box>
      <Box sx={{ width: "60%" }}>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <InputField
            label="Centre Name"
            name="centreName"
            sx={{ marginLeft: 1 }}
            size="small"
            formik={formik}
          />
          <InputField
            label="Owner Name"
            name="ownerName"
            sx={{ marginLeft: 1 }}
            size="small"
            formik={formik}
          />
        </Box>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <Box sx={{ marginTop: 1 }}>
            <InputField
              label="Email"
              name="email"
              sx={{ marginLeft: 1 }}
              size="small"
              formik={formik}
            />
            </Box>
            <Box sx={{ marginTop: 1,ml:5 }}>
             <InputField
              label="Adhar No"
              name="adharNo"
              sx={{ marginLeft: 1 }}
              size="small"
              formik={formik}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentUpload;
