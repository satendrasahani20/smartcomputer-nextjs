import IconButton from '@mui/material/IconButton';


import React from "react";
import MaterialIcons from '../icons/materialIcons';

const IconButtons = ({lable,size="small",fontSize="small",color="",onClick}) => {
  return (
    <IconButton color={color} aria-label={lable} size={size} onClick={onClick}>
      <MaterialIcons  iconName={lable}  fontSize={fontSize}/>
    </IconButton>
  );
};

export default IconButtons;
