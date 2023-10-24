import {
  AssessmentConstant,
  ModuleConstant,
  courseHeading,
  moduleHeading,
} from "@/components/common/constant/Admin";
import Table from "@/components/common/table/Table";
import React, { useEffect, useState } from "react";
import CourseTableBody from "./CourseTableBody";
import { Box, Button } from "@mui/material";
import CustomModal from "@/components/common/modals/Modal";
import CourseFormContent from "./CourseFormContent";
import ModuleTableBody from "./module/ModuleTableBody";
import ModuleContentForm from "./module/ModuleFormContent";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { addCourseAction, getCourse, getModulesAction } from "@/service/action/admin";
import { useFormik } from "formik";
import { addCourseInitial } from "@/components/common/constant/formInitialValue";
import { addCourseSchema } from "@/components/common/constant/validationSchema";

const Assessments = () => {
  const dispatch = useDispatch();
  const { isCourseLoading, courseData,isModuleLoading,moduleData } = useSelector(
    (state) => state.adminReducer
  );
  const [coursePage, setCoursePage] = useState({
    limit: 10,
    page: 1,
  });

  const [courseDetail, setCourseDetail] = useState({
    modal: false,
    edit: false,
  });

  const couserFormik = useFormik({
    initialValues: addCourseInitial,
    validationSchema: addCourseSchema,
    onSubmit:(data)=>{
      courseDetail.edit?
      dispatch(updateCourseAction({data,cb:getCourses}))
      :dispatch(addCourseAction({data,cb:getCourses}))
    }
  });
  function getCourses(response={},page=1){
    dispatch(getCourse({ pageData: {...coursePage,page}, push }));
    setCourseDetail({})
    couserFormik.resetForm();
  }
  const [moduleDetail, setModuleDetail] = useState({
    modal: false,
  });

  function getModules(response={},page=1,courseId=false){
   dispatch(getModulesAction({push,courseId:courseId||moduleDetail?.courseId,pageData: {limit:6,page}}))
  }

  const { push } = useRouter();

  useEffect(() => {
    getCourses()
  }, []);

 
  const editCourse = (data) => {
    couserFormik.setValues(data)
    setCourseDetail({
      modal: true,
      edit: true,
      data,
    });
  };


  const [editAddModule, setEditAddModule] = useState({
    edit: false,
    modal: false,
  });


  const openModuleDetail = (data) => {
    getModules({},1,data?._id)
    setModuleDetail({
      modal: true,
      data,
      courseId:data?._id,
      courseName:data.name
    });
  };
  const addNewModule=()=>{
    setEditAddModule({
      modal:true,
      module,
      edit:false,
      courseId:moduleDetail?.courseId
    })
  }


  const editModule = (data) => {
    setEditAddModule({
      edit: true,
      modal: true,
      data,
      moduleName:data?.moduleName,
      moduleId:data?._id,
      content:data?.content
    });

  };



  return (
    <>
      <Box sx={{ position: "absolute", right: 14, marginTop: -6 }}>
        <Button
          size="small"
          variant="outlined"
          sx={{ borderColor: "white", color: "white" }}
          onClick={() => setCourseDetail({ modal: true })}
        >
          Add New Course
        </Button>
      </Box>
      <Table
        tableHeading={courseHeading}
        isDataLoading={isCourseLoading}
        data={courseData}
        getData={getCourses}
        tableBody={
          <CourseTableBody
            detailBtn={openModuleDetail}
            editBtn={editCourse}
            data={courseData?.data}
          />
        }
      />
      <CustomModal
        open={courseDetail?.modal}
        content={() => <CourseFormContent couserFormik={couserFormik}/>}
        successBtnTitle={courseDetail?.edit ? "Update Course" : "Add Course"}
        onClose={() =>{couserFormik.resetForm(); setCourseDetail({})}}
        onCancel={() =>{couserFormik.resetForm(); setCourseDetail({})}}
        onDone={couserFormik.handleSubmit}
        title={courseDetail?.edit ? "Update Course" : "Add New Course"}
      />

      <CustomModal
        open={moduleDetail?.modal}
        successBtnTitle="Add New Module"
        onDone={addNewModule}
        content={() => (
          <Table
            tableHeading={moduleHeading}
            isDataLoading={isModuleLoading}
            data={moduleData}
            getData={getModules}
            tableBody={
              <ModuleTableBody
                detailBtn={()=>console.log("module detail")}
                editBtn={editModule}
                data={moduleData?.data}
                
              />
            }
          />
        )}
        onClose={() => setModuleDetail({})}
        onCancel={() => setModuleDetail({})}
        title={moduleDetail?.courseName}
      />

      <CustomModal
        open={editAddModule?.modal}
        // successBtnTitle={"Add New Module"}
        width="55%"
        content={() => (
          <ModuleContentForm getModules={getModules} editAddModule={editAddModule} setEditAddModule={setEditAddModule} />
        )}
        onClose={() => setEditAddModule({})}
        onCancel={() => setEditAddModule({})}
        title={editAddModule?.moduleName || "Please Add Module"}
      />
    </>
  );
};

export default Assessments;
