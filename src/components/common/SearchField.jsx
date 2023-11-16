import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchField = ({
  search,
  setSearch,
  className="student-search"
}) => {
  return (
    <>
       <TextField
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          size="small"
          className={className}
          InputProps={{
            endAdornment: (
              <Box  style={{position:"absolute",marginLeft:"148px"}}>
              <InputAdornment position="start">
                <Search color="#fff"/>
              </InputAdornment>
              </Box>
            ),
          }}
        />
    </>
  );
};

export default SearchField;
