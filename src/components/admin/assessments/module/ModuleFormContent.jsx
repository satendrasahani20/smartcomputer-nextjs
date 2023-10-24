import Table from "@/components/common/table/Table";
import { Box, TextField } from "@mui/material";
import QuestionTableBody from "../question/QuestionTableBody";
import { questionHeading } from "@/components/common/constant/Admin";
import { useEffect, useState } from "react";
import CustomModal from "@/components/common/modals/Modal";
import QuestionFormContent from "../question/QuestionFormContent";
import { useFormik } from "formik";
import {
  addModuleInitial,
  addQuestionInitial,
} from "@/components/common/constant/formInitialValue";
import {
  addModuleSchema,
  addQuestionSchema,
} from "@/components/common/constant/validationSchema";
import Confirm from "@/components/common/confirmation/Confirm";
import Button from "@/components/common/buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addModuleAction,
  addQuestionAction,
  deleteQuestionAction,
  getQuestionsAction,
  updateModuleAction,
  updateQuestionAction,
} from "@/service/action/admin";
import { useRouter } from "next/router";
import InputField from "@/components/common/InputField";
const ModuleContentForm = ({ editAddModule, setEditAddModule, getModules }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [questionDetail, setQuestionDetail] = useState({
    modal: false,
    edit: false,
  });
  const {
    isAddModule,
    isUpdateModule,
    isQuestionLoading,
    questionData,
    isAddNewQuestion,
    isUpdateQuestion,
  } = useSelector((state) => state.adminReducer);

  const moduleFormik = useFormik({
    initialValues: addModuleInitial,
    validationSchema: addModuleSchema,
    onSubmit: (values) => {
      if (editAddModule?.edit) {
        dispatch(updateModuleAction({ data: values, cb: addOrUpdateModule }));
      } else {
        delete values.edit;
        dispatch(addModuleAction({ data: values, cb: addOrUpdateModule }));
      }
    },
  });

  function addOrUpdateModule(res) {
    let moduleName = res?.data?.moduleName;
    let courseId = res?.data?.courseId;
    setEditAddModule({
      ...editAddModule,
      moduleName: res?.data?.moduleName,
      moduleId: res?.data?._id,
    });
    getModules({}, 1, res?.data?.courseId);
    moduleFormik.setValues({ moduleName, courseId, _id: res?.data?._id });
  }
  function getQuestions(response = {}, page = 1, moduleId = false) {
    dispatch(
      getQuestionsAction({
        push,
        moduleId: moduleId || editAddModule?.moduleId,
        pageData: { limit: 5, page },
      })
    );
  }

  useEffect(() => {
    if (editAddModule?.moduleId) {
      getQuestions({}, 1, editAddModule?.moduleId);
      let tempObj = {
        content: editAddModule?.data?.content,
        _id: editAddModule?.moduleId,
        moduleName: editAddModule?.data?.moduleName,
      };

      moduleFormik.setValues(tempObj);
    }
    if (editAddModule?.courseId) {
      //it means we shoud add new module
      moduleFormik.resetForm();
      moduleFormik.setValues({
        courseId: editAddModule?.courseId,
        edit: false,
      });
    }
  }, [editAddModule]);

  const questionFormik = useFormik({
    initialValues: addQuestionInitial,
    validationSchema: addQuestionSchema,
    onSubmit: (values) => {
      const data = {
        question: values.question,
        answer: values.answer,
        options: [
          values?.optionA,
          values?.optionB,
          values?.optionC,
          values?.optionD,
        ],
      };
      if (values?._id) {
        data._id = values?._id;
        dispatch(
          updateQuestionAction({
            data,
            moduleId: editAddModule?.moduleId,
            cb: addQuestionUpdate,
          })
        );
      } else {
        dispatch(
          addQuestionAction({
            data,
            moduleId: editAddModule?.moduleId,
            cb: addQuestionUpdate,
          })
        );
      }
    },
  });
  function addQuestionUpdate(res) {
    questionFormik.resetForm();
    getQuestions({}, 1, editAddModule?.moduleId);
    setQuestionDetail({ modal: false, edit: false });
  }

  const [deleteQuestion, setDeleteQuestion] = useState({
    modal: false,
    id: "",
  });

  const editQuestion = (data) => {
    questionFormik.resetForm();
    const tempData = {
      question: data?.question,
      optionA: data?.options?.[0],
      optionB: data?.options?.[1],
      optionC: data?.options?.[2],
      optionD: data?.options?.[3],
      answer: data?.answer,
      _id: data?._id,
    };
    questionFormik.setValues(tempData);
    setQuestionDetail({
      modal: true,
      edit: true,
    });
  };

  const deleteQuestionModal = (id) => {
    setDeleteQuestion({
      modal: true,
      questionId: id,
      moduleId: editAddModule?.moduleId,
    });
  };

  const callBackDelete = (res) => {
    setDeleteQuestion({})
    getQuestions();
  };

  const confirmDelete = () => {
    console.log("deleteQuestion",deleteQuestion)
    dispatch(
      deleteQuestionAction({
        questionId: deleteQuestion?.questionId,
        moduleId: deleteQuestion?.moduleId,
        cb: callBackDelete,
      })
    );
  };

  return (
    <>
      <Box sx={{ height: 550, marginTop: 1 }}>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <InputField
            name="moduleName"
            style={{ width: 210 }}
            formik={moduleFormik}
            label="Module Name"
            size="small"
          />
          <InputField
            name="content"
            style={{ width: 210 }}
            formik={moduleFormik}
            helperText="eg. 2 years, 6 month"
            sx={{ marginLeft: 1 }}
            label="Content"
            size="small"
          />
          <Button
            variant="contained"
            sx={{ marginLeft: 1 }}
            style={{ height: 40, backgroundColor: "#7b4ee9" }}
            label={editAddModule?.edit ? "Update" : "Add Module"}
            onClick={moduleFormik.handleSubmit}
            isLoading={isUpdateModule || isAddModule}
          />
          <Button
            size="small"
            variant="outlined"
            style={{ height: 40 }}
            sx={{ marginLeft: 1, borderColor: "#7b4ee9", color: "#7b4ee9" }}
            onClick={() => {
              questionFormik.resetForm();
              setQuestionDetail({ modal: true });
            }}
            iconName={"add"}
            label={"Question"}
          />
        </Box>
        <Table
          tableHeading={questionHeading}
          isDataLoading={isQuestionLoading}
          data={editAddModule?.moduleId ? questionData : {}}
          getData={getQuestions}
          tableBody={
            <QuestionTableBody
              detailBtn={editQuestion}
              editBtn={editQuestion}
              data={editAddModule?.courseId ? [] : questionData?.data}
              // it means we are coming for create new module
              onDelete={deleteQuestionModal}
            />
          }
        />
      </Box>
      <CustomModal
        open={questionDetail?.modal}
        content={() => <QuestionFormContent questionFormik={questionFormik} />}
        successBtnTitle={
          questionDetail?.edit ? "Update Question" : "Add Question"
        }
        onClose={() => setQuestionDetail({})}
        onCancel={() => setQuestionDetail({})}
        title={questionDetail?.edit ? "Update Question" : "Add New Question"}
        width={"50%"}
        onDone={questionFormik.handleSubmit}
        isSubmitLoading={isUpdateQuestion || isAddNewQuestion}
        // onDelete={deleteQuestionModal}
      />
      <Confirm
        open={deleteQuestion?.modal}
        title={"Are you sure you want to delete this Question?"}
        handleClose={() => setDeleteQuestion({})}
        onConfirm={confirmDelete}
      />
    </>
  );
};
export default ModuleContentForm;
