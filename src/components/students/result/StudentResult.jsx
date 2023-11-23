import StudentResultCard from '@/components/common/cards/StudentResultCard'
import { Toaster } from '@/components/common/toaster/Toaster';
import { getResultAction } from '@/service/action/student';
import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const StudentResult = () => {
  const dispatch=useDispatch();
  const {results}=useSelector((state)=>state.studentReducer)
  useEffect(()=>{
  dispatch(getResultAction())
  },[dispatch])

  const download=()=>{
    Toaster.error("Your Certificate is not ready please wait few days")
  }
  return (
  <>
  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
  {
    results?.map((itm,id)=>(
      <StudentResultCard key={id} data={itm} sx={{ml:id>0?1:0}} onDone={download}/>
    ))
  }
   </Box>
  </>

  )
}

export default StudentResult