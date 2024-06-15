import {useState, useEffect} from "react";
import axios from "../api/axios.js";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      setError(null);

      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsPending(false);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };

    fetchData();
  }, [url]);

  return {data, isPending, error};
};

export default useFetch;
