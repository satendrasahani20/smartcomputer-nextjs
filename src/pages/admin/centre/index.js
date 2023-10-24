import Centre from '@/components/admin/centre/Centre'
import AdminLayout from '@/components/layout/AdminLayout'
import React from 'react'

const index = () => {
  return <AdminLayout children={<Centre/>}/>
}

export default index