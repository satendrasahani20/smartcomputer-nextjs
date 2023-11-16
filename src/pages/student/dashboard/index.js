import AdminLayout from '@/components/layout/AdminLayout'
import Dashboard from '@/components/students/dashboard/Dashboard'
import React from 'react'

const index = () => {
  return <AdminLayout children={<Dashboard/>}/>
}

export default index