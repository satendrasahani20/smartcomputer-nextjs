import { Box, Button } from "@mui/material";
import React from "react";
import DocumentUpload from "./form/DocumentUpload";
import Form from "./form/Form";

const RegistrationFormContent = () => {
  return (
    <Box sx={{ height: 550, marginTop: 1 }}>
      <DocumentUpload/>
      <Form />
    </Box>
  );
};

export default RegistrationFormContent;
