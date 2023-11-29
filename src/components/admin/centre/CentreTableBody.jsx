import IconButtons from "@/components/common/buttons/IconButton";
import { dateFormate } from "@/components/common/function";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/common/table/tableStyle";
import React from "react";

const CentreTableBody = ({ data = [], editBtn, detailBtn }) => {
  return data?.map((row, index) => (
    <StyledTableRow key={index} onClick={() => detailBtn(row)}>
      <StyledTableCell component="th" scope="row">
        {index + 1}
      </StyledTableCell>
      <StyledTableCell>{row?.centreName}</StyledTableCell>
     
      <StyledTableCell>{row?.ownerName}</StyledTableCell>
      <StyledTableCell>{row?.number}</StyledTableCell>
      <StyledTableCell>{dateFormate(row?.createdAt) }</StyledTableCell>
      <StyledTableCell>{row?.registerBy?.name || "Admin"}</StyledTableCell>
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

export default CentreTableBody;
