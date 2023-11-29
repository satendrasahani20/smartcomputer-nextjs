import SearchField from '@/components/common/SearchField';
import { resultTableHeading } from '@/components/common/constant/Admin';
import Table from '@/components/common/table/Table';
import { Box } from '@mui/material';
import React, { Fragment, useState } from 'react'
import ResultTabelBody from './ResultTabelBody';

const Result = () => {
  const [search,setSearch]=useState("")
  const resultData=
    [
      {
        name:"Satendra",
        certificate:"",
        blocked:true,
      },
      {
        name:"Aditya",
        certificate:"",
        blocked:false,
      }
    ]
  
  return (
    <Fragment>
      <Box sx={{ position: "absolute", right: 14, marginTop: -6 }}>
      <SearchField search={search} setSearch={setSearch} />
      </Box>
      <Table
        tableHeading={resultTableHeading}
        isDataLoading={false}
        // getData={getQuardinater}
        // data={studentLists}
        tableBody={
          <ResultTabelBody
            // detailBtn={editQuardinater}
            // editBtn={editQuardinater}
            data={resultData}
          /> 
         }
          />
    
    </Fragment>
  )
}

export default Result