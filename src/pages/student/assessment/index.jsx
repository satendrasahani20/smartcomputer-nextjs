const { default: AdminLayout } = require("@/components/layout/AdminLayout")
const { default: Assessment } = require("@/components/students/assessment/Assessment")

const AssessMnt=()=>{
    return <AdminLayout children={<Assessment/>}/>
}
export default AssessMnt;