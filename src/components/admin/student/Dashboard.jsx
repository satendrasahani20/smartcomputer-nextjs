import {
  studentLists,
  studentTableHeading,
} from "@/components/common/constant/Admin";
import Table from "@/components/common/table/Table";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import StudentTableBody from "./StudentTableBody";
import CustomModal from "@/components/common/modals/Modal";
import RegistrationFormContent from "./RegistrationFormContent";

const StudentDashboard = () => {
  const [addStudent, setAddStudent] = useState({
    edit: false,
    modal: false,
  });
  return (
    <>
      <Box sx={{ position: "absolute", right: 14, marginTop: -6 }}>
        <Button
          size="small"
          variant="outlined"
          sx={{ borderColor: "white", color: "white" }}
          onClick={() => setAddStudent({ modal: true })}
        >
          Add Student
        </Button>
      </Box>
      <Table
        tableHeading={studentTableHeading}
        isDataLoading={false}
        getData={() => console.log("ddd")}
        tableBody={
          <StudentTableBody
            detailBtn={() => console.log("ddd")}
            editBtn={() => console.log("ddd")}
            data={studentLists}
          />
        }
      />

      <CustomModal
       open={addStudent?.modal}
       onClose={()=>setAddStudent({})}
       title={addStudent?.edit?"Upadate Student":"Add Student"}
       onDone={()=>setAddStudent({})}
       content={()=><RegistrationFormContent />}
       onCancel={()=>setAddStudent({})}
      />
    </>
  );
};

export default StudentDashboard;
