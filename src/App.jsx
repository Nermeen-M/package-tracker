import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import { getData } from "./scripts/storeData";

import Home from "./Pages/Home";
import PackageInformation from "./Pages/PackageInformation";

import "./assets/styles/style.css";

export default function App() {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    getData("https://my.api.mockaroo.com/insta-orders.json?key=e49e6840").then(
      (response) => {
        setPackages(response);
      }
    );
  }, []);

  return (
    <div className="App">
      <h1>Package tracker</h1>
      <Routes>
        <Route path="/" element={<Home packages={packages} />} exact />
        <Route
          path="/packages/:packageId"
          element={<PackageInformation packages={packages} />}
        />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}
