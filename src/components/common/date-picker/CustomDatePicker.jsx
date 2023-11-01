import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
export default function CustomDatePicker({className}) {
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      className={className}
    />
  );
}