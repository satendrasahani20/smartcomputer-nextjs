import * as Yup from "yup"; 
export const addQuestionSchema = Yup.object().shape({
    question: Yup.string().required("Question Name is required"),
    optionA: Yup.string().required("Option A is required"),
    optionB: Yup.string().required("Option B is required"),
    optionC: Yup.string().required("Option C is required"),
    optionD: Yup.string().required("Option D is required"),
    answer: Yup.string().required("Answer is required"),
  });
  export const loginSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password  is required"),
  });
  export const addCourseSchema=Yup.object({
    name: Yup.string().required("Course Name is required"),
    duration: Yup.string().required("Duration Name is required"),
    cuttOffScore: Yup.number().required("Cut-Off Score is required"),
    maxMark: Yup.number().required("Max Mark is required"),
    testTiming: Yup.number().required("Test Timing is required"),
  })
  export const addModuleSchema = Yup.object().shape({
    moduleName: Yup.string().required("Module Name is required"),
    content: Yup.string().required("Content  is required"),
  });