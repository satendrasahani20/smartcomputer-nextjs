import InputField from "@/components/common/InputField";
import SelectBox from "@/components/common/SelectBox";
import { Box } from "@mui/material";
const QuestionFormContent = ({ questionFormik }) => {
    const optionDropDown=[
        questionFormik?.values?.optionA,
        questionFormik?.values?.optionB,
        questionFormik?.values?.optionC,
        questionFormik?.values?.optionD,
    ]
  return (
    <>
      <Box sx={{ marginTop: 1 }}>
        <Box sx={{ marginBottom: 1, marginRight: 2 }}>
          <InputField
            sx={{ marginLeft: 2 }}
            fullWidth
            label="Question Name"
            size="small"
            name="question"
            formik={questionFormik}
          />
        </Box>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <InputField
            sx={{ marginLeft: 2 }}
            name="optionA"
            formik={questionFormik}
            label="Option A"
            size="small"
          />
          <InputField
            sx={{ marginLeft: 1 }}
            name="optionB"
            formik={questionFormik}
            label="Option B"
            size="small"
          />
          <InputField
            sx={{ marginLeft: 1 }}
            name="optionC"
            formik={questionFormik}
            label="Option C"
            size="small"
          />
          <InputField
            sx={{ marginLeft: 1 }}
            name="optionD"
            formik={questionFormik}
            label="Option D"
            size="small"
          />
        </Box>
        <Box sx={{ margin: 1 }}>
          <SelectBox label={"Answer"} name="answer" formik={questionFormik} listItem={optionDropDown} />
        </Box>
      </Box>
    </>
  );
};
export default QuestionFormContent;
