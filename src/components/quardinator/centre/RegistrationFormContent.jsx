import { Box, Button } from "@mui/material";
import React from "react";
import DocumentUpload from "./form/DocumentUpload";
import Form from "./form/Form";

const RegistrationFormContent = ({formik}) => {
  
  return (
    <Box sx={{  marginTop: 1 }}>
      <DocumentUpload formik={formik}/>
      <Form formik={formik}/>
    </Box>
  );
};

export default RegistrationFormContent;
