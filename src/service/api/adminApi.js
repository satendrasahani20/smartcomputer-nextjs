// Import api from "./apiInstance";
import api from "./apiInstance";
export const adminApi = {
  GET_ADMIN_COURSE: (payload) =>
    api.get(
      `/admin/get-course?page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`
    ),
  ADD_ADMIN_COURSE: (payload) => api.post(`/admin/course`, payload.data),
  UPDATE_ADMIN_COURSE: (payload) =>
    api.put(`/admin/course/${payload?.data?._id}`, payload?.data),
  GET_MODULE_ACTION: (payload) =>
    api.get(
      `/admin/modules/${payload?.courseId}?page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`
    ),
  GET_QUETIONS_ACTION: (payload) =>
    api.get(
      `/admin/questions/${payload?.moduleId}?page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`
    ),
  ADD_ADMIN_MODULE: (payload) => api.post(`/admin/modules`, payload.data),
  UPDATE_ADMIN_MODULE: (payload) =>
    api.put(`/admin/modules/${payload?.data?._id}`, payload?.data),
  ADD_ADMIN_QUESTION: (payload) =>
    api.post(`/admin/questions/${payload.moduleId}`, payload.data),
  UPDATE_ADMIN_QUESTION: (payload) =>
    api.put(
      `/admin/questions/${payload.moduleId}/${payload?.data?._id}`,
      payload?.data
    ),
  DELETE_ADMIN_QUESTION: (payload) =>
    api.delete(`/admin/questions/${payload?.moduleId}/${payload?.questionId}`),
  STUDENT_REGSITER: (payload) =>
    api.post("/admin/student/register", payload?.data),
  STUDENT_LISTS: (payload) =>
    api.get(
      `/admin/student/lists?role=${payload.role}&search=${payload.search}&page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`
    ),
  UPDATE_STUDENT: (payload) =>
    api.put(`/admin/student/update/${payload?.studentId}`, payload?.data),
  DELETE_STUDENT: (payload) =>
    api.delete(`/admin/student/${payload?.studentId}`, payload?.data),
  ADD_CENTRE: (payload) => api.post("/admin/centre", payload?.data),
  GET_CENTRE: (payload) =>
    api.get(
      `/admin/centre?search=${payload.search}&page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`
    ),
  UPDATE_CENTRE: (payload) =>
    api.put(`/admin/centre/${payload.centreId}`, payload?.data),
  DELETE_CENTRE: (payload) => api.delete(`/admin/centre/${payload?.centreId}`),
  GET_ALL_CERTIFICATE: (payload) =>
    api.get(
      `/admin/get-all-certificate?page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}&search=${payload?.search}`
    ),
  DIRECT_RESULT_UPDATE: (payload) =>
    api.put(`/admin/update-result`, payload?.data),
  UPDATE_CERTIFICATE: (payload) =>
    api.put(`/admin/update-certificate`, payload?.data),
};
