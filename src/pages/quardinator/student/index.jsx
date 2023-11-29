import CentreQuardinatorLaout from '@/components/layout/CentreQuardinatorLaout'
import QuardinatorStudent from '@/components/quardinator/student/Dashboard'
import React from 'react'

const index = () => {
  return <CentreQuardinatorLaout children={<QuardinatorStudent  />}/>
}

export default index