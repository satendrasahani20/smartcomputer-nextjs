import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Delete, UploadFile } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CircularProgress } from "@mui/material";
const MaterialIcons = ({ iconName, fontSize }) => {
  switch (iconName) {
    case "edit":
      return <EditIcon fontSize={fontSize} />;
    case "delete":
      return <Delete fontSize={fontSize} />;
    case "login":
      return <LockOpenIcon  />;
    case "add":
      return <AddCircleIcon fontSize={fontSize} />;
    case "loader":
      return <CircularProgress fontSize={fontSize}  />;
    case "upload":
      return <UploadFile/>

  }
};

export default MaterialIcons;
