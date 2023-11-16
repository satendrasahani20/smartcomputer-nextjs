import { CircularProgress } from '@mui/material'
import  Buttons  from '@mui/material/Button'
import React from 'react'
import MaterialIcons from '../icons/materialIcons';

const Button = ({size="",isLoading,label,variant="contained",sx={},style={},onClick,fullWidth=false,iconName="",iconSize}) => {
  return (
    <Buttons
    variant={variant}
    fullWidth={fullWidth}
    disabled={isLoading}
    onClick={onClick}
    size={size}
    sx={sx}
    style={style}
    startIcon={ isLoading?<CircularProgress size={20} style={{color:"#fff"}}/> :iconName && <MaterialIcons iconName={iconName}  fontSize={iconSize}/>}
  >
     {label}
  </Buttons>
  )
}

export default Button