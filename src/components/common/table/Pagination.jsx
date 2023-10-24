import React from "react";
import Paginations from "@mui/material/Pagination";
import { Box } from "@mui/material";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  return (
    <Box
     className="pagination-table"
    >
      <Paginations
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        color="primary"
      />
    </Box>
  );
}
