import SearchField from '@/components/common/SearchField';
import { resultTableHeading } from '@/components/common/constant/Admin';
import Table from '@/components/common/table/Table';
import { Box, Button } from '@mui/material';
import React, { Fragment, useEffect, useRef, useState } from 'react'
import ResultTabelBody from './ResultTabelBody';
import { useDispatch } from 'react-redux';
import { getAllCertificate, updateCertificateAction } from '@/service/action/admin';
import ShowResult from '@/components/common/result/ShowResult';
import { Toaster } from '@/components/common/toaster/Toaster';
import CustomModal from '@/components/common/modals/Modal';
import UploadResultForm from './form/UploadResultForm';
import { useFormik } from 'formik';
import DirectUpdateFor from './form/DirectUpdateList';
import { debounce } from 'lodash';

const Result = () => {
  const [allStudent,setStudent]=useState({})
  const [search,setSearch]=useState("");
  const [showCertificate,setCertificate]=useState()
  const [resultModal,setResultModal]=useState(false)
  const [directUpdateModal,setDirectUpdateModal]=useState(false)
  const [pageData,setPageData]=useState({
    page:1,
    limit:10
  })
  const dispatch=useDispatch();

  function callBackGetResult(res){
   setStudent(res)
  }
  useEffect(()=>{
    dispatch(getAllCertificate({pageData,search,cb:callBackGetResult}))
  },[dispatch])
  const showResult=(data)=>{
    data?.certificateLink ? setCertificate(data?.certificateLink):Toaster.error("Please upload Certificate")
  }

  const resultFormik = useFormik({
    onSubmit: (values) => {
      dispatch(updateCertificateAction({data:values,cb:callBackResult}))
    },
  });

  function callBackResult(){
    dispatch(getAllCertificate({pageData,search,cb:callBackGetResult}))
    Toaster.success("Updated Certificate Successfully")
    resultFormik.resetForm()
    setResultModal(false)
  }
  const uploadResult=(row)=>{
    resultFormik.setValues({ 
      certificateLink:row?.certificateLink,
      studentId:row?.studentId,
      courseId:row?.courseId,
      testId:row?.testId,
     });
    setResultModal(true)
  }
  const updateStatus=(row)=>{
    if(!row?.certificateLink){
      Toaster.error("Please Upload Certificate")
      return false
    }
    let tempObj={ 
      certificateLink:row?.certificateLink,
      studentId:row?.studentId,
      testId:row?.testId,
      isApproved:!row?.isApproved
     }
    dispatch(updateCertificateAction({data:tempObj,cb:callBackResult}))
  }
  const debounced = useRef(
    debounce((search, page) => {
      dispatch(getAllCertificate({...page,search,cb:callBackGetResult}))
    }, 1000)
  );
  useEffect(() => {
    debounced.current.cancel();
    debounced.current(search, 1);
  }, [search]);

  return (
    <Fragment>
      <CustomModal
        open={resultModal}
        content={()=><UploadResultForm  formik={resultFormik}/>}
        onClose={()=>setResultModal(false)}
      />
      <CustomModal
       content={()=><DirectUpdateFor />}
       open={directUpdateModal}
       onClose={()=>setDirectUpdateModal(false)}
       onCancel={()=>setDirectUpdateModal(false)}
      />
      <ShowResult
         open={showCertificate}
         close={()=>setCertificate("")}
         imageLink={showCertificate}
      />
      <Box sx={{ position: "absolute", right: 14, marginTop: -6 }}>
      <SearchField search={search} setSearch={setSearch} />
      <Button
          size="small"
          variant="outlined"
          sx={{ borderColor: "white", color: "white" }}
          onClick={() => {
            setDirectUpdateModal(true)
          }}
        >
          Direct Result Update
        </Button>
      </Box>
      <Table
        tableHeading={resultTableHeading}
        isDataLoading={false}
        // getData={getQuardinater}
        data={allStudent}
        tableBody={
          <ResultTabelBody
            // detailBtn={editQuardinater}
            // editBtn={editQuardinater}
            updateStatus={updateStatus}
            data={allStudent?.data}
            showResult={showResult}
            editBtn={uploadResult}
          /> 
         }
          />
    
    </Fragment>
  )
}

export default Result