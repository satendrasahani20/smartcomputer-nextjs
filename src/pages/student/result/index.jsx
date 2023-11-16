const { default: AdminLayout } = require("@/components/layout/AdminLayout")
const { default: StudentResult } = require("@/components/students/result/StudentResult")

const Result=()=>{
    return <AdminLayout children={<StudentResult />} />
}
export default Result;