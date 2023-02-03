import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./Pages/Home";
import PackageInformation from "./Pages/PackageInformation";
import Footer from "./components/layout/Footer";

import "./assets/styles/style.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* {loading && <p>Loading</p>}
      {error && <p>{error}</p>} */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/packages/:packageId" element={<PackageInformation />} />
      </Routes>
      <Footer />
    </div>
  );
}
