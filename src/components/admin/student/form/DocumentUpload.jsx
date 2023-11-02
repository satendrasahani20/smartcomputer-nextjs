import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageAction } from "@/service/action/common";
import MaterialIcons from "@/components/common/icons/materialIcons";
const DocumentUpload = ({ formik }) => {
  const dispatch = useDispatch();
  const {
    image,
    adharCardBack,
    adharCardFront,
    isLoadingimage,
    isLoadingadharCardFront,
    isLoadingadharCardBack,
  } = useSelector((state) => state?.commonReducer);
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
    if (adharCardBack) {
      formik.setValues((values) => ({ ...values, adharCardBack }));
    }
  }, [adharCardBack]);
  useEffect(() => {
    if (adharCardFront) {
      formik.setValues((values) => ({ ...values, adharCardFront }));
    }
  }, [adharCardFront]);
  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {isLoadingimage ? (
          <MaterialIcons iconName={"loader"} />
        ) : (
          <Image src={image} width={100} height={100} />
        )}

        <Button
          variant="contained"
          sx={{ mt: 1 }}
          component="label"
          size="small"
        >
          Upload Image
          <input
            type="file"
            hidden
            onChange={(e) => handleChangeFile("image", e)}
          />
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {isLoadingadharCardFront ? (
          <MaterialIcons iconName={"loader"} />
        ) : (
          <Image src={adharCardFront} width={270} height={100} />
        )}

        <Button
          sx={{ mt: 1 }}
          variant="contained"
          component="label"
          size="small"
        >
          Upload Front Adhar
          <input
            type="file"
            onChange={(e) => handleChangeFile("adharCardFront", e)}
            hidden
          />
        </Button>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {isLoadingadharCardBack ? (
          <MaterialIcons iconName={"loader"} />
        ) : (
          <Image src={adharCardBack} width={270} height={100} />
        )}

        <Button
          sx={{ mt: 1 }}
          variant="contained"
          component="label"
          size="small"
        >
          Upload Front Back
          <input
            type="file"
            onChange={(e) => handleChangeFile("adharCardBack", e)}
            hidden
          />
        </Button>
      </Box>
    </Box>
  );
};

export default DocumentUpload;
