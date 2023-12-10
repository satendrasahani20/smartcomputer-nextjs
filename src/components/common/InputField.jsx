import React from "react";
import { TextField } from "@mui/material";
const InputField = ({
  name = "",
  label = "",
  formik = {},
  style = {},
  sx = {},
  size = "",
  fullWidth = {},
  helperText="",
  type="text",
  disabled=false
}) => {
  const hasError = formik.touched?.[name] && formik.errors?.[name];
  return (
    <>
      <TextField
        onChange={formik?.handleChange}
        name={name}
        fullWidth={fullWidth}
        style={style}
        sx={sx}
        label={label}
        size={size}
        value={formik?.values?.[name]}
        error={hasError}
        helperText={helperText}
        type={type}
        disabled={disabled}
      />
    </>
  );
};

export default InputField;
