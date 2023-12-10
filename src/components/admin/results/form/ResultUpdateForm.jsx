import InputField from "@/components/common/InputField";
import Button from "@/components/common/buttons/Button";
import { Box } from "@mui/material";
import React from "react";

const ResultUpdateForm = ({ formik }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <InputField
          label="Test Id"
          name="testId"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          type="text"
          formik={formik}
          disabled={true}
        />
        <InputField
          label="Student Name"
          name="name"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
          disabled={true}
        />
        <InputField
          label="Course"
          name="courseName"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
          disabled={true}
        />
      </Box>
      <Box sx={{ display: "flex", mb: 3 }}>
        <InputField
          label="Max Mark"
          name="maxMark"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
          disabled={true}
        />
        <InputField
          label="Cutt-off Score"
          name="cuttOffScore"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
          disabled={true}
        />
        <InputField
          label="Obtained Score"
          name="obtainedScore"
          type="number"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <Button
          onClick={formik.handleSubmit}
          label={"Update"}
          variant="outlined"
          className="search-direct"
        />
      </Box>
    </>
  );
};

export default ResultUpdateForm;
