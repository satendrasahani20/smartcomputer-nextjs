import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import PropTypes from "prop-types";
const CrossIcon = ({ handleClose }) => {
  return (
    <IconButton
      edge="end"
      color="inherit"
      onClick={handleClose}
      style={{
        position: "absolute",
        top: "-5px", // Adjust the top position as needed
        right: "10px", // Adjust the right position as needed
      }}
      aria-label="close"
    >
      <CloseIcon />
    </IconButton>
  );
};

CrossIcon.propTypes = {
  handleClose: PropTypes.func
};


export default CrossIcon;