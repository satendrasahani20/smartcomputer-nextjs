import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
export default function CustomDatePicker({className,name,formik}) {
  return (
    <ReactDatePicker
      className={className}
      name={name}
      selected={formik?.values[name] || new Date()}
      onChange={(date) => formik?.setFieldValue(name, date)}
    />
  );
}