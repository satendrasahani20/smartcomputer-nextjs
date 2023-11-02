import React from "react";
import { Box, Button } from "@mui/material";

import InputField from "@/components/common/InputField";
import CustomDatePicker from "@/components/common/date-picker/CustomDatePicker";
import RadioButton from "@/components/common/radio-button/RadioButton";

const Form = ({ formik }) => {
  return (
    <Box sx={{ mt: 3 }}>
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
          <CustomDatePicker name={"dateOfBirth"}  formik={formik} className="date-picker-student" />
        </Box>

        <InputField
          label="Contact"
          name="number"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="State"
          name="state"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField
          label="District"
          name="district"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
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
        <Box width={1000} sx={{ marginLeft: 1,marginTop:2 }}>
          <RadioButton formik={formik}/>
        </Box>
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
