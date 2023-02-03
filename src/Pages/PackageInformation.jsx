import { useParams } from "react-router-dom";

import PackageDetails from "../components/PackageDetails";
import MapWrapper from "../components/MapWrapper";

import { usePackages } from "../state/PackagesContext";

import image from "../assets/images/package-information.png";

export default function PackageInformation() {
  const { packages } = usePackages();
  const params = useParams();
  const parcel = packages.find((item) => item.id == params.packageId);
  const { location_coordinate_latitude, location_coordinate_longitude } =
    parcel;

  return (
    <main id="package-info">
      <div className="banner">
        <img src={image} alt="Opened boxes" />
      </div>
      <div className="package-details">
        <PackageDetails />
        <MapWrapper
          lat={location_coordinate_latitude}
          lng={location_coordinate_longitude}
        />
      </div>
    </main>
  );
}
