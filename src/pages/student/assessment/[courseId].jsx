import AdminLayout from '@/components/layout/AdminLayout'
import TestScreen from '@/components/students/assessment/TestScreen'
import React from 'react'

const Screen = () => {
  return <AdminLayout children={<TestScreen/>} />
}

export default Screen