import StudentDashboard from '@/components/admin/student/Dashboard'
import AdminLayout from '@/components/layout/AdminLayout'
import React from 'react'

const index = () => {
  return  <AdminLayout children={<StudentDashboard/>}/>
}

export default index