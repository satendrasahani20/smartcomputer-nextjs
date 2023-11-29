import React from "react";
import { Box } from "@mui/material";

import InputField from "@/components/common/InputField";
import RadioButton from "@/components/common/radio-button/RadioButton";
import TeacherForm from "./TeacherForm";

const Form = ({ formik }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <Box sx={{ marginLeft: 1, width: "600px", marginTop: 2 }}>
          <RadioButton formik={formik} />
        </Box>
        <InputField
          label="Contact"
          name="number"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField
          label="State"
          name="state"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="District"
          name="city"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField
          label="Address"
          name="address"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Pincode"
          name="pincode"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Qualification"
          name="qualification"
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
      <TeacherForm formik={formik}/>
    </Box>
  );
};

export default Form;
