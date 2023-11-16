import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

import InputField from "@/components/common/InputField";
import SelectBox from "@/components/common/SelectBox/SelectBox";
import { useSelector } from "react-redux";

const Form = ({ formik }) => {
  const { courseData } = useSelector((state) => state.adminReducer);
  const [corseLists, setCourseLists] = useState([]);

  useEffect(() => {
    let tempArr = [];
    if (courseData?.data) {
      courseData?.data?.map((itm) => {
        tempArr.push({ value: itm?._id, label: itm?.name });
      });
    }
    setCourseLists(tempArr);
  }, [courseData]);
  return (
    <Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField
          label="State"
          name="userState"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField
          label="District"
          name="userCity"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Address"
          name="userAddress"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Pincode"
          name="userPincode"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Qualification"
          name="userQualification"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
      <Box sx={{ display: "flex", alignContent: "center" }}>
        <InputField
          label="Password"
          name="password"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          sx={{ marginLeft: 1, marginTop: 2 }}
          size="small"
          formik={formik}
        />
      </Box>
      <Box sx={{ margin: 1, mt: 2, width: 600 }}>
        <SelectBox
          formik={formik}
          label={"Select Course"}
          name={"userCourse"}
          listItem={corseLists}
          multiple={true}
        />
      </Box>
    </Box>
  );
};

export default Form;
