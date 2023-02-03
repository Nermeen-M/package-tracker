import { useParams } from "react-router-dom";

import PackageDetails from "../components/PackageDetails";
import MapWrapper from "../components/MapWrapper";

export default function PackageInformation({ packages }) {
  const params = useParams();
  const parcel = packages.find((item) => item.id == params.packageId);
  const { location_coordinate_latitude, location_coordinate_longitude } =
    parcel;
  return (
    <div>
      <PackageDetails parcel={parcel} />
      <MapWrapper
        lat={location_coordinate_latitude}
        lng={location_coordinate_longitude}
      />
    </div>
  );
}
