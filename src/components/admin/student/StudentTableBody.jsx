import IconButtons from "@/components/common/buttons/IconButton";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/common/table/tableStyle";
import React from "react";

const StudentTableBody = ({ data = [], editBtn, detailBtn }) => {
  return data?.map((row, index) => (
    <StyledTableRow key={index} onClick={() => detailBtn(row)}>
      <StyledTableCell component="th" scope="row">
        {index + 1}
      </StyledTableCell>
      <StyledTableCell>{row?._id}</StyledTableCell>
      <StyledTableCell>{row?.name}</StyledTableCell>
      <StyledTableCell>{row?.course}</StyledTableCell>
      <StyledTableCell>{row?.institute}</StyledTableCell>
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

export default StudentTableBody;
