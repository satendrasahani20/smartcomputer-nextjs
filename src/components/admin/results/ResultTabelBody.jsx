import IconButtons from "@/components/common/buttons/IconButton";
import { dateFormate } from "@/components/common/function";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/common/table/tableStyle";
import { Switch } from "@mui/material";
import React, { useState } from "react";

const ResultTabelBody = ({ data = [], editBtn, detailBtn }) => {
    const [checked,setChecked]=useState(false)
  return data?.map((row, index) => (
    <StyledTableRow key={index} onClick={() => detailBtn(row)}>
      <StyledTableCell component="th" scope="row" sx={{width:5}}>
        {index + 1}
      </StyledTableCell>
      <StyledTableCell>{row?.name}</StyledTableCell>

      <StyledTableCell style={{width: "181px"}}>Advance Diploma in Computer Hardware & Networking (ADCHN)</StyledTableCell>
      <StyledTableCell>{"satendrasahani19@gmail.com"}</StyledTableCell>
      <StyledTableCell>
        <Switch
          checked={checked}
          onChange={(e)=>{
            e.stopPropagation();
            setChecked(!checked)}}
          inputProps={{ "aria-label": "controlled" }}
        />
      </StyledTableCell>
      <StyledTableCell>
        <IconButtons
          onClick={(e) => {
            e.stopPropagation();
            editBtn(row);
          }}
          lable={"upload"}
        />
      </StyledTableCell>
    </StyledTableRow>
  ));
};

export default ResultTabelBody;
