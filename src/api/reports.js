import axios from "./axios";

export const createReportApi = reportInfo => axios.post(`/reports`, reportInfo);
export const getReportsApi = () => axios.get(`/reports/all`);
