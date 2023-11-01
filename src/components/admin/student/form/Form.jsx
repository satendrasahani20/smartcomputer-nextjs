import InputField from "@/components/common/InputField";
import CustomDatePicker from "@/components/common/date-picker/CustomDatePicker";
import { Box } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <Box sx={{mt:3}}>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField label="Name"
          name="content"
          sx={{ marginLeft: 1 }}
          size="small" />
        <InputField label="Father Name"  name="content"
          sx={{ marginLeft: 1 }}
          size="small"  />
        <InputField label="Email"   name="content"
          sx={{ marginLeft: 1 }}
          size="small" />
          
      </Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
           <CustomDatePicker className="date-picker-student"/>
           
      </Box>
    </Box>
  );
};

export default Form;
