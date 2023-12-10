import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../../public/assets/images/logo-black.png";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { getCertificateOpenAction } from "@/service/action/common";
import MaterialIcons from "@/components/common/icons/materialIcons";
import { dateFormate } from "@/components/common/function";
const Result = () => {
    const [student,setStudent]=useState({})
    const router=useRouter();
    const dispatch=useDispatch();
    const {testId}=router.query;

    const callBack=(res)=>{
     setStudent(res?.data)
    }
    const errorCB=()=>{
        router.push("/")
    }
   useEffect(()=>{
    if(testId){
        dispatch(getCertificateOpenAction({testId,cb:callBack,errorCB}))
    }
   },[testId])
  return (
    student?.name ?<div className="home-result border-8" id="print-content">
    <Image
      src={Logo}
      width={100}
      height={100}
      alt="logo"
      onClick={() => router.push("/")}
    />
    <h1>Smart Computer Institute</h1>
    <p>&nbsp; </p>
    <p>
      This is to certify that <strong>{student?.name}</strong> has received
      the Certificate from <b>{student?.centreName}</b>.
    </p>
    <p> Details are as below: </p>
    <br />
    <table className="table-result bg-none">
      <tbody>
        <tr>
          <td>Center Name</td>
          <td>:</td>
          <th>{student?.centreName}</th>
        </tr>
        <tr>
          <td>Certificate No.</td>
          <td>:</td>
          <th>{student?.certificateNo}</th>
        </tr>
        <tr>
          <td>Name of the Student</td>
          <td>:</td>
          <th>{student?.name}</th>
        </tr>
        <tr>
          <td>Father’s Name</td>
          <td>:</td>
          <th>{student?.fatherName}</th>
        </tr>
        <tr>
          <td>DOB</td>
          <td>:</td>
          <th>{dateFormate(student?.dob)}</th>
        </tr>
        <tr>
          <td>Course Name</td>
          <td>:</td>
          <th>{student?.course}</th>
        </tr>
        <tr>
          <td>Course Duration</td>
          <td>:</td>
          <th>	{student?.duration}</th>
        </tr>
        <tr>
          <td>Result</td>
          <td>:</td>
          <th>{student?.percentage}%</th>
        </tr>
        <tr>
          <td>Status</td>
          <td>:</td>
          <th>{student?.status?.toUpperCase()}</th>
        </tr>
      </tbody>
    </table>
    <button className="btn btn-success mt-3"  onClick={() => window.print()}>
      Print
    </button>
    <button style={{marginLeft:10}} className="btn btn-warning mt-3"  onClick={() => router.push("/")}>
      Back to home
    </button>
  </div>:
  <div className="container text-center">
  <MaterialIcons iconName={"loader"}/>
  </div>
    
  );
};

export default Result;
