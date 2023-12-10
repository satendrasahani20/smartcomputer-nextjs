import React from 'react'
import CustomModal from '../modals/Modal'

const ShowResult = ({imageLink,open,close}) => {
    const content=()=>(
        <div className='student-result' style={{position:"relative"}}>
            <img src={imageLink} style={{width: "100%"}}/>
        </div>
    )
  return (
    <CustomModal
      open={open}
      content={content}
      onClose={close}
    />
  )
}

export default ShowResult