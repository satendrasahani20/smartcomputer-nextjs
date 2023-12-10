import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageAction } from "@/service/action/common";
import MaterialIcons from "@/components/common/icons/materialIcons";
const UploadResultForm = ({ formik }) => {
  const dispatch = useDispatch();
  const { certificateLink, isLoadingcertificateLink } = useSelector(
    (state) => state?.commonReducer
  );
  const handleChangeFile = (name, e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    dispatch(uploadImageAction({ data: formData, imageType: name }));
  };

  useEffect(() => {
    if (certificateLink) {
      formik.setValues((values) => ({ ...values, certificateLink }));
    }
  }, [certificateLink]);
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
        <Box>
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
              onChange={(e) => handleChangeFile("certificateLink", e)}
            />
          </Button>

          <Button
            variant="outlined"
            sx={{ mt: 1, ml: 3 }}
            size="small"
            onClick={formik?.handleSubmit}
          >
            Update Result
          </Button>
        </Box>
        {isLoadingcertificateLink && <MaterialIcons iconName={"loader"} />}
        {(certificateLink || formik?.values?.certificateLink) && (
          <Image
            src={formik?.values?.certificateLink}
            style={{ width: "100%", height: "100%" }}
            width={100}
            height={100}
          />
        )}
      </Box>
    </Box>
  );
};

export default UploadResultForm;
