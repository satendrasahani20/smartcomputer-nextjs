import Profile from '@/components/admin/profile/Profile'
import AdminLayout from '@/components/layout/AdminLayout'
import React from 'react'

const index = () => {
  return <AdminLayout children={<Profile/>}/>
}

export default index