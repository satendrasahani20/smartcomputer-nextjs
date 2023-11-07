import React from "react";
import { Box } from "@mui/material";

import InputField from "@/components/common/InputField";

const Form = ({ formik }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField
          label="State"
          name="userState"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
         <InputField
          label="District"
          name="userCity"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
       
        <InputField
          label="Address"
          name="userAddress"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Pincode"
          name="userPincode"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Qualification"
          name="userQualification"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField
          label="Password"
          name="password"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
    </Box>
  );
};

export default Form;
