import { useState, useEffect, createContext, useContext } from "react";

// import CategoriesData from "../data/categories.json";

const PackagesContext = createContext(null);

export function PackagesProvider(props) {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const packages = CategoriesData;

  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  useEffect(() => {
    // getData(url).then((response) => {
    //   setPackages(response);
    //   localStorage.setItem("storedPackages", JSON.stringify(response));
    // });

    async function init() {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const json = await response.json();
          setPackages(json);
          localStorage.setItem(
            "instaPacket_storedPackages",
            JSON.stringify(json)
          );
        } else {
          throw response;
        }
      } catch (e) {
        var storedPackages = localStorage.getItem("instaPacket_storedPackages");
        if (storedPackages != null) {
          setPackages(JSON.parse(storedPackages));
        } else {
          setError(e);
        }
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  function getPackageById(packageId) {
    const parcel = packages.filter((item) => item.id == packageId)[0];
    return parcel;
  }

  const contextValue = { packages, error, loading, getPackageById };

  return (
    <PackagesContext.Provider value={contextValue}>
      {props.children}
    </PackagesContext.Provider>
  );
}

export function usePackages() {
  const context = useContext(PackagesContext);

  const errorMessage = "To use The Packages Context import it on index.js";

  if (!context) throw new Error(errorMessage);

  return context;
}
