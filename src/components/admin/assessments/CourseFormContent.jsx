import InputField from "@/components/common/InputField";
import { Box } from "@mui/material";
const CourseContent = ({ couserFormik }) => {
  return (
    <Box sx={{ height: 150, display: "flex" }}>
      <Box sx={{ margin: 1 }}>
        <InputField
          sx={{ marginTop: 1 }}
          fullWidth
          formik={couserFormik}
          name="name"
          label="Course Name"
          size="small"
        />
        <InputField
          sx={{ marginTop: 1 }}
          formik={couserFormik}
          name="duration"
          helperText="eg. 2 years, 6 month"
          fullWidth
          label="Duration"
          size="small"
        />
      </Box>
      <Box sx={{ margin: 1 }}>
        <InputField
          sx={{ marginTop: 1 }}
          formik={couserFormik}
          name="cuttOffScore"
          fullWidth
          label="Cutt-Off Score"
          size="small"
        />
        <InputField
          sx={{ marginTop: 1 }}
          formik={couserFormik}
          name="maxMark"
          fullWidth
          label="Max Mark"
          size="small"
        />
      </Box>
      <Box sx={{ margin: 1 }}>
        <InputField
          sx={{ marginTop: 1 }}
          formik={couserFormik}
          name="testTiming"
          fullWidth
          label="Test Timing"
          size="small"
        />
      </Box>
    </Box>
  );
};
export default CourseContent;
