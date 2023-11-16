import StudentCourseCard from "@/components/common/cards/StudentCourseCard";
import Confirm from "@/components/common/confirmation/Confirm";
import { getCourseAction } from "@/service/action/student";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StartTestMessageContent from "../assessment/StartTestMessageContent";
import { useRouter } from "next/router";

const Dashboard = () => {
  const dipatch = useDispatch();
  const router=useRouter();
  const { studentCourses } = useSelector((state) => state.studentReducer);
  const [confirmation,setConfirm]=useState({
    modal:false,
    courseId:{},
  })
  useEffect(() => {
    dipatch(getCourseAction());
  }, []);

  const confirmationTest=(data)=>{
    setConfirm({courseId:data?._id,modal:true})

  }

  const startTestNow=()=>{
    router.push(`/student/assessment/${confirmation?.courseId}`)
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
      <Confirm onConfirm={startTestNow} open={confirmation?.modal} handleClose={()=>setConfirm({data:{}})} bodyContent={<StartTestMessageContent />}/>
      {studentCourses?.map((itm, id) => (
        <StudentCourseCard onDone={confirmationTest} sx={{ml:id>0?1:0}} data={itm}/>
      ))}
    </Box>
  );
};

export default Dashboard;
