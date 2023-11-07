import AdminLayout from '@/components/layout/AdminLayout'
import Quardinator from '@/components/admin/quardinator/Quardinator'
import React from 'react'

const Quardinate = () => {
  return <AdminLayout children={<Quardinator/>}/>
}

export default Quardinate