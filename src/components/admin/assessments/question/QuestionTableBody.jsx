import IconButtons from '@/components/common/buttons/IconButton';
import { StyledTableCell, StyledTableRow } from '@/components/common/table/tableStyle';
import React from 'react'

const QuestionTableBody = ({data=[],editBtn,detailBtn,onDelete}) => {
  return (
    data?.map((row,index)=>row?.question && (
        <StyledTableRow key={index}
        onClick={()=>detailBtn(row)}
        >
        <StyledTableCell component="th" scope="row">
          {row?.question}
        </StyledTableCell>
        {
            row?.options?.map((item,id)=>(
                <StyledTableCell key={id}>{item}</StyledTableCell>
            ))
        }
      
        <StyledTableCell>{row?.answer}</StyledTableCell>
        <StyledTableCell>
          <IconButtons onClick={(e)=>{e.stopPropagation(); editBtn(row)}} lable={"edit"} />
        </StyledTableCell>
        <StyledTableCell>
          <IconButtons onClick={(e)=>{e.stopPropagation(); onDelete(row?._id)}} lable={"delete"} />
        </StyledTableCell>
      </StyledTableRow>
    ))
  )
}

export default QuestionTableBody