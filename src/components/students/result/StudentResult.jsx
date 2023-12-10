import StudentResultCard from '@/components/common/cards/StudentResultCard'
import { downloadCertificate, generateRandom10DigitNumber } from '@/components/common/function';
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

 
  return (
  <>
  <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
  {
    results?.map((itm,id)=>(
      <StudentResultCard key={id} data={itm} sx={{ml:id>0?1:0}} onDone={(certificateLink)=>downloadCertificate(certificateLink)}/>
    ))
  }
   </Box>
  </>

  )
}

export default StudentResult