import { Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Home from "./Pages/Home";
import PackageInformation from "./Pages/PackageInformation";
import Profile from "./Pages/Profile";
import Footer from "./components/layout/Footer";
import LoadingScreen from "./components/layout/LoadingScreen";

import { usePackages } from "./state/PackagesContext";

import "./assets/styles/style.css";

export default function App() {
  const { error, loading } = usePackages();

  return (
    <div className="App">
      <Header />
      {loading && <LoadingScreen />}
      {error && <p>{error}</p>}
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/packages/:packageId" element={<PackageInformation />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
