import { TableRow } from "@mui/material";
import React from "react";
import { StyledTableCell,  spinnerStyle } from "./tableStyle";
import MaterialIcons from "../icons/materialIcons";

const TableLoader = ({tableHeading}) => {
  return (
    <TableRow>
      <StyledTableCell style={spinnerStyle} colSpan={tableHeading.length}>
        <MaterialIcons iconName={"loader"} fontSize={2} />
      </StyledTableCell>
    </TableRow>
  );
};

export default TableLoader;
