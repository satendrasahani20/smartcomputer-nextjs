import * as React from "react";

import Tables from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./tableStyle";
import TableLoader from "./TableLoader";
import Pagination from "./Pagination";
import { Box } from "@mui/material";

export default function Table({
  data,
  getData = false,
  isDataLoading,
  tableHeading,
  tableBody,
}) {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Tables sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {tableHeading?.map((itm, id) => (
                <StyledTableCell key={id}>{itm}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isDataLoading ? (
              <TableLoader tableHeading={tableHeading} />
            ) : (
              [tableBody]
            )}
          </TableBody>
        </Tables>
      </TableContainer>
      {
        !!data?.data?.length && (
          <Pagination
            totalPages={data?.totalPages}
            onPageChange={(event,newPage)=>getData({},newPage)}
            currentPage={data?.currentPage}
          />
        )
      }
    </Box>
  );
}
