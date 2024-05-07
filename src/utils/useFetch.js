import {useState, useEffect} from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //1. get response from an api endpoint (url)
    fetch(url)
      //2. get an object response (res)
      .then(res => {
        if (!res.ok) {
          //2.1 if and error came back from server
          throw Error("could not fetch the data for that resource");
        }
        //2.2 if the response is ok, convert the json format
        //    to a js object format
        return res.json();
      })
      //2.2 -> 3. if no errors, use the data obtained
      //  to get states: pending, data, error
      .then(data => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch(err => {
        // if and error ocurrs
        setIsPending(false);
        setError(err.message);
      });
  }, [url]);

  return {data, isPending, error};
};

export default useFetch;
