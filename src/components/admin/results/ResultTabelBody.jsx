import IconButtons from "@/components/common/buttons/IconButton";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/common/table/tableStyle";
import { Switch } from "@mui/material";
import React from "react";

const ResultTabelBody = ({ data = [], editBtn, detailBtn, showResult,updateStatus }) => {
  return data?.map((row, index) => (
    <StyledTableRow key={index}>
      <StyledTableCell component="th" scope="row" sx={{ width: 5 }}>
        {index + 1}
      </StyledTableCell>
      <StyledTableCell>{row?.name}</StyledTableCell>

      <StyledTableCell style={{ width: "181px" }}>
        {row?.courseName}
      </StyledTableCell>
      <StyledTableCell>{row?.email}</StyledTableCell>
      <StyledTableCell>
        <Switch
          checked={row?.isApproved}
          onChange={(e) => {
            e.stopPropagation();
            updateStatus(row)
          }}
          inputProps={{ "aria-label": "controlled" }}
        />
      </StyledTableCell>
      <StyledTableCell component="th" scope="row" sx={{ width: 5 }}>
        <IconButtons
          onClick={(e) => {
            e.stopPropagation();
            showResult(row);
          }}
          color={row?.certificateLink?"success":""}
          
          lable={"preview"}
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
