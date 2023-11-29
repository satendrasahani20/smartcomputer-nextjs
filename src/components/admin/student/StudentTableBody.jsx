import IconButtons from "@/components/common/buttons/IconButton";
import { dateFormate } from "@/components/common/function";
import {
  StyledTableCell,
  StyledTableRow,
} from "@/components/common/table/tableStyle";
import Image from "next/image";
import React from "react";

const StudentTableBody = ({ data = [], editBtn, detailBtn }) => {
  return data?.map((row, index) => (
    <StyledTableRow key={index} onClick={() => detailBtn(row)}>
      <StyledTableCell component="th" scope="row">
        {index + 1}
      </StyledTableCell>
      <StyledTableCell><Image src={row?.image} height={30} width={30} style={{borderRadius:"50%"}} /></StyledTableCell>
      <StyledTableCell>{row?.name}</StyledTableCell>
     
      <StyledTableCell>{row?.institute || "Smart Computer"}</StyledTableCell>
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

export default StudentTableBody;
