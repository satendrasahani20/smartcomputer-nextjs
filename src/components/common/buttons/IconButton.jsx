import IconButton from '@mui/material/IconButton';


import React from "react";
import MaterialIcons from '../icons/materialIcons';

const IconButtons = ({lable,size="small",fontSize="small",onClick}) => {
  return (
    <IconButton aria-label={lable} size={size} onClick={onClick}>
      <MaterialIcons iconName={lable}  fontSize={fontSize}/>
    </IconButton>
  );
};

export default IconButtons;
