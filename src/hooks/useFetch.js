import { useEffect } from "react";
import axios from "axios";

export const useFetch = ({ url, setLoading, setError, setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await axios
        .get(url)
        .then((res) => {
          setLoading(false);
          console.log(res);
          setData(res);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    };

    setTimeout(() => {
      fetchData();
    }, [2000]);

    fetchData();
  }, [url]);
};
