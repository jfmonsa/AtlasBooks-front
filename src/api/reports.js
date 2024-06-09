import axios from "./axios";

export const createReportApi = (reportInfo) => axios.post(`/reports`, reportInfo);