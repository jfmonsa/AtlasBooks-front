import { useState, useEffect } from "react";
import { AtlasBooksAPIClient } from "@lib/api-client.js";

/**
 * Custom hook to fetch data from a given URL.
 *
 * This hook provides a way to fetch data from a specified URL using axios.
 * It manages the loading state, error state, and the fetched data.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} An object containing the fetched data, loading state, and error state.
 * @returns {any} return.data - The fetched data.
 * @returns {boolean} return.isPending - The loading state.
 * @returns {string|null} return.error - The error message, if any.
 */
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      setError(null);

      if (!url) {
        setIsPending(false);
        return;
      }

      try {
        const response = await AtlasBooksAPIClient.get(url, {
          signal: controller.signal,
        });
        setData(response.data);
      } catch (err) {
        // Verificar si es un error de cancelación
        if (err.name !== "CanceledError" || err.code !== "ERR_CANCELED") {
          setError(err.message);
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();

    // Cleanup function to cancel the request
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
}
