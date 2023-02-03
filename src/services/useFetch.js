import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setPackages(json);
          //   localStorage.setItem("storedPackages", JSON.stringify(response));
        } else {
          throw response;
        }
      } catch (e) {
        // if (storedPackages != null) {
        //     setData(JSON.parse(storedPackages));
        //   } else {
        //     setError(e);
        //   }
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return { packages, error, loading };
}

// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading("loading...");
//     setData(null);
//     setError(null);
//     const source = axios.CancelToken.source();
//     axios
//       .get(url, { cancelToken: source.token })
//       .then((res) => {
//         setLoading(false);
//         //checking for multiple responses for more flexibility
//         //with the url we send in.
//         res.data.content && setData(res.data.content);
//         res.content && setData(res.content);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError("An error occurred. Awkward..");
//       });
//     return () => {
//       source.cancel();
//     };
//   }, [url]);

//   return { data, loading, error };
// }
