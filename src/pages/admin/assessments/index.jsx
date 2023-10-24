import Assessments from '@/components/admin/assessments/Assessments'
import AdminLayout from '@/components/layout/AdminLayout'
import React from 'react'

const index = () => {
  return <AdminLayout children={<Assessments/>}/>
}

export default index