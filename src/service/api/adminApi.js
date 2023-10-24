// Import api from "./apiInstance";
import api from "./apiInstance";
export const adminApi = {
    GET_ADMIN_COURSE: payload => api.get(`/admin/get-course?page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`),
    ADD_ADMIN_COURSE: payload => api.post(`/admin/course`,payload.data),
    UPDATE_ADMIN_COURSE: payload => api.put(`/admin/course/${payload?.data?._id}`,payload?.data),
    GET_MODULE_ACTION: payload => api.get(`/admin/modules/${payload?.courseId}?page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`),
    GET_QUETIONS_ACTION:payload => api.get(`/admin/questions/${payload?.moduleId}?page=${payload?.pageData?.page}&limit=${payload?.pageData?.limit}`),
    ADD_ADMIN_MODULE: payload => api.post(`/admin/modules`,payload.data),
    UPDATE_ADMIN_MODULE: payload => api.put(`/admin/modules/${payload?.data?._id}`,payload?.data),
    ADD_ADMIN_QUESTION: payload => api.post(`/admin/questions/${payload.moduleId}`,payload.data),
    UPDATE_ADMIN_QUESTION: payload => api.put(`/admin/questions/${payload.moduleId}/${payload?.data?._id}`,payload?.data),
    DELETE_ADMIN_QUESTION:payload=>api.delete(`/admin/questions/${payload?.moduleId}/${payload?.questionId}`)

    
};