import IconButtons from "@/components/common/buttons/IconButton";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/common/table/tableStyle";
import { Switch } from "@mui/material";
import React, { useState } from "react";

const ResultListBody = ({ data = [], editBtn }) => {
  return data?.map((row, index) => (
    <StyledTableRow key={index}>
      <StyledTableCell component="th" scope="row" sx={{ width: 5 }}>
        {row?.testId}
      </StyledTableCell>
      <StyledTableCell>{row?.name}</StyledTableCell>

      <StyledTableCell style={{ width: "181px" }}>
       {row?.courseName}
      </StyledTableCell>
      <StyledTableCell>{row?.email}</StyledTableCell>
      <StyledTableCell>
        <IconButtons
          onClick={(e) => {
            e.stopPropagation();
            editBtn(row);
          }}
          lable={"edit"}
          
        />
      </StyledTableCell>
    </StyledTableRow>
  ));
};

export default ResultListBody;
