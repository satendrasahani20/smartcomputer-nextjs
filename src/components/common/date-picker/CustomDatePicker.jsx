import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
export default function CustomDatePicker({className,name,formik}) {
  const isFieldEmpty =formik.touched?.[name] && !formik.values[name];
  const emptyFieldClass = isFieldEmpty ? 'empty-field' : '';
  return (
    <ReactDatePicker
      className={`${className} ${emptyFieldClass}`}
      name={name}
      selected={formik?.values[name] || new Date()}
      onChange={(date) => formik?.setFieldValue(name, date)}
    />
  );
}