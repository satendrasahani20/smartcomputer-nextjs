import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox } from "@mui/material";
export default function SelectBox({ formik, name, label, listItem, multiple = false }) {
  const hasError = formik.touched[name] && formik.errors[name];
  const selectedValue = Array.isArray(formik.values?.[name]) ?formik.values?.[name]: [formik.values?.[name]];

  const handleChange = (event) => {
    const { value } = event.target;
    formik.setFieldValue(name, value);
  };

console.log("selectedValue",selectedValue)
  return (
    <FormControl sx={{minWidth:"363px", maxWidth:"834px"}} size="small">
      <InputLabel id={`demo-select-${multiple ? 'multiple' : 'single'}-label`}>
        {label}
      </InputLabel>
      <Select
        labelId={`demo-select-${multiple ? 'multiple' : 'single'}-label`}
        id={`demo-select-${multiple ? 'multiple' : 'single'}`}
        value={selectedValue}
        label={label}
        name={name}
        fullWidth
        onChange={handleChange}
        error={hasError}
        multiple={multiple} // Set to true for multiple selection
      >
        {listItem?.map((item, id) => item?.value && (
          <MenuItem key={id} value={item?.value}>
            {multiple && <Checkbox checked={selectedValue?.includes(item?.value)} />}
            {item?.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
