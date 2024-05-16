import useFetch from "../utils/useFetch";

export const ChangePass = (id) => useFetch(`http://localhost:3001/api/change-password/${id}`);

