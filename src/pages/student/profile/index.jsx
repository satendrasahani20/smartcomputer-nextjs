const { default: AdminLayout } = require("@/components/layout/AdminLayout")
const { default: StudentResult } = require("@/components/students/result/StudentResult")

const Profile=()=>{
    return <AdminLayout children={<StudentResult/>} />
}
export default Profile;