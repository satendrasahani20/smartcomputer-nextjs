import AdminLayout from '@/components/layout/AdminLayout'
import StudentIcard from '@/components/students/i-card/StudentIcard'
import React from 'react'

const Icard = () => {
  return <AdminLayout children={<StudentIcard  />} />
}

export default Icard