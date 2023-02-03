import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// import { getData } from "./scripts/storeData";
// import useFetch from "./services/useFetch";

import Header from "./components/layout/Header";
import Home from "./Pages/Home";
import PackageInformation from "./Pages/PackageInformation";
import Footer from "./components/layout/Footer";

import { usePackages } from "./state/PackagesContext";

import "./assets/styles/style.css";

export default function App() {
  const { packages } = usePackages();
  console.log(packages);
  // const [packages, setPackages] = useState([]);
  // const [loading, setLoading] = useState(null);
  // const [error, setError] = useState(null);

  // const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  // useEffect(() => {
  //   // getData(url).then((response) => {
  //   //   setPackages(response);
  //   //   localStorage.setItem("storedPackages", JSON.stringify(response));
  //   // });

  //   async function init() {
  //     try {
  //       const response = await fetch(url);
  //       if (response.ok) {
  //         const json = await response.json();
  //         setPackages(json);
  //         localStorage.setItem("backup", JSON.stringify(response));
  //       } else {
  //         throw response;
  //       }
  //     } catch (e) {
  //       var storedPackages = localStorage.getItem("backup");
  //       if (storedPackages != null) {
  //         setPackages(JSON.parse(storedPackages));
  //       } else {
  //         setError(e);
  //       }
  //       setError(e);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   init();
  // }, [url]);

  // const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  // const { data, error, loading } = useFetch(url);
  // console.log(packages);
  // console.log(error);
  // console.log(loading);

  return (
    <div className="App">
      <Header />
      {/* {loading && <p>Loading</p>}
      {error && <p>{error}</p>} */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/packages/:packageId" element={<PackageInformation />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}
