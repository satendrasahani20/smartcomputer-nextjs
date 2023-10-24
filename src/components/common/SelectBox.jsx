import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectBox({formik,name, label ,listItem,handleChange,value,fullWidth={}}) {
    const hasError = formik.touched[name] && formik.errors[name];
    const selectedValue=formik.values?.[name]
  return (
    <FormControl sx={{ ml: 1, minWidth: "100%" }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={selectedValue}
        label={label}
        name={name}
        fullWidth
        onChange={formik.handleChange}
        error={hasError}
        
      >
        {listItem?.map((item, id) => item && (
          <MenuItem key={id} value={item} >{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
