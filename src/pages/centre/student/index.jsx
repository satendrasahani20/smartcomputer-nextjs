import CentreStudent from '@/components/centre/student/Dashboard'
import CentreQuardinatorLaout from '@/components/layout/CentreQuardinatorLaout'
import React from 'react'

const index = () => {
  return <CentreQuardinatorLaout children={<CentreStudent />}/>
}

export default index