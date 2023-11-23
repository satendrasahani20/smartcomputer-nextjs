import api from "./apiInstance";

export const studentApi = {
    GET_STUDENT_COURSE: () => api.get("/student/course"),
    START_TEST:(payload)=>api.get(`/student/start-test/${payload?.courseId}`),
    UPDATE_TEST_ACTIVTY: (payload) => api.put("/student/test-activity",payload.data),
    SAVE_RESULT: (payload) => api.post("/student/result",payload.data),
    GET_RESULT: () => api.get("/student/get-result"),
    
    
};

